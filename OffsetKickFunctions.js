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

    function stubBendMarks(size, angle, height) {
        if (size == '3/4"') {
            return stubThreeQuarterInch[angle][height];
        }
    }

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
            cutMarks.value = stubBendMarks('3/4"', degree, height);
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
    else if (radioValue == "OFFSET" && height != "" && overallLen.value != "" && degree != "" && topLen != "" && bottomLen != "") {
        // CANT RELIABLY CALCULATE CUTS WHEN GIVEN TOP & BOTTOM LEN
        cutMarks.value = "CANNOT CALCULATE";
    }
    else if (radioValue == "OFFSET" && height != "" && overallLen.value != "" && degree != "") {
        degreeInRadians = toRadians(parseInt(degree));
        var missingWidth = parseInt(height) / Math.tan(degreeInRadians);
        var hypotenuse = Math.sqrt(parseInt(height)*parseInt(height) + missingWidth*missingWidth);
        var shrink = hypotenuse - missingWidth;
        cutMarks.value = roundToQuarter(shrink + parseInt(overallLen.value)) + '"';
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
