# Day 7 Assignment - Mobile Recharge App

## Assignment Requirements ✅

### 1. Tailwind CSS Setup
- ✅ Tailwind CSS configured with custom colors
- ✅ Responsive design with utility classes
- ✅ Custom color palette: #604652, #735557, #97866A, #D29F80

### 2. Props Usage
- ✅ Header: receives `title` prop
- ✅ OperatorCard: receives `operator`, `isSelected`, `onSelect` props
- ✅ RechargeForm: receives `operators` prop
- ✅ RechargeHistory: receives `limit` prop

### 3. State with useState
- ✅ RechargeForm: phone, amount, selectedOperator state
- ✅ Header: theme toggle state
- ✅ Interactive form handling and validation

### 4. Context API
- ✅ AppContext: manages user, theme, recharges
- ✅ useAppContext: custom hook for consuming context
- ✅ AppProvider: wraps entire application

### 5. Component Structure
```
src/
├── components/
│   ├── Header.js
│   ├── OperatorCard.js
│   ├── RechargeForm.js
│   └── RechargeHistory.js
├── context/
│   └── AppContext.js
├── pages/
│   └── HomePage.js
└── App.js
```

### 6. App Integration
- ✅ All components integrated in App.jsx
- ✅ Context provider wrapping application
- ✅ Props, state, and context demonstrated

## Installation
```bash
npm install
npm start
```