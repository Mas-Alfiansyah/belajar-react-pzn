export default function StateUpdate() {
    return (
        <>
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-800">
                    State update
                </h2>

                <div className="space-y-2 text-slate-600">
                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                        <li>
                            Seperti yang sebelumnya dibahas, melakukan update State berkali-kali, tidak akan mengubah data State di Snapshot saat itu, melainkan hanya memicu untuk render ulang dengan data State baru
                        </li>
                        <li>
                            Tapi, kadang-kadang, kita memang mungkin ada keperluan untuk mengubah data di State yang sama berkali-kali
                        </li>
                        <li>
                            Dan jika kita memang ingin mengubah data di State dengan data yang harapannya sudah diubah sebelumnya (walaupun belum di render ulang)
                        </li>
                        <li>
                            Kita bisa menggunakan lambda sebagai parameter ketika memanggil function untuk update data State
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