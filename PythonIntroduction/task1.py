value = '4r'
print('Type of value is:', type(value)) #task 1.1


if type(value) == int or type(value) == float: #task 1.2
    print("Entered value is a Number")
elif value.isdecimal():
    print("Entered value is a Number")
else:
    print("Entered value is not a Number")
    

word = input('Enter a word: ') #task 1.3
'''arr = list(word)
arr.reverse()
rWord = str(arr)
print(type(rWord))
'''
reversedWord = word[::-1]
print('Reversed word is:', reversedWord)


count = 0 #task 1.4
for i in word:
    if i.isupper():
        count +=1
print('Number of uppercase letters in a word is:', count)