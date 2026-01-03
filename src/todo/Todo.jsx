export default function Todo({text, isCompleted, isDeleted = false}) {
    if (isDeleted) {
        return null;
    }
    // else if (isCompleted) {
    //     return(
    //         <li>
    //             <del>{text}</del>
    //         </li>
    //     )
    // }else{
    //     return(
    //         <li>{text}</li>
    //     )
    // }

    //ini adalah cara singkat dari kode di atas dengan menggunakan ternary operator
    // else{
    //     return(
    //         <li>
    //             {isCompleted ? <del>{text}</del> : text}
    //         </li>
    //     )
    // }
    
    
    else{
        return(
            <li>
                {isCompleted ? <del>{text} {isCompleted && <span>✓</span>}</del> : text}
            </li>
        )
    }
}