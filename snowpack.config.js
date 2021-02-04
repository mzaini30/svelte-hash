/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    public: '/',
    src: '/dist'
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-svelte',
    'snowpack-plugin-hash'
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    "bundle": true,
    minify: true
  },
  packageOptions: {
    /* ... */
    "knownEntrypoints": ["@roxi/routify/runtime/buildRoutes"]
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
