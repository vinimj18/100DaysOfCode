'''Description:
Remember the game 2048? http://gabrielecirulli.github.io/2048/

The main part of this game is merging identical tiles in a row.

Implement a function that models the process of merging all of the tile values 
in a single row.
This function takes the array line as a parameter and returns a new array with 
the tile values from line slid towards the front of the array (index 0) and 
merged.
A given tile can only merge once.
Empty grid squares are represented as zeros.
Your function should work on arrays containing arbitrary number of elements.
Examples
merge([2,0,2,2])  -->  [4,2,0,0]
Another example with repeated merges:

merge([4,4,8,16])  -->  [8,8,16,0]
merge([8,8,16,0])  -->  [16,16,0,0]
merge([16,16,0,0]) -->  [32,0,0,0]'''


def merge(line):
    # saving original line length
    original_size = len(line)
    # remove 0's
    line = [item for item in line if item != 0]
    # sum items with same value
    for i, n in enumerate(line):
        print(line, n)
        if i == len(line)-1:
            pass
        elif line[i] == line[i+1]:
            line[i] += line[i+1]
            line.pop(i+1)
            print(line)
    # readd 0's
    zeros_to_add = original_size - len(line)
    for _ in range(zeros_to_add):
        line.append(0)
    return line


# print(merge([2, 0, 2, 2]), [4, 2, 0, 0])
# print(merge([2, 0, 2, 4]), [4, 4, 0, 0])
# print(merge([0, 0, 2, 2]), [4, 0, 0, 0])
print(merge([0, 32, 0, 2, 16, 0, 2, 16, 16, 8, 32, 16]),
      [32, 2, 16, 2, 32, 8, 32, 16, 0, 0, 0, 0])
