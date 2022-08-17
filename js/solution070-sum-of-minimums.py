# Sum of Minimums

def sum_of_minimums(list):
    output = 0
    for i in range(0,len(list)):
        output += min(list[i])
    return output