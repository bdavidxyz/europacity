<?php
/**
 * Template Name: category
 * 
 * File category.php
 *
 */
  
  get_header();
?>


<div class="c-category grid-container">
  category of 
  <?php 
    // echo  single_cat_title()
    $category = get_category( get_query_var( 'cat' ) );
    $cat_id = $category->cat_ID;
    echo get_cat_name( $cat_id );
    echo category_description( $cat_id );
  ?>

</div>







<?php get_footer(); ?>
