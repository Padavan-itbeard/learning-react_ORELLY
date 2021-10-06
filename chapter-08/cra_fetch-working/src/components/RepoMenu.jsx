import { useEffect } from "react"
import { useIterator } from "../hooks/useIterator"

export const RepoMenu = ({ repositories, onSelect = f => f}) => {
    const [{ name }, prev, next] = useIterator(repositories);

    useEffect(() => {
        if (!name) return;
        onSelect(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    return (
        <div style={{ display: "flex" }}>
            <button onClick={prev}>&lt</button>
            <p>{name}</p>
            <button onClick={next}>&gt</button>
        </div>
    );
}