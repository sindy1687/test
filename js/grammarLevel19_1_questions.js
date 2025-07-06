// 文法塔統一題庫系統 - 第十九關：未來式否定句
// 每個小關卡10題，難度逐關遞增，主詞多樣化

const UNIFIED_QUESTION_BANK = {
  easy: [
    // 30% 答案0
    {
      question: "I ___ to the movies tomorrow.",
      options: ["will not go", "not go", "will go not", "am not going"],
      correct: 0,
      explanation: "未來式否定句：主詞 + will not + 原形動詞",
      logicHint: "未來式否定句用 will not + 原形動詞",
      difficultWords: ["movies", "tomorrow"]
    },
    {
      question: "She ___ dinner tonight.",
      options: ["will not cook", "not cook", "will cook not", "is not cooking"],
      correct: 0,
      explanation: "未來式否定句：She + will not + cook",
      logicHint: "will not 可縮寫為 won't",
      difficultWords: ["dinner", "tonight", "cook"]
    },
    {
      question: "They ___ the party next week.",
      options: ["will not attend", "not attend", "will attend not", "are not attending"],
      correct: 0,
      explanation: "未來式否定句：They + will not + attend",
      logicHint: "next week 表示未來時間",
      difficultWords: ["attend", "party"]
    },
    
    // 20% 答案1
    {
      question: "We ___ early tomorrow morning.",
      options: ["will leave", "won't leave", "not leave", "will not leaving"],
      correct: 1,
      explanation: "未來式否定句：We + won't + leave (won't = will not)",
      logicHint: "won't 是 will not 的縮寫",
      difficultWords: ["early", "morning", "leave"]
    },
    {
      question: "He ___ his homework tonight.",
      options: ["will finish", "won't finish", "not finish", "will not finishing"],
      correct: 1,
      explanation: "未來式否定句：He + won't + finish",
      logicHint: "tonight 表示今晚（未來時間）",
      difficultWords: ["homework", "finish"]
    },
    
    // 20% 答案2
    {
      question: "The students ___ the test next Friday.",
      options: ["will take", "won't take", "will not take", "not take"],
      correct: 2,
      explanation: "未來式否定句：will not take (完整形式)",
      logicHint: "will not 是否定的完整形式",
      difficultWords: ["students", "test"]
    },
    {
      question: "My sister ___ to London next month.",
      options: ["will travel", "won't travel", "will not travel", "not travel"],
      correct: 2,
      explanation: "未來式否定句：will not travel",
      logicHint: "next month 表示下個月（未來）",
      difficultWords: ["sister", "London", "travel"]
    },
    
    // 30% 答案3
    {
      question: "You ___ late for school tomorrow.",
      options: ["will be", "won't be", "will not being", "won't be"],
      correct: 3,
      explanation: "未來式否定句：You + won't + be",
      logicHint: "be動詞在未來式中用原形 be",
      difficultWords: ["late", "school"]
    },
    {
      question: "The weather ___ good this weekend.",
      options: ["will be", "won't be", "will not being", "won't be"],
      correct: 3,
      explanation: "未來式否定句：won't be",
      logicHint: "this weekend 表示這個週末",
      difficultWords: ["weather", "weekend"]
    },
    {
      question: "I ___ my friends next Saturday.",
      options: ["will meet", "won't meet", "will not meeting", "won't meet"],
      correct: 3,
      explanation: "未來式否定句：won't meet",
      logicHint: "next Saturday 表示下週六",
      difficultWords: ["friends", "Saturday"]
    }
  ],
  medium: [
    // 30% 答案0
    {
      question: "The company ___ new employees next year.",
      options: ["will not hire", "not hire", "will hire not", "won't hiring"],
      correct: 0,
      explanation: "未來式否定句：will not hire",
      logicHint: "next year 表示明年",
      difficultWords: ["company", "employees", "hire"]
    },
    {
      question: "We ___ to the beach this summer.",
      options: ["will not go", "not go", "will go not", "won't going"],
      correct: 0,
      explanation: "未來式否定句：will not go",
      logicHint: "this summer 表示今年夏天",
      difficultWords: ["beach", "summer"]
    },
    {
      question: "She ___ her project on time.",
      options: ["will not complete", "not complete", "will complete not", "won't completing"],
      correct: 0,
      explanation: "未來式否定句：will not complete",
      logicHint: "on time 表示準時",
      difficultWords: ["project", "complete"]
    },
    
    // 20% 答案1
    {
      question: "They ___ the meeting tomorrow.",
      options: ["will attend", "won't attend", "not attend", "will not attending"],
      correct: 1,
      explanation: "未來式否定句：won't attend",
      logicHint: "won't = will not",
      difficultWords: ["meeting", "attend"]
    },
    {
      question: "He ___ his car next week.",
      options: ["will sell", "won't sell", "not sell", "will not selling"],
      correct: 1,
      explanation: "未來式否定句：won't sell",
      logicHint: "next week 表示下週",
      difficultWords: ["sell"]
    },
    
    // 20% 答案2
    {
      question: "The children ___ to school tomorrow.",
      options: ["will go", "won't go", "will not go", "not go"],
      correct: 2,
      explanation: "未來式否定句：will not go",
      logicHint: "will not 是完整否定形式",
      difficultWords: ["children", "school"]
    },
    {
      question: "My parents ___ home late tonight.",
      options: ["will come", "won't come", "will not come", "not come"],
      correct: 2,
      explanation: "未來式否定句：will not come",
      logicHint: "tonight 表示今晚",
      difficultWords: ["parents", "late"]
    },
    
    // 30% 答案3
    {
      question: "The store ___ open on Sunday.",
      options: ["will be", "won't be", "will not being", "won't be"],
      correct: 3,
      explanation: "未來式否定句：won't be",
      logicHint: "store 商店，on Sunday 在週日",
      difficultWords: ["store", "open", "Sunday"]
    },
    {
      question: "I ___ busy this afternoon.",
      options: ["will be", "won't be", "will not being", "won't be"],
      correct: 3,
      explanation: "未來式否定句：won't be",
      logicHint: "this afternoon 表示今天下午",
      difficultWords: ["busy", "afternoon"]
    },
    {
      question: "You ___ disappointed with the result.",
      options: ["will be", "won't be", "will not being", "won't be"],
      correct: 3,
      explanation: "未來式否定句：won't be",
      logicHint: "disappointed 失望的",
      difficultWords: ["disappointed", "result"]
    }
  ],
  hard: [
    // 30% 答案0
    {
      question: "The government ___ new taxes next year.",
      options: ["will not introduce", "not introduce", "will introduce not", "won't introducing"],
      correct: 0,
      explanation: "未來式否定句：will not introduce",
      logicHint: "introduce 引進，實施",
      difficultWords: ["government", "taxes", "introduce"]
    },
    {
      question: "Scientists ___ the cure soon.",
      options: ["will not discover", "not discover", "will discover not", "won't discovering"],
      correct: 0,
      explanation: "未來式否定句：will not discover",
      logicHint: "discover 發現",
      difficultWords: ["scientists", "cure", "discover"]
    },
    {
      question: "The committee ___ a decision today.",
      options: ["will not make", "not make", "will make not", "won't making"],
      correct: 0,
      explanation: "未來式否定句：will not make",
      logicHint: "make a decision 做決定",
      difficultWords: ["committee", "decision"]
    },
    
    // 20% 答案1
    {
      question: "Technology ___ human jobs completely.",
      options: ["will replace", "won't replace", "not replace", "will not replacing"],
      correct: 1,
      explanation: "未來式否定句：won't replace",
      logicHint: "replace 取代",
      difficultWords: ["technology", "replace", "completely"]
    },
    {
      question: "The economy ___ quickly this year.",
      options: ["will recover", "won't recover", "not recover", "will not recovering"],
      correct: 1,
      explanation: "未來式否定句：won't recover",
      logicHint: "recover 復甦",
      difficultWords: ["economy", "recover", "quickly"]
    },
    
    // 20% 答案2
    {
      question: "Climate change ___ easily.",
      options: ["will solve", "won't solve", "will not solve", "not solve"],
      correct: 2,
      explanation: "未來式否定句：will not solve",
      logicHint: "solve 解決",
      difficultWords: ["climate", "change", "solve", "easily"]
    },
    {
      question: "The price ___ significantly.",
      options: ["will increase", "won't increase", "will not increase", "not increase"],
      correct: 2,
      explanation: "未來式否定句：will not increase",
      logicHint: "increase 增加",
      difficultWords: ["price", "increase", "significantly"]
    },
    
    // 30% 答案3
    {
      question: "The project ___ profitable this quarter.",
      options: ["will be", "won't be", "will not being", "won't be"],
      correct: 3,
      explanation: "未來式否定句：won't be",
      logicHint: "profitable 有利可圖的",
      difficultWords: ["project", "profitable", "quarter"]
    },
    {
      question: "The situation ___ hopeless forever.",
      options: ["will be", "won't be", "will not being", "won't be"],
      correct: 3,
      explanation: "未來式否定句：won't be",
      logicHint: "hopeless 無望的",
      difficultWords: ["situation", "hopeless", "forever"]
    },
    {
      question: "The new policy ___ effective immediately.",
      options: ["will be", "won't be", "will not being", "won't be"],
      correct: 3,
      explanation: "未來式否定句：won't be",
      logicHint: "effective 有效的",
      difficultWords: ["policy", "effective", "immediately"]
    }
  ]
};

const DIFFICULT_WORDS_TRANSLATION = {
  "read": "閱讀",
  "book": "書",
  "now": "現在",
  "like": "喜歡",
  "pizza": "披薩",
  "play": "玩、打（球）",
  "basketball": "籃球",
  "every": "每個",
  "Sunday": "星期日",
  "watch": "看",
  "TV": "電視",
  "right now": "現在、此刻",
  "parents": "父母",
  "work": "工作",
  "hospital": "醫院",
  "eat": "吃",
  "breakfast": "早餐",
  "study": "學習",
  "English": "英文",
  "every day": "每天",
  "run": "跑步",
  "park": "公園",
  "go": "去",
  "school": "學校",
  "Sundays": "星期天們",
  "write": "寫",
  "letter": "信",
  "at the moment": "此刻、現在",
  "children": "孩子們",
  "outside": "外面",
  "sister": "姊妹",
  "like": "喜歡",
  "ice cream": "冰淇淋",
  "homework": "作業",
  "father": "爸爸",
  "drive": "開車",
  "every morning": "每天早上",
  "lunch": "午餐",
  "Anna": "安娜",
  "brother": "兄弟",
  "gym": "健身房",
  "weekends": "週末",
  "students": "學生們",
  "prepare": "準備",
  "test": "考試",
  "cousin": "表親",
  "visit": "拜訪",
  "summer": "夏天",
  "email": "電子郵件",
  "workers": "工人們",
  "start": "開始",
  "a.m.": "上午",
  "listen": "聽",
  "music": "音樂",
  "aunt": "阿姨",
  "cook": "煮、烹飪",
  "dinner": "晚餐",
  "every night": "每天晚上",
  "rain": "下雨",
  "outside": "外面",
  "grandparents": "祖父母",
  "every month": "每個月",
  "teacher": "老師",
  "teach": "教"
};

function getRandomQuestions(subLevel, count = 10) {
  // 取得難度對應
  let difficulty = subLevel;
  if (LEVEL_CONFIG && LEVEL_CONFIG[subLevel]) {
    difficulty = LEVEL_CONFIG[subLevel].difficulty;
  }
  const questions = UNIFIED_QUESTION_BANK[difficulty];
  if (!questions) {
    console.error(`找不到難度 ${subLevel} 的題目`);
    return [];
  }
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function getLevelInfo(subLevel) {
  return {
    title: `第九關：現在式與現在進行式混合題 - ${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
    description: `學習現在式與現在進行式的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`
  };
}

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "星辰之塔第一層",
        description: "探索未來式否定句的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "星辰之塔第二層", 
        description: "挑戰更複雜的未來式否定句",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的未來式否定句挑戰",
        difficulty: "hard"
    }
};

// 困難單字詞典
const DIFFICULT_WORDS = DIFFICULT_WORDS_TRANSLATION;

function getAllLevels() {
  return ['easy', 'medium', 'hard'];
} 