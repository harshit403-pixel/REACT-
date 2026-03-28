import SessionForm from "./components/SessionForm";
import SessionList from "./components/SessionList";
import { useSessions } from "./context/SessionContext";
import React from "react";

function App() {
  const { totalDuration } = useSessions();

  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Study Session Planner</p>
          <h1>Plan focused study blocks without losing track of priorities.</h1>
          <p className="hero-copy">
            Add sessions, review them in one place, and keep an eye on your
            total study time for the day or week.
          </p>
        </div>

        <div className="summary-card">
          <span className="summary-label">Total Planned Duration</span>
          <strong>{totalDuration} mins</strong>
        </div>
      </section>

      <section className="content-grid">
        <SessionForm />
        <SessionList />
      </section>
    </main>
  );
}

export default App;
