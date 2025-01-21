'''
SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, create a program that
returns true if the sum of the squares of each element in a is strictly greater
than the sum of the cubes of each element in b.

E.g.

array_madness([4, 5, 6], [1, 2, 3]) => True 
#because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!
'''


def array_madness(a, b):
    squared_a = 0
    for i in a:
        squared_a += i * i
    cubed_b = 0
    for j in b:
        cubed_b += j ** 3
    return squared_a > cubed_b
