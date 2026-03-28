import React from "react";
import { useForm } from "react-hook-form";
import { useSessions } from "../context/SessionContext";

const subjects = ["DSA", "Web Dev", "DBMS", "OS", "Other"];
const priorities = ["Low", "Medium", "High"];

function SessionForm() {
  const { addSession } = useSessions();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      topicName: "",
      subject: "DSA",
      duration: 30,
      priority: "Medium",
      date: ""
    }
  });

  const onSubmit = (data) => {
    addSession(data);
    reset({
      topicName: "",
      subject: "DSA",
      duration: 30,
      priority: "Medium",
      date: ""
    });
  };

  return (
    <section className="panel">
      <div className="panel-heading">
        <p className="panel-kicker">Add Session</p>
        <h2>Create your next study block</h2>
      </div>

      <form className="session-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Topic Name
          <input
            type="text"
            placeholder="e.g. Graph Traversal"
            {...register("topicName", {
              required: "Topic name is required"
            })}
          />
          {errors.topicName ? (
            <span className="error-text">{errors.topicName.message}</span>
          ) : null}
        </label>

        <label>
          Subject
          <select {...register("subject")}>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </label>

        <label>
          Duration (minutes)
          <input
            type="number"
            min="10"
            step="5"
            {...register("duration", {
              required: "Duration is required",
              min: {
                value: 10,
                message: "Minimum duration is 10 minutes"
              },
              valueAsNumber: true
            })}
          />
          {errors.duration ? (
            <span className="error-text">{errors.duration.message}</span>
          ) : null}
        </label>

        <label>
          Priority
          <select {...register("priority")}>
            {priorities.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </label>

        <label>
          Date
          <input
            type="date"
            {...register("date", {
              required: "Date is required"
            })}
          />
          {errors.date ? (
            <span className="error-text">{errors.date.message}</span>
          ) : null}
        </label>

        <button className="primary-button" type="submit">
          Add Session
        </button>
      </form>
    </section>
  );
}

export default SessionForm;
