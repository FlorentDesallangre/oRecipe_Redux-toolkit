import Menu from '../../elements/Menu';

import Loading from './Loading';
import AppHeader from '../../elements/AppHeader';

import './Root.scss';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { loadRecipes } from '../../../store/reducers/recipes';
import { useAppDispatch } from '../../../hooks/redux';

interface AppProps {
  loading?: boolean;
}

function Root({ loading }: AppProps) {
  const dispatch =  useAppDispatch();
  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);
  if (loading) {
    return <Loading />;
  }

  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="app">
      <AppHeader />
      <Menu />
      <Outlet />

    </div>
  );
}

export default Root;
