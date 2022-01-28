#taking user input
x = int(input('Enter x: '))
y = int(input('Enter y: '))
z = int(input('Enter z: '))
n = int(input('Enter n: '))
#creating the list with list comprehensions
my_list = [[i, j, k] for i in range(x+1) for j in range(y+1) for k in range(z+1) if (i + j + k) != n] #storing the list if condition is true

print(my_list) #printing the result


#This is the other way without list comprehension

#list1 = []
#for i in range(x+1):
#   list2 = []
#   for j in range(y+1):
#       for k in range(z+1):
#           if (i + j + k) != n:
#               list2 = [i,j,k]
#               list1.append(list2)        
#print(list1)