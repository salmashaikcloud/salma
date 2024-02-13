x = 5
def myFun():
    print(x)
myFun()
print(x)

def myFun():
    print("myFun start")
    x = 10
    print(x)
    print("myFun end")
myFun()
print(x)

def globalFun():
    print("globalFun start")
    #global x = 7 # SyntaxError: invalid syntax
    global x 
    x = 7
    print(x)
    print("globalFun end")
globalFun()
print(x)