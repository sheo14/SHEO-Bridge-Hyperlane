import { WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      chainName: 'arbitrum',
      standard: 'EvmCollateral',
      decimals: 18,
      symbol: 'ARB',
      name: 'Arbitrum',
      addressOrDenom: '0x632f432b125F189d1085B9e9d8dD010047E55101',
      collateralAddressOrDenom: '0x912ce59144191c1204e64559fe8253a0e49e6548',
      connections: [
        {
          token: 'ethereum|base|0x632f432b125F189d1085B9e9d8dD010047E55101',
        },
      ],
    },
    {
      chainName: 'base',
      standard: 'EvmHypSynthetic',
      decimals: 18,
      symbol: 'ARB',
      name: 'Base',
      addressOrDenom: '0x632f432b125F189d1085B9e9d8dD010047E55101',
      connections: [
        {
          token: 'ethereum|arbitrum|0x632f432b125F189d1085B9e9d8dD010047E55101',
        },
      ],
    },
  ],
  options: {},
};
