import { Provider } from 'react-redux';
// On importe ReactDom qui nous permettra d'injecter notre application dans le DOM
import ReactDOM from 'react-dom/client';
// On importe notre composant principal
// On importe notre fichier de style global
import './styles/index.scss';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import Recipe from './components/pages/Recipe';

import store from './store';
import Root from './components/pages/Root/Root';
import Loading from './components/pages/Root/Loading';

// Je créer un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createBrowserRouter(createRoutesFromElements(
  
  <Route path="/" element={<Root />} errorElement={<Error />} loader={Loading}>  
    <Route index element={<Home />} />
    <Route path="/recipe/:slug" element={<Recipe />} loader={Loading}/>
    <Route path="/Error" element={<Error />} />
  </Route>

))
// On injecte notre application dans le DOM
root.render(
  
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  
);
