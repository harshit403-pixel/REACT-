import React from "react";
import { useSessions } from "../context/SessionContext";

function SessionCard({ session }) {
  const { deleteSession } = useSessions();

  return (
    <article className={`session-card priority-${session.priority.toLowerCase()}`}>
      <div className="session-card-header">
        <div>
          <p className="session-subject">{session.subject}</p>
          <h3>{session.topicName}</h3>
        </div>
        <span className="priority-pill">{session.priority}</span>
      </div>

      <div className="session-meta">
        <span>{session.duration} mins</span>
        <span>{session.date}</span>
      </div>

      <button
        className="delete-button"
        type="button"
        onClick={() => deleteSession(session.id)}
      >
        Delete
      </button>
    </article>
  );
}

export default SessionCard;
