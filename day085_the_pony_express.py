'''A History Lesson
The Pony Express was a mail service operating in the US in 1859-60.

Pony Express
It reduced the time for messages to travel between the Atlantic and Pacific 
coasts to about 10 days, before it was made obsolete by the transcontinental 
telegraph.

How it worked
There were a number of stations, where:

The rider switched to a fresh horse and carried on, or
The mail bag was handed over to the next rider
Kata Task
stations is a list/array of distances (miles) from one station to the next along
the Pony Express route.

Implement the riders method/function, to return how many riders are necessary to
get the mail from one end to the other.

NOTE: Each rider travels as far as he can, but never more than 100 miles.

Good Luck.
DM.

See also

The Pony Express
The Pony Express (missing rider)'''


def riders(stations):
    distance = 0
    riders_count = 1
    for station in stations:
        if distance + station > 100:
            riders_count += 1
            distance = station
        else:
            distance += station
    return riders_count


# Test Cases
# print(riders([18, 15]), 1)
# print(riders([43, 23, 40, 13]), 2)
# print(riders([33, 8, 16, 47, 30, 30, 46]), 3)
# print(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]), 4)
print(riders([12, 9, 31, 49, 29, 41]), 3)
print(riders([44, 18, 30, 8, 30, 47, 48, 30, 19, 8, 24, 22, 26, 8, 19]), 5)
print(riders([40, 32, 35, 43, 45, 7, 7, 10, 26, 22, 10, 31, 10, 43]), 5)
print(riders([12, 14, 33, 47, 13, 43, 20, 50, 38]), 4)
