import { useEffect, useState } from "react";
import API from "../services/api";

export default function MessagesCMS() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await API.get("/messages");
    setMessages(res.data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const deleteMsg = async (id) => {
    await API.delete(`/messages/${id}`);
    fetchMessages();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Messages</h2>

      {messages.map((m) => (
        <div key={m._id} style={{ marginBottom: 20 }}>
          <b>{m.name}</b> ({m.email})
          <p>{m.message}</p>
          <button onClick={() => deleteMsg(m._id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
