import React, { useEffect, useState } from 'react';
import styles from '@/components/system/mainContent_system/mainContent_system.module.css';
import { Button } from 'antd';
import LeftNavigator from '@/components/system/leftNavigator/leftNavigator';
export default function MainContent_System() {
    return (
        <div className={styles.mainContent_System}>
            <LeftNavigator></LeftNavigator>
        </div>
    )
}