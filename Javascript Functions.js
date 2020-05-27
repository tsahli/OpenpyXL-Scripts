
function time() {
    var fld = this.getField("out");
    var empt = this.getField("out").value;
    if (empt == "") {
        fld.value = util.printd("hh:MM tt", new Date());
    }
} time();


function getSunday() {
    var fld = this.getField("WeekEnding");
    var empt = this.getField("WeekEnding").value;
    if (empt == "") {
        var current = new Date();
        var weekstart = current.getDate() - current.getDay() + 1;
        var weekend = weekstart + 6;
        var sunday = new Date(current.setDate(weekend));
        fld.value = util.printd("mm/dd/yy", sunday);
    }
} getSunday();


function date() {
    var fld = this.getField("DateField");
    var empt = this.getField("DateField").value;
    if (empt == "") {
        fld.value = util.printd("mm/dd/yy", new Date());
    }
} date();

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

function toTitleCase() {
    var words = this.getField("Name");
    words.value = words.value.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
} toTitleCase();


function toAllCaps() {
    var words = this.getField("Name");
    words.value = words.value.replace(/\w\S*/g, function (txt) { return txt.toUpperCase(); });
} toAllCaps();


function mailTo() {
    var cToAddr = this.getField("SendToEmail").value;
    var name = this.getField("EmployeeName").value;
    var weekending = this.getField("WeekEnding").value;
    var cSubLine = "Timecard from " + name;
    var cBody = "Week ending: " + weekending;

    this.mailDoc({ bUI: true, cTo: cToAddr, cSubject: cSubLine, cMsg: cBody });
} mailTo();

function vacationTime() {
    var totalTimeString = this.getField("11-VC-REMAINING");
    var thisWeeksTimeString = this.getField("11-VC-WK-TOTAL");
    var totalTime = parseFloat(totalTimeString.value);
    var thisWeeksTime = parseFloat(thisWeeksTimeString.value);
    var total = totalTime - thisWeeksTime;
    totalTimeString.value = total.toString();
} vacationTime();

function validateForm() {
    var x = this.getField("EmployeeName").value;
    var y = this.getField("EmployeeNumber").value;
    var z = this.getField("WeekEnding").value;
    var w = this.getField("Injury").value;

    if (x == "") {
        alert("Name must be filled out.");
        return false;
    }
    if (y == "") {
        alert("Employee number must be filled out.");
        return false;
    }
    if (z == "") {
        alert("Week ending must be filled out.");
        return false;
    }
    if (w == "") {
        alert("Injury box must be selected.");
        return false;
    }
}

function costCode() {
    var selectionFld = this.getField("Dropdown1");
    if (selectionFld.value == "Development") {
        selectionFld.value = "1";
    }
    if (selectionFld.value == "BIM Coordination") {
        selectionFld.value = "11";
    }
    if (selectionFld.value == "Equipment") {
        selectionFld.value = "21";
    }
    if (selectionFld.value == "Underground") {
        selectionFld.value = "31";
    }
    if (selectionFld.value == "Walls") {
        selectionFld.value = "41";
    }
    if (selectionFld.value == "Overhead") {
        selectionFld.value = "51";
    }
    if (selectionFld.value == "Lighting") {
        selectionFld.value = "61";
    }
    if (selectionFld.value == "Finishes") {
        selectionFld.value = "71";
    }
    if (selectionFld.value == "Wire") {
        selectionFld.value = "81";
    }
} costCode();

function copy(copyFromField, copyToField) {
    var copyData = this.getField(copyFromField).value;
    if (this.getField(copyToField).value == "") {
        this.getField(copyToField).value = copyData;
    }
}

function fittingAZ(materialField, fittingField) {
    var conduitMaterial = this.getField(materialField);
    if (conduitMaterial.value == "---") {
        this.getField(fittingField).setItems([""]);
    }
    else if (conduitMaterial.value == "GRC") {
        this.getField(fittingField).setItems([""]);
        this.getField(fittingField).setItems(["---", "GRC CPL", "PVC FA", "GRD INS BS", "GRC BELL", "RED DOT"]);
    }
    else if (conduitMaterial.value == "PVC") {
        this.getField(fittingField).setItems([""]);
        this.getField(fittingField).setItems(["---", "MALE ADP", "FEMALE ADP", "COUPLING", "PVC BELL"]);
    }
    else if (conduitMaterial.value == "FG") {
        this.getField(fittingField).setItems([""]);
        this.getField(fittingField).setItems(["---", "PVC CPL", "MA PVC", "FA PVC", "PVC STB"]);
    }
    else if (conduitMaterial.value == "EMT") {
        this.getField(fittingField).setItems([""]);
        this.getField(fittingField).setItems(["---", "CPL SS", "CPL CMP", "CPL RT", "CONN SS", "CONN CMP", "CONN RT"]);
    }
}

function fittingCX(nippleMaterialField, fittingAZField, fittingCXField) {
    var nippleMaterial = this.getField(nippleMaterialField).value;
    var fittingAZMaterial = this.getField(fittingAZField).value;

    if (nippleMaterial == "---" && fittingAZMaterial == "GRC CPL") {
        this.getField(fittingCXField).setItems(["---", "CONN SS", "CONN CMP", "CONN RT"]);
    }
    else if (nippleMaterial == "---" && fittingAZMaterial == "MALE ADP") {
        this.getField(fittingCXField).setItems(["---", "GRC CPL"]);
    }
    else if (nippleMaterial == "---" && fittingAZMaterial == "MA PVC") {
        this.getField(fittingCXField).setItems(["---", "GRC CPL"]);
    }
    else if (nippleMaterial == "---" && fittingAZMaterial == "CONN SS") {
        this.getField(fittingCXField).setItems(["---", "GRC CPL", "PVC FA"]);
    }
    else if (nippleMaterial == "---" && fittingAZMaterial == "CONN CMP") {
        this.getField(fittingCXField).setItems(["---", "GRC CPL", "PVC FA"]);
    }
    else if (nippleMaterial == "---" && fittingAZMaterial == "CONN RT") {
        this.getField(fittingCXField).setItems(["---", "GRC CPL", "PVC FA"]);
    }
    else if (nippleMaterial == "PVC") {
        this.getField(fittingCXField).setItems(["---", "PVC FA", "PVC MA", "PVC BELL", "PVC CPL", "GRC CPL"]);
    }
    else if (nippleMaterial == "IMC") {
        this.getField(fittingCXField).setItems(["---", "GRC CPL", "GRD INS BS", "PVC FA", "PVC MA", "GRC BELL", "GRC CONN SS", "GRC CONN SS", "GRC CONN CMP", "GRC CONN RT", "GRC COUP CMP", "GRC COUP RT"]);
    }
    else if (nippleMaterial == "EMT") {
        this.getField(fittingCXField).setItems(["---", "EMT CONN SS", "EMT CONN CMP", "EMT CONN RT", "EMT CPL SS", "EMT CPL CMP", "EMT CPL RT"]);
    }
    else if (nippleMaterial == "GRC") {
        this.getField(fittingCXField).setItems(["---", "GRC CPL", "GRD INS BS", "PVC FA", "PVC MA", "GRC BELL", "GRC CONN SS", "GRC CONN CMP", "GRC CONN RT", "GRC COUP CMP", "GRC COUP RT"]);
    }
    else {
        this.getField(fittingCXField).setItems(["---"]);
    }
}

function nippleMaterial(fittingAZField, nippleField) {
    var fittingMaterial = this.getField(fittingAZField).value;
    if (fittingMaterial == "---") {
        this.getField(nippleField).setItems([""]);
    }
    else if (fittingMaterial == "GRC CPL") {
        this.getField(nippleField).setItems(["---", "IMC", "GRC"]);
    }
    else if (fittingMaterial == "COUPLING" || fittingMaterial == "PVC CPL" || fittingMaterial == "PVC FA") {
        this.getField(nippleField).setItems(["---", "PVC"]);
    }
    else if (fittingMaterial == "FEMALE ADP") {
        this.getField(nippleField).setItems(["---", "IMC", "GRC"]);
    }
    else if (fittingMaterial == "FA PVC") {
        this.getField(nippleField).setItems(["---", "IMC", "GRC"]);
    }
    else if (fittingMaterial == "CPL SS" || fittingMaterial == "CPL CMP" || fittingMaterial == "CPL RT") {
        this.getField(nippleField).setItems(["---", "EMT"]);
    }
    else {
        this.getField(nippleField).setItems(["---"]);
    }
}

function materialType(sizeField, materialField) {
    var conduitSize = this.getField(sizeField);
    if (conduitSize.value == "---") {
        this.getField(materialField).setItems([""]);
    }
    else if (conduitSize.value == '5"' || conduitSize.value == '6"') {
        this.getField(materialField).setItems(["GRC", "PVC", "FG"]);
    }
    else {
        this.getField(materialField).setItems(["GRC", "PVC", "FG", "EMT"]);
    }
}

function wrapClearing(fullWrapField, customWrapField) {
    var fullWrap = this.getField(fullWrapField).value.toString();
    var customWrap = this.getField(customWrapField);
    if (fullWrap == "Yes" && customWrap.value != "") {
        this.getField(fullWrapField).value = "Off";
        customWrap.value = customWrap.value + '"';
    }
    else {
        customWrap.value = customWrap.value + '"';
    }
}

//CONDUIT SIZE - MATERIAL - RADIUS - WRAPPING
function setDescTwo(descField, sizeField, materialField, radiusField, customWrapField, fullWrapField) {
    var desc = this.getField(descField);
    var size = this.getField(sizeField).value;
    var material = this.getField(materialField).value;
    var radius = this.getField(radiusField).value;
    var customWrap = this.getField(customWrapField).value;
    var fullWrap = this.getField(fullWrapField).value;

    desc.value = "";

    if (size == "" || size == "---" || material == "" || material == "---" || radius == "" || radius == "---") {
        desc.value = "SELECT A SIZE, MATERIAL, AND RADIUS";
    }
    else if (customWrap == "" && fullWrap == "Off") {
        desc.value = size + " - " + material + " - " + radius + " - UNWRAPPED";
    }
    else if (customWrap == "" && fullWrap == "Yes") {
        desc.value = size + " - " + material + " - " + radius + " - FULL WRAP";
    }
    else {
        desc.value = size + " - " + material + " - " + radius + " - " + customWrap + " WRAP";
    }
}

// to fill out material req descriptions
function materialReq() {
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
        var rolls = ductTapeTotal / 1620;
        var roundedRolls = Math.round(rolls);
        if (rolls == 0) {
            return 0;
        }
        else if (roundedRolls < 1) {
            return 1;
        }
        else { return roundedRolls; }
    }

    function wrapAmount(size, fullWrap, customWrap, topNipple, bottomNipple) {
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
        if (topNipple == "") {
            topNipple = 0;
        }
        if (bottomNipple == "") {
            bottomNipple = 0;
        }
        if (fullWrap == "Yes") {
            len += parseFloat(topNipple) + parseFloat(bottomNipple);
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
        if (rolls == 0) {
            return 0;
        }
        else if (roundedRolls < 1) {
            return 1;
        }
        else { return roundedRolls; }
    }

    function sizeMachine(size, material, radius) {
        var arr = [size, material, radius];
        var count = countInArray(arr);
        if (count == 0) {
            return size.toString() + " " + material + " " + radius.toString() + " ELBOW";
        }
        else { return null; }
    }

    function fittingMachine(size, fitting) {
        var arr = [size, fitting];
        var count = countInArray(arr);
        if (count == 0) {
            return size.toString() + " " + fitting.toString() + " FITTING";
        }
        else { return null; }
    }

    function nippleMachine(size, nippleHeight, nipple) {
        var arr = [size, nippleHeight, nipple];
        var count = countInArray(arr);
        if (count == 0) {
            return size.toString() + "x" + nippleHeight.toString() + " " + nipple.toString() + " NIPPLE";
        }
        else { return null; }
    }

    var qty1 = this.getField('QTY #1').value;
    var qty2 = this.getField('QTY #2').value;
    var qty3 = this.getField('QTY #3').value;
    var qty4 = this.getField('QTY #4').value;
    var size1 = this.getField('CONDUIT SIZE TYPE 1').value;
    var size2 = this.getField('CONDUIT SIZE TYPE 2').value;
    var size3 = this.getField('CONDUIT SIZE TYPE 3').value;
    var size4 = this.getField('CONDUIT SIZE TYPE 4').value;
    var material1 = this.getField('MATERIAL TYPE 1').value;
    var material2 = this.getField('MATERIAL TYPE 2').value;
    var material3 = this.getField('MATERIAL TYPE 3').value;
    var material4 = this.getField('MATERIAL TYPE 4').value;
    var radius1 = this.getField('RADIUS TYPE 1').value;
    var radius2 = this.getField('RADIUS TYPE 2').value;
    var radius3 = this.getField('RADIUS TYPE 3').value;
    var radius4 = this.getField('RADIUS TYPE 4').value;
    var fittingA1 = this.getField('FITTING A TYPE 1').value;
    var fittingA2 = this.getField('FITTING A TYPE 2').value;
    var fittingA3 = this.getField('FITTING A TYPE 3').value;
    var fittingA4 = this.getField('FITTING A TYPE 4').value;
    var fittingZ1 = this.getField('FITTING Z TYPE 1').value;
    var fittingZ2 = this.getField('FITTING Z TYPE 2').value;
    var fittingZ3 = this.getField('FITTING Z TYPE 3').value;
    var fittingZ4 = this.getField('FITTING Z TYPE 4').value;
    var nippleB1 = this.getField('NIPPLE B TYPE 1').value;
    var nippleB2 = this.getField('NIPPLE B TYPE 2').value;
    var nippleB3 = this.getField('NIPPLE B TYPE 3').value;
    var nippleB4 = this.getField('NIPPLE B TYPE 4').value;
    var topNippleHeight1 = this.getField('TOP NIPPLE HEIGHT TYPE 1').value;
    var topNippleHeight2 = this.getField('TOP NIPPLE HEIGHT TYPE 2').value;
    var topNippleHeight3 = this.getField('TOP NIPPLE HEIGHT TYPE 3').value;
    var topNippleHeight4 = this.getField('TOP NIPPLE HEIGHT TYPE 4').value;
    var fittingC1 = this.getField('FITTING C TYPE 1').value;
    var fittingC2 = this.getField('FITTING C TYPE 2').value;
    var fittingC3 = this.getField('FITTING C TYPE 3').value;
    var fittingC4 = this.getField('FITTING C TYPE 4').value;
    var nippleY1 = this.getField('NIPPLE Y TYPE 1').value;
    var nippleY2 = this.getField('NIPPLE Y TYPE 2').value;
    var nippleY3 = this.getField('NIPPLE Y TYPE 3').value;
    var nippleY4 = this.getField('NIPPLE Y TYPE 4').value;
    var bottomNippleLength1 = this.getField('BOTTOM NIPPLE LENGTH TYPE 1').value;
    var bottomNippleLength2 = this.getField('BOTTOM NIPPLE LENGTH TYPE 2').value;
    var bottomNippleLength3 = this.getField('BOTTOM NIPPLE LENGTH TYPE 3').value;
    var bottomNippleLength4 = this.getField('BOTTOM NIPPLE LENGTH TYPE 4').value;
    var fittingX1 = this.getField('FITTING X TYPE 1').value;
    var fittingX2 = this.getField('FITTING X TYPE 2').value;
    var fittingX3 = this.getField('FITTING X TYPE 3').value;
    var fittingX4 = this.getField('FITTING X TYPE 4').value;
    var fullWrap1 = this.getField('FULL WRAP TYPE 1').value;
    var fullWrap2 = this.getField('FULL WRAP TYPE 2').value;
    var fullWrap3 = this.getField('FULL WRAP TYPE 3').value;
    var fullWrap4 = this.getField('FULL WRAP TYPE 4').value;
    var customWrap1 = this.getField('CUSTOM WRAP HEIGHT TYPE 1').value;
    var customWrap2 = this.getField('CUSTOM WRAP HEIGHT TYPE 2').value;
    var customWrap3 = this.getField('CUSTOM WRAP HEIGHT TYPE 3').value;
    var customWrap4 = this.getField('CUSTOM WRAP HEIGHT TYPE 4').value;
    var ductTapeTop1 = this.getField('TOP TYPE 1').value;
    var ductTapeTop2 = this.getField('TOP TYPE 2').value;
    var ductTapeTop3 = this.getField('TOP TYPE 3').value;
    var ductTapeTop4 = this.getField('TOP TYPE 4').value;
    var ductTapeBottom1 = this.getField('BOTTOM TYPE 1').value;
    var ductTapeBottom2 = this.getField('BOTTOM TYPE 2').value;
    var ductTapeBottom3 = this.getField('BOTTOM TYPE 3').value;
    var ductTapeBottom4 = this.getField('BOTTOM TYPE 4').value;

    var sizeList = [];
    var fittingsList = [];
    var nippleList = [];
    var wrapHeightList = [];
    var ductTapeLenList = [];

    if (qty1 != '' && qty1 != '0') {
        var count = 0;
        while (count < qty1) {
            sizeList.push(sizeMachine(size1, material1, radius1));
            fittingsList.push(fittingMachine(size1, fittingA1));
            fittingsList.push(fittingMachine(size1, fittingZ1));
            fittingsList.push(fittingMachine(size1, fittingC1));
            fittingsList.push(fittingMachine(size1, fittingX1));
            nippleList.push(nippleMachine(size1, topNippleHeight1, nippleB1));
            nippleList.push(nippleMachine(size1, bottomNippleLength1, nippleY1));
            wrapHeightList.push(wrapAmount(size1, fullWrap1, customWrap1, topNippleHeight1, bottomNippleLength1));
            ductTapeLenList.push(ductTapeAmount(size1, ductTapeTop1, ductTapeBottom1));
            count++;
        }
    }

    if (qty2 != '' && qty2 != '0') {
        var count = 0;
        while (count < qty2) {
            sizeList.push(sizeMachine(size2, material2, radius2));
            fittingsList.push(fittingMachine(size2, fittingA2));
            fittingsList.push(fittingMachine(size2, fittingZ2));
            fittingsList.push(fittingMachine(size2, fittingC2));
            fittingsList.push(fittingMachine(size2, fittingX2));
            nippleList.push(nippleMachine(size2, topNippleHeight2, nippleB2));
            nippleList.push(nippleMachine(size2, bottomNippleLength2, nippleY2));
            wrapHeightList.push(wrapAmount(size2, fullWrap2, customWrap2, topNippleHeight2, bottomNippleLength2));
            ductTapeLenList.push(ductTapeAmount(size2, ductTapeTop2, ductTapeBottom2));
            count++;
        }
    }

    if (qty3 != '' && qty3 != '0') {
        var count = 0;
        while (count < qty3) {
            sizeList.push(sizeMachine(size3, material3, radius3));
            fittingsList.push(fittingMachine(size3, fittingA3));
            fittingsList.push(fittingMachine(size3, fittingZ3));
            fittingsList.push(fittingMachine(size3, fittingC3));
            fittingsList.push(fittingMachine(size3, fittingX3));
            nippleList.push(nippleMachine(size3, topNippleHeight3, nippleB3));
            nippleList.push(nippleMachine(size3, bottomNippleLength3, nippleY3));
            wrapHeightList.push(wrapAmount(size3, fullWrap3, customWrap3, topNippleHeight3, bottomNippleLength3));
            ductTapeLenList.push(ductTapeAmount(size3, ductTapeTop3, ductTapeBottom3));
            count++;
        }
    }

    if (qty4 != '' && qty4 != '0') {
        var count = 0;
        while (count < qty4) {
            sizeList.push(sizeMachine(size4, material4, radius4));
            fittingsList.push(fittingMachine(size4, fittingA4));
            fittingsList.push(fittingMachine(size4, fittingZ4));
            fittingsList.push(fittingMachine(size4, fittingC4));
            fittingsList.push(fittingMachine(size4, fittingX4));
            nippleList.push(nippleMachine(size4, topNippleHeight4, nippleB4));
            nippleList.push(nippleMachine(size4, bottomNippleLength4, nippleY4));
            wrapHeightList.push(wrapAmount(size4, fullWrap4, customWrap4, topNippleHeight4, bottomNippleLength4));
            ductTapeLenList.push(ductTapeAmount(size4, ductTapeTop4, ductTapeBottom4));
            count++;
        }
    }

    sizeList.sort();
    fittingsList.sort();
    nippleList.sort();

    var sizeCount = {};
    sizeList.forEach(function (i) { sizeCount[i] = (sizeCount[i] || 0) + 1; });

    var fittingCount = {};
    fittingsList.forEach(function (i) { fittingCount[i] = (fittingCount[i] || 0) + 1; });

    var nippleCount = {};
    nippleList.forEach(function (i) { nippleCount[i] = (nippleCount[i] || 0) + 1; });

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

    for (var element in nippleCount) {
        if (element != 'null') {
            this.getField('DESC ' + i).value = element;
            this.getField('QTY ' + i).value = nippleCount[element];
            i++;
        }
    }

    for (var index = 0; index < wrapHeightList.length; index++) {
        wrapTotal += wrapHeightList[index];
    }

    for (var index = 0; index < ductTapeLenList.length; index++) {
        ductTapeTotal += ductTapeLenList[index];
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


function nippleHeight(nippleField, overallHeightField, factHeightField) {
    var nippleHeight = this.getField(nippleField);
    var overallHeight = this.getField(overallHeightField).value;
    var overallHeightF = this.getField(overallHeightField);
    var factHeight = this.getField(factHeightField).value;

    if (overallHeight != "") {
        calc = parseFloat(overallHeight) - factHeight.replace(/[^0-9.]/g, '');
        if (calc <= 0) {
            nippleHeight.value = "ERROR";
        }
        else {
            overallHeightF.value = parseFloat(overallHeight) + '"';
            nippleHeight.value = calc + '"'
        }
    }
}


function setFactHeight(conduitSizeField, materialField, radiusField, factHeightField) {
    let threeQuartersGRC = {
        '---': '---',
        '90°x4-1/2"(STANDARD)': '±7.5"',
        '45°x4-1/2"(STANDARD)': 'N/A',
        '30°x4-1/2"(STANDARD)': 'N/A',
        '22.5°x4-1/2"(STANDARD)': 'N/A'
    };

    let oneInchGRC = {
        '---': '---',
        '90°x5-3/4"(STANDARD)': '±9.5"',
        '90°x18"': '±28.5"',
        '90°x24"': '±35.5"',
        '90°x30"': '±42"',
        '90°x36"': '±47.5"',
        '90°x48"': '±62"',
        '45°x5-3/4"(STANDARD)': 'N/A',
        '45°x18"': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x5-3/4"(STANDARD)': 'N/A',
        '30°x18"': 'N/A',
        '30°x24"': 'N/A',
        '30°x30"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x5-3/4"(STANDARD)': 'N/A',
        '22.5°x18"': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let oneAndQuarterGRC = {
        '---': '---',
        '90°x7-1/4"(STANDARD)': '±12"',
        '90°x18"': '±28.5',
        '90°x24"': '±35.5',
        '90°x30"': '±42"',
        '90°x36"': '±47.5"',
        '90°x48"': '±62"',
        '45°x7-1/4"(STANDARD)': 'N/A',
        '45°x18"': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x7-1/4"(STANDARD)': 'N/A',
        '30°x18"': 'N/A',
        '30°x24"': 'N/A',
        '30°x30"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x7-1/4"(STANDARD)': 'N/A',
        '22.5°x18"': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let oneAndHalfGRC = {
        '---': '---',
        '90°x8-1/4"(STANDARD)': '±13"',
        '90°x18"': '±28.5"',
        '90°x24"': '±35.5"',
        '90°x30"': '±42"',
        '90°x36"': '±47.5"',
        '90°x48"': '±62"',
        '45°x8-1/4"(STANDARD)': 'N/A',
        '45°x18"': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x8-1/4"(STANDARD)': 'N/A',
        '30°x18"': 'N/A',
        '30°x24"': 'N/A',
        '30°x30"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x8-1/4"(STANDARD)': 'N/A',
        '22.5°x18"': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let twoGRC = {
        '---': '---',
        '90°x9-1/2"(STANDARD)': '±15.5"',
        '90°x18"': '±29"',
        '90°x24"': '±36"',
        '90°x30"': '±42.5"',
        '90°x36"': '±48"',
        '90°x48"': '±62.5"',
        '45°x9-1/2"(STANDARD)': 'N/A',
        '45°x18"': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x9-1/2"(STANDARD)': 'N/A',
        '30°x18"': 'N/A',
        '30°x24"': 'N/A',
        '30°x30"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x9-1/2"(STANDARD)': 'N/A',
        '22.5°x18"': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let twoAndHalfGRC = {
        '---': '---',
        '90°x10-1/2"(STANDARD)': '±18"',
        '90°x18"': '±25.5"',
        '90°x24"': '±32.5"',
        '90°x30"': '±39"',
        '90°x36"': '±46"',
        '90°x48"': '±62.5',
        '45°x10-1/2"(STANDARD)': 'N/A',
        '45°x18"': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x10-1/2"(STANDARD)': 'N/A',
        '30°x18"': 'N/A',
        '30°x24"': 'N/A',
        '30°x30"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x10-1/2"(STANDARD)': 'N/A',
        '22.5°x18"': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let threeGRC = {
        '---': '---',
        '90°x13"(STANDARD)': '±21.5"',
        '90°x18"': '±26"',
        '90°x24"': '±35"',
        '90°x30"': '±40.5"',
        '90°x36"': '±48.5"',
        '90°x48"': '±62"',
        '90°x60"': '±77.5"',
        '45°x13"(STANDARD)': 'N/A',
        '45°x18"': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '45°x60"': 'N/A',
        '30°x13"(STANDARD)': 'N/A',
        '30°x18"': 'N/A',
        '30°x24"': 'N/A',
        '30°x30"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '30°x60"': 'N/A',
        '22.5°x13"(STANDARD)': 'N/A',
        '22.5°x18"': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A',
        '22.5°x60"': 'N/A'
    };

    let threeAndHalfGRC = {
        '---': '---',
        '90°x15"(STANDARD)': '±25"',
        '90°x24"': '±37"',
        '90°x30"': '±40.5"',
        '90°x36"': '±47"',
        '90°x48"': '±62.5',
        '45°x15"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x15"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x30"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x15"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let fourGRC = {
        '---': '---',
        '90°x16"(STANDARD)': '±26"',
        '90°x24"': '±37.5"',
        '90°x30"': '±41.5"',
        '90°x36"': '±49"',
        '90°x48"': '±62.5"',
        '90°x60"': '±78"',
        '45°x16"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '45°x60"': 'N/A',
        '30°x16"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x30"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '30°x60"': 'N/A',
        '22.5°x16"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A',
        '22.5°x60"': 'N/A'
    };

    let fiveGRC = {
        '---': '---',
        '90°x24"(STANDARD)': '±37.5"',
        '90°x36"': '±53.5"',
        '90°x48"': '±68"',
        '90°x60"': '±78.5"',
        '45°x24"(STANDARD)': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '45°x60"': 'N/A',
        '30°x24"(STANDARD)': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '30°x60"': 'N/A',
        '22.5°x24"(STANDARD)': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A',
        '22.5°x60"': 'N/A'
    };

    let sixGRC = {
        '---': '---',
        '90°x30"(STANDARD)': '±49"',
        '90°x36"': '±54"',
        '90°x48"': '±68.5"',
        '90°x60"': '±79"',
        '45°x30"(STANDARD)': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '45°x60"': 'N/A',
        '30°x30"(STANDARD)': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '30°x60"': 'N/A',
        '22.5°x30"(STANDARD)': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A',
        '22.5°x60"': 'N/A'
    };

    let threeQuartersPVC = {
        '---': '---',
        '90°x4-1/2"(STANDARD)': '±6.5"',
        '45°x4-1/2"(STANDARD)': 'N/A',
        '30°x4-1/2"(STANDARD)': 'N/A',
        '22.5°x4-1/2"(STANDARD)': 'N/A'
    };

    let onePVC = {
        '---': '---',
        '90°x5-3/4"(STANDARD)': '±8"',
        '90°x18"': '±20.5"',
        '90°x24"': '±26"',
        '90°x30"': '±32"',
        '90°x36"': '±38"',
        '90°x48"': '±50.5"',
        '45°x5-3/4"(STANDARD)': 'N/A',
        '45°x18"': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x5-3/4"(STANDARD)': 'N/A',
        '30°x18"': 'N/A',
        '30°x24"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x5-3/4"(STANDARD)': 'N/A',
        '22.5°x18"': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A'
    };

    let oneAndQuarterPVC = {
        '---': '---',
        '90°x7-1/4"(STANDARD)': '±10"',
        '90°x18"': '±21"',
        '90°x24"': '±26.5"',
        '90°x30"': '±32.5"',
        '90°x36"': '±38.5"',
        '90°x48"': '±51"',
        '45°x7-1/4"(STANDARD)': 'N/A',
        '45°x18"': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x7-1/4"(STANDARD)': 'N/A',
        '30°x18"': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x7-1/4"(STANDARD)': 'N/A',
        '22.5°x18"': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x36"': 'N/A'
    };

    let oneAndHalfPVC = {
        '---': '---',
        '90°x8-1/4"(STANDARD)': '±11"',
        '90°x18"': '±21"',
        '90°x24"': '±26.5"',
        '90°x30"': '±33"',
        '90°x36"': '±39"',
        '90°x48"': '±51"',
        '45°x8-1/4"(STANDARD)': 'N/A',
        '45°x18"': 'N/A',
        '45°x24"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x8-1/4"(STANDARD)': 'N/A',
        '30°x18"': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x8-1/4"(STANDARD)': 'N/A',
        '22.5°x18"': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let twoPVC = {
        '---': '---',
        '90°x9-1/2"(STANDARD)': '±13"',
        '90°x18"': '±21"',
        '90°x24"': '±27"',
        '90°x30"': '±33"',
        '90°x36"': '±39"',
        '90°x48"': '±51"',
        '90°x60"': '±63"',
        '45°x9-1/2"(STANDARD)': 'N/A',
        '45°x18"': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '45°x60"': 'N/A',
        '30°x9-1/2"(STANDARD)': 'N/A',
        '30°x18"': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '30°x60"': 'N/A',
        '22.5°x9-1/2"(STANDARD)': 'N/A',
        '22.5°x18"': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let twoAndHalfPVC = {
        '---': '---',
        '90°x10-1/2"(STANDARD)': '±15"',
        '90°x18"': '±22.5"',
        '90°x24"': '±28.5"',
        '90°x30"': '±34.5"',
        '90°x36"': '±39"',
        '90°x48"': '±52.5"',
        '90°x60"': '±64.5"',
        '45°x10-1/2"(STANDARD)': 'N/A',
        '45°x18"': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x10-1/2"(STANDARD)': 'N/A',
        '30°x18"': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '22.5°x10-1/2"(STANDARD)': 'N/A',
        '22.5°x18"': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let threePVC = {
        '---': '---',
        '90°x13"(STANDARD)': '±18"',
        '90°x18"': '±23"',
        '90°x24"': '±29"',
        '90°x30"': '±35"',
        '90°x36"': '±40.5"',
        '90°x48"': '±53"',
        '90°x60"': '±65"',
        '45°x13"(STANDARD)': 'N/A',
        '45°x18"': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '45°x60"': 'N/A',
        '30°x13"(STANDARD)': 'N/A',
        '30°x18"': 'N/A',
        '30°x24"': 'N/A',
        '30°x30"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '30°x60"': 'N/A',
        '22.5°x13"(STANDARD)': 'N/A',
        '22.5°x18"': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let threeAndHalfPVC = {
        '---': '---',
        '90°x15"(STANDARD)': '±20"',
        '90°x24"': '±29"',
        '90°x30"': '±35"',
        '90°x36"': '±41"',
        '90°x48"': '±53"',
        '90°x60"': '±65"',
        '45°x15"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x15"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x15"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x36"': 'N/A'
    };

    let fourPVC = {
        '---': '---',
        '90°x16"(STANDARD)': '±21.5"',
        '90°x24"': '±29.5"',
        '90°x30"': '±35.5"',
        '90°x36"': '±41.5"',
        '90°x48"': '±53.5"',
        '90°x60"': '±65.5"',
        '45°x16"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '45°x60"': 'N/A',
        '30°x16"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x30"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '30°x60"': 'N/A',
        '22.5°x16"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A',
        '22.5°x60"': 'N/A'
    };

    let fivePVC = {
        '---': '---',
        '90°x24"(STANDARD)': '±30.5"',
        '90°x30"': '±36.5"',
        '90°x36"': '±42.5"',
        '90°x48"': '±54.5"',
        '90°x60"': '±66.5"',
        '45°x24"(STANDARD)': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '45°x60"': 'N/A',
        '30°x24"(STANDARD)': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '30°x60"': 'N/A',
        '22.5°x24"(STANDARD)': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A',
        '22.5°x60"': 'N/A'
    };

    let sixPVC = {
        '---': '---',
        '90°x30"(STANDARD)': '±37"',
        '90°x36"': '±43"',
        '90°x48"': '±55"',
        '90°x60"': '±67"',
        '45°x30"(STANDARD)': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '45°x60"': 'N/A',
        '30°x30"(STANDARD)': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '30°x60"': 'N/A',
        '22.5°x30"(STANDARD)': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A',
        '22.5°x60"': 'N/A'
    };

    let threeQuartersFG = {
        '---': '---',
        '90°x12"(STANDARD)': '±18.5"',
        '90°x24"': '±30.5"',
        '90°x36"': '±42.5"',
        '90°x48"': '±54.5"',
        '90°x60"': '±66.5"',
        '45°x12"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x36"': 'N/A',
        '30°x12"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '22.5°x12"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x36"': 'N/A'
    };

    let oneFG = {
        '---': '---',
        '90°x12"(STANDARD)': '±18.5"',
        '90°x24"': '±30.5"',
        '90°x36"': '±42.5"',
        '90°x48"': '±54.5"',
        '90°x60"': '±66.5"',
        '45°x12"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x36"': 'N/A',
        '30°x12"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '22.5°x12"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x36"': 'N/A'
    };

    let oneAndQuarterFG = {
        '---': '---',
        '90°x12"(STANDARD)': '±19"',
        '90°x24"': '±31"',
        '90°x36"': '±43"',
        '90°x48"': '±55"',
        '90°x60"': '±67"',
        '45°x12"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x36"': 'N/A',
        '30°x12"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '22.5°x12"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x36"': 'N/A'
    };

    let oneAndHalfFG = {
        '---': '---',
        '90°x12"(STANDARD)': '±19"',
        '90°x24"': '±31"',
        '90°x36"': '±43"',
        '90°x48"': '±55"',
        '90°x60"': '±67"',
        '45°x12"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x36"': 'N/A',
        '30°x12"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '22.5°x12"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x36"': 'N/A'
    };

    let twoFG = {
        '---': '---',
        '90°x12"(STANDARD)': '±19"',
        '90°x24"': '±31"',
        '90°x36"': '±43"',
        '90°x48"': '±55"',
        '90°x60"': '±67"',
        '45°x12"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x36"': 'N/A',
        '30°x12"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '22.5°x12"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x36"': 'N/A'
    };

    let twoAndHalfFG = {
        '---': '---',
        '90°x12"(STANDARD)': '±19.5"',
        '90°x24"': '±31.5"',
        '90°x36"': '±43.5"',
        '90°x48"': '±55.5"',
        '90°x60"': '±67.5"',
        '45°x12"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x36"': 'N/A',
        '30°x12"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '22.5°x12"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x36"': 'N/A'
    };

    let threeFG = {
        '---': '---',
        '90°x24"(STANDARD)': '±31.5"',
        '90°x36"': '±43.5"',
        '90°x48"': '±55.5"',
        '90°x60"': '±67.5"',
        '45°x12"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x36"': 'N/A',
        '30°x12"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '22.5°x12"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x36"': 'N/A'
    };

    let fourFG = {
        '---': '---',
        '90°x24"(STANDARD)': '±32"',
        '90°x36"': '±44"',
        '90°x48"': '±56"',
        '90°x60"': '±68"',
        '45°x24"(STANDARD)': 'N/A',
        '45°x36"': 'N/A',
        '30°x24"(STANDARD)': 'N/A',
        '30°x36"': 'N/A',
        '22.5°x24"(STANDARD)': 'N/A',
        '22.5°x36"': 'N/A'
    };

    let fiveFG = {
        '---': '---',
        '90°x36"(STANDARD)': '±44"',
        '90°x48"': '±57"',
        '90°x60"': '±69',
        '45°x36"(STANDARD)': 'N/A',
        '30°x36"(STANDARD)': 'N/A',
        '22.5°x36"(STANDARD)': 'N/A'
    };

    let sixFG = {
        '---': '---',
        '90°x36"(STANDARD)': '±45.5',
        '90°x48"': '±57.5',
        '90°x60"': '±69.5',
        '45°x36"(STANDARD)': 'N/A',
        '30°x36"(STANDARD)': 'N/A',
        '22.5°x36"(STANDARD)': 'N/A'
    };

    let threeQuartersEMT = {
        '---': '---',
        '90°x4-1/2"(STANDARD)': '±7.5"',
        '45°x4-1/2"(STANDARD)': 'N/A',
        '30°x4-1/2"(STANDARD)': 'N/A',
        '22.5°x4-1/2"(STANDARD)': 'N/A'
    };

    let oneEMT = {
        '---': '---',
        '90°x5-3/4"(STANDARD)': '±9.5"',
        '45°x5-3/4"(STANDARD)': 'N/A',
        '30°x5-3/4"(STANDARD)': 'N/A',
        '22.5°x5-3/4"(STANDARD)': 'N/A'
    };

    let oneAndQuarterEMT = {
        '---': '---',
        '90°x7-1/4"(STANDARD)': '±12"',
        '90°x24"': '±35.5"',
        '90°x36"': '±47.5"',
        '90°x48"': '±61"',
        '45°x7-1/4"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x7-1/4"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x7-1/4"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let oneAndHalfEMT = {
        '---': '---',
        '90°x8-1/4"(STANDARD)': '±13"',
        '90°x24"': '±35.5"',
        '90°x36"': '±47.5"',
        '90°x48"': '±61"',
        '45°x8-1/4"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x8-1/4"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x8-1/4"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let twoEMT = {
        '---': '---',
        '90°x9-1/2"(STANDARD)': '±14"',
        '90°x24"': '±36"',
        '90°x30"': '±42"',
        '90°x36"': '±48"',
        '90°x48"': '±61.5"',
        '45°x9-1/2"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x9-1/2"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x30"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x9-1/2"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let twoAndHalfEMT = {
        '---': '---',
        '90°x10-1/2"(STANDARD)': '±18"',
        '90°x24"': '±36"',
        '90°x30"': '±42.5"',
        '90°x36"': '±48"',
        '90°x48"': '±62"',
        '45°x10-1/2"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x10-1/2"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x10-1/2"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let threeEMT = {
        '---': '---',
        '90°x13"(STANDARD)': '±20.5"',
        '90°x24"': '±36"',
        '90°x30"': '±42.5"',
        '90°x36"': '±48.5"',
        '90°x48"': '±62"',
        '45°x13"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x13"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x30"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x13"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let threeAndHalfEMT = {
        '---': '---',
        '90°x15"(STANDARD)': '±23.5"',
        '90°x24"': '±36.5"',
        '90°x30"': '±43"',
        '90°x36"': '±48.5"',
        '90°x48"': '±62"',
        '45°x15"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x15"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x30"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x15"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    let fourEMT = {
        '---': '---',
        '90°x16"(STANDARD)': '±25.5"',
        '90°x24"': '±37"',
        '90°x30"': '±43"',
        '90°x36"': '±49"',
        '90°x48"': '±62.5"',
        '45°x16"(STANDARD)': 'N/A',
        '45°x24"': 'N/A',
        '45°x30"': 'N/A',
        '45°x36"': 'N/A',
        '45°x48"': 'N/A',
        '30°x16"(STANDARD)': 'N/A',
        '30°x24"': 'N/A',
        '30°x30"': 'N/A',
        '30°x36"': 'N/A',
        '30°x48"': 'N/A',
        '22.5°x16"(STANDARD)': 'N/A',
        '22.5°x24"': 'N/A',
        '22.5°x30"': 'N/A',
        '22.5°x36"': 'N/A',
        '22.5°x48"': 'N/A'
    };

    //conduitSizeField, materialField, radiusField, factHeightField
    var conduitSize = this.getField(conduitSizeField).value;
    var radiusSize = this.getField(radiusField).value;
    var material = this.getField(materialField).value;
    var factHeightField = this.getField(factHeightField);

    if (radiusSize == "---") {
        factHeightField.value = "";
    }
    else if (conduitSize == '3/4"' && material == 'GRC') {
        //this.getField(radiusField).setItems(Object.keys(threeQuartersGRC));
        factHeightField.value = threeQuartersGRC[radiusSize];
    }
    else if (conduitSize == '1"' && material == 'GRC') {
        //this.getField(radiusField).setItems(Object.keys(oneInchGRC));
        factHeightField.value = oneInchGRC[radiusSize];
    }
    else if (conduitSize == '1-1/4"' && material == 'GRC') {
        //this.getField(radiusField).setItems(Object.keys(oneAndQuarterGRC));
        factHeightField.value = oneAndQuarterGRC[radiusSize];
    }
    else if (conduitSize == '1-1/2"' && material == 'GRC') {
        //this.getField(radiusField).setItems(Object.keys(oneAndHalfGRC));
        factHeightField.value = oneAndHalfGRC[radiusSize];
    }
    else if (conduitSize == '2"' && material == 'GRC') {
        //this.getField(radiusField).setItems(Object.keys(twoGRC));
        factHeightField.value = twoGRC[radiusSize];
    }
    else if (conduitSize == '2-1/2"' && material == 'GRC') {
        //this.getField(radiusField).setItems(Object.keys(twoAndHalfGRC));
        factHeightField.value = twoAndHalfGRC[radiusSize];
    }
    else if (conduitSize == '3"' && material == 'GRC') {
        //this.getField(radiusField).setItems(Object.keys(threeGRC));
        factHeightField.value = threeGRC[radiusSize];
    }
    else if (conduitSize == '3-1/2"' && material == 'GRC') {
        //this.getField(radiusField).setItems(Object.keys(threeAndHalfGRC));
        factHeightField.value = threeAndHalfGRC[radiusSize];
    }
    else if (conduitSize == '4"' && material == 'GRC') {
        //this.getField(radiusField).setItems(Object.keys(fourGRC));
        factHeightField.value = fourGRC[radiusSize];
    }
    else if (conduitSize == '5"' && material == 'GRC') {
        //this.getField(radiusField).setItems(Object.keys(fiveGRC));
        factHeightField.value = fiveGRC[radiusSize];
    }
    else if (conduitSize == '6"' && material == 'GRC') {
        //this.getField(radiusField).setItems(Object.keys(sixGRC));
        factHeightField.value = sixGRC[radiusSize];
    }
    else if (conduitSize == '3/4"' && material == 'PVC') {
        //this.getField(radiusField).setItems(Object.keys(threeQuartersPVC));
        factHeightField.value = threeQuartersPVC[radiusSize];
    }
    else if (conduitSize == '1"' && material == 'PVC') {
        //this.getField(radiusField).setItems(Object.keys(onePVC));
        factHeightField.value = onePVC[radiusSize];
    }
    else if (conduitSize == '1-1/4"' && material == 'PVC') {
        //this.getField(radiusField).setItems(Object.keys(oneAndQuarterPVC));
        factHeightField.value = oneAndQuarterPVC[radiusSize];
    }
    else if (conduitSize == '1-1/2"' && material == 'PVC') {
        //this.getField(radiusField).setItems(Object.keys(oneAndHalfPVC));
        factHeightField.value = oneAndHalfPVC[radiusSize];
    }
    else if (conduitSize == '2"' && material == 'PVC') {
        //this.getField(radiusField).setItems(Object.keys(twoPVC));
        factHeightField.value = twoPVC[radiusSize];
    }
    else if (conduitSize == '2-1/2"' && material == 'PVC') {
        //this.getField(radiusField).setItems(Object.keys(twoAndHalfPVC));
        factHeightField.value = twoAndHalfPVC[radiusSize];
    }
    else if (conduitSize == '3"' && material == 'PVC') {
        //this.getField(radiusField).setItems(Object.keys(threePVC));
        factHeightField.value = threePVC[radiusSize];
    }
    else if (conduitSize == '3-1/2"' && material == 'PVC') {
        //this.getField(radiusField).setItems(Object.keys(threeAndHalfPVC));
        factHeightField.value = threeAndHalfPVC[radiusSize];
    }
    else if (conduitSize == '4"' && material == 'PVC') {
        //this.getField(radiusField).setItems(Object.keys(fourPVC));
        factHeightField.value = fourPVC[radiusSize];
    }
    else if (conduitSize == '5"' && material == 'PVC') {
        //this.getField(radiusField).setItems(Object.keys(fivePVC));
        factHeightField.value = fivePVC[radiusSize];
    }
    else if (conduitSize == '6"' && material == 'PVC') {
        //this.getField(radiusField).setItems(Object.keys(sixPVC));
        factHeightField.value = sixPVC[radiusSize];
    }
    else if (conduitSize == '3/4"' && material == 'FG') {
        //this.getField(radiusField).setItems(Object.keys(threeQuartersFG));
        factHeightField.value = threeQuartersFG[radiusSize];
    }
    else if (conduitSize == '1"' && material == 'FG') {
        //this.getField(radiusField).setItems(Object.keys(oneFG));
        factHeightField.value = oneFG[radiusSize];
    }
    else if (conduitSize == '1-1/4"' && material == 'FG') {
        //this.getField(radiusField).setItems(Object.keys(oneAndQuarterFG));
        factHeightField.value = oneAndQuarterFG[radiusSize];
    }
    else if (conduitSize == '1-1/2"' && material == 'FG') {
        //this.getField(radiusField).setItems(Object.keys(oneAndHalfFG));
        factHeightField.value = oneAndHalfFG[radiusSize];
    }
    else if (conduitSize == '2"' && material == 'FG') {
        //this.getField(radiusField).setItems(Object.keys(twoFG));
        factHeightField.value = twoFG[radiusSize];
    }
    else if (conduitSize == '2-1/2"' && material == 'FG') {
        //this.getField(radiusField).setItems(Object.keys(twoAndHalfFG));
        factHeightField.value = twoAndHalfFG[radiusSize];
    }
    else if (conduitSize == '3"' && material == 'FG') {
        //this.getField(radiusField).setItems(Object.keys(threeFG));
        factHeightField.value = threeFG[radiusSize];
    }
    else if (conduitSize == '4"' && material == 'FG') {
        //this.getField(radiusField).setItems(Object.keys(fourFG));
        factHeightField.value = fourFG[radiusSize];
    }
    else if (conduitSize == '5"' && material == 'FG') {
        //this.getField(radiusField).setItems(Object.keys(fiveFG));
        factHeightField.value = fiveFG[radiusSize];
    }
    else if (conduitSize == '6"' && material == 'FG') {
        //this.getField(radiusField).setItems(Object.keys(sixFG));
        factHeightField.value = sixFG[radiusSize];
    }
    else if (conduitSize == '3/4"' && material == 'EMT') {
        //this.getField(radiusField).setItems(Object.keys(threeQuartersEMT));
        factHeightField.value = threeQuartersEMT[radiusSize];
    }
    else if (conduitSize == '1"' && material == 'EMT') {
        //this.getField(radiusField).setItems(Object.keys(oneEMT));
        factHeightField.value = oneEMT[radiusSize];
    }
    else if (conduitSize == '1-1/4"' && material == 'EMT') {
        //this.getField(radiusField).setItems(Object.keys(oneAndQuarterEMT));
        factHeightField.value = oneAndQuarterEMT[radiusSize];
    }
    else if (conduitSize == '1-1/2"' && material == 'EMT') {
        //this.getField(radiusField).setItems(Object.keys(oneAndHalfEMT));
        factHeightField.value = oneAndHalfEMT[radiusSize];
    }
    else if (conduitSize == '2"' && material == 'EMT') {
        //this.getField(radiusField).setItems(Object.keys(twoEMT));
        factHeightField.value = twoEMT[radiusSize];
    }
    else if (conduitSize == '2-1/2"' && material == 'EMT') {
        //this.getField(radiusField).setItems(Object.keys(twoAndHalfEMT));
        factHeightField.value = twoAndHalfEMT[radiusSize];
    }
    else if (conduitSize == '3"' && material == 'EMT') {
        //this.getField(radiusField).setItems(Object.keys(threeEMT));
        factHeightField.value = threeEMT[radiusSize];
    }
    else if (conduitSize == '3-1/2"' && material == 'EMT') {
        //this.getField(radiusField).setItems(Object.keys(threeAndHalfEMT));
        factHeightField.value = threeAndHalfEMT[radiusSize];
    }
    else if (conduitSize == '4"' && material == 'EMT') {
        //this.getField(radiusField).setItems(Object.keys(fourEMT));
        factHeightField.value = fourEMT[radiusSize];
    }
}


function radiusSize(sizeField, materialField, radiusField, factHeightField) {
    let threeQuartersGRC = {
        '90x4-1/2"(FACTORY)': '±7.5"',
        '45x4-1/2"(FACTORY)': 'N/A',
        '30x4-1/2"(FACTORY)': 'N/A',
        '22.5x4-1/2"(FACTORY)': 'N/A'
    };

    let oneInchGRC = {
        '90x5-3/4"(FACTORY)': '±9.5"',
        '90x18"': '±28.5"',
        '90x24"': '±35.5"',
        '90x30"': '±42"',
        '90x36"': '±47.5"',
        '90x48"': '±62"',
        '45x5-3/4"(FACTORY)': 'N/A',
        '45x18"': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x5-3/4"(FACTORY)': 'N/A',
        '30x18"': 'N/A',
        '30x24"': 'N/A',
        '30x30"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x5-3/4"(FACTORY)': 'N/A',
        '22.5x18"': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let oneAndQuarterGRC = {
        '90x7-1/4"(FACTORY)': '±12"',
        '90x18"': '±28.5',
        '90x24"': '±35.5',
        '90x30"': '±42"',
        '90x36"': '±47.5"',
        '90x48"': '±62"',
        '45x7-1/4"(FACTORY)': 'N/A',
        '45x18"': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x7-1/4"(FACTORY)': 'N/A',
        '30x18"': 'N/A',
        '30x24"': 'N/A',
        '30x30"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x7-1/4"(FACTORY)': 'N/A',
        '22.5x18"': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let oneAndHalfGRC = {
        '90x8-1/4"(FACTORY)': '±13"',
        '90x18"': '±28.5"',
        '90x24"': '±35.5"',
        '90x30"': '±42"',
        '90x36"': '±47.5"',
        '90x48"': '±62"',
        '45x8-1/4"(FACTORY)': 'N/A',
        '45x18"': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x8-1/4"(FACTORY)': 'N/A',
        '30x18"': 'N/A',
        '30x24"': 'N/A',
        '30x30"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x8-1/4"(FACTORY)': 'N/A',
        '22.5x18"': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let twoGRC = {
        '90x9-1/2"(FACTORY)': '±15.5"',
        '90x18"': '±29"',
        '90x24"': '±36"',
        '90x30"': '±42.5"',
        '90x36"': '±48"',
        '90x48"': '±62.5"',
        '45x9-1/2"(FACTORY)': 'N/A',
        '45x18"': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x9-1/2"(FACTORY)': 'N/A',
        '30x18"': 'N/A',
        '30x24"': 'N/A',
        '30x30"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x9-1/2"(FACTORY)': 'N/A',
        '22.5x18"': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let twoAndHalfGRC = {
        '90x10-1/2"(FACTORY)': '±18"',
        '90x18"': '±25.5"',
        '90x24"': '±32.5"',
        '90x30"': '±39"',
        '90x36"': '±46"',
        '90x48"': '±62.5',
        '45x10-1/2"(FACTORY)': 'N/A',
        '45x18"': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x10-1/2"(FACTORY)': 'N/A',
        '30x18"': 'N/A',
        '30x24"': 'N/A',
        '30x30"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x10-1/2"(FACTORY)': 'N/A',
        '22.5x18"': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let threeGRC = {
        '90x13"(FACTORY)': '±21.5"',
        '90x18"': '±26"',
        '90x24"': '±35"',
        '90x30"': '±40.5"',
        '90x36"': '±48.5"',
        '90x48"': '±62"',
        '90x60"': '±77.5"',
        '45x13"(FACTORY)': 'N/A',
        '45x18"': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '45x60"': 'N/A',
        '30x13"(FACTORY)': 'N/A',
        '30x18"': 'N/A',
        '30x24"': 'N/A',
        '30x30"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '30x60"': 'N/A',
        '22.5x13"(FACTORY)': 'N/A',
        '22.5x18"': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A',
        '22.5x60"': 'N/A'
    };

    let threeAndHalfGRC = {
        '90x15"(FACTORY)': '±25"',
        '90x24"': '±37"',
        '90x30"': '±40.5"',
        '90x36"': '±47"',
        '90x48"': '±62.5',
        '45x15"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x15"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x30"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x15"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let fourGRC = {
        '90x16"(FACTORY)': '±26"',
        '90x24"': '±37.5"',
        '90x30"': '±41.5"',
        '90x36"': '±49"',
        '90x48"': '±62.5"',
        '90x60"': '±78"',
        '45x16"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '45x60"': 'N/A',
        '30x16"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x30"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '30x60"': 'N/A',
        '22.5x16"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A',
        '22.5x60"': 'N/A'
    };

    let fiveGRC = {
        '90x24"(FACTORY)': '±37.5"',
        '90x36"': '±53.5"',
        '90x48"': '±68"',
        '90x60"': '±78.5"',
        '45x24"(FACTORY)': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '45x60"': 'N/A',
        '30x24"(FACTORY)': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '30x60"': 'N/A',
        '22.5x24"(FACTORY)': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A',
        '22.5x60"': 'N/A'
    };

    let sixGRC = {
        '90x30"(FACTORY)': '±49"',
        '90x36"': '±54"',
        '90x48"': '±68.5"',
        '90x60"': '±79"',
        '45x30"(FACTORY)': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '45x60"': 'N/A',
        '30x30"(FACTORY)': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '30x60"': 'N/A',
        '22.5x30"(FACTORY)': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A',
        '22.5x60"': 'N/A'
    };

    let threeQuartersPVC = {
        '90x4-1/2"(FACTORY)': '±6.5"',
        '45x4-1/2"(FACTORY)': 'N/A',
        '30x4-1/2"(FACTORY)': 'N/A',
        '22.5x4-1/2"(FACTORY)': 'N/A'
    };

    let onePVC = {
        '90x5-3/4"(FACTORY)': '±8"',
        '90x18"': '±20.5"',
        '90x24"': '±26"',
        '90x30"': '±32"',
        '90x36"': '±38"',
        '90x48"': '±50.5"',
        '45x5-3/4"(FACTORY)': 'N/A',
        '45x18"': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x5-3/4"(FACTORY)': 'N/A',
        '30x18"': 'N/A',
        '30x24"': 'N/A',
        '30x48"': 'N/A',
        '22.5x5-3/4"(FACTORY)': 'N/A',
        '22.5x18"': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A'
    };

    let oneAndQuarterPVC = {
        '90x7-1/4"(FACTORY)': '±10"',
        '90x18"': '±21"',
        '90x24"': '±26.5"',
        '90x30"': '±32.5"',
        '90x36"': '±38.5"',
        '90x48"': '±51"',
        '45x7-1/4"(FACTORY)': 'N/A',
        '45x18"': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x7-1/4"(FACTORY)': 'N/A',
        '30x18"': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x7-1/4"(FACTORY)': 'N/A',
        '22.5x18"': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x36"': 'N/A'
    };

    let oneAndHalfPVC = {
        '90x8-1/4"(FACTORY)': '±11"',
        '90x18"': '±21"',
        '90x24"': '±26.5"',
        '90x30"': '±33"',
        '90x36"': '±39"',
        '90x48"': '±51"',
        '45x8-1/4"(FACTORY)': 'N/A',
        '45x18"': 'N/A',
        '45x24"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x8-1/4"(FACTORY)': 'N/A',
        '30x18"': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x8-1/4"(FACTORY)': 'N/A',
        '22.5x18"': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let twoPVC = {
        '90x9-1/2"(FACTORY)': '±13"',
        '90x18"': '±21"',
        '90x24"': '±27"',
        '90x30"': '±33"',
        '90x36"': '±39"',
        '90x48"': '±51"',
        '90x60"': '±63"',
        '45x9-1/2"(FACTORY)': 'N/A',
        '45x18"': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '45x60"': 'N/A',
        '30x9-1/2"(FACTORY)': 'N/A',
        '30x18"': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '30x60"': 'N/A',
        '22.5x9-1/2"(FACTORY)': 'N/A',
        '22.5x18"': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let twoAndHalfPVC = {
        '90x10-1/2"(FACTORY)': '±15"',
        '90x18"': '±22.5"',
        '90x24"': '±28.5"',
        '90x30"': '±34.5"',
        '90x36"': '±39"',
        '90x48"': '±52.5"',
        '90x60"': '±64.5"',
        '45x10-1/2"(FACTORY)': 'N/A',
        '45x18"': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x10-1/2"(FACTORY)': 'N/A',
        '30x18"': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '22.5x10-1/2"(FACTORY)': 'N/A',
        '22.5x18"': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let threePVC = {
        '90x13"(FACTORY)': '±18"',
        '90x18"': '±23"',
        '90x24"': '±29"',
        '90x30"': '±35"',
        '90x36"': '±40.5"',
        '90x48"': '±53"',
        '90x60"': '±65"',
        '45x13"(FACTORY)': 'N/A',
        '45x18"': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '45x60"': 'N/A',
        '30x13"(FACTORY)': 'N/A',
        '30x18"': 'N/A',
        '30x24"': 'N/A',
        '30x30"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '30x60"': 'N/A',
        '22.5x13"(FACTORY)': 'N/A',
        '22.5x18"': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let threeAndHalfPVC = {
        '90x15"(FACTORY)': '±20"',
        '90x24"': '±29"',
        '90x30"': '±35"',
        '90x36"': '±41"',
        '90x48"': '±53"',
        '90x60"': '±65"',
        '45x15"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x15"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x15"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x36"': 'N/A'
    };

    let fourPVC = {
        '90x16"(FACTORY)': '±21.5"',
        '90x24"': '±29.5"',
        '90x30"': '±35.5"',
        '90x36"': '±41.5"',
        '90x48"': '±53.5"',
        '90x60"': '±65.5"',
        '45x16"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '45x60"': 'N/A',
        '30x16"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x30"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '30x60"': 'N/A',
        '22.5x16"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A',
        '22.5x60"': 'N/A'
    };

    let fivePVC = {
        '90x24"(FACTORY)': '±30.5"',
        '90x30"': '±36.5"',
        '90x36"': '±42.5"',
        '90x48"': '±54.5"',
        '90x60"': '±66.5"',
        '45x24"(FACTORY)': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '45x60"': 'N/A',
        '30x24"(FACTORY)': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '30x60"': 'N/A',
        '22.5x24"(FACTORY)': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A',
        '22.5x60"': 'N/A'
    };

    let sixPVC = {
        '90x30"(FACTORY)': '±37"',
        '90x36"': '±43"',
        '90x48"': '±55"',
        '90x60"': '±67"',
        '45x30"(FACTORY)': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '45x60"': 'N/A',
        '30x30"(FACTORY)': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '30x60"': 'N/A',
        '22.5x30"(FACTORY)': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A',
        '22.5x60"': 'N/A'
    };

    let threeQuartersFG = {
        '90x12"(FACTORY)': '±18.5"',
        '90x24"': '±30.5"',
        '90x36"': '±42.5"',
        '90x48"': '±54.5"',
        '90x60"': '±66.5"',
        '45x12"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x36"': 'N/A',
        '30x12"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '22.5x12"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x36"': 'N/A'
    };

    let oneFG = {
        '90x12"(FACTORY)': '±18.5"',
        '90x24"': '±30.5"',
        '90x36"': '±42.5"',
        '90x48"': '±54.5"',
        '90x60"': '±66.5"',
        '45x12"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x36"': 'N/A',
        '30x12"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '22.5x12"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x36"': 'N/A'
    };

    let oneAndQuarterFG = {
        '90x12"(FACTORY)': '±19"',
        '90x24"': '±31"',
        '90x36"': '±43"',
        '90x48"': '±55"',
        '90x60"': '±67"',
        '45x12"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x36"': 'N/A',
        '30x12"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '22.5x12"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x36"': 'N/A'
    };

    let oneAndHalfFG = {
        '90x12"(FACTORY)': '±19"',
        '90x24"': '±31"',
        '90x36"': '±43"',
        '90x48"': '±55"',
        '90x60"': '±67"',
        '45x12"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x36"': 'N/A',
        '30x12"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '22.5x12"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x36"': 'N/A'
    };

    let twoFG = {
        '90x12"(FACTORY)': '±19"',
        '90x24"': '±31"',
        '90x36"': '±43"',
        '90x48"': '±55"',
        '90x60"': '±67"',
        '45x12"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x36"': 'N/A',
        '30x12"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '22.5x12"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x36"': 'N/A'
    };

    let twoAndHalfFG = {
        '90x12"(FACTORY)': '±19.5"',
        '90x24"': '±31.5"',
        '90x36"': '±43.5"',
        '90x48"': '±55.5"',
        '90x60"': '±67.5"',
        '45x12"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x36"': 'N/A',
        '30x12"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '22.5x12"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x36"': 'N/A'
    };

    let threeFG = {
        '90x24"(FACTORY)': '±31.5"',
        '90x36"': '±43.5"',
        '90x48"': '±55.5"',
        '90x60"': '±67.5"',
        '45x12"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x36"': 'N/A',
        '30x12"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '22.5x12"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x36"': 'N/A'
    };

    let fourFG = {
        '90x24"(FACTORY)': '±32"',
        '90x36"': '±44"',
        '90x48"': '±56"',
        '90x60"': '±68"',
        '45x24"(FACTORY)': 'N/A',
        '45x36"': 'N/A',
        '30x24"(FACTORY)': 'N/A',
        '30x36"': 'N/A',
        '22.5x24"(FACTORY)': 'N/A',
        '22.5x36"': 'N/A'
    };

    let fiveFG = {
        '90x36"(FACTORY)': '±44"',
        '90x48"': '±57"',
        '90x60"': '±69',
        '45x36"(FACTORY)': 'N/A',
        '30x36"(FACTORY)': 'N/A',
        '22.5x36"(FACTORY)': 'N/A'
    };

    let sixFG = {
        '90x36"(FACTORY)': '±45.5',
        '90x48"': '±57.5',
        '90x60"': '±69.5',
        '45x36"(FACTORY)': 'N/A',
        '30x36"(FACTORY)': 'N/A',
        '22.5x36"(FACTORY)': 'N/A'
    };

    let threeQuartersEMT = {
        '90x4-1/2"(FACTORY)': '±7.5"',
        '45x4-1/2"(FACTORY)': 'N/A',
        '30x4-1/2"(FACTORY)': 'N/A',
        '22.5x4-1/2"(FACTORY)': 'N/A'
    };

    let oneEMT = {
        '90x5-3/4"(FACTORY)': '±9.5"',
        '45x5-3/4"(FACTORY)': 'N/A',
        '30x5-3/4"(FACTORY)': 'N/A',
        '22.5x5-3/4"(FACTORY)': 'N/A'
    };

    let oneAndQuarterEMT = {
        '90x7-1/4"(FACTORY)': '±12"',
        '90x24"': '±35.5"',
        '90x36"': '±47.5"',
        '90x48"': '±61"',
        '45x7-1/4"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x7-1/4"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x7-1/4"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let oneAndHalfEMT = {
        '90x8-1/4"(FACTORY)': '±13"',
        '90x24"': '±35.5"',
        '90x36"': '±47.5"',
        '90x48"': '±61"',
        '45x8-1/4"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x8-1/4"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x8-1/4"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let twoEMT = {
        '90x9-1/2"(FACTORY)': '±14"',
        '90x24"': '±36"',
        '90x30"': '±42"',
        '90x36"': '±48"',
        '90x48"': '±61.5"',
        '45x9-1/2"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x9-1/2"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x30"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x9-1/2"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let twoAndHalfEMT = {
        '90x10-1/2"(FACTORY)': '±18"',
        '90x24"': '±36"',
        '90x30"': '±42.5"',
        '90x36"': '±48"',
        '90x48"': '±62"',
        '45x10-1/2"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x10-1/2"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x10-1/2"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let threeEMT = {
        '90x13"(FACTORY)': '±20.5"',
        '90x24"': '±36"',
        '90x30"': '±42.5"',
        '90x36"': '±48.5"',
        '90x48"': '±62"',
        '45x13"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x13"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x30"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x13"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let threeAndHalfEMT = {
        '90x15"(FACTORY)': '±23.5"',
        '90x24"': '±36.5"',
        '90x30"': '±43"',
        '90x36"': '±48.5"',
        '90x48"': '±62"',
        '45x15"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x15"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x30"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x15"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    let fourEMT = {
        '90x16"(FACTORY)': '±25.5"',
        '90x24"': '±37"',
        '90x30"': '±43"',
        '90x36"': '±49"',
        '90x48"': '±62.5"',
        '45x16"(FACTORY)': 'N/A',
        '45x24"': 'N/A',
        '45x30"': 'N/A',
        '45x36"': 'N/A',
        '45x48"': 'N/A',
        '30x16"(FACTORY)': 'N/A',
        '30x24"': 'N/A',
        '30x30"': 'N/A',
        '30x36"': 'N/A',
        '30x48"': 'N/A',
        '22.5x16"(FACTORY)': 'N/A',
        '22.5x24"': 'N/A',
        '22.5x30"': 'N/A',
        '22.5x36"': 'N/A',
        '22.5x48"': 'N/A'
    };

    var conduitSize = this.getField(sizeField);
    var material = this.getField(materialField);

    if (conduitSize.value == "---") {
        this.getField(radiusField).setItems([""]);
    }
    else if (conduitSize.value == '3/4"' && material.value == 'GRC') {
        this.getField(radiusField).setItems(Object.keys(threeQuartersGRC));
    }
    else if (conduitSize.value == '1"' && material.value == 'GRC') {
        this.getField(radiusField).setItems(Object.keys(oneInchGRC));
    }
    else if (conduitSize.value == '1-1/4"' && material.value == 'GRC') {
        this.getField(radiusField).setItems(Object.keys(oneAndQuarterGRC));
    }
    else if (conduitSize.value == '1-1/2"' && material.value == 'GRC') {
        this.getField(radiusField).setItems(Object.keys(oneAndHalfGRC));
    }
    else if (conduitSize.value == '2"' && material.value == 'GRC') {
        this.getField(radiusField).setItems(Object.keys(twoGRC));
    }
    else if (conduitSize.value == '2-1/2"' && material.value == 'GRC') {
        this.getField(radiusField).setItems(Object.keys(twoAndHalfGRC));
    }
    else if (conduitSize.value == '3"' && material.value == 'GRC') {
        this.getField(radiusField).setItems(Object.keys(threeGRC));
    }
    else if (conduitSize.value == '3-1/2"' && material.value == 'GRC') {
        this.getField(radiusField).setItems(Object.keys(threeAndHalfGRC));
    }
    else if (conduitSize.value == '4"' && material.value == 'GRC') {
        this.getField(radiusField).setItems(Object.keys(fourGRC));
    }
    else if (conduitSize.value == '5"' && material.value == 'GRC') {
        this.getField(radiusField).setItems(Object.keys(fiveGRC));
    }
    else if (conduitSize.value == '6"' && material.value == 'GRC') {
        this.getField(radiusField).setItems(Object.keys(sixGRC));
    }
    else if (conduitSize.value == '3/4"' && material.value == 'PVC') {
        this.getField(radiusField).setItems(Object.keys(threeQuartersPVC));
    }
    else if (conduitSize.value == '1"' && material.value == 'PVC') {
        this.getField(radiusField).setItems(Object.keys(onePVC));
    }
    else if (conduitSize.value == '1-1/4"' && material.value == 'PVC') {
        this.getField(radiusField).setItems(Object.keys(oneAndQuarterPVC));
    }
    else if (conduitSize.value == '1-1/2"' && material.value == 'PVC') {
        this.getField(radiusField).setItems(Object.keys(oneAndHalfPVC));
    }
    else if (conduitSize.value == '2"' && material.value == 'PVC') {
        this.getField(radiusField).setItems(Object.keys(twoPVC));
    }
    else if (conduitSize.value == '2-1/2"' && material.value == 'PVC') {
        this.getField(radiusField).setItems(Object.keys(twoAndHalfPVC));
    }
    else if (conduitSize.value == '3"' && material.value == 'PVC') {
        this.getField(radiusField).setItems(Object.keys(threePVC));
    }
    else if (conduitSize.value == '3-1/2"' && material.value == 'PVC') {
        this.getField(radiusField).setItems(Object.keys(threeAndHalfPVC));
    }
    else if (conduitSize.value == '4"' && material.value == 'PVC') {
        this.getField(radiusField).setItems(Object.keys(fourPVC));
    }
    else if (conduitSize.value == '5"' && material.value == 'PVC') {
        this.getField(radiusField).setItems(Object.keys(fivePVC));
    }
    else if (conduitSize.value == '6"' && material.value == 'PVC') {
        this.getField(radiusField).setItems(Object.keys(sixPVC));
    }
    else if (conduitSize.value == '3/4"' && material.value == 'FG') {
        this.getField(radiusField).setItems(Object.keys(threeQuartersFG));
    }
    else if (conduitSize.value == '1"' && material.value == 'FG') {
        this.getField(radiusField).setItems(Object.keys(oneFG));
    }
    else if (conduitSize.value == '1-1/4"' && material.value == 'FG') {
        this.getField(radiusField).setItems(Object.keys(oneAndQuarterFG));
    }
    else if (conduitSize.value == '1-1/2"' && material.value == 'FG') {
        this.getField(radiusField).setItems(Object.keys(oneAndHalfFG));
    }
    else if (conduitSize.value == '2"' && material.value == 'FG') {
        this.getField(radiusField).setItems(Object.keys(twoFG));
    }
    else if (conduitSize.value == '2-1/2"' && material.value == 'FG') {
        this.getField(radiusField).setItems(Object.keys(twoAndHalfFG));
    }
    else if (conduitSize.value == '3"' && material.value == 'FG') {
        this.getField(radiusField).setItems(Object.keys(threeFG));
    }
    else if (conduitSize.value == '4"' && material.value == 'FG') {
        this.getField(radiusField).setItems(Object.keys(fourFG));
    }
    else if (conduitSize.value == '5"' && material.value == 'FG') {
        this.getField(radiusField).setItems(Object.keys(fiveFG));
    }
    else if (conduitSize.value == '6"' && material.value == 'FG') {
        this.getField(radiusField).setItems(Object.keys(sixFG));
    }
    else if (conduitSize.value == '3/4"' && material.value == 'EMT') {
        this.getField(radiusField).setItems(Object.keys(threeQuartersEMT));
    }
    else if (conduitSize.value == '1"' && material.value == 'EMT') {
        this.getField(radiusField).setItems(Object.keys(oneEMT));
    }
    else if (conduitSize.value == '1-1/4"' && material.value == 'EMT') {
        this.getField(radiusField).setItems(Object.keys(oneAndQuarterEMT));
    }
    else if (conduitSize.value == '1-1/2"' && material.value == 'EMT') {
        this.getField(radiusField).setItems(Object.keys(oneAndHalfEMT));
    }
    else if (conduitSize.value == '2"' && material.value == 'EMT') {
        this.getField(radiusField).setItems(Object.keys(twoEMT));
    }
    else if (conduitSize.value == '2-1/2"' && material.value == 'EMT') {
        this.getField(radiusField).setItems(Object.keys(twoAndHalfEMT));
    }
    else if (conduitSize.value == '3"' && material.value == 'EMT') {
        this.getField(radiusField).setItems(Object.keys(threeEMT));
    }
    else if (conduitSize.value == '3-1/2"' && material.value == 'EMT') {
        this.getField(radiusField).setItems(Object.keys(threeAndHalfEMT));
    }
    else if (conduitSize.value == '4"' && material.value == 'EMT') {
        this.getField(radiusField).setItems(Object.keys(fourEMT));
    }
}




