import ProfileNotContext from "./ProfileNotContext";
import ProfileContext from "./ProfileContext";

export default function ContextApp() {
    return(
        <>
            <h1>Ini adalah contoh klo kita gak pakek useContext</h1>
            <ProfileNotContext/>
            <h1>Dan ini adalah contoh yang pakek context</h1>
            <ProfileContext/>
        </>
    )
}