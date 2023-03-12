export default {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-federation',
      options: {
        ssr: process.env.MF_SSR !== 'false',
        federationConfig: {
          name: 'nav',
          exposes: {
            './Page': './src/components/RemotePage', // adicionado
          },
        },
      },
    },
  ],
}
