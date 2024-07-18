import { useAppSelector } from "../../hooks/useAppSelector";
import { ItemOfSquare } from "./ItemOfSquare";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.css";

export function ListOfSquares() {
    const squares = useAppSelector((state) => state.squares);

    return (
        <TransitionGroup className="list__wrapper">
        {squares.map((item) => (
          <CSSTransition key={item.id} timeout={500} classNames="item">
            <ItemOfSquare color={item.color} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
}