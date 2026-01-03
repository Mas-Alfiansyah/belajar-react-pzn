import CodeSnippet from "../components/CodeSnippet";

export default function ImmerLibrary() {
    const codeImmer = `npm install immer use-immer`;
    return (
        <>
            <h1 className="text-3xl font-semibold">Immer Library</h1>
            <p>Cara Kerja Immer Library</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                    Object saat ini (current state) akan di-clone sama si Immer Library nya menjadi draft
                </li>
                <li>
                    Pada draft tersebut, kita bisa mengedit draft tersebut menggunakan function entah itu mau ngedit, nambah dan sebagai nya
                </li>
                <li>
                    Dan jangan khawatir mengedit draft tersebut, karena yang di edit adalah draft yang bukan object aslinya
                </li>
                <li>
                    Kemudian draft tersebut hasil nya itu akan jadi object baru
                </li>
                <li>
                    Selengkap nya bisa kunjungi <a href="https://github.com/immerjs/use-immer" className="text-blue-600 hover:underline">https://github.com/immerjs/use-immer</a>
                </li>
            </ul>
            <Divider />
            <h1 className="text-3xl font-semibold">Cara Penggunaan</h1>
            <p>Kita instal dulu immer nya</p>
            <CodeSnippet
                code={codeImmer}
                language="bash"
                fileName="Bash"
            />
            <p>Jadi sekarang kita revisi Contact Form yang ada di menu Object Di State</p>
            <ContactForm />
        </>
    )
}

function Divider() {
    return <hr className="my-10 border-slate-200" />;
}

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