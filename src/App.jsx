import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="hero">
        <div className="hero-content">
          <p className="eyebrow">THE FUTURE OF COLLEGE SEARCH</p>

          <h1>
            Find the college
            <span> that fits you.</span>
          </h1>

          <p className="hero-description">
            Euphoria helps you discover colleges based on what actually
            matters to you.
          </p>

          <button className="cta-button">
            Begin Your Search
            <span>→</span>
          </button>
        </div>

        <div className="hero-decoration">
          <div className="glow-orb"></div>
        </div>
      </main>

      <section className="features">
        <div className="feature">
          <span className="feature-number">01</span>
          <h2>Personalized</h2>
          <p>Your preferences. Your priorities. Your college search.</p>
        </div>

        <div className="feature">
          <span className="feature-number">02</span>
          <h2>Data Driven</h2>
          <p>Compare colleges using the information that matters to you.</p>
        </div>

        <div className="feature">
          <span className="feature-number">03</span>
          <h2>Your Choice</h2>
          <p>Euphoria helps you decide. You make the final decision.</p>
        </div>
      </section>
    </div>
  );
}

export default App;