var books = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    imageURL: 'https://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    isbn: '9781921479311',
    pageCount: 268
  },
];

function renderBooks () {
  $('.books').empty();

  let source = $('#book-template').html();

  let template = Handlebars.compile(source);

  for(let i = 0; i < books.length; i++) {
    let html = template(books[i]);

  $('.books').append(html);
  }
}


function addBooks (data) {
  books = [];

  data.items.forEach(element => {
    let book = {
      title: element.volumeInfo.title || null,
      author: element.volumeInfo.authors ? element.volumeInfo.authors[0] : null,
      imageURL: element.volumeInfo.imageLinks ? element.volumeInfo.imageLinks.thumbnail : null,
      isbn: element.volumeInfo.industryIdentifiers ? element.volumeInfo.industryIdentifiers[0].identifier : null,
      pageCount: element.volumeInfo.pageCount || null
    }
    books.push(book);
  });

  renderBooks();
}

function fetch (query) {
  $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/books/v1/volumes?q=" + query,
    dataType: "json",
    success: function (data) {
      addBooks(data);
    },
    error: function (jaXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  })
}

$('.search').on('click', function () {
  let searchVal = $('#search-query').val();

  fetch(searchVal);
})
