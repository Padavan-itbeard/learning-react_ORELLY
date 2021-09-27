import { useState } from "react";
import { createArray } from "../utils/common";
import { Star } from "./Start";

export const StarRating = ({ totalStar = 5 }) => {
    const [selectedStars, setSelectedStars] = useState(3);

    return (
        <>
            {createArray(totalStar).map((_, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStar}
            </p>
        </>
    );
};
