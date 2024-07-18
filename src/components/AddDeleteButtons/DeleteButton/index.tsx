import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { deleteSquare } from "../../../store/action";

export function DeleteButton() {
    const dispatch = useAppDispatch();

    const h = () => {
        dispatch(deleteSquare())
    }

    return (
        <button onClick={h}>Delete</button>
    )
}