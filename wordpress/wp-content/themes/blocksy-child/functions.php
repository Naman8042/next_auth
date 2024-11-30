<?php
if (! defined('WP_DEBUG')) {
	die( 'Direct access forbidden.' );
}


function register_news_post_type() {
    $args = array(
        'public' => true,
        'label'  => 'News',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'news'),
        'has_archive' => true,
    );
    register_post_type('news', $args);
}
add_action('init', 'register_news_post_type');

function custom_news_permalink($permalink, $post) {
    // Check if the post type is "news"
    if ($post->post_type == 'news') {
        return home_url('news/' . $post->post_name);
    }
    return $permalink;
}
add_filter('post_type_link', 'custom_news_permalink', 10, 2);

add_filter('template_directory', 'load_different_theme_for_news');
add_filter('stylesheet_directory', 'load_different_theme_for_news');

// function switch_to_blocksy_for_news($template) {
//     // Use the page ID or slug to target the "News" page
//     if (is_page('news')) { // Replace 'news' with the slug of your News page
//         return 'blocksy'; // Parent theme folder name
//     }

//     return $template; // Default theme (Child theme) for other pages
// }

function load_different_theme_for_news($template) {
    $news_theme = WP_CONTENT_DIR . '/themes/twentytwentytwo'; // Change to a valid theme
    if (file_exists($news_theme)) {
        if (
            is_page('news') || 
            is_post_type_archive('news') || 
            is_singular('news') || 
            strpos($_SERVER['REQUEST_URI'], '/news') !== false
        ) {
            return $news_theme;
        }
    } else {
        error_log('The specified theme does not exist: ' . $news_theme);
    }
    return $template;
}

add_filter('template_directory', 'load_different_theme_for_news');
add_filter('stylesheet_directory', 'load_different_theme_for_news');

add_action('wp_footer', function() {
    $theme = wp_get_theme();
    echo "<!-- Current Theme: " . $theme->get('Name') . " -->";
});


$theme = wp_get_theme();
if (is_child_theme()) {
    $parent_theme = $theme->parent();
    echo "Child Theme: " . $theme->get('Name') . " | Parent Theme: " . $parent_theme->get('Name');
} else {
    echo "Active Theme: " . $theme->get('Name');
}