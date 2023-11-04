import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const AppsWebsiteShop = React.lazy(() => import('apps/website/shop/Module'));

const AppsWebsiteCart = React.lazy(() => import('apps/website/cart/Module'));

const AppsWebsiteAbout = React.lazy(() => import('apps/website/about/Module'));

const AppsWebsiteHome = React.lazy(() => import('apps/website/home/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/apps/website/shop">AppsWebsiteShop</Link>
        </li>

        <li>
          <Link to="/apps/website/cart">AppsWebsiteCart</Link>
        </li>

        <li>
          <Link to="/apps/website/about">AppsWebsiteAbout</Link>
        </li>

        <li>
          <Link to="/apps/website/home">AppsWebsiteHome</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="apps/website/shell" />} />

        <Route path="/apps/website/shop" element={<AppsWebsiteShop />} />

        <Route path="/apps/website/cart" element={<AppsWebsiteCart />} />

        <Route path="/apps/website/about" element={<AppsWebsiteAbout />} />

        <Route path="/apps/website/home" element={<AppsWebsiteHome />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
