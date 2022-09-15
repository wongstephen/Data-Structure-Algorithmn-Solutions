    word_length = []
    for length in s.split(' '):
        word_length.append(len(length))
    return min(word_length)