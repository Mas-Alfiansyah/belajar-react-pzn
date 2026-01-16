import Note from "./ReducerNote";

export default function ReducerNoteList({notes = [],  onChange, onDelete}) {
    return (
        <>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        <Note note={note} onChange={onChange} onDelete={onDelete} />
                    </li>
                ))}
            </ul>
        </>
    )
}