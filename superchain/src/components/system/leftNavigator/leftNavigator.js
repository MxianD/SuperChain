import React, { useEffect, useState } from 'react';
import styles from '@/components/system/leftNavigator/leftNavigator.module.css';
import { Button } from 'antd';
export default function LeftNavigator() {
    return (
        <div className={styles.leftNavigator}>
            <div className={styles.theNFT}>NFT</div>
            <div className={styles.pool}>Crypto Pool</div>
            <div className={styles.myGames}>My Games</div>
        </div>
    )
}