import Link from 'next/link';
import React from 'react';
import styles from './layouts.module.css';

export default function layout({ children }) {
  return (
    <>
      <div className={styles.layout}>
        <nav>
          <Link href="/">상품 목록</Link> | <Link href="/cart">장바구니</Link>
        </nav>
        <div>{children}</div>
      </div>
    </>
  );
}
