import React, { useState, useEffect } from 'react';
import './style.css'; // Importar o arquivo CSS

const AdviceComponent = () => {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setAdvice(data.slip.advice))
      .catch(error => console.error('Error fetching advice:', error));
  }, []);

  return (
    <div>
      <h2>Advice of the Day:</h2>
      <p>{advice}</p>
    </div>
  );
};

export { AdviceComponent };
