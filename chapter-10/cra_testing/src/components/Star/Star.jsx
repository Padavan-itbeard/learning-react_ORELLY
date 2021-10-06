import { FaStar } from 'react-icons/fa';

export const Star = ({ selected = false}) => (<>
    <h1>Great Star</h1>
    <FaStar color={selected ? 'red' : 'grey'} id="star" />
</>
);