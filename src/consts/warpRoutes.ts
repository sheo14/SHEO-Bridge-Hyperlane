import { WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
export const warpRouteConfigs: WarpCoreConfig = {

{
  tokens: [
    {
      // The ChainName of the token
      chainName: 'arbitrum',
      // See https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/token/TokenStandard.ts
      standard: TokenStandard.EvmHypCollateral,
      // The token metadata (decimals, symbol, name)
      decimals: 18,
      symbol: 'ARB',
      name: 'Arbitrum',
      // The router address
      addressOrDenom: '0x632f432b125F189d1085B9e9d8dD010047E55101',
      // The address of the underlying collateral token
      collateralAddress: '0x912ce59144191c1204e64559fe8253a0e49e6548',
      // A path to a token logo image
      logoURI: '/logos/usdc.png',
      // The list of tokens this one is connected to
      connections: [ { token: 'ethereum|Arbitrum|0x632f432b125F189d1085B9e9d8dD010047E55101' } ]
    },
    {
      chainName: 'base',
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 18,
      symbol: 'ARB',
      name: 'Arbitrum',0x632f432b125F189d1085B9e9d8dD010047E55101',
      logoURI: '/logos/usdc.png',
      connections: [ { token: 'ethereum|Arbitrum|0x632f432b125F189d1085B9e9d8dD010047E55101' } ]
    }
  ]
}
