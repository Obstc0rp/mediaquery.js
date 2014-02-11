mediaquery.js
=============

## Description

This is a full JavaScript library for media queries as known from CSS3 but for JavaScript.


## Quick Start

To start you just need an object with some of the following attributes. Just use those you need.

`
var myMediaObject = {
    before: function(){console.log('before')},
 	after: function(){console.log('after')},
 	resizeXS: function(){console.log('xs')},
 	resizeSM: function(){console.log('sm')},
 	resizeMD: function(){console.log('md')},
 	resizeLG: function(){console.log('lg')}
}
mediaqueryjs.mediaQueryAdd(myMediaObject);`

### Attribute List

- **before** function - will be fired at first
- **after** function - will be fired at last
- **resizeXS** function - if defined, will be fired on extra small devices. otherwise the next bigger defined function will be fired.
- **resizeSM** function - if defined, will be fired on small devices. otherwise the next bigger defined function will be fired.
- **resizeMD** function - if defined, will be fired on medium devices. otherwise the next bigger defined function will be fired.
- **resizeLG** function - if defined, will be fired on large devices.

The default values for different device width is based on those of twitter bootstrap.

<http://getbootstrap.com/css/#grid-media-queries>

Default values are:

| devices       |  width    |
| ------------- | --------- |
| xs            |  <= 767   |
| sm            |  <= 991   |
| md            |  <= 1199  |
| lg            |  >= 1200  |


## API

`mediaQueryAdd(object)` adds an object which provides functions for the different sizes.
`mediaQueryRemove(object)` for the unlikly case an object has to be removed.
`setMaxXSWidth(width)` sets the max width for extra small devices.
`setMaxSMWidth(width)` sets the max width for small devices.
`setMaxMDWidth(width)` sets the max width for medium devices.

