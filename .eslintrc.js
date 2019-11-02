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
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    semi: ['error', 'always'],
    'vue/html-self-closing': ['error', {
      'html': {
        'normal': 'never',
      }
    }]
  }
};
