module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'vue/html-self-closing': ['error', {
      html: {
        normal: 'never',
      }
    }],
    'space-before-function-paren': ['error', {
      anonymous: "always",
      named: "never",
      asyncArrow: "always"
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true
    }],
    'vue/singleline-html-element-content-newline': "off",
  }
};
