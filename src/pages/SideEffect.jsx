import { useState } from "react";
import CodeSnippet from "../components/CodeSnippet";

export default function SideEffect() {
    const domManipulationCode = `// ❌ TIDAK DIREKOMENDASIKAN - DOM Manipulation
function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("inputname").value;
    document.getElementById("text-hello").innerText = \`Hello, \${name}\`;
}`;

    const reactWayCode = `// ✅ CARA REACT - Menggunakan State
import { useState } from 'react';

function Greeting() {
    const [name, setName] = useState("");
    const [greeting, setGreeting] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        setGreeting(\`Hello, \${name}\`);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button>Submit</button>
            </form>
            <h1>{greeting}</h1>
        </div>
    );
}`;

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
            {/* Intro */}
            <section className="space-y-4">
                <h1 className="text-4xl font-semibold text-slate-800">
                    Side Effects
                </h1>

                <p className="text-lg text-slate-600">
                    Memahami apa itu side effects dan kenapa kita harus menghindari DOM manipulation langsung di React.
                </p>
            </section>

            <Divider />

            {/* Apa itu Side Effect */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Apa itu Side Effect?
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        <strong>Side Effect</strong> (efek samping) adalah sesuatu yang terjadi <strong>di luar fungsi utama</strong> sebuah component.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="font-medium text-blue-900">💡 Contoh Side Effects:</p>
                        <ul className="list-disc pl-6 space-y-1 text-blue-800 mt-2">
                            <li><strong>DOM Manipulation</strong> - Mengubah HTML secara langsung</li>
                            <li><strong>Fetch Data</strong> - Mengambil data dari API</li>
                            <li><strong>Timer</strong> - setTimeout, setInterval</li>
                            <li><strong>Subscription</strong> - WebSocket, event listeners</li>
                            <li><strong>Local Storage</strong> - Menyimpan/membaca data</li>
                        </ul>
                    </div>

                    <p>
                        Di tutorial ini, kita akan fokus pada <strong>DOM Manipulation</strong> dan kenapa kita harus menghindarinya di React.
                    </p>
                </div>
            </section>

            <Divider />

            {/* Cara Lama: DOM Manipulation */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    ❌ Cara Lama: DOM Manipulation
                </h2>

                <p className="text-slate-600">
                    Sebelum belajar React, mungkin kamu terbiasa mengubah HTML langsung menggunakan <code className="bg-slate-100 px-2 py-1 rounded">getElementById</code> atau <code className="bg-slate-100 px-2 py-1 rounded">querySelector</code>:
                </p>

                <CodeSnippet
                    code={domManipulationCode}
                    language="javascript"
                    fileName="DOMManipulation.jsx"
                />

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <p className="font-medium text-red-900">🚫 Masalah dengan Cara Ini:</p>
                    <ul className="list-disc pl-6 space-y-1 text-red-800 mt-2">
                        <li><strong>Tidak sesuai prinsip React</strong> - React punya cara sendiri untuk update UI</li>
                        <li><strong>Sulit di-maintain</strong> - Kode jadi berantakan dan susah dilacak</li>
                        <li><strong>Performa buruk</strong> - React tidak tahu ada perubahan, jadi tidak bisa optimize</li>
                        <li><strong>Bugs lebih sering</strong> - Mudah terjadi konflik antara React dan DOM manipulation</li>
                        <li><strong>Testing sulit</strong> - Kode yang manipulasi DOM langsung susah di-test</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Cara React: State */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    ✅ Cara React: Menggunakan State
                </h2>

                <p className="text-slate-600">
                    Di React, kita <strong>tidak boleh</strong> mengubah DOM secara langsung. Sebagai gantinya, kita gunakan <strong>State</strong>!
                </p>

                <CodeSnippet
                    code={reactWayCode}
                    language="javascript"
                    fileName="ReactWay.jsx"
                />

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="font-medium text-green-900">✅ Keuntungan Cara React:</p>
                    <ul className="list-disc pl-6 space-y-1 text-green-800 mt-2">
                        <li><strong>Declarative</strong> - Kita deklarasikan "apa" yang ingin ditampilkan, bukan "bagaimana"</li>
                        <li><strong>Predictable</strong> - Lebih mudah diprediksi karena semua perubahan melalui state</li>
                        <li><strong>Performa optimal</strong> - React bisa optimize rendering dengan Virtual DOM</li>
                        <li><strong>Mudah di-debug</strong> - React DevTools bisa track semua perubahan state</li>
                        <li><strong>Testable</strong> - Component jadi pure function yang mudah di-test</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Perbandingan */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Perbandingan: DOM vs State
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border-l-4 border-red-500 bg-red-50 rounded-lg">
                        <h3 className="text-lg font-semibold text-red-900 mb-3">
                            ❌ DOM Manipulation
                        </h3>
                        <ul className="space-y-2 text-sm text-red-800">
                            <li>• Imperative (perintah langsung)</li>
                            <li>• Sulit di-track</li>
                            <li>• Performa tidak optimal</li>
                            <li>• Rawan bugs</li>
                            <li>• Tidak sesuai React</li>
                        </ul>
                    </div>

                    <div className="p-6 border-l-4 border-green-500 bg-green-50 rounded-lg">
                        <h3 className="text-lg font-semibold text-green-900 mb-3">
                            ✅ React State
                        </h3>
                        <ul className="space-y-2 text-sm text-green-800">
                            <li>• Declarative (deklarasi hasil)</li>
                            <li>• Mudah di-track</li>
                            <li>• Performa optimal</li>
                            <li>• Lebih aman</li>
                            <li>• Sesuai prinsip React</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Divider />

            {/* Contoh Interaktif */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Coba Sendiri!
                </h2>

                <p className="text-slate-600">
                    Bandingkan kedua cara ini. Keduanya menghasilkan hasil yang sama, tapi cara React jauh lebih baik!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <DOMWay />
                    <ReactWay />
                </div>
            </section>

            <Divider />

            {/* Kesimpulan */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Kesimpulan
                </h2>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                    <p className="font-medium text-purple-900">📌 Yang Perlu Diingat:</p>
                    <ul className="list-disc pl-6 space-y-2 text-purple-800 mt-2">
                        <li>
                            <strong>Jangan manipulasi DOM langsung</strong> di React
                        </li>
                        <li>
                            <strong>Gunakan State</strong> untuk semua perubahan UI
                        </li>
                        <li>
                            React punya cara sendiri yang lebih baik dan lebih efisien
                        </li>
                        <li>
                            Untuk side effects lain (fetch data, timer, dll), kita akan belajar <strong>useEffect</strong> nanti
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

function Divider() {
    return <hr className="my-10 border-slate-200" />;
}

// Contoh dengan DOM Manipulation (cara lama)
function DOMWay() {
    function handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById("inputname").value;
        const textElement = document.getElementById("text-hello");
        if (textElement) {
            textElement.innerText = `Hello, ${name}!`;
        }
    }

    return (
        <div className="p-6 border rounded-xl bg-red-50 space-y-4">
            <h3 className="text-xl font-semibold text-red-900">
                ❌ DOM Manipulation
            </h3>
            <p className="text-sm text-red-700">
                Menggunakan getElementById (tidak direkomendasikan)
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    id="inputname"
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2 mb-3"
                    placeholder="Masukkan nama..."
                />
                <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                    Submit
                </button>
            </form>
            <h2 id="text-hello" className="text-lg font-semibold text-gray-800"></h2>
        </div>
    );
}

// Contoh dengan React State (cara yang benar)
function ReactWay() {
    const [name, setName] = useState("");
    const [greeting, setGreeting] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setGreeting(`Hello, ${name}!`);
    }

    return (
        <div className="p-6 border rounded-xl bg-green-50 space-y-4">
            <h3 className="text-xl font-semibold text-green-900">
                ✅ React State
            </h3>
            <p className="text-sm text-green-700">
                Menggunakan useState (cara yang benar)
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2 mb-3"
                    placeholder="Masukkan nama..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                    Submit
                </button>
            </form>
            {greeting && (
                <h2 className="text-lg font-semibold text-gray-800">{greeting}</h2>
            )}
        </div>
    );
}