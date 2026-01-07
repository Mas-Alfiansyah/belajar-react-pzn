import { useState } from "react";
import CodeSnippet from "../components/CodeSnippet";

export default function StateHooks() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">

      {/* Intro */}
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold text-slate-800">
          State Hooks
        </h1>

        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Component dapat berubah karena interaksi pengguna</li>
          <li>Contoh: klik tombol menambah counter, mengganti banner, dll</li>
          <li>Component harus mengingat nilai saat ini</li>
          <li>Di React, memori khusus component disebut <strong>State</strong></li>
        </ul>
      </section>

      {/* Local Variable Explanation */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-slate-800">
          State dengan Local Variable
        </h2>

        <div className="space-y-2 text-slate-600">
          <p>
            Apakah local variable bisa digunakan sebagai state?
            <span className="font-medium text-red-500"> Tidak bisa.</span>
          </p>
          <p>
            Setiap render ulang, seluruh kode component dieksekusi kembali
            sehingga nilai local variable akan kembali ke awal.
          </p>
          <p>
            Perubahan local variable juga <strong>tidak memicu re-render</strong>.
          </p>
        </div>
      </section>

      <Divider />

      {/* Counter biasa */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-slate-800">
          Counter (State Biasa)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Counter />
          <Counter />
        </div>

        <p className="text-sm text-slate-500">
          State bersifat <strong>private</strong>. Dua component Counter memiliki
          state masing-masing dan tidak saling memengaruhi.
        </p>
      </section>
      <Divider />

      {/* Lambda Counter */}
      <section className="space-y-6">
        <CounterLambda />
      </section>

      {/* Code Examples */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-slate-800">
          Contoh Kode
        </h2>

        <p className="text-slate-600">
          Berikut adalah kode lengkap untuk Counter biasa:
        </p>

        <CodeSnippet
          code={`function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <div className="p-6 border rounded-xl bg-white shadow-sm space-y-4">
      <h4 className="font-medium text-slate-700">
        Counter Component
      </h4>

      <p className="text-lg font-semibold text-slate-800">
        {counter}
      </p>

      <button
        onClick={handleIncrement}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
      >
        Increment
      </button>
    </div>
  );
}`}
          language="javascript"
          fileName="Counter.jsx"
        />

        <p className="text-slate-600 mt-6">
          Dan berikut adalah kode untuk Counter dengan Lambda:
        </p>

        <CodeSnippet
          code={`function CounterLambda() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    // Menggunakan lambda untuk update berdasarkan nilai sebelumnya
    setCounter((c) => c + 1);
    setCounter((c) => c + 1);
    console.log(counter);
  }

  return (
    <div className="p-6 border rounded-xl bg-blue-50 space-y-4">
      <h3 className="text-2xl font-semibold text-slate-800">
        Counter dengan Lambda
      </h3>

      <p className="text-slate-600 text-sm">
        Menggunakan fungsi lambda untuk update state berdasarkan nilai sebelumnya.
      </p>

      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold text-blue-700">
          {counter}
        </span>

        <button
          onClick={handleIncrement}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
        >
          Increment +2
        </button>
      </div>
    </div>
  );
}`}
          language="javascript"
          fileName="CounterLambda.jsx"
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-4">
          <p className="font-medium text-blue-900">💡 Perbedaan Utama:</p>
          <ul className="list-disc pl-6 space-y-1 text-blue-800 mt-2">
            <li>Counter biasa: <code className="bg-blue-100 px-2 py-1 rounded">setCounter(counter + 1)</code> - menggunakan nilai saat ini</li>
            <li>Counter lambda: <code className="bg-blue-100 px-2 py-1 rounded">setCounter((c) =&gt; c + 1)</code> - menggunakan nilai terbaru</li>
            <li>Dengan lambda, kita bisa memanggil setCounter berkali-kali dan semuanya akan dijalankan!</li>
          </ul>
        </div>
      </section>

      <Divider />
    </div>
  );
}

/* ============================= */
/* Reusable Components */
/* ============================= */

function Divider() {
  return (
    <div className="border-t border-slate-200" />
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <div className="p-6 border rounded-xl bg-white shadow-sm space-y-4">
      <h4 className="font-medium text-slate-700">
        Counter Component
      </h4>

      <p className="text-lg font-semibold text-slate-800">
        {counter}
      </p>

      <button
        onClick={handleIncrement}
        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
      >
        Increment
      </button>
    </div>
  );
}

function CounterLambda() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter((c) => c + 1);
    setCounter((c) => c + 1);
    console.log(counter);
  }

  return (
    <div className="p-6 border rounded-xl bg-blue-50 space-y-4">
      <h3 className="text-2xl font-semibold text-slate-800">
        Counter dengan Lambda
      </h3>

      <p className="text-slate-600 text-sm">
        Menggunakan fungsi lambda untuk update state berdasarkan nilai sebelumnya.
      </p>

      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold text-blue-700">
          {counter}
        </span>

        <button
          onClick={handleIncrement}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Increment +2
        </button>
      </div>
    </div>
  );
}
