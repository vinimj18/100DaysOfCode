'''Complete the method/function so that it converts dash/underscore delimited 
words into camel casing. The first word within the output should be capitalized 
only if the original word was capitalized (known as Upper Camel Case, also often 
referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior"'''
import re


########## 1st Solution ##########
def to_camel_case(text):
    words = re.split('-|_', text)
    for i, word in enumerate(words):
        if i > 0:
            words[i] = word.capitalize()
    print(words)
    return ''.join(words)


print(to_camel_case("the-stealth-warrior"))
print(to_camel_case("The_Stealth_Warrior"))
print(to_camel_case("The_Stealth-Warrior"))


########## 2nd Solution ##########
def to_camel_case2(text):
    return text[0]+''.join(text.title()[1:].replace('-', ' ').replace('_', ' ').split(' '))


print(to_camel_case2("the-stealth-warrior"))
print(to_camel_case2("The_Stealth_Warrior"))
print(to_camel_case2("The_Stealth-Warrior"))
