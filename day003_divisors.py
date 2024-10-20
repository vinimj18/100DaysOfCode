# Create a function named divisors/Divisors that takes an integer n > 1 and
# returns an array with all of the integer's divisors(except for 1 and the
# number itself), from smallest to largest. If the number is prime return the
# string '(integer) is prime' (null in C#, empty table in COBOL) (use Either
# String a in Haskell and Result<Vec<u32>, String> in Rust).

# Examples:
# divisors(12) --> [2, 3, 4, 6]
# divisors(25) --> [5]
# divisors(13) --> "13 is prime"

########## MY SOLUTION ##########
def divisors(integer):
    divisors = []
    divisor = 1
    while divisor < integer-1:
        divisor += 1
        if integer % divisor == 0:
            divisors.append(divisor)
    return divisors if divisors != [] else f'{integer} is prime'


########## BEST SOLUTION ##########
def divisors2(integer):
    divisors = [divisor for divisor in range(
        2, integer) if integer % divisor == 0]
    return divisors if divisors != [] else f'{integer} is prime'


print(divisors(12))
print(divisors2(12))
print(divisors(25))
print(divisors2(25))
print(divisors(13))
print(divisors2(13))
