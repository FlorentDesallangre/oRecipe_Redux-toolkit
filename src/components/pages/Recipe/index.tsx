/* eslint-disable arrow-body-style */
import { Navigate, useParams } from 'react-router-dom';

import Page from '../../layouts/Page';
import AppHeader from '../../elements/AppHeader';

import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

import { useAppSelector } from '../../../hooks/redux';
import { findRecipe } from '../../../store/selectors/recipes';

import './styles.scss';

function Recipe() {
  const { slug } = useParams();

  const recipe = useAppSelector((state) => findRecipe(state.recipes.list,  slug ? slug : ''));

  if (!recipe) {
    return <Navigate to="/error" replace />;
  }
  return (
    <Page>
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients list={recipe.ingredients} />
        <Instructions steps={recipe.instructions} />
      </div>
    </Page>
  );
}

export default Recipe;
