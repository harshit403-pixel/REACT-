import { createContext, useContext, useState } from "react";


// CONTEXT — Yahan saari sessions ki duniya hai


const SessionContext = createContext();

// Poora app is provider ke andar wrap hoga
function SessionProvider({ children }) {
  // Kuch default sessions taaki UI shuru mein khali na lage
  const [allSessions, setAllSessions] = useState([
    {
      id: Date.now() - 10000,
      topicName: "React Hooks",
      subject: "Web Dev",
      durationMins: 90,
      priority: "High",
      sessionDate: "2025-03-29",
    },
    {
      id: Date.now() - 5000,
      topicName: "Calculus Integration",
      subject: "Math",
      durationMins: 60,
      priority: "Medium",
      sessionDate: "2025-03-30",
    },
  ]);

  // Naya session list ke upar add karo (latest pehle dikhega)
  function addNewSession(freshSession) {
    const sessionWithUniqueId = { ...freshSession, id: Date.now() };
    setAllSessions((prev) => [sessionWithUniqueId, ...prev]);
  }

  // Id se dhundh ke session ko list se hata do
  function removeSession(sessionId) {
    setAllSessions((prev) => prev.filter((s) => s.id !== sessionId));
  }

  return (
    <SessionContext.Provider value={{ allSessions, addNewSession, removeSession }}>
      {children}
    </SessionContext.Provider>
  );
}

// Shortcut hook — baar baar useContext likhne ki zaroorat nahi
function useSessionContext() {
  return useContext(SessionContext);
}


// PRIORITY COLOR MAP — kaun si priority ka kaun sa rang


const priorityColorMap = {
  High:   { badge: "#ff4757", glow: "rgba(255,71,87,0.25)" },
  Medium: { badge: "#ffa502", glow: "rgba(255,165,2,0.25)" },
  Low:    { badge: "#2ed573", glow: "rgba(46,213,115,0.25)" },
};


// SESSION FORM — Yahan user apna naya session fill karega


// Valid options ek jagah define karo, baar baar likhne ki zaroorat nahi
const subjectOptions  = ["Math", "Web Dev", "Editorials", "GS", "Other"];
const priorityOptions = ["Low", "Medium", "High"];

// Blank form ka shape — reset karte waqt kaam aayega
const blankFormState = {
  topicName:   "",
  subject:     "Math",
  durationMins: "",
  priority:    "Medium",
  sessionDate: "",
};

function SessionForm() {
  const { addNewSession } = useSessionContext();

  // Saara form data ek hi state mein — clean aur manageable
  const [formData, setFormData]               = useState(blankFormState);
  const [validationErrors, setValidationErrors] = useState({});
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);

  // Koi bhi field change ho — sirf usi field ki value update karo
  function handleFieldChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Jab user type karna shuru kare toh purani error hata do
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  // Submit se pehle saare inputs check karo
  function checkFormValidity() {
    const foundErrors = {};

    if (!formData.topicName.trim()) {
      foundErrors.topicName = "Topic name is required.";
    }

    const parsedDuration = Number(formData.durationMins);
    if (!formData.durationMins || isNaN(parsedDuration) || parsedDuration < 30) {
      foundErrors.durationMins = "Duration must be at least 30 minutes.";
    }

    if (!formData.sessionDate) {
      foundErrors.sessionDate = "Please select a date.";
    }

    return foundErrors;
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    // Pehle validate karo — koi error ho toh wahi rok lo
    const errors = checkFormValidity();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Sab theek hai — context mein add karo aur form reset karo
    addNewSession({ ...formData, durationMins: Number(formData.durationMins) });

    // Success banner thodi der dikhao phir hatao
    setShowSuccessBanner(true);
    setFormData(blankFormState);
    setValidationErrors({});
    setTimeout(() => setShowSuccessBanner(false), 2500);
  }

  return (
    <div style={styles.formCard}>
      <h2 style={styles.formTitle}>📚 Add New Session</h2>

      {/* Submit hone ke baad green confirmation dikhao */}
      {showSuccessBanner && (
        <div style={styles.successBanner}>
          ✅ Session added successfully! Keep it up.
        </div>
      )}

      <form onSubmit={handleFormSubmit} style={styles.formGrid}>

        {/* Topic name — required field */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Topic Name *</label>
          <input
            type="text"
            name="topicName"
            placeholder="e.g. Quadratic Equations"
            value={formData.topicName}
            onChange={handleFieldChange}
            style={{ ...styles.input, ...(validationErrors.topicName ? styles.inputError : {}) }}
          />
          {validationErrors.topicName && (
            <span style={styles.errorText}>{validationErrors.topicName}</span>
          )}
        </div>

        {/* Subject dropdown */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Subject</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleFieldChange}
            style={styles.input}
          >
            {subjectOptions.map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        {/* Duration — minimum 30 minutes enforce hoga */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Duration (minutes) *</label>
          <input
            type="number"
            name="durationMins"
            placeholder="Minimum 30"
            value={formData.durationMins}
            onChange={handleFieldChange}
            min="30"
            style={{ ...styles.input, ...(validationErrors.durationMins ? styles.inputError : {}) }}
          />
          {validationErrors.durationMins && (
            <span style={styles.errorText}>{validationErrors.durationMins}</span>
          )}
        </div>

        {/* Priority toggle buttons — selected wala highlight hoga */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Priority</label>
          <div style={styles.priorityRow}>
            {priorityOptions.map((level) => {
              const isActive = formData.priority === level;
              const { badge, glow } = priorityColorMap[level];
              return (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, priority: level }))}
                  style={{
                    ...styles.priorityToggleBtn,
                    backgroundColor: isActive ? badge : "transparent",
                    borderColor: badge,
                    color: isActive ? "#fff" : badge,
                    boxShadow: isActive ? `0 0 12px ${glow}` : "none",
                  }}
                >
                  {level}
                </button>
              );
            })}
          </div>
        </div>

        {/* Session date */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Date *</label>
          <input
            type="date"
            name="sessionDate"
            value={formData.sessionDate}
            onChange={handleFieldChange}
            style={{ ...styles.input, ...(validationErrors.sessionDate ? styles.inputError : {}) }}
          />
          {validationErrors.sessionDate && (
            <span style={styles.errorText}>{validationErrors.sessionDate}</span>
          )}
        </div>

        {/* Submit aur Reset — dono ek saath */}
        <div style={styles.buttonRow}>
          <button type="submit" style={styles.submitBtn}>
            ➕ Add Session
          </button>
          <button
            type="button"
            onClick={() => { setFormData(blankFormState); setValidationErrors({}); }}
            style={styles.resetBtn}
          >
            🔄 Reset
          </button>
        </div>
      </form>
    </div>
  );
}


// SESSION CARD — Ek session ka poora display


function SessionCard({ session }) {
  const { removeSession } = useSessionContext();

  // Is session ki priority ke hisaab se color lo
  const priorityStyle = priorityColorMap[session.priority];

  // Minutes ko readable format mein dikhao — 90 mins = 1h 30m
  const totalHours     = Math.floor(session.durationMins / 60);
  const remainingMins  = session.durationMins % 60;
  const formattedDuration =
    totalHours > 0
      ? `${totalHours}h${remainingMins > 0 ? " " + remainingMins + "m" : ""}`
      : `${remainingMins}m`;

  return (
    <div
      style={{
        ...styles.card,
        borderTop: `3px solid ${priorityStyle.badge}`,
        boxShadow: `0 4px 20px ${priorityStyle.glow}`,
      }}
    >
      {/* Topic naam aur priority badge — upar wala row */}
      <div style={styles.cardHeader}>
        <h3 style={styles.cardTopic}>{session.topicName}</h3>
        <span style={{ ...styles.priorityBadge, backgroundColor: priorityStyle.badge }}>
          {session.priority}
        </span>
      </div>

      {/* Subject, duration, date — chips mein dikhao */}
      <div style={styles.cardDetails}>
        <span style={styles.detailChip}>📖 {session.subject}</span>
        <span style={styles.detailChip}>⏱ {formattedDuration}</span>
        <span style={styles.detailChip}>📅 {session.sessionDate}</span>
      </div>

      {/* Delete button — session.id pass karo context function mein */}
      <button
        onClick={() => removeSession(session.id)}
        style={styles.deleteBtn}
        title="Remove this session"
      >
        🗑 Remove
      </button>
    </div>
  );
}


// SESSION LIST — Saari sessions yahan render hongi


function SessionList() {
  const { allSessions } = useSessionContext();

  // Koi session nahi toh user ko encourage karo
  if (allSessions.length === 0) {
    return (
      <div style={styles.emptyState}>
        <p style={styles.emptyText}>
          No sessions yet. Add your first session to get started!
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Title mein count bhi dikhao */}
      <h2 style={styles.sectionTitle}>
        📋 My Sessions ({allSessions.length})
      </h2>

      {/* Har session ke liye ek card */}
      <div style={styles.cardGrid}>
        {allSessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
}


// STATS BAR — Ek nazar mein saari important info


function StatsBar() {
  const { allSessions } = useSessionContext();

  // Saare sessions ke minutes add karo, phir hours mein convert karo
  const totalStudyMinutes = allSessions.reduce(
    (sum, session) => sum + session.durationMins,
    0
  );
  const totalStudyHours = (totalStudyMinutes / 60).toFixed(1);

  // Sirf "High" priority wali sessions count karo
  const urgentSessionCount = allSessions.filter((s) => s.priority === "High").length;

  return (
    <div style={styles.statsBar}>
      <div style={styles.statItem}>
        <span style={styles.statNumber}>{allSessions.length}</span>
        <span style={styles.statLabel}>Total Sessions</span>
      </div>
      <div style={styles.statDivider} />
      <div style={styles.statItem}>
        <span style={styles.statNumber}>{totalStudyHours}h</span>
        <span style={styles.statLabel}>Study Time</span>
      </div>
      <div style={styles.statDivider} />
      <div style={styles.statItem}>
        <span style={{ ...styles.statNumber, color: "#ff4757" }}>
          {urgentSessionCount}
        </span>
        <span style={styles.statLabel}>High Priority</span>
      </div>
    </div>
  );
}


// APP ROOT — Sab components yahan milte hain


export default function StudySessionPlanner() {
  return (
    // Provider wrap karo taaki context poore tree mein available rahe
    <SessionProvider>
      <div style={styles.appWrapper}>

        {/* Sirf visual decoration ke liye background blobs */}
        <div style={styles.blobTopRight} />
        <div style={styles.blobBottomLeft} />

        <div style={styles.container}>

          <header style={styles.header}>
            <h1 style={styles.appTitle}>📚 Study Session Planner</h1>
            <p style={styles.appSubtitle}>Plan your sessions. Track your progress.</p>
          </header>

          {/* Quick stats overview */}
          <StatsBar />

          {/* Form baayein, sessions daayein */}
          <div style={styles.mainLayout}>
            <SessionForm />
            <SessionList />
          </div>

        </div>
      </div>
    </SessionProvider>
  );
}


// STYLES — Saare styles ek jagah, UI se alag rakho


const styles = {
  appWrapper: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#e0e0e0",
    position: "relative",
    overflow: "hidden",
    paddingBottom: 60,
  },

  // Decorative blobs — pointer events disabled taaki click block na ho
  blobTopRight: {
    position: "fixed", width: 400, height: 400, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(100,60,255,0.15), transparent)",
    top: -100, right: -100, pointerEvents: "none",
  },
  blobBottomLeft: {
    position: "fixed", width: 300, height: 300, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,71,87,0.10), transparent)",
    bottom: 50, left: -80, pointerEvents: "none",
  },

  container: {
    maxWidth: 1100, margin: "0 auto", padding: "0 20px",
    position: "relative", zIndex: 1,
  },
  header: {
    padding: "40px 0 20px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    marginBottom: 24,
  },
  appTitle: {
    fontSize: 32, fontWeight: 800, margin: 0,
    background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    letterSpacing: "-0.5px",
  },
  appSubtitle: { margin: "6px 0 0", color: "rgba(255,255,255,0.45)", fontSize: 14 },

  statsBar: {
    display: "flex", gap: 0, alignItems: "center",
    background: "rgba(255,255,255,0.05)", borderRadius: 16,
    padding: "18px 24px", marginBottom: 28,
    backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.08)",
    width: "fit-content",
  },
  statItem: { display: "flex", flexDirection: "column", alignItems: "center", padding: "0 28px" },
  statNumber: { fontSize: 28, fontWeight: 700, color: "#a78bfa", lineHeight: 1 },
  statLabel: { fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1, marginTop: 4 },
  statDivider: { width: 1, height: 40, background: "rgba(255,255,255,0.1)" },

  mainLayout: { display: "grid", gridTemplateColumns: "420px 1fr", gap: 28, alignItems: "start" },

  // Form card sticky rehti hai scroll karne par bhi
  formCard: {
    background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)",
    borderRadius: 20, padding: 28, border: "1px solid rgba(255,255,255,0.1)",
    position: "sticky", top: 20,
  },
  formTitle: { margin: "0 0 20px", fontSize: 18, fontWeight: 700, color: "#fff" },
  formGrid: { display: "flex", flexDirection: "column", gap: 16 },
  fieldGroup: { display: "flex", flexDirection: "column", gap: 6 },
  label: { fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.8px" },
  input: {
    background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 10, padding: "10px 14px", color: "#fff", fontSize: 14,
    outline: "none", transition: "border-color 0.2s", colorScheme: "dark",
  },
  inputError: { borderColor: "#ff4757" },
  errorText: { fontSize: 11, color: "#ff6b81", marginTop: 2 },
  priorityRow: { display: "flex", gap: 10 },
  priorityToggleBtn: {
    flex: 1, padding: "8px 0", borderRadius: 8,
    border: "1.5px solid", cursor: "pointer",
    fontSize: 13, fontWeight: 600, transition: "all 0.2s",
  },
  buttonRow: { display: "flex", gap: 10, marginTop: 4 },
  submitBtn: {
    flex: 1, padding: "12px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff", border: "none", borderRadius: 10,
    fontSize: 14, fontWeight: 700, cursor: "pointer", letterSpacing: "0.3px",
  },
  resetBtn: {
    padding: "12px 18px", background: "rgba(255,255,255,0.07)",
    color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 10, fontSize: 14, cursor: "pointer",
  },
  successBanner: {
    background: "rgba(46,213,115,0.15)", border: "1px solid rgba(46,213,115,0.4)",
    color: "#2ed573", borderRadius: 10, padding: "10px 14px",
    fontSize: 13, marginBottom: 16, fontWeight: 600,
  },

  sectionTitle: { fontSize: 18, fontWeight: 700, margin: "0 0 16px", color: "#fff" },
  cardGrid: { display: "flex", flexDirection: "column", gap: 14 },
  card: {
    background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)",
    borderRadius: 16, padding: "18px 20px",
    border: "1px solid rgba(255,255,255,0.08)", transition: "transform 0.2s",
  },
  cardHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, gap: 12 },
  cardTopic: { margin: 0, fontSize: 17, fontWeight: 700, color: "#fff", lineHeight: 1.3 },
  priorityBadge: { fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20, color: "#fff", whiteSpace: "nowrap", flexShrink: 0 },
  cardDetails: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 },
  detailChip: { fontSize: 12, color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.07)", padding: "4px 10px", borderRadius: 20 },
  deleteBtn: {
    background: "rgba(255,71,87,0.12)", border: "1px solid rgba(255,71,87,0.3)",
    color: "#ff6b81", borderRadius: 8, padding: "6px 14px",
    fontSize: 12, cursor: "pointer", fontWeight: 600, transition: "background 0.2s",
  },

  // Koi session nahi — empty state
  emptyState: {
    textAlign: "center", padding: "60px 20px",
    background: "rgba(255,255,255,0.03)",
    borderRadius: 16, border: "1px dashed rgba(255,255,255,0.12)",
  },
  emptyText: { color: "rgba(255,255,255,0.35)", fontSize: 15, margin: 0 },
};