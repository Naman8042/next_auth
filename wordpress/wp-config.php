<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

define('WP_MEMORY_LIMIT', '2G'); // Sets the memory limit to 2GB


/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'w<zn5y~j0Gq>zV7@H^@ca@_qKrxb^!MJLzcQ%b<jBBG7>S&B7#-m4J-x|E2Z_:|/' );
define( 'SECURE_AUTH_KEY',  '0)OcMIBBuK/x6 e$?mq.V)g{e^#`$<x&j<4wjDtN7@|HfoL*x.$qmGvndf=rIx[J' );
define( 'LOGGED_IN_KEY',    'K}l`]J.7enH&8(o@VU$L[LFq2:*OVG`V>XmG1e,K-93!*{4G{ijRtFVJSErVP&4k' );
define( 'NONCE_KEY',        '?{hd3Qq&.U%aiCmKoLbSZxd+=hR[i&ynj&UtJd9G%M41K~BNuDfz9U@9u[<:iKG?' );
define( 'AUTH_SALT',        '4#V5]xFFVE[&sPa(,V*TUGC;0]u4;i_w~[>5C?`41:1QLU7mH~6%9t&)]b310>I$' );
define( 'SECURE_AUTH_SALT', 'o [j!1wDeHp9JtpC)B;T^}^f`S8rBuvvZWt$H%cCL()K]TUmNIA5E&DBIaT4*f|-' );
define( 'LOGGED_IN_SALT',   'g~3vqba*a `^{*fAp_k|oQda3z*/ij@%{>f|5Ql90!6AY68?DL_vr27W_A A}aL!' );
define( 'NONCE_SALT',       'X,asV,#oAPf-66aM/x%6XH&i`&kma+Y*vy)#qQxBlp7wHcsf8osBi59]{sKWD|yR' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

