
import BookList from './BookList';


export default async function BookListPage() {
  const url = process.env.NEXT_PUBLIC_API_URL || "capstone-discovery-serv.privatenamespace";
  const port = process.env.NEXT_PUBLIC_API_PORT || 8080;
  const response = await fetch(`http://${url}:${port}/books`, {

    cache: 'no-store',
  });
  const books = await response.json();


  return <BookList books={books} />;
}
