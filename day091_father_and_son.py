'''This is the simple version of Shortest Code series. If you need some 
challenges, please try the challenge version

Task:
Every uppercase letter is Father, The corresponding lowercase letters is the Son.

Give you a string s, If the father and son both exist, keep them. If it is a 
separate existence, delete them. Return the result.

For example:

sc("Aab") should return "Aa"

sc("AabBc") should return "AabB"

sc("AaaaAaab") should return "AaaaAaa"(father can have a lot of son)

sc("aAAAaAAb") should return "aAAAaAA"(son also can have a lot of father ;-)'''


def sc2(s):
    new_s = ''
    for l in s:
        if l.isupper():
            if l.lower() in s:
                new_s += l
        else:
            if l.upper() in s:
                new_s += l
    return new_s


def sc(s):
    return ''.join(l for l in s if l.upper() in s and l.lower() in s)


print(sc("Aab"), "Aa")
print(sc("AabBc"), "AabB")
print(sc("SONson"), "SONson")
print(sc("FfAaTtHhEeRr"), "FfAaTtHhEeRr")
print(sc("SONsonfather"), "SONson")
print(sc("sonfather"), "")
print(sc("DONKEYmonkey"), "ONKEYonkey")
print(sc("monkeyDONKEY"), "onkeyONKEY")
print(sc("BANAna"), "ANAna")
