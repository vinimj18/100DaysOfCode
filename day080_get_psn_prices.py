from selenium import webdriver
import re
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-webgpu")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--enable-unsafe-swiftshader")


driver = webdriver.Chrome(options=chrome_options)
wait = WebDriverWait(driver, 10)


# Function that gets PSN prices based on the selected countries' stores

def get_psn_prices(game_link: str, stores: dict):
    prices = {}
    for store, currency in stores.items():

        # Adjusts the given link to match selected store
        driver.get(game_link[:30] + store + game_link[35:])

        # Gets the price of the game at each store
        price_element = wait.until(EC.visibility_of_element_located((
            By.CSS_SELECTOR, '.psw-t-title-m.psw-m-r-4'))
        )
        price = price_element.text.replace(',', '.')
        float_prices = float(re.sub(r'[^\d.]', '', price))

        # Creates a dictionary to be used as a value on my returned dictionary
        prices.update({currency: float_prices})

    return prices


def get_game_name(game_link):
    # Adjusts the given link to match selected store
    driver.get(game_link)

    # Gets the game name to be used as key on my returned dictionary
    game_name = wait.until(EC.visibility_of_element_located((
        By.CSS_SELECTOR, '.psw-m-b-5'))
    ).text

    return game_name


if __name__ == '__main__':
    stores = {
        'pt-br': 'BRL',
        'pt-pt': 'EUR',
        'en-us': 'USD'
    }
    game_link = 'https://store.playstation.com/pt-pt/concept/10000333'

    print(get_psn_prices(game_link, stores))
    print(get_game_name(game_link))
