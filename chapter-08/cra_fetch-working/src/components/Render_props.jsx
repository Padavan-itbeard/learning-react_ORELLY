import { List } from "./List";

const tahoe_peaks = [
    { name: "Freel Peak", elevation: 10891 },
    { name: "Monument Peak", elevation: 10067 },
    { name: "Pyramid Peak", elevation: 9983 },
    { name: "Mt. Tallac", elevation: 9735 },
];

export const RenderProps = () => {
    return (
        <List 
            data={tahoe_peaks} 
            renderEmpty={<p>This list is empty</p>} 
            renderItem={item => (<>
                {item.name} - {item.elevation.toString()}ft.
            </>)}    
            />
    );
};
