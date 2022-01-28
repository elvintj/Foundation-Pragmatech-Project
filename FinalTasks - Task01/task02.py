#taking user input
n = int(input('Enter a positive integer between 1 and 100: '))
#odd
if n % 2 != 0:
    print(n, 'is Weird')
#even
else:
    if n >= 2 and n <= 5:
        print(n, 'is Not Weird')
    elif n >= 6 and n <= 20:
        print(n, 'is Weird')
    elif n > 20:
        print(n, 'is Not Weird')