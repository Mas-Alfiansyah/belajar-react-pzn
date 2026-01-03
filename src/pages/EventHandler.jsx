import CodeSnippet from '../components/CodeSnippet';

const eventHandlerCode = `export default function EventHandler({ text }) {
    function handleClick() {
        alert("You Click Me!");
    }
    return (
        <div>
            <p>Ini event handler yang biasa</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                {text}
            </button>
            <p>Ini event handler yang pakek Smash</p>
            <EventHandlerSmash text="Smash Me" onSmash={() => alert("You Smash Me!")} />
            <p>Ini event handler yang pakek event object</p>
            <p>Bisa langsung cek di inspect element biar keliatan perbedaan nya</p>
            <EventObjectHandler text="Event Object" />
        </div>
    )
}

export function EventHandlerSmash({ text, onSmash }) {
    return (
        <div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onSmash}>
                {text}
            </button>
        </div>
    )
}

export function EventObjectHandler({ text }) {
    function handleClick(e) {
        console.info(e.target)
            alert("Anda klik tombol ini")
    }
    return(
        <div>
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                {text}
            </button>
        </div>
    )
}`;

export default function EventHandler({ text }) {
    function handleClick() {
        alert("You Click Me!");
    }
    return (
        <div>
            <p>Ini event handler yang biasa</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                {text}
            </button>
            <p>Ini event handler yang pakek Smash</p>
            <EventHandlerSmash text="Smash Me" onSmash={() => alert("You Smash Me!")} />
            <p>Ini event handler yang pakek event object</p>
            <p>Bisa langsung cek di inspect element biar keliatan perbedaan nya</p>
            <EventObjectHandler text="Event Object" />
            <CodeSnippet code={eventHandlerCode} fileName="EventHandler.jsx" />
        </div>
    )
}

export function EventHandlerSmash({ text, onSmash }) {
    return (
        <div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onSmash}>
                {text}
            </button>
        </div>
    )
}

export function EventObjectHandler({ text }) {
    function handleClick(e) {
        console.info(e.target)
        alert("Anda klik tombol ini")
    }
    return (
        <div>
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                {text}
            </button>
        </div>
    )
}