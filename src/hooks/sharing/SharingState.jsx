import { useImmer } from "use-immer";
import SharingForm from "./SharingForm";
import SharingList from "./SharingList";

export default function SharingState() {
    const [items, setItems] = useImmer([]); // untuk menampung data yang sudah diinputkan sama si user

    function handleSubmit(item) {
        setItems((draft) => {
            draft.push(item);
        })
    }
    return (
        <>
            <SharingForm onSubmit={handleSubmit} />
            <SharingList items={items} />
        </>
    )
}