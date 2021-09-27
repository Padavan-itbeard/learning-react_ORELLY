import { FaTrash } from "react-icons/fa";
import { useColors } from "../../hooks/useColors";
import { StarRating } from "../StarRating/StarRating";

export const Color = ({ id, title, color, rating }) => {
    const { removeColor, rateColor } = useColors();

    return (
        <section>
            <h2>{title}</h2>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: "50px", backgroundColor: color }} />
            <StarRating
                selectedStars={rating}
                onRate={(rating) => rateColor(id, rating)}
            />
        </section>
    );
};
