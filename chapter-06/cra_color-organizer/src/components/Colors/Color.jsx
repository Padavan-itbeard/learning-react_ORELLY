import { FaTrash } from "react-icons/fa";
import { StarRating } from "../StarRating/StarRating";

export const Color = ({
    id,
    title,
    color,
    rating,
    onRemove = (f) => f,
    onRate = (f) => f,
}) => {
    return (
        <section>
            <h2>{title}</h2>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            <div style={{ height: "50px", backgroundColor: color }} />
            <StarRating
                selectedStars={rating}
                onRate={(rating) => onRate(id, rating)}
            />
        </section>
    );
};
