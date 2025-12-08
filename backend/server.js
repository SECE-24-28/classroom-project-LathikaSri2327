const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(express.json());

// Dummy user data
const users = [
    { id: 1, email: 'user@test.com', password: '123456', name: 'Test User', mobile: '9876543210' }
];

// Dummy plans data
const plans = [
    { id: 1, amount: 199, data: '1.5GB/Day', validity: '28 Days', calls: 'Unlimited' },
    { id: 2, amount: 299, data: '2GB/Day', validity: '28 Days', calls: 'Unlimited' },
    { id: 3, amount: 399, data: '2.5GB/Day', validity: '28 Days', calls: 'Unlimited' },
    { id: 4, amount: 599, data: '3GB/Day', validity: '56 Days', calls: 'Unlimited' },
    { id: 5, amount: 999, data: '3GB/Day', validity: '84 Days', calls: 'Unlimited' },
    { id: 6, amount: 1499, data: '4GB/Day', validity: '84 Days', calls: 'Unlimited' }
];

// Login API
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        res.json({ success: true, message: 'Login successful', user: { id: user.id, name: user.name, email: user.email } });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Register API
app.post('/api/register', (req, res) => {
    const { name, email, mobile, password } = req.body;
    const existingUser = users.find(u => u.email === email);
    
    if (existingUser) {
        res.status(400).json({ success: false, message: 'User already exists' });
    } else {
        const newUser = { id: users.length + 1, email, password, name, mobile };
        users.push(newUser);
        res.json({ success: true, message: 'Registration successful' });
    }
});

// Get Plans API
app.get('/api/plans', (req, res) => {
    res.json({ success: true, plans });
});

// Payment API
app.post('/api/payment', (req, res) => {
    const { mobile, planId, amount } = req.body;
    const plan = plans.find(p => p.id === planId);
    
    if (plan) {
        res.json({ 
            success: true, 
            message: 'Payment successful', 
            transaction: { 
                id: Math.random().toString(36).substr(2, 9),
                mobile,
                amount,
                plan: plan.data,
                validity: plan.validity
            }
        });
    } else {
        res.status(400).json({ success: false, message: 'Invalid plan' });
    }
});

// Allow all routes
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('All CORS and access restrictions removed');
});