'''There is an array with some numbers. All numbers are equal except for one. 
Try to find it!

find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique'''


def find_uniq(arr):
    return next(n for n in arr if n != (arr[0] if arr[0] == arr[1] else arr[2]))


print(find_uniq([1, 1, 1, 2, 1, 1]), 2)
print(find_uniq([0, 0, 0.55, 0, 0]), 0.55)
print(find_uniq([3, 10, 3, 3, 3]), 10)
print(find_uniq([5, 3, 3, 3, 3, 3]), 5)
print(find_uniq([8, 8, 8, 8, 8, 8, 8, 7]), 7)
