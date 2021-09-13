<h1 align="center"> 👮‍ 든든한 우리집 경비원 _ 호루 Lock 이   </h2>

![issue bedge](https://img.shields.io/badge/react-v%2017.0.2-blue)
![issue bedge](https://img.shields.io/badge/yarn-v%201.22.10-yellow)

- React & <b>PWA</b>(Progressive Web App)를 활용한 편리함과 보안성을 높인 스마트 DoorLock 서비스를 위한 프로토타입<br />
-  URL ➥ [Look at the page](https://secure-door-lock.netlify.app/)


## 📜 Developer
 > [장아영 ( Jang-Ahyoung ) ](https://github.com/Jang-Ahyoung)


## 제작 배경
- 상황인식 1 (통계청 - 지역별 고용조사 통계 자료)<br/>
맞벌이 가구 비율은 46%로 절반에 가까운 수치를 유지하고 있으며 아이들은 그동안 부모님이 없는 집에서 유치원, 학교, 학원을 통학하게 된다. 부모님은 직장에서 불편함없이 아이들의 출입여부를 기록과 함께 카메라를 통해서 시각적으로도 확인할 수 있는 방법이 필요하다. 

- 상황인식2 <br/>
2020년 12월 29일 대검찰청 발표 결과에 따르면 강도범죄에서 37.3%, 절도범죄에서 12.5%의 비율로  침입 강도 범죄가 발생했으며 범죄 비율은 문단속의 부재로 인하여 가장 많은 침입이 발생하였다. 두 번째로는 시정장치를 열고 침입, 다음으로 시정장치를 부수고 침입한 경우로 밝혀졌다. 

- 상황인식3 <br/>
미국과 같은 국외에선 거주 형태가 주택인 경우가 많으며, 재산 범죄의 향상도 매우 크게 나타났다. 점차 1인 가구 비중은 증가하고, 범죄피해 두려움의 원인 중 주거침입에 관한 두려움이 크다는 것을 알 수 있다. 이에 따른 주거 보안의 관심이 중요해진다 


<img src="https://user-images.githubusercontent.com/71692593/133013277-f524cf77-9149-4088-b6fd-e45d26926ae5.png">
<img src="https://user-images.githubusercontent.com/71692593/133013292-b1316857-cbd6-4da1-be98-e331d32e7b00.png">

<!-- 
<div display:flex>
 <img width=45% src="https://user-images.githubusercontent.com/71692593/133013277-f524cf77-9149-4088-b6fd-e45d26926ae5.png">
<img width=50% src="https://user-images.githubusercontent.com/71692593/133013292-b1316857-cbd6-4da1-be98-e331d32e7b00.png">
</div> -->

✔️ 통계를 통해 주거침입에 있어서 시정장치의 중요성이 대두되었으며, 발생한 범죄 상황은 만약 거주지 보안이 잘 되었다면 충분히 막을 수 있는 문제였을 것이다.

✔️ 다중 보안의 중요성을 인지하였으며 하나의 보안으로는 더이상 이용자들에게 확실한 신뢰를 주기 어렵다는 결과로 도출되었다. '호루 Lock 이'은 도어락에 있어서 보안과 함께 시각, 인증 및 위기 대응적 측면에서 더 안전한 서비스를 제공하기 위해 제작되었다.

## 프로젝트 기능

|No.|Dataset|Typical Usage|
|:---:|:------:|:---:|
|1| 📸 카메라 기능  |도어락 앞에 피사체가 인지 될 경우 앱 알림 기능을 통해 촬영된 사진 전송 및 카메라의 360도 회전 조작으로 문앞의 상황 상시 확인 가능|
|2| 🔓 비밀번호 입력 오류 초과 | 설정한 입력 횟수 초과된 경우 카메라 동작 후 앱을 통한 알림 전송, 위급 상황시 앱을 통해 사진과 함께 112 신고 접수 기능|
|3| 🔒 주기적인 비밀번호 변경| 앱을 통해 편리한 비밀번호 변경으로 보안성 강화 |
|4| 🏚️ 공동 주거 지역의 경우 |게스트용 비밀번호를 설정 & 호스트/게스트 출입 기록과 사용자가 설정한 주기별로 비밀번호 변경|
|5| 🚚 대면으로 물건을 받아야하는 경우(등기, 퀵 등) 방문자 확인을 통한 보안 강화|운송자 측에 랜덤 번호를 전달하여, 두 자릿수 번호를 도어락에 입력 후 수령인이 받아야 하는 택배가 맞는 경우 ‘인증되었습니다’ 음성과 함께 수령인에게 앱을 통한 인증 완료 알림 전송|
|6| 🤴 사용자 권한의 선택성 | 앱을 통해 카메라와 같이 연동된 기능을 제어할 수 있다. 촬영 알림 설정 등을 통해 사용자는 선택할 권리를 얻는다.|

## 서비스 수요층 분석 및 제공 서비스

|No.|Target|Service|
|:--:|:----:|:--:|
|1| 👨‍👩‍👦 맞벌이 가정 | 직장에서 편리하게 아이들의 출입여부와 카메라를 통해서 안전 귀가를 시각적으로 확인 할 수 있다. |
|2| 🤵 30,40대 직장인 | 하루 평균 근무 시간은 8시간동안 회사에 있는 시간이 많은 직장인에게 실시간 감시 기능 등을 통해 주거 보안을 책임져주며, 택배 수령을 용이하게 도와준다.  |
|3| 👩 2030 1인 자취생 | 범죄의 두려움을 가지는 1인 자취생에게 실시간 도어락 카메라를 통해 외부인 확인과 함께 위급 상황시 빠른 신고를 돕는다. |
|4| 🏚️ 숙박업소 | 에어비앤비 등 숙박업소 호스트의 편리한 게스트 관리를 돕고, 게스트 확인 및 출입기록, 주기별 비밀번호 변경과 일회성 비밀번호 생성 등 어려운 도어락 시스템을 편리하게 사용할 수 있다. |


- <h3>Splash 스크린 & 앱 아이콘</h3>
<div>
  <img src="https://user-images.githubusercontent.com/71692593/130714888-891d11fe-035a-4cb7-bf1b-ca6792c7314c.png" width=49%> </img>
  <img src="https://user-images.githubusercontent.com/71692593/130782268-0fdbd5e5-2329-4dc3-b231-2700b44646af.png" width=49% align=top> </img>
</div>
<br/>

- <h3>애플리케이션 화면</h3>
<img src="https://user-images.githubusercontent.com/71692593/130784350-5402e66a-6af2-45e4-b30a-dc7c5e250118.gif" width="49.5%"/> </img> 
<img src="https://user-images.githubusercontent.com/71692593/130718221-0c1e3536-cd7f-433e-aa61-37e29214820c.gif" width="49.5%"> </img>

<br/>


## 기술 스택 (front-end)

- [React](https://reactjs.org)
- [Material-Icon](https://material-ui.com)
- [PWA (Progressive Web App)](https://github.com/pwa-builder/pwabuilder-web/blob/V2/src/assets/next-steps.md)
- Postcss
- Javascript

<br/>

## Quick Start

```
    $ git clone https://github.com/Jang-Ahyoung/Door-Lock-App.git
    $ yarn
    $ yarn start
```

