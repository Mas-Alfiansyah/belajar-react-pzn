import { useState } from "react";
import ReducerNoteList from "./ReducerNoteList";
import ReducerNoteForm from "./ReducerNoteForm";
import { useImmer } from "use-immer";

let id = 0;

const initialNotes = [
    {id: id++, text: "Learn HTML", done: false},
    {id: id++, text: "Learn CSS", done: false},
    {id: id++, text: "Learn Bootstrap", done: true},
    {id: id++, text: "Learn JavaScript", done: false},
    {id: id++, text: "Learn React", done: true},
    {id: id++, text: "Learn PHP", done: false},
    {id: id++, text: "Learn Laravel", done: true},
]

export default function ReducerNoteApp() {
    const [notes, setNotes] = useImmer(initialNotes);

    function handleAddNote(text) {
        setNotes((draft) => {
            draft.push({
                id: id++, 
                text: text,
                done: false
            });
        });
    }

    function handleChangeNote(note) {
        setNotes((draft) => {
            const index = draft.findIndex(item => item.id === note.id);
            draft[index] = note;
        });
    }

    function handleDeleteNote(note) {
        setNotes((draft) => {
            const index = draft.findIndex(item => item.id === note.id);
            draft.splice(index, 1);
        });
    }

    return (
        <>
            <h1>Note App</h1>
            <ReducerNoteForm onAddNote={handleAddNote} />
            <ReducerNoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} />
        </>
    )
}