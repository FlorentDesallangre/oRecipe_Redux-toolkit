import Menu from '../../elements/Menu';

import Loading from './Loading';
import AppHeader from '../../elements/AppHeader';

import './Root.scss';
import { Outlet } from 'react-router-dom';

interface AppProps {
  loading?: boolean;
}

function Root({ loading }: AppProps) {
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
