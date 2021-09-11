import React, { useState } from 'react';
import styles from './SettingScreen.module.css';
import { CameraAlt, AllInbox, Close } from '@material-ui/icons';

const Popup = ({ setOpenPopup, openPopup, confirmNumber, setConfirmNumber, closePopup, num }) => (
    <div className={styles.popup_box}>
        <Close className={styles.closeIcon} onClick={closePopup} />
        <div className={styles.popup_confirm}>확인창</div>
        {
            confirmNumber
                ? (
                    <div>
                        <div className={styles.popup_check}>✔️</div>
                        <div className={styles.popup_content2}>발송되었습니다 🤗</div>
                    </div>
                )
                : (
                    <div>
                        <div className={styles.popup_content}>입력하신 번호가 맞으십니까?</div>
                        <p className={styles.popup_number} >" 010-{num.two}-{num.three} "</p>
                        <div className={styles.popup_btn_box}>
                            <button className={styles.popup_btn} onClick={() => { setOpenPopup(!openPopup) }} >No</button>
                            <button className={styles.popup_btn} onClick={() => { setConfirmNumber(!confirmNumber) }}>Yes</button>
                        </div>
                    </div>
                )
        }
    </div>
)

function BasicSetting() {
    const [control, setControl] = useState(true);
    const [record, setRecord] = useState(true);
    const [report, setReport] = useState(true);
    const [delivery, setDelivery] = useState(true);
    const [openPopup, setOpenPopup] = useState(false);
    const [num, setNum] = useState({ one: "", two: "", three: "" });
    const [confirmNumber, setConfirmNumber] = useState(false);

    const randomNum = Math.round(Math.random() * 99);
    const closePopup = () => {
        setOpenPopup(!openPopup);
        setConfirmNumber(false);
    }
    return (
        <div className={styles.container}>
            {
                openPopup &&
                <div className={styles.popup}>
                    <div className={`${openPopup && styles.background}`}></div>
                    <div className={styles.popup_container}>
                        <Popup setOpenPopup={setOpenPopup} openPopup={openPopup} setConfirmNumber={setConfirmNumber} confirmNumber={confirmNumber} closePopup={closePopup} num={num} />
                    </div>
                </div>
            }
            <div className={styles.settingBox}>
                <div className={styles.middle}>
                    <div className={styles.basic_boxContent}>
                        <div className={styles.text}>
                            <CameraAlt className={styles.titleIcon} />
                            <p className={styles.title}>카메라 설정</p>
                        </div>
                    </div>
                    <div className={styles.basic_setting}>
                        <div className={styles.basic_subTitle}>
                            비밀번호
                            <select className={styles.selectNum} disabled={control && "disabled"}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            회 오류 시 촬영 </div>
                        <div className={styles.controlBox} onClick={() => setControl(!control)}>
                            <div className={styles.line}></div>
                            <div className={`${styles.circle} ${!control && styles.move}`} ></div>
                        </div>
                    </div>
                    <hr className={styles.sectionLine} />
                    <div className={styles.basic_setting}>
                        <div className={styles.basic_subTitle}>
                            녹화본 저장
                        </div>
                        <div className={styles.controlBox} onClick={() => setRecord(!record)}>
                            <div className={styles.line}></div>
                            <div className={`${styles.circle} ${!record && styles.move}`} ></div>
                        </div>
                    </div>
                    <hr className={styles.sectionLine} />
                    <div className={styles.basic_setting}>
                        <div>
                            <div className={styles.basic_subTitle}>신고 알림 (상단바)</div>
                            <p className={styles.basic_detail}>ㄴ " 신고하시겠습니까 "</p>
                        </div>
                        <div className={styles.controlBox} onClick={() => setReport(!report)}>
                            <div className={styles.line}></div>
                            <div className={`${styles.circle} ${!report && styles.move}`} ></div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.postContent}>
                        <div className={styles.text}>
                            <AllInbox className={styles.titleIcon} />
                            <p className={styles.title}>택배 랜덤번호 설정 </p>
                        </div>
                        <div className={styles.detailContent}>
                            <div className={styles.basic_subTitle}>
                                {!delivery && <p className={styles.random_top}>현재 번호 : <span className={styles.random_number}>{randomNum}</span> </p>}
                                <p >랜덤 번호 안내 문자 전송</p>
                            </div>
                            <div className={styles.controlBox} onClick={() => setDelivery(!delivery)}>
                                <div className={styles.line}></div>
                                <div className={`${styles.circle} ${!delivery && styles.move}`} ></div>
                            </div>
                        </div>
                        <p className={styles.btnContent}>
                            <input placeholder="***" className={styles.numInput} onChange={(e) => setNum({ ...num, one: e.target.value })} />-
                            <input placeholder="****" className={styles.numInput} onChange={(e) => setNum({ ...num, two: e.target.value })} />-
                            <input placeholder="****" className={styles.numInput} onChange={(e) => setNum({ ...num, three: e.target.value })} />
                            <button className={styles.sendBtn} onClick={() => setOpenPopup(!openPopup)}>전송</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicSetting;
