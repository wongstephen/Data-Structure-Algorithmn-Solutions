def correct(s):
    map = {
        "0":"O",
        "5":"S",
        "1":"I"
    }
    str = ''
    for char in s:
        if char in map:
            str += map[char]
        else:
            str += char
    return str