# 👴👵 AI Playground (시니어 AI 프롬프트 라이브러리)

[![Deploy Status](https://github.com/montycplusplus/ai-playground/actions/workflows/pages/pages-build-deployment/badge.svg)](https://montycplusplus.github.io/ai-playground/)

## 📖 프로젝트 개요
**AI Playground**는 디지털 기기 및 AI 사용에 어려움을 겪는 어르신들이 대형 언어 모델(LLM)과 음성 인터페이스를 쉽고 재미있게 활용할 수 있도록 돕는 **오픈소스 웹 프롬프트 라이브러리**입니다. 

지역 사회복지관 어르신 컴퓨터 교실에서의 실제 보조강사 경험을 바탕으로, 복잡한 타이핑 없이 상황에 맞는 질문 양식을 바로 찾아 쓸 수 있도록 직관적인 UI로 설계되었습니다.

## ✨ 주요 기능
* **시니어 맞춤형 프롬프트 모음:** 건강 정보 검색, 일상 대화, 취미 생활 등 어르신들의 실생활 관심사에 맞춘 실용적인 AI 질문 템플릿 제공
* **직관적인 UI/UX:** 시니어의 인지적 특성과 시력을 고려한 큰 텍스트, 명확한 색상 대비, 단순한 네비게이션
* **무설치 접근성:** 별도의 서버나 회원가입, 설치 과정 없이 웹 브라우저만 있으면 즉시 접속 가능한 정적 웹 페이지 (GitHub Pages)
* **원클릭 복사 지원:** 클릭 한 번으로 프롬프트를 복사해 즉시 AI 챗봇에 붙여넣을 수 있는 편의 기능

## 🛠 기술 스택
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Hosting / Deployment:** GitHub Pages

## 0. 라이선스 (License)
이 프로젝트는 **MIT License**에 따라 배포됩니다. 
누구나 자유롭게 코드를 열람, 수정, 배포 및 상업적/비상업적 목적으로 활용할 수 있습니다. 어르신들의 디지털 소외 현상을 해결하고자 하는 목적이라면 언제든 환영하며, 자유롭게 포크(Fork)하여 각 지역 사회복지관이나 교육 환경에 맞게 변형해 사용하셔도 좋습니다.

자세한 내용은 저장소 내의 `LICENSE` 파일을 참고해 주세요.

## 파일 구조

```text
ai-playground/
├── index.html
├── .nojekyll
├── css/
│   └── style.css
└── js/
    ├── prompts.js    # 내용 추가·수정: 카테고리/질문/선택지
    └── app.js        # 질문 카드 화면 및 복사 동작
```

## 실행


## GitHub Pages 배포

## 질문 추가하기

```js
{
  id: 'books', category: 'life', icon: '📚',
  title: '읽을 책 추천받기',
  description: '좋아하는 주제를 선택해요.',
  template: '{topic}에 관한 입문용 책을 {count}권 추천해줘.',
  fields: [
    { key: 'topic', label: '어떤 주제?', options: ['역사', '여행', '소설'] },
    { key: 'count', label: '몇 권?', options: ['3', '5'] }
  ],
  caution: '도서 정보가 실제와 다를 수 있으니 확인하세요.'
}
```

## 참고

- 'ChatGPT 열기'는 ChatGPT 웹페이지를 여는 링크야. 다른 사이트 입력창에 **자동으로 질문을 붙여넣거나 전송하지는 않아.**
- 복사는 HTTPS 주소에서 가장 안정적으로 동작해. 구형 브라우저를 위한 대체 복사 방식도 넣었어.
- 이 사이트는 AI에 직접 연결하지 않고, 질문 문장만 생성해. 사용자 입력값도 서버에 전송하지 않아.
