x = 75
def myfunc():
    x = x + 1 #bu funksiya daxilinde x deye bir variable yoxdur buna gore de ifade error ile neticelenecek
    print(x)

myfunc() #funksiya daxilinde error olduguna gore bu funksiyanin cagirilmasi da error ile neticelenecek
print(x)