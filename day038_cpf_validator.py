'''Given a brazilian CPF as a string (it could have dots and dashes or just 
numbers)
Return true if number is valid and false if not.
The rules are described in this link: https://www.macoratti.net/alg_cpf.htm 
(in Portuguese)
'''


def validate_cpf(cpf):
    if '.' in cpf:
        cpf = cpf.replace('.', '').replace('-', '')
    if len(set(list(cpf))) == 1 or len(set(list(cpf))) == 11:
        return False
    multiplier = 10
    digits = 9
    while multiplier <= 11:
        sum_of_multiplication = sum(
            int(cpf[i]) * (multiplier - i) for i in range(digits))
        digit = 11 - (sum_of_multiplication %
                      11) if sum_of_multiplication >= 2 else 0
        if digit != int(cpf[digits]):
            return False
        multiplier += 1
        digits += 1
    return True


print(validate_cpf('12345678910'))
print(validate_cpf('123.456.789-10'))
print(validate_cpf('114.275.470-76'))
print(validate_cpf('111.444.777-05'))
print(validate_cpf('111.444.777-35'))
print(validate_cpf('24079022034'))
print(validate_cpf('36186876055'))
print(validate_cpf('00000000000'))

# 009451649 98
# 012345678 910

# cpf = '00945164998'
# sum_of_multiplication = sum(int(cpf[i]) * (10 - i) for i in range(9))
# print(sum_of_multiplication)
# print(sum_of_multiplication % 11)

# print(0*10+0*9+9*8+4*7+5*6+1*5+6*4+4*3+9*2)
