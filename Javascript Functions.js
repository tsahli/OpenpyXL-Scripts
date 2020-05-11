
function time() {
	var fld = this.getField("out");
	var empt = this.getField("out").value;
	if (empt == ""){
	fld.value = util.printd("hh:MM tt", new Date());
	}
} time();


function getSunday() {
var fld = this.getField("WeekEnding");
var empt = this.getField("WeekEnding").value;
if (empt == ""){
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
	fld.value = util.printd("mm/dd/yy",new Date());
	}
} date();

function addBusinessDays(startingDateField, resultingDateField, daysToAdjust) {
    var startingDate = new Date();
    var counter = 0;
    while (daysToAdjust > 0) {
        var tmp = new Date();
        tmp.setDate(startingDate.getDate() + counter++);
        switch(tmp.getDay()) {
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
    words.value = words.value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
} toTitleCase();


function toAllCaps() {
	var words = this.getField("Name");
    words.value = words.value.replace(/\w\S*/g, function(txt){return txt.toUpperCase();});
} toAllCaps();


function mailTo() {
var cToAddr = this.getField("SendToEmail").value;
var name = this.getField("EmployeeName").value;
var weekending = this.getField("WeekEnding").value;
var cSubLine = "Timecard from " + name;
var cBody = "Week ending: " + weekending;

this.mailDoc({bUI: true, cTo: cToAddr, cSubject: cSubLine, cMsg: cBody});
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
    }
}

//CONDUIT SIZE - MATERIAL - RADIUS - WRAPPING
function setDesc(descField, sizeField, materialField, radiusField, customWrapField) {
    var desc = this.getField(descField).value;
    var size = this.getField(sizeField).value;
    var material = this.getField(materialField).value;
    var radius = this.getField(radiusField).value;
    var customWrap = this.getField(customWrapField).value;
    
    desc = "";
    
    if (size == "" || size == "---") {
        desc = "PLEASE FILL OUT ALL DETAILS, THEN SELECT A QTY";
    }
    else if (customWrap == "") {
        desc = size + " - " + material + " - " + radius + " - FULL WRAP";
    }
    else {
        desc = size + " - " + material + " - " + radius + " - " + customWrap;
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




