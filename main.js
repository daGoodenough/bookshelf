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

renderBooks()
