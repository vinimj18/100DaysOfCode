'''Kata Task
I have a cat and a dog which I got as kitten / puppy.

I forget when that was, but I do know their current ages as catYears and dogYears.

Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:

Results are truncated whole numbers of "human" years
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that'''


def owned_cat_and_dog(cat_years, dog_years):
    times = []
    # Check human years based on animal years
    # created a list with inputs to avoid code repetition
    for i, age in enumerate([cat_years, dog_years]):
        time = 0
        # Check if more than 2 human years and divide based on animal index
        if age > 24:
            time = ((age - 24) // (4 if i == 0 else 5)) + 2
        elif age >= 24:
            time = 2
        elif age >= 15:
            time = 1
        else:
            time = 0
        # Add human years to the list created at the begining
        times.append(time)
    return times


# Test cases
print(owned_cat_and_dog(9, 7), (9, 7), [0, 0])

print(owned_cat_and_dog(15, 15), (15, 15), [1, 1])
print(owned_cat_and_dog(18, 21), (18, 21), [1, 1])
print(owned_cat_and_dog(19, 17), (19, 17), [1, 1])

print(owned_cat_and_dog(24, 24), (24, 24), [2, 2])
print(owned_cat_and_dog(25, 25), (25, 25), [2, 2])
print(owned_cat_and_dog(26, 26), (26, 26), [2, 2])
print(owned_cat_and_dog(27, 27), (27, 27), [2, 2])

print(owned_cat_and_dog(56, 64), (56, 64), [10, 10])
