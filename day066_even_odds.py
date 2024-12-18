'''
This kata is about converting numbers to their binary or hexadecimal 
representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.'''


def evens_and_odds(n):
    return bin(n)[2:] if n % 2 == 0 else hex(n)[2:]


# Test cases
print(evens_and_odds(2), '10')
print(evens_and_odds(0), '0')
print(evens_and_odds(13), 'd')
print(evens_and_odds(47), '2f')
print(evens_and_odds(12800), '11001000000000')
print(evens_and_odds(8172381723), '1e71ca61b')
