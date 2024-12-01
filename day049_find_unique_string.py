'''There is an array of strings. All strings contains similar letters except one. 
Try to find it!

find_uniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) # => 'BbBb'
find_uniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) # => 'foo'

Strings may contain spaces. Spaces are not significant, only non-spaces symbols 
matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.

This is the first kata in series:

Find the unique number 
Find the unique string (this kata)
Find The Unique'''


def find_uniq(arr):
    string_set = set(arr[0].lower()) if set(arr[0].lower()) == set(
        arr[1].lower()) else set(arr[2].lower())
    for string in arr:
        if set(string.lower()) != string_set:
            return string


# => 'BbBb'
print(find_uniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']))
print(find_uniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']))  # => 'foo'
