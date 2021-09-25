import { IngredientsList } from "./IngredientsList"
import { Instruction } from "./Instruction"

export const Recipe = ({ name, ingredients, steps }) => {
    return (
        <section id={name.replace(/ /ig, '-')}>
            <h2>{name}</h2>
            <IngredientsList list={ingredients} />
            <Instruction title="Cooking Instructions" steps={steps} />
        </section>
    )
}