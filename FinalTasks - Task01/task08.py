#taking user input
n = int(input('Enter the number of scores: '))
#taking n number of scores with list comprehension
my_list = [int(x) for x in input(f'Enter {n} number of scores seperated with a space: ').split()] #using split to take several input in one line
#sorting list in ascending order
my_list.sort()
#printing the second maximum score
print('The runner up score is:', my_list[-2])