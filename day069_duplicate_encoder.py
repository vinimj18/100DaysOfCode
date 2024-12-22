'''The goal of this exercise is to convert a string to a new string where each 
character in the new string is "(" if that character appears only once in the 
original string, or ")" if that character appears more than once in the original 
string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" '''


def duplicate_encode(word):
    string = ''
    for l in word:
        if word.lower().count(l.lower()) > 1:
            string += ')'
        else:
            string += '('
    return string


def duplicate_encode2(word):
    return ''.join(')' if word.lower().count(l.lower()) > 1 else '(' for l in word)


# Test Cases
print(duplicate_encode("din"), "(((")
print(duplicate_encode2("din"), "(((")
print(duplicate_encode("Success"), ")())())", "should ignore case")
print(duplicate_encode2("Success"), ")())())", "should ignore case")
print(duplicate_encode("recede"), "()()()")
print(duplicate_encode2("recede"), "()()()")
print(duplicate_encode("(( @"), "))((")
print(duplicate_encode2("(( @"), "))((")
