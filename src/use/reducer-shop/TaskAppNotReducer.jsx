import { useState } from "react";

export default function TaskAppNotReducer() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState(""); // State untuk input

  // Alur: Langsung manipulasi array di sini
  function handleAdd() {
    if (text.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: text, done: false }]);
    setText(""); // Reset input
  }

  function handleToggle(id) {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function handleDelete(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tanpa Reducer</h1>
      <input className="w-2xs border border-gray-300 rounded-md p-2 mb-3" value={text} onChange={(e) => setText(e.target.value)} placeholder="Tulis tugas..." />
      <button onClick={handleAdd}>Tambah</button>

      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <input type="checkbox" checked={t.done} onChange={() => handleToggle(t.id)} />
            {t.text}
            <button
              className="py-5 px-10 bg-danger"
              onClick={() => handleDelete(t.id)}
            >Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

