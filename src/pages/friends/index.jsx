import React from 'react'
import Layout from '@theme/Layout'
import FriendCard from '@site/src/components/FriendCard'
import { Friends } from '@site/data/friends'
import styles from './styles.module.css'

// import BrowserOnly from '@docusaurus/BrowserOnly';
import { Tooltip } from 'react-tooltip'


const TITLE = '友链'
const DESCRIPTION = [
    "虽然说是友链，但是实际上是 Friends 页面……",
    "Tips 都是吐槽"
]
const ADD_FRIEND_URL = 'https://github.com/Yan-Zero/Yan-Zero/tree/main/data/friends.tsx'

function FriendHeader() {
    return (
        <section className="margin-top--lg margin-bottom--lg text--center">
            <h1>{TITLE}</h1>
            {
                DESCRIPTION.map(
                    (line, i) => {
                        return <p className={styles.descLine}>{line}</p>
                    }
                )
            }
            <p></p>
            <a className="button button--primary" href={ADD_FRIEND_URL} target="_blank" rel="noreferrer">
                🔗 申请友链
            </a>
        </section>
    )
}

function FriendCards() {
    const friends = Friends
    return (
        <section className="margin-top--lg margin-bottom--lg">
            <div className={styles.friendContainer}>
                <ul className={styles.friendList}>
                    {friends.map(friend => (
                        <FriendCard key={friend.avatar} friend={friend} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default function FriendLink() {
    return (
        <Layout title={TITLE} description={DESCRIPTION}>
            <FriendHeader />
            <FriendCards />
            {/* <BrowserOnly>
                {() => {
                    const m = require('react-tooltip')
                    return <m.Tooltip id="tooltip" />
                }}
            </BrowserOnly> */}
            <Tooltip id="tooltip" />
        </Layout>
    )
}