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
    if (inchFieldValue != "" && inchFieldValue.toString().indexOf('"') == -1) {
        inchValue.value = inchFieldValue + '"';
    }
}

function degreeMarks(degreeField) {
    var degreeFieldValue = this.getField(degreeField).value;
    var degreeValue = this.getField(degreeField);

    if (degreeFieldValue != "") {
        parsedValue = parseFloat(degreeFieldValue);
        if (parsedValue < 0 || isNaN(parsedValue)) {
            degreeValue.value = "ERROR";
        }
        else {
            degreeValue.value = parsedValue + '°';
        }
    }
}

function bendMark90(size, material, bendMark1, topLenT) {
    function roundToQuarter(num) {
        return (Math.round(num * 4) / 4).toFixed(2);
    }
    var conduitSize = this.getField(size).value;
    var conduitMaterial = this.getField(material).value;
    var bendMarkField = this.getField(bendMark1);
    var height = this.getField(topLenT).value;

    let deductTable = {
        // [DEDUCT, MINIMUM STUB LENGTH]
        '3/4"': {
            'RIGID': [9.875, 10.5],
            'EMT': [9.6875, 10.5],
            'IMC': [9.875, 10.5]
        },
        '1"': {
            'RIGID': [11.875, 12.5],
            'EMT': [11.8125, 12.5],
            'IMC': [11.875, 12.5]
        },
        '1-1/4"': {
            'RIGID': [14.375, 15],
            'EMT': [14.25, 15],
            'IMC': [14.375, 15]
        },
        '1-1/2"': {
            'RIGID': [15.375, 16],
            'EMT': [15.3125, 16],
            'IMC': [15.375, 16]
        },
        '2"': {
            'RIGID': [16.625, 17.25],
            'EMT': [16.75, 17.25],
            'IMC': [16.625, 17.25]
        },
        '2-1/2"': {
            'RIGID': [21.5, 23.75],
            'EMT': [21.5, 23.75],
            'IMC': [21.5, 23.75]
        },
        '3"': {
            'RIGID': [24.25, 26.5],
            'EMT': [24, 26.5],
            'IMC': [24.25, 26.5]
        },
        '3-1/2"': {
            'RIGID': [28.25, 30.75],
            'EMT': [27.75, 31.25],
            'IMC': [28.25, 30.75]
        },
        '4"': {
            'RIGID': [32.5, 35.25],
            'EMT': [32.25, 35.25],
            'IMC': [32.5, 35.25]
        }
    }

    if (conduitSize != '---' && conduitMaterial != '---' && height != '') {
        if (conduitMaterial.indexOf('EMT') !== -1) {
            var l = deductTable[conduitSize]['EMT'];
            var deduct = l[0];
            var minimumStubHeight = l[1];
        }
        else {
            var l = deductTable[conduitSize]['RIGID'];
            var deduct = l[0];
            var minimumStubHeight = l[1];
        }
        bendMark = parseFloat(height) - deduct;
        if (height < minimumStubHeight || roundToQuarter(bendMark) <= 0) {
            bendMarkField.value = "Minimum Distance Error";
        }
        else {
            bendMarkField.value = roundToQuarter(bendMark).toString() + '"';
        }
    }
    else {
        bendMarkField.value = "";
    }
}

function bendMarkKick(size, material, height, angle, bendmark2) {
    let stubThreeQuarterInch = {
        '15°': {
            '2"': '1.70',
            '4"': '9.43',
            '6"': '17.16',
            '8"': '24.88',
            '10"': '32.61',
            '12"': '40.34',
            '15"': '51.93',
            '18"': '63.52',
            '24"': '86.70',
            '36"': '133.07'
        },
        '22.5°': {
            '4"': '4.62',
            '6"': '9.85',
            '8"': '15.08',
            '10"': '20.30',
            '12"': '25.53',
            '15"': '33.37',
            '18"': '41.21',
            '24"': '56.89',
            '36"': '88.24'
        },
        '30°': {
            '6"': '6.06',
            '8"': '10.06',
            '10"': '14.06',
            '12"': '18.06',
            '15"': '24.06',
            '18"': '30.06',
            '24"': '42.06',
            '36"': '66.06'
        },
        '45°': {
            '6"': '1.99',
            '8"': '4.82',
            '10"': '7.65',
            '12"': '10.48',
            '15"': '14.72',
            '18"': '18.96',
            '24"': '27.45',
            '36"': '44.42'
        },
        '60°': {
            '10"': '4.25',
            '12"': '6.56',
            '15"': '10.02',
            '18"': '13.49',
            '24"': '20.42',
            '36"': '34.27'
        },
        '90°': {
            '12"': '2.38',
            '15"': '5.38',
            '18"': '8.38',
            '24"': '14.38',
            '36"': '26.38'
        },
    };

    let stubOneInch = {
        '15°': {
            '2"': '0.53',
            '4"': '8.26',
            '6"': '15.99',
            '8"': '23.71',
            '10"': '31.44',
            '12"': '39.17',
            '15"': '50.76',
            '18"': '62.35',
            '24"': '85.53',
            '36"': '131.90'
        },
        '22.5°': {
            '4"': '3.50',
            '6"': '8.73',
            '8"': '13.95',
            '10"': '19.18',
            '12"': '24.40',
            '15"': '32.24',
            '18"': '40.08',
            '24"': '55.76',
            '36"': '87.12'
        },
        '30°': {
            '4"': '0.91',
            '6"': '4.91',
            '8"': '8.91',
            '10"': '12.91',
            '12"': '16.91',
            '15"': '22.91',
            '18"': '28.91',
            '24"': '40.91',
            '36"': '64.91'
        },
        '45°': {
            '6"': '0.68',
            '8"': '3.50',
            '10"': '6.33',
            '12"': '9.16',
            '15"': '13.40',
            '18"': '17.65',
            '24"': '26.13',
            '36"': '43.10'
        },
        '60°': {
            '8"': '0.40',
            '10"': '2.71',
            '12"': '5.02',
            '15"': '8.49',
            '18"': '11.95',
            '24"': '18.88',
            '36"': '32.74'
        },
        '90°': {
            '12"': '0.21',
            '15"': '3.21',
            '18"': '6.21',
            '24"': '12.21',
            '36"': '24.21'
        },
    };

    let stubOneAndOneQuarterInch = {
        '15°': {
            '4"': '6.42',
            '6"': '14.15',
            '8"': '21.87',
            '10"': '29.60',
            '12"': '37.33',
            '15"': '48.92',
            '18"': '60.51',
            '24"': '83.69',
            '36"': '130.06'
        },
        '22.5°': {
            '4"': '1.79',
            '6"': '7.02',
            '8"': '12.24',
            '10"': '17.47',
            '12"': '22.70',
            '15"': '30.53',
            '18"': '38.37',
            '24"': '54.05',
            '36"': '85.41'
        },
        '30°': {
            '6"': '3.21',
            '8"': '7.21',
            '10"': '11.21',
            '12"': '15.21',
            '15"': '21.21',
            '18"': '27.21',
            '24"': '39.21',
            '36"': '63.21'
        },
        '45°': {
            '8"': '1.73',
            '10"': '4.56',
            '12"': '7.39',
            '15"': '11.63',
            '18"': '15.87',
            '24"': '24.36',
            '36"': '41.33'
        },
        '60°': {
            '10"': '0.77',
            '12"': '3.08',
            '15"': '6.55',
            '18"': '10.01',
            '24"': '16.94',
            '36"': '30.79'
        },
        '90°': {
            '15"': '0.75',
            '18"': '3.75',
            '24"': '9.75',
            '36"': '21.75'
        },
    };

    let stubOneAndOneHalfInch = {
        '15°': {
            '4"': '5.15',
            '6"': '12.88',
            '8"': '20.61',
            '10"': '28.33',
            '12"': '36.06',
            '15"': '47.65',
            '18"': '59.24',
            '24"': '82.42',
            '36"': '128.79'
        },
        '22.5°': {
            '4"': '0.66',
            '6"': '5.89',
            '8"': '11.11',
            '10"': '16.34',
            '12"': '21.56',
            '15"': '29.40',
            '18"': '37.24',
            '24"': '52.92',
            '36"': '84.28'
        },
        '30°': {
            '6"': '2.15',
            '8"': '6.15',
            '10"': '10.15',
            '12"': '14.15',
            '15"': '20.15',
            '18"': '26.15',
            '24"': '38.15',
            '36"': '62.15'
        },
        '45°': {
            '8"': '0.71',
            '10"': '3.54',
            '12"': '6.37',
            '15"': '10.61',
            '18"': '14.86',
            '24"': '23.34',
            '36"': '40.31'
        },
        '60°': {
            '12"': '2.08',
            '15"': '5.55',
            '18"': '9.01',
            '24"': '15.94',
            '36"': '29.80'
        },
        '90°': {
            '18"': '2.73',
            '24"': '8.73',
            '36"': '20.73'
        },
    };

    let stubTwoInch = {
        '15°': {
            '4"': '3.83',
            '6"': '11.56',
            '8"': '19.29',
            '10"': '27.02',
            '12"': '34.74',
            '15"': '46.33',
            '18"': '57.93',
            '24"': '81.11',
            '36"': '127.47'
        },
        '22.5°': {
            '6"': '4.79',
            '8"': '10.02',
            '10"': '15.24',
            '12"': '20.47',
            '15"': '28.31',
            '18"': '36.15',
            '24"': '51.83',
            '36"': '83.19'
        },
        '30°': {
            '6"': '1.13',
            '8"': '5.13',
            '10"': '9.13',
            '12"': '13.13',
            '15"': '19.13',
            '18"': '25.13',
            '24"': '37.13',
            '36"': '61.13'
        },
        '45°': {
            '10"': '2.52',
            '12"': '5.35',
            '15"': '9.60',
            '18"': '13.84',
            '24"': '22.32',
            '36"': '39.29'
        },
        '60°': {
            '12"': '0.97',
            '15"': '4.44',
            '18"': '7.90',
            '24"': '14.83',
            '36"': '28.68'
        },
        '90°': {
            '18"': '1.27',
            '24"': '7.27',
            '36"': '19.27'
        },
    };

    let stubTwoAndHalfInch = {
        '15°': {
            '10"': '25.10',
            '12"': '32.83',
            '15"': '44.42',
            '18"': '56.01',
            '24"': '79.19',
            '30"': '102.38',
            '36"': '125.56',
            '42"': '148.74',
            '48"': '171.92',
            '60"': '218.29'
        },
        '22.5°': {
            '10"': '13.46',
            '12"': '18.69',
            '15"': '26.53',
            '18"': '34.37',
            '24"': '50.04',
            '30"': '65.72',
            '36"': '81.40',
            '42"': '97.08',
            '48"': '112.76',
            '60"': '144.12'
        },
        '30°': {
            '10"': '7.25',
            '12"': '11.25',
            '15"': '17.25',
            '18"': '23.25',
            '24"': '35.25',
            '30"': '47.25',
            '36"': '59.25',
            '42"': '71.25',
            '48"': '83.25',
            '60"': '107.25'
        },
        '45°': {
            '12"': '3.03',
            '15"': '7.27',
            '18"': '11.52',
            '24"': '20.00',
            '30"': '28.49',
            '36"': '36.97',
            '42"': '45.46',
            '48"': '53.94',
            '60"': '70.91'
        },
        '60°': {
            '15"': '1.49',
            '18"': '4.95',
            '24"': '11.88',
            '30"': '18.81',
            '36"': '25.73',
            '42"': '32.66',
            '48"': '39.59',
            '60"': '53.45'
        },
        '90°': {
            '24"': '2.51',
            '30"': '8.51',
            '36"': '14.51',
            '42"': '20.51',
            '48"': '26.51',
            '60"': '38.51'
        },
    };

    let stubThreeInch = {
        '15°': {
            '10"': '23.94',
            '12"': '31.66',
            '15"': '43.25',
            '18"': '54.85',
            '24"': '78.03',
            '30"': '101.21',
            '36"': '124.39',
            '42"': '147.57',
            '48"': '170.76',
            '60"': '217.12'
        },
        '22.5°': {
            '10"': '12.51',
            '12"': '17.74',
            '15"': '25.58',
            '18"': '33.42',
            '24"': '49.09',
            '30"': '64.77',
            '36"': '80.45',
            '42"': '96.13',
            '48"': '111.81',
            '60"': '143.17'
        },
        '30°': {
            '10"': '6.31',
            '12"': '10.31',
            '15"': '16.31',
            '18"': '22.31',
            '24"': '34.31',
            '30"': '46.31',
            '36"': '58.31',
            '42"': '70.31',
            '48"': '82.31',
            '60"': '106.31'
        },
        '45°': {
            '12"': '1.90',
            '15"': '6.14',
            '18"': '10.38',
            '24"': '18.87',
            '30"': '27.36',
            '36"': '35.84',
            '42"': '44.33',
            '48"': '52.81',
            '60"': '69.78'
        },
        '60°': {
            '15"': '0.02',
            '18"': '3.48',
            '24"': '10.41',
            '30"': '17.34',
            '36"': '24.26',
            '42"': '31.19',
            '48"': '38.12',
            '60"': '51.98'
        },
        '90°': {
            '30"': '6.00',
            '36"': '12.00',
            '42"': '18.00',
            '48"': '24.00',
            '60"': '36.00'
        },
    };

    let stubThreeAndHalfInch = {
        '15°': {
            '10"': '21.82',
            '12"': '29.55',
            '15"': '41.14',
            '18"': '52.73',
            '24"': '75.92',
            '30"': '99.10',
            '36"': '122.28',
            '42"': '145.46',
            '48"': '168.65',
            '60"': '215.01'
        },
        '22.5°': {
            '10"': '10.53',
            '12"': '15.76',
            '15"': '23.60',
            '18"': '31.43',
            '24"': '47.11',
            '30"': '62.79',
            '36"': '78.47',
            '42"': '94.15',
            '48"': '109.83',
            '60"': '141.19'
        },
        '30°': {
            '10"': '4.30',
            '12"': '8.30',
            '15"': '14.30',
            '18"': '20.30',
            '24"': '32.30',
            '30"': '44.30',
            '36"': '56.30',
            '42"': '68.30',
            '48"': '80.30',
            '60"': '104.30'
        },
        '45°': {
            '15"': '3.88',
            '18"': '8.12',
            '24"': '16.61',
            '30"': '25.09',
            '36"': '33.58',
            '42"': '42.06',
            '48"': '50.55',
            '60"': '57.52'
        },
        '60°': {
            '18"': '0.84',
            '24"': '7.77',
            '30"': '14.7',
            '36"': '21.63',
            '42"': '28.55',
            '48"': '35.48',
            '60"': '49.34'
        },
        '90°': {
            '30"': '2.26',
            '36"': '8.26',
            '42"': '14.26',
            '48"': '20.26',
            '60"': '32.26'
        },
    };

    let stubFourInch = {
        '15°': {
            '10"': '18.61',
            '12"': '26.34',
            '15"': '37.93',
            '18"': '49.52',
            '24"': '72.71',
            '30"': '95.89',
            '36"': '119.07',
            '42"': '142.25',
            '48"': '165.43',
            '60"': '211.80'
        },
        '22.5°': {
            '10"': '7.48',
            '12"': '12.70',
            '15"': '20.54',
            '18"': '28.38',
            '24"': '44.06',
            '30"': '59.74',
            '36"': '75.42',
            '42"': '91.10',
            '48"': '106.77',
            '60"': '138.13'
        },
        '30°': {
            '10"': '1.24',
            '12"': '5.24',
            '15"': '11.24',
            '18"': '17.24',
            '24"': '29.24',
            '30"': '41.24',
            '36"': '53.24',
            '42"': '65.24',
            '48"': '77.24',
            '60"': '101.24'
        },
        '45°': {
            '15"': '0.63',
            '18"': '4.87',
            '24"': '13.35',
            '30"': '21.84',
            '36"': '30.32',
            '42"': '38.81',
            '48"': '47.29',
            '60"': '64.27'
        },
        '60°': {
            '24"': '4.20',
            '30"': '11.13',
            '36"': '18.06',
            '42"': '24.99',
            '48"': '31.91',
            '60"': '45.77'
        },
        '90°': {
            '36"': '3.75',
            '42"': '9.75',
            '48"': '15.75',
            '60"': '27.75'
        },
    };

    let stubRigidThreeQuarterInch = {
        '15°': {
            '2"': '1.21',
            '4"': '8.94',
            '6"': '16.67',
            '8"': '24.39',
            '10"': '32.12',
            '12"': '39.85',
            '15"': '51.44',
            '18"': '63.03',
            '24"': '86.21',
            '36"': '132.58'
        },
        '22.5°': {
            '4"': '4.22',
            '6"': '9.44',
            '8"': '14.67',
            '10"': '19.90',
            '12"': '25.12',
            '15"': '32.96',
            '18"': '40.80',
            '24"': '56.48',
            '36"': '87.84'
        },
        '30°': {
            '4"': '1.70',
            '6"': '5.70',
            '8"': '9.70',
            '10"': '13.70',
            '12"': '17.70',
            '15"': '23.70',
            '18"': '29.70',
            '24"': '41.70',
            '36"': '65.70'
        },
        '45°': {
            '6"': '1.68',
            '8"': '4.50',
            '10"': '7.33',
            '12"': '10.16',
            '15"': '14.40',
            '18"': '18.65',
            '24"': '27.13',
            '36"': '44.10'
        },
        '60°': {
            '8"': '1.65',
            '10"': '3.96',
            '12"': '6.27',
            '15"': '9.73',
            '18"': '13.20',
            '24"': '20.13',
            '36"': '33.98'
        },
        '90°': {
            '10"': '0.13',
            '12"': '2.13',
            '15"': '5.13',
            '18"': '8.13',
            '24"': '14.13',
            '36"': '26.13'
        },
    };

    let stubRigidOneInch = {
        '15°': {
            '2"': '0.19',
            '4"': '7.91',
            '6"': '15.64',
            '8"': '23.37',
            '10"': '31.10',
            '12"': '38.82',
            '15"': '50.41',
            '18"': '62.00',
            '24"': '85.19',
            '36"': '131.55'
        },
        '22.5°': {
            '4"': '3.25',
            '6"': '8.48',
            '8"': '13.71',
            '10"': '18.93',
            '12"': '24.16',
            '15"': '32.00',
            '18"': '39.84',
            '24"': '55.52',
            '36"': '86.87'
        },
        '30°': {
            '4"': '0.71',
            '6"': '4.71',
            '8"': '8.71',
            '10"': '12.71',
            '12"': '16.71',
            '15"': '22.71',
            '18"': '28.71',
            '24"': '40.71',
            '36"': '64.71'
        },
        '45°': {
            '6"': '0.54',
            '8"': '3.37',
            '10"': '6.20',
            '12"': '9.02',
            '15"': '13.27',
            '18"': '17.51',
            '24"': '25.99',
            '36"': '42.97'
        },
        '60°': {
            '8"': '0.30',
            '10"': '2.61',
            '12"': '4.92',
            '15"': '8.38',
            '18"': '11.85',
            '24"': '18.77',
            '36"': '32.63'
        },
        '90°': {
            '12"': '0.15',
            '15"': '3.15',
            '18"': '6.15',
            '24"': '12.15',
            '36"': '24.15'
        },
    };

    let stubRigidOneAndOneQuarterInch = {
        '15°': {
            '4"': '6.08',
            '6"': '13.80',
            '8"': '21.53',
            '10"': '29.26',
            '12"': '36.99',
            '15"': '48.58',
            '18"': '60.17',
            '24"': '83.35',
            '36"': '129.71'
        },
        '22.5°': {
            '4"': '1.55',
            '6"': '6.77',
            '8"': '12.00',
            '10"': '17.22',
            '12"': '22.45',
            '15"': '30.29',
            '18"': '38.13',
            '24"': '53.81',
            '36"': '85.17'
        },
        '30°': {
            '6"': '3.02',
            '8"': '7.02',
            '10"': '11.02',
            '12"': '15.02',
            '15"': '21.02',
            '18"': '27.02',
            '24"': '39.02',
            '36"': '63.02'
        },
        '45°': {
            '8"': '1.59',
            '10"': '4.42',
            '12"': '7.24',
            '15"': '11.49',
            '18"': '15.73',
            '24"': '24.21',
            '36"': '41.19'
        },
        '60°': {
            '10"': '0.66',
            '12"': '2.97',
            '15"': '6.44',
            '18"': '9.90',
            '24"': '16.83',
            '36"': '30.68'
        },
        '90°': {
            '15"': '0.68',
            '18"': '3.68',
            '24"': '9.68',
            '36"': '21.68'
        },
    };

    let stubRigidOneAndOneHalfInch = {
        '15°': {
            '4"': '4.79',
            '6"': '12.52',
            '8"': '20.24',
            '10"': '27.97',
            '12"': '35.70',
            '15"': '47.29',
            '18"': '58.88',
            '24"': '82.06',
            '36"': '128.43'
        },
        '22.5°': {
            '4"': '0.40',
            '6"': '5.63',
            '8"': '10.86',
            '10"': '16.08',
            '12"': '21.31',
            '15"': '29.15',
            '18"': '36.99',
            '24"': '52.67',
            '36"': '84.02'
        },
        '30°': {
            '6"': '1.95',
            '8"': '5.95',
            '10"': '9.95',
            '12"': '13.95',
            '15"': '19.95',
            '18"': '25.95',
            '24"': '37.95',
            '36"': '61.95'
        },
        '45°': {
            '8"': '0.57',
            '10"': '3.40',
            '12"': '6.23',
            '15"': '10.47',
            '18"': '14.71',
            '24"': '23.20',
            '36"': '40.17'
        },
        '60°': {
            '12"': '1.97',
            '15"': '5.44',
            '18"': '8.90',
            '24"': '15.83',
            '36"': '29.69'
        },
        '90°': {
            '18"': '2.67',
            '24"': '8.67',
            '36"': '20.67'
        },
    };

    let stubRigidTwoInch = {
        '15°': {
            '4"': '3.52',
            '6"': '11.25',
            '8"': '18.98',
            '10"': '26.71',
            '12"': '34.43',
            '15"': '46.02',
            '18"': '57.62',
            '24"': '80.80',
            '36"': '127.16'
        },
        '22.5°': {
            '6"': '4.61',
            '8"': '9.84',
            '10"': '15.06',
            '12"': '20.29',
            '15"': '28.13',
            '18"': '35.97',
            '24"': '51.65',
            '36"': '83.00'
        },
        '30°': {
            '6"': '1.02',
            '8"': '5.02',
            '10"': '9.02',
            '12"': '13.02',
            '15"': '19.02',
            '18"': '25.02',
            '24"': '37.02',
            '36"': '61.02'
        },
        '45°': {
            '10"': '2.51',
            '12"': '5.33',
            '15"': '9.58',
            '18"': '13.82',
            '24"': '22.30',
            '36"': '39.27'
        },
        '60°': {
            '12"': '1.02',
            '15"': '4.48',
            '18"': '7.95',
            '24"': '14.87',
            '36"': '28.73'
        },
        '90°': {
            '18"': '1.44',
            '24"': '7.44',
            '36"': '19.44'
        },
    };

    let stubRigidTwoAndHalfInch = {
        '15°': {
            '10"': '25.10',
            '12"': '32.83',
            '15"': '44.42',
            '18"': '56.01',
            '24"': '79.19',
            '30"': '102.38',
            '36"': '125.56',
            '42"': '148.74',
            '48"': '171.92',
            '60"': '218.29'
        },
        '22.5°': {
            '10"': '13.46',
            '12"': '18.69',
            '15"': '26.53',
            '18"': '34.37',
            '24"': '50.04',
            '30"': '65.72',
            '36"': '81.40',
            '42"': '97.08',
            '48"': '112.76',
            '60"': '144.12'
        },
        '30°': {
            '10"': '7.25',
            '12"': '11.25',
            '15"': '17.25',
            '18"': '23.25',
            '24"': '35.25',
            '30"': '47.25',
            '36"': '59.25',
            '42"': '71.25',
            '48"': '83.25',
            '60"': '107.25'
        },
        '45°': {
            '10"': '0.20',
            '12"': '3.03',
            '15"': '7.27',
            '18"': '11.52',
            '24"': '20.00',
            '30"': '28.49',
            '36"': '36.97',
            '42"': '45.46',
            '48"': '53.94',
            '60"': '70.91'
        },
        '60°': {
            '15"': '1.49',
            '18"': '4.95',
            '24"': '11.88',
            '30"': '18.81',
            '36"': '25.73',
            '42"': '32.66',
            '48"': '39.59',
            '60"': '53.45'
        },
        '90°': {
            '24"': '2.51',
            '30"': '8.51',
            '36"': '14.51',
            '42"': '20.51',
            '48"': '26.51',
            '60"': '38.51'
        },
    };

    let stubRigidThreeInch = {
        '15°': {
            '10"': '23.71',
            '12"': '31.43',
            '15"': '43.02',
            '18"': '54.62',
            '24"': '77.80',
            '30"': '100.98',
            '36"': '124.16',
            '42"': '147.34',
            '48"': '170.53',
            '60"': '216.89'
        },
        '22.5°': {
            '10"': '12.28',
            '12"': '17.51',
            '15"': '25.35',
            '18"': '33.19',
            '24"': '48.86',
            '30"': '64.54',
            '36"': '80.22',
            '42"': '95.90',
            '48"': '111.58',
            '60"': '142.94'
        },
        '30°': {
            '10"': '6.08',
            '12"': '10.08',
            '15"': '16.08',
            '18"': '22.08',
            '24"': '34.08',
            '30"': '46.08',
            '36"': '58.08',
            '42"': '70.08',
            '48"': '82.08',
            '60"': '106.08'
        },
        '45°': {
            '12"': '1.67',
            '15"': '5.91',
            '18"': '10.15',
            '24"': '18.64',
            '30"': '27.13',
            '36"': '35.61',
            '42"': '44.10',
            '48"': '52.58',
            '60"': '69.55'
        },
        '60°': {
            '18"': '3.25',
            '24"': '10.18',
            '30"': '17.11',
            '36"': '24.03',
            '42"': '30.96',
            '48"': '37.89',
            '60"': '51.75'
        },
        '90°': {
            '30"': '5.77',
            '36"': '11.77',
            '42"': '17.77',
            '48"': '23.77',
            '60"': '35.77'
        },
    };

    let stubRigidThreeAndHalfInch = {
        '15°': {
            '10"': '21.38',
            '12"': '29.11',
            '15"': '40.70',
            '18"': '52.29',
            '24"': '75.48',
            '30"': '98.66',
            '36"': '121.84',
            '42"': '145.02',
            '48"': '168.21',
            '60"': '214.57'
        },
        '22.5°': {
            '10"': '10.09',
            '12"': '15.32',
            '15"': '23.16',
            '18"': '30.99',
            '24"': '46.67',
            '30"': '62.35',
            '36"': '78.03',
            '42"': '93.71',
            '48"': '109.39',
            '60"': '140.75'
        },
        '30°': {
            '10"': '3.86',
            '12"': '7.86',
            '15"': '13.86',
            '18"': '19.86',
            '24"': '31.86',
            '30"': '43.86',
            '36"': '55.86',
            '42"': '67.86',
            '48"': '79.86',
            '60"': '103.86'
        },
        '45°': {
            '15"': '3.44',
            '18"': '7.68',
            '24"': '16.17',
            '30"': '24.65',
            '36"': '33.14',
            '42"': '41.62',
            '48"': '50.11',
            '60"': '67.08'
        },
        '60°': {
            '18"': '0.40',
            '24"': '7.33',
            '30"': '14.26',
            '36"': '21.19',
            '42"': '28.11',
            '48"': '35.04',
            '60"': '48.90'
        },
        '90°': {
            '30"': '1.82',
            '36"': '7.82',
            '42"': '13.82',
            '48"': '19.82',
            '60"': '31.82'
        },
    };

    let stubRigidFourInch = {
        '15°': {
            '10"': '18.36',
            '12"': '26.09',
            '15"': '37.68',
            '18"': '49.27',
            '24"': '72.46',
            '30"': '95.64',
            '36"': '118.82',
            '42"': '142.00',
            '48"': '165.18',
            '60"': '211.55'
        },
        '22.5°': {
            '10"': '7.23',
            '12"': '12.45',
            '15"': '20.29',
            '18"': '28.13',
            '24"': '43.81',
            '30"': '59.49',
            '36"': '75.17',
            '42"': '90.85',
            '48"': '106.52',
            '60"': '137.88'
        },
        '30°': {
            '10"': '0.99',
            '12"': '4.99',
            '15"': '10.99',
            '18"': '16.99',
            '24"': '28.99',
            '30"': '40.99',
            '36"': '52.99',
            '42"': '64.99',
            '48"': '76.99',
            '60"': '100.99'
        },
        '45°': {
            '15"': '0.38',
            '18"': '4.62',
            '24"': '13.10',
            '30"': '21.59',
            '36"': '30.07',
            '42"': '38.56',
            '48"': '47.04',
            '60"': '64.02'
        },
        '60°': {
            '24"': '3.95',
            '30"': '10.88',
            '36"': '17.81',
            '42"': '24.74',
            '48"': '31.66',
            '60"': '45.52'
        },
        '90°': {
            '36"': '3.50',
            '42"': '9.50',
            '48"': '15.50',
            '60"': '27.50'
        },
    };

    function roundToQuarter(num) {
        return (Math.round(num * 4) / 4).toFixed(2);
    }
    var size = this.getField(size).value;
    var material = this.getField(material).value;
    var height = this.getField(height).value;
    var angle = this.getField(angle).value;
    var bendMark2Field = this.getField(bendmark2);

    if (size != "---" && material != "---" && height != "" && angle != "") {
        if (size == '3/4"') {
            if (material.indexOf('EMT') !== -1) {
                bendMark2Field.value = stubThreeQuarterInch[angle][height] + '"';
            }
            else {
                bendMark2Field.value = stubRigidThreeQuarterInch[angle][height] + '"';
            }
        }
        else if (size == '1"') {
            if (material.indexOf('EMT') !== -1) {
                bendMark2Field.value = stubOneInch[angle][height] + '"';
            }
            else {
                bendMark2Field.value = stubRigidOneInch[angle][height] + '"';
            }
        }
        else if (size == '1-1/4"') {
            if (material.indexOf('EMT') !== -1) {
                bendMark2Field.value = stubOneAndOneQuarterInch[angle][height] + '"';
            }
            else {
                bendMark2Field.value = stubRigidOneAndOneQuarterInch[angle][height] + '"';
            }
        }
        else if (size == '1-1/2"') {
            if (material.indexOf('EMT') !== -1) {
                bendMark2Field.value = stubOneAndOneHalfInch[angle][height] + '"';
            }
            else {
                bendMark2Field.value = stubRigidOneAndOneHalfInch[angle][height] + '"';
            }
        }
        else if (size == '2"') {
            if (material.indexOf('EMT') !== -1) {
                bendMark2Field.value = stubTwoInch[angle][height] + '"';
            }
            else {
                bendMark2Field.value = stubRigidTwoInch[angle][height] + '"';
            }
        }
        else if (size == '2-1/2"') {
            if (material.indexOf('EMT') !== -1) {
                bendMark2Field.value = stubTwoAndHalfInch[angle][height] + '"';
            }
            else {
                bendMark2Field.value = stubRigidTwoAndHalfInch[angle][height] + '"';
            }
        }
        else if (size == '3"') {
            if (material.indexOf('EMT') !== -1) {
                bendMark2Field.value = stubThreeInch[angle][height] + '"';
            }
            else {
                bendMark2Field.value = stubRigidThreeInch[angle][height] + '"';
            }
        }
        else if (size == '3-1/2"') {
            if (material.indexOf('EMT') !== -1) {
                bendMark2Field.value = stubThreeAndHalfInch[angle][height] + '"';
            }
            else {
                bendMark2Field.value = stubRigidThreeAndHalfInch[angle][height] + '"';
            }
        }
        else if (size == '4"') {
            if (material.indexOf('EMT') !== -1) {
                bendMark2Field.value = stubFourInch[angle][height] + '"';
            }
            else {
                bendMark2Field.value = stubRigidFourInch[angle][height] + '"';
            }
        }
    } else { bendMark2Field.value = ""; }
}

function cutMarks(conduitSizeField, HeightField, topLenTField, degreeField, overallLenField, kickLenNField, cutLengthField) {
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

    function toRadians(angle) {
        return angle * (Math.PI / 180);
    }

    var conduitSize = this.getField(conduitSizeField).value;
    var height = this.getField(HeightField).value;
    var topLenT = this.getField(topLenTField).value;
    var degree = this.getField(degreeField).value;
    var overallLen = this.getField(overallLenField).value;
    var kickLenN = this.getField(kickLenNField).value;
    var cutLength = this.getField(cutLengthField);

    function shrink90(conduitSize) {
        // Radius = 8 * Conduit Size
        // DL = Radius * 1.57
        // Shrink = 2(Radius) - DL
        var radius = 8 * sizeToFloat(conduitSize);
        var developedLength = radius * 1.57;
        var shrink = (2 * radius) - developedLength;
        return shrink;
    }

    function shrinkKick(missingWidth, lengthN) {
        var shrink = parseFloat(lengthN) - parseFloat(missingWidth);
        return shrink;
    }

    if (conduitSize != "---" && height != "" && degree != "" && overallLen != "" && kickLenN == "") {
        var degreeInRadians = toRadians(parseFloat(degree));
        var missingWidth = parseInt(height) / Math.tan(degreeInRadians);
        var lengthN = Math.sqrt(parseInt(height) * parseInt(height) + missingWidth * missingWidth);
        var combinedShrink = parseFloat(shrink90(conduitSize)) + parseFloat(shrinkKick(missingWidth, lengthN));
        var cutMarks = parseFloat(overallLen) + parseFloat(topLenT) + parseFloat(combinedShrink);
        if (shrink90(conduitSize) <= 0 || shrinkKick(missingWidth, lengthN) <= 0) {
            cutLength.value = "Cut Not Possible";
        }
        else {
            cutLength.value = roundToEighth(cutMarks).toString() + '"';
        }
    }
    else if (conduitSize != "---" && height != "" && degree != "" && overallLen != "" && kickLenN != "") {
        var degreeInRadians = toRadians(parseFloat(degree));
        var missingWidth = parseInt(height) / Math.tan(degreeInRadians);
        var combinedShrink = parseFloat(shrink90(conduitSize)) + parseFloat(shrinkKick(missingWidth, parseFloat(kickLenN)));
        var cutMarks = parseFloat(overallLen) + parseFloat(topLenT) + parseFloat(combinedShrink);
        if (shrink90(conduitSize) <= 0 || shrinkKick(missingWidth, kickLenN) <= 0) {
            cutLength.value = "Cut Not Possible";
        }
        else {
            cutLength.value = roundToEighth(cutMarks).toString() + '"';
        }
    }
    else {
        cutLength.value = "";
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
    var fittingA1 = this.getField('TYPE 1 FITTING TYPE A').value;
    var fittingA2 = this.getField('TYPE 2 FITTING TYPE A').value;
    var fittingA3 = this.getField('TYPE 3 FITTING TYPE A').value;
    var fittingA4 = this.getField('TYPE 4 FITTING TYPE A').value;
    var fittingZ1 = this.getField('TYPE 1 FITTING TYPE Z').value;
    var fittingZ2 = this.getField('TYPE 2 FITTING TYPE Z').value;
    var fittingZ3 = this.getField('TYPE 3 FITTING TYPE Z').value;
    var fittingZ4 = this.getField('TYPE 4 FITTING TYPE Z').value;
    var fittingColor1 = this.getField('TYPE 1 FITTING COLOR').value;
    var fittingColor2 = this.getField('TYPE 2 FITTING COLOR').value;
    var fittingColor3 = this.getField('TYPE 3 FITTING COLOR').value;
    var fittingColor4 = this.getField('TYPE 4 FITTING COLOR').value;

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