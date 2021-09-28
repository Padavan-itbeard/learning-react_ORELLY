import { useReducer } from "react";

const firstUser = {
    id: "0391-3233-3201",
    firstName: "Bill",
    lastName: "Wilson",
    city: "Missoula",
    state: "Montana",
    email: "bwilson@mtnwilsons.com",
    admin: false,
};

export const User = () => {
    // const [{ lastName, firstName, admin, email, city, state }, setUser] =
    //     useState(firstUser);

    // const handleMakeAdmin = () => {
    //     setUser((user) => ({ ...user, admin: true }));
    // };

    const [{ lastName, firstName, admin, email, city, state }, setUser] = useReducer(
        (user, newDetails) => ({ ...user, ...newDetails }),
        firstUser
    );

    const handleMakeAdmin = () => setUser({ admin: true });

    return (
        <>
            <h1>
                {firstName} {lastName} - {admin ? "Admin" : "User"}
            </h1>
            <p>Email: {email}</p>
            <p>
                Location: {city} {state}
            </p>
            <button onClick={handleMakeAdmin}>Make admin</button>
        </>
    );
};
