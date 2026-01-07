export default function ReducerList({ todos, dispatch }) {
    if (todos.length === 0) {
        return (
            <div className="text-center py-8 border border-dashed rounded-lg text-gray-500">
                Belum ada todo. Tambahkan todo pertamamu!
            </div>
        );
    }

    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                    <div className="flex items-center gap-3 flex-1">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                            className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                            {todo.text}
                        </span>
                    </div>
                    <button
                        onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                        className="text-red-600 hover:text-red-800 font-medium text-sm transition-colors ml-4"
                    >
                        Hapus
                    </button>
                </li>
            ))}
        </ul>
    );
}
