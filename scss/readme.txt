stylesheets/

//modules is reserved for sass code that doesnt cause sass to actually
//output css. Things like mixin declarations, functions and variables 
    -- Modules  
        all.scss
        utility.scss
        colors.css

//This is where the main css is constructed thats why you break it up
//into all of the necessary parts 
    -- Partials 
        base.sass
        buttons.scss
        figures.scss
        grids.scss
        typography.scss
        reset.scss

//This is all for the third party files
    -- vendor
        colorpicker.scss
        jquery.ui.core.scss


//keep all the imports in this main file
main.scss
