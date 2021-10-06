import { useReducer } from "react";

export const Checkbox = () => {
    const [checked, setChecked] = useReducer((checked) => !checked, false);

    return (
        <label>
            <input type="checkbox" value={checked} onChange={setChecked} data-testid="checkbox"/>
            {checked ? "checked" : "not checked"}
        </label>
    );
};
