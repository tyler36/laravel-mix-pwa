/* eslint-disable class-methods-use-this */

let mix = require( 'laravel-mix' );

let SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

/**
 * Lint Javascript via PWA
 *
 * return {void}
 *
 */
class PWA {
    /**
     * The optional name to be used when called by Mix.
     *
     * @return {String|Array}   Name
     */
    name() {
        return ['pwa'];
    }

    /**
     * All dependencies that should be installed by Mix.
     *
     * @return {Array}  Dependencies
     */
    dependencies() {
        this.requiresReload = 'PWA dependencies have been installed. Please ensure you have added a config file.';

        return [
            'sw-precache-webpack-plugin',
        ];
    }
}

mix.extend( 'pwa', new Pwa() );
