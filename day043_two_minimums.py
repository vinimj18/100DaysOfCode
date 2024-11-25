'''Create a function that returns the sum of the two lowest positive numbers 
given an array of minimum 4 positive integers. No floats or non-positive 
integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should 
be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.'''

# Smaller steps:
# 1 - get the smallest number
# 2 - get the second smallest number
# 3 - sum them

# MY 1st SOLUTION


def sum_two_smallest_numbers(numbers):
    smallest_num = min(numbers)
    numbers.remove(smallest_num)
    second_smallest_num = min(numbers)
    return smallest_num + second_smallest_num

# Today's solution


def sum_two_smallest_numbers_2(numbers):
    return sum(sorted(numbers)[:2])


# TEST CASES
print(sum_two_smallest_numbers([5, 8, 12, 18, 22]))
print(sum_two_smallest_numbers_2([5, 8, 12, 18, 22]))
print(sum_two_smallest_numbers([7, 15, 12, 18, 22]))
print(sum_two_smallest_numbers_2([7, 15, 12, 18, 22]))
print(sum_two_smallest_numbers([25, 42, 12, 18, 22]))
print(sum_two_smallest_numbers_2([25, 42, 12, 18, 22]))
