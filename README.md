# AI Playground (시니어 AI 프롬프트 라이브러리)

[![Deploy Status](https://github.com/montycplusplus/ai-playground/actions/workflows/pages/pages-build-deployment/badge.svg)](https://montycplusplus.github.io/ai-playground/)

## 프로젝트 개요
**AI Playground**는 디지털 기기 및 AI 사용에 어려움을 겪는 어르신들이 대형 언어 모델(LLM)과 음성 인터페이스를 쉽고 재미있게 활용할 수 있도록 돕는 **오픈소스 웹 프롬프트 라이브러리**입니다. 

지역 사회복지관 어르신 컴퓨터 교실에서의 실제 보조강사 경험을 바탕으로, 복잡한 타이핑 없이 상황에 맞는 질문 양식을 바로 찾아 쓸 수 있도록 직관적인 UI로 설계되었습니다.

## 주요 기능
* **시니어 맞춤형 프롬프트 모음:** 건강 정보 검색, 일상 대화, 취미 생활 등 어르신들의 실생활 관심사에 맞춘 실용적인 AI 질문 템플릿 제공
* **직관적인 UI/UX:** 시니어의 인지적 특성과 시력을 고려한 큰 텍스트, 명확한 색상 대비, 단순한 네비게이션
* **무설치 접근성:** 별도의 서버나 회원가입, 설치 과정 없이 웹 브라우저만 있으면 즉시 접속 가능한 정적 웹 페이지 (GitHub Pages)
* **원클릭 복사 지원:** 클릭 한 번으로 프롬프트를 복사해 즉시 AI 챗봇에 붙여넣을 수 있는 편의 기능

## 기술 스택
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Hosting / Deployment:** GitHub Pages

## 0. 라이선스 (License)
이 프로젝트는 **MIT License**에 따라 배포됩니다. 

누구나 이 프로젝트의 소스 코드를 제한 없이 사용, 복사, 수정, 병합, 출판, 배포, 서브라이선스 판매할 수 있으며, 타인에게도 이를 허용할 수 있습니다. (상업적 이용도 가능합니다)

• 의무 사항: 소프트웨어를 배포하거나 사용하는 모든 복사본에 원저작자의 저작권 고지(Copyright notice)와 라이선스 전문(Permission notice)을 반드시 포함해야 합니다(`LICENSE` 파일을 수정하거나 삭제해서는 안됩니다).

• 면책 조항: 소프트웨어는 어떠한 명시적/묵시적 보증 없이 있는 그대로 제공되며, 제작자나 저작권자는 소프트웨어와 관련하여 발생하는 어떠한 청구, 손해, 기타 책임에 대해서도 책임을 지지 않습니다.

자세한 내용은 저장소 내의 `LICENSE` 파일을 참고해 주세요.

## 1. 디렉토리 구조 (Directory Structure)

```text
ai-playground/
├── css/
│   └── style.css       # 웹페이지 스타일 및 레이아웃
├── js/
│   ├── app.js          # 메인 기능 로직 (UI 이벤트 처리, 프롬프트 복사 기능 등)
│   └── prompts.js      # 카테고리별 프롬프트 데이터 (JSON 형태의 데이터 모음)
├── .nojekyll           # GitHub Pages 배포 시 Jekyll 빌드 방지용 파일
├── LICENSE             # MIT 라이선스 정보
├── README.md           # 프로젝트 설명 파일
└── index.html          # 메인 진입점 (기본 웹 페이지)
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
