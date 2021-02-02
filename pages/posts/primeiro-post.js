import Link from 'next/link'

export default function PrimeiroPost() {
    return (
        <>
          <h1>Primeiro Post</h1>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        </>
      )
  }