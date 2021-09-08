<h1 align="center"> 👮‍ 든든한 우리집 경비원 _ 호루 Lock 이   </h2>

![issue bedge](https://img.shields.io/badge/react-v%2017.0.2-blue)
![issue bedge](https://img.shields.io/badge/yarn-v%201.22.10-yellow)

- React & <b>PWA</b>(Progressive Web App)를 활용한 편리함과 보안성을 높인 스마트 DoorLock 서비스<br />
-  URL ➥ [Look at the page](https://secure-door-lock.netlify.app/)


## 📜 Developer
 > [장아영 ( Jang-Ahyoung ) ](https://github.com/Jang-Ahyoung)


## 제작 배경
- 상황인식 1 <br/>
통계청의 ‘지역별 고용조사’ 통계에 의하면 맞벌이 가구 비율은 2019년도 46%로 절반에 가까운 수치를 유지하고 있으며 맞벌이 부부에게는 아이들이 유치원이나 초등학교 하교 후, 안전하게 집에 도착했는지 시각적으로 인지할 수 있는 방법이 필요하다. 

- 상황인식2 <br/>
2020년 12월 29일 대검찰청 발표 결과에 따르면 강도범죄에서 37.3%, 절도범죄에서 12.5%의 비율로  침입 강도 범죄가 발생했으며 범죄 비율은 문단속의 부재로 인하여 가장 많은 침입이 발생하였다. 두 번째로는 시정장치를 열고 침입, 다음으로 시정장치를 부수고 침입한 경우로 밝혀졌다. 

✔️ 통계를 통해 주거침입에 있어서 시정장치의 중요성이 대두되었으며, 발생한 범죄 상황은 만약 거주지 보안이 잘 되었다면 충분히 막을 수 있는 문제였을 것이다.

✔️ 다중 보안의 중요성을 인지하였으며 하나의 보안으로는 더이상 이용자들에게 확실한 신뢰를 주기 어렵다는 결과로 도출되었다. '호루 Lock 이'은 도어락에 있어서 보안과 함께 시각, 인증 및 위기 대응적 측면에서 더 안전한 서비스를 제공하기 위해 제작되었다.

## 프로젝트 기능

|No.|Dataset|Typical Usage|
|:---:|:---:|:---:|
|1| 📸 카메라 기능  |도어락 앞에 피사체가 인지 될 경우 앱 알림 기능을 통해 촬영된 사진 전송 및 카메라의 360도 회전 조작으로 문앞의 상황 상시 확인 가능|
|2| 🔓 비밀번호 입력 오류 초과 | 설정한 입력 횟수 초과된 경우 카메라 동작 후 앱을 통한 알림 전송, 위급 상황시 앱을 통해 사진과 함께 112 신고 접수 기능|
|3| 🔒 주기적인 비밀번호 변경| 앱을 통해 편리한 비밀번호 변경으로 보안성 강화 |
|4| 🏚️ 공동 주거 지역의 경우 |게스트용 비밀번호를 설정 & 호스트/게스트 출입 기록과 사용자가 설정한 주기별로 비밀번호 변경|
|5| 🚚 대면으로 물건을 받아야하는 경우(등기, 퀵 등) 방문자 확인을 통한 보안 강화|운송자 측에 랜덤 번호를 전달하여, 두 자릿수 번호를 도어락에 입력 후 수령인이 받아야 하는 택배가 맞는 경우 ‘인증되었습니다’ 음성과 함께 수령인에게 앱을 통한 인증 완료 알림 전송|


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

