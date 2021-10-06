import { Fetch } from "./Fetch";

const userDetails = ({ data }) => (
    <div className="githubUser">
        <img 
            src={data.avatar_url}
            alt={data.login}
            width="200"
        />
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
    </div>
);

export const GitHubUser2 = ({ login }) => (
    <Fetch
        url={`https://api.github.com/users/${login}`}
        renderSuccess={userDetails}
    />
);