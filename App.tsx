import React, { useState } from 'react';
import { Page } from './types';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import Gallery from './pages/Gallery';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.DASHBOARD);

  const renderPage = () => {
    switch (activePage) {
      case Page.DASHBOARD:
        return <Dashboard setActivePage={setActivePage} />;
      case Page.PRICING:
        return <Pricing />;
      case Page.GALLERY:
        return <Gallery />;
      default:
        return <Dashboard setActivePage={setActivePage} />;
    }
  };

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      {renderPage()}
    </Layout>
  );
};

export default App;