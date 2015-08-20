"use strict";


var test = require("tape");
var isin = require("./index").isin;
var notin = require("./index").notin;


test("Should say true for all things in a", function(assert) {
    var a = [1, 23, 3, , 4, 545, 3, "a", {},
        [], new Date()
    ];
    var b = ["1", "23", {
            a: 1
        },
        [1], new Date(1)
    ];

    a.forEach(function(value) {
        assert.equal(isin(a, value), true, "Value contained in a: " + value);
    });

    b.forEach(function(value) {
        assert.equal(isin(a, value), false, "Value is in a: " + value);
    });

    assert.end();
});


test("Should say false for all things in b notin a", function(assert) {
    var a = [1, 23, 3, , 4, 545, 3, "a", {},
        [], new Date()
    ];
    var b = ["1", "23", {
            a: 1
        },
        [1], new Date(1)
    ];

    b.forEach(function(value) {
        assert.equal(notin(a, value), true, "Value not in b: " + value);
    });

    a.forEach(function(value) {
        assert.equal(notin(a, value), false, "Value is in a: " + value);
    });

    assert.end();
});

test("Should be okay with weird input for a", function(assert) {
    var b = ["1", "23", {
        a: 1
    }, null, undefined, new Date(1)];

    b.forEach(function(value) {
        assert.equal(isin(value, value), false, "Value not in b: " + value);
    });

    b.forEach(function(value) {
        assert.equal(notin(value, value), true, "Value not in b: " + value);
    });

    assert.end();
});