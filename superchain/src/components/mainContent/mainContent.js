import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/components/mainContent/mainContent.module.css';
import { Button } from 'antd';
export default function MainContent() {
    return (
        <div className={styles.mainContent}>
            <Link href="/systemPages/systemNFT">
                <Button className={styles.entry} type="primary" href="/systemPages/systemNFT" ghost>Join us</Button>
            </Link>
            
        </div>
    )
}