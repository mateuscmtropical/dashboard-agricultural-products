import Link from 'next/link';
import Home from './home/index.js';

export default function Index() {
  return (
    <>
      <Link href="./home">
        <Home />
      </Link>
    </>
  )
}
