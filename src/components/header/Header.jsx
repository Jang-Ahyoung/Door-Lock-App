import React from 'react';
import styles from './Header.module.css';
import { useHistory } from "react-router-dom";
import { ChevronLeft, Settings, SupervisedUserCircle } from '@material-ui/icons';

function Header({ type }) {
    const history = useHistory();
    return (
        <div className={styles.header}>
            {type == 'home'
                ? <Settings className={styles.settingIcon} onClick={() => history.push('/setting')} />
                : <ChevronLeft className={styles.arrowIcon} onClick={() => history.push('/')} />
            }
            <SupervisedUserCircle className={styles.avatarIcon} onClick={() => history.push('/setting')} />
        </div>
    )
}
export default Header;