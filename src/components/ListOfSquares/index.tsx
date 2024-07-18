import { useAppSelector } from "../../hooks/useAppSelector";
import { ItemOfSquare } from "./ItemOfSquare";

export function ListOfSquares() {
     const squares = useAppSelector((state) => state.squares);
    
    return (
        <>
        {squares.map((item) => <ItemOfSquare color={item.color} />)}
        </>
    )
}