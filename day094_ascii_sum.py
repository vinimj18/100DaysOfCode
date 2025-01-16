'''
You'll be given a string, and have to return the sum of all characters as an
int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291
'''


def uni_total(s):
    return sum(ord(x) for x in s)


#  Test Cases
print(uni_total("a"), 97)
print(uni_total("b"), 98)
print(uni_total("c"), 99)

print(uni_total(""), 0)

print(uni_total("aaa"), 291)
print(uni_total("abc"), 294)

print(uni_total("Mary Had A Little Lamb"), 1873)
print(uni_total("Mary had a little lamb"), 2001)
print(uni_total("CodeWars rocks"), 1370)
print(uni_total("And so does Strive"), 1661)
