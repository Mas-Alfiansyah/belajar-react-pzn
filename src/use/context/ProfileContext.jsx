import { useContext, useState } from "react";
import { ProfilContext } from "./MainContext";

export default function ProfileContext() {
    const [user] = useState({ name: "Alvin", status: "Active", role: "Member VIP" });

    return (
        // Wrapper Utama (App)
        <ProfilContext.Provider value={user}>
            <div className="bg-slate-50 flex flex-col justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <Header />
                </div>
            </div>
        </ProfilContext.Provider>

    )
}

function Header() {
    return (
        <>
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 flex justify-between items-center text-white">
                <h1 className="text-xl font-black tracking-tight">MYAPP</h1>
                <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold">V1</span>
                </div>
            </div>

            <Navbar/>
        </>
    );
}

function Navbar() {
    return (
        <div className="border-b border-slate-100 px-6 py-4 flex justify-between items-center bg-white">
            <nav className="flex gap-4 text-sm font-bold text-slate-400">
                <span className="text-blue-600">Home</span>
                <span className="hover:text-slate-600 cursor-pointer">Project</span>
            </nav>

            <Main />
        </div>
    );
}

function Main() {
    const user = useContext(ProfilContext);
    const a = "A";
    return (
        <main className="flex items-center gap-3">
            {/* Avatar Bulat */}
            {/* <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 flex items-center justify-center border-2 border-white shadow-sm">
                <span className="text-blue-600 font-black text-xs">
                    {user.nama.charAt(0)}
                </span>
            </div> */}

            {/* Info User */}
            <ul className="text-right">
                <li className="text-sm font-black text-slate-800 leading-none">
                    {user.nama}
                </li>
                <li className="flex items-center justify-end gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {user.status}
                    </span>
                </li>
                <li className="flex items-center justify-end gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {user.role}
                    </span>
                </li>
            </ul>
        </main>
    );
}