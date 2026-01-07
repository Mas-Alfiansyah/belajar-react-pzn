import { useState } from "react";
import CodeSnippet from "../components/CodeSnippet";

export default function MempertahankanState() {
    const conditionalRenderCode = `// ❌ Conditional Rendering - State akan HILANG
function App() {
    const [show, setShow] = useState(true);
    
    return (
        <>
            <Counter name="Counter 1" />
            
            {show && <Counter name="Counter 2" />}
            {/* Ketika show = false, Counter 2 di-unmount */}
            {/* State Counter 2 akan HILANG! */}
        </>
    );
}`;

    const cssHiddenCode = `// ✅ CSS Hidden - State TETAP ADA
function App() {
    const [show, setShow] = useState(true);
    
    return (
        <>
            <Counter name="Counter 1" />
            
            <div style={{ display: show ? 'block' : 'none' }}>
                <Counter name="Counter 2" />
            </div>
            {/* Counter 2 tetap di-mount, hanya disembunyikan */}
            {/* State Counter 2 TETAP ADA! */}
        </>
    );
}`;

    const comparisonCode = `// Perbandingan Lengkap

// 1. Conditional Rendering (&&)
{show && <Counter />}
// ✅ Component benar-benar dihapus dari DOM
// ❌ State hilang ketika di-unmount
// ✅ Lebih efisien (tidak render yang tidak perlu)

// 2. CSS Display None
<div style={{ display: show ? 'block' : 'none' }}>
    <Counter />
</div>
// ✅ State tetap ada
// ❌ Component tetap di-render (kurang efisien)
// ✅ Smooth transition (bisa pakai CSS animation)

// 3. CSS Visibility Hidden
<div style={{ visibility: show ? 'visible' : 'hidden' }}>
    <Counter />
</div>
// ✅ State tetap ada
// ❌ Tetap memakan space di layout
// ✅ Bisa pakai CSS transition`;

    const [show, setShow] = useState(true);

    function handleChange(e) {
        setShow(e.target.checked);
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
            {/* Intro */}
            <section className="space-y-4">
                <h1 className="text-4xl font-semibold text-slate-800">
                    Mempertahankan State
                </h1>

                <p className="text-lg text-slate-600">
                    Belajar cara mempertahankan state component meskipun component disembunyikan dari tampilan.
                </p>
            </section>

            <Divider />

            {/* Masalah */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Masalah: State Hilang Saat Unmount
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        Ketika kita menggunakan <strong>conditional rendering</strong> (dengan <code className="bg-slate-100 px-2 py-1 rounded">&&</code> atau ternary), component akan di-<strong>unmount</strong> (dihapus dari DOM) ketika kondisi false.
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                        <p className="font-medium text-red-900">❌ Akibatnya:</p>
                        <ul className="list-disc pl-6 space-y-1 text-red-800 mt-2">
                            <li><strong>State akan hilang</strong> ketika component di-unmount</li>
                            <li><strong>State kembali ke nilai awal</strong> ketika component di-mount lagi</li>
                            <li>User kehilangan progress/data yang sudah diinput</li>
                        </ul>
                    </div>
                </div>

                <CodeSnippet
                    code={conditionalRenderCode}
                    language="javascript"
                    fileName="conditional-render.jsx"
                />
            </section>

            <Divider />

            {/* Solusi */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    ✅ Solusi: Sembunyikan dengan CSS
                </h2>

                <div className="space-y-3 text-slate-600">
                    <p>
                        Untuk mempertahankan state, kita bisa <strong>menyembunyikan component dengan CSS</strong> tanpa meng-unmount component tersebut.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <p className="font-medium text-green-900">✅ Keuntungan:</p>
                        <ul className="list-disc pl-6 space-y-1 text-green-800 mt-2">
                            <li>Component tetap <strong>di-mount</strong></li>
                            <li>State <strong>tetap ada</strong> dan tidak hilang</li>
                            <li>User tidak kehilangan progress</li>
                            <li>Bisa menggunakan <strong>CSS transition/animation</strong></li>
                        </ul>
                    </div>
                </div>

                <CodeSnippet
                    code={cssHiddenCode}
                    language="javascript"
                    fileName="css-hidden.jsx"
                />

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="font-medium text-blue-900">💡 Cara Kerja:</p>
                    <ul className="list-disc pl-6 space-y-1 text-blue-800 mt-2">
                        <li><code className="bg-blue-100 px-2 py-1 rounded">display: 'block'</code> - Component terlihat</li>
                        <li><code className="bg-blue-100 px-2 py-1 rounded">display: 'none'</code> - Component tersembunyi tapi tetap di-mount</li>
                        <li>State tetap ada karena component tidak di-unmount</li>
                    </ul>
                </div>
            </section>

            <Divider />

            {/* Perbandingan */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Perbandingan Metode
                </h2>

                <p className="text-slate-600">
                    Ada beberapa cara untuk menyembunyikan component, masing-masing punya kelebihan dan kekurangan:
                </p>

                <CodeSnippet
                    code={comparisonCode}
                    language="javascript"
                    fileName="comparison.jsx"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 border rounded-lg bg-white shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">Conditional (&&)</h4>
                        <div className="text-sm space-y-1">
                            <p className="text-green-600">✅ Efisien</p>
                            <p className="text-green-600">✅ Clean DOM</p>
                            <p className="text-red-600">❌ State hilang</p>
                        </div>
                    </div>

                    <div className="p-4 border rounded-lg bg-white shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">display: none</h4>
                        <div className="text-sm space-y-1">
                            <p className="text-green-600">✅ State tetap</p>
                            <p className="text-green-600">✅ No space</p>
                            <p className="text-red-600">❌ Tetap render</p>
                        </div>
                    </div>

                    <div className="p-4 border rounded-lg bg-white shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">visibility: hidden</h4>
                        <div className="text-sm space-y-1">
                            <p className="text-green-600">✅ State tetap</p>
                            <p className="text-green-600">✅ Transition</p>
                            <p className="text-red-600">❌ Makan space</p>
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
                    Bandingkan perbedaan antara conditional rendering dan CSS hidden:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Conditional Rendering */}
                    <div className="p-6 border rounded-xl bg-red-50 space-y-4">
                        <h3 className="text-xl font-semibold text-red-900">
                            ❌ Conditional Rendering
                        </h3>
                        <p className="text-sm text-red-700">
                            State akan hilang ketika di-hide
                        </p>

                        <ConditionalExample />
                    </div>

                    {/* CSS Hidden */}
                    <div className="p-6 border rounded-xl bg-green-50 space-y-4">
                        <h3 className="text-xl font-semibold text-green-900">
                            ✅ CSS Hidden
                        </h3>
                        <p className="text-sm text-green-700">
                            State tetap ada meskipun di-hide
                        </p>

                        <CSSHiddenExample />
                    </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="font-medium text-yellow-900">🧪 Cara Test:</p>
                    <ol className="list-decimal pl-6 space-y-1 text-yellow-800 mt-2">
                        <li>Klik tombol counter beberapa kali</li>
                        <li>Uncheck checkbox untuk menyembunyikan counter</li>
                        <li>Check lagi checkbox untuk menampilkan counter</li>
                        <li>Perhatikan perbedaan nilai counter!</li>
                    </ol>
                </div>
            </section>

            <Divider />

            {/* Kapan Menggunakan */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Kapan Menggunakan Masing-Masing?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-lg">
                        <h3 className="font-semibold text-lg text-red-900 mb-2">
                            Conditional Rendering
                        </h3>
                        <ul className="space-y-1 text-sm text-red-800">
                            <li>• State tidak perlu dipertahankan</li>
                            <li>• Component jarang di-toggle</li>
                            <li>• Performa lebih penting</li>
                            <li>• Component berat/kompleks</li>
                        </ul>
                    </div>

                    <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-lg">
                        <h3 className="font-semibold text-lg text-green-900 mb-2">
                            CSS Hidden
                        </h3>
                        <ul className="space-y-1 text-sm text-green-800">
                            <li>• State harus dipertahankan</li>
                            <li>• Sering di-toggle</li>
                            <li>• Butuh smooth transition</li>
                            <li>• Form dengan banyak input</li>
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
                            <strong>Conditional rendering</strong> akan meng-unmount component dan menghapus state
                        </li>
                        <li>
                            <strong>CSS hidden</strong> mempertahankan state karena component tetap di-mount
                        </li>
                        <li>
                            Gunakan <code className="bg-purple-100 px-2 py-1 rounded">display: none</code> untuk mempertahankan state
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

// Contoh Conditional Rendering
function ConditionalExample() {
    const [show, setShow] = useState(true);

    return (
        <div className="space-y-4">
            <Counter name="Counter 1 (Selalu Tampil)" />

            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    className="w-5 h-5"
                    checked={show}
                    onChange={(e) => setShow(e.target.checked)}
                />
                <label className="text-sm">Tampilkan Counter 2</label>
            </div>

            {show && <Counter name="Counter 2 (Conditional)" />}
        </div>
    );
}

// Contoh CSS Hidden
function CSSHiddenExample() {
    const [show, setShow] = useState(true);

    return (
        <div className="space-y-4">
            <Counter name="Counter 1 (Selalu Tampil)" />

            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    className="w-5 h-5"
                    checked={show}
                    onChange={(e) => setShow(e.target.checked)}
                />
                <label className="text-sm">Tampilkan Counter 2</label>
            </div>

            <div style={{ display: show ? 'block' : 'none' }}>
                <Counter name="Counter 2 (CSS Hidden)" />
            </div>
        </div>
    );
}

// Counter Component
function Counter({ name }) {
    const [count, setCount] = useState(0);

    function handleCounter() {
        setCount(count + 1);
    }

    return (
        <div className="p-4 border border-gray-300 rounded-lg bg-white">
            <p className="text-sm font-medium text-gray-700 mb-2">{name}</p>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                onClick={handleCounter}
            >
                Counter: {count}
            </button>
        </div>
    );
}