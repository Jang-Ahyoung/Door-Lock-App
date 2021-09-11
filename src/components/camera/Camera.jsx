import React, { useState } from 'react';
import styles from './Camera.module.css';
import { CameraAlt, ReportProblem, Battery80 } from '@material-ui/icons';

function Camera() {
    const [record, setRecord] = useState(false);
    return (
        <div className={styles.container}>
            <p className={styles.Title}>도어락 카메라</p>
            <div className={styles.video}>
                <p className={styles.recText}>● rec</p>
                <Battery80 className={styles.batteryIcon} />
                <div className={styles.videoBorder}>
                    <img className={styles.videoIcon} src="/images/icon/move_icon.png" />
                </div>
            </div>
            <p className={styles.time}>2021 / 08 / 05 || 13 : 07 : 47</p>
            <div className={styles.iconContainer}>
                <div className={styles.iconBox}>
                    <div className={styles.iconBorder}>
                        <CameraAlt className={styles.iconBtn} />
                    </div>
                    <h4>화면 캡쳐</h4>
                </div>
                <div className={styles.iconBox} onClick={() => setRecord(!record)}>
                    <div className={styles.iconBorder}>
                        <p><span>{record ? <b>|  |</b> : "REC"}</span></p>
                    </div>
                    <h4>영상 녹화</h4>
                </div>
                <div className={styles.iconBox}>
                    <div className={styles.iconBorder}>
                        <ReportProblem className={styles.iconBtn} />
                    </div>
                    <h4>현장 신고</h4>
                </div>
            </div>
        </div>
    )
}

export default Camera;