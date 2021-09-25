import { Ingredients } from "./Ingredients";

export const IngredientsList = ({ list }) => {
    return (
        <ul className="ingredients">
            {list.map((ingredient, i) => (
                <Ingredients key={`${i}-${ingredient.name}`} {...ingredient} />
            ))}
        </ul>
    );
};
