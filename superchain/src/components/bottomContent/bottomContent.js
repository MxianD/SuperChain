import React, { useEffect, useState } from 'react';
import styles from '@/components/bottomContent/bottomContent.module.css';
import { TwitterOutlined, GithubOutlined,RedditOutlined } from '@ant-design/icons';
import Image from 'next/image'
import discordIcon from '@/assets/images/discord-mark-white.svg'
export default function BottomContent() {
    return (
        <div className={styles.bottomContent}>
            <div className={styles.left}>
                <dl>
                    <dt>Learn</dt>
                    <dd>Document</dd>
                    <dd>GitHub</dd>
                    <dd>Notion</dd>
                </dl>
            </div>
            <div className={styles.right}>
                Join the Community
                <div className={styles.communityIcon}>
                    <TwitterOutlined className={styles.twitterOutlined} />
                    <GithubOutlined className={styles.githubOutlined} />
                    <Image src={discordIcon} width={0} height={0} className={styles.discordIcon} />
                    <RedditOutlined className={styles.redditOutlined}/>
                </div>

            </div>
        </div>
    )
}