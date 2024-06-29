// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./dist/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  module: {
    "rules": {
      "at-rule-no-unknown": [
        true,
        {
          "ignoreAtRules": [
            "extends",
            "apply",
            "tailwind",
            "components",
            "utilities",
            "screen"
          ]
        }
      ]
    }
  },
  plugins: [
    'postcss-preset-env',
     tailwindcss
  ],
  // ...
}