'''Exercise 1: Email Validation
Write a Python function that checks if a given string is a valid email address. 

A valid email address for this exercise:

Starts with a sequence of alphanumeric characters.
Followed by an optional sequence of dot-separated alphanumeric characters.
Contains the @ symbol.
Followed by a domain name that includes at least one dot.
Example Input:
"example.email@domain.com"

Expected Output:
True

'''
import re


def valid_email(string):
    email_check = re.compile(r'^\w+\.?\w+@\w+\.\w+$')
    return bool(re.match(email_check, string))


print(valid_email('example.email@domain.com'))
print(valid_email('example.email@domaincom'))
