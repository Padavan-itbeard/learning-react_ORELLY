import { useState } from "react";
import ReactDOM from "react-dom";
import { AddColorForm } from "./components/Colors/AddColorForm";
import { ColorList } from "./components/Colors/ColorList";
import colorsData from "./data/color-data.json";
import { v4 } from 'uuid';

const App = () => {
    const [colors, setColors] = useState(colorsData);

    const handleRemoveColor = (id) => {
        const newColors = colors.filter((color) => color.id !== id);

        setColors(newColors);
    };

    const handleRateColor = (id, rating) => {
        const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
        );

        setColors(newColors);
    };

    const handleNewColor = (title, color) => {
        const newColors = [...colors, {
            id: v4(),
            rating: 0,
            title,
            color,
        }]

        setColors(newColors);
    }

    return (
        <>
            <AddColorForm onNewColor={handleNewColor} />
            <ColorList
                colors={colors}
                onRemoveColor={handleRemoveColor}
                onRateColor={handleRateColor}
            />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
