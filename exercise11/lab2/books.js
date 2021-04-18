console.log('this works')

const GOOGLE_BOOKS_URL =
//  "https://www.googleapis.com/books/v1/volumes?q=isbn:0679775439";
  "https://www.googleapis.com/books/v1/volumes?q=painting";

const container = document.querySelector('.container')
function getBooks(){
  fetch(GOOGLE_BOOKS_URL)
    .then(response => response.json())
    .then(data => {

      renderBook(data);

    });
  }
function renderBook(book){
  let bookItem = book.items;
  for(item in bookItem){
    console.log(bookItem[item]['volumeInfo']['title'])
  }
}
getBooks()
