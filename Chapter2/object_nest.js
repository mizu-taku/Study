let book = {
  title: 'Javascript本格入門',
  author: {
    name: '山田太郎',
    addres: '滋賀県草津市',
  },
  price: 2980,
};

console.log(book.author.name);
console.log(book['author']['name']);
