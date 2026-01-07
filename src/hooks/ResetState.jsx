import { useState } from "react";
import CodeSnippet from "../components/CodeSnippet";

export default function ResetState() {
    const keyPropCode = `// Menggunakan key prop untuk reset state
function App() {
    const [version, setVersion] = useState(0);
    
    return (
        <>
            <button onClick={() => setVersion(v => v + 1)}>
                Reset Counter
            </button>
            
            {/* key berubah = component di-unmount dan di-mount lagi */}
            <Counter key={version} />
        </>
    );
}`;

    const conditionalCode = `// Menggunakan conditional rendering untuk reset
function App() {
    const [show, setShow] = useState(true);
    
    function handleReset() {
        setShow(false);  // Unmount component
        setTimeout(() => setShow(true), 0);  // Mount lagi
    }
    
    return (
        <>
            <button onClick={handleReset}>Reset</button>
            {show && <Counter />}
        </>
    );
}`;

    const manualResetCode = `// Reset state secara manual
function Counter() {
    const [count, setCount] = useState(0);
    
    function handleReset() {
        setCount(0);  // Set kembali ke nilai awal
    }
    
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}`;

    const comparisonCode = `// Perbandingan 3 Metode Reset State

// 1. Key Prop (Recommended)
<Counter key={version} />
// ✅ Otomatis reset semua state
// ✅ Clean dan simple
// ✅ Tidak perlu ubah Counter component
// ❌ Component di-unmount (lifecycle reset)

// 2. Conditional Rendering
{show && <Counter />}
// ✅ Otomatis reset semua state
// ❌ Perlu setTimeout untuk re-mount
// ❌ Lebih kompleks
// ❌ Component di-unmount

// 3. Manual Reset
function handleReset() { setCount(0); }
// ✅ Kontrol penuh
// ✅ Tidak unmount component
// ❌ Harus reset setiap state satu per satu
// ❌ Mudah lupa jika ada banyak state`;

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
            {/* Intro */}
            <section className="space-y-4">
                <h1 className="text-4xl font-semibold text-slate-800">
                    Reset State
                </h1>

                <p className="text-lg text-slate-600">
                    Belajar berbagai cara untuk me-reset state component kembali ke nilai awal.
                </p>
            </section>

            <Divider />

            {/* Apa itu Reset State */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Apa itu Reset State?
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        <strong>Reset State</strong> adalah proses mengembalikan state component ke <strong>nilai awal</strong> (initial state).
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="font-medium text-blue-900">💡 Kapan Perlu Reset State?</p>
                        <ul className="list-disc pl-6 space-y-1 text-blue-800 mt-2">
                            <li><strong>Form</strong> - Reset form setelah submit</li>
                            <li><strong>Game</strong> - Restart game dari awal</li>
                            <li><strong>Filter</strong> - Clear semua filter</li>
                            <li><strong>Modal</strong> - Reset data ketika modal ditutup</li>
                            <li><strong>Multi-step Form</strong> - Kembali ke step pertama</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Divider />

            {/* Metode 1: Key Prop */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    ✅ Metode 1: Key Prop (Recommended)
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        Cara paling <strong>mudah dan clean</strong> untuk reset state adalah dengan mengubah <code className="bg-slate-100 px-2 py-1 rounded">key</code> prop.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <p className="font-medium text-green-900">✅ Cara Kerja:</p>
                        <ul className="list-disc pl-6 space-y-1 text-green-800 mt-2">
                            <li>Ketika <code className="bg-green-100 px-2 py-1 rounded">key</code> berubah, React menganggap ini component <strong>berbeda</strong></li>
                            <li>Component lama di-<strong>unmount</strong> (state dihapus)</li>
                            <li>Component baru di-<strong>mount</strong> (state kembali ke nilai awal)</li>
                            <li>Semua state otomatis ter-reset!</li>
                        </ul>
                    </div>
                </div>

                <CodeSnippet
                    code={keyPropCode}
                    language="javascript"
                    fileName="key-prop.jsx"
                />

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="font-medium text-yellow-900">💡 Tips:</p>
                    <p className="text-yellow-800 mt-2">
                        Gunakan counter atau timestamp sebagai key. Setiap kali key berubah, component akan di-reset!
                    </p>
                </div>
            </section>

            <Divider />

            {/* Metode 2: Conditional Rendering */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Metode 2: Conditional Rendering
                </h2>

                <p className="text-slate-600">
                    Cara lain adalah dengan <strong>unmount</strong> component menggunakan conditional rendering, lalu <strong>mount</strong> lagi:
                </p>

                <CodeSnippet
                    code={conditionalCode}
                    language="javascript"
                    fileName="conditional.jsx"
                />

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <p className="font-medium text-red-900">⚠️ Kekurangan:</p>
                    <ul className="list-disc pl-6 space-y-1 text-red-800 mt-2">
                        <li>Perlu <code className="bg-red-100 px-2 py-1 rounded">setTimeout</code> untuk re-mount</li>
                        <li>Lebih kompleks dari key prop</li>
                        <li>Bisa menyebabkan flicker (component hilang sebentar)</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Metode 3: Manual Reset */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Metode 3: Manual Reset
                </h2>

                <p className="text-slate-600">
                    Kita juga bisa me-reset state <strong>secara manual</strong> dengan mengubah nilai state kembali ke nilai awal:
                </p>

                <CodeSnippet
                    code={manualResetCode}
                    language="javascript"
                    fileName="manual-reset.jsx"
                />

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="font-medium text-blue-900">ℹ️ Kapan Menggunakan:</p>
                    <ul className="list-disc pl-6 space-y-1 text-blue-800 mt-2">
                        <li>Hanya ada <strong>sedikit state</strong> yang perlu di-reset</li>
                        <li>Perlu <strong>kontrol detail</strong> state mana yang di-reset</li>
                        <li>Tidak ingin component di-unmount</li>
                    </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-4">
                    <p className="font-medium text-yellow-900">⚠️ Hati-hati:</p>
                    <p className="text-yellow-800 mt-2">
                        Jika ada banyak state, mudah lupa me-reset salah satu state. Lebih baik gunakan key prop!
                    </p>
                </div>
            </section>

            <Divider />

            {/* Perbandingan */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Perbandingan Metode
                </h2>

                <CodeSnippet
                    code={comparisonCode}
                    language="javascript"
                    fileName="comparison.jsx"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Key Prop</h4>
                        <div className="text-sm space-y-1">
                            <p className="text-green-600">✅ Paling mudah</p>
                            <p className="text-green-600">✅ Otomatis reset semua</p>
                            <p className="text-green-600">✅ Clean code</p>
                            <p className="text-red-600">❌ Unmount component</p>
                        </div>
                    </div>

                    <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Conditional</h4>
                        <div className="text-sm space-y-1">
                            <p className="text-green-600">✅ Reset semua</p>
                            <p className="text-red-600">❌ Perlu setTimeout</p>
                            <p className="text-red-600">❌ Lebih kompleks</p>
                            <p className="text-red-600">❌ Bisa flicker</p>
                        </div>
                    </div>

                    <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Manual</h4>
                        <div className="text-sm space-y-1">
                            <p className="text-green-600">✅ Kontrol penuh</p>
                            <p className="text-green-600">✅ Tidak unmount</p>
                            <p className="text-red-600">❌ Harus manual</p>
                            <p className="text-red-600">❌ Mudah lupa</p>
                        </div>
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
                    Bandingkan ketiga metode reset state:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <KeyPropExample />
                    <ConditionalExample />
                    <ManualResetExample />
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                    <p className="font-medium text-purple-900">🧪 Cara Test:</p>
                    <ol className="list-decimal pl-6 space-y-1 text-purple-800 mt-2">
                        <li>Klik tombol counter beberapa kali di setiap contoh</li>
                        <li>Klik tombol "Reset" di masing-masing</li>
                        <li>Perhatikan bagaimana counter kembali ke 0</li>
                        <li>Semua metode menghasilkan hasil yang sama!</li>
                    </ol>
                </div>
            </section>

            <Divider />

            {/* Best Practices */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Best Practices
                </h2>

                <div className="space-y-4">
                    <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">✅ Gunakan Key Prop Jika:</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-green-800">
                            <li>Ingin reset <strong>semua state</strong> sekaligus</li>
                            <li>Component punya <strong>banyak state</strong></li>
                            <li>Tidak masalah jika component di-unmount</li>
                            <li>Ingin kode yang <strong>clean dan simple</strong></li>
                        </ul>
                    </div>

                    <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">ℹ️ Gunakan Manual Reset Jika:</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-blue-800">
                            <li>Hanya perlu reset <strong>beberapa state</strong></li>
                            <li>Perlu <strong>kontrol detail</strong></li>
                            <li>Tidak boleh unmount component (ada side effects)</li>
                            <li>State sangat <strong>sedikit</strong></li>
                        </ul>
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
                            <strong>Key prop</strong> adalah cara paling mudah dan direkomendasikan
                        </li>
                        <li>
                            Mengubah key akan <strong>unmount dan mount ulang</strong> component
                        </li>
                        <li>
                            <strong>Manual reset</strong> bagus untuk kontrol detail tapi lebih repot
                        </li>
                        <li>
                            Pilih metode yang sesuai dengan kebutuhan aplikasi Anda
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

// Contoh 1: Key Prop
function KeyPropExample() {
    const [version, setVersion] = useState(0);

    return (
        <div className="p-6 border rounded-xl bg-green-50 space-y-4">
            <h3 className="text-lg font-semibold text-green-900">
                ✅ Key Prop
            </h3>
            <p className="text-sm text-green-700">
                Mengubah key untuk reset
            </p>

            <button
                onClick={() => setVersion(v => v + 1)}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
                Reset (key: {version})
            </button>

            <Counter key={version} />
        </div>
    );
}

// Contoh 2: Conditional Rendering
function ConditionalExample() {
    const [show, setShow] = useState(true);

    function handleReset() {
        setShow(false);
        setTimeout(() => setShow(true), 0);
    }

    return (
        <div className="p-6 border rounded-xl bg-yellow-50 space-y-4">
            <h3 className="text-lg font-semibold text-yellow-900">
                Conditional
            </h3>
            <p className="text-sm text-yellow-700">
                Unmount & mount ulang
            </p>

            <button
                onClick={handleReset}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
                Reset
            </button>

            {show && <Counter />}
        </div>
    );
}

// Contoh 3: Manual Reset
function ManualResetExample() {
    return (
        <div className="p-6 border rounded-xl bg-blue-50 space-y-4">
            <h3 className="text-lg font-semibold text-blue-900">
                Manual Reset
            </h3>
            <p className="text-sm text-blue-700">
                Reset state secara manual
            </p>

            <CounterWithReset />
        </div>
    );
}

// Counter Component
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="p-4 border border-gray-300 rounded-lg bg-white">
            <p className="text-2xl font-bold text-gray-800 mb-3">
                Count: {count}
            </p>
            <button
                onClick={() => setCount(count + 1)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
                Increment
            </button>
        </div>
    );
}

// Counter dengan Manual Reset
function CounterWithReset() {
    const [count, setCount] = useState(0);

    function handleReset() {
        setCount(0);
    }

    return (
        <>
            <button
                onClick={handleReset}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
                Reset
            </button>

            <div className="p-4 border border-gray-300 rounded-lg bg-white">
                <p className="text-2xl font-bold text-gray-800 mb-3">
                    Count: {count}
                </p>
                <button
                    onClick={() => setCount(count + 1)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                    Increment
                </button>
            </div>
        </>
    );
}