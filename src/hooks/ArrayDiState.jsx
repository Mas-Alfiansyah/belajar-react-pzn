import { useState } from "react";
import { useImmer } from "use-immer";
import CodeSnippet from "../components/CodeSnippet";

export default function ArrayDiState() {
    const arrayStateExample = `const [items, setItems] = useState([]);`;

    const wrongWayCode = `// ❌ SALAH - Mengubah array langsung
function addItem(newItem) {
    items.push(newItem);  // Jangan lakukan ini!
    setItems(items);  // React tidak akan re-render
}`;

    const correctWayCode = `// ✅ BENAR - Membuat array baru
function addItem(newItem) {
    setItems([...items, newItem]);  // Spread operator
    // atau
    setItems(items.concat(newItem));  // Method concat
}`;

    const immerWayCode = `// ✨ LEBIH MUDAH - Menggunakan Immer
import { useImmer } from 'use-immer';

function TodoApp() {
    const [items, setItems] = useImmer([]);
    
    function addItem(newItem) {
        setItems(draft => {
            draft.push(newItem);  // Dengan Immer, ini aman!
        });
    }
}`;

    const arrayOperationsCode = `// Operasi Array yang Aman (Immutable)

// ✅ Menambah item
setItems([...items, newItem]);
setItems(items.concat(newItem));

// ✅ Menghapus item berdasarkan index
setItems(items.filter((item, index) => index !== indexToRemove));

// ✅ Mengubah item berdasarkan index
setItems(items.map((item, index) => 
    index === indexToUpdate ? newItem : item
));

// ✅ Mengurutkan (harus copy dulu!)
setItems([...items].sort());`;

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
            {/* Intro */}
            <section className="space-y-4">
                <h1 className="text-4xl font-semibold text-slate-800">
                    Array di State
                </h1>

                <p className="text-lg text-slate-600">
                    Belajar cara yang benar untuk mengelola array di dalam state React, dengan atau tanpa library Immer.
                </p>
            </section>

            <Divider />

            {/* Penjelasan Array di State */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Array di State
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        Sama seperti Object, <strong>Array di State juga harus diperlakukan sebagai Immutable</strong> (tidak bisa diubah langsung).
                    </p>

                    <p>
                        Artinya, operasi seperti menambah, mengubah, atau menghapus data di Array harus dilakukan dengan membuat <strong>Array baru</strong>.
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                        <p className="font-medium text-yellow-900">⚠️ Kenapa Harus Immutable?</p>
                        <p className="text-yellow-800 mt-2">
                            React hanya akan re-render jika array-nya <strong>berbeda</strong>. Kalau kita cuma ubah isi array yang sama, React tidak akan tahu ada perubahan!
                        </p>
                    </div>
                </div>

                <CodeSnippet
                    code={arrayStateExample}
                    language="javascript"
                    fileName="TodoApp.jsx"
                />
            </section>

            <Divider />

            {/* Cara Yang Salah */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    ❌ Cara Yang Salah
                </h2>

                <p className="text-slate-600">
                    Jangan pernah mengubah array di state secara langsung:
                </p>

                <CodeSnippet
                    code={wrongWayCode}
                    language="javascript"
                    fileName="TodoApp.jsx"
                />

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <p className="font-medium text-red-900">🚫 Method Array Yang Harus Dihindari:</p>
                    <ul className="list-disc pl-6 space-y-1 text-red-800 mt-2">
                        <li><code className="bg-red-100 px-2 py-1 rounded">push()</code> - Menambah item ke array yang sama</li>
                        <li><code className="bg-red-100 px-2 py-1 rounded">pop()</code> - Menghapus item dari array yang sama</li>
                        <li><code className="bg-red-100 px-2 py-1 rounded">shift()</code> - Menghapus item pertama dari array yang sama</li>
                        <li><code className="bg-red-100 px-2 py-1 rounded">unshift()</code> - Menambah item di awal array yang sama</li>
                        <li><code className="bg-red-100 px-2 py-1 rounded">splice()</code> - Mengubah array yang sama</li>
                        <li><code className="bg-red-100 px-2 py-1 rounded">sort()</code> - Mengurutkan array yang sama</li>
                        <li><code className="bg-red-100 px-2 py-1 rounded">reverse()</code> - Membalik array yang sama</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Cara Yang Benar */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    ✅ Cara Yang Benar (Tanpa Library)
                </h2>

                <p className="text-slate-600">
                    Gunakan method yang menghasilkan array baru atau spread operator:
                </p>

                <CodeSnippet
                    code={correctWayCode}
                    language="javascript"
                    fileName="TodoApp.jsx"
                />

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="font-medium text-green-900">✅ Method Array Yang Aman:</p>
                    <ul className="list-disc pl-6 space-y-1 text-green-800 mt-2">
                        <li><code className="bg-green-100 px-2 py-1 rounded">concat()</code> - Menggabungkan array (menghasilkan array baru)</li>
                        <li><code className="bg-green-100 px-2 py-1 rounded">filter()</code> - Menyaring item (menghasilkan array baru)</li>
                        <li><code className="bg-green-100 px-2 py-1 rounded">map()</code> - Mengubah item (menghasilkan array baru)</li>
                        <li><code className="bg-green-100 px-2 py-1 rounded">slice()</code> - Memotong array (menghasilkan array baru)</li>
                        <li><code className="bg-green-100 px-2 py-1 rounded">[...array]</code> - Spread operator (copy array)</li>
                    </ul>
                </div>

                <p className="text-slate-600 mt-4">
                    Berikut adalah contoh operasi array yang umum digunakan:
                </p>

                <CodeSnippet
                    code={arrayOperationsCode}
                    language="javascript"
                    fileName="array-operations.js"
                />
            </section>

            <Divider />

            {/* Cara Mudah dengan Immer */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    ✨ Cara Lebih Mudah: Menggunakan Immer
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        Mengelola array secara immutable bisa merepotkan. Untungnya, ada library <strong>Immer</strong> yang membuat ini jauh lebih mudah!
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="font-medium text-blue-900">💡 Keuntungan Immer:</p>
                        <ul className="list-disc pl-6 space-y-1 text-blue-800 mt-2">
                            <li>Kita bisa "mengubah" array seperti biasa</li>
                            <li>Immer otomatis membuat copy array untuk kita</li>
                            <li>Kode jadi lebih mudah dibaca dan dipahami</li>
                            <li>Tidak perlu pusing dengan spread operator</li>
                        </ul>
                    </div>
                </div>

                <CodeSnippet
                    code={immerWayCode}
                    language="javascript"
                    fileName="TodoApp.jsx"
                />

                <p className="text-sm text-slate-500">
                    Untuk mempelajari Immer lebih lanjut, lihat menu <strong>Immer Library</strong>.
                </p>
            </section>

            <Divider />

            {/* Contoh Praktis */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Contoh Praktis: Todo List
                </h2>

                <p className="text-slate-600">
                    Berikut adalah contoh aplikasi Todo sederhana menggunakan Immer:
                </p>

                <ArrayState />
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
                            <strong>Jangan ubah array langsung</strong> - gunakan method yang menghasilkan array baru
                        </li>
                        <li>
                            <strong>Gunakan spread operator</strong> (<code className="bg-purple-100 px-2 py-1 rounded">[...array]</code>) untuk copy array
                        </li>
                        <li>
                            <strong>Pertimbangkan Immer</strong> untuk kode yang lebih mudah dibaca
                        </li>
                        <li>
                            Method seperti <code className="bg-purple-100 px-2 py-1 rounded">map()</code>, <code className="bg-purple-100 px-2 py-1 rounded">filter()</code>, dan <code className="bg-purple-100 px-2 py-1 rounded">concat()</code> adalah teman terbaik Anda!
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

function ArrayState() {
    const [item, setItem] = useState("");
    const [items, setItems] = useImmer([]);

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        if (item.trim()) {
            setItems((draft) => {
                draft.push(item);
            });
            setItem("");
        }
    }

    function handleDelete(indexToDelete) {
        setItems((draft) => {
            draft.splice(indexToDelete, 1);
        });
    }

    return (
        <div className="p-6 border rounded-xl bg-white shadow-sm space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Todo List App</h3>

            <form className="flex items-center gap-2" onSubmit={handleClick}>
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="task">
                        Task Baru
                    </label>
                    <input
                        id="task"
                        className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        value={item}
                        onChange={handleChange}
                        placeholder="Apa yang ingin kamu kerjakan?"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                    Tambah
                </button>
            </form>

            <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Daftar Task ({items.length})
                </h4>

                {items.length === 0 ? (
                    <p className="text-gray-500 text-center py-8 border border-dashed rounded-lg">
                        Belum ada task. Tambahkan task pertamamu!
                    </p>
                ) : (
                    <ul className="space-y-2">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-gray-700">{item}</span>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="text-red-600 hover:text-red-800 font-medium text-sm transition-colors"
                                >
                                    Hapus
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}