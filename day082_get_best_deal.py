from day080_get_psn_prices import get_psn_prices, get_game_name
from day081_get_currency import get_conversion_rate


def get_prices_and_convert_it(link: str, stores: dict, source: str):

    # Gets the prices on the different stores
    original_prices = get_psn_prices(link, stores)

    # Converts the prices and store them in a new dict
    converted_prices = {}

    for currency, price in original_prices.items():
        if currency == source:
            rate = 1
        else:
            rate = get_conversion_rate(source, currency)

        converted_price = round((price / rate), 2)
        converted_prices.update({currency: converted_price})

    # Store the lowest price after conversion
    best_price = min(converted_prices.values())

    # Get the original currency string from the best price
    currency_str = next((curr for curr, p in converted_prices.items()
                         if p == best_price), None)

    # Get the country store which has the best price
    country = next((c for c, p in stores.items()if p == currency_str), 'Error')

    # Rebuild the store link which has the best price
    final_link = link[:30] + str(country) + link[35:]

    # Gets the game name
    game_name = get_game_name(link)

    # Build the final text to be returned
    return_text = f'The best deal for {game_name} is on: \n' \
        f'{country[3:].upper()} store for {source} {best_price}.\n' \
        f'{final_link}'

    return return_text


if __name__ == '__main__':

    stores = {
        'pt-br': 'BRL',
        'pt-pt': 'EUR',
        'en-us': 'USD'
    }
    source = 'EUR'

    game_link = 'https://store.playstation.com/pt-pt/concept/10000333'

    print(get_prices_and_convert_it(game_link, stores, source))
