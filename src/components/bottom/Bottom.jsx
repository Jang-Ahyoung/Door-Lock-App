import React from 'react';
import styles from './Bottom.module.css';
import { Home, Visibility, AllInbox, TransferWithinAStation } from '@material-ui/icons'
import { useHistory } from 'react-router-dom';

function Bottom() {
    const history = useHistory();
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer} onClick={() => history.push('/menu/camera')}>
                <Visibility className={styles.lockIcon} />
                <p className={styles.iconText}>카메라</p>
            </div>
            <div className={styles.iconContainer} onClick={() => history.push('/menu/access')}>
                <TransferWithinAStation className={styles.lockIcon} />
                <p className={styles.iconText}>출입 기록</p>
            </div>
            <div className={styles.iconContainer}>
                <AllInbox className={styles.lockIcon} />
                <p className={styles.iconText}>택배</p>
            </div>
            <div className={styles.iconContainer}>
                <Home className={styles.lockIcon} onClick={() => history.push('/')} />
                <p className={styles.iconText}>메인</p>
            </div>
        </div>
    )
}

export default Bottom;