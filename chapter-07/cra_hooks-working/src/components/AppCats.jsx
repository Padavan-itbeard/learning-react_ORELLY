import { useState } from "react";
import { PureCat } from "./Cat";

export const AppCats = () => {
    const [cats, setCats] = useState(['Murka', 'Sharik', 'Barsik']);
    return (
        <>
            {cats.map((name, i) => <PureCat key={`${i}-cat`} name={name} />)}
            <button onClick={() => setCats([...cats, prompt("Name a cat:")])}>Add a Cat</button>
        </>
    );
}