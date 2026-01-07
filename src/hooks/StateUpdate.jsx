import CodeSnippet from "../components/CodeSnippet";
import { useState } from "react";

export default function StateUpdate() {
    const normalUpdateCode = `function Counter() {
    const [count, setCount] = useState(0);
    
    function handleClick() {
        // Ini TIDAK akan menambah 3 kali!
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        // Hasilnya hanya +1, bukan +3
    }
    
    return <button onClick={handleClick}>Count: {count}</button>;
}`;

    const lambdaUpdateCode = `function Counter() {
    const [count, setCount] = useState(0);
    
    function handleClick() {
        // Ini AKAN menambah 3 kali!
        setCount(c => c + 1);  // c adalah nilai terbaru
        setCount(c => c + 1);  // c adalah nilai terbaru
        setCount(c => c + 1);  // c adalah nilai terbaru
        // Hasilnya +3!
    }
    
    return <button onClick={handleClick}>Count: {count}</button>;
}`;

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
            {/* Intro */}
            <section className="space-y-4">
                <h1 className="text-4xl font-semibold text-slate-800">
                    State Update
                </h1>

                <p className="text-lg text-slate-600">
                    Memahami cara React mengupdate state adalah kunci untuk membuat aplikasi yang bekerja sesuai harapan.
                </p>
            </section>

            <Divider />

            {/* Masalah Update Biasa */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Masalah dengan Update Biasa
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        Seperti yang sudah kita pelajari sebelumnya, ketika kita melakukan update state berkali-kali, React <strong>tidak langsung mengubah</strong> nilai state di saat itu juga.
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                        <p className="font-medium text-red-900">❌ Kesalahan Umum:</p>
                        <p className="text-red-800 mt-2">
                            Banyak pemula mengira jika memanggil <code className="bg-red-100 px-2 py-1 rounded">setCount(count + 1)</code> tiga kali akan menambah nilai sebanyak 3. Tapi kenyataannya hanya bertambah 1!
                        </p>
                    </div>

                    <p>
                        Ini terjadi karena nilai <code className="bg-slate-100 px-2 py-1 rounded">count</code> tidak berubah sampai component di-render ulang. Jadi ketiga pemanggilan tersebut menggunakan nilai <code className="bg-slate-100 px-2 py-1 rounded">count</code> yang sama.
                    </p>
                </div>

                <CodeSnippet
                    code={normalUpdateCode}
                    language="javascript"
                    fileName="Counter.jsx"
                />

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="font-medium text-yellow-900">📝 Penjelasan:</p>
                    <p className="text-yellow-800 mt-2">
                        Misalkan <code className="bg-yellow-100 px-2 py-1 rounded">count</code> bernilai 0. Ketika kita panggil <code className="bg-yellow-100 px-2 py-1 rounded">setCount(count + 1)</code> tiga kali, semuanya membaca nilai 0, jadi hasilnya tetap 1, bukan 3.
                    </p>
                </div>
            </section>

            <Divider />

            {/* Solusi dengan Lambda */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Solusi: Menggunakan Fungsi Lambda
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        Kadang-kadang, kita memang perlu mengubah state berkali-kali sebelum render ulang terjadi. Untuk kasus seperti ini, kita bisa menggunakan <strong>fungsi lambda</strong> (arrow function) sebagai parameter.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <p className="font-medium text-green-900">✅ Solusi yang Benar:</p>
                        <p className="text-green-800 mt-2">
                            Dengan menggunakan fungsi lambda, kita memberitahu React: "Gunakan nilai state yang <strong>paling baru</strong>, bukan nilai saat ini!"
                        </p>
                    </div>
                </div>

                <CodeSnippet
                    code={lambdaUpdateCode}
                    language="javascript"
                    fileName="Counter.jsx"
                />

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="font-medium text-blue-900">💡 Cara Kerja Lambda:</p>
                    <ul className="list-disc pl-6 space-y-1 text-blue-800 mt-2">
                        <li><code className="bg-blue-100 px-2 py-1 rounded">c =&gt; c + 1</code> adalah fungsi yang menerima nilai state terbaru</li>
                        <li>Parameter <code className="bg-blue-100 px-2 py-1 rounded">c</code> adalah nilai state yang sudah diupdate sebelumnya</li>
                        <li>React akan menjalankan fungsi ini secara berurutan dengan nilai yang selalu update</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Contoh Interaktif */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Coba Sendiri!
                </h2>

                <p className="text-slate-600">
                    Berikut adalah dua counter untuk membandingkan perbedaannya:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <NormalCounter />
                    <LambdaCounter />
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                    <p className="font-medium text-purple-900">🎯 Kesimpulan:</p>
                    <p className="text-purple-800 mt-2">
                        Gunakan fungsi lambda <code className="bg-purple-100 px-2 py-1 rounded">(prevState =&gt; newState)</code> ketika nilai state baru bergantung pada nilai state sebelumnya!
                    </p>
                </div>
            </section>

            <Divider />

            {/* Kapan Menggunakan */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Kapan Menggunakan Lambda?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
                        <h3 className="font-semibold text-lg text-green-900 mb-2">✅ Gunakan Lambda</h3>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-green-800">
                            <li>Update state berkali-kali dalam satu event</li>
                            <li>Nilai baru bergantung pada nilai lama</li>
                            <li>Di dalam loop atau kondisi</li>
                        </ul>
                    </div>

                    <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
                        <h3 className="font-semibold text-lg text-blue-900 mb-2">ℹ️ Update Biasa</h3>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-blue-800">
                            <li>Update state sekali saja</li>
                            <li>Nilai baru tidak bergantung nilai lama</li>
                            <li>Mengeset nilai tetap/konstan</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Divider() {
    return <hr className="my-10 border-slate-200" />;
}

// Counter dengan update biasa
function NormalCounter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }

    return (
        <div className="p-6 border rounded-xl bg-red-50 space-y-4">
            <h3 className="text-xl font-semibold text-red-900">
                ❌ Update Biasa
            </h3>
            <p className="text-sm text-red-700">
                Memanggil setCount 3x dengan nilai biasa
            </p>
            <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-red-700">
                    {count}
                </span>
                <button
                    onClick={handleClick}
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                    +3? (Sebenarnya +1)
                </button>
            </div>
        </div>
    );
}

// Counter dengan lambda
function LambdaCounter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    return (
        <div className="p-6 border rounded-xl bg-green-50 space-y-4">
            <h3 className="text-xl font-semibold text-green-900">
                ✅ Update dengan Lambda
            </h3>
            <p className="text-sm text-green-700">
                Memanggil setCount 3x dengan fungsi lambda
            </p>
            <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-green-700">
                    {count}
                </span>
                <button
                    onClick={handleClick}
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                    +3 (Benar!)
                </button>
            </div>
        </div>
    );
}