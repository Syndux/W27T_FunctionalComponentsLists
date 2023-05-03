import { moves } from "./data.js";
import PokeMoveCard from "./PokeMoveCard.js";

const PokeMoves = () => {
  return (
    <div>
      <h1>Poke Moves</h1>
      <ul>
        {moves.map((item) => (
          <PokeMoveCard key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default PokeMoves;
