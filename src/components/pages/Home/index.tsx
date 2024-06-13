import Page from '../../layouts/Page';
import AppHeader from '../../elements/AppHeader';
import Content from '../../layouts/Content';
import { useAppSelector } from '../../../hooks/redux';

function Home() {
  const recipes = useAppSelector((state) => state.recipes.list);
  return (
    <Page>
      <Content
        title="Les recettes oRecipes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={recipes}
      />
    </Page>
  );
}

export default Home;
