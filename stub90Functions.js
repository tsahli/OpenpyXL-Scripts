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
                "PVC FA",
                "GRC SS CONN",
                "GRC SS COUPLING",
                "BOND BS",
                "GROUND BS",
                "GRC COUP/EMT CONN"
            ]);
        }
        else if (conduitMaterial == 'RIGID') {
            if (conduitSize == '5"') {
                this.getField(fittingAField).setItems([
                    "---",
                    "KwikFit Fitting",
                    "GRC COUP",
                    "PVC FA"
                ]);
            }
            else if (conduitSize == '6"') {
                this.getField(fittingAField).setItems([
                    "---",
                    "GRC COUP",
                    "PVC FA"
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
                "PVC FA",
                "GRC SS CONN",
                "GRC SS COUPLING",
                "BOND BS",
                "GROUND BS",
                "GRC COUP/EMT CONN"
            ]);
        }
    }
    else if (conduitMaterial == 'KwikCoup RT GRC') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            this.getField(fittingAField).setItems([
                "---",
                "KiwkFit Fitting",
                "GRC COUP",
                "PVC FA",
                "GRC SS CONN",
                "GRC SS COUPLING",
                "BOND BS",
                "GROUND BS",
                "GRC COUP/EMT CONN"
            ]);
        }
        else if (conduitSize == '5"') {
            this.getField(fittingAField).setItems([
                "---",
                "KwikFit Fitting",
                "GRC COUP",
                "PVC FA"
            ]);
        }
    }
    else {
        this.getField(fittingAField).setItems([
            "---"
        ]);
    }
}

function fittingZ(sizeField, materialField, fittingAField, fittingZField) {
    var conduitSize = this.getField(sizeField).value;
    var conduitMaterial = this.getField(materialField).value;
    var fittingA = this.getField(fittingAField).value;

    if (conduitMaterial == 'EMT') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            this.getField(fittingZField).setItems([
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
            this.getField(fittingZField).setItems([
                "---",
                "GRC COUP",
                "PVC FA",
                "GRC SS CONN",
                "GRC SS COUPLING",
                "BOND BS",
                "GROUND BS",
                "GRC COUP/EMT CONN"
            ]);
        }
        else if (conduitMaterial == 'RIGID') {
            if (conduitSize == '5"') {
                if (fittingA != 'KwikFit Fitting') {
                    this.getField(fittingZField).setItems([
                        "---",
                        "KwikFit Fitting",
                        "GRC COUP",
                        "PVC FA"
                    ]);
                }
                else {
                    this.getField(fittingZField).setItems([
                        "---",
                        "GRC COUP",
                        "PVC FA"
                    ]);
                }
            }
            else if (conduitSize == '6"') {
                this.getField(fittingZField).setItems([
                    "---",
                    "GRC COUP",
                    "PVC FA"
                ]);
            }
        }
    }
    else if (conduitMaterial == 'KwikFit EMT') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            if (fittingA != 'KwikFit Fitting') {
                this.getField(fittingZField).setItems([
                    "---",
                    "KwikFit Fitting",
                    "EMT SS COUP",
                    "EMT SS CONN",
                    "POUND ON BS"
                ]);
            }
            else {
                this.getField(fittingZField).setItems([
                    "---",
                    "EMT SS COUP",
                    "EMT SS CONN",
                    "POUND ON BS"
                ]);
            }
        }
    }
    else if (conduitMaterial == 'KwikFit Comp EMT') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            if (fittingA != 'KwikFit Fitting') {
                this.getField(fittingZField).setItems([
                    "---",
                    "KwikFit Fitting",
                    "EMT COMP COUP",
                    "EMT COMP CONN",
                    "POUND ON BS"
                ]);
            }
            else {
                this.getField(fittingZField).setItems([
                    "---",
                    "EMT COMP COUP",
                    "EMT COMP CONN",
                    "POUND ON BS"
                ]);
            }
        }
    }
    else if (conduitMaterial == 'KwikFit RT EMT') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            if (fittingA != 'KwikFit Fitting') {
                this.getField(fittingZField).setItems([
                    "---",
                    "KwikFit Fitting",
                    "EMT RT COUP",
                    "EMT RT CONN",
                    "POUND ON BS"
                ]);
            }
            else {
                this.getField(fittingZField).setItems([
                    "---",
                    "EMT RT COUP",
                    "EMT RT CONN",
                    "POUND ON BS"
                ]);
            }
        }
    }
    else if (conduitMaterial == 'KwikCoup RT IMC') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            if (fittingA != 'KwikFit Fitting') {
                this.getField(fittingZField).setItems([
                    "---",
                    "KwikFit Fitting",
                    "GRC COUP",
                    "PVC FA",
                    "GRC SS CONN",
                    "GRC SS COUPLING",
                    "BOND BS",
                    "GROUND BS",
                    "GRC COUP/EMT CONN"
                ]);
            }
            else {
                this.getField(fittingZField).setItems([
                    "---",
                    "GRC COUP",
                    "PVC FA",
                    "GRC SS CONN",
                    "GRC SS COUPLING",
                    "BOND BS",
                    "GROUND BS",
                    "GRC COUP/EMT CONN"
                ]);
            }
        }
        else if (conduitSize == '5"' || conduitSize == '6"') {
            this.getField(fittingZField).setItems([
                "---",
                "GRC COUP",
                "PVC FA"
            ]);
        }
    }
    else if (conduitMaterial == 'KwikCoup RT GRC') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            if (fittingA != 'KwikFit Fitting') {
                this.getField(fittingZField).setItems([
                    "---",
                    "KiwkFit Fitting",
                    "GRC COUP",
                    "PVC FA",
                    "GRC SS CONN",
                    "GRC SS COUPLING",
                    "BOND BS",
                    "GROUND BS",
                    "GRC COUP/EMT CONN"
                ]);
            }
            else {
                this.getField(fittingZField).setItems([
                    "---",
                    "GRC COUP",
                    "PVC FA",
                    "GRC SS CONN",
                    "GRC SS COUPLING",
                    "BOND BS",
                    "GROUND BS",
                    "GRC COUP/EMT CONN"
                ]);
            }
        }
        else if (conduitSize == '5"') {
            if (fittingA != 'KwikFit Fitting') {
                this.getField(fittingZField).setItems([
                    "---",
                    "KwikFit Fitting",
                    "GRC COUP",
                    "PVC FA"
                ]);
            }
            else {
                this.getField(fittingZField).setItems([
                    "---",
                    "GRC COUP",
                    "PVC FA"
                ]);
            }
        }
    }
    else {
        this.getField(fittingZField).setItems([
            "---"
        ]);
    }
}

function fittingColor(fittingAField, fittingZField, fittingColorField) {
    var fittingA = this.getField(fittingAField).value;
    var fittingZ = this.getField(fittingZField).value;

    if (fittingA != "---" || fittingZ != "---") {
        this.getField(fittingColorField).setItems([
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
    else {
        this.getField(fittingColorField).setItems([
            "---"
        ]);
    }
}

function inchMarks(inchField) {
    var inchFieldValue = this.getField(inchField).value;
    var inchValue = this.getField(inchField);
    if (inchFieldValue != "" && inchFieldValue.toString().indexOf('"') == -1) {
        inchValue.value = inchFieldValue + '"';
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

function bendMarks(conduitSizeField, conduitMaterialField, heightField, stubCheckbox, bendMarkField) {
    function roundToQuarter(num) {
        return (Math.round(num * 4) / 4).toFixed(2);
    }
    var conduitSize = this.getField(conduitSizeField).value;
    var conduitMaterial = this.getField(conduitMaterialField).value;
    var stubHeight = this.getField(heightField).value;
    var stubCheckbox = this.getField(stubCheckbox).value; // Off, Yes
    var bendMarks = this.getField(bendMarkField);

    let deductTable = {
        // [DEDUCT, MINIMUM STUB LENGTH]
        '3/4"': {
            'RIGID': [9.875, 11.875],
            'EMT': [9.6875, 11.6875],
            'IMC': [9.875, 11.875]
        },
        '1"': {
            'RIGID': [11.875, 13.875],
            'EMT': [11.8125, 13.8125],
            'IMC': [11.875, 13.875]
        },
        '1-1/4"': {
            'RIGID': [14.375, 16.375],
            'EMT': [14.25, 16.25],
            'IMC': [14.375, 16.375]
        },
        '1-1/2"': {
            'RIGID': [15.375, 17.375],
            'EMT': [15.3125, 17.3125],
            'IMC': [15.375, 17.375]
        },
        '2"': {
            'RIGID': [16.625, 18.625],
            'EMT': [16.75, 18.75],
            'IMC': [16.625, 18.625]
        },
        '2-1/2"': {
            'RIGID': [21.5, 24],
            'EMT': [21.5, 24],
            'IMC': [21.5, 24]
        },
        '3"': {
            'RIGID': [24.25, 26.75],
            'EMT': [24, 27],
            'IMC': [24.25, 26.75]
        },
        '3-1/2"': {
            'RIGID': [28.25, 30.75],
            'EMT': [27.75, 31.25],
            'IMC': [28.25, 30.75]
        },
        '4"': {
            'RIGID': [32.5, 35],
            'EMT': [32.25, 36.25],
            'IMC': [32.5, 35]
        }
    }

    if (stubCheckbox != 'Yes' && conduitSizeField != '---' && conduitMaterial != '---' && stubHeight != '') {
        if (conduitMaterial.indexOf('EMT') !== -1) {
            var l = deductTable[conduitSize]['EMT'];
            var deduct = l[0];
            var minimumStubHeight = l[1];
        }
        else {
            var l = deductTable[conduitSize]['RIGID']; // IMC & RIGID have same deducts, so just assume rigid
            var deduct = l[0];
            var minimumStubHeight = l[1];
        }
        bendMark = parseFloat(stubHeight) - deduct;
        if (bendMark <= 0 || stubHeight < minimumStubHeight) {
            bendMarks.value = "Minimum Distance Error";
        }
        else {
            bendMarks.value = roundToQuarter(bendMark).toString() + '"';
        }
    }
    else {
        bendMarks.value = "";
    }
}

function cutLength(conduitSizeField, conduitMaterialField, HeightField, stubCheckbox, LengthField, cutLengthField) {
    var conduitSize = this.getField(conduitSizeField).value;
    var conduitMaterial = this.getField(conduitMaterialField).value;
    var height = this.getField(HeightField).value;
    var stubCheckbox = this.getField(stubCheckbox).value; // Off, Yes
    var length = this.getField(LengthField).value;
    var cutLength = this.getField(cutLengthField);

    let minimumStubHeightTable = {
        // MINIMUM STUB LENGTH
        '3/4"': {
            'RIGID': 11.875,
            'EMT': 11.6875,
            'IMC': 11.875
        },
        '1"': {
            'RIGID': 13.875,
            'EMT': 13.8125,
            'IMC': 13.875
        },
        '1-1/4"': {
            'RIGID': 16.375,
            'EMT': 16.25,
            'IMC': 16.375
        },
        '1-1/2"': {
            'RIGID': 17.375,
            'EMT': 17.3125,
            'IMC': 17.375
        },
        '2"': {
            'RIGID': 18.625,
            'EMT': 18.75,
            'IMC': 18.625
        },
        '2-1/2"': {
            'RIGID': 24,
            'EMT': 24,
            'IMC': 24
        },
        '3"': {
            'RIGID': 26.75,
            'EMT': 27,
            'IMC': 26.75
        },
        '3-1/2"': {
            'RIGID': 30.75,
            'EMT': 31.25,
            'IMC': 30.75
        },
        '4"': {
            'RIGID': 35,
            'EMT': 36.25,
            'IMC': 35
        }
    }
    
    // Radius = 8 * Conduit Size
    // DL = Radius * 1.57
    // Shrink = 2(Radius) - DL

    function sizeToFloat(conduitSize) {
        if (conduitSize == '3/4"') {
            return 0.75;
        }
        else if (conduitSize == '1-1/4"') {
            return 1.25;
        }
        else if (conduitSize == '1-1/2"') {
            return 1.50;
        }
        else if (conduitSize == '2-1/2"') {
            return 2.50;
        }
        else if (conduitSize == '3-1/2"') {
            return 3.50;
        }
        else {
            return parseFloat(conduitSize);
        }
    }

    function roundToEighth(num) {
        return (Math.round(num * 8) / 8).toFixed(2);
    }

    if (conduitSize != "---" && height != "" && length != "" && stubCheckbox == "Off") {
        var radius = 8 * sizeToFloat(conduitSize);
        var developedLength = radius * 1.57;
        var shrink = (2 * radius) - developedLength;
        var cut = (parseFloat(height) + parseFloat(length)) - shrink;
        cutLength.value = roundToEighth(cut).toString() + '"';
    }
    else if (conduitSize != "---" && conduitMaterial != "---" && length != "" && stubCheckbox == "Yes") {
        var radius = 8 * sizeToFloat(conduitSize);
        var developedLength = radius * 1.57;
        var shrink = (2 * radius) - developedLength;
        if (conduitMaterial.indexOf('EMT') !== -1) {
            var height = minimumStubHeightTable[conduitSize]['EMT'];
        }
        else {
            var height = minimumStubHeightTable[conduitSize]['RIGID'];
        }
        var cut = (height + parseFloat(length)) - shrink;
        cutLength.value = roundToEighth(cut).toString() + '"';
    }
    else {
        cutLength.value = "";
    }
}

// SIZE - MATERIAL - 'WITH' FITTING A '&' FITTING Z - HEIGHT - IDENTIFIER
function setDesc(descField, sizeField, materialField, fittingAField, fittingZField, heightField, idField) {
    var desc = this.getField(descField);
    var size = this.getField(sizeField).value;
    var material = this.getField(materialField).value;
    var fittingA = this.getField(fittingAField).value;
    var fittingZ = this.getField(fittingZField).value;
    var height = this.getField(heightField).value;
    var id = this.getField(idField).value;

    desc.value = "";

    if (size == "---" || material == "---" || height == "" || id == "") {
        desc.value = "SELECT ID, SIZE, MATERIAL, AND HEIGHT"
    }
    // ONLY FITTING A
    else if (fittingA != "---" && fittingZ == "---") {
        desc.value = size + " " + material + " W/ " + fittingA + " - " + height + " HIGH - " + id;
    }
    // ONLY FITTING Z
    else if (fittingZ != "---" && fittingA == "---") {
        desc.value = size + " " + material + " W/ " + fittingZ + " - " + height + " HIGH - " + id;
    }
    // NO FITTINGS
    else if (fittingZ == "---" && fittingA == "---") {
        desc.value = size + " " + material + " W/ NO FITTINGS - " + height + " HIGH - " + id;
    }
    else {
        desc.value = size + " " + material + " W/ " + fittingA + " & " + fittingZ + " - " + height + " HIGH - " + id;
    }
}

function checkBoxClearing(checkboxField, textField) {
    var checkbox = this.getField(checkboxField).value.toString();
    var textField = this.getField(textField);
    if (checkbox == "Yes" && textField.value != "") {
        this.getField(checkboxField).value = "Off";
    }
}

function matReq() {
    function countInArray(array) {
        var count = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === '---') {
                count++;
            }
        }
        return count;
    }

    function ductTapeAmount(size, topCap, bottomCap) {
        let endLengths = {
            '3/4"': 9,
            '1"': 11,
            '1-1/4"': 13,
            '1-1/2"': 15,
            '2"': 23,
            '2-1/2"': 26,
            '3"': 32,
            '3-1/2"': 46,
            '4"': 52,
            '5"': 68,
            '6"': 75
        };
        var len = endLengths[size];
        if (topCap == 'Yes' && bottomCap == 'Yes') {
            return len * 2;
        }
        else if (topCap == 'Yes' || bottomCap == 'Yes') {
            return len;
        }
        else { return 0; }
    }

    function ductTapeRolls(ductTapeTotal) {
        var rolls = ductTapeTotal / 2160;
        var roundedRolls = Math.round(rolls);
        if (rolls < 0.5) {
            return 0;
        }
        else if (rolls <= 1 && rolls >= 0.5) {
            return 1;
        }
        else { return roundedRolls; }
    }

    function wrapAmount(size, fullWrap, customWrap) {
        let lengths = {
            '3/4"': 12.2,
            '1"': 15.5,
            '1-1/4"': 19.6,
            '1-1/2"': 20.8,
            '2"': 25.1,
            '2-1/2"': 29.2,
            '3"': 34.6,
            '3-1/2"': 40.1,
            '4"': 40.7,
            '5"': 59.2,
            '6"': 78.6
        };
        let circumferences = {
            '3/4"': 2.6,
            '1"': 3.3,
            '1-1/4"': 4.1,
            '1-1/2"': 5.2,
            '2"': 6,
            '2-1/2"': 7.5,
            '3"': 9,
            '3-1/2"': 11,
            '4"': 14.1,
            '5"': 17.5,
            '6"': 20.8
        };
        var len = lengths[size];
        var circum = circumferences[size];
        if (fullWrap == "Yes") {
            var lateralSurfaceArea = len * circum;
            return lateralSurfaceArea;
        }
        else if (customWrap != "") {
            return parseFloat(customWrap) * circum;
        }
        else {
            return 0;
        }
    }

    function dottieRolls(wrapTotal) {
        var rolls = wrapTotal / 1200;
        var roundedRolls = Math.round(rolls);
        if (rolls < 0.5) {
            return 0;
        }
        else if (rolls <= 1 && rolls >= 0.5) {
            return 1;
        }
        else { return roundedRolls; }
    }

    function conduitMachine(color, size, material) {
        if (color == '---') {
            color = 'SILVER';
        }
        var arr = [color, size, material];
        var count = countInArray(arr);
        if (count == 0) {
            if (color == 'SILVER') {
                return size.toString() + " " + material;
            }
            return color + " " + size.toString() + " " + material;
        }
        else { return null; }
    }

    function fittingMachine(color, size, fitting) {
        if (color == '---') {
            color = 'SILVER';
        }
        var arr = [color, size, fitting];
        var count = countInArray(arr);
        if (count == 0) {
            if (color == 'SILVER') {
                return size.toString() + " " + fitting;
            }
            return color + " " + size.toString() + " " + fitting;
        }
        else { return null; }
    }

    var qty1 = this.getField('TYPE 1 QTY').value;
    var qty2 = this.getField('TYPE 2 QTY').value;
    var qty3 = this.getField('TYPE 3 QTY').value;
    var qty4 = this.getField('TYPE 4 QTY').value;
    var qty5 = this.getField('TYPE 5 QTY').value;
    var size1 = this.getField('TYPE 1 CONDUIT SIZE').value;
    var size2 = this.getField('TYPE 2 CONDUIT SIZE').value;
    var size3 = this.getField('TYPE 3 CONDUIT SIZE').value;
    var size4 = this.getField('TYPE 4 CONDUIT SIZE').value;
    var size5 = this.getField('TYPE 5 CONDUIT SIZE').value;
    var material1 = this.getField('TYPE 1 MATERIAL').value;
    var material2 = this.getField('TYPE 2 MATERIAL').value;
    var material3 = this.getField('TYPE 3 MATERIAL').value;
    var material4 = this.getField('TYPE 4 MATERIAL').value;
    var material5 = this.getField('TYPE 5 MATERIAL').value;
    var conduitColor1 = this.getField('TYPE 1 CONDUIT COLOR').value;
    var conduitColor2 = this.getField('TYPE 2 CONDUIT COLOR').value;
    var conduitColor3 = this.getField('TYPE 3 CONDUIT COLOR').value;
    var conduitColor4 = this.getField('TYPE 4 CONDUIT COLOR').value;
    var conduitColor5 = this.getField('TYPE 5 CONDUIT COLOR').value;
    var fittingA1 = this.getField('TYPE 1 FITTING A').value;
    var fittingA2 = this.getField('TYPE 2 FITTING A').value;
    var fittingA3 = this.getField('TYPE 3 FITTING A').value;
    var fittingA4 = this.getField('TYPE 4 FITTING A').value;
    var fittingA5 = this.getField('TYPE 5 FITTING A').value;
    var fittingZ1 = this.getField('TYPE 1 FITTING Z').value;
    var fittingZ2 = this.getField('TYPE 2 FITTING Z').value;
    var fittingZ3 = this.getField('TYPE 3 FITTING Z').value;
    var fittingZ4 = this.getField('TYPE 4 FITTING Z').value;
    var fittingZ5 = this.getField('TYPE 5 FITTING Z').value;
    var fittingColor1 = this.getField('TYPE 1 FITTING COLOR').value;
    var fittingColor2 = this.getField('TYPE 2 FITTING COLOR').value;
    var fittingColor3 = this.getField('TYPE 3 FITTING COLOR').value;
    var fittingColor4 = this.getField('TYPE 4 FITTING COLOR').value;
    var fittingColor5 = this.getField('TYPE 5 FITTING COLOR').value;
    var fullWrap1 = this.getField('TYPE 1 FULL WRAP').value;
    var fullWrap2 = this.getField('TYPE 2 FULL WRAP').value;
    var fullWrap3 = this.getField('TYPE 3 FULL WRAP').value;
    var fullWrap4 = this.getField('TYPE 4 FULL WRAP').value;
    var fullWrap5 = this.getField('TYPE 5 FULL WRAP').value;
    var customWrap1 = this.getField('TYPE 1 CUSTOM WRAP HEIGHT').value;
    var customWrap2 = this.getField('TYPE 2 CUSTOM WRAP HEIGHT').value;
    var customWrap3 = this.getField('TYPE 3 CUSTOM WRAP HEIGHT').value;
    var customWrap4 = this.getField('TYPE 4 CUSTOM WRAP HEIGHT').value;
    var customWrap5 = this.getField('TYPE 5 CUSTOM WRAP HEIGHT').value;
    var ductTapeTop1 = this.getField('TYPE 1 TOP').value;
    var ductTapeTop2 = this.getField('TYPE 2 TOP').value;
    var ductTapeTop3 = this.getField('TYPE 3 TOP').value;
    var ductTapeTop4 = this.getField('TYPE 4 TOP').value;
    var ductTapeTop5 = this.getField('TYPE 5 TOP').value;
    var ductTapeBottom1 = this.getField('TYPE 1 BOTTOM').value;
    var ductTapeBottom2 = this.getField('TYPE 2 BOTTOM').value;
    var ductTapeBottom3 = this.getField('TYPE 3 BOTTOM').value;
    var ductTapeBottom4 = this.getField('TYPE 4 BOTTOM').value;
    var ductTapeBottom5 = this.getField('TYPE 5 BOTTOM').value;

    var sizeList = []; // color, size, material
    var fittingList = []; // color, size, fitting
    var wrapHeightList = [];
    var ductTapeLenList = [];

    if (qty1 != '' && qty1 != '0') {
        var count = 0;
        while (count < qty1) {
            sizeList.push(conduitMachine(conduitColor1, size1, material1));
            fittingList.push(fittingMachine(fittingColor1, size1, fittingA1));
            fittingList.push(fittingMachine(fittingColor1, size1, fittingZ1));
            wrapHeightList.push(wrapAmount(size1, fullWrap1, customWrap1));
            ductTapeLenList.push(ductTapeAmount(size1, ductTapeTop1, ductTapeBottom1));
            count++;
        }
    }

    if (qty2 != '' && qty2 != '0') {
        var count = 0;
        while (count < qty2) {
            sizeList.push(conduitMachine(conduitColor2, size2, material2));
            fittingList.push(fittingMachine(fittingColor2, size2, fittingA2));
            fittingList.push(fittingMachine(fittingColor2, size2, fittingZ2));
            wrapHeightList.push(wrapAmount(size2, fullWrap2, customWrap2));
            ductTapeLenList.push(ductTapeAmount(size2, ductTapeTop2, ductTapeBottom2));
            count++;
        }
    }

    if (qty3 != '' && qty3 != '0') {
        var count = 0;
        while (count < qty3) {
            sizeList.push(conduitMachine(conduitColor3, size3, material3));
            fittingList.push(fittingMachine(fittingColor3, size3, fittingA3));
            fittingList.push(fittingMachine(fittingColor3, size3, fittingZ3));
            wrapHeightList.push(wrapAmount(size3, fullWrap3, customWrap3));
            ductTapeLenList.push(ductTapeAmount(size3, ductTapeTop3, ductTapeBottom3));
            count++;
        }
    }

    if (qty4 != '' && qty4 != '0') {
        var count = 0;
        while (count < qty4) {
            sizeList.push(conduitMachine(conduitColor4, size4, material4));
            fittingList.push(fittingMachine(fittingColor4, size4, fittingA4));
            fittingList.push(fittingMachine(fittingColor4, size4, fittingZ4));
            wrapHeightList.push(wrapAmount(size4, fullWrap4, customWrap4));
            ductTapeLenList.push(ductTapeAmount(size4, ductTapeTop4, ductTapeBottom4));
            count++;
        }
    }

    if (qty5 != '' && qty5 != '0') {
        var count = 0;
        while (count < qty5) {
            sizeList.push(conduitMachine(conduitColor5, size5, material5));
            fittingList.push(fittingMachine(fittingColor5, size5, fittingA5));
            fittingList.push(fittingMachine(fittingColor5, size5, fittingZ5));
            wrapHeightList.push(wrapAmount(size5, fullWrap5, customWrap5));
            ductTapeLenList.push(ductTapeAmount(size5, ductTapeTop5, ductTapeBottom5));
            count++;
        }
    }

    sizeList.sort();
    fittingList.sort();

    var sizeCount = {};
    sizeList.forEach(function (i) { sizeCount[i] = (sizeCount[i] || 0) + 10; });

    var fittingCount = {};
    fittingList.forEach(function (i) { fittingCount[i] = (fittingCount[i] || 0) + 1; });

    var i = 0;
    var wrapTotal = 0;
    var ductTapeTotal = 0;
    for (var element in sizeCount) {
        if (element != 'null') {
            this.getField('DESC ' + i).value = element;
            this.getField('QTY ' + i).value = sizeCount[element];
            i++;
        }
    }

    for (var element in fittingCount) {
        if (element != 'null') {
            this.getField('DESC ' + i).value = element;
            this.getField('QTY ' + i).value = fittingCount[element];
            i++;
        }
    }

    for (var index = 0; index < ductTapeLenList.length; index++) {
        ductTapeTotal += ductTapeLenList[index];
    }

    for (var index = 0; index < wrapHeightList.length; index++) {
        wrapTotal += wrapHeightList[index];
    }

    var dotRolls = dottieRolls(wrapTotal);
    var ductRolls = ductTapeRolls(ductTapeTotal);

    if (dotRolls != 0) {
        this.getField('QTY ' + i).value = dotRolls;
        this.getField('DESC ' + i).value = 'DOTTIE TAPE ROLLS';
        i++;
    }

    if (ductRolls != 0) {
        this.getField('QTY ' + i).value = ductRolls;
        this.getField('DESC ' + i).value = 'DUCT TAPE ROLLS';
        i++;
    }
}
