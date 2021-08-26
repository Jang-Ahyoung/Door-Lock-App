
import React from 'react';
import AccessRecords from '../../components/accessRecords/AccessRecords';
import Bottom from '../../components/bottom/Bottom';
import Camera from '../../components/camera/Camera';
import Header from '../../components/header/Header';
import styles from '../home/Home.module.css';

function Menu({ type }) {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <Header type={"home"} />
                    <div className={styles.context}>
                        {type == 'camera'
                            ? <Camera />
                            : <AccessRecords />
                        }
                    </div>
                </div>
                <Bottom />
            </div>
        </div>
    )
}
export default Menu;