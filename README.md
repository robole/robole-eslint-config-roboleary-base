# eslint-config-roboleary-base

My base config for linting JavaScript.

This extends the [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) config to gives a core collection of rules with some modifications.

## Rules changed

- [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars): Aimed at eliminating unused variables, functions, and function parameters. **Set to "warn"**.
- [`no-console`](https://eslint.org/docs/rules/no-console): Disallow the use of console. **Set to "off"**.
- [`func-names`](https://eslint.org/docs/rules/func-names): Require or disallow named function expressions. **Set to "off"**.
- [`no-use-before-define`](https://eslint.org/docs/rules/no-use-before-define): Disallow early use of variables or functions that are possible through hoisting. **Set to "off".**
- [`prefer-const`](https://eslint.org/docs/rules/prefer-const): This rule is aimed at flagging variables that are declared using let keyword, but never reassigned after the initial assignment. **Set to "off".**
- [`radix`](https://eslint.org/docs/rules/radix): When using the parseInt() function it is common to omit the second argument, the radix, and let the function try to determine from the first argument what type of number it is. Set to "off",
- [`no-plusplus`](https://eslint.org/docs/rules/no-plusplus): Because the unary ++ and -- operators are subject to automatic semicolon insertion, differences in whitespace can change semantics of source code. **Set to allow for loops with the { "allowForLoopAfterthoughts": true } option.**
.
- [`no-return-assign`](https://eslint.org/docs/rules/no-return-assign): Disallow assignments in return statements unless they are enclosed in parentheses coz they confusing!

## Usage

1. Install this package and ESLint as *devDependencies* with the command `npm i --save-dev eslint eslint-config-roboleary-base`.
1. Create an eslint config file in the root of your project directory e.g. _.eslintrc.json_. Add the following:

   ```json
   {
     "extends": ["eslint-config-roboleary-base"]
   }
   ```

   Alternatively, you can put a reference to the config in your _package.json_ under the property `eslintConfig`.

1. You can add scripts to your _package.json_ to lint, fix, and format your code from the command-line.

	```json
	{
		"scripts": {
			"lint": "npx eslint .",
			"lint:fix": "npm run lint -- --fix",
		},
	}
	```

## Other related configs

If you want to use these rules in other stacks or environments, you can try:
- [eslint-config-roboleary](https://www.npmjs.com/package/eslint-config-roboleary) if you want to use it with Prettier. The config turn off rules that conflict with Prettier.
- [eslint-config-vue2-roboleary](https://www.npmjs.com/package/eslint-config-vue2-roboleary) if you want to use these rules with Vue v2. It adds extra rules for vue.
- [eslint-config-svelte3-roboleary](https://www.npmjs.com/package/eslint-config-svelte3-roboleary): if you want to use these rules with Svelte v3.
