isDic = (inputStr) => {
    if (inputStr.length < 11) { return false }

    if (inputStr.length > 12) { return false }

    //zkraceny zapis predchozich kroku
    if (inputStr.length < 11 || inputStr.length > 12) { return false }

    const prefix = inputStr.slice(0, 2)

    if (prefix !== 'CZ') { return false }

    const digits = inputStr.slice(2)

    if (validator.isInt(digits) === false) { return false }

    return true
}

console.log(`DIČ: ${isDic("CZ123456789")}`)

// RESENI OD LEKTORA
/*const isDIC = (inputStr) => {
    // kontrola délky
    if (inputStr.length < 11) {
        return false;
    }
    if (inputStr.length > 12) {
        return false;
    }

    // kontrola prefixu CZ
    const prefix = inputStr.slice(0, 2);
    console.log(prefix)

    if (prefix !== 'CZ') {
        return false;
    }

    // kontrola, že za prefixem jsou jen číslice
    const digits = inputStr.slice(2);
    console.log(!validator.isInt(digits))

    if (!validator.isInt(digits)) {
        return false;
    }

    return true;
};

console.log(isDIC("CZ123456789"))*/
