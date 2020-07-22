<?php

    function open_svg($path) {
        
        return '<div class="svg-image">' . file_get_contents(get_template_directory() . $path) . '</div>';
    }
