export default function SharingList({items = []}) {
    return (
        <>
            <h1 className="text-2xl font-semibold mt-10">List Task</h1>
            <ul>
                {items.map((data, index) => (
                    <li key={index} className="mt-2">
                        {data}
                    </li>
                ))}
            </ul>
        </>
    )
}