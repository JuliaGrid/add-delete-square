import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { addSquare } from "../../../store/action";

export function AddButton() {
    const dispatch = useAppDispatch();

    const h = () => {
        dispatch(addSquare({color: 'black'}))
    }

    return (
        <button onClick={h}>Add</button>
    )
}