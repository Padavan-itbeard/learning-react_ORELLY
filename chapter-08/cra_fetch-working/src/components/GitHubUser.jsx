import { useEffect, useState } from "react";
import { loadJSON, saveJSON } from "../utils/common";

export const GitHubUser = ({ login }) => {
    const [data, setData] = useState(loadJSON(`user:${login}`));
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!data) return;
        if (data.login === login) {
            const { name, avatar_url, location } = data;
            saveJSON(`user:${login}`, {
                name,
                login,
                avatar_url,
                location,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    useEffect(() => {
        if (!login) return;
        if (data && data.login === login) return;
        setLoading(true);
        /**
         * no-store- Браузер извлекает ресурс с удаленного сервера
         * без предварительного просмотра кеша и не обновляет кеш загруженным ресурсом.
         */
        fetch(`https://api.github.com/users/${login}`, { cache: "no-store" })
            .then((response) => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
        if (data) {
            return;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [login]);

    if (loading) {
        return <h1>loading...</h1>;
    }

    if (error) {
        return <pre>{JSON.stringify(error, null, 2)}</pre>;
    }

    return !data ? null : (
        <div className="githubUser">
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{ width: 200 }}
            />
            <h1>{data.login}</h1>
            {data.name && <p>{data.name}</p>}
            {data.location && <p>{data.location}</p>}
        </div>
    );
};
