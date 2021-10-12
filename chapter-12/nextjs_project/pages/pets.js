import Layout from "./Layout";

const Pets = ({ pets }) => {
    return (
        <Layout>
            <h1>Pets!</h1>
            <ul>
                {pets.map(({id, name}) => <li key={id}>{name}</li>)}
            </ul>
        </Layout>
    );
};

Pets.getInitialProps = async function () {
    const res = await fetch(`http://pet-library.moonhighway.com/api/pets`);
    const data = await res.json();
    return {
        pets: data,
    };
};

export default Pets;
