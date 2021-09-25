export const Ingredients = ({ key, name, amount, measurement}) => {
    return (
        <li key={key}>
            {`${amount} ${measurement} ${name}`}
        </li>
    )
}