'''Given an array (arr) as an argument complete the function countSmileys that 
should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a 
nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either 
) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input 
(input will always be an array). Order of the face (eyes, nose, mouth) elements 
will always be the same.'''

# Steps:
# 1- Create the RegExp
# 2- iterate list items to see if it matches the Regexp
# 3- return count

import re


def count_smileys(arr):
    smiley = r'[;:][-~]?[)D]'
    count = 0
    for item in arr:
        if re.findall(smiley, item) != []:
            count += 1
    return count


def count_smileys2(arr):
    return sum(1 for item in arr if re.findall(r'[;:][-~]?[)D]', item) != [])


print(count_smileys([]), 0)
print(count_smileys2([]), 0)
print(count_smileys([':)', ':(', ':D', ':O', ':;']), 2)
print(count_smileys2([':)', ':(', ':D', ':O', ':;']), 2)
print(count_smileys([':D', ':~)', ';~D', ':)']), 4)
print(count_smileys2([':D', ':~)', ';~D', ':)']), 4)
print(count_smileys([';]', ':[', ';*', ':$', ';-D']), 1)
print(count_smileys2([';]', ':[', ';*', ':$', ';-D']), 1)
