from selenium import webdriver
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

game_link = 'https://store.playstation.com/pt-br/concept/10001850'
stores = ['pt-br', 'pt-pt', 'en-us']
games = {}

# Function that gets PSN prices based on the selected countries' stores


def get_psn_prices(game_link, stores):
    prices = {}
    for store in stores:
        # Adjusts the given link to match selected store
        driver.get(game_link[:30] + store + game_link[35:])

        # Gets the game name to be used as key on my returned dictionary
        game_name = wait.until(EC.visibility_of_element_located((
            By.CSS_SELECTOR, '.psw-m-b-5'))
        ).text

        # Gets the price of the game at each store
        price_element = wait.until(EC.visibility_of_element_located((
            By.CSS_SELECTOR, '.psw-t-title-m.psw-m-r-4'))
        )
        price = price_element.text
        # Creates a dictionary to be used as a value on my returned dictionary
        prices.update({store[3:].upper(): price})

    games.update({game_name: prices})
    return games


game_link_2 = 'https://store.playstation.com/pt-br/concept/209441'
get_psn_prices(game_link, stores)
get_psn_prices(game_link_2, stores)

print(games)
