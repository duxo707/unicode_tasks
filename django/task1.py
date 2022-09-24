import string
def func (num):
    s = str(bin(num))
    for i in range (1, len(s)):
        if s[i] == "1" and s[i-1] == "1":
            return True
    return False

print("enter two numbers:")
a = int(input())
print("enter another number:")
b = int(input())
di = {}
for i in range(a+1, b):
    di[i] = func(i)
print(di)