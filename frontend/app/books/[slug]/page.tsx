import { gql, useQuery } from '@apollo/client'
import React from 'react'


interface Props {
    params: { slug: string }
}

const GET_BOOK = gql`
query GetBook($slug: String!) {
    book(slug: $slug) {
    data{
        id,
        attributes{
          title
        }
      }
    }
  }
  `

const Book = ({ params }: Props) => {

    const { loading, error, data } = useQuery(GET_BOOK, {
        variables: { slug: params.slug },
    });
    return (
        <div>{data.book.title}</div>
    )
}

export default Book