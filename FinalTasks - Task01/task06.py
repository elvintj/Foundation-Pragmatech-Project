#taking user input
n = int(input('Enter the positive integer: '))

def fun(n): #function
    """This function takes a positive integer n and prints integers from 1 to n
    without spaces"""
    for i in range(n):
        print(str(i+1), end = '') #end = '' is used to print all output in one line

#calling the function to execute
fun(n)