<?php
/**
 * Template for the News Archive
 */
get_header(); ?>

<div class="container">
    <h1>News Section</h1>
    <?php if (have_posts()) : ?>
        <div class="news-grid">
            <?php while (have_posts()) : the_post(); ?>
                <article class="news-item">
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <p><?php the_excerpt(); ?></p>
                </article>
            <?php endwhile; ?>
        </div>
    <?php else : ?>
        <p>No news articles found.</p>
    <?php endif; ?>
</div>

<?php get_footer(); ?>

<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/news-350x223-1.jpg" alt="Description">
