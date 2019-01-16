module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    /* Possible errors */
    // 'comma-dangle': 2,
    'no-cond-assign': 2,
    'no-console': 1,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    // 'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-typeof': 2,

    /* Best practices */
    'accessor-pairs': 2,
    'array-callback-return': 0,
    'consistent-return': 0,
    // 'curly': [2, 'multi-or-nest', 'consistent'],
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': [2, {
      'allowPattern': '^[a-z]+(_[a-z]+)+$'
    }],
    'eqeqeq': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-function': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': 0,
    'no-multi-spaces': [2, {
      exceptions: {
        Array: true,
        Property: true,
        VariableDeclarator: true,
        ImportDeclaration: true
      }
    }],
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 0,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 0,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 0,
    'no-unused-labels': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-void': 2,
    'no-with': 2,
    'wrap-iife': 2,

    /* Variables*/
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 2,
    'no-shadow': 0,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unused-vars': [1, {
      vars: 'all',
      args: 'none'
    }],
    'no-use-before-define': [2, {
      "functions": false
    }],

    /* Node.js and CommonJS */
    'callback-return': 0,
    'global-require': 2,
    'handle-callback-err': 2,
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-env': 2,
    'no-process-exit': 2,

    /* Stylistic issues */
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'always'],
    // 'brace-style': [2, '1tbs', {
    //   "allowSingleLine": true
    // }],
    'camelcase': 2,
    'comma-spacing': 2,
    'comma-style': [2, 'first', {
      exceptions: {
        ArrayExpression: true,
        ObjectExpression: true
      }
    }],
    'consistent-this': [2, 'self'],
    'eol-last': 2,
    'indent': [2, 2, {
      MemberExpression: 'off',
      VariableDeclarator: {
        const: 2
      },
      FunctionExpression: {
        parameters: 'first'
      },
      CallExpression: {
        arguments: 'off'
      },
      ArrayExpression: 'first',
      ObjectExpression: 'first'
    }],
    'key-spacing': [0, {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum'
    }],
    'keyword-spacing': 2,
    // 'linebreak-style': 2,
    'lines-around-comment': 2,
    'max-depth': [2, 5],
    'max-len': [2, 120],
    'max-nested-callbacks': [2, 5],
    'max-params': [2, 4],
    'max-statements-per-line': 2,
    'new-cap': [2, {
      capIsNew: false
    }],
    'new-parens': 2,
    'newline-after-var': 0,
    'newline-before-return': 0,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-continue': 2,
    // 'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-negated-condition': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    // 'no-trailing-spaces': 1,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var-declaration-per-line': [2, 'always'],
    'quote-props': [2, 'as-needed'],
    'quotes': [2, 'single'],
    'semi': [2, 'never'],
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,

    /* ES6 */
    'arrow-spacing': 2,
    'constructor-super': 2,
    'no-class-assign': 2,
    'no-confusing-arrow': 0,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    // 'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-useless-constructor': 2,
    // 'no-var': 2,
    'object-shorthand': 0,
    'prefer-arrow-callback': 0,
    // 'prefer-const': 2,
    'prefer-rest-params': 0,
    'prefer-spread': 0
  }
}
