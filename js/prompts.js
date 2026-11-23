/*
 * 새 카테고리·프롬프트를 위해서는 아래 배열에 객체 하나를 추가한다.
 * template의 {key}와 fields[].key를 일치시키면 선택값이 자동 반영된다.
 * 서버나 계정 없이 작동하는 정적 데이터.
 * 자세한 내용은 js/README.md를 참조.
 */

// 1. 카테고리 목록
window.PROMPT_CATEGORIES = [
  { id: 'all', label: '전체 보기', icon: '✨' },
  { id: 'music', label: '음악', icon: '🎵' },
  { id: 'culture', label: '문화', icon: '🎥' },
  { id: 'cook', label: '요리', icon: '🍲' },
  { id: 'life', label: '생활', icon: '🏠' },
  { id: 'health', label: '건강·운동', icon: '🌿' },
  { id: 'writing', label: '문자·글쓰기', icon: '💌' },
  { id: 'travel', label: '여행', icon: '🧳' },
  { id: 'language', label: '외국어', icon: '🔠' },
  { id: 'education', label: '학습·공부', icon: '🎓' },
  { id: 'news', label: '뉴스', icon: '📰' },
  { id: 'shopping', label: '쇼핑', icon: '🛒' },
  { id: 'img_gen', label: '그림 만들기', icon: '🎨' },
  { id: 'play', label: '게임·놀이', icon: '🎮' }
];

// 2. 프롬프트 카드 목록
window.PROMPT_CARDS = [
  {
    id: 'songs', category: 'music', icon: '🎵', title: '좋아하는 가수의 대표곡 찾기',
    description: '가수 이름과 곡 수를 골라보세요.',
    template: '가수 {artist}의 대표곡 {count}곡을 알려줘.',
    fields: [
      { key: 'artist', label: '어떤 가수를 찾아볼까요?', options: ['남진', '태진아', '송대관', '나훈아', '이미자', '주현미'] },
      { key: 'count', label: '몇 곡을 알려드릴까요?', options: ['5', '10', '15'] }
    ],
    caution: 'AI는 가수·노래 제목을 틀릴 수 있어요. 음악 서비스 등에서 다시 확인해요.'
  },
  {
    id: 'songs_recommend', category: 'music', icon: '🎶', title: 'AI에게 음악 추천받기',
    description: '시대와 국가를 골라보세요.',
    template: '{when} {where} 히트곡 10곡을 찾아 추천해줘.',
    fields: [
      { key: 'when', label: '언제 나온 음악을 찾아볼까요?', options: ['70-80년대', '90년대', '00년대', '10년대', '최신'] },
      { key: 'where', label: '어느 나라의 음악을 찾아볼까요?', options: ['한국 음악', '팝송', '일본 음악', '유럽 음악', '라틴 음악'] }
    ],
    caution: 'AI는 가수·노래 제목을 틀릴 수 있어요. 음악 서비스 등에서 다시 확인해요.'
  },
  {
    id: 'karaoke', category: 'music', icon: '🎤', title: '따라 부르기 좋은 노래',
    description: '집·노래방에서 부를 곡을 AI에게 추천받아봐요.',
    template: '따라 부르기 좋은 {feels} {genre} 음악을 찾아 5곡을 추천해줘.',
    fields: [
      { key: 'feels', label: '어떤 분위기의 곡을 원하세요?', options: ['신나는', '감성적인', '슬픈', '정열적인', '차분한'] },
      { key: 'genre', label: '어느 장르의 곡을 원하세요?', options: ['댄스', '트로트', '발라드', '디스코', '팝송'] }
    ],
    caution: 'AI는 가수·노래 제목을 틀릴 수 있어요. 음악 서비스 등에서 다시 확인해요.'
  },
  {
    id: 'moody_songs', category: 'music', icon: '📻', title: '상황에 맞는 노래 추천',
    description: 'AI에게 상황에 맞는 음악을 추천받아요.',
    template: '{situation} 듣기 좋은 음악 10곡을 추천해줘.',
    fields: [
      { key: 'situation', label: '어떤 상황인가요?', options: ['비 오는 날', '아침에', '늦은 밤에', '운동할 때', '운전할 때'] }
    ],
    caution: 'AI는 가수·노래 제목을 틀릴 수 있어요. 음악 서비스 등에서 다시 확인해요.'
  },
  {
    id: 'books_recommend', category: 'culture', icon: '📚', title: '읽을 소설 추천받기',
    description: 'AI에게 흥미로운 소설책을 추천받아요.',
    template: '{genre} 장르의 소설 5권을 추천해줘. 작가와 출판일, 스포일러를 포함하지 않는 간단한 소개 등의 여러 정보를 포함해줘.',
    fields: [
      { key: 'genre', label: '어떤 장르의 책을 찾나요?', options: ['판타지', '추리', '스릴러', '범죄', 'SF', '고전', '무협'] }
    ],
    caution: 'AI는 작가·내용 등을 틀릴 수 있어요. 구매하기 전에 다시 확인해요.'
  },
  {
    id: 'movie_recommend', category: 'culture', icon: '🍿', title: '재밌는 영화 추천받기',
    description: 'AI에게 재밌는 영화를 추천받아요.',
    template: '{genre} 장르의 재미있는 영화 5편을 추천해줘. 각 영화의 개봉 연도, 감독, 주요 출연진, 줄거리를 스포일러 없이 소개해줘. 현재 한국에서 시청할 수 있는 OTT 서비스가 있다면 함께 알려줘. OTT 제공 여부는 최신 정보를 검색해서 확인하고, 확인할 수 없는 경우에는 확인이 필요하다고 표시해줘. 마지막에는 추천하는 이유와 영화별 특징을 비교해줘.',
    fields: [
      { key: 'genre', label: '어떤 장르의 영화를 찾나요?', options: ['로맨스', '드라마', '액션', '판타지', 'SF', '스릴러', '공포', '코미디', '추리', '애니메이션'] }
    ],
    caution: 'AI는 감독, 배우, 감상 방법 등을 틀릴 수 있어요.'
  },
  {
    id: 'recipe', category: 'cook', icon: '🍲', title: '재료 하나로 쉬운 요리 찾기',
    description: '집에 있는 재료를 골라 간단한 요리를 찾아봐요.',
    template: '사용할 재료는 {ingredient}. 이 재료로 집에서 쉽게 만들 수 있는 요리 {count}가지를 추천해줘. 재료와 만드는 순서를 쉽게 설명해줘.',
    fields: [
      { key: 'ingredient', label: '어떤 재료가 있나요?', options: ['두부', '달걀', '감자', '양배추', '버섯'] },
      { key: 'count', label: '몇 가지가 좋으세요?', options: ['2', '3', '5'] }
    ]
  },
  {
    id: 'foreign_recipe', category: 'cook', icon: '🍽️', title: '이국적인 음식 레시피 찾기',
    description: '맛있는 외국 음식 요리법을 찾아봐요.',
    template: '한국인 입맛에 잘 맞고 집에서 쉽게 만들 수 있는 {for}용 {country} 음식 5종류의 레시피를 알려줘. 만약 한국에서 구하기 힘든 재료가 있다면 대체할 수 있는 재료도 알려줘.',
    fields: [
      { key: 'for', label: '어떨 때를 위해 요리하나요?', options: ['손님 대접', '특별한 기념일', '점심 식사', '저녁 식사', '간식'] },
      { key: 'country', label: '어느 나라의 음식을 찾아볼까요?', options: ['미국', '영국', '일본', '중국', '스페인', '이탈리아', '프랑스'] }
    ]
  },
  {
    id: 'traditional_recipe', category: 'cook', icon: '😋', title: '지역별 향토 음식 알아보기',
    description: '지역의 색이 녹아있는 특별한 향토 음식 요리법을 찾아봐요.',
    template: '{city} 지역의 대표적인 향토 음식 중 잘 알려진 음식 {count}가지를 소개하고 각 음식의 특징과 레시피를 알려줘. 해당 지역의 향토 음식인지 확실하지 않으면 억지로 포함하지 말고 그 사실을 알려줘',
    fields: [
      { key: 'city', label: '어느 지역의 음식이 궁금한가요?', options: ['광주', '전주', '부산', '대구', '대전', '강릉', '제주'] },
      { key: 'count', label: '몇 가지가 좋으세요?', options: ['2', '3', '5'] }
    ]
  },
  {
    id: 'recipe_upgrade', category: 'cook', icon: '🍳', title: '새 요리법으로 특별한 요리 만들기',
    description: '익숙한 요리를 특별하게 만들어봐요.',
    template: '평범한 {recipe}를 {how} 만들 수 있는 레시피를 알려줘.',
    fields: [
      { key: 'recipe', label: '어떤 요리를 바꿔보고 싶나요?', options: ['김치찌개', '된장찌개', '볶음밥', '비빔밥'] },
      { key: 'how', label: '어떻게 만들어보고 싶은가요?', options: ['고급스럽게', '해산물을 넣어서', '짜지 않게', '건강하게'] }
    ]
  },
  {
    id: 'gourmet', category: 'life', icon: '🥢', title: '맛집 추천받기',
    description: 'AI에게 유명 맛집을 추천받아봐요.',
    template: '{with} 함께 방문하기 좋은 {location} 지역의 {what} 맛집 5곳을 추천해줘. 현재 실제로 영업 중인 식당인지 확인하고, 식당의 공식 홈페이지나 신뢰할 수 있는 최신 정보를 바탕으로 대표 메뉴, 가격대, 주소, 영업 시간, 예약 방법을 알려줘. 확인할 수 없는 정보는 추측하지 말고 확인이 어렵다고 표시해줘. 각 식당을 추천하는 이유도 간단히 설명해줘.',
    fields: [
      { key: 'with', label: '누구와 방문할 예정인가요?', options: ['가족과', '친구들과', '직장 동료들과', '동아리 회원들과'] },
      { key: 'location', label: '어느 지역의 맛집이 궁금한가요?', options: ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구',
        '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'] },
      { key: 'what', label: '어떤 요리를 원하나요?', options: ['한식', '중식', '일식', '양식', '경양식', '분식'] }
    ],
    caution: '주소, 전화번호, 영업 시간 등의 정보는 정확하지 않을 수 있어요. 실제로 방문하기 전 다시 한 번 확인해요.'
  },
  {
    id: 'emergency', category: 'life', icon: '🚨', title: '긴급 상황에서의 대처 방법 배우기',
    description: '위급한 상황에 대처하기 위한 방법을 배워 봐요.',
    template: '혹시 일어날 수도 있는 위급 상황에서의 대처법을 미리 배우고 싶어. {situation}을 대비하기 위해 그 상황에서 해야 할 행동들을 정리해서 알려줘.',
    fields: [
      { key: 'situation', label: '어떤 상황이 궁금한가요?', options: ['사람이 물에 빠진 상황', '갑자기 사람이 쓰러진 상황', '일행이 산에서 이상한 버섯을 먹은 상황', '일행이 산에서 실종된 상황'] }
    ],
    caution: 'AI는 일반적인 방법을 알려줄 뿐, 실제로 도움을 줄 수는 없어요. 만약 실제로 긴급한 상황이 발생한다면 경찰, 119 등에게 도움을 청하세요.'
  },
  {
    id: 'exercise', category: 'health', icon: '🌿', title: '집에서 하는 가벼운 운동',
    description: '운동 시간과 종류를 골라보세요.',
    template: '집에서 {minutes} 정도 해볼 수 있는 가벼운 {kind} 운동을 3가지 소개해줘. 방법을 쉽게 설명하고, 무리가 가면 중단해야 한다는 주의사항도 알려줘.',
    fields: [
      { key: 'minutes', label: '얼마나 운동할까요?', options: ['5분', '10분', '15분'] },
      { key: 'kind', label: '어떤 운동을 해볼까요?', options: ['의자', '스트레칭', '균형감각'] }
    ],
    caution: '운동 방법은 일반적인 정보에요. 통증이나 질환이 있다면 전문가에게 확인하세요.'
  },
  {
    id: 'well_being', category: 'health', icon: '❤️‍🩹', title: '건강을 위한 생활 습관',
    description: 'AI에게 건강한 생활 습관을 배워봐요.',
    template: '{for} 건강을 유지하는 데 도움이 되는 {behavior}을 5가지 알려줘. 의학적으로 알려진 근거를 바탕으로 설명하고, 일상생활에서 쉽게 실천할 수 있는 방법을 중심으로 소개해줘. 각 방법의 실천 요령과 주의사항도 함께 알려줘. 과학적 근거가 부족한 내용은 그 사실을 명확히 표시해줘.',
    fields: [
      { key: 'for', label: '어떤 것이 궁금한가요?', options: ['관절', '두뇌', '심혈관'] },
      { key: 'behavior', label: '무엇을 알아볼까요?', options: ['생활 습관', '간단한 운동', '식습관'] }
    ],
    caution: 'AI는 정확하지 않은 정보를 알려줄 수 있어요. 실제로 건강에 이상이 있다면 의사의 진료를 받으세요.'
  },
  {
    id: 'stop_smoking', category: 'health', icon: '🚭', title: '금연 계획 세우기',
    description: 'AI와 함께 금연 계획을 세워봐요.',
    template: '담배를 하루에 대략 {smoking_amount}정도 피우는 사람이 금연을 하기 위한 {period}간의 계획을 세워줘.',
    fields: [
      { key: 'smoking_amount', label: '하루에 담배를 얼마나 피우나요?', options: ['3~5개비', '반 갑', '1갑', '2갑', '2갑 이상'] },
      { key: 'period', label: '기간은 어느 정도가 좋은가요?', options: ['1달', '3개월', '6개월', '1년'] }
    ],
    caution: '금연 방법은 일반적인 정보에요. 실제로 담배와 관련된 심각한 문제가 있다면 전문가의 도움을 받으세요.'
  },
  {
    id: 'dietary_supplement', category: 'health', icon: '💊', title: 'AI와 함께 영양제 알아보기',
    description: '영양제의 효능과 주의사항을 알아봐요.',
    template: '{for}와 관련해 흔히 알려진 영양 성분이나 영양제 3가지를 소개해줘. 각각의 효능에 대한 과학적 근거와 한계, 부작용, 주의해야 할 사람, 약물 상호작용을 쉽게 설명해줘. 효과가 입증되지 않았다면 그 점도 명확히 알려줘. 개인에게 복용을 권장하지는 마.',
    fields: [
      { key: 'for', label: '어떤 분야가 궁금한가요?', options: ['눈 건강', '관절 건강', '장 건강', '기억력'] }
    ],
    caution: 'AI의 설명은 정확하지 않거나 빠진 내용이 있을 수 있어요. 영양제는 복용 중인 약과 상호작용할 수 있으므로, 구매하거나 복용하기 전에 의사·약사와 상담하세요.'
  },
  {
    id: 'message', category: 'writing', icon: '💌', title: '따뜻한 문자 쓰기',
    description: '누구에게 어떤 문자를 쓸지 골라보세요.',
    template: '{recipient}에게 보낼 따뜻한 {purpose} 문자를 써줘.',
    fields: [
      { key: 'recipient', label: '누구에게 보내나요?', options: ['친구', '가족', '동아리 회원', '이웃'] },
      { key: 'purpose', label: '어떤 내용인가요?', options: ['안부', '생일 축하', '감사 인사', '모임 초대'] }
    ]
  },
  {
    id: 'holiday_card', category: 'writing', icon: '📭', title: '기념일 카드 문구 만들기',
    description: '특별한 기념일 카드에 들어갈 인삿말을 만들어봐요.',
    template: '{recipient}에게 보낼 {purpose} 카드에 들어갈 특별한 글을 써줘.',
    fields: [
      { key: 'recipient', label: '누구에게 보내나요?', options: ['친구', '가족', '동아리 회원', '이웃'] },
      { key: 'purpose', label: '어떤 기념일인가요?', options: ['설날', '추석', '신년', '크리스마스', '생일'] }
    ]
  },
  {
    id: 'daytrip', category: 'travel', icon: '🧳', title: '가까운 곳으로 나들이 떠나기',
    description: '출발 지역과 나들이 주제를 선택해 보세요.',
    template: '{city}에서 대중교통으로 갈 수 있는 {theme} 당일치기 여행지 3곳을 추천해줘. 방문 전에 운영시간과 교통편을 확인하는 방법도 알려줘.',
    fields: [
      { key: 'city', label: '어디에서 출발하나요?', options: ['서울', '인천', '수원', '부천', '성남'] },
      { key: 'theme', label: '어떤 곳이 좋으세요?', options: ['자연 풍경이 좋은', '역사 이야기가 있는', '걷기 좋은'] }
    ],
    caution: '운영시간, 요금, 교통편은 바뀔 수 있어요. 방문 전에 공식 사이트로 확인해요.'
  },
  {
    id: 'vacation', category: 'travel', icon: '✈️', title: 'AI와 해외 여행 계획 짜기',
    description: '질문 하나로 간편하게 해외 여행 계획을 세워봐요.',
    template: '{when}에 {term}동안 {city} 여행을 가려고 해. 처음 방문하는 여행자도 쉽게 따라 할 수 있도록 효율적인 여행 계획을 세워줘. 유명 관광지, 현지 맛집, 대표적인 문화 체험을 포함하고 하루별로 방문 순서를 정리해줘. 각 장소의 예상 소요 시간, 장소 간 이동 방법, 예상 교통비와 입장료도 알려줘. 현재 운영 여부와 예약 필요 여부는 최신 정보를 검색해서 확인하고, 확인되지 않은 정보는 추측하지 마. 무리하게 일정을 채우지 말고 충분한 휴식 시간도 포함해줘.',
    fields: [
      { key: 'when', label: '언제 여행을 떠날 예정인가요?', options: ['봄', '여름', '가을', '겨울'] },
      { key: 'term', label: '얼마나 여행하나요?', options: ['1박 2일', '2박 3일', '3박 4일', '4박 5일', '일주일'] },
      { key: 'city', label: '어디를 여행하나요?', options: ['도쿄', '오사카', '상하이', '베이징', '로스앤젤레스', '뉴욕', '런던', '하노이', '파리', '베를린'] }
    ],
    caution: 'AI는 정확하지 않은 정보를 알려줄 수 있어요. 실제로 여행을 떠나기 전에 직접 다시 확인해요.'
  },
  {
    id: 'travel_language', category: 'language', icon: '🌎', title: '여행지 필수 회화 검색',
    description: '해외여행 중 당황하지 않게 상황별 필수 문장을 알아봐요.',
    template: '{country} 여행 중 {situation} 자주 쓰이는 필수 문장 5개를 한국어 발음과 함께 알려줘.',
    fields: [
      { key: 'country', label: '어디로 여행을 가시나요?', options: ['미국', '일본', '중국', '베트남', '태국', '프랑스'] },
      { key: 'situation', label: '어떤 상황인가요?', options: ['식당에서 주문할 때', '길을 잃었을 때', '물건을 살 때', '응급 상황일 때'] }
    ]
  },
  {
    id: 'foreign_language_learning', category: 'language', icon: '💬', title: '외국어 단어 공부하기',
    description: 'AI와 함께 간단한 외국어 단어를 공부해봐요.',
    template: '자주 쓰이는 {level} {language} 단어 5개를 알려줘. 각 단어의 뜻, 정확한 표기, 한국어 발음, 실제 회화에서 사용할 수 있는 예문 2개를 소개해줘. 예문마다 자연스러운 한국어 번역도 함께 제공해줘. 마지막에는 배운 단어를 활용한 간단한 복습 퀴즈 3문제를 내줘.',
    fields: [
      { key: 'level', label: '어느 정도가 좋나요?', options: ['초급 수준의', '중급 수준의', '고급 수준의']},
      { key: 'language', label: '어떤 언어를 공부할건가요?', options: ['영어', '일본어', '중국어', '스페인어', '프랑스어', '독일어'] }
    ]
  },
  {
    id: 'easy_term', category: 'education', icon: '💹', title: '어려운 시사 용어 쉽게 이해하기',
    description: '요즘 뉴스에 나오는 어려운 말을 AI가 쉽게 설명해요.',
    template: '요즘 뉴스에 자주 나오는 {keyword}에 대해 쉽게 이해할 수 있게 {format} 설명해줘.',
    fields: [
      { key: 'keyword', label: '어떤 용어가 궁금한가요?', options: ['금리 인상', '인플레이션', '딥페이크 범죄', '탄소 중립', '블록체인'] },
      { key: 'format', label: '어떻게 설명해드릴까요?', options: ['적절한 비유를 통해', '짧게 요약하여', '자세하고 구체적으로'] }
    ]
  },
  {
    id: 'easy_concept', category: 'education', icon: '💭', title: '어려운 개념 쉽게 이해하기',
    description: '어려운 개념들을 AI가 쉽게 설명해요.',
    template: '{keyword}에 대해 배경 지식이 전혀 없는 사람도 쉽게 이해할 수 있게 설명해줘. 필요하다면 사진을 인용하거나 그래프, 표와 같은 시각화 도구들을 적극 활용해줘.',
    fields: [
      { key: 'keyword', label: '어떤 개념이 궁금한가요?', options: ['인공지능(AI)', '지구 온난화', '프로틴플레이션', '비트코인', '미분과 적분'] }
    ]
  },
  {
    id: 'history_people', category: 'education', icon: '👑', title: '역사 속 인물에 대해 알아보기',
    description: 'AI에게 역사 속 인물의 이야기를 들어봐요.',
    template: '{person}의 생애와 주요 사건, 주된 업적등을 정리해 쉽고 친근하게 설명해줘. 야사나 구전되는 일화의 경우는 포함하되, 역사적으로 확인되지 않은 내용이라는 점을 알려줘. 해당 인물에 대한 평가는 제한적으로만 포함하여 최대한 중립적으로 서술하고, 현대의 관점에서 생각해 볼 만한 한계점이나 비판점이 있다면 따로 알려줘. 한계점과 비판점은 없거나 적다면 생략해도 좋아.',
    fields: [
      { key: 'person', label: '어떤 인물이 궁금한가요?', options: ['이순신 장군', '세종대왕', '안중근 의사', '람세스 3세', '클레오파트라 7세',
        '오다 노부나가', '사카모토 료마', '마오쩌둥', '진시황', '에이브러햄 링컨', '말콤 엑스', '윈스턴 처칠', '마하트마 간디'] }
    ]
  },
  {
    id: 'history_event', category: 'education', icon: '📜', title: '역사 속 사건에 대해 알아보기',
    description: 'AI에게 역사 속 사건의 이야기를 들어봐요.',
    template: '{event}에 대해 배경 지식이 없는 사람도 이해할 수 있도록 쉽고 친근하게 설명해줘. 사건이 발생한 배경, 진행 과정, 주요 인물, 사건의 결과와 역사적 의의를 포함해줘. 역사학자들 사이에 해석이 엇갈리는 부분이 있다면 주요 관점을 균형 있게 소개해줘. 확인된 역사적 사실과 후대의 해석이나 논쟁을 구분해서 설명해줘.',
    fields: [
      { key: 'event', label: '어떤 사건이 궁금한가요?', options: ['임진왜란', '6·25 전쟁', '서울의 봄과 5·18 민주화운동', '한강의 기적',
        '미국 남북전쟁', '9·11 테러', '사라예보 사건', '대약진 운동과 문화대혁명', '1980년대 일본 거품경제와 잃어버린 10년', '서브프라임 모기지 사태', '체르노빌 원자력 발전소 폭발 사고'] }
    ]
  },
  {
    id: 'news_korea', category: 'news', icon: '🗞️', title: '한국의 중요 뉴스 확인하기',
    description: 'AI가 중요한 뉴스들을 정리해줘요.',
    template: '오늘 한국의 {category} 분야에서 중요한 뉴스를 찾아 5가지 소개해줘. 반드시 최신 뉴스 기사를 검색하고, 각 뉴스의 발생 날짜와 핵심 내용을 쉽게 요약해줘. 뉴스가 실제로 발생한 날짜와 기사가 작성된 날짜를 구분해줘. 각 뉴스의 출처와 원문 링크를 제공하고, 아직 확인되지 않은 내용이나 논란이 있는 부분은 따로 표시해줘.',
    fields: [
      { key: 'category', label: '어떤 뉴스가 궁금한가요?', options: ['정치', '경제', '사회', '생활/문화', '스포츠', '연예'] }
    ],
    caution: 'AI는 정확하지 않은 정보를 제공할 수 있어요. 무조건 믿지 말고 직접 뉴스를 확인하는 것이 정확해요.'
  },
  {
    id: 'news_world', category: 'news', icon: '🌐', title: '세계 각국의 뉴스 확인하기',
    description: 'AI가 외국의 소식들을 정리해줘요.',
    template: '오늘 {country}에서 발생한 주요 뉴스 5가지를 찾아 소개해줘. 최신 뉴스 기사를 검색하고, 각 뉴스의 발생 날짜, 핵심 내용, 관련 인물을 쉽게 설명해줘. 뉴스의 출처와 원문 링크를 함께 제공하고, 사실관계가 아직 확인되지 않은 내용은 명확히 표시해줘.',
    fields: [
      { key: 'country', label: '어떤 나라가 궁금한가요?', options: ['미국', '중국', '일본', '러시아', '유럽', '남미'] }
    ],
    caution: 'AI는 정확하지 않은 정보를 제공할 수 있어요. 무조건 믿지 말고 직접 뉴스를 확인하는 것이 정확해요.'
  },
  {
    id: 'gift_recommend', category: 'shopping', icon: '🎁', title: '센스 있는 선물 추천받기',
    description: '나이와 예산에 딱 맞는 선물을 AI가 골라줘요.',
    template: '{age} {gender}에게 {budget} 선물하기 좋은 센스있는 아이템 3가지를 추천해주고, 그 이유도 함께 말해줘.',
    fields: [
      { key: 'age', label: '선물 받을 분의 연령대는?', options: ['20대', '30대', '40대', '50대 이상', '10대'] },
      { key: 'gender', label: '성별은 어떻게 되나요?', options: ['여성', '남성'] },
      { key: 'budget', label: '예산은 얼마인가요?', options: ['3만 원대 예산으로', '5만 원대 예산으로', '10만 원대 예산으로', '예산을 고려하지 않고'] }
    ]
  },
  {
    id: 'product_recommend', category: 'shopping', icon: '📺', title: '좋은 제품 추천받기',
    description: 'AI가 좋은 제품을 추천해줘요.',
    template: '{product}를 구매하려고 해. {prefer} 제품 3가지를 찾아서 비교해줘. 각 제품의 정확한 모델명, 주요 사양, 장점과 단점, 현재 확인 가능한 가격대, 구매할 수 있는 판매처를 알려줘. 실제 사용자 후기와 전문가 평가를 구분해서 소개하고, 확인할 수 없는 후기나 가격은 만들어내지 마. 제품별 차이점을 표로 정리하고 어떤 사람에게 적합한지도 설명해줘.',
    fields: [
      { key: 'product', label: '어떤 상품을 구매하나요?', options: ['TV', '냉장고', '스마트폰', '노트북', '카메라'] },
      { key: 'prefer', label: '어떤 제품을 선호하나요?', options: ['가성비가 좋은', '최근에 출시된', '성능이 가장 좋은'] }
    ],
    caution: 'AI는 가격, 판매처 등의 정보를 잘못 알려줄 수도 있어요. 실제로 구매하기 전 다시 확인해요.'
  },
  {
    id: 'picture', category: 'img_gen', icon: '🎨', title: '예쁜 풍경 그림 만들기',
    description: '그리고 싶은 풍경과 그림 느낌을 골라보세요.',
    template: '{scene} 풍경을 {style} 느낌으로 예쁘게 그려줘. 그림에는 글자를 넣지 말아줘.',
    fields: [
      { key: 'scene', label: '어떤 풍경을 그릴까요?', options: ['가을 숲', '꽃이 핀 정원', '노을 지는 바다', '눈 덮인 시골 마을'] },
      { key: 'style', label: '어떤 느낌이 좋으세요?', options: ['수채화', '유화', '점묘화', '사진 같은', '동화책 삽화'] }
    ],
    caution: 'AI 그림은 실제 사진이 아니에요. 다른 사람의 얼굴을 허락 없이 사용하지 않아요.'
  },
  {
    id: 'art', category: 'img_gen', icon: '🖼️', title: '예술적인 그림 만들기',
    description: 'AI가 예술 작품같은 그림을 만들어 줘요.',
    template: '{scene}을 주제로 예술 작품 같은 그림을 만들어줘. {style}적인 스타일로 그리고, 그림에는 글자를 넣지 말아줘.',
    fields: [
      { key: 'scene', label: '어떤 그림을 그릴까요?', options: ['하늘에서 내려다본 거리의 모습', '노을진 여름 바닷가에서 휴가를 즐기는 사람들', '일상적인 카페의 사람들', '꽃 한 송이와 벌새 한 마리', '구름 낀 언덕 위의 성'] },
      { key: 'style', label: '어떤 느낌으로 그릴까요?', options: ['인상주의', '모더니즘', '신고전주의', '르네상스', '바로크', '낭만주의'] }
    ],
    caution: 'AI 그림은 실제 사진이 아닐 수 있어요. 다른 사람의 얼굴을 허락 없이 사용하지 않아요.'
  },
  {
    id: 'shiritori', category: 'play', icon: '🕹️', title: 'AI와 끝말잇기 대결하기',
    description: 'AI와 끝말잇기 대결을 해보세요!',
    template: '나와 한국어 끝말잇기 게임을 하자. 네가 먼저 일반적인 명사 한 단어로 시작해줘. 이미 사용한 단어는 다시 사용하지 말고, 실제 국어사전에 등재된 단어만 사용해줘. 한방 단어와 외래어는 사용하지 않는 것으로 하자. 내 차례가 되면 마지막 글자로 시작하는 단어를 말해줘. 규칙을 어기면 인정하고 다시 진행해줘. 게임을 시작하자!',
    fields: [
    ],
    caution: 'AI가 실제로 존재하지 않는 단어를 사용하거나, 규칙을 어길 수도 있어요.'
  },
  {
    id: 'twenty_questions', category: 'play', icon: '🕵️', title: 'AI와 스무고개 하기',
    description: 'AI가 생각한 제시어를 질문을 통해 맞혀보세요!',
    template: '나랑 스무고개 게임을 하자. 네가 {theme} 중 하나를 마음속으로 정하면, 내가 예·아니오로 대답할 수 있는 질문을 해서 맞혀볼게. 준비됐으면 시작하자고 말해줘.',
    fields: [
      { key: 'theme', label: '어떤 주제로 게임할까요?', options: ['동물', '과일', '직업', '한국 위인', '한국 연예인'] }
    ],
    caution: 'AI가 게임 도중에 자기가 생각한 정답을 까먹거나 말을 바꿀 수도 있어요.'
  },
  {
    id: 'trivia_quiz', category: 'play', icon: '🤔', title: 'AI가 내는 재밌는 상식 퀴즈',
    description: 'AI가 내는 재밌는 상식 퀴즈를 맞혀보세요!',
    template: '{theme}에 대한 간단하고 재밌는 상식 퀴즈 5문제를 내줘.',
    fields: [
      { key: 'theme', label: '어떤 주제로 문제를 낼까요?', options: ['동물', '식물', '유명인', '역사', '영단어', '수학·과학', '문학', '한국 대중문화'] }
    ]
  },
  {
    id: 'nonsense_quiz', category: 'play', icon: '🤣', title: 'AI가 내는 재밌는 넌센스 퀴즈',
    description: 'AI가 내는 재밌는 넌센스 퀴즈를 맞혀보세요!',
    template: '간단하고 재밌는 넌센스 퀴즈 5문제를 내줘.',
    fields: [
    ],
    caution: 'AI가 억지스러운 문제를 낼 수도 있어요.'
  }
];

// 3. 후속 질문 목록
window.FOLLOWUP_PROMPTS = [
  '더 쉽게 설명해줘.',
  '조금 더 짧게 정리해줘.',
  '다른 예시도 3개 알려줘.',
  '표로 정리해줘.',
  '순서대로 하나씩 알려줘.',
  '방금 답변에서 확실하지 않은 내용이 있으면 알려줘.',
  '실생활에서 활용할 수 있는 방법도 알려줘.',
  '가장 중요한 내용만 3가지로 정리해줘.'
];
