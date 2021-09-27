/**
 * При данном подходе React контролирует изменения, а также можем добавить дополнительную валидацию формы.
 */

import { useInput } from "../../hooks/useInput";

export const AddColorForm = ({ onNewColor = (f) => f }) => {
    // const [title, setTitle] = useState("");
    // const [color, setColor] = useState("#000000");
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const handleSubmit = (event) => {
        event.preventDefault();
        const { value: title } = titleProps;
        const { value: color } = colorProps;

        onNewColor(title, color);
        // setTitle('');
        // setColor('#000000')
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                // value={title}
                // onChange={event => setTitle(event.target.value)}
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input
                // value={color}
                // onChange={event => setColor(event.target.value)}
                {...colorProps}
                type="color"
                required
            />
            <button>ADD</button>
        </form>
    );
};
