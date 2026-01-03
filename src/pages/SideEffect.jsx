// Side Effect atau efek samping adalah sesuatu yang terjadi diluar dari fungsi utama
export default function SideEffect() {
    function handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById("inputname").value;
        document.getElementById("text-hello").innerText = `Hello, ${name}`;
    }
    return (
        <div>
            <h1>Side effect ini pakai DOM Manipulation tapi tidak direkomendasikan, <br />
            karena kedepan nya akan menyebabkan masalah pada performa aplikasi dan tidak sesuai dengan prinsip React.</h1>
            <h1>Untuk kedepan nya kita akan pakek yang namanya State</h1>
            <form action="">
                <input className="outline-none border border-gray-300 rounded px-4 py-2" type="text" id="inputname" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2" onClick={handleSubmit}>Submit</button>
            </form>
            <h1 id="text-hello"></h1>
        </div>
    )
}