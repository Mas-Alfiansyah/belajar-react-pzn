export default function Home() {
    const props = {
        text : "Halo Guys From Spread Syntax"
    }
    return (
        <main className="p-5">
            <HeaderHelloWorld {...props}/>
            <ParagrafHelloWold />
        </main>
    )
}

function HeaderHelloWorld({ text = "Sorry.."}) {
    return (
        <h1 style={{
            color: "red"
        }}>
            {text.toUpperCase()}
        </h1>
    )
}

function ParagrafHelloWold() {
    const text = "Ini project pertama saya menggunakan React JS";
    return (
        <h1 style={{
            color: "green"
        }}>
            {text.toString()}
        </h1>
    )
}