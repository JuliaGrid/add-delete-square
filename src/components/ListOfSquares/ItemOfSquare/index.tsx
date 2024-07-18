import { Square } from "../../../store/interfaces";

export function ItemOfSquare(props: Square) {
    const {color} = props;
    return (
        <div>
            {color}
        </div>
    )
}