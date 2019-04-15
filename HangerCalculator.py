#! python
# DewaltHangerCalculator.py
# Calculates hanger data and prepares label for mail merge

import openpyxl, pprint, time
excelSheetName = raw_input('Enter Name of Excel Sheet: ')

wb = openpyxl.load_workbook(excelSheetName + '.xlsx')
sheet = wb.get_sheet_by_name('Sheet1')

createdSheet = wb.create_sheet()
createdSheet.title = 'Total Strut'
createdAllthreadSheet = wb.create_sheet()
createdAllthreadSheet.title = 'Total Allthread Cuts'
createdAssemblySheet = wb.create_sheet()
createdAssemblySheet.title = 'Total Assemblies'
createdConcatSheet = wb.create_sheet()
createdConcatSheet.title = 'Print Me'

hangerListTotal = []
hangerList = []
strutLengthList = []
strutLengthListTotal = []
strutTypeList = []
strutTypeListTotal = []
allthreadList = []
allthreadListTotal = []
next_strut_length_row = 1
next_assembly_row = 1
next_allthread_row = 1
next_concat_row = 1

for row in range(4, sheet.max_row):
    hangerID = sheet['B' + str(row)].value
    hangerList.append(hangerID)

    strutType = sheet['D' + str(row)].value + ' ' + sheet['E' + str(row)].value
    strutTypeList.append(strutType)

    allthreadLength = sheet['F' + str(row)].value
    allthreadList.append(allthreadLength)

    topOfStrut = sheet['C' + str(row)].value
    areaName = sheet['A' + str(row)].value

    if allthreadLength not in allthreadListTotal:
        allthreadListTotal.append(allthreadLength)

    if strutType not in strutTypeListTotal:
        strutTypeListTotal.append(strutType)

    if hangerID not in hangerListTotal:
        hangerListTotal.append(hangerID)

        # Below creates the concatenation to be used in mail merge
    label = areaName + " Tag: " + hangerID + " TOU: " + topOfStrut + "                                       " + strutType + " // Allthread Length: " + allthreadLength
    createdConcatSheet.cell(column = 1, row = next_concat_row, value = label)
    next_concat_row += 1

        # Below prints total counts on each created sheet
for x in hangerListTotal:
    createdAssemblySheet.cell(column = 1, row = next_assembly_row, value = x)
    createdAssemblySheet.cell(column = 2, row = next_assembly_row, value = hangerList.count(x))
    next_assembly_row += 1

for x in strutTypeListTotal:
    createdSheet.cell(column = 1, row = next_strut_length_row, value = x)
    createdSheet.cell(column = 2, row = next_strut_length_row, value = strutTypeList.count(x))
    next_strut_length_row += 1

for x in allthreadListTotal:
    createdAllthreadSheet.cell(column = 1, row = next_allthread_row, value = x)
    createdAllthreadSheet.cell(column = 2, row = next_allthread_row, value = allthreadList.count(x))
    next_allthread_row += 1

wb.save(excelSheetName + '.xlsx')
print('------------------------Done------------------------')
time.sleep(5)
