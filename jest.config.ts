import type { Config } from '@jest/types';
import baseConfig from './jest.base.config';

const config: Config.InitialOptions = {
  ...baseConfig(process.env.COVERAGE_DIR),
  projects: ['<rootDir>/packages/core'],
};

export default config;
