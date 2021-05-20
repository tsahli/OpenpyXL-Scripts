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

function fittingB(sizeField, materialField, fittingAField, fittingBField) {
    var conduitSize = this.getField(sizeField).value;
    var conduitMaterial = this.getField(materialField).value;
    var fittingA = this.getField(fittingAField).value;

    if (conduitMaterial == 'EMT') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            this.getField(fittingBField).setItems([
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
            this.getField(fittingBField).setItems([
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
            if (conduitSize == '5"' && fittingA != 'KwikFit Fitting') {
                this.getField(fittingBField).setItems([
                    "---",
                    "KwikFit Fitting"
                ]);
            }
            else {
                this.getField(fittingBField).setItems([
                    "---"
                ]);
            }
        }
    }
    else if (conduitMaterial == 'KwikFit EMT') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            if (fittingA != 'KwikFit Fitting') {
                this.getField(fittingBField).setItems([
                    "---",
                    "KwikFit Fitting",
                    "EMT SS COUP",
                    "EMT SS CONN",
                    "POUND ON BS"
                ]);
            }
            else {
                this.getField(fittingBField).setItems([
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
                this.getField(fittingBField).setItems([
                    "---",
                    "KwikFit Fitting",
                    "EMT COMP COUP",
                    "EMT COMP CONN",
                    "POUND ON BS"
                ]);
            }
            else {
                this.getField(fittingBField).setItems([
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
                this.getField(fittingBField).setItems([
                    "---",
                    "KwikFit Fitting",
                    "EMT RT COUP",
                    "EMT RT CONN",
                    "POUND ON BS"
                ]);
            }
            else {
                this.getField(fittingBField).setItems([
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
                this.getField(fittingBField).setItems([
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
            else {
                this.getField(fittingBField).setItems([
                    "---",
                    "GRC COUP",
                    "GRC SS COUPLING",
                    "GRC SS CONN",
                    "GRC SS COUPLING",
                    "BOND BS",
                    "GROUND BS"
                ]);
            }
        }
    }
    else if (conduitMaterial == 'KwikCoup RT GRC') {
        if (conduitSize != '5"' && conduitSize != '6"') {
            if (fittingA != 'KwikFit Fitting') {
                this.getField(fittingBField).setItems([
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
            else {
                this.getField(fittingBField).setItems([
                    "---",
                    "GRC COUP",
                    "GRC SS COUPLING",
                    "GRC SS CONN",
                    "GRC SS COUPLING",
                    "BOND BS",
                    "GROUND BS"
                ]);
            }
        }
        else if (conduitSize == '5"') {
            if (fittingA != 'KwikFit Fitting') {
                this.getField(fittingBField).setItems([
                    "---",
                    "KwikFit Fitting"
                ]);
            }
        }
    }
    else {
        this.getField(fittingBField).setItems([
            "---",
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

function copy(copyFromField, copyToField) {
    var copyData = this.getField(copyFromField).value;
    if (this.getField(copyToField).value == "") {
        this.getField(copyToField).value = copyData;
    }
}

function toAllCaps(field) {
    var words = this.getField(field);
    words.value = words.value.replace(/\w\S*/g, function (txt) { return txt.toUpperCase(); });
}

function inchMarks(inchField) {
    var inchFieldValue = this.getField(inchField).value;
    var inchValue = this.getField(inchField);
    if (inchFieldValue != "" && inchFieldValue.toString().indexOf('"') == -1) {
        inchValue.value = inchFieldValue + '"';
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

    function dottieWrapAmount(size, overallLen, fullWrap) {
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
        var circum = circumferences[size];
        if (fullWrap == "Yes" && parseInt(overallLen) == parseInt(overallLen)) {
            var lateralSurfaceArea = parseInt(overallLen) * circum;
            return lateralSurfaceArea;
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
    var size1 = this.getField('TYPE 1 CONDUIT SIZE').value;
    var size2 = this.getField('TYPE 2 CONDUIT SIZE').value;
    var size3 = this.getField('TYPE 3 CONDUIT SIZE').value;
    var size4 = this.getField('TYPE 4 CONDUIT SIZE').value;
    var material1 = this.getField('TYPE 1 MATERIAL').value;
    var material2 = this.getField('TYPE 2 MATERIAL').value;
    var material3 = this.getField('TYPE 3 MATERIAL').value;
    var material4 = this.getField('TYPE 4 MATERIAL').value;
    var conduitColor1 = this.getField('TYPE 1 CONDUIT COLOR').value;
    var conduitColor2 = this.getField('TYPE 2 CONDUIT COLOR').value;
    var conduitColor3 = this.getField('TYPE 3 CONDUIT COLOR').value;
    var conduitColor4 = this.getField('TYPE 4 CONDUIT COLOR').value;
    var fittingA1 = this.getField('TYPE 1 FITTING A').value;
    var fittingA2 = this.getField('TYPE 2 FITTING A').value;
    var fittingA3 = this.getField('TYPE 3 FITTING A').value;
    var fittingA4 = this.getField('TYPE 4 FITTING A').value;

    // in this form fitting Z is called out as fitting B (dumb)
    var fittingZ1 = this.getField('TYPE 1 FITTING B').value;
    var fittingZ2 = this.getField('TYPE 2 FITTING B').value;
    var fittingZ3 = this.getField('TYPE 3 FITTING B').value;
    var fittingZ4 = this.getField('TYPE 4 FITTING B').value;

    var fittingColor1 = this.getField('TYPE 1 FITTING COLOR').value;
    var fittingColor2 = this.getField('TYPE 2 FITTING COLOR').value;
    var fittingColor3 = this.getField('TYPE 3 FITTING COLOR').value;
    var fittingColor4 = this.getField('TYPE 4 FITTING COLOR').value;
    var overallLen1 = this.getField('TYPE 1 OVERALL LENGTH').value;
    var overallLen2 = this.getField('TYPE 2 OVERALL LENGTH').value;
    var overallLen3 = this.getField('TYPE 3 OVERALL LENGTH').value;
    var overallLen4 = this.getField('TYPE 4 OVERALL LENGTH').value;
    var fullWrap1 = this.getField('TYPE 1 FULLWRAP').value;
    var fullWrap2 = this.getField('TYPE 2 FULLWRAP').value;
    var fullWrap3 = this.getField('TYPE 3 FULLWRAP').value;
    var fullWrap4 = this.getField('TYPE 4 FULLWRAP').value;
    var ductTapeCapA1 = this.getField('TYPE 1 DUCT TAPE CAP A').value;
    var ductTapeCapA2 = this.getField('TYPE 2 DUCT TAPE CAP A').value;
    var ductTapeCapA3 = this.getField('TYPE 3 DUCT TAPE CAP A').value;
    var ductTapeCapA4 = this.getField('TYPE 4 DUCT TAPE CAP A').value;
    var ductTapeCapB1 = this.getField('TYPE 1 DUCT TAPE CAP B').value;
    var ductTapeCapB2 = this.getField('TYPE 2 DUCT TAPE CAP B').value;
    var ductTapeCapB3 = this.getField('TYPE 3 DUCT TAPE CAP B').value;
    var ductTapeCapB4 = this.getField('TYPE 4 DUCT TAPE CAP B').value;

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
            wrapHeightList.push(dottieWrapAmount(size1, overallLen1, fullWrap1));
            ductTapeLenList.push(ductTapeAmount(size1, ductTapeCapA1, ductTapeCapB1));
            count++;
        }
    }

    if (qty2 != '' && qty2 != '0') {
        var count = 0;
        while (count < qty2) {
            sizeList.push(conduitMachine(conduitColor2, size2, material2));
            fittingList.push(fittingMachine(fittingColor2, size2, fittingA2));
            fittingList.push(fittingMachine(fittingColor2, size2, fittingZ2));
            wrapHeightList.push(dottieWrapAmount(size2, overallLen2, fullWrap2));
            ductTapeLenList.push(ductTapeAmount(size2, ductTapeCapA2, ductTapeCapB2));
            count++;
        }
    }

    if (qty3 != '' && qty3 != '0') {
        var count = 0;
        while (count < qty3) {
            sizeList.push(conduitMachine(conduitColor3, size3, material3));
            fittingList.push(fittingMachine(fittingColor3, size3, fittingA3));
            fittingList.push(fittingMachine(fittingColor3, size3, fittingZ3));
            wrapHeightList.push(dottieWrapAmount(size3, overallLen3, fullWrap3));
            ductTapeLenList.push(ductTapeAmount(size3, ductTapeCapA3, ductTapeCapB3));
            count++;
        }
    }

    if (qty4 != '' && qty4 != '0') {
        var count = 0;
        while (count < qty4) {
            sizeList.push(conduitMachine(conduitColor4, size4, material4));
            fittingList.push(fittingMachine(fittingColor4, size4, fittingA4));
            fittingList.push(fittingMachine(fittingColor4, size4, fittingZ4));
            wrapHeightList.push(dottieWrapAmount(size4, overallLen4, fullWrap4));
            ductTapeLenList.push(ductTapeAmount(size4, ductTapeCapA4, ductTapeCapB4));
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