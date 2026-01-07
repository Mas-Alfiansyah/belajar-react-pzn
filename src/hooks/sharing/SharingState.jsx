import { useImmer } from "use-immer";
import CodeSnippet from "../components/CodeSnippet";
import SharingForm from "./SharingForm";
import SharingList from "./SharingList";

export default function SharingState() {
    const liftingStateUpCode = `// Parent Component
function TodoApp() {
    const [items, setItems] = useState([]);
    
    // State di-share ke child components
    return (
        <>
            <TodoForm onSubmit={(item) => setItems([...items, item])} />
            <TodoList items={items} />
        </>
    );
}

// Child Component 1 - Menerima function untuk update state
function TodoForm({ onSubmit }) {
    const [text, setText] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(text);  // Kirim data ke parent
        setText("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button>Add</button>
        </form>
    );
}

// Child Component 2 - Menerima data dari parent
function TodoList({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}`;

    const wrongWayCode = `// ❌ SALAH - State terpisah di masing-masing component
function TodoApp() {
    return (
        <>
            <TodoForm />  {/* Punya state sendiri */}
            <TodoList />  {/* Punya state sendiri */}
        </>
    );
}

// Masalah: Form dan List tidak bisa saling berkomunikasi!`;

    const rightWayCode = `// ✅ BENAR - State di parent, di-share ke children
function TodoApp() {
    const [items, setItems] = useState([]);  // State di parent
    
    return (
        <>
            <TodoForm onSubmit={handleAdd} />  {/* Terima function */}
            <TodoList items={items} />          {/* Terima data */}
        </>
    );
}`;

    const [items, setItems] = useImmer([]);

    function handleSubmit(item) {
        setItems((draft) => {
            draft.push(item);
        });
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
            {/* Intro */}
            <section className="space-y-4">
                <h1 className="text-4xl font-semibold text-slate-800">
                    Sharing State
                </h1>

                <p className="text-lg text-slate-600">
                    Belajar cara berbagi (share) state antar component dengan teknik "Lifting State Up".
                </p>
            </section>

            <Divider />

            {/* Apa itu Sharing State */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Apa itu Sharing State?
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        <strong>Sharing State</strong> adalah teknik untuk berbagi data (state) antar component yang berbeda. Ini sangat penting ketika dua atau lebih component perlu mengakses data yang sama.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="font-medium text-blue-900">💡 Contoh Kasus:</p>
                        <ul className="list-disc pl-6 space-y-1 text-blue-800 mt-2">
                            <li><strong>Form dan List</strong> - Form menambah data, List menampilkan data</li>
                            <li><strong>Filter dan Table</strong> - Filter mengubah data, Table menampilkan hasil filter</li>
                            <li><strong>Cart dan Product</strong> - Product menambah ke cart, Cart menampilkan items</li>
                            <li><strong>Parent dan Siblings</strong> - Dua component saudara perlu data yang sama</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Divider />

            {/* Masalah */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Masalah: State Terpisah
                </h2>

                <p className="text-slate-600">
                    Jika setiap component punya state sendiri, mereka tidak bisa saling berkomunikasi:
                </p>

                <CodeSnippet
                    code={wrongWayCode}
                    language="javascript"
                    fileName="wrong-way.jsx"
                />

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <p className="font-medium text-red-900">❌ Masalah:</p>
                    <ul className="list-disc pl-6 space-y-1 text-red-800 mt-2">
                        <li>Form tidak bisa mengirim data ke List</li>
                        <li>List tidak tahu ada data baru</li>
                        <li>Data tidak sinkron antar component</li>
                        <li>Sulit untuk mengelola data</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Solusi: Lifting State Up */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    ✅ Solusi: Lifting State Up
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        <strong>Lifting State Up</strong> adalah teknik memindahkan state ke <strong>parent component</strong> yang paling dekat dengan semua component yang membutuhkan data tersebut.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <p className="font-medium text-green-900">✅ Cara Kerja:</p>
                        <ol className="list-decimal pl-6 space-y-1 text-green-800 mt-2">
                            <li>State disimpan di <strong>parent component</strong></li>
                            <li>Parent kirim <strong>data</strong> ke child via props</li>
                            <li>Parent kirim <strong>function</strong> untuk update state via props</li>
                            <li>Child panggil function tersebut untuk update state</li>
                        </ol>
                    </div>
                </div>

                <CodeSnippet
                    code={rightWayCode}
                    language="javascript"
                    fileName="right-way.jsx"
                />
            </section>

            <Divider />

            {/* Contoh Lengkap */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Contoh Lengkap: Lifting State Up
                </h2>

                <p className="text-slate-600">
                    Berikut adalah contoh lengkap dengan penjelasan detail:
                </p>

                <CodeSnippet
                    code={liftingStateUpCode}
                    language="javascript"
                    fileName="TodoApp.jsx"
                />

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="font-medium text-yellow-900">📝 Penjelasan:</p>
                    <ul className="list-disc pl-6 space-y-1 text-yellow-800 mt-2">
                        <li><code className="bg-yellow-100 px-2 py-1 rounded">items</code> - State disimpan di parent (TodoApp)</li>
                        <li><code className="bg-yellow-100 px-2 py-1 rounded">onSubmit</code> - Function dikirim ke TodoForm untuk update state</li>
                        <li><code className="bg-yellow-100 px-2 py-1 rounded">items</code> - Data dikirim ke TodoList untuk ditampilkan</li>
                        <li>Kedua child component bisa akses data yang sama!</li>
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
                    Berikut adalah contoh aplikasi Todo dengan sharing state:
                </p>

                <div className="p-6 border rounded-xl bg-white shadow-sm space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800">Todo App dengan Sharing State</h3>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-800">
                            <strong>💡 Perhatikan:</strong> State <code className="bg-blue-100 px-2 py-1 rounded">items</code> ada di component SharingState (parent).
                            SharingForm dan SharingList adalah child components yang berbagi state yang sama!
                        </p>
                    </div>

                    <SharingForm onSubmit={handleSubmit} />
                    <SharingList items={items} />
                </div>
            </section>

            <Divider />

            {/* Kapan Menggunakan */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Kapan Menggunakan Sharing State?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-lg">
                        <h3 className="font-semibold text-lg text-green-900 mb-2">✅ Gunakan Sharing State</h3>
                        <ul className="space-y-1 text-sm text-green-800">
                            <li>• Dua component perlu data yang sama</li>
                            <li>• Component perlu sinkronisasi data</li>
                            <li>• Parent-child relationship</li>
                            <li>• Sibling components</li>
                        </ul>
                    </div>

                    <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold text-lg text-blue-900 mb-2">ℹ️ State Lokal</h3>
                        <ul className="space-y-1 text-sm text-blue-800">
                            <li>• Data hanya dipakai 1 component</li>
                            <li>• UI state (modal open/close)</li>
                            <li>• Form input sementara</li>
                            <li>• Component-specific logic</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Divider />

            {/* Alternative */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Alternatif untuk Sharing State
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        Untuk aplikasi yang lebih kompleks, ada beberapa alternatif:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 border rounded-lg bg-white shadow-sm">
                            <h4 className="font-semibold text-gray-800 mb-2">Context API</h4>
                            <p className="text-sm text-gray-600">
                                Untuk sharing state ke banyak component tanpa prop drilling
                            </p>
                        </div>

                        <div className="p-4 border rounded-lg bg-white shadow-sm">
                            <h4 className="font-semibold text-gray-800 mb-2">Redux/Zustand</h4>
                            <p className="text-sm text-gray-600">
                                Untuk state management yang lebih kompleks dan global
                            </p>
                        </div>

                        <div className="p-4 border rounded-lg bg-white shadow-sm">
                            <h4 className="font-semibold text-gray-800 mb-2">React Query</h4>
                            <p className="text-sm text-gray-600">
                                Untuk sharing data dari server (API)
                            </p>
                        </div>
                    </div>
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
                            <strong>Lifting State Up</strong> - Pindahkan state ke parent terdekat
                        </li>
                        <li>
                            Kirim <strong>data via props</strong> ke child yang perlu baca data
                        </li>
                        <li>
                            Kirim <strong>function via props</strong> ke child yang perlu update data
                        </li>
                        <li>
                            Untuk kasus kompleks, gunakan <strong>Context API</strong> atau <strong>state management library</strong>
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