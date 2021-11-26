import type { NextPage } from 'next'
import Link from "next/link";
import styles from "../styles/style.module.scss";

const Home: NextPage = () => {
  const { button, btn, btnPrimary } = styles;
  return (
    <div>
      <h1 className="text-muted">Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
        <button className={btn}>Test</button>
      </p>
    </div>
  )
}

export default Home
