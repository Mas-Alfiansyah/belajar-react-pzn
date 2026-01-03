export default function NestedObject() {
    return (
        <>
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Nested Object(Objek Bersarang) di State
                </h2>

                <div className="space-y-2 text-slate-600">
                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                        <li>
                            Kadang ada kasus kita menggunakan Nested Object
                        </li>
                        <li>
                            Sama seperti sebelumnya, kita disarankan untuk selalu membuat object baru ketika mengubah State
                        </li>
                        <li>
                            Kadang memang menyulitkan ketika Nested Object nya terlalu besar, oleh karena itu disarankan tidak terlalu dalam membuat Nested Object nya
                        </li>
                    </ul>
                </div>
            </section>
            <Divider />
            <h1>Jadi disarankan pakek <span className="font-semibold text-blue-600">Immer library</span></h1>
            <Divider />
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Immer Library
                </h2>

                <div className="space-y-2 text-slate-600">
                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                        <li>
                            Salah satu library yang sering digunakan ketika develop aplikasi menggunakan React adalah Immer
                        </li>
                        <li>
                            Immer adalah library yang digunakan untuk membuat immutable object dari object saat ini
                        </li>
                        <li>
                            Menggunakan Immer akan lebih mudah dibandingkan menggunakan Spread Syntax, terutama untuk Object yang kompleks dan Nested
                        </li>
                        <li>
                            <a href="https://github.com/immerjs/immer" className="text-blue-600 hover:underline">https://github.com/immerjs/immer</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

function Divider() {
    return <hr className="my-10 border-slate-200" />;
}