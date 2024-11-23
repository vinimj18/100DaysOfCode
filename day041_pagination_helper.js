/*For this exercise you will be strengthening your page-fu mastery. You will 
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
*/
// TODO: complete this class

const _ = require("lodash");

class PaginationHelper {
  // The constructor takes in an array of items and an integer indicating
  // how many items fit within a single page
  constructor(collection, items_per_page) {
    this.collection = collection;
    this.itemsPerPage = items_per_page;
  }

  // returns the number of items within the entire collection
  itemCount() {
    return this.collection.length;
  }

  // returns the number of pages
  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }

  // returns the number of items on the given page. page_index is zero based
  // this method should return -1 for page_index values that are out of range
  pageItemCount(pageIndex) {
    if (pageIndex < 0 || this.pageCount() < pageIndex + 1) return -1;
    else {
      if (pageIndex + 1 < this.pageCount()) return this.itemsPerPage;
      else {
        let division = this.itemCount() % this.itemsPerPage;
        return division > 0 ? division : this.itemsPerPage;
      }
    }
  }

  // determines what page an item at the given index is on. Zero based indexes.
  // this method should return -1 for item_index values that are out of range
  pageIndex(itemIndex) {
    if (itemIndex > this.itemCount() - 1 || itemIndex < 0) return -1;
    else {
      let firstItem = 0;
      let page = 0;
      while (page <= this.pageCount()) {
        if (
          _.range(firstItem, firstItem + this.itemsPerPage).includes(itemIndex)
        )
          return page;
        else {
          firstItem += this.itemsPerPage;
          page++;
        }
      }
    }
  }
}

const collection = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
const helper = new PaginationHelper(collection, 10);

console.log(helper.pageIndex(22));
