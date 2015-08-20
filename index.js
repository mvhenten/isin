"use strict";

// better be verbose then sorry
function isin(array, thing) {
    if (!Array.isArray(array))
        return false;

    return array.indexOf(thing) !== -1;
}

function notin(things, thing) {
    if (!Array.isArray(things))
        return true;

    return things.indexOf(thing) === -1;
}

module.exports = {
    isin: isin,
    notin: notin
};