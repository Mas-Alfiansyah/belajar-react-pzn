import { useState } from "react";
import { useImmer } from "use-immer";

export default function ArrayDiState() {
    return (
        <>
            <h1 className="text-2xl font-semibold">Array Di State</h1>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                    Sama seperti Object, Array di State juga harus kita perlakukan sebagai Immutable data
                </li>
                <li>
                    Artinya operasi menambah data, mengubah atau menghapus data di Array, kita harus buat Array baru untuk di update ke State
                </li>
                <li>
                    Hal ini memang agak menyulitkan, oleh karena itu dengan bantuan library seperti Immer, hal ini jadi lebih mudah
                </li>
            </ul>
            <Divider />
            <ArrayState />
        </>
    )
}

function Divider() {
    return <hr className="my-10 border-slate-200" />;
}

function ArrayState() {
    const [item, setItem] = useState("");
    const [items, setItems] = useImmer([]);

    function handleChange(e) {
        setItem(e.target.value);
    }
    function handleClick(e) {
        e.preventDefault();
        setItems((draft) => {
            draft.push(item);
        })
        setItem("");
    }
    return(
        <>
            <h1 className="text-2xl font-semibold">Create Task</h1>
            <form className="flex items-center gap-2" action="">
                <label className="block text-2xl font-medium text-gray-700" htmlFor="task">Task</label>
                <input className="mt-1 block w-60 border border-gray-300 rounded-md shadow-sm p-2" type="text" value={item} onChange={handleChange} />
                <button className="form-button bg-blue-500 py-2 px-4 rounded-lg" onClick={handleClick}>Add Task</button>
            </form>
            <h1 className="text-2xl font-semibold">List Task</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}