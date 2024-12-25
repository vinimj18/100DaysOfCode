'''
Can Santa save Christmas?
Oh no! Santa's little elves are sick this year. He has to distribute the 
presents on his own.

But he has only 24 hours left. Can he do it?

Your Task:
You will get an array as input with time durations as string in the following 
format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a 
present. Determine whether he can do it in 24 hours or not. In case the time 
required to deliver all of the presents is exactly 24 hours, Santa can complete 
the delivery ;-) .
'''


def determine_time(arr):
    # Seconds in 24h
    total_seconds = 24*60*60
    # Getting the amount of seconds in the given times and subtracting from 24h
    for time in arr:
        total_seconds -= int(time.split(':')[0])*3600 + \
            int(time.split(':')[1])*60+int(time.split(':')[2])
    # Returning True if there still time left in the 24h
    return total_seconds >= 0


# Test cases
print(determine_time(["01:00:00", "02:30:00"]), True)
print(determine_time(["01:00:00", "02:30:00", "22:00:00"]), False)
print(determine_time(["12:00:00", "12:00:00"]), True)
print(determine_time([]), True)
