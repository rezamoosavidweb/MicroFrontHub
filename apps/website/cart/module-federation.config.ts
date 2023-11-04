import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'apps/website/cart',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
