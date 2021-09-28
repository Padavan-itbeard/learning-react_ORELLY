import { useReducer } from "react";

export const CheckBox = () => {
    // const [checked, setChecked] = useState(false);
    // const checkboxInputRef = useRef();
    // const handleChecked = () => {
    //     setChecked((checked) => !checked);
    // };

    // useEffect(() => alert(`Checked: ${checked}`));

    // useLayoutEffect(() => alert(`Checked layout: ${checked}`));

    // useEffect(() => checkboxInputRef.current.focus());

    // useEffect(() => localStorage.setItem("checkbox_value", checked));

    const [checked, toggle] = useReducer(checked => !checked, false);

    return (
        <label>
            <input type="checkbox" value={checked} onChange={toggle} />
            Checkbox
        </label>
    );
};
