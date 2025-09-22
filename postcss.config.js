/**
 * PostCSS configuration.
 *
 * PostCSS is used by Vite to process CSS files. Here we configure
 * TailwindCSS and Autoprefixer plugins to generate utility classes and
 * automatically add vendor prefixes where necessary.
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};