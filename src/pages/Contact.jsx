import CodeSnippet from '../components/CodeSnippet';

const contactCode = `export default function Contact() {
    return (
        <main className="p-5">
            <h1>Ini adalah halaman Contact</h1>
        </main>
    )
}`;

export default function Contact() {
    return (
        <main className="p-5">
            <h1>Ini adalah halaman Contact</h1>
            <CodeSnippet code={contactCode} fileName="Contact.jsx" />
        </main>
    )
}