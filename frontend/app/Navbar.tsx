import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.scss'
import Signin from '@/components/Signin'

const Navbar = () => {

    return (
        <nav className={styles.nav}>
            <ul className={`${styles.list}`}>
                <li className={styles.listItem}>
                    <Link href="/" className={`${styles.link}`}>Home</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/about" className={`${styles.link} `}>About</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/books" className={`${styles.link}`}>Books</Link>
                </li>
            </ul>
            <Signin />
        </nav>
    )
}

export default Navbar