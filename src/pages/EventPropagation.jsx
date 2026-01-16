import CodeSnippet from '../components/CodeSnippet';

const eventPropagationCode = `export default function EventPropagation({ handleClick }) {
    function handleClick(e) {
        e.stopPropagation();
        alert('Hello');
    }

    function handlePropagation(e) {
        e.stopPropagation();
        handleClick();
    }
    return (
        <div>
            <h1>Event Propagation</h1>
            <p>Jadi klo ga di stopPropagation, maka event ini akan merambat ke parentnya atau bakal ada multiple alert</p>
            <div className="flex gap-3 bg-gray-700 p-4 rounded-lg" onClick={handleClick}>
                <button className="bg-red-600 rounded-4xl text-white py-2 px-4 radius" onClick={handleClick}>First</button>
                <button className="bg-blue-600 rounded-4xl text-white py-2 px-4 radius" onClick={handleClick}>Second</button>
            </div>
        </div>
    )
}`;

export default function EventPropagation({ handleClick }) {

    function handleClick(e) {
        e.stopPropagation();
        alert('Hello');
    }

    function handlePropagation(e) {
        e.stopPropagation();
        handleClick();
    }
    return (
        <div>
            <h1>Event Propagation</h1>
            <p>Jadi klo ga di stopPropagation, maka event ini akan merambat ke parentnya atau bakal ada multiple alert</p>
            <div className="flex gap-3 bg-gray-700 p-4 rounded-lg" onClick={handlePropagation}>
                <button className="bg-red-600 rounded-4xl text-white py-2 px-4 radius" onClick={handleClick}>First</button>
                <button className="bg-blue-600 rounded-4xl text-white py-2 px-4 radius" onClick={handleClick}>Second</button>
            </div>
            <CodeSnippet code={eventPropagationCode} fileName="EventPropagation.jsx" />
        </div>
    )
}