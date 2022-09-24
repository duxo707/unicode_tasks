import string
def func (num):
    s = str(bin(num))
    for i in range (1, len(s)):
        if s[i] == "1" and s[i-1] == "1":
            return True
    return False

print("enter a number:")
a, b = map(int, input().split(", "))
di = {}
for i in range(a+1, b):
    di[i] = func(i)
print(di)
