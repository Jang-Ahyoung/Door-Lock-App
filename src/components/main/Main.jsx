import React, { useState } from 'react';
import styles from './Main.module.css';
import { Https, LockOpen } from '@material-ui/icons';

function Main() {
    const [control, setControl] = useState(true);
    return (
        <div className={styles.container}>
            <div className={styles.text}><span>Ready's home</span></div>
            <div className={styles.iconLine}>
                {
                    !control
                        ? <LockOpen className={`${styles.icon} ${!control && styles.iconAnimation}`} />
                        : <Https className={styles.icon} />
                }
            </div>
            <div className={styles.controlBox} onClick={() => setControl(!control)}>
                <div className={styles.line}></div>
                <div className={`${styles.circle} ${!control && styles.move}`} ></div>
            </div>
        </div>
    )
}

export default Main;