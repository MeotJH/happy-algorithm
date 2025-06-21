# 🌞 Happy Algorithm

**행복 방정식 기반으로 일일 행복 점수를 시각화하는 감성 웹앱**

[![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=nextdotjs)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![Author](https://img.shields.io/badge/Made%20by-MeotJH-blueviolet)](https://github.com/MeotJH)

---

## 🔍 소개

> “O + (N × S) + Cpm / T + He”

이 웹앱은 심리학자 **Cliff Arnall**의 행복 방정식을 기반으로,
당일의 실외활동, 자연과의 교감, 사회적 교류, 어린시절의 추억, 기온, 여름휴가 기대감 등의 요소를 입력받아  
**사용자의 행복 점수를 계산하고 시각화**합니다.

토스 스타일의 감성적인 UI를 적용해,  
**모바일 중심의 간결한 UX**를 제공합니다.

---

## 🚀 기능

- ☀️ 실외활동 시간 입력
- 🌳 자연과의 교감 정도 선택
- 🧑‍🤝‍🧑 친구나 사회적 교류 평가
- 🎠 어린시절 추억 회상 정도
- 🌡️ 현재 기온 자동 감지 (위치 허용 시)
- 🏖️ 다가오는 휴가에 대한 기대감
- 📊 행복 점수 계산 + 해석
- 🎯 점수 기준 시각화

---

## 🛠️ 기술 스택

- **Next.js 14** (App Router 기반)
- **Tailwind CSS**
- **LocalStorage** 기반 상태 저장
- **Custom Context API** 기반 Step Form 구성
- **Geolocation API + open-meteo API**

---

## 📦 설치 및 실행

```bash
git clone https://github.com/MeotJH/happy-algorithm.git
cd happy-algorithm
npm install
npm run dev
