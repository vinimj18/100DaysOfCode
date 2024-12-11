'''An orderly trail of ants is marching across the park picnic area.

It looks something like this:

..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..
But suddenly there is a rumour that a dropped chicken sandwich has been spotted 
on the ground ahead. The ants surge forward! Oh No, it's an ant stampede!!

Some of the slower ants are trampled, and their poor little ant bodies are 
broken up into scattered bits.

The resulting carnage looks like this:

...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t
Can you find how many ants have died?

Notes
When in doubt, assume that the scattered bits are from the same ant. 
e.g. 2 heads and 1 body = 2 dead ants, not 3'''


def dead_ant_count(ants):
    return max([ants.count('a'), ants.count('n'), ants.count('t')]) - ants.count('ant')


# Test cases
print(dead_ant_count("ant ant ant ant"), 0)
print(dead_ant_count(""), 0)
print(dead_ant_count(" "), 0)
print(dead_ant_count("ant anantt aantnt"), 2)
print(dead_ant_count("ant ant .... a nt"), 1)
print(dead_ant_count("ant anantt aantnt"), 2)
print(dead_ant_count("ant ant .... a nt"), 1)
print(dead_ant_count("antatn ant ant"), 1)
print(dead_ant_count("ant a ant anatttt"), 4)
print(dead_ant_count("antantantan"), 1)
print(dead_ant_count("aaaaannnntttt"), 5)
print(dead_ant_count("a n t"), 1)
print(dead_ant_count("... .. ..."), 0)
print(dead_ant_count("$$$ant..a"), 1)
print(dead_ant_count(".n..tt.n.nt..t.ntant..aaaaa..tn.na.aaat..n..tn.ntan.t"), 10)
print(dead_ant_count("ant ant .... a nt"), 1)
