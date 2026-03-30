
import BookList from './BookList';


export default async function BookListPage() {

  const response = await fetch(`../`, {

    cache: 'no-store',
  });
  const books = await response.json();


  return <BookList books={books} />;
}
