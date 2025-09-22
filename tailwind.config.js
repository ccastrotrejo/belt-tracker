/**
 * Tailwind CSS configuration.
 *
 * This file instructs Tailwind which files to scan for class names and sets
 * up a minimal theme extension. Additional customisations can be added here
 * if desired. See the Tailwind documentation for more details.
 */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};