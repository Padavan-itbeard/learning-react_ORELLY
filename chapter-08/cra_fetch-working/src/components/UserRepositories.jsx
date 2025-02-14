import { Fetch } from "./Fetch";
import { RepoMenu } from "./RepoMenu";

export const UserRepositories = ({
    login,
    selectedRepo,
    onSelect = (f) => f,
}) => {
    return (
        <Fetch
            url={`https://api.github.com/users/${login}/repos`}
            renderSuccess={({ data }) => (
                <RepoMenu
                    repositories={data}
                    selectedRepo={selectedRepo}
                    onSelect={onSelect}
                />
            )}
        />
    );
};
