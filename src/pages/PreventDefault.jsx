export default function PreventDefault() {
    return(
        <div>
            <p>klo ga di preventDefault, maka form ini akan melakukan submit dan mereload halaman</p>
            <form action="">
                <input className="outline-none border border-gray-300 rounded px-4 py-2" type="text" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2" onClick={(e) => {
                    e.preventDefault(); // klo ga di preventDefault, maka form ini akan melakukan submit dan mereload halaman
                    alert("Ini tombol submit yang di prevent default");
                    }}>Submit</button>
            </form>
        </div>
    )
}