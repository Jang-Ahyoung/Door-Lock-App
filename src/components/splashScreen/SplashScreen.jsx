import React from 'react';
import styles from './SplashScreen.module.css';

function SplashScreen() {
    return (
        <div className={styles.container}>
            <p>문 앞의 눈이 되어줄 NO.1 경호원</p>
            <h1 className={styles.title}>호루<span className={styles.yellowText}>LOCK</span>이</h1>
        </div>
    )
}

export default SplashScreen
