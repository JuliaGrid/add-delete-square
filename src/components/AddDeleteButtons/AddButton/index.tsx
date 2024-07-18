import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { addSquare } from "../../../store/action";
import "../index.css";

export function AddButton() {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const randomNumber = (Math.random() * 100).toFixed(8);
        dispatch(addSquare({color: "#" + randomColor, id: randomNumber}))
    }

    return (
        <button className="button" onClick={handleClick}>Add</button>
    )
}