import { Recipe } from "./Recipe";
import './Menu.css';

export const Menu = ({ title, recipes }) => {
    return (
        <article>
            <header>
                <h1>{title}</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe, i) => (
                    <Recipe key={`${i}-recipe`} {...recipe} />
                ))}
            </div>
        </article>
    );
};
