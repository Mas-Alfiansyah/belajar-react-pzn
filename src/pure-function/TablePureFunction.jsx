import PureFunction from "./PureFunction";

export default function TableTidakPureFunction() {
    return (
        <>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 w-10">No</th>
                        <th className="border border-gray-300 px-4 py-2">Text</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <PureFunction id="1" text="dua" />
                    <PureFunction id="2" text="satu" />
                    <PureFunction id="3" text="tiga" />
                </tbody>
            </table>
            <main>
                <ul>
                    <li>Ini contoh klo kita pakek yang namanya tidak pure function, pasti kita akan mengalami masalah
                        <ol>Yaitu membuat data tidak konsisten</ol>
                        <ol>Dapat menyebabkan hasil yang tidak terduga</ol>
                        <ol>Ada efek sampingnya</ol>
                    </li>
                </ul>
            </main>
        </>
    )
}