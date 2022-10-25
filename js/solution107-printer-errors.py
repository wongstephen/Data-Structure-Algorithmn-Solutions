
def printer_error(s):
    output = 0
    numArr = map(lambda ltr: ord(ltr), (list(s)))
    for ltr in numArr:
        if ltr > 109:
            output += 1
    return f'{output}/{len(s)}'


s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
print(printer_error(s))
