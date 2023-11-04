import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'apps/website/shell',
  remotes: [
    'apps/website/shop',
    'apps/website/cart',
    'apps/website/about',
    'apps/website/home',
  ],
};

export default config;
