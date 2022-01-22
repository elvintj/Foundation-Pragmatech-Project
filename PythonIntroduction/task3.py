arr=['Samir','Mehemmed','Qurbani','Vesile','Qurbaneli','Memmedaga','Nurlan','Leman','Emil','Gulshen']

numOfWords = len(arr)
print('Number of words in the array is:', numOfWords) #task 3.1


numOfLetters = 0
for i in arr:
    numOfLetters += len(i)
    
print('Number of letters in the array is:', numOfLetters) #task 3.2


maxLength = 0
for i in arr:
    if len(i) > maxLength:
        maxLength = len(i)
    
for i in arr:
    if len(i) == maxLength:
        print('Longest word in the array is {} and its index is {}:' .format(i, arr.index(i))) #task 3.3
    
for i in arr:
    for j in i:
        if j == 'm':
            print('Words that contain the letter "m" :', i) #task 3.4
            break
        
        
copiedArray = arr.copy()
for i in copiedArray:
    arr.append(i)
    
print('New array after copied and added to itself:', arr) #task 3.5
    
