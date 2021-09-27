import { useColors } from "../../hooks/useColors";
import { Color } from "./Color";

export const ColorList = () => {
    const { colors } = useColors();

    return colors.length ? (
        colors.map((color, i) => <Color key={color.id} {...color} />)
    ) : (
        <div>No Colors Listed.</div>
    );
};
