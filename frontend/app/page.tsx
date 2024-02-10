'use client';
import { useQuery, gql } from "@apollo/client"

const GET_BOOKS = gql`
query GetBooks {
  books{
    data{
      id,
      attributes{
        title
      }
    }
  }
}
`
interface Book {
  id: string
  attributes: {
    title: string
  }
}

export default function Home() {
  const { loading, error, data } = useQuery(GET_BOOKS)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading books.</div>
  return (
    <main>
      <div className="pt-80">
        <h1>Books: </h1>
        {data && data.books.data.map((book: Book) => (
          <div key={book.id}>
            <h1>{book.attributes.title}</h1>
          </div>
        ))}
      </div>
    </main>
  )
}
