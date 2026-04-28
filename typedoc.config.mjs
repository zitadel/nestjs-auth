/** @type {import('typedoc').TypeDocOptions} */
export default {
  entryPoints: ['src/index.ts', 'src/adapter.ts'],
  out: 'docs',
  tsconfig: './tsconfig.json',
  readme: 'none',
  excludeInternal: true,
  excludePrivate: true,
  externalSymbolLinkMappings: {
    oauth4webapi: {
      'TokenEndpointResponse.expires_in':
        'https://github.com/panva/oauth4webapi',
      'TokenEndpointResponse.access_token':
        'https://github.com/panva/oauth4webapi',
      'TokenEndpointResponse.refresh_token':
        'https://github.com/panva/oauth4webapi',
    },
    '@auth/core': {
      'AuthConfig.adapter': 'https://authjs.dev/reference/core',
      'AuthConfig.session': 'https://authjs.dev/reference/core',
      'AuthConfig.logger': 'https://authjs.dev/reference/core',
      'AuthConfig.debug': 'https://authjs.dev/reference/core',
      'AuthConfig.pages': 'https://authjs.dev/reference/core',
      JWT: 'https://authjs.dev/reference/core/jwt',
      'OAuthConfig.profile': 'https://authjs.dev/reference/core/providers',
      'CredentialsConfig.authorize':
        'https://authjs.dev/reference/core/providers/credentials',
      TokenSet: 'https://authjs.dev/reference/core/types',
      'OAuth2Config.checks': 'https://authjs.dev/reference/core/providers',
    },
  },
};
