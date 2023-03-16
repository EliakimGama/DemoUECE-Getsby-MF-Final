export default {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-federation',
      options: {
        ssr: true,
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
