import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'apps/website/about',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
