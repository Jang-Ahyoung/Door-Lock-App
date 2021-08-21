import React from 'react';
import styles from './Header.module.css';
import { ChevronLeft, SupervisedUserCircle } from '@material-ui/icons';

function Header() {
    return (
        <div className={styles.header}>
            <ChevronLeft className={styles.arrowIcon} />
            <SupervisedUserCircle className={styles.avatarIcon} />
        </div>
    )
}
export default Header;