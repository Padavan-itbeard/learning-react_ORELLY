import { createArray } from "../../utils/common";
import { Star } from "./Star";

export const StarRating = ({
    selectedStars = 0,
    totalStar = 5,
    onRate = (f) => f,
}) => {
    return (
        <>
            {createArray(totalStar).map((_, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStar}
            </p>
        </>
    );
};
