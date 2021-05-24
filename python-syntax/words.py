def print_upper_words(words):
    """
    print_upper_words(["convert", "these", "to", "uppercase"])
    CONVERT
    THESE
    TO
    UPPERCASE
    """
    for word in words:
        print(word.upper())


def print_upper_words2(words):

    """
    Converts the words that starts with "e" or "E" in the list of words.
    print_upper_words2(["every", "elmo", "potential", "key"])
    EVERY
    ELMO
    """
    for word in words:
        if word.startswith("e") or word.startswith("E"):
            print(word.upper())



def print_upper_words3(words, must_start_with):
    """
    Print the uppercased words if they start with the given letters
    print_upper_words3(["print", "the", "words", "start", "with", "those", "letters"], must_start_with=["p", "w"])
    PRINT
    WORDS
    """

    for word in words:
        for letter in must_start_with:
            if word.startswith("letter"):
               print(word.upper())
