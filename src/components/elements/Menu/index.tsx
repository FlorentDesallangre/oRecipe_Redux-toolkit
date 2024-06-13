import { useEffect } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { loadRecipes } from '../../../store/reducers/recipes';


function Menu() {
  const {list} = useAppSelector((state: any) => state.recipes);
  return (
    <nav className="menu">
      <NavLink className={ ({ isActive }) => isActive ? "menu-link menu-link--active" : "menu-link" } to="/">
        Accueil
      </NavLink>
      {list.map((recipe: any) => (
        <NavLink
          key={recipe.id}
          className="menu-link"
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
