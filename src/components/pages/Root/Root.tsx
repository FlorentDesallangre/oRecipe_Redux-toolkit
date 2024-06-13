import Menu from '../../elements/Menu';

import Loading from './Loading';
import AppHeader from '../../elements/AppHeader';

import './Root.scss';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { loadRecipes } from '../../../store/reducers/recipes';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

function Root() {
  const dispatch =  useAppDispatch();
  const { loading } = useAppSelector((state) => state.recipes);
  useEffect(() => {
    
    dispatch(loadRecipes());
  }, [dispatch]);
  
  
 

  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <AppHeader />
      <Menu />
      <Outlet />

    </div>
  );
}

export default Root;
