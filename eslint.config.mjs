/* eslint perfectionist/sort-objects: "error" */

import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'warn',
    'style/brace-style': ['warn', '1tbs'],
    'style/jsx-one-expression-per-line': 'off',
    'style/jsx-quotes': ['warn', 'prefer-single'],
    'ts/ban-ts-comment': 'off',
    'ts/no-unused-expressions': 'off',
    'unused-imports/no-unused-imports': 'warn',
  },
  vue: {
    overrides: {
      'vue/html-self-closing': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
})
