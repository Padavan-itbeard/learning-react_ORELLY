import { Color } from "./Color";

export const ColorList = ({
    colors = [],
    onRemoveColor = (f) => f,
    onRateColor = (f) => f,
}) => {
    return colors.length ? (
        colors.map((color, i) => (
            <Color
                key={color.id}
                {...color}
                onRemove={onRemoveColor}
                onRate={onRateColor}
            />
        ))
    ) : (
        <div>No Colors Listed.</div>
    );
};
