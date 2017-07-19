# expanda.js

Expand selection of \<a> tag in th, td, div, etc

------

Author: bLue

Version: 1.0.1

Demo: [https://dreamerblue.github.io/expanda.js/](https://dreamerblue.github.io/expanda.js/)

## Dependencies

- [jQuery](https://jquery.com)

## Usage

#### $(...).expanda()

Expanda selection of its direct children \<a>.

Optional Arguments:

``` 
$(...).expanda({
    'autoExpand': '' // Its all direct children in 'autoExpand'
                     // will be automatically executed expanda()
                     // Use comma as delimiter
})
```

#### class="expanda-add"

All HTML elememts with class `expanda-add` will be automatically executed expanda().

	