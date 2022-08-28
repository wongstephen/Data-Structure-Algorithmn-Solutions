def solution(number):
    #edge case
    output = 0
    if number < 0:
        return 0
    for i in range(0,number):
        if i%5==0:
            output += i
        elif i%3==0:
            output += i
    return output