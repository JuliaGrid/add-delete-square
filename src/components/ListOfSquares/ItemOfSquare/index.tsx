import { Square } from "../../../store/interfaces";
import "./index.css";

export function ItemOfSquare(props: Square) {
    const {color} = props;

    return (
        <div className="item__wrapper" style={{backgroundColor: color}} />
    )
}