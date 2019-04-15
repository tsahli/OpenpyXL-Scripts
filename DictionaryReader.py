#! python

file = open("dictionary.txt", "r")

searchLetter = raw_input("Enter letters to search for: ")
oCounter = 0

for line in file:
    if searchLetter in line:
        oCounter = oCounter + 1
    else: continue

print("Number of words that contain " + searchLetter + " in dictionary: ")        
print(oCounter)
input('Press ENTER to exit')
        
        
