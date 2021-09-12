import React from 'react';
import styles from './AccessRecords.module.css';
import { Avatar } from '@material-ui/core';
import { ExitToApp, MeetingRoom } from '@material-ui/icons';

function AccessRecords() {
    return (
        <div className={styles.container}>
            <p className={styles.title}>출입 기록 관리</p>
            <div className={styles.recordBox}>
                <p className={styles.date}>2021 / 08 / 24</p>
                <div className={styles.record}>
                    <div className={styles.avatarSection}>
                        <Avatar className={styles.avatarIcon} />
                        <p className={styles.name}>Daughter</p>
                    </div>
                    <p className={styles.time}>16:32</p>
                    <div className={styles.peopleInOut}><MeetingRoom /><span>In</span></div>
                </div>
                <div className={styles.record}>
                    <div className={styles.avatarSection}>
                        <Avatar className={styles.avatarIcon} />
                        <p className={styles.name}>Daughter</p>
                    </div>
                    <p className={styles.time}>13:58</p>
                    <div className={styles.peopleInOut}><ExitToApp /><span>Out</span></div>
                </div>
            </div>

            <div className={styles.recordBox}>
                <p className={styles.date}>2021 / 08 / 23</p>
                <div className={styles.record}>
                    <div className={styles.avatarSection}>
                        <Avatar className={styles.avatarIcon} />
                        <p className={styles.name}>Husband</p>
                    </div>
                    <p className={styles.time}>09:10</p>
                    <div className={styles.peopleInOut}><MeetingRoom /><span>In</span></div>
                </div>
                <div className={styles.record}>
                    <div className={styles.avatarSection}>
                        <Avatar className={styles.avatarIcon} />
                        <p className={styles.name}>Me</p>
                    </div>
                    <p className={styles.time}>07:04</p>
                    <div className={styles.peopleInOut}><MeetingRoom /><span>In</span></div>
                </div>
                <div className={styles.record}>
                    <div className={styles.avatarSection}>
                        <Avatar className={styles.avatarIcon} />
                        <p className={styles.name}>Husband</p>
                    </div>
                    <p className={styles.time}>06:36</p>
                    <div className={styles.peopleInOut}><ExitToApp /><span>Out</span></div>
                </div>
                <div className={styles.record}>
                    <div className={styles.avatarSection}>
                        <Avatar className={styles.avatarIcon} />
                        <p className={styles.name}>Me</p>
                    </div>
                    <p className={styles.time}>06:59</p>
                    <div className={styles.peopleInOut}><ExitToApp /><span>Out</span></div>
                </div>
            </div>
        </div>
    )
}

export default AccessRecords;
