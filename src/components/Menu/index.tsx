import { useSelector } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import './styles.scss';


function Menu() {
  const {list} = useAppSelector((state: any) => state.recipes);
  return (
    <nav className="menu">
      <a className="menu-link menu-link--active" href="/">
        Accueil
      </a>
      {list.map((recipe: any) => (
        <a
          key={recipe.id}
          className="menu-link"
          href={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </a>
      ))}
    </nav>
  );
}

export default Menu;
