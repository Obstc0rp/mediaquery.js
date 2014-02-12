window.mediaqueryjs = (function(){
    window.onload = function(){ //TODO: check if there is a better function

        initialize();
        window.onresize = mediaResize;
        mediaResize();
    };

    var mediaqueryjs = {
        mediaQueryAdd: mediaQueryAdd,
        mediaQueryRemove: mediaQueryRemove,
        setMaxXSWidth: setMaxXSWidth,
        setMaxSMWidth: setMaxSMWidth,
        setMaxMDWidth: setMaxMDWidth
    };

    //------------------------- variables -------------------------//
    var xs = 767;
    var sm = 991;
    var md = 1199;
    //var lg = rest;

    //----------------------- initialize function -------------------//

    /**
     * This function is only called once when the DOM tree is loaded (window.onload).
     */
    function initialize(){
        for(var i = 0; i < resizableObjects.length; i++){
            if(resizableObjects[i].initialize)
                resizableObjects[i].initialize();
        }
    }

    //------------------------- resize function -------------------//
    /**
     * This function will be fired, when "onresize"-event on window is fired.
     */
    function mediaResize(){
        var doc_width = window.innerWidth;

        for(var i = 0; i < resizableObjects.length; i++){

            before(resizableObjects[i]);

            if(doc_width <= xs){
                resizeXS(resizableObjects[i]);
            }else if(doc_width <= sm){
                resizeSM(resizableObjects[i]);
            }else if(doc_width <= md){
                resizeMD(resizableObjects[i]);
            }else{
                resizeLG(resizableObjects[i]);
            }

            after(resizableObjects[i]);
        }
    }

    //--------------------- object array, add and remove ----------//
    var resizableObjects = new Array();

    /**
     * Adds an object to the array.
     * @param object
     */
    function mediaQueryAdd(object){
        resizableObjects.push(object);
    }

    /**
     * Removes the given object from the array.
     * @param object
     */
    function mediaQueryRemove(object){
        resizableObjects.remove(object);
    }

    //------------------ set medium sizes --------------------------//
    /**
     * Sets the max width for extra small devices.
     * @param width
     */
    function setMaxXSWidth(width){
        xs = width;
    }

    /**
     * Sets the max width for small deives.
     * @param width
     */
    function setMaxSMWidth(width){
        sm = width;
    }

    /**
     * Sets the max width for medium devices.
     * @param width
     */
    function setMaxMDWidth(width){
        md = width;
    }

    //---------------------- resize functions ---------------------//
    /**
     * Fires the XS-Function, if defined. Else uses the next bigger function.
     * @param object
     */
    function resizeXS(object){
        if(object.resizeXS){
            object.resizeXS();
        }else if(object.resizeSM){
            object.resizeSM();
        }else if(object.resizeMD){
            object.resizeMD();
        }else if(object.resizeLG){
            object.resizeLG();
        }
    }

    /**
     * Fires the SM-Function, if defined. Else uses the next bigger function.
     * @param object
     */
    function resizeSM(object){
        if(object.resizeSM){
            object.resizeSM();
        }else if(object.resizeMD){
            object.resizeMD();
        }else if(object.resizeLG){
            object.resizeLG();
        }
    }

    /**
     * Fires the MD-Function, if defined. Else uses the next bigger function.
     * @param object
     */
    function resizeMD(object){
        if(object.resizeMD){
            object.resizeMD();
        }else if(object.resizeLG){
            object.resizeLG();
        }
    }

    /**
     * Fires the LG-Function, if defined.
     * @param object
     */
    function resizeLG(object){
        if(object.resizeLG){
            object.resizeLG();
        }
    }

    //----------------- before and after functions -----------------//
    /**
     * Fires the before-Function, if defined.
     * @param object
     */
    function before(object){
        if(object.before)
            object.before();
    }

    /**
     * Fires the after-Function, if defined.
     * @param object
     */
    function after(object){
        if(object.after)
            object.after();
    }

    return mediaqueryjs;
})();