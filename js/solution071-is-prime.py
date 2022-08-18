def is_prime(n):
    prime = True
    for x in range(2, n-1):
        if n % x == 0:
            prime = False
            
    if prime == False or n == 1 or n == 0:
        return False
    else:
        return True