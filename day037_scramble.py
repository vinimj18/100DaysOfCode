'''Complete the function scramble(str1, str2) that returns true if a portion of 
str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False'''


from collections import Counter


def scramble(s1, s2):
    for letter in s2:
        if letter in s1:
            s1 = s1.replace(letter, "", 1)
        else:
            return False
    return True


print(scramble('rkqodlw', 'world'))
print(scramble('cedewaraaossoqqyt', 'codewars'))
print(scramble('katas', 'steak'))
print(scramble('scriptjava', 'javascript'))
print(scramble('scriptingjava', 'javascript'))


def scramble2(s1, s2):
    count_s1 = Counter(s1)
    count_s2 = Counter(s2)
    for letter, count in count_s2.items():
        if count_s1[letter] < count:
            return False
    return True


print(scramble2('rkqodlw', 'world'))
print(scramble2('cedewaraaossoqqyt', 'codewars'))
print(scramble2('katas', 'steak'))
print(scramble2('scriptjava', 'javascript'))
print(scramble2('scriptingjava', 'javascript'))
