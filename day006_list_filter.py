'''In this kata you will create a function that takes a list of non-negative 
integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]'''


#################
# MY 1st SOLUTION


def filter_list(list):
    filtered_list = []
    for item in list:
        if isinstance(item, int):
            filtered_list.append(item)
    return filtered_list


#################
# MY 2nd SOLUTION


def filter_list2(list):
    return [item for item in list if isinstance(item, int)]


print(filter_list([1, 2, 'a', 'b']))
print(filter_list2([1, 2, 'a', 'b']))
print(filter_list([1, 'a', 'b', 0, 15]))
print(filter_list2([1, 'a', 'b', 0, 15]))
print(filter_list([1, 2, 'aasf', '1', '123', 123]))
print(filter_list2([1, 2, 'aasf', '1', '123', 123]))
