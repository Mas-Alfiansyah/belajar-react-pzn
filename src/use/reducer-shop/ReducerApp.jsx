import TaskAppNotReducer from "./TaskAppNotReducer";
import TaskAppReducer from "./TaskAppReducer";
import ImmerReducer from "./ImmerReducer";

export default function ReducerApp() {
    return(
        <>
            <h1>Ini adalah yang gk pakek reducer</h1>
            <TaskAppNotReducer/>
            <h1>dan ini yang pakek reducer</h1>
            <TaskAppReducer/>
            <h1>Ini adakah reducer dengan immer, jadi kodenya lebih modah dibaca</h1>
            <ImmerReducer/>
        </>
    )
}