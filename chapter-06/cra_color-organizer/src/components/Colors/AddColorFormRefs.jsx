/**
 * Написано в императивном стиле. React перестает отслеживать изменения,
 * т.к. мы вносим изменения напрямую в DOM.
 */
import { useRef } from "react";

export const AddColorForm = ({ onNewColor = (f) => f }) => {
    const txtTitle = useRef();
    const hexColor = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;

        onNewColor(title, color);
        txtTitle.current.value = "";
        hexColor.current.value = "#000000";
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={txtTitle}
                type="text"
                placeholder="color title.."
                required
            />
            <input ref={hexColor} type="color" required />
            <button>ADD</button>
        </form>
    );
};
