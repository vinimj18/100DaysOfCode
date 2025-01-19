'''Find the total sum of internal angles (in degrees) in an n-sided simple
polygon. N will be greater than 2.'''


def angle(n):
    return (n-2)*180


# Test Cases
print(angle(3), 180)
print(angle(4), 360)
