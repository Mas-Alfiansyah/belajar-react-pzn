import CodeSnippet from '../components/CodeSnippet';

const aboutCode = `export default function About() {
    const textHeader = {
        text: "Halaman About"
    }
    return (
        <main className="p-5">
            <div className="card bg-gray-200 p-5 rounded-4xl">
                <HeaderAbout  {...textHeader} />
                <Biodata />
            </div>

        </main>
    )
}

function HeaderAbout({ text = "Halaman about" }) {
    return (
        <>
            <h1 className="text-center font-bold text-5xl">{text}</h1>
        </>
    )
}

function Biodata() {
    return (
        <div className="text-center">
            <p>Nama     : Alfiansyah</p>
            <p>Alamat   : Plakpak</p>
            <p>Umur     : 21</p>
        </div>
    )
}`;

export default function About() {
    const textHeader = {
        text: "Halaman About"
    }
    return (
        <main className="p-5">
            <div className="card bg-gray-200 p-5 rounded-4xl">
                <HeaderAbout  {...textHeader} />
                <Biodata />
            </div>
            <CodeSnippet code={aboutCode} fileName="About.jsx" />
        </main>
    )
}

function HeaderAbout({ text = "Halaman about" }) {
    return (
        <>
            <h1 className="text-center font-bold text-5xl">{text}</h1>
        </>
    )
}

function Biodata() {
    return (
        <div className="text-center">
            <p>Nama     : Alfiansyah</p>
            <p>Alamat   : Plakpak</p>
            <p>Umur     : 21</p>
        </div>
    )
}