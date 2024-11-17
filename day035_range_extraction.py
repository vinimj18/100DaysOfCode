'''A format for expressing an ordered list of integers is to use a comma 
separated list of either individual integers or a range of integers denoted by 
the starting integer separated from the end integer in the range by a dash, '-'. 
The range includes all integers in the interval including both endpoints. It is 
not considered a range unless it spans at least 3 numbers. 
For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order 
and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
# returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"'''


def solution(args):
    ranged_list = []
    internal_range = []

    for i, arg in enumerate(args):
        if i == 0:
            internal_range.append(arg)
        elif arg == args[i - 1] + 1:
            internal_range.append(arg)
        else:
            ranged_list.append(internal_range)
            internal_range = [arg]

        if i == len(args) - 1:  # Add the last range at the end of the loop
            ranged_list.append(internal_range)

    final_list = []
    for lst in ranged_list:
        if len(lst) <= 2:
            for item in lst:
                final_list.append(str(item))
        else:
            final_list.append(f'{min(lst)}-{max(lst)}')

    return ','.join(final_list)


###### Test cases ######

print(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]),
      '-6,-3-1,3-5,7-11,14,15,17-20')
print(solution([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20]),
      '-3--1,2,10,15,16,18-20')
