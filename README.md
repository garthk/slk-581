# `slk-581`

Makes SLK-581 indicators, recently popular because of the Australian Census.

[![Build Status](https://travis-ci.org/garthk/slk-581.svg?branch=travisify)](https://travis-ci.org/garthk/slk-581)

```js
var makeIndicator = require('slk-581').makeIndicator;
var indicator = makeIndicator({
    givenName: 'Jane',
    familyName: 'Citizen',
    born: {
        year: 1970, // bloody Gen-Xer
        month: 2,
        day: 1,
        accuracy: {
            year: 'A', // accurate
            month: 'E', // estimated
            day: 'U', // unknown
        },
    },
    sex: 2, // 1: male; 2: female; 3: intersex/indeterminate; 9: unknown
});
console.log(indicator); // -> ITZAN197002012AEU
```

References:

* [Statistical linkage key 581 cluster](http://meteor.aihw.gov.au/content/index.phtml/itemId/349510)
* [SLK-581 Summary Sheet](http://www.aihw.gov.au/WorkArea/DownloadAsset.aspx?id=60129551915)
