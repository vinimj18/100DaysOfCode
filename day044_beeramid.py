'''Let's pretend your company just hired your friend from college and paid you 
a referral bonus. Awesome! To celebrate, you're taking your team out to the 
terrible dive bar next door and using the referral bonus to buy, and build, t
he largest three-dimensional beer can pyramid you can. And then probably drink 
those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 
1 can in the top level, 
4 in the second, 
9 in the next, 
16, 
25...

Complete the beeramid function to return the number of complete levels of a beer 
can pyramid you can make, given the parameters of:

your referral bonus, and
the price of a beer can

For example:
beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16'''

import math


def beeramid(bonus, price):
    beers = bonus//price
    level = 0

    while beers >= (level+1) ** 2:
        level += 1
        beers -= level ** 2

    return level


print(beeramid(1500, 2), ' should === 12')
print(beeramid(5000, 3), ' should === 16')
print(beeramid(9, 2), ' should === 1')
print(beeramid(10, 2), 'should === 2')
print(beeramid(11, 2), 'should === 2')
print(beeramid(21, 1.5), 'should === 3')
print(beeramid(454, 5), ' should === 5')
print(beeramid(455, 5), ' should === 6')
print(beeramid(4, 4), ' should === 1')
print(beeramid(3, 4), ' should === 0')
print(beeramid(0, 4), ' should === 0')
print(beeramid(-1, 4), ' should === 0')
