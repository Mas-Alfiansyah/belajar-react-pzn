let counter = 0;

export default function TidakPureFunction({text}) {
    counter++;
    return(
        <tr>
            <td>{counter}</td>
            <td>{text}</td>
        </tr>
    )
}