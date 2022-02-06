def outer_fun(a, b):
    def inner_fun(c, d):
        return c + d
    
    return inner_fun(a, b) #calling inner_fun to execute with same values passed
    return a #this return statement will be skipped

result = outer_fun(5, 10) #result = 15
print(result) # 15