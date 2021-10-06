import { bigList } from "./BigList";
import { FixedSizeList } from "react-window";

export const ReactWindow = () => {
    const renderRow = ({ index, style }) => (
        <div style={{ ...style, ...{ display: "flex" } }}>
            <img
                src={bigList[index].avatar}
                alt={bigList[index].name}
                width="50"
            />
            <p>
                {bigList[index].name} - {bigList[index].email}
            </p>
        </div>
    );
    
    return (
        <FixedSizeList
            height={window.innerHeight}
            width={window.innerWidth - 20}
            itemCount={bigList.length}
            itemSize={50}
        >
            {renderRow}
        </FixedSizeList>
    );
};
