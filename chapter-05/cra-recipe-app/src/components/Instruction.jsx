export const Instruction = ({ title, steps }) => {
    return (
        <section className="instruction">
            <h3>{title}</h3>
            {steps.map((step, i) => (
                <p key={i + 'step'}>{step}</p>
            ))}
        </section>
    );
};
