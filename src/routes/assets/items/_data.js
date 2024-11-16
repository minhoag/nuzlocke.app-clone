import Clean from 'clean-css';
import items from '/src/lib/data/assets/css/items.css';

const clean = new Clean();
const minifiedItems = clean.minify(items).styles;

export default minifiedItems;
