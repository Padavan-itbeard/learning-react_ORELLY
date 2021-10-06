export const List = ({ data = [], renderEmpty, renderItem }) => {
    if (!data.length) return renderEmpty;

    return (
        <ul>
            {data.map((item, i) => (
                <li key={`${i}-li`}>{renderItem(item)}</li>
            ))}
        </ul>
    );
};
