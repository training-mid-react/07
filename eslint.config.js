import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist', 'node_modules', 'eslint.config.js'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            'eslint:recommended',
            'plugin:react/recommended',
            'prettier',
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier: 'error',
        },
        rules: {
            'prettier/prettier': 'error',
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'react-hooks/exhaustive-deps': 'off',

            // Reglas de estilo
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'no-multiple-empty-lines': ['error', { max: 1 }],
            'semi-spacing': ['error', { after: true }],
            'space-before-function-paren': [
                'error',
                {
                    anonymous: 'always',
                    named: 'always',
                    asyncArrow: 'always',
                },
            ],

            // Reglas de TypeScript
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    args: 'none',
                    ignoreRestSiblings: false,
                },
            ],
            indent: ['error', 4],

            'no-multi-spaces': 'error',
            'max-len': ['error', { code: 80 }],
            'space-before-blocks': ['error', 'always'],
            'brace-style': ['error', '1tbs'],
            'comma-dangle': ['error', 'always-multiline'],
            'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            'space-infix-ops': 'error',
            'consistent-return': 'error',
        },
    }
);
