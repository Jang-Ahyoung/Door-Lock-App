import React, { useState } from 'react';
import styles from './SettingScreen.module.css';
import { WatchLater, EventAvailable, Https, AccountCircle, Face } from '@material-ui/icons';

function VisitSetting() {
    const [control, setControl] = useState(true);
    const [password, setPassword] = useState(true);
    return (
        <div className={styles.container}>
            <div className={styles.settingBox}>
                <div className={styles.middle}>
                    <section className={styles.mainTitle}><Face />
                        <span>가구원</span>
                        <button>편집</button>
                    </section>
                    <div className={styles.personContent}>
                        <div className={styles.personContainer}>
                            <AccountCircle />
                            <p>Me</p>
                        </div>
                        <div className={styles.personContainer}>
                            <AccountCircle />
                            <p>Husband</p>
                        </div>
                        <div className={styles.personContainer}>
                            <AccountCircle />
                            <p>Daughter</p>
                        </div>
                        <div className={styles.personContainer}>
                            <AccountCircle />
                            <p>Son</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.settingBox}>
                <p className={styles.subTitle}>임시 비밀번호 관리</p>
                <div className={styles.middle}>
                    <div className={styles.boxContent}>
                        <div>
                            <div className={styles.text}>
                                <Https />
                                <p className={styles.title}>Test 비밀번호</p>
                            </div>
                            <p className={styles.detail}><EventAvailable className={styles.miniIcon} /><span>08월 05일 ~ 07일</span> <WatchLater className={styles.miniIcon} />10:00 - 12:00</p>
                            <p className={styles.detail}>Test Password  _  123456 </p>
                        </div>
                        <div className={styles.controlBox} onClick={() => setControl(!control)}>
                            <div className={styles.line}></div>
                            <div className={`${styles.circle} ${!control && styles.move}`} ></div>
                        </div>
                    </div>
                    <hr className={styles.sectionLine} />
                    <div className={styles.boxContent}>
                        <div>
                            <div className={styles.text}>
                                <Https />
                                <p className={styles.title}>Test 비밀번호 2</p>
                            </div>
                            <p className={styles.detail}><EventAvailable className={styles.miniIcon} /><span>08월 05일 ~ 10일</span> <WatchLater className={styles.miniIcon} />13:00 - 15:00</p>
                            <p className={styles.detail}>Test Password  _  789101 </p>
                        </div>
                        <div className={styles.controlBox} onClick={() => setPassword(!password)}>
                            <div className={styles.line}></div>
                            <div className={`${styles.circle} ${!password && styles.move}`} ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisitSetting;
