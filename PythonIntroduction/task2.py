sum1 = sum2 = 0

for i in range(1, 500):
    if i >= 10 and i <=99:
        sum1 += i
    elif i >= 100 and i <= 500:
        sum2 += i
        
print('Sum of two-digit numbers in the range 1-500 is:', sum1)
print('Sum of three-digit numbers in the range 1-500 is:', sum2)


