import { useReducer, useState } from "react";

function konsolidasi(tasks, action) {
    switch (action.type) {
        case "TAMBAH":
            return [...tasks, { id: Date.now(), text: action.payload, done: false }];
        case "TOGGLE":
            return tasks.map(t => t.id === action.id ? { ...t, done: !t.done } : t);
        case "HAPUS":
            return tasks.filter(t => t.id !== action.id);
        default:
            return tasks;
    }
}

export default function TaskAppReducer() {
    const [tasks, dispatch] = useReducer(konsolidasi, []);
    const [text, setText] = useState("");

    function handleAdd() {
        if (text.trim() === "") return;
        dispatch({ type: "TAMBAH", payload: text });
        setText("");
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Dengan Reducer</h1>
            <input className="w-2xs border border-gray-300 rounded-md p-2 mb-3" value={text} onChange={(e) => setText(e.target.value)} placeholder="Tulis tugas..." />
            <button onClick={handleAdd}>Tambah</button>

            <ul>
                {tasks.map(t => (
                    <li key={t.id}>
                        <input type="checkbox" checked={t.done} onChange={() => dispatch({ type: "TOGGLE", id: t.id})} />
                        {t.text}
                        <button
                            className="py-5 px-10 bg-danger"
                            onClick={() => dispatch({ type: "HAPUS", id: t.id})}
                        >Hapus</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}