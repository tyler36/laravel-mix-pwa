# laravel-mix-eslint

This extension is designed to allow you add eslint to your laravel-mix chain.

## Installation

1. Require the package through `yarn` or `npm`.
Laravel-mix will install the required dependencies as needed.

    ```bash
    yarn add laravel-mix-eslint
    ```

2. Add a configuration file to your project root.
   By default, this package looks `.eslintrc.js` in your project root.
   This can be overridden during the follow step.

3. Import package into your laravel webpack config file (`webpack.mix.js`).

    ```js
    require( 'laravel-mix-eslint' );
    ...
    mix.eslint();
    ```

- Defaults may be overridden by passing an object to the mix call:

    ```js
    mix.eslint({configFile:  path.join( {'default.js'} )});
    ```
