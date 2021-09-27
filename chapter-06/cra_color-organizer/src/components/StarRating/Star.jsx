import { FaStar } from "react-icons/fa";

export const Star = ({ selected = false, onSelect = (f) => f }) => {
    return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
};
