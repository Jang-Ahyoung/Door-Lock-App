import React, { useState } from 'react';
import styles from './SettingView.module.css';
import Header from '../header/Header';
import BasicSetting from '../settingScreen/BasicSetting';
import VisitSetting from '../settingScreen/VisitSetting';
import DoorLockSetting from '../settingScreen/DoorLockSetting';
import PasswordSetting from '../settingScreen/PasswordSetting';
import Bottom from '../bottom/Bottom';

function SettingView() {
    const [seleted, setSeleted] = useState('basic');
    return (
        <div className={styles.container}>
            <div className={styles.TopBox}>
                <Header type={"setting"} />
                <p className={styles.settingTitle}>Settings</p>
                <section>
                    <ul className={styles.navbar}>
                        <li className={`${styles.settingType} ${seleted == 'basic' && styles.seleted}`} onClick={() => setSeleted('basic')}>기본 설정</li>
                        <li className={`${styles.settingType} ${seleted == 'visit' && styles.seleted}`} onClick={() => setSeleted('visit')}>출입 관리</li>
                        <li className={`${styles.settingType} ${seleted == 'doorlock' && styles.seleted}`} onClick={() => setSeleted('doorlock')}>도어락</li>
                        <li className={`${styles.settingType} ${seleted == 'password' && styles.seleted}`} onClick={() => setSeleted('password')}>보안 설정</li>
                    </ul>
                </section>
                <div className={styles.settingcontent}>
                    {seleted == 'basic' && <BasicSetting />}
                    {seleted == 'visit' && <VisitSetting />}
                    {seleted == 'doorlock' && <DoorLockSetting />}
                    {seleted == 'password' && <PasswordSetting />}
                </div>
            </div>
            <Bottom />
        </div>
    )
}

export default SettingView;