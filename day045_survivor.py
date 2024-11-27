def josephus_survivor(n, k):
    players = [*(range(1, n+1))]
    kill = k
    while len(players) > 1:
        if kill <= len(players):
            del players[kill-1]
            kill += (k - 1)
        else:
            kill = kill - len(players)
    return players[0]


print(josephus_survivor(7, 3), 4)
print(josephus_survivor(11, 19), 10)
print(josephus_survivor(1, 300), 1)
print(josephus_survivor(14, 2), 13)
print(josephus_survivor(100, 1), 100)
