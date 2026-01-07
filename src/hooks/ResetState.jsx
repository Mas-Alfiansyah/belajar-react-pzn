import { useState } from "react";

export default function MempertahankanState() {
    const [show, setShow] = useState(true);

    function handleChange(e) {
        setShow(e.target.checked);
    }


    return (
        <div className="flex gap-4">
            <div className="flex flex-col gap-5">
                <p>Jadi, kita itu untuk Me-reset state nya itu kayak gini</p>
                <div>
                    <Counter name="Satu" />
                </div>
                <input
                    type="checkbox"
                    className="p-2 w-5 h-5 checked:bg-blue-500"
                    checked={show}
                    onChange={handleChange}
                />Tampilkan Counter ke 2
                {show &&
                    <div>
                        <Counter name="Dua" />
                    </div>
                }
            </div>
        </div>
    )
}

function Counter({ name }) {
    const [count, setCount] = useState(0);

    function handleCounter() {
        setCount(count + 1);
    }
    return (
        <>
            <p>{name}</p>
            <button
                className="bg-blue-500 py-2 px-4 rounded-lg text-white"
                onClick={handleCounter}
            >Counter {count}</button>
        </>
    )
}