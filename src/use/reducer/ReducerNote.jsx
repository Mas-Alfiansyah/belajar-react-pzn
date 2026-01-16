import { useState } from "react";

export default function ReducerNote({note, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);

    let component;

    function handleChangeText(e) {
        const newNote = {...note, text: e.target.value}
        onChange(newNote);
    }

    if(isEditing) {
        component = (
            <>
                <input className="mt-1 block w-60 border border-gray-300 rounded-md shadow-sm p-2" value={note.text} onChange={handleChangeText} />
                <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-1 px-3 rounded" onClick={() => setIsEditing(false)}>Simpan</button>
            </>
        );
        
    }else{
        component = (
            <>
                {note.text}
                <button className="bg-amber-300 hover:bg-amber-400 text-white font-bold py-1 px-3 rounded" onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    function handleChangeDone(e) {
        const newNote = {...note, done: e.target.checked};
        onChange(newNote);
    }
    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone}/>{component}
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-3 rounded" onClick={() => onDelete(note)}>Delete</button>
        </label>
    )
}