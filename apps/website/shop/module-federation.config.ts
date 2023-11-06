import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'apps/website/shop',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
