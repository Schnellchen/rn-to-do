module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
		'plugin:promise/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'promise'],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: [
					'block',
					'block-like',
					'multiline-const',
					'multiline-expression',
					'function',
					'return',
					'switch',
					'export',
				],
			},
			{
				blankLine: 'always',
				prev: ['multiline-const', 'multiline-expression', 'function', 'switch'],
				next: '*',
			},
		],
		'no-console': 'warn',
		'react/jsx-newline': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'all',
				argsIgnorePattern: '^_',
			},
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'promise/catch-or-return': ['error', { allowFinally: true }],
	},
};
