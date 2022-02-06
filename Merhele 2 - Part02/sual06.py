def outer_fun(a, b): 
    def inner_fun(c, d):
        return c + d #execution after call
    return inner_fun(a, b) #calling inner_fun to execute with same values passed

res = outer_fun(5, 10) # both functions will work and return 5 + 10 will be assigned to res
print(res) # we get 15