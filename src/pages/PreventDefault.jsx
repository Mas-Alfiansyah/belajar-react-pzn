import { useState } from "react";
import CodeSnippet from "../components/CodeSnippet";

export default function PreventDefault() {
    const preventDefaultExample = `function handleSubmit(e) {
    e.preventDefault();  // Mencegah reload halaman
    alert("Form berhasil disubmit!");
}

return (
    <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
    </form>
);`;

    const withoutPreventDefaultCode = `// ❌ Tanpa preventDefault
function handleSubmit(e) {
    alert("Form berhasil disubmit!");
    // Halaman akan reload setelah alert!
}`;

    const linkPreventDefaultCode = `function handleClick(e) {
    e.preventDefault();  // Mencegah navigasi ke link
    console.log("Link diklik tapi tidak pindah halaman");
}

return (
    <a href="https://google.com" onClick={handleClick}>
        Klik saya (tidak akan pindah halaman)
    </a>
);`;

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
            {/* Intro */}
            <section className="space-y-4">
                <h1 className="text-4xl font-semibold text-slate-800">
                    Prevent Default
                </h1>

                <p className="text-lg text-slate-600">
                    Belajar cara mencegah perilaku default browser menggunakan <code className="bg-slate-100 px-2 py-1 rounded">preventDefault()</code>.
                </p>
            </section>

            <Divider />

            {/* Apa itu preventDefault */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Apa itu preventDefault?
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        <code className="bg-slate-100 px-2 py-1 rounded">preventDefault()</code> adalah method yang digunakan untuk <strong>mencegah perilaku default</strong> dari suatu event.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="font-medium text-blue-900">💡 Contoh Perilaku Default:</p>
                        <ul className="list-disc pl-6 space-y-1 text-blue-800 mt-2">
                            <li>Form yang di-submit akan <strong>reload halaman</strong></li>
                            <li>Link yang diklik akan <strong>pindah ke halaman lain</strong></li>
                            <li>Checkbox yang diklik akan <strong>berubah status</strong></li>
                        </ul>
                    </div>

                    <p>
                        Kadang kita ingin menangani event ini sendiri tanpa perilaku default browser. Di sinilah <code className="bg-slate-100 px-2 py-1 rounded">preventDefault()</code> berguna!
                    </p>
                </div>
            </section>

            <Divider />

            {/* Masalah Tanpa preventDefault */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Masalah Tanpa preventDefault
                </h2>

                <p className="text-slate-600">
                    Lihat apa yang terjadi jika kita tidak menggunakan <code className="bg-slate-100 px-2 py-1 rounded">preventDefault()</code> pada form:
                </p>

                <CodeSnippet
                    code={withoutPreventDefaultCode}
                    language="javascript"
                    fileName="FormWithoutPrevent.jsx"
                />

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <p className="font-medium text-red-900">❌ Masalah:</p>
                    <ul className="list-disc pl-6 space-y-1 text-red-800 mt-2">
                        <li>Setelah alert muncul, halaman akan <strong>reload</strong></li>
                        <li>Semua data yang diinput akan <strong>hilang</strong></li>
                        <li>State React akan <strong>reset</strong></li>
                        <li>User experience jadi <strong>buruk</strong></li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Solusi dengan preventDefault */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    ✅ Solusi: Menggunakan preventDefault
                </h2>

                <p className="text-slate-600">
                    Dengan menambahkan <code className="bg-slate-100 px-2 py-1 rounded">e.preventDefault()</code>, kita bisa mencegah reload halaman:
                </p>

                <CodeSnippet
                    code={preventDefaultExample}
                    language="javascript"
                    fileName="FormWithPrevent.jsx"
                />

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="font-medium text-green-900">✅ Keuntungan:</p>
                    <ul className="list-disc pl-6 space-y-1 text-green-800 mt-2">
                        <li>Halaman <strong>tidak reload</strong></li>
                        <li>Data tetap <strong>tersimpan</strong></li>
                        <li>Kita bisa menangani submit dengan <strong>cara kita sendiri</strong></li>
                        <li>User experience lebih <strong>smooth</strong></li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Contoh Lain */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Contoh Lain: Mencegah Navigasi Link
                </h2>

                <p className="text-slate-600">
                    <code className="bg-slate-100 px-2 py-1 rounded">preventDefault()</code> juga bisa digunakan untuk mencegah link pindah halaman:
                </p>

                <CodeSnippet
                    code={linkPreventDefaultCode}
                    language="javascript"
                    fileName="LinkPrevent.jsx"
                />

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="font-medium text-yellow-900">💡 Kapan Ini Berguna?</p>
                    <ul className="list-disc pl-6 space-y-1 text-yellow-800 mt-2">
                        <li>Membuat Single Page Application (SPA)</li>
                        <li>Menampilkan modal sebelum pindah halaman</li>
                        <li>Validasi sebelum navigasi</li>
                        <li>Custom routing behavior</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Contoh Interaktif */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Coba Sendiri!
                </h2>

                <p className="text-slate-600">
                    Bandingkan perbedaan antara form dengan dan tanpa <code className="bg-slate-100 px-2 py-1 rounded">preventDefault()</code>:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormWithoutPrevent />
                    <FormWithPrevent />
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
                            <code className="bg-purple-100 px-2 py-1 rounded">preventDefault()</code> mencegah perilaku default browser
                        </li>
                        <li>
                            Sangat berguna untuk <strong>form submission</strong> dan <strong>link navigation</strong>
                        </li>
                        <li>
                            Selalu gunakan pada form di React untuk mencegah reload halaman
                        </li>
                        <li>
                            Parameter <code className="bg-purple-100 px-2 py-1 rounded">e</code> adalah event object yang berisi method <code className="bg-purple-100 px-2 py-1 rounded">preventDefault()</code>
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

function FormWithoutPrevent() {
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        // TIDAK ada preventDefault - halaman akan reload!
        alert("Form disubmit! Halaman akan reload...");
    }

    return (
        <div className="p-6 border rounded-xl bg-red-50 space-y-4">
            <h3 className="text-xl font-semibold text-red-900">
                ❌ Tanpa preventDefault
            </h3>
            <p className="text-sm text-red-700">
                Klik submit dan lihat halaman akan reload
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2 mb-3"
                    placeholder="Ketik sesuatu..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                    Submit (Akan Reload!)
                </button>
            </form>
        </div>
    );
}

function FormWithPrevent() {
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();  // Mencegah reload!
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
    }

    return (
        <div className="p-6 border rounded-xl bg-green-50 space-y-4">
            <h3 className="text-xl font-semibold text-green-900">
                ✅ Dengan preventDefault
            </h3>
            <p className="text-sm text-green-700">
                Klik submit dan halaman tidak akan reload
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2 mb-3"
                    placeholder="Ketik sesuatu..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                    Submit (Tidak Reload!)
                </button>
            </form>
            {submitted && (
                <div className="bg-green-100 border border-green-300 rounded-lg p-3 text-green-800 text-sm">
                    ✅ Form berhasil disubmit! Halaman tidak reload.
                </div>
            )}
        </div>
    );
}