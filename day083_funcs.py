

def link_buildup(link, store):
    return link[:30] + store + link[35:]


def get_key_based_on_value(dictionary, value):
    return next((k for k, v in dictionary.items()
                 if v == value), None)


if __name__ == '__main__':
    test_dict = {'BRL': 179.94, 'EUR': 35.99, 'USD': 35.99}

    print(get_key_based_on_value(test_dict, 179.94))

    test_link = 'https://store.playstation.com/pt-pt/concept/10000333'
    print(link_buildup(test_link, 'en-uk'))
