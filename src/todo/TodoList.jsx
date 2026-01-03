import Todo from './Todo';

export default function TodoList() {
    const data = [
        {
            id: 1,
            text: "Belajar React",
            isCompleted: false,
            isDeleted: true
        }
        ,
        {
            id: 2,
            text: "Membuat Todo App",
            isCompleted: true,
        }
        ,
        {
            id: 3,
            text: "Master React",
            isCompleted: false,
        }
        ,
        {
            id: 4,
            text: "Dapatkan pekerjaan sebagai React Developer",
            isCompleted: true,
        }
        ,
        {
            id: 5,
            text: "Bekerja sebagai React Developer",
            isCompleted: false,
        }
        ,
        {
            id: 6,
            text: "Dapatkan gaji dua digit per bulan",
            isCompleted: false,
        }

    ]

    const todos = data.map((totalData) => {
        return (
            <Todo {...totalData} />
        )
    })
    return (
        <ul>
            {data.map((totalData) => (
                <Todo key={totalData.id} {...totalData} />
            )
            )}
        </ul>
    )
}