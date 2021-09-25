import ReactDOM from 'react-dom';
import recipes from './data/recipes.json'
import { Menu } from './components/Menu';

ReactDOM.render(<Menu title="Delicious Recipes" recipes={recipes}/>, document.getElementById('root'));