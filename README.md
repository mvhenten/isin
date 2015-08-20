# isin

Check if a thing is in an array

## Installation

```
    npm install isin
```

### Usage

```javascript
    
    var isin = require("isin").isin;
    var notin = require("isin").notin;
    
    var options = [1,2,3,4,5];
    
    
    if( isin( options, 9 ) ){
        console.log("We have a 9!");
    }
    
    if( notin(options, 10) ){
        console.log("We can do without a 10!");
    }

```

### Why

I got sick and tired of ```if( Array.isArray(options) && options.indexOf(foo) !== -1 )```
Plus, there are `42` tests.

