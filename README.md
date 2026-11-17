# AI Playground (교육 보조용 인터랙티브 AI 프롬프트 라이브러리)

[![Deploy Status](https://github.com/montycplusplus/ai-playground/actions/workflows/pages/pages-build-deployment/badge.svg)](https://montycplusplus.github.io/ai-playground/)

## 0. 라이선스 (License)
이 프로젝트는 **MIT License**에 따라 배포됩니다. 

누구나 이 프로젝트의 소스 코드를 제한 없이 사용, 복사, 수정, 병합, 출판, 배포하거나 서브라이선스를 판매할 수 있으며, 상업적인 이용도 가능합니다.

• 의무 사항: 소프트웨어를 배포하거나 사용하는 모든 복사본에 원저작자의 저작권 고지(Copyright notice)와 라이선스 전문(Permission notice)을 반드시 포함해야 합니다(저장소 내의 `LICENSE` 파일을 수정하거나 삭제해서는 안됩니다).

• 면책 조항: 소프트웨어는 어떠한 명시적/묵시적 보증 없이 있는 그대로 제공되며, 제작자나 저작권자는 소프트웨어와 관련하여 발생하는 어떠한 청구, 손해, 기타 책임에 대해서도 책임을 지지 않습니다.

자세한 내용 및 라이선스 원문은 저장소 내의 `LICENSE` 파일을 참고하여 주십시오.

## 1. 프로젝트 개요
**AI Playground**는 디지털 기기 및 AI 사용에 어려움을 겪는 어르신들이 대형 언어 모델(LLM)을 쉽고 재미있게 활용할 수 있도록 돕는 **오픈소스 웹 프롬프트 라이브러리**입니다. 

지역 사회복지관 어르신 컴퓨터 교실에서의 실제 보조강사 경험을 바탕으로, 복잡한 타이핑 없이 상황에 맞는 질문 양식을 바로 찾아 쓸 수 있도록 직관적인 UI로 설계되었습니다.

### 주요 기능
* **시니어 맞춤형 프롬프트 모음:** 건강 정보 검색, 일상 대화, 취미 생활 등 어르신들의 실생활 관심사에 맞춘 실용적인 AI 질문 템플릿 제공
* **직관적인 UI/UX:** 시니어의 인지적 특성과 시력을 고려한 큰 텍스트, 명확한 색상 대비, 단순한 네비게이션
* **무설치 접근성:** 별도의 서버나 회원가입, 설치 과정 없이 웹 브라우저만 있으면 즉시 접속 가능한 정적 웹 페이지 (GitHub Pages)
* **원클릭 복사 지원:** 클릭 한 번으로 프롬프트를 복사해 즉시 AI 챗봇에 붙여넣을 수 있는 편의 기능

### 기술 스택
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Hosting / Deployment:** GitHub Pages

## 2. 실행 방법 (How to Run)

본 프로젝트는 순수 프론트엔드 기술(HTML, CSS, JS)로만 구성된 정적 웹페이지이므로 별도의 서버 구축 없이 웹 브라우저만으로 쉽게 실행할 수 있습니다.

### 2.1. 다운로드하여 직접 실행하기 (가장 간단한 방법)
웹 개발 환경이 구축되어 있지 않아도 웹 브라우저만 있으면 바로 확인해 볼 수 있는 방법입니다.

1. GitHub 저장소 페이지 우측 상단의 초록색 **[Code]** 버튼을 클릭합니다.

   <img width="462" height="62" alt="Screenshot-code" src="https://github.com/user-attachments/assets/e1095f32-0c56-44af-a60e-adbc5f4844a0" />
   
2. 메뉴에서 **[Download ZIP]** 버튼을 클릭하여 압축된 프로젝트 파일을 다운로드합니다.

   <img width="462" height="350" alt="Screenshot_downloadzip" src="https://github.com/user-attachments/assets/f889acfb-1894-4f1d-8e60-5bbd022cc2c6" />

3. 다운로드된 ZIP 파일의 압축을 해제합니다.
4. 압축을 푼 폴더 안의 `index.html` 파일을 더블클릭하거나, 사용 중인 웹 브라우저(Chrome, Edge, Safari 등) 창으로 드래그 앤 드롭하여 엽니다.

### 2.2. Git을 이용하여 로컬 환경에서 실행하기 (WSL / 개발자용)
터미널(WSL Ubuntu 등) 환경에서 Git을 이용해 프로젝트를 클론하고 로컬 웹 서버를 띄워 실행하는 방법입니다.

1. 터미널 열고 다음 명령어를 입력하여 저장소를 복제합니다.
   ```bash
   git clone "https://github.com/montycplusplus/ai-playground.git"
   ```
2. 복제된 프로젝트 폴더로 이동합니다.
   ```bash
   cd ai-playground
   ```
3. 로컬 웹 서버를 실행합니다. (Python 3가 설치되어 있는 경우)
   ```bash
   python3 -m http.server 8000
   ```

   (참고: VS Code를 주로 사용하신다면 프로젝트를 연 상태에서 Live Server 확장 프로그램을 이용하셔도 매우 편리합니다.)
   
4. 웹 브라우저를 열고 http://localhost:8000 으로 접속하여 웹사이트가 정상적으로 표시되는지 확인합니다.

## 3. 커스텀 및 자체 배포 방법 (GitHub Pages)

이 프로젝트는 각 지역 사회복지관이나 교육 환경에 맞게 프롬프트를 자유롭게 수정하여 사용할 수 있도록 만들어졌습니다. 원본 저장소의 유지보수 여부와 관계없이, 코드를 직접 수정하고 영구적으로 자체 호스팅하는 방법은 다음과 같습니다.

프롬프트를 추가 및 수정하거나 웹페이지의 디자인과 구성을 변경하려면 이 방식을 활용하여 주십시오.

### 3.1. 저장소 포크(Fork)하기

1. GitHub에 로그인한 후, 이 저장소 페이지 우측 상단의 **[Fork]** 버튼을 클릭하여 본인의 계정으로 프로젝트를 복사합니다.

   <img width="462" height="62" alt="Screenshot-fork" src="https://github.com/user-attachments/assets/5c987ba0-e6fc-4f7b-b37a-7367337b54a5" />

2. Owner가 현재 로그인 된 계정으로 되어 있는지 확인하고, Repository name에 복사할 저장소 이름을 입력합니다(ai-playground 권장). 이후 **[Create fork]** 버튼을 눌러 저장소 복사를 완료합니다.

   <img width="462" height="382" alt="Screenshot-fork-2" src="https://github.com/user-attachments/assets/3cb67d68-31eb-4cc5-a92f-6f74598a4c3c" />

3. 복사된 저장소로 이동하여, 저장소가 제대로 복사되었는지 확인합니다.

   <img width="462" height="190" alt="Screenshot-fork-check" src="https://github.com/user-attachments/assets/b3c07fb4-6e73-4257-af48-506d2c4673f2" />

4. 복사된 본인의 저장소에서 교육 대상에 맞게 코드를 자유롭게 수정합니다.
   * **프롬프트 수정 방법:** 프롬프트를 변경하는 상세한 방법은 `js` 폴더 내에 있는 `README.md` 파일을 참고하여 주십시오.
5. **⚠️ 주의사항:** 저장소를 포크하여 자체적으로 배포 및 사용하시더라도, 원본 프로젝트의 `LICENSE` 파일은 삭제하거나 변경해서는 안 됩니다.

### 3.1.1. 터미널(Git)을 이용해 포크한 저장소 로컬로 가져오기 (Git 사용자용)

Git이 설치되어 있고 터미널 사용이 익숙하시다면, 웹에서 포크를 완료한 후 아래 명령어를 통해 로컬 환경으로 가져와 작업하실 수 있습니다.

```bash
git clone "https://github.com/[본인계정명]/ai-playground.git"
cd ai-playground
```

코드 수정 후에는 `git commit` 및 `git push`를 통해 본인의 GitHub 저장소로 변경 사항을 반영하시면 됩니다.

### 3.2. GitHub Pages로 웹사이트 호스팅하기

별도의 서버 비용 없이 GitHub Pages 기능을 이용해 무료로 웹사이트를 배포할 수 있습니다.

1. 포크한 본인 계정의 저장소에서 상단의 **[Settings]** 탭을 클릭합니다.

   <img width="462" height="190" alt="Screenshot-settingsbutton" src="https://github.com/user-attachments/assets/c9423abc-2c4a-4b4f-939b-be38f6c977f3" />

2. 좌측 사이드바 메뉴에서 **[Pages]** 를 선택합니다.

   <img width="462" height="590" alt="Screenshot-pages" src="https://github.com/user-attachments/assets/3b8ca772-e0fe-46b2-b589-6bb9856b24df" />

3. 'Build and deployment' 섹션의 'Source'를 **Deploy from a branch**로 설정하고, 'Branch' 항목에서 **main** 브랜치를 선택하고 폴더는 **/(root)** 로 지정한 뒤 **[Save]** 버튼을 누릅니다.

   <img width="462" height="250" alt="Screenshot-pagessetting" src="https://github.com/user-attachments/assets/3c3349db-6dee-4648-858b-1d4952a827c1" />

4. 1~2분 정도 기다리면 설정 페이지 상단에 웹사이트 주소가 나타나며, 해당 링크로 즉시 접속할 수 있습니다. 기본적으로 제공되는 주소는 `https://[본인계정명].github.io/ai-playground/`이며, 해당 페이지에서 주소를 일부 수정할 수 있습니다.

   <img width="462" height="330" alt="Screenshot-pagescomplete" src="https://github.com/user-attachments/assets/8920a1e2-27b0-4645-9860-d21d42a1655c" />


## 4. 디렉토리 구조 (Directory Structure)

```text
ai-playground/
├── css/
│   └── style.css       # 웹페이지 스타일 및 레이아웃
├── js/
│   ├── README.md       # prompt.js 설명 파일
│   ├── app.js          # 메인 기능 로직 (UI 이벤트 처리, 프롬프트 복사 기능 등)
│   └── prompts.js      # 카테고리별 프롬프트 데이터 (JSON 형태의 데이터 모음)
├── .nojekyll           # GitHub Pages 배포 시 Jekyll 빌드 방지용 파일
├── LICENSE             # MIT 라이선스 정보 (변경 및 삭제 금지)
├── README.md           # 프로젝트 설명 파일
└── index.html          # 메인 진입점 (기본 웹 페이지)
```

## 5. 버그 리포트 및 문의 (Issues & Contact)
* 프롬프트 추가 건의, UI·UX 개선 아이디어, 버그 리포트 등은 언제든 환영합니다.
* GitHub의 **[Issues]** 탭을 통해 자유롭게 의견을 남겨주십시오.
* 오픈소스 기여(Pull Request) 역시 언제나 열려있습니다.
