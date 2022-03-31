import { useEffect, useState } from 'react';
import './App.css';
import gitHublogo from './assets/GitHub.png';

function App() {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setLoading(false);
      });
  }, []);

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setLoading(false);
      });
  };

  return (
    <main className="main">
      <section className="header">
        <h1>Random advice generator</h1>
        <button onClick={() => fetchAdvice()}>New advice</button>
      </section>
      <section className="main-section">
        <div className="corner corner-tl"></div>
        <div className="corner corner-tr"></div>
        {loading && (
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        )}
        {advice && advice}
        <div className="corner corner-br"></div>
        <div className="corner corner-bl"></div>
      </section>
      <div className="link">
        <a
          href="https://github.com/seerat89/random-advice-generator"
          rel="noreferrer"
          target="_blank"
        >
          <img src={gitHublogo} alt="GitHub Logo" />
        </a>
      </div>
      <footer>Taking photos with tablet devices looks weird.</footer>
    </main>
  );
}

export default App;
