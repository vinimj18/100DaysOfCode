from robot.api.deco import library, keyword
from robot.libraries.BuiltIn import BuiltIn


@library
class Shop():

    def __init__(self):
        self.selLib = None

    def _get_selenium_library(self):
        if not self.selLib:
            self.selLib = BuiltIn().get_library_instance("SeleniumLibrary")
        return self.selLib

    @keyword
    def hello_world(self):
        print('Hello')

    @keyword
    def add_items_to_cart_and_checkout(self, listOfProducts):
        print("I'm in the fuction")
        self.selLib = self._get_selenium_library()
        print("I got the library")
        productTitles = self.selLib.get_webelements(
            "xpath://h4[@class='card-title']")
        print("I got the product titles", productTitles)
        i = 1
        for productTitle in productTitles:
            print(productTitle.text)
            if productTitle.text in listOfProducts:
                self.selLib.click_button(
                    f"xpath:(//*[@class='card-footer'])[{i}]/button")
            i += 1
