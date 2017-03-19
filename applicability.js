(function () {
    var oWebViewInterface = window.nsWebViewInterface;

    /**
     * 
     * 
     */
    function defineInterfaceFunctions() {
        window.apply = function (filterIdList) {
            if(filterIdList == undefined ||
                    filterIdList.length <= 0) {
                return;
            }

            $('[applicId]').each(function () {
                var toFilter = $(this);

                //If element is a div, filter the parent instead
                if ($(this).is('div')) {
                    toFilter = $(this).parent();
                }

                //Hide element if it isn't applicable
                if (isApplicable(this, filterIdList)) {
                    toFilter.css('opacity', '1');
                    toFilter.css('color', 'green');
                    //toFilter.css('display', 'inline');
                }
                else {
                    toFilter.css('opacity', '0.2');
                    toFilter.css('color', 'red');
                    //toFilter.css('display', 'none');
                }
            });
        };
    }

    /**
     * 
     * 
     * @param {any} element 
     * @param {string[]} idList 
     * @returns {boolean}
     */
    function isApplicable(element, idList) {
        var attrId = $(element).attr('applicId');
        var visible = false;

        idList.forEach(function (id) {
            if (attrId == id) {
                visible = true;
            }
        });

        return visible;
    }


    /**
     * 
     * 
     */
    function init() {
        defineInterfaceFunctions();
        document.body.onload = function() {
            oWebViewInterface.emit('onload');
        }
    }

    init();
})();