function conduitMaterial(sizeField, materialField) {
    var conduitSize = this.getField(sizeField).value;
    if (conduitSize == '5"') {
        this.getField(materialField).setItems([
            "---",
            "RIGID",
            "KwikCoup RT GRC"
        ]);
    }
    else if (conduitSize == '6"') {
        this.getField(materialField).setItems([
            "---",
            "RIGID"
        ]);
    }
    else {
        this.getField(materialField).setItems([
            "---",
            "EMT",
            "KwikFit EMT",
            "KwikFit Comp EMT",
            "KwikFit RT EMT",
            "IMC",
            "KwikCoup RT IMC",
            "RIGID",
            "KwikCoup RT GRC"
        ]);
    }
}

function conduitColor(sizeField, conduitMaterialField, conduitColorField) {
    var conduitSize = this.getField(sizeField).value;
    var conduitMaterial = this.getField(conduitMaterialField).value;
    if (conduitMaterial != 'EMT') {
        this.getField(conduitColorField).setItems([
            "---",
            "SILVER"
        ]);
    }
    else {
        if (conduitSize == '2"' || conduitSize == '3"' || conduitSize == '4"') {
            this.getField(conduitColorField).setItems([
                "---",
                "SILVER",
                "RED"
            ]);
        }
        else if (conduitSize == '2-1/2"' || conduitSize == '3-1/2"' || conduitSize == '5"' || conduitSize == '6"') {
            this.getField(conduitColorField).setItems([
                "---",
                "SILVER"
            ]);
        }
        else {
            this.getField(conduitColorField).setItems([
                "---",
                "SILVER",
                "BLACK",
                "RED",
                "ORANGE",
                "YELLOW",
                "GREEN",
                "BLUE",
                "PURPLE",
                "WHITE"
            ]);
        }
    }
}

function fittingA(sizeField, materialField, fittingAField) {
    var conduitSize = this.getField(sizeField).value;
    var conduitMaterial = this.getField(materialField).value;
    if (conduitMaterial == 'EMT') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            this.getField(fittingAField).setItems([
                "---",
                "EMT SS COUP",
                "EMT SS CONN",
                "EMT COMP COUP",
                "EMT RT COUP",
                "EMT COMP CONN",
                "EMT RT CONN",
                "POUND ON BS"
            ]);
        }
    }
    else if (conduitMaterial == 'IMC' || conduitMaterial == 'RIGID') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            this.getField(fittingAField).setItems([
                "---",
                "GRC COUP",
                "GRC SS COUPLING",
                "GRC SS CONN",
                "GRC SS COUPLING",
                "BOND BS",
                "GROUND BS"
            ]);
        }
        else if (conduitMaterial == 'RIGID') {
            if (conduitSize == '5"') {
                this.getField(fittingAField).setItems([
                    "---",
                    "KwikFit Fitting"
                ]);
            }
            else {
                this.getField(fittingAField).setItems([
                    "---"
                ]);
            }
        }
    }
    else if (conduitMaterial == 'KwikFit EMT') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            this.getField(fittingAField).setItems([
                "---",
                "KwikFit Fitting",
                "EMT SS COUP",
                "EMT SS CONN",
                "POUND ON BS"
            ]);
        }
    }
    else if (conduitMaterial == 'KwikFit Comp EMT') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            this.getField(fittingAField).setItems([
                "---",
                "KwikFit Fitting",
                "EMT COMP COUP",
                "EMT COMP CONN",
                "POUND ON BS"
            ]);
        }
    }
    else if (conduitMaterial == 'KwikFit RT EMT') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            this.getField(fittingAField).setItems([
                "---",
                "KwikFit Fitting",
                "EMT RT COUP",
                "EMT RT CONN",
                "POUND ON BS"
            ]);
        }
    }
    else if (conduitMaterial == 'KwikCoup RT IMC') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            this.getField(fittingAField).setItems([
                "---",
                "KwikFit Fitting",
                "GRC COUP",
                "GRC SS COUPLING",
                "GRC SS CONN",
                "GRC SS COUPLING",
                "BOND BS",
                "GROUND BS"
            ]);
        }
    }
    else if (conduitMaterial == 'KwikCoup RT GRC') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            this.getField(fittingAField).setItems([
                "---",
                "KiwkFit Fitting",
                "GRC COUP",
                "GRC SS COUPLING",
                "GRC SS CONN",
                "GRC SS COUPLING",
                "BOND BS",
                "GROUND BS"
            ]);
        }
        else if (conduitSize == '5"') {
            this.getField(fittingAField).setItems([
                "---",
                "KwikFit Fitting"
            ]);
        }
    }
    else {
        this.getField(fittingAField).setItems([
            "---"
        ]);
    }
}

function date(dateField) {
    var fld = this.getField(dateField);
    var empt = this.getField(dateField).value;
    if (empt == "") {
        fld.value = util.printd("mm/dd/yy", new Date());
    }
}

function addBusinessDays(startingDateField, resultingDateField, daysToAdjust) {
    var startingDate = new Date();
    var counter = 0;
    while (daysToAdjust > 0) {
        var tmp = new Date();
        tmp.setDate(startingDate.getDate() + counter++);
        switch (tmp.getDay()) {
            case 0: case 6: break;
            default:
                daysToAdjust--;
        }
    }
    if (this.getField(resultingDateField).value == "") {
        this.getField(resultingDateField).value = util.printd("mm/dd/yy", tmp);
    }
}

function toAllCaps(field) {
    var words = this.getField(field);
    words.value = words.value.replace(/\w\S*/g, function (txt) { return txt.toUpperCase(); });
}

function copy(copyFromField, copyToField) {
    var copyData = this.getField(copyFromField).value;
    if (this.getField(copyToField).value == "") {
        this.getField(copyToField).value = copyData;
    }
}

function inchMarks(inchField) {
    var inchFieldValue = this.getField(inchField).value;
    var inchValue = this.getField(inchField);

    if (inchFieldValue != "") {
        parsedValue = parseInt(inchFieldValue);
        if (parsedValue <= 0 || isNaN(parsedValue)) {
            inchValue.value = "ERROR";
        }
        else {
            inchValue.value = parsedValue + '"';
        }
    }
}

function degreeMarks(degreeField) {
    var degreeFieldValue = this.getField(degreeField).value;
    var degreeValue = this.getField(degreeField);

    if (degreeFieldValue != "") {
        parsedValue = parseInt(degreeFieldValue);
        if (parsedValue < 0 || isNaN(parsedValue)) {
            degreeValue.value = "ERROR";
        }
        else {
            degreeValue.value = parsedValue + '°';
        }
    }
}

function overallLength(radioGroup, heightField, topLenField, bottomLenField, overallLenField, degreeField, cutMarkField) {
    function roundToQuarter(num) {
        return (Math.round(num * 4) / 4).toFixed(2);
    }
    function toDegrees(angle) {
        return angle * (180 / Math.PI);
    }
    function toRadians(angle) {
        return angle * (Math.PI / 180);
    }
    var radioValue = this.getField(radioGroup).value; // Off, OFFSET, KICK
    var height = this.getField(heightField).value;
    var topLen = this.getField(topLenField).value;
    var bottomLen = this.getField(bottomLenField).value;
    var overallLen = this.getField(overallLenField);
    var degree = this.getField(degreeField).value;
    var cutMarks = this.getField(cutMarkField);

    if (radioValue == "KICK" && topLen != "" && bottomLen != "") {
        var overallLenInt = parseInt(topLen) + parseInt(bottomLen);
        if (overallLenInt <= 0 || isNaN(overallLenInt)) {
            overallLen.value = "ERROR";
        }
        else {
            overallLen.value = roundToQuarter(overallLenInt) + '"';
        }
    }
    else if (radioValue == "KICK" && bottomLen !="" && degree != "" && height != "") {
        var degreeInRadians = toRadians(parseInt(degree));
        var hypotenuse = 120 - parseInt(bottomLen);
        var missingWidth = hypotenuse * Math.cos(degreeInRadians);
        var overallCalc = 120 - (hypotenuse - missingWidth);
        if (overallCalc <= 0 || isNaN(overallCalc)) {
            overallLen.value = "ERROR";
        }
        else {
            overallLen.value = roundToQuarter(overallCalc) + '"';
            missingWidth = Math.round(missingWidth * 100) / 100;
            this.getField(topLenField).value = roundToQuarter(missingWidth) + '"';
        }
    }
    else if (radioValue == "KICK" && bottomLen != "" && degree != "") {
        var degreeInRadians = toRadians(parseInt(degree));
        var hypotenuse = 120 - parseInt(bottomLen);
        var missingWidth = hypotenuse * Math.cos(degreeInRadians);
        var heightCalc = missingWidth * Math.tan(degreeInRadians);
        var overallCalc = 120 - (hypotenuse - missingWidth);
        if (overallCalc <= 0 || isNaN(overallCalc)) {
            overallLen.value = "ERROR";
        }
        else {
            overallLen.value = roundToQuarter(overallCalc) + '"';
            heightCalc = Math.round(heightCalc * 100) / 100;
            this.getField(heightField).value = roundToQuarter(heightCalc) + '"';
            missingWidth = Math.round(missingWidth * 100) / 100;
            this.getField(topLenField).value = roundToQuarter(missingWidth) + '"';
        }
    }
    else if (radioValue == "KICK" && height != "" && degree !="") {
        var degreeInRadians = toRadians(parseInt(degree));
        var hypotenuse = parseInt(height) / Math.sin(degreeInRadians);
        var missingWidth = parseInt(height) / Math.tan(degreeInRadians);
        var overallCalc = 120 - (hypotenuse - missingWidth);
        if (overallCalc <= 0 || isNaN(overallCalc)) {
            overallLen.value = "ERROR";
        }
        else {
            overallLen.value = roundToQuarter(overallCalc) + '"';
            missingWidth = Math.round(missingWidth * 100) / 100;
            this.getField(topLenField).value = roundToQuarter(missingWidth) + '"';
            var bottomLen = 120 - hypotenuse;
            bottomLen = Math.round(bottomLen * 100) / 100;
            this.getField(bottomLenField).value = roundToQuarter(bottomLen) + '"';
        }
    }
    else if (radioValue == "OFFSET" && topLen != "" && bottomLen != "" && height != "" &&  degree != "") {
        degreeInRadians = toRadians(parseInt(degree));
        var missingWidth = parseInt(height) / Math.tan(degreeInRadians);
        var hypotenuse = Math.sqrt(parseInt(height)*parseInt(height) + missingWidth*missingWidth);
        var overallCalc = parseInt(topLen) + parseInt(bottomLen) + missingWidth;
        var shrink = hypotenuse - missingWidth;
        if (overallCalc <= 0 || isNaN(overallCalc)) {
            overallLen.value = "ERROR";
        }
        else {
            overallLen.value = roundToQuarter(overallCalc) + '"';
            cutMarks.value = roundToQuarter(shrink + overallCalc) + '"';
        }
    }
    else if (radioValue == "OFFSET" && topLen != "" && bottomLen != "" && height != "") {
        var hypotenuse = 120 - (parseInt(topLen) + parseInt(bottomLen));
        var bottomDegree = toDegrees(Math.asin(parseInt(height) / hypotenuse));
        var missingWidth = hypotenuse * Math.cos(toRadians(bottomDegree));
        missingWidth = Math.round(missingWidth * 100) / 100;
        var overallCalc = 120 - (hypotenuse - missingWidth);
        if (overallCalc <= 0 || isNaN(overallCalc)) {
            overallLen.value = "ERROR";
        }
        else {
            overallLen.value = roundToQuarter(overallCalc) + '"';
            bottomDegree = Math.round(bottomDegree * 100) / 100;
            this.getField(degreeField).value = roundToQuarter(bottomDegree) + '°';
        }
    }
    else if (radioValue == "OFFSET" && degree != "" && height != "") {
        var degreeInRadians = toRadians(parseInt(degree));
        var missingWidth = parseInt(height) / Math.tan(degreeInRadians);
        missingWidth = Math.round(missingWidth * 100) / 100;
        var hypotenuse = parseInt(height) / Math.sin(degreeInRadians);
        var overallCalc = 120 - (hypotenuse - missingWidth);
        if (overallCalc <= 0 || isNaN(overallCalc)) {
            overallLen.value = "ERROR";
        }
        else {
            overallLen.value = roundToQuarter(overallCalc) + '"';
        }
    }
}

function alert(msg) {
    app.alert(msg);
}

function setDesc(descField, sizeField, conduitColorField, materialField, radioGroup, fittingAField, fittingZField, fittingColorField) {
    var desc = this.getField(descField);
    var size = this.getField(sizeField).value;
    var conduitColor = this.getField(conduitColorField).value;
    var material = this.getField(materialField).value;
    var radioValue = this.getField(radioGroup).value; // Off, OFFSET, KICK
    var fittingA = this.getField(fittingAField).value;
    var fittingZ = this.getField(fittingZField).value;
    var fittingColor = this.getField(fittingColorField).value;

    desc.value = "";

    if (size == "---" || material == "---" || radioValue == "Off") {
        desc.value = "SELECT SIZE, MATERIAL, OFFSET OR KICK, AND FITTINGS";
    }
    // ONLY FITTING A
    else if (fittingA != "---" && fittingZ == "---") {
        if (conduitColor == "---" || conduitColor == "SILVER") {
            if (fittingColor == "---" || fittingColor == "SILVER") {
                desc.value = size + " " + material + " " + radioValue + " W/ " + fittingA;
            }
            else {
                desc.value = size + " " + material + " " + radioValue + " W/ " + fittingColor + " " + fittingA;
            }
        }
        else {
            if (fittingColor == "---" || fittingColor == "SILVER") {
                desc.value = conduitColor + " " + size + " " + material + " " + radioValue + " W/ " + fittingA;
            }
            else {
                desc.value = conduitColor + " " + size + " " + material + " " + radioValue + " W/ " + fittingColor + " " + fittingA;
            }
        }
    }
    // ONLY FITTING Z
    else if (fittingA == "---" && fittingZ != "---") {
        if (conduitColor == "---" || conduitColor == "SILVER") {
            if (fittingColor == "---" || fittingColor == "SILVER") {
                desc.value = size + " " + material + " " + radioValue + " W/ " + fittingZ;
            }
            else {
                desc.value = size + " " + material + " " + radioValue + " W/ " + fittingColor + " " + fittingZ;
            }
        }
        else {
            if (fittingColor == "---" || fittingColor == "SILVER") {
                desc.value = conduitColor + " " + size + " " + material + " " + radioValue + " W/ " + fittingZ;
            }
            else {
                desc.value = conduitColor + " " + size + " " + material + " " + radioValue + " W/ " + fittingColor + " " + fittingZ;
            }
        }
    }
    // NO FITTINGS
    else if (fittingA == "---" && fittingZ == "---") {
        if (conduitColor == "---" || conduitColor == "SILVER") {
            desc.value = size + " " + material + " " + radioValue + " W/ NO FITTINGS";
        }
        else {
            desc.value = conduitColor + " " + size + " " + material + " " + radioValue + " W/ NO FITTINGS";
        }
    }    
    // BOTH FITTINGS
    else if (fittingA != "---" && fittingZ != "---") {
        if (conduitColor == "---" || conduitColor == "SILVER") {
            if (fittingColor == "---" || fittingColor == "SILVER") {
                desc.value = size + " " + material + " " + radioValue + " W/ " + fittingA + " & " + fittingZ;
            }
            else {
                desc.value = size + " " + material + " " + radioValue + " W/ " + fittingColor + " " + fittingA + " & " + fittingZ;
            }
        }
        else {
            if (fittingColor == "---" || fittingColor == "SILVER") {
                desc.value = conduitColor + " " + size + " " + material + " " + radioValue + " W/ " + fittingA + " & " + fittingZ;
            }
            else {
                desc.value = conduitColor + " " + size + " " + material + " " + radioValue + " W/ " + fittingColor + " " + fittingA + " & " + fittingZ;
            }
        }
    }
}
