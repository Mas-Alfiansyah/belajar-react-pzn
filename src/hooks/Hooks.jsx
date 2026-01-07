import CodeSnippet from "../components/CodeSnippet";

export default function Hooks() {
    const hooksExample = `import { useState } from 'react';

function Counter() {
    // useState adalah salah satu contoh Hooks
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Tambah
            </button>
        </div>
    );
}`;

    const importExample = `import { useState, useEffect, useContext } from 'react';`;

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
            {/* Intro */}
            <section className="space-y-4">
                <h1 className="text-4xl font-semibold text-slate-800">
                    Pengantar Hooks
                </h1>

                <p className="text-lg text-slate-600">
                    Hooks adalah fitur spesial di React yang memungkinkan kita untuk "mengaitkan" (hook into) berbagai fitur React dari dalam function component.
                </p>
            </section>

            <Divider />

            {/* Apa itu Hooks */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Apa itu Hooks?
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        Hooks adalah fungsi-fungsi khusus yang disediakan oleh React. Dengan Hooks, kita bisa:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Menyimpan data</strong> yang bisa berubah-ubah (state)
                        </li>
                        <li>
                            <strong>Melakukan efek samping</strong> seperti mengambil data dari server
                        </li>
                        <li>
                            <strong>Mengakses context</strong> untuk berbagi data antar component
                        </li>
                        <li>
                            Dan masih banyak lagi!
                        </li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Kenapa Hooks Penting */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Kenapa Hooks Penting?
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        Sebelum ada Hooks, kita harus menggunakan Class Component untuk bisa menggunakan state dan lifecycle methods. Dengan Hooks, kita bisa melakukan hal yang sama tapi dengan Function Component yang lebih sederhana!
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="font-medium text-blue-900">💡 Tips untuk Pemula:</p>
                        <p className="text-blue-800 mt-2">
                            Hooks membuat kode React lebih mudah dibaca dan dipahami. Kamu tidak perlu bingung dengan <code className="bg-blue-100 px-2 py-1 rounded">this</code> atau <code className="bg-blue-100 px-2 py-1 rounded">bind</code> lagi!
                        </p>
                    </div>
                </div>
            </section>

            <Divider />

            {/* Contoh Penggunaan */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Contoh Penggunaan Hooks
                </h2>

                <p className="text-slate-600">
                    Berikut adalah contoh sederhana menggunakan <code className="bg-slate-100 px-2 py-1 rounded">useState</code> Hook:
                </p>

                <CodeSnippet
                    code={hooksExample}
                    language="javascript"
                    fileName="Counter.jsx"
                />

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="font-medium text-green-900">✅ Penjelasan Kode:</p>
                    <ul className="list-disc pl-6 space-y-1 text-green-800 mt-2">
                        <li><code className="bg-green-100 px-2 py-1 rounded">useState(0)</code> - Membuat state dengan nilai awal 0</li>
                        <li><code className="bg-green-100 px-2 py-1 rounded">count</code> - Variabel untuk membaca nilai state</li>
                        <li><code className="bg-green-100 px-2 py-1 rounded">setCount</code> - Fungsi untuk mengubah nilai state</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Jenis-jenis Hooks */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Jenis-jenis Hooks yang Sering Digunakan
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg bg-white shadow-sm">
                        <h3 className="font-semibold text-lg text-slate-800 mb-2">useState</h3>
                        <p className="text-sm text-slate-600">
                            Untuk menyimpan dan mengubah data yang bisa berubah-ubah
                        </p>
                    </div>

                    <div className="p-4 border rounded-lg bg-white shadow-sm">
                        <h3 className="font-semibold text-lg text-slate-800 mb-2">useEffect</h3>
                        <p className="text-sm text-slate-600">
                            Untuk melakukan efek samping seperti fetch data atau subscribe
                        </p>
                    </div>

                    <div className="p-4 border rounded-lg bg-white shadow-sm">
                        <h3 className="font-semibold text-lg text-slate-800 mb-2">useContext</h3>
                        <p className="text-sm text-slate-600">
                            Untuk mengakses data dari Context tanpa prop drilling
                        </p>
                    </div>

                    <div className="p-4 border rounded-lg bg-white shadow-sm">
                        <h3 className="font-semibold text-lg text-slate-800 mb-2">useReducer</h3>
                        <p className="text-sm text-slate-600">
                            Untuk mengelola state yang kompleks dengan reducer pattern
                        </p>
                    </div>
                </div>
            </section>

            <Divider />

            {/* Cara Import Hooks */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Cara Menggunakan Hooks
                </h2>

                <p className="text-slate-600">
                    Untuk menggunakan Hooks, kita perlu meng-import nya terlebih dahulu dari React:
                </p>

                <CodeSnippet
                    code={importExample}
                    language="javascript"
                    fileName="App.jsx"
                />

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="font-medium text-yellow-900">⚠️ Aturan Penting Hooks:</p>
                    <ul className="list-disc pl-6 space-y-1 text-yellow-800 mt-2">
                        <li>Hooks hanya bisa dipanggil di <strong>level teratas</strong> function component</li>
                        <li>Jangan panggil Hooks di dalam loop, kondisi, atau nested function</li>
                        <li>Hooks hanya bisa digunakan di <strong>Function Component</strong> atau Custom Hooks</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Link ke Dokumentasi */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Pelajari Lebih Lanjut
                </h2>

                <p className="text-slate-600">
                    React menyediakan banyak Hooks lainnya yang bisa kamu pelajari. Untuk dokumentasi lengkap, kunjungi:
                </p>

                <a
                    href="https://react.dev/reference/react/hooks"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    📚 Dokumentasi Resmi React Hooks
                </a>

                <p className="text-sm text-slate-500 mt-4">
                    Di menu-menu selanjutnya, kita akan mempelajari Hooks satu per satu dengan contoh praktis!
                </p>
            </section>
        </div>
    );
}

function Divider() {
    return <hr className="my-10 border-slate-200" />;
}
