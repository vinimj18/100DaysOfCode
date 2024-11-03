'''ROT13 is a simple letter substitution cipher that replaces a letter with the 
letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar 
cipher.

Create a function that takes a string and returns the string ciphered with 
Rot13. If there are numbers or special characters included in the string, 
they should be returned as they are. Only letters from the latin/english 
alphabet should be shifted, like in the original Rot13 "implementation".

Please note that using encode is considered cheating.'''

# Steps:
# 1- Iterate on the string,
# 2- If not string return input
# 3- else decode
# 4- create input list and decode list
# 5- Handle CAPS
# 6- Handle other charcters


def rot13(message):
    input = 'abcdefghijklmnopqrstuvwxyz'
    encoder = 'nopqrstuvwxyzabcdefghijklm'
    encoded_message = []

    for letter in message:
        if letter.lower() in input:
            for i, char in enumerate(input):
                if letter.lower() == char:
                    encoded_message += encoder[i]
        else:
            encoded_message += letter

    for j, item in enumerate(message):
        if item.isupper():
            encoded_message[j] = encoded_message[j].upper()

    return ''.join(encoded_message)


# print(rot13('vinicius'))
print(rot13('Vinicius!'))
print(rot13('ivavpvhf'))
print(rot13('123'))
