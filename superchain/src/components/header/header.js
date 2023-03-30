import React, { useState, useEffect } from "react";
import styles from '@/components/header/header.module.css'
import Link from "next/link";
import {
    UserOutlined,
    WalletOutlined,
  } from '@ant-design/icons';
export default function Header() {
    return (
        <div className={styles.header}>
            <Link href='/' className={styles.headLog}>
             Superchain
            </Link>
            <div className={styles.headMenu}>
                <div className={styles.headerMenu_firstKid}>Document</div>
                <div className={styles.headerMenu_secondKid}>Community</div>
                <div className={styles.headerMenu_thirdKid}>Market</div>
            </div>
            <div className={styles.headUser}>
                <div className={styles.headerUser_userAccount}><UserOutlined /></div>
                <div className={styles.headerUser_userWallet}><WalletOutlined /></div>
                <div className={styles.headerUser_userOtherThing}>789</div>
            </div>
        </div>
    )
}