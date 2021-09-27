/**
 * При данном подходе React контролирует изменения, а также можем добавить дополнительную валидацию формы.
 */

import { useColors } from "../../hooks/useColors";
import { useInput } from "../../hooks/useInput";

export const AddColorForm = ({ onNewColor = (f) => f }) => {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();

    const handleSubmit = (event) => {
        event.preventDefault();
        const { value: title } = titleProps;
        const { value: color } = colorProps;

        addColor(title, color);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input {...colorProps} type="color" required />
            <button>ADD</button>
        </form>
    );
};
