const withPWA = require("next-pwa")({
  dest: "public", // Define a pasta onde os arquivos do PWA serão gerados
  disable: process.env.NODE_ENV === "development", // Desativa PWA no modo de desenvolvimento
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true", // Ativa a análise do bundle quando a variável ANALYZE=true
});

module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true, // Ativa o modo estrito do React para detectar possíveis problemas na aplicação

    webpack: (config, { dev, isServer }) => {
      // Usa Preact para otimizar o bundle no ambiente de produção
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: "preact/compat",
          "react-dom/test-utils": "preact/test-utils",
          "react-dom": "preact/compat",
        });
      }
      return config;
    },

    async rewrites() {
      return [
        // Redirecionamentos personalizados
        { source: "/js/", destination: "https://roberlancarvalho.com/" },
        { source: "/jekyll/", destination: "https://roberlancarvalho.com/" },
        { source: "/svg/", destination: "https://roberlancarvalho.com/" },
        { source: "/dev/", destination: "https://roberlancarvalho.com/" },
        { source: "/tags/", destination: "https://roberlancarvalho.com/" },
        {
          source: "/making-of-blog-novo/",
          destination: "https://roberlancarvalho.com/making-of-blog-novo-gatsby-js",
        },
        { source: "/page/:slug*", destination: "https://roberlancarvalho.com/" },
      ];
    },

    // async redirects() {
    //   return [
    //     {
    //       source: "/my-trips/",
    //       destination: "https://my-trips.willianjusten.com.br/",
    //       permanent: true,
    //     },
    //     {
    //       source: "/japanese-words/",
    //       destination: "https://japanese-words.willianjusten.com.br/",
    //       permanent: true,
    //     },
    //     {
    //       source: "/learn-japanese/",
    //       destination: "https://learn-japanese.willianjusten.com.br/",
    //       permanent: true,
    //     },
    //     {
    //       source: "/js-com-tdd-na-pratica-na-udemy/",
    //       destination: "https://www.youtube.com/@WillianJustenCursos",
    //       permanent: true,
    //     },
    //     {
    //       source: "/novo-curso-aprenda-criar-sites-animados-greensock/",
    //       destination: "https://willianjusten.com.br",
    //       permanent: true,
    //     },
    //     {
    //       source: "/novo-curso-gatsby-crie-um-site-pwa-com-react-graphql-netlify-cms/",
    //       destination: "https://willianjusten.com.br",
    //       permanent: true,
    //     },
    //   ];
    // },

    images: {
      domains: ["pbs.twimg.com", "avatars.githubusercontent.com"], // Permite imagens externas desses domínios
    },
  })
);
