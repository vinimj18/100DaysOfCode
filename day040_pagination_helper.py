'''For this exercise you will be strengthening your page-fu mastery. You will 
complete the PaginationHelper class, which is a utility class helpful for 
querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating 
how many items will be allowed per each page. The types of values contained 
within the collection/array are not relevant.

The following are some examples of how this class is used:

helper = PaginationHelper(['a','b','c','d','e','f'], 4)
helper.page_count() # should == 2
helper.item_count() # should == 6
helper.page_item_count(0) # should == 4
helper.page_item_count(1) # last page - should == 2
helper.page_item_count(2) # should == -1 since the page is invalid

# page_index takes an item index and returns the page that it belongs on
helper.page_index(5) # should == 1 (zero based index)
helper.page_index(2) # should == 0
helper.page_index(20) # should == -1
helper.page_index(-10) # should == -1 because negative indexes are invalid
'''
# TODO: complete this class
import math


class PaginationHelper:

    # The constructor takes in an array of items and an integer indicating
    # how many items fit within a single page
    def __init__(self, collection, items_per_page):
        self.collection = collection
        self.items_per_page = items_per_page

    # returns the number of items within the entire collection
    def item_count(self):
        return len(self.collection)

    # returns the number of pages
    def page_count(self):
        return math.ceil(self.item_count() / self.items_per_page)

    # returns the number of items on the given page. page_index is zero based
    # this method should return -1 for page_index values that are out of range
    def page_item_count(self, page_index):
        if page_index < 0 or self.page_count() < page_index + 1:
            return -1
        else:
            if page_index + 1 < self.page_count():
                return self.items_per_page
            else:
                division = self.item_count() % self.items_per_page
                return division if division > 0 else self.items_per_page

    # determines what page an item at the given index is on. Zero based indexes.
    # this method should return -1 for item_index values that are out of range
    def page_index(self, item_index):
        if item_index > self.item_count() - 1 or item_index < 0:
            return - 1
        else:
            initial_i = 0
            final_i = self.items_per_page
            page = 0
            while page <= self.page_count():
                if item_index in range(initial_i, final_i):
                    return page
                else:
                    initial_i += self.items_per_page
                    final_i += self.items_per_page
                    page += 1


collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
              23, 24,]
collection2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
collection3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
helper = PaginationHelper(collection, 10)
helper2 = PaginationHelper(collection2, 4)
helper3 = PaginationHelper(collection3, 4)

# print(helper.page_item_count(1))
# print(helper2.page_item_count(1))
# print(helper3.page_item_count(2))

print(helper3.page_index(0))
print(helper3.page_index(1))
print(helper3.page_index(2))
print(helper3.page_index(3))
print(helper3.page_index(4))
print(helper3.page_index(5))
print(helper3.page_index(6))
print(helper3.page_index(7))
print(helper3.page_index(8))
print(helper3.page_index(-10))
print(helper.page_index(22))
