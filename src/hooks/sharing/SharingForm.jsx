import { useState } from "react";

export default function SharingState({onSubmit}) {
    const [item, setItem] = useState(""); // untuk menampung data yang diinputkan sama si user

    function handleChange(e) {
        setItem(e.target.value);
    }
    function handleClick(e) {
        e.preventDefault();
        onSubmit(item);
        setItem("");
    }
    return (
        <>
            <h1 className="text-2xl font-semibold">Create Task</h1>
            <form className="flex items-center gap-2" action="">
                <label className="block text-2xl font-medium text-gray-700" htmlFor="task">Task</label>
                <input
                    className="mt-1 block w-60 border border-gray-300 rounded-md shadow-sm p-2"
                    type="text"
                    value={item}
                    onChange={handleChange}
                />
                <button
                    className="form-button bg-blue-500 py-2 px-4 rounded-lg"
                    onClick={handleClick}
                >Add Task</button>
            </form>
            {/* <h1 className="text-2xl font-semibold">List Task</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul> */}
        </>
    )
}