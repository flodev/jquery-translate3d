/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * jquery-translate3d
 * author: Florian Biewald <f.biewald@gmail.com>
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function ( $, window, document, undefined ) {

    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.

    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "translate3d",
        defaults = {
            x: 0,
            y: 0,
            z: 0,
            rotate: 0
        };

    // The actual plugin constructor
    function Plugin( element ) {
        this.element = element;
        this.jqElement = $(element);

        this._defaults = defaults;
        this._name = pluginName;
    }

    Plugin.prototype = {

        initOptions: function(options) {
            this.options = $.extend( {}, defaults, options);

            if (this.values === undefined) {
                this.values = defaults;
            }
        },

        translate3d: function() {
            values = this.values;
            values.x+= this.options.x;
            values.y+= this.options.y;
            values.z+= this.options.z;
            values.rotate+= this.options.rotate;

            this.jqElement.css({
                '-webkit-transform': this.getTransform(),  /* Chrome, Safari 3.1+ */
                '-moz-transform': this.getTransform(),  /* Firefox 3.5-15 */
                '-ms-transform': this.getTransform(),  /* IE 9 */
                '-o-transform': this.getTransform(),  /* Opera 10.50-12.00 */
                'transform': this.getTransform()  /* Firefox 16+, IE 10+, Opera 12.10+ */
            });
        },

        getTransform: function() {
            var transform = 'translate3d(' + this.values.x + 'px,' + this.values.y + 'px,' + this.values.z + 'px)'
                          + ' rotate(' + this.values.rotate + 'deg)';
            return transform;
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            var plugin;
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this));
            }
            plugin = $.data(this, "plugin_" + pluginName);
            plugin.initOptions(options);
            plugin.translate3d();
        });
    };

})( jQuery, window, document );