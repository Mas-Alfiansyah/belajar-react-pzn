import { useState } from "react";

export default function ReducerForm({ dispatch }) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (text.trim()) {
            dispatch({ type: 'ADD_TODO', payload: text });
            setText("");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                className="flex-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tambah todo baru..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
            >
                Tambah
            </button>
        </form>
    );
}
