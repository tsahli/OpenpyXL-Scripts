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
            "KwikFit RT RMC",
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
    else if (conduitMaterial == 'IMC' || conduitMaterial == 'GRC') {
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
    else if (conduitMaterial == 'KiwkFit Comp EMT') {
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
    else if (conduitMaterial == 'KwikFit RT RMC') {
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
    else if (conduitMaterial == 'IMC' || conduitMaterial == 'GRC') {
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
    else if (conduitMaterial == 'KiwkFit Comp EMT') {
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
    else if (conduitMaterial == 'KwikFit RT RMC') {
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