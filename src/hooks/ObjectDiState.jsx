import { useState } from "react";

export default function ObjectDiState() {
    return (
        <>
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Object distate
                </h2>

                <div className="space-y-2 text-slate-600">
                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                        <li>
                            State bisa menyimpan jenis data JavaScript apapun, termasuk Object
                        </li>
                        <li>
                            Tapi kita tidak disarankan untuk mengubah object yang terdapat di State
                        </li>
                        <li>
                            Jika kita ingin mengubah object di State, kita disarankan membuat object baru lalu mengubah data di State tersebut dengan object baru
                        </li>
                    </ul>
                </div>
            </section>
            <Divider />
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Immutable Data
                </h2>

                <div className="space-y-2 text-slate-600">
                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                        <li>
                            Saat kita membuat data di State, kita harus memperlakukan data di State sebagai Immutable data (tidak bisa berubah)
                        </li>
                        <li>
                            Artinya data di State hanya digunakan untuk dibaca (read only)
                        </li>
                        <li>
                            Jika kita ingin mengubah data di State, maka kita harus ubah menggunakan data baru, yang artinya data lama tidak dimodifikasi
                        </li>
                        <li>
                            Ini adalah praktek yang biasa dilakukan di React. Walaupun pada kenyataannya object di JavaScript tidak immutable
                        </li>
                        <li>
                            Hal ini direkomendasikan agar kita tidak salah mengubah data langsung, padahal kita tahu bahwa mengubah data tidak akan memicu proses render ulang
                        </li>
                        <li>
                            Untungnya di JavaScript kita bisa menggunakan Spread Syntax untuk membantu meng-copy attribute di Object
                        </li>
                    </ul>
                </div>
            </section>
            <Divider />
            <ContactForm />
        </>
    )
}

function Divider() {
    return <hr className="my-10 border-slate-200" />;
}

// ini object nya masih satu, gimana klo misal kita punya banyak input di form?. 
// atau banyak object didalam nya?
// kita akab bahas di menu Nested Object State
const initialContact = {
    nama: "",
    email: "",
    pesan: ""
}

function ContactForm() {
    const [contact, setContact] = useState(initialContact);

    function handleChangeName(e) {
        setContact({
            ...contact,
            nama: e.target.value
        })
    }
    function handleChangeEmail(e) {
        setContact({
            ...contact,
            email: e.target.value
        })
    }
    function handleChangePesan(e) {
        setContact({
            ...contact,
            pesan: e.target.value
        })
    }
    return (
        <div>
            <h1 className="text-3xl font-semibold text-gray-800">Contact Form</h1>
            <ul>
                <form className="space-y-4 mt-6">
                    <li>
                        <label className="block text-sm font-medium text-gray-700">Nama</label>
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            value={contact.nama}
                            onChange={handleChangeName}
                        />
                    </li>
                    <li>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            value={contact.email}
                            onChange={handleChangeEmail}
                        />
                    </li>
                    <li>
                        <label className="block text-sm font-medium text-gray-700">Pesan</label>
                        <textarea
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            value={contact.pesan}
                            onChange={handleChangePesan}>
                        </textarea>
                    </li>
                </form>
            </ul>
            <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50"></div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Data Contact</h2>
            <p><strong>Nama:</strong> {contact.nama}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Pesan:</strong> {contact.pesan}</p>
        </div>

    )
}