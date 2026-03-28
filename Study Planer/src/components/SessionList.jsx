import React from "react";
import SessionCard from "./SessionCard";
import { useSessions } from "../context/SessionContext";

function SessionList() {
  const { sessions } = useSessions();

  return (
    <section className="panel">
      <div className="panel-heading">
        <p className="panel-kicker">Session List</p>
        <h2>Your planned study sessions</h2>
      </div>

      {sessions.length === 0 ? (
        <div className="empty-state">
          <h3>No sessions yet</h3>
          <p>Add your first study session to start planning.</p>
        </div>
      ) : (
        <div className="session-list">
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      )}
    </section>
  );
}

export default SessionList;
