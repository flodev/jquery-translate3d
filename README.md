jquery-translate3d
==================

jQuery plugin that transforms HTML-elements depending on the previous transformation.
See this blogpost for further information http://flodev.blogspot.de/2013/12/simple-jquery-translate3d-plugin.html

Features
------------------
* use translate3d (and rotate :)) depending on the previous transformation
* uses cross browser prefixes (-moz-, -webkit- etc.)

Usage
------------------
The following code examples are executed one after another.

    $('#element').translate3d({
        x: 2,
        y: 2,
        rotate: 20
    });
    
This would set

    'transform': 'translate3d(2px,2px,0px) rotate(20deg)'

to the element.

    $('#element').translate3d({
        x: 4,
        y: 4
    });
    
This would set

    'transform': 'translate3d(6px,6px,0px) rotate(20deg)'
    
to the element.
Notice that the x,y,z value are calculated with the previous and 20deg will stay until you reset it.

    $('#element').translate3d({
        x: -4,
        y: -4,
        rotate: 40
    });
    
This would set

    'transform': 'translate3d(2px,2px,0px) rotate(40deg)'
    
to the element.
