import express from 'express';
import jwt from 'jsonwebtoken';
import Stripe from 'stripe';

const app = express();
const stripe = new Stripe('your_secret_key');

app.use(express.json());

// Auth routes
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  // In a real app, validate credentials against database
  const token = jwt.sign({ email }, 'your_jwt_secret');
  res.json({ token, user: { email } });
});

// Payment routes
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { serviceType } = req.body;
    
    // In a real app, fetch price from database based on service type
    const amount = 5000; // $50.00

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});