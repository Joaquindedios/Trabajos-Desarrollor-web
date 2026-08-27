const books = [
  {
    title: 'La bondiola',
    author: 'Bettiana Diaz'
  },
  {
    title: 'Bloqueo de la granja',
    author: 'Alfredo Fratti'
  },
  {
    title:'la mentira',
    author:'fernando pereira'
  },
  {
    title:'la honestidad sin h',
    author:'yamandu orsi'
  }
]
function gettheTitles(books){
   let auxiliar= books.map(book=> book.title)
   console.log(auxiliar)
}

gettheTitles(books)