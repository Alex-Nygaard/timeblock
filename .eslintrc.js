module.exports = {
    root: true,
    extends: ['airbnb-typescript/base', 'prettier'],
    plugins: ['import', 'prettier'],
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'warn',
        'no-console': 'off',
        'func-names': 'off',
        'no-process-exit': 'off',
        'object-shorthand': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
    },
};
