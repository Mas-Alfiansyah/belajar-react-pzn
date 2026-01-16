import { useImmerReducer } from "use-immer";
import { useState } from "react";


function AppImmerReducer(draft, action) {
    switch (action.type) {
        case "TAMBAH":
            draft.push({
                id: action.id,
                text: action.text,
                done: false
            });
            break;

        case "TOGGLE":
            const index = draft.findIndex(n => n.id === action.id);
            if (index !== -1) {
                draft[index].done = !draft[index].done;
            }
            break;

        case "HAPUS":
            const idx = draft.findIndex(n => n.id === action.id);
            draft.splice(idx, 1);
            break;
    }
}


export default function ImmerReducer() {
    const [notes, dispatch] = useImmerReducer(AppImmerReducer, []);
    const [text, setText] = useState("");

    function handleAdd(text) {
        if (text.trim() === "") return;
        dispatch({ type: "TAMBAH", id: Date.now(), text: text });
        setText("");
    }

    return (
        <div>
            {/* Tampilan sama seperti sebelumnya */}
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Masukkan text" />
            <button onClick={() => handleAdd(text)}>Tambah</button>
            {notes.map(n => (
                <li key={n.id}>
                    <input
                        type="checkbox"
                        checked={n.done}
                        onChange={() => dispatch({ type: "TOGGLE", id: n.id })} />
                    {n.text}
                    <button onClick={() => dispatch({ type: "HAPUS", id: n.id })}>Hapus</button>
                </li>
            ))}
        </div>
    );
}