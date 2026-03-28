import React, { createContext, useContext, useState } from "react";

const SessionContext = createContext(null);

const initialSessions = [
  {
    id: crypto.randomUUID(),
    topicName: "Binary Search Practice",
    subject: "DSA",
    duration: 45,
    priority: "High",
    date: "2026-03-30"
  },
  {
    id: crypto.randomUUID(),
    topicName: "Normalization Revision",
    subject: "DBMS",
    duration: 30,
    priority: "Medium",
    date: "2026-03-31"
  }
];

export function SessionProvider({ children }) {
  const [sessions, setSessions] = useState(initialSessions);

  const addSession = (sessionData) => {
    const newSession = {
      id: crypto.randomUUID(),
      ...sessionData,
      duration: Number(sessionData.duration)
    };

    setSessions((currentSessions) => [newSession, ...currentSessions]);
  };

  const deleteSession = (sessionId) => {
    setSessions((currentSessions) =>
      currentSessions.filter((session) => session.id !== sessionId)
    );
  };

  const totalDuration = sessions.reduce(
    (total, session) => total + session.duration,
    0
  );

  const value = {
    sessions,
    addSession,
    deleteSession,
    totalDuration
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export function useSessions() {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSessions must be used within a SessionProvider");
  }

  return context;
}
