import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // adjust path if firebase.js is in src/
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

export default function Comment() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);

  // Listen for comments in real time
  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setComments(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    setSending(true);
    try {
      await addDoc(collection(db, "comments"), {
        name: name.trim(),
        text: text.trim(),
        createdAt: serverTimestamp(),
      });
      setName("");
      setText("");
    } finally {
      setSending(false);
    }
  };

  // Format Firestore timestamp
  const formatDate = (ts) => {
    if (!ts?.toDate) return "Just now";
    return ts.toDate().toLocaleString();
  };

  return (
    <section style={{ maxWidth: 600, margin: "20px auto", padding: "0 16px" }}>
      <h2>Comments</h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8, marginBottom: 16 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          style={{ padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          required
          rows={3}
          style={{ padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
        />
        <button
          type="submit"
          disabled={sending}
          style={{
            padding: "10px 14px",
            border: "none",
            borderRadius: 4,
            background: sending ? "#999" : "#0d6efd",
            color: "white",
            cursor: sending ? "not-allowed" : "pointer",
          }}
        >
          {sending ? "Posting..." : "Post"}
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
        {comments.map((c) => (
          <li key={c.id} style={{ border: "1px solid #ddd", borderRadius: 6, padding: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <strong>{c.name || "Anonymous"}</strong>
              <span style={{ fontSize: 12, color: "#555" }}>{formatDate(c.createdAt)}</span>
            </div>
            <p style={{ margin: 0 }}>{c.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
