'''
Description:
Given a string, you need to write a method that order every letter in this
string in ascending order.

Also, you should validate that the given string is not empty or null. If so, the
method should return:

"Invalid String!"
Notes
• the given string can be lowercase and uppercase.
• the string could include spaces or other special characters like '# ! or ,'.
Sort them based on their ASCII codes

Examples
"hello world" => " dehllloorw"
"bobby"       => "bbboy"
""            => "Invalid String!"
"!Hi You!"    => " !!HYiou"
Good luck! Hope you enjoy it
'''


def order_word(s):
    return ''.join(sorted(s)) if s else "Invalid String!"


# Test Cases
print(order_word("Hello, World!"), " !,HWdellloor")
print(order_word("bobby"), "bbboy")
print(order_word(""), "Invalid String!")
print(order_word("completesolution"), "ceeillmnooopsttu")
print(order_word("\"][@!#$*(^&%"), "!\"#$%&(*@[]^")
print(order_word("i\"d][@z!#$r(^a&world%"), "!\"#$%&(@[]^addilorrwz")
print(order_word(None), "Invalid String!")
