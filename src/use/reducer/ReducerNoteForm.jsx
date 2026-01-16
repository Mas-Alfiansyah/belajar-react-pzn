import { useState } from "react";

export default function ReduceNoteForm({ onAddNote }) {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() {
        if(text.trim() === "") return;
        setText("");
        onAddNote(text);
    }
    return (
        <>
            <div className="flex gap-5">
                <input
                    className="mt-1 block w-60 border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Tambahkan Note"
                    value={text}
                    onChange={handleChange}
                />
                <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Add</button>
            </div>

        </>
    )
}