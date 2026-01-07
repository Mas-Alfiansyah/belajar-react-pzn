import { useState } from "react";
import CodeSnippet from "../components/CodeSnippet";

export default function ObjectDiState() {
    const objectStateExample = `const [contact, setContact] = useState({
    nama: "",
    email: "",
    pesan: ""
});`;

    const wrongWayCode = `// ❌ SALAH - Mengubah object langsung
function handleChangeName(e) {
    contact.nama = e.target.value;  // Jangan lakukan ini!
    setContact(contact);  // React tidak akan re-render
}`;

    const correctWayCode = `// ✅ BENAR - Membuat object baru dengan spread operator
function handleChangeName(e) {
    setContact({
        ...contact,  // Copy semua property yang ada
        nama: e.target.value  // Ubah hanya property nama
    });
}`;

    const spreadExampleCode = `// Contoh spread operator
const person = { nama: "Budi", umur: 25 };
const newPerson = { ...person, umur: 26 };

console.log(person);     // { nama: "Budi", umur: 25 } - tidak berubah
console.log(newPerson);  // { nama: "Budi", umur: 26 } - object baru`;

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
            {/* Intro */}
            <section className="space-y-4">
                <h1 className="text-4xl font-semibold text-slate-800">
                    Object di State
                </h1>

                <p className="text-lg text-slate-600">
                    Belajar cara yang benar untuk menyimpan dan mengubah object di dalam state React.
                </p>
            </section>

            <Divider />

            {/* Penjelasan Object di State */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Apa itu Object di State?
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        State di React bisa menyimpan berbagai jenis data JavaScript, termasuk <strong>Object</strong>. Object sangat berguna ketika kita punya data yang saling berhubungan.
                    </p>

                    <p>
                        Contohnya, data form kontak yang punya nama, email, dan pesan. Daripada membuat 3 state terpisah, lebih baik kita gabungkan dalam 1 object!
                    </p>
                </div>

                <CodeSnippet
                    code={objectStateExample}
                    language="javascript"
                    fileName="ContactForm.jsx"
                />

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="font-medium text-green-900">✅ Keuntungan Menggunakan Object:</p>
                    <ul className="list-disc pl-6 space-y-1 text-green-800 mt-2">
                        <li>Data yang berhubungan jadi satu kesatuan</li>
                        <li>Lebih mudah di-manage daripada banyak state terpisah</li>
                        <li>Kode lebih rapi dan terorganisir</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Immutable Data */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Aturan Penting: Immutable Data
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        Saat bekerja dengan object di state, kita harus memperlakukan object tersebut sebagai <strong>Immutable</strong> (tidak bisa diubah).
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                        <p className="font-medium text-yellow-900">⚠️ Apa Artinya Immutable?</p>
                        <p className="text-yellow-800 mt-2">
                            Immutable berarti kita <strong>tidak boleh mengubah object yang sudah ada</strong>. Kalau mau update, kita harus buat object <strong>baru</strong>!
                        </p>
                    </div>

                    <p className="mt-4">
                        Kenapa? Karena React hanya akan melakukan re-render jika object-nya <strong>berbeda</strong>. Kalau kita cuma ubah isi object yang sama, React tidak akan tahu ada perubahan!
                    </p>
                </div>
            </section>

            <Divider />

            {/* Cara Yang Salah */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    ❌ Cara Yang Salah
                </h2>

                <p className="text-slate-600">
                    Jangan pernah mengubah object di state secara langsung seperti ini:
                </p>

                <CodeSnippet
                    code={wrongWayCode}
                    language="javascript"
                    fileName="ContactForm.jsx"
                />

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <p className="font-medium text-red-900">🚫 Masalah dengan Cara Ini:</p>
                    <ul className="list-disc pl-6 space-y-1 text-red-800 mt-2">
                        <li>Object yang sama diubah langsung (mutasi)</li>
                        <li>React tidak mendeteksi ada perubahan</li>
                        <li>Component tidak akan re-render</li>
                        <li>UI tidak update walaupun data berubah</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Cara Yang Benar */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    ✅ Cara Yang Benar
                </h2>

                <p className="text-slate-600">
                    Gunakan <strong>spread operator</strong> (<code className="bg-slate-100 px-2 py-1 rounded">...</code>) untuk membuat object baru:
                </p>

                <CodeSnippet
                    code={correctWayCode}
                    language="javascript"
                    fileName="ContactForm.jsx"
                />

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="font-medium text-green-900">✅ Kenapa Cara Ini Benar:</p>
                    <ul className="list-disc pl-6 space-y-1 text-green-800 mt-2">
                        <li><code className="bg-green-100 px-2 py-1 rounded">...contact</code> - Meng-copy semua property dari object lama</li>
                        <li><code className="bg-green-100 px-2 py-1 rounded">nama: e.target.value</code> - Menimpa property nama dengan nilai baru</li>
                        <li>Hasilnya adalah object <strong>baru</strong> yang berbeda</li>
                        <li>React mendeteksi perubahan dan melakukan re-render</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Penjelasan Spread Operator */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Memahami Spread Operator (...)
                </h2>

                <p className="text-slate-600">
                    Spread operator adalah fitur JavaScript yang sangat berguna untuk meng-copy object:
                </p>

                <CodeSnippet
                    code={spreadExampleCode}
                    language="javascript"
                    fileName="spread-example.js"
                />

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="font-medium text-blue-900">💡 Tips untuk Pemula:</p>
                    <p className="text-blue-800 mt-2">
                        Bayangkan spread operator seperti "menyebar" semua isi object ke object baru. Property yang ditulis setelahnya akan menimpa property yang sama!
                    </p>
                </div>
            </section>

            <Divider />

            {/* Contoh Praktis */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Contoh Praktis: Form Kontak
                </h2>

                <p className="text-slate-600">
                    Coba isi form di bawah ini. Perhatikan bagaimana data berubah secara real-time!
                </p>

                <ContactForm />
            </section>

            <Divider />

            {/* Catatan Penting */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Catatan Penting
                </h2>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                    <p className="font-medium text-purple-900">📌 Yang Perlu Diingat:</p>
                    <ul className="list-disc pl-6 space-y-2 text-purple-800 mt-2">
                        <li>
                            <strong>Selalu buat object baru</strong> saat update state
                        </li>
                        <li>
                            <strong>Gunakan spread operator</strong> untuk copy property yang ada
                        </li>
                        <li>
                            <strong>Jangan ubah object langsung</strong> - ini tidak akan trigger re-render
                        </li>
                        <li>
                            Untuk object yang lebih kompleks (nested), lihat menu <strong>Nested Object</strong>
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

const initialContact = {
    nama: "",
    email: "",
    pesan: ""
};

function ContactForm() {
    const [contact, setContact] = useState(initialContact);

    function handleChangeName(e) {
        setContact({
            ...contact,
            nama: e.target.value
        });
    }

    function handleChangeEmail(e) {
        setContact({
            ...contact,
            email: e.target.value
        });
    }

    function handleChangePesan(e) {
        setContact({
            ...contact,
            pesan: e.target.value
        });
    }

    return (
        <div className="p-6 border rounded-xl bg-white shadow-sm space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Form Kontak</h3>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={contact.nama}
                        onChange={handleChangeName}
                        placeholder="Masukkan nama Anda"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={contact.email}
                        onChange={handleChangeEmail}
                        placeholder="nama@email.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pesan
                    </label>
                    <textarea
                        className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows="4"
                        value={contact.pesan}
                        onChange={handleChangePesan}
                        placeholder="Tulis pesan Anda di sini..."
                    />
                </div>
            </form>

            <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Preview Data:
                </h4>
                <div className="space-y-2 text-sm">
                    <p>
                        <strong className="text-gray-700">Nama:</strong>{" "}
                        <span className="text-gray-600">{contact.nama || "(belum diisi)"}</span>
                    </p>
                    <p>
                        <strong className="text-gray-700">Email:</strong>{" "}
                        <span className="text-gray-600">{contact.email || "(belum diisi)"}</span>
                    </p>
                    <p>
                        <strong className="text-gray-700">Pesan:</strong>{" "}
                        <span className="text-gray-600">{contact.pesan || "(belum diisi)"}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}