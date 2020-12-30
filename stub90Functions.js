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
                "GRC SS COUPLING",
                "GRC SS CONN",
                "GRC SS COUPLING",
                "BOND BS",
                "GROUND BS"
            ]);
        }
        else if (conduitMaterial == 'RIGID') {
            if (conduitSize == '5"' && fittingA != 'KwikFit Fitting') {
                this.getField(fittingZField).setItems([
                    "---",
                    "KwikFit Fitting"
                ]);
            }
            else {
                this.getField(fittingZField).setItems([
                    "---"
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
                    "GRC SS COUPLING",
                    "GRC SS CONN",
                    "GRC SS COUPLING",
                    "BOND BS",
                    "GROUND BS"
                ]);
            }
            else {
                this.getField(fittingZField).setItems([
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
                this.getField(fittingZField).setItems([
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
                this.getField(fittingZField).setItems([
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
                this.getField(fittingZField).setItems([
                    "---",
                    "KwikFit Fitting"
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

function cutLength(conduitSizeField, HeightField, LengthField, cutLengthField) {
    var conduitSize = this.getField(conduitSizeField).value;
    var height = this.getField(HeightField).value;
    var length = this.getField(LengthField).value;
    var cutLength = this.getField(cutLengthField);

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

    if (conduitSize != "---" && height != "" && length != "") {
        var radius = 8 * sizeToFloat(conduitSize);
        var developedLength = radius * 1.57;
        var shrink = (2 * radius) - developedLength;
        var cut = (parseFloat(height) + parseFloat(length)) - shrink
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

    function conduitMachine(color, size, material) {
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

    var sizeList = []; // color, size, material
    var fittingList = []; // color, size, fitting

    if (qty1 != '' && qty1 != '0') {
        var count = 0;
        while (count < qty1) {
            sizeList.push(conduitMachine(conduitColor1, size1, material1));
            fittingList.push(fittingMachine(fittingColor1, size1, fittingA1));
            fittingList.push(fittingMachine(fittingColor1, size1, fittingZ1));
            count++;
        }
    }

    if (qty2 != '' && qty2 != '0') {
        var count = 0;
        while (count < qty2) {
            sizeList.push(conduitMachine(conduitColor2, size2, material2));
            fittingList.push(fittingMachine(fittingColor2, size2, fittingA2));
            fittingList.push(fittingMachine(fittingColor2, size2, fittingZ2));
            count++;
        }
    }

    if (qty3 != '' && qty3 != '0') {
        var count = 0;
        while (count < qty3) {
            sizeList.push(conduitMachine(conduitColor3, size3, material3));
            fittingList.push(fittingMachine(fittingColor3, size3, fittingA3));
            fittingList.push(fittingMachine(fittingColor3, size3, fittingZ3));
            count++;
        }
    }

    if (qty4 != '' && qty4 != '0') {
        var count = 0;
        while (count < qty4) {
            sizeList.push(conduitMachine(conduitColor4, size4, material4));
            fittingList.push(fittingMachine(fittingColor4, size4, fittingA4));
            fittingList.push(fittingMachine(fittingColor4, size4, fittingZ4));
            count++;
        }
    }

    if (qty5 != '' && qty5 != '0') {
        var count = 0;
        while (count < qty5) {
            sizeList.push(conduitMachine(conduitColor5, size5, material5));
            fittingList.push(fittingMachine(fittingColor5, size5, fittingA5));
            fittingList.push(fittingMachine(fittingColor5, size5, fittingZ5));
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
}
