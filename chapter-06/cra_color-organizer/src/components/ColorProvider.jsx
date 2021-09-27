import { createContext, useState } from "react";
import { v4 } from "uuid";
import colorsData from "../data/color-data.json";

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const [colors, setColors] = useState(colorsData);

    const addColor = (title, color) => {
        const newColors = [
            ...colors,
            {
                id: v4(),
                rating: 0,
                title,
                color,
            },
        ];

        setColors(newColors);
    };

    const removeColor = (id) => {
        const newColors = colors.filter((color) => color.id !== id);

        setColors(newColors);
    };

    const rateColor = (id, rating) => {
        const newColor = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
        );

        setColors(newColor);
    };

    return (
        <ColorContext.Provider
            value={{ colors, addColor, removeColor, rateColor }}
        >
            {children}
        </ColorContext.Provider>
    );
};
