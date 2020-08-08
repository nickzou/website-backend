<?php
    function register_global_resources() {
        wp_register_script('app', get_template_directory_uri() . '/js/app.js', array(), '1', true);
        wp_register_style('styles', get_template_directory_uri() . '/css/styles.css', array(), '1.0.3', 'all');
    }

    add_action('init', 'register_global_resources');