import React, { useEffect, useState } from 'react';
import styles from '@/components/mainContent/mainContent.module.css';
import { Button } from 'antd';
export default function MainContent() {
    return (
        <div className={styles.mainContent}>
            <Button className={styles.entry}  type="primary" href="/systemPages/systemNFT" ghost>Join us</Button>
        </div>
    )
}