import { useState } from 'react';

export default function GuessGame() {
  const [target] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 100');
  const [attempts, setAttempts] = useState(0);
  const [won, setWon] = useState(false);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage('Please enter a valid number between 1 and 100');
      return;
    }

    setAttempts(attempts + 1);

    if (num === target) {
      setMessage(`🎉 Correct! You won in ${attempts + 1} attempts!`);
      setWon(true);
    } else if (num < target) {
      setMessage('📈 Too low! Try higher');
    } else {
      setMessage('📉 Too high! Try lower');
    }
    setGuess('');
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{background: 'linear-gradient(to bottom right, #540863, #92487A)'}}>
      <div className="rounded-2xl shadow-2xl p-12 max-w-2xl w-full" style={{backgroundColor: '#FFD3D5'}}>
        <h1 className="text-6xl font-bold text-center mb-4" style={{color: '#540863'}}>Guess the Number</h1>
        <p className="text-center text-2xl mb-8" style={{color: '#92487A'}}>Between 1 and 100</p>
        
        <div className="mb-8">
          <p className="text-center text-2xl font-semibold p-6 rounded-lg" style={{
            backgroundColor: won ? '#E49BA6' : '#FFD3D5',
            color: '#540863',
            border: '2px solid #E49BA6'
          }}>
            {message}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-center text-xl" style={{color: '#92487A'}}>Attempts: {attempts}</p>
        </div>

        {!won ? (
          <div className="space-y-4">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleGuess()}
              className="w-full px-6 py-5 text-2xl text-center rounded-lg focus:outline-none"
              style={{border: '2px solid #E49BA6', color: '#540863'}}
              placeholder="Enter your guess"
              min="1"
              max="100"
            />
            <button
              onClick={handleGuess}
              className="w-full text-white font-bold py-5 px-6 rounded-lg transition duration-200 text-2xl"
              style={{backgroundColor: '#92487A'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#540863'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#92487A'}
            >
              Submit Guess
            </button>
          </div>
        ) : (
          <button
            onClick={reset}
            className="w-full text-white font-bold py-5 px-6 rounded-lg transition duration-200 text-2xl"
            style={{backgroundColor: '#E49BA6'}}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#92487A'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#E49BA6'}
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
}
