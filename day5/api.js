// Mock API for Sky Recharge Application
class MockAPI {
    constructor() {
        this.baseURL = 'mock://api';
        this.delay = 1000; // Simulate network delay
    }

    // Simulate API delay
    async delay(ms = this.delay) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Mock Login API
    async login(email, password) {
        await this.delay();
        
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            return {
                success: true,
                message: 'Login successful',
                data: { id: user.id, name: user.name, email: user.email },
                token: 'mock_token_' + Math.random().toString(36).substr(2, 9)
            };
        } else {
            return {
                success: false,
                message: 'Invalid email or password',
                error: 'INVALID_CREDENTIALS'
            };
        }
    }

    // Mock Register API
    async register(userData) {
        await this.delay();
        
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const existingUser = users.find(u => u.email === userData.email);
        
        if (existingUser) {
            return {
                success: false,
                message: 'User already exists with this email',
                error: 'USER_EXISTS'
            };
        }
        
        const newUser = {
            id: users.length + 1,
            ...userData,
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        return {
            success: true,
            message: 'Registration successful',
            data: { id: newUser.id, name: newUser.name, email: newUser.email }
        };
    }

    // Mock Get Plans API
    async getPlans() {
        await this.delay(500);
        
        const plans = [
            { id: 1, amount: 199, data: '1.5GB/Day', validity: '28 Days', calls: 'Unlimited', type: 'Popular' },
            { id: 2, amount: 299, data: '2GB/Day', validity: '28 Days', calls: 'Unlimited', type: 'Recommended' },
            { id: 3, amount: 399, data: '2.5GB/Day', validity: '28 Days', calls: 'Unlimited', type: 'Premium' },
            { id: 4, amount: 599, data: '3GB/Day', validity: '56 Days', calls: 'Unlimited', type: 'Long Term' },
            { id: 5, amount: 999, data: '3GB/Day', validity: '84 Days', calls: 'Unlimited', type: 'Best Value' },
            { id: 6, amount: 1499, data: '4GB/Day', validity: '84 Days', calls: 'Unlimited', type: 'Premium Plus' }
        ];
        
        return {
            success: true,
            message: 'Plans fetched successfully',
            data: plans
        };
    }

    // Mock Payment API
    async processPayment(paymentData) {
        await this.delay(2000); // Longer delay for payment processing
        
        // Simulate payment success/failure (90% success rate)
        const isSuccess = Math.random() > 0.1;
        
        if (isSuccess) {
            const transaction = {
                id: 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase(),
                mobile: paymentData.mobile,
                amount: paymentData.amount,
                planId: paymentData.planId,
                status: 'SUCCESS',
                timestamp: new Date().toISOString(),
                gateway: 'MockPay'
            };
            
            // Store transaction
            const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
            transactions.push(transaction);
            localStorage.setItem('transactions', JSON.stringify(transactions));
            
            return {
                success: true,
                message: 'Payment successful! Recharge completed.',
                data: transaction
            };
        } else {
            return {
                success: false,
                message: 'Payment failed. Please try again.',
                error: 'PAYMENT_FAILED'
            };
        }
    }

    // Mock Get Transactions API
    async getTransactions(userId) {
        await this.delay(500);
        
        const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
        
        return {
            success: true,
            message: 'Transactions fetched successfully',
            data: transactions
        };
    }

    // Mock Check Balance API
    async checkBalance(mobile) {
        await this.delay(800);
        
        const balance = {
            mobile: mobile,
            mainBalance: Math.floor(Math.random() * 500) + 50,
            dataBalance: Math.floor(Math.random() * 5000) + 1000 + 'MB',
            validity: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()
        };
        
        return {
            success: true,
            message: 'Balance fetched successfully',
            data: balance
        };
    }
}

// Create global instance
window.mockAPI = new MockAPI();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MockAPI;
} 