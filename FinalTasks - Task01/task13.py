string = input('Enter string: ') #reading string 
swapped_string = '' #empty string to add swapped characters
for i in string: 
    if i.isupper(): #checking if the character is uppercase
        swapped_string += i.lower() 
    elif i.islower(): #checking if the character is lowercase
        swapped_string += i.upper()
    else: #keeping all other characters same except letters
        swapped_string += i

print('The swapped string is:', swapped_string)

#second way with string.swapcase() function
#print('The swapped string is:', string.swapcase())