import { useState } from "react";
import { useImmer } from "use-immer";
import CodeSnippet from "../components/CodeSnippet";

export default function NestedObject() {
    const nestedObjectExample = `const person = {
    name: "Budi",
    address: {
        city: "Jakarta",
        country: "Indonesia"
    }
};`;

    const wrongWayCode = `// ❌ SALAH - Mengubah nested object langsung
function updateCity(newCity) {
    person.address.city = newCity;  // Jangan!
    setPerson(person);  // React tidak akan re-render
}`;

    const hardWayCode = `// 😰 SULIT - Spread operator bertingkat
function updateCity(newCity) {
    setPerson({
        ...person,
        address: {
            ...person.address,
            city: newCity
        }
    });
}`;

    const immerWayCode = `// ✨ MUDAH - Menggunakan Immer
import { useImmer } from 'use-immer';

function updateCity(newCity) {
    setPerson(draft => {
        draft.address.city = newCity;  // Langsung ubah!
    });
}`;

    const deepNestedExample = `// Nested object yang sangat dalam
const user = {
    profile: {
        personal: {
            contact: {
                email: "user@example.com",
                phone: {
                    home: "021-1234567",
                    mobile: "0812-3456789"
                }
            }
        }
    }
};

// Tanpa Immer - SANGAT SULIT! 😱
setUser({
    ...user,
    profile: {
        ...user.profile,
        personal: {
            ...user.profile.personal,
            contact: {
                ...user.profile.personal.contact,
                phone: {
                    ...user.profile.personal.contact.phone,
                    mobile: "0813-9999999"
                }
            }
        }
    }
});

// Dengan Immer - MUDAH! 😊
setUser(draft => {
    draft.profile.personal.contact.phone.mobile = "0813-9999999";
});`;

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
            {/* Intro */}
            <section className="space-y-4">
                <h1 className="text-4xl font-semibold text-slate-800">
                    Nested Object di State
                </h1>

                <p className="text-lg text-slate-600">
                    Belajar cara mengelola object bersarang (nested object) di state React dengan mudah menggunakan Immer.
                </p>
            </section>

            <Divider />

            {/* Apa itu Nested Object */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Apa itu Nested Object?
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        <strong>Nested Object</strong> adalah object yang berada di dalam object lain. Ini sangat umum digunakan untuk data yang kompleks.
                    </p>

                    <CodeSnippet
                        code={nestedObjectExample}
                        language="javascript"
                        fileName="nested-object.js"
                    />

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="font-medium text-blue-900">💡 Contoh Penggunaan:</p>
                        <ul className="list-disc pl-6 space-y-1 text-blue-800 mt-2">
                            <li><strong>User Profile</strong> - Data user dengan alamat, kontak, dll</li>
                            <li><strong>Form Data</strong> - Form dengan banyak section</li>
                            <li><strong>Settings</strong> - Konfigurasi aplikasi bertingkat</li>
                            <li><strong>API Response</strong> - Data dari server yang kompleks</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Divider />

            {/* Masalah */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Masalah dengan Nested Object
                </h2>

                <p className="text-slate-600">
                    Sama seperti object biasa, kita tidak boleh mengubah nested object secara langsung:
                </p>

                <CodeSnippet
                    code={wrongWayCode}
                    language="javascript"
                    fileName="wrong-way.jsx"
                />

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <p className="font-medium text-red-900">❌ Masalah:</p>
                    <ul className="list-disc pl-6 space-y-1 text-red-800 mt-2">
                        <li>Mengubah object yang sama (mutasi)</li>
                        <li>React tidak mendeteksi perubahan</li>
                        <li>Component tidak re-render</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Cara Manual (Sulit) */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    😰 Cara Manual: Spread Operator Bertingkat
                </h2>

                <p className="text-slate-600">
                    Kita bisa menggunakan spread operator, tapi untuk nested object ini jadi <strong>sangat merepotkan</strong>:
                </p>

                <CodeSnippet
                    code={hardWayCode}
                    language="javascript"
                    fileName="hard-way.jsx"
                />

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="font-medium text-yellow-900">⚠️ Masalah Cara Ini:</p>
                    <ul className="list-disc pl-6 space-y-1 text-yellow-800 mt-2">
                        <li>Kode jadi <strong>sangat panjang</strong> dan susah dibaca</li>
                        <li>Mudah <strong>salah ketik</strong></li>
                        <li>Semakin dalam nested-nya, semakin <strong>rumit</strong></li>
                        <li>Sulit di-<strong>maintain</strong></li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Solusi: Immer */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    ✨ Solusi: Menggunakan Immer
                </h2>

                <p className="text-slate-600">
                    Dengan <strong>Immer</strong>, kita bisa mengubah nested object seolah-olah kita mengubah object biasa!
                </p>

                <CodeSnippet
                    code={immerWayCode}
                    language="javascript"
                    fileName="immer-way.jsx"
                />

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="font-medium text-green-900">✅ Keuntungan Immer:</p>
                    <ul className="list-disc pl-6 space-y-1 text-green-800 mt-2">
                        <li><strong>Kode lebih pendek</strong> dan mudah dibaca</li>
                        <li><strong>Tidak perlu</strong> spread operator bertingkat</li>
                        <li>Immer otomatis membuat <strong>copy</strong> untuk kita</li>
                        <li>Bekerja untuk nested object <strong>sedalam apapun</strong></li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Contoh Ekstrem */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Contoh: Nested Object yang Sangat Dalam
                </h2>

                <p className="text-slate-600">
                    Lihat perbedaan drastis antara cara manual vs Immer untuk nested object yang sangat dalam:
                </p>

                <CodeSnippet
                    code={deepNestedExample}
                    language="javascript"
                    fileName="deep-nested.jsx"
                />

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                    <p className="font-medium text-purple-900">🎯 Kesimpulan:</p>
                    <p className="text-purple-800 mt-2">
                        Semakin dalam nested object-nya, semakin <strong>wajib</strong> menggunakan Immer! Kode jadi jauh lebih mudah dibaca dan di-maintain.
                    </p>
                </div>
            </section>

            <Divider />

            {/* Contoh Praktis */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Contoh Praktis: Form Profile
                </h2>

                <p className="text-slate-600">
                    Berikut adalah contoh form profile dengan nested object menggunakan Immer:
                </p>

                <ProfileForm />
            </section>

            <Divider />

            {/* Rekomendasi */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Rekomendasi
                </h2>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="font-medium text-blue-900">💡 Best Practices:</p>
                    <ul className="list-disc pl-6 space-y-2 text-blue-800 mt-2">
                        <li>
                            <strong>Hindari nested object terlalu dalam</strong> - Maksimal 2-3 level
                        </li>
                        <li>
                            <strong>Gunakan Immer</strong> untuk nested object apapun
                        </li>
                        <li>
                            Pertimbangkan <strong>flatten structure</strong> jika memungkinkan
                        </li>
                        <li>
                            Untuk data sangat kompleks, pertimbangkan <strong>state management library</strong> (Redux, Zustand)
                        </li>
                    </ul>
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
                            Nested object <strong>harus immutable</strong> seperti object biasa
                        </li>
                        <li>
                            Spread operator bertingkat <strong>sangat merepotkan</strong>
                        </li>
                        <li>
                            <strong>Immer adalah solusi terbaik</strong> untuk nested object
                        </li>
                        <li>
                            Hindari nested object yang <strong>terlalu dalam</strong>
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

// Profile Form dengan Nested Object
const initialProfile = {
    personal: {
        name: "",
        email: ""
    },
    address: {
        street: "",
        city: "",
        country: ""
    }
};

function ProfileForm() {
    const [profile, setProfile] = useImmer(initialProfile);

    return (
        <div className="p-6 border rounded-xl bg-white shadow-sm space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Form Profile</h3>

            <form className="space-y-6">
                {/* Personal Info */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-700">Informasi Personal</h4>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nama
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={profile.personal.name}
                            onChange={(e) => setProfile(draft => {
                                draft.personal.name = e.target.value;
                            })}
                            placeholder="Masukkan nama"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={profile.personal.email}
                            onChange={(e) => setProfile(draft => {
                                draft.personal.email = e.target.value;
                            })}
                            placeholder="nama@email.com"
                        />
                    </div>
                </div>

                {/* Address */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-700">Alamat</h4>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Jalan
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={profile.address.street}
                            onChange={(e) => setProfile(draft => {
                                draft.address.street = e.target.value;
                            })}
                            placeholder="Jl. Contoh No. 123"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Kota
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                value={profile.address.city}
                                onChange={(e) => setProfile(draft => {
                                    draft.address.city = e.target.value;
                                })}
                                placeholder="Jakarta"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Negara
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                value={profile.address.country}
                                onChange={(e) => setProfile(draft => {
                                    draft.address.country = e.target.value;
                                })}
                                placeholder="Indonesia"
                            />
                        </div>
                    </div>
                </div>
            </form>

            {/* Preview */}
            <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Preview Data:
                </h4>
                <div className="space-y-3 text-sm">
                    <div>
                        <p className="font-semibold text-gray-700">Personal:</p>
                        <p className="text-gray-600 ml-4">Nama: {profile.personal.name || "(belum diisi)"}</p>
                        <p className="text-gray-600 ml-4">Email: {profile.personal.email || "(belum diisi)"}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-700">Alamat:</p>
                        <p className="text-gray-600 ml-4">Jalan: {profile.address.street || "(belum diisi)"}</p>
                        <p className="text-gray-600 ml-4">Kota: {profile.address.city || "(belum diisi)"}</p>
                        <p className="text-gray-600 ml-4">Negara: {profile.address.country || "(belum diisi)"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}