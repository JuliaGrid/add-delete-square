import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { deleteSquare } from "../../../store/action";
import "../index.css";

export function DeleteButton() {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(deleteSquare())
    }

    return (
        <button className="button" onClick={handleClick}>Удалить</button>
    )
}