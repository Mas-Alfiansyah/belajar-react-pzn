import { useReducer } from "react";
import CodeSnippet from "../../components/CodeSnippet";
import ReducerForm from "./ReducerForm";
import ReducerList from "./ReducerList";

export default function Reducer() {
    const reducerBasicCode = `import { useReducer } from 'react';

// 1. Definisikan reducer function
function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

// 2. Gunakan useReducer
function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}`;

    const useStateVsReducerCode = `// ❌ Dengan useState - Banyak state terpisah
function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    
    // Banyak function untuk update state
    function addTodo(text) { /* ... */ }
    function toggleTodo(id) { /* ... */ }
    function deleteTodo(id) { /* ... */ }
    function setFilterType(type) { /* ... */ }
}

// ✅ Dengan useReducer - Terpusat dan terorganisir
function TodoApp() {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    
    // Semua update melalui dispatch
    dispatch({ type: 'ADD_TODO', payload: text });
    dispatch({ type: 'TOGGLE_TODO', payload: id });
    dispatch({ type: 'DELETE_TODO', payload: id });
    dispatch({ type: 'SET_FILTER', payload: type });
}`;

    const reducerAnatomyCode = `// Anatomi Reducer Function
function reducer(state, action) {
    // state: State saat ini
    // action: Object yang berisi type dan payload
    
    switch (action.type) {
        case 'ACTION_NAME':
            // Return state baru (jangan mutasi state lama!)
            return { ...state, property: newValue };
        default:
            return state;
    }
}

// Cara memanggil
dispatch({ 
    type: 'ACTION_NAME',  // Wajib: nama action
    payload: data         // Opsional: data tambahan
});`;

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
            {/* Intro */}
            <section className="space-y-4">
                <h1 className="text-4xl font-semibold text-slate-800">
                    useReducer Hook
                </h1>

                <p className="text-lg text-slate-600">
                    Belajar cara mengelola state yang kompleks dengan pattern yang lebih terorganisir menggunakan <code className="bg-slate-100 px-2 py-1 rounded">useReducer</code>.
                </p>
            </section>

            <Divider />

            {/* Apa itu useReducer */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Apa itu useReducer?
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        <code className="bg-slate-100 px-2 py-1 rounded">useReducer</code> adalah Hook alternatif dari <code className="bg-slate-100 px-2 py-1 rounded">useState</code> untuk mengelola state yang lebih kompleks.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="font-medium text-blue-900">💡 Kapan Menggunakan useReducer?</p>
                        <ul className="list-disc pl-6 space-y-1 text-blue-800 mt-2">
                            <li>State punya <strong>banyak sub-values</strong> yang saling berhubungan</li>
                            <li>Ada <strong>banyak cara</strong> untuk update state</li>
                            <li>Update state <strong>bergantung pada state sebelumnya</strong></li>
                            <li>Ingin <strong>logic update terpusat</strong> di satu tempat</li>
                            <li>Butuh <strong>testing yang lebih mudah</strong></li>
                        </ul>
                    </div>
                </div>
            </section>

            <Divider />

            {/* Konsep Dasar */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Konsep Dasar
                </h2>

                <p className="text-slate-600">
                    useReducer bekerja dengan 3 konsep utama:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg bg-white shadow-sm">
                        <div className="text-3xl mb-2">📦</div>
                        <h3 className="font-semibold text-lg text-slate-800 mb-2">State</h3>
                        <p className="text-sm text-slate-600">
                            Data yang disimpan dan bisa berubah
                        </p>
                    </div>

                    <div className="p-4 border rounded-lg bg-white shadow-sm">
                        <div className="text-3xl mb-2">📨</div>
                        <h3 className="font-semibold text-lg text-slate-800 mb-2">Action</h3>
                        <p className="text-sm text-slate-600">
                            Perintah untuk mengubah state
                        </p>
                    </div>

                    <div className="p-4 border rounded-lg bg-white shadow-sm">
                        <div className="text-3xl mb-2">⚙️</div>
                        <h3 className="font-semibold text-lg text-slate-800 mb-2">Reducer</h3>
                        <p className="text-sm text-slate-600">
                            Function yang menentukan cara update state
                        </p>
                    </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mt-4">
                    <p className="font-medium text-green-900">✅ Alur Kerja:</p>
                    <p className="text-green-800 mt-2">
                        Component → <code className="bg-green-100 px-2 py-1 rounded">dispatch(action)</code> → Reducer → State Baru → Component Re-render
                    </p>
                </div>
            </section>

            <Divider />

            {/* Contoh Sederhana */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Contoh Sederhana: Counter
                </h2>

                <p className="text-slate-600">
                    Mari kita lihat contoh paling sederhana menggunakan useReducer:
                </p>

                <CodeSnippet
                    code={reducerBasicCode}
                    language="javascript"
                    fileName="Counter.jsx"
                />

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="font-medium text-yellow-900">📝 Penjelasan Kode:</p>
                    <ul className="list-disc pl-6 space-y-1 text-yellow-800 mt-2">
                        <li><code className="bg-yellow-100 px-2 py-1 rounded">counterReducer</code> - Function yang menentukan cara update state</li>
                        <li><code className="bg-yellow-100 px-2 py-1 rounded">state</code> - State saat ini</li>
                        <li><code className="bg-yellow-100 px-2 py-1 rounded">action</code> - Object berisi <code className="bg-yellow-100 px-2 py-1 rounded">type</code> dan <code className="bg-yellow-100 px-2 py-1 rounded">payload</code></li>
                        <li><code className="bg-yellow-100 px-2 py-1 rounded">dispatch</code> - Function untuk mengirim action</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Anatomi Reducer */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Anatomi Reducer Function
                </h2>

                <p className="text-slate-600">
                    Berikut adalah struktur lengkap dari reducer function:
                </p>

                <CodeSnippet
                    code={reducerAnatomyCode}
                    language="javascript"
                    fileName="reducer-anatomy.js"
                />

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                    <p className="font-medium text-purple-900">⚠️ Aturan Penting:</p>
                    <ul className="list-disc pl-6 space-y-1 text-purple-800 mt-2">
                        <li><strong>Pure Function</strong> - Reducer harus pure (tidak ada side effects)</li>
                        <li><strong>Immutable</strong> - Jangan ubah state langsung, buat object baru</li>
                        <li><strong>Synchronous</strong> - Reducer harus sinkron (tidak boleh async)</li>
                        <li><strong>Always Return</strong> - Selalu return state (minimal state lama)</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* useState vs useReducer */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    useState vs useReducer
                </h2>

                <p className="text-slate-600">
                    Kapan sebaiknya menggunakan useReducer dibanding useState?
                </p>

                <CodeSnippet
                    code={useStateVsReducerCode}
                    language="javascript"
                    fileName="comparison.jsx"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold text-lg text-blue-900 mb-2">
                            useState
                        </h3>
                        <ul className="space-y-1 text-sm text-blue-800">
                            <li>✅ State sederhana</li>
                            <li>✅ Sedikit update logic</li>
                            <li>✅ Independent values</li>
                            <li>✅ Mudah dipahami pemula</li>
                        </ul>
                    </div>

                    <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-lg">
                        <h3 className="font-semibold text-lg text-green-900 mb-2">
                            useReducer
                        </h3>
                        <ul className="space-y-1 text-sm text-green-800">
                            <li>✅ State kompleks</li>
                            <li>✅ Banyak update logic</li>
                            <li>✅ Related values</li>
                            <li>✅ Lebih terorganisir</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Divider />

            {/* Contoh Praktis */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Contoh Praktis: Todo App
                </h2>

                <p className="text-slate-600">
                    Berikut adalah contoh aplikasi Todo menggunakan useReducer dengan form dan list terpisah:
                </p>

                <TodoApp />
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
                            <code className="bg-purple-100 px-2 py-1 rounded">useReducer</code> bagus untuk <strong>state kompleks</strong>
                        </li>
                        <li>
                            Reducer harus <strong>pure function</strong> dan <strong>immutable</strong>
                        </li>
                        <li>
                            Gunakan <code className="bg-purple-100 px-2 py-1 rounded">dispatch</code> untuk mengirim action
                        </li>
                        <li>
                            Action berisi <code className="bg-purple-100 px-2 py-1 rounded">type</code> (wajib) dan <code className="bg-purple-100 px-2 py-1 rounded">payload</code> (opsional)
                        </li>
                        <li>
                            Lebih mudah di-test dan di-maintain untuk aplikasi besar
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

// Todo App dengan useReducer
const initialState = {
    todos: [],
    filter: 'all'
};

function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, {
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }]
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
}

function TodoApp() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const filteredTodos = state.todos.filter(todo => {
        if (state.filter === 'active') return !todo.completed;
        if (state.filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <div className="p-6 border rounded-xl bg-white shadow-sm space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Todo App dengan useReducer</h3>

            {/* Form Component */}
            <ReducerForm dispatch={dispatch} />

            {/* Filter */}
            <div className="flex gap-2">
                <button
                    onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}
                    className={`px-4 py-2 rounded-lg font-medium transition ${state.filter === 'all'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    Semua ({state.todos.length})
                </button>
                <button
                    onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}
                    className={`px-4 py-2 rounded-lg font-medium transition ${state.filter === 'active'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    Aktif ({state.todos.filter(t => !t.completed).length})
                </button>
                <button
                    onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}
                    className={`px-4 py-2 rounded-lg font-medium transition ${state.filter === 'completed'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    Selesai ({state.todos.filter(t => t.completed).length})
                </button>
            </div>

            {/* List Component */}
            <ReducerList todos={filteredTodos} dispatch={dispatch} />
        </div>
    );
}
