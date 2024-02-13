x = 5
print(x)
print(type(x))
X = 10
print(X)
num1 = 1 #valid
_num = 2 #valid
#1num = 2 #SyntaxError: invalid decimal literal

#Assigning Many Values to Multiple Variables
x, y, z = 4, 5, 6
print(x)
print(y)
print(z)

#Assigning One Value to Multiple Variables
x = y = 10
print(x)
print(y)

#Unpack a Collection
employees = ["salma", "sushma", "durga"]
x, y, z = employees
print(x)
print(y)
print(z)
print(x, y, z)
x = 23
print(x, y, z)