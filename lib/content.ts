export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  imagePosition?: string;
  sections: { title: string; paragraphs: string[] }[];
};
export const articles: Article[] = [
  {
    slug: 'english-for-hotel-jobs-puerto-plata',
    category: 'ENGLISH AT WORK',
    title: 'Your next hotel job starts with a conversation.',
    excerpt:
      'The English that matters at the front desk, in an interview, and when a guest needs a little extra help.',
    readTime: '6 min read',
    image: '/images/study-materials.webp',
    sections: [
      {
        title: 'In Puerto Plata, English is a working skill.',
        paragraphs: [
          'From the resorts of Playa Dorada to the smaller hotels around the historic center, hospitality runs on clear conversations. You do not need a perfect accent to help a guest feel welcome. You need to understand the request, ask the right question, and explain the next step with confidence.',
          'That is why useful English practice should look a little like your working day. A lesson about an imaginary airport is less valuable than rehearsing the check-in you will handle tomorrow. Start with the situations that actually happen in your role.',
        ],
      },
      {
        title: 'Build a small set of reliable phrases.',
        paragraphs: [
          'Practice a warm greeting, a clear explanation of check-in times, directions to breakfast, and a polite way to ask someone to repeat a detail. “Let me check that for you” is a useful bridge when you need a moment. “Could you confirm your last name?” is more helpful than guessing.',
          'Make a list of ten requests you hear most often. Write a short response to each, then say it aloud until the words feel natural. Change the room number, time, or name every time so that you learn the pattern instead of memorizing one answer.',
        ],
      },
      {
        title: 'Prepare for the conversation behind the interview.',
        paragraphs: [
          'A hiring conversation might include a question about a difficult guest, a change of shift, or the way you work with a team. Prepare short, honest examples from your experience. Explain what happened, what you did, and how the situation ended.',
          'You can practice a complete front-desk scenario with Carlos Reyna, whose experience includes Front Desk Supervisor and Night Manager roles in Dominican hospitality. Lessons are private and in person in Puerto Plata, with time to repeat the moments that matter to you.',
        ],
      },
      {
        title: 'Take one useful step this week.',
        paragraphs: [
          'Choose one guest interaction you find uncomfortable and rehearse it in English for ten minutes a day. Record yourself, listen for unclear words, and try again at a slower pace. Confidence grows when you can recognize your own progress, one real exchange at a time.',
        ],
      },
    ],
  },
  {
    slug: 'learn-spanish-puerto-plata-expats',
    category: 'LIFE IN PUERTO PLATA',
    title: 'A little Spanish. A much more local life.',
    excerpt:
      'A practical starting point for foreigners who want to feel at home on the Dominican north coast.',
    readTime: '5 min read',
    image: '/images/confident-learner.webp',
    sections: [
      {
        title: 'Go beyond ordering your morning coffee.',
        paragraphs: [
          'Living in Puerto Plata feels different when you can join the conversation. Spanish helps you explain a repair, get to know a neighbor, ask a follow-up question, and understand more than the price on a menu. You can begin making those connections long before you are fluent.',
          'The best place to start is your own routine. Think about where you shop, how you get around, and the small tasks that would be easier if you had the words ready. Those everyday needs make a useful lesson plan.',
        ],
      },
      {
        title: 'Learn phrases that give you room to learn.',
        paragraphs: [
          '“Estoy aprendiendo español” tells the person you are speaking with that you are making an effort. “¿Puedes hablar un poco más despacio?” asks for a slower pace. “¿Qué significa esa palabra?” turns a confusing moment into something you can learn from.',
          'Practice these aloud before you need them. When a conversation becomes difficult, having a familiar phrase ready helps you stay involved instead of immediately switching to English.',
        ],
      },
      {
        title: 'Listen to Dominican Spanish with curiosity.',
        paragraphs: [
          'Spoken language rarely sounds as neat as a textbook recording. You may hear words linked together, a softer final sound, or expressions you have not met before. Ask a patient local speaker to repeat a short phrase, and focus on its meaning in context.',
          'One-to-one, in-person Spanish lessons let you stop, ask questions, and repeat a real situation at your own pace. Carlos brings eight years of living in the United States to his understanding of what it feels like to navigate life in another language.',
        ],
      },
      {
        title: 'Make one local conversation a habit.',
        paragraphs: [
          'Pick a familiar place and try one extra sentence each time you visit. Ask how someone is, mention the weather, or explain what you are looking for. Consistency matters more than an ambitious first week. A useful lesson gives you something you can try in Puerto Plata that same afternoon.',
        ],
      },
    ],
  },
  {
    slug: 'private-english-classes-puerto-plata',
    category: 'THE LEARNING NOTES',
    title: 'What makes a private lesson worth your time?',
    excerpt: 'Less waiting for your turn. More practice with the words you actually need.',
    readTime: '5 min read',
    image: '/images/personal-lesson.webp',
    sections: [
      {
        title: 'A lesson should begin with your life.',
        paragraphs: [
          'When you look for private English classes in Puerto Plata, the most useful question is not how many pages a course covers. It is whether the lessons help you do something you could not do comfortably before. That might be introducing yourself in an interview, speaking to a guest, or understanding a visitor’s question.',
          'A private lesson makes space for a plan built around that goal. Your current level matters, but so do your schedule, your interests, and the situations where you want to use English.',
        ],
      },
      {
        title: 'You need time to speak.',
        paragraphs: [
          'Understanding an explanation and using it in conversation are different skills. In a one-to-one lesson, you have more chances to make a sentence, hear a correction, and try it again. The teacher can notice the patterns that keep slowing you down.',
          'Useful corrections are specific. Rather than interrupting every word, a teacher can focus on one or two things that will make your message clearer. You repeat the exchange, change a detail, and discover whether the new pattern is starting to stick.',
        ],
      },
      {
        title: 'Real situations make practice memorable.',
        paragraphs: [
          'A lesson might involve a hotel check-in, a job interview, or a conversation about your weekend. The situation gives vocabulary a purpose. You are more likely to remember a phrase if you can picture when you will use it.',
          'At Idiomas Pro, all lessons take place in person in Puerto Plata. There are no video classes. Before starting, you and Carlos discuss your goal, agree on a meeting arrangement, and choose a pace that fits your week.',
        ],
      },
      {
        title: 'Ask what happens between lessons.',
        paragraphs: [
          'A short speaking exercise, a few phrases to listen for, or a small real-world challenge can keep the lesson alive between meetings. Look for manageable practice you will actually do. Progress is easier to sustain when your learning fits into the life you already have.',
        ],
      },
    ],
  },
  {
    slug: 'dominican-spanish-phrases-puerto-plata',
    category: 'SPANISH, OUT LOUD',
    title: 'Spanish you will hear on an ordinary Tuesday.',
    excerpt: 'Friendly everyday phrases to help you follow the conversation in Puerto Plata.',
    readTime: '4 min read',
    image: '/images/confident-learner.webp',
    imagePosition: 'center 70%',
    sections: [
      {
        title: 'Start with a greeting, and give it a moment.',
        paragraphs: [
          'A friendly greeting makes everyday exchanges easier. “Buenos días,” “buenas tardes,” and “¿cómo estás?” are useful places to begin. Listen to the reply instead of rushing straight to your request. That small pause creates an opportunity to practice.',
          'In Puerto Plata, as anywhere, language changes with the person, the setting, and the relationship. A phrase you hear between close friends may not fit a formal conversation. Start with simple, polite Spanish and ask about expressions you do not understand.',
        ],
      },
      {
        title: 'A few phrases with everyday range.',
        paragraphs: [
          '“Por favor” and “gracias” are essential. “Con permiso” helps when passing someone or entering a space. “¿Me puedes ayudar?” opens a request for help. “¿Cuánto cuesta?” asks a price, and “¿Dónde queda…?” begins a question about a location.',
          'Learn phrases as complete pieces of conversation, including the likely answer. If you can ask a price but do not recognize numbers, you have only practiced half the exchange. Ask your teacher to vary the answer so that listening becomes part of the exercise.',
        ],
      },
      {
        title: 'Give yourself a graceful way to get unstuck.',
        paragraphs: [
          '“No entendí” means you did not understand. “¿Lo puedes repetir?” asks for a repeat. “¿Así se dice?” invites someone to help you check a phrase. These expressions let you stay in Spanish even when the conversation becomes less predictable.',
          'Write down unfamiliar words after a conversation, then bring them to your next lesson. Context will help your teacher explain how the phrase works and whether it suits the situations you are likely to encounter.',
        ],
      },
      {
        title: 'Practice where the words belong.',
        paragraphs: [
          'Use a greeting at your usual shop, ask a short question at a cafe, or practice directions before walking around the historic center. Private Spanish lessons in Puerto Plata can help you rehearse those exchanges with time for questions, pronunciation, and a second try.',
        ],
      },
    ],
  },
  {
    slug: 'english-job-interview-puerto-plata',
    category: 'ENGLISH AT WORK',
    title: '“Tell me about yourself.” You have got this.',
    excerpt: 'How to prepare for an English interview without sounding like a memorized script.',
    readTime: '6 min read',
    image: '/images/study-materials.webp',
    imagePosition: 'left center',
    sections: [
      {
        title: 'Prepare ideas before perfect sentences.',
        paragraphs: [
          'An English interview can feel intimidating when you are concentrating on grammar and your work experience at the same time. Separate those tasks. First, decide what you want the interviewer to understand about you. Then practice expressing those ideas in clear, straightforward English.',
          'For hospitality roles in Puerto Plata, useful themes include guest service, reliability, teamwork, and how you respond when something goes wrong. Choose examples you can explain honestly.',
        ],
      },
      {
        title: 'Keep your introduction clear and relevant.',
        paragraphs: [
          'A useful introduction can cover your current situation, relevant experience, and why the role interests you. It does not need to include your whole life. Aim for a short answer you can say comfortably, then practice a few variations so that you are not relying on one memorized paragraph.',
          'If you have worked with guests, describe a task you handled well. If you are starting out, talk about relevant skills and what you are doing to prepare. Clear, accurate English is more useful than complicated words you do not normally use.',
        ],
      },
      {
        title: 'Rehearse the follow-up questions.',
        paragraphs: [
          'Ask a practice partner to interrupt with a follow-up: “What did you do next?” or “How did the guest respond?” Learning to respond to an unexpected question helps make your preparation more flexible.',
          'It is fine to ask for a question to be repeated or clarified. Practice “Could you repeat the last part, please?” and “Do you mean…?” so they feel like normal parts of the conversation.',
        ],
      },
      {
        title: 'Practice with someone who knows the setting.',
        paragraphs: [
          'Carlos Reyna has worked as a Front Desk Supervisor and Night Manager in Dominican hospitality. Private English lessons can use that experience to build realistic interview and guest-service practice in person in Puerto Plata.',
          'Bring a job description, a few notes about your experience, and the questions you find hardest. Your lesson can focus on the conversation you actually need to have. No teacher can promise a job, but purposeful practice can help you arrive better prepared.',
        ],
      },
    ],
  },
  {
    slug: 'in-person-language-lessons-puerto-plata',
    category: 'THE LEARNING NOTES',
    title: 'Some things are better across a real table.',
    excerpt: 'Why we keep our language lessons personal, local, and entirely in person.',
    readTime: '5 min read',
    image: '/images/study-materials.webp',
    imagePosition: 'center 65%',
    sections: [
      {
        title: 'A conversation has more than words.',
        paragraphs: [
          'The pause before an answer, a helpful gesture, the moment someone realizes what you mean: these are part of speaking a language. Meeting in person gives you a shared space to notice and practice those details.',
          'Idiomas Pro offers private English and Spanish classes in Puerto Plata, Dominican Republic. Every lesson is in person. The approach is deliberately simple: one teacher, your goals, and enough room to have a real conversation.',
        ],
      },
      {
        title: 'Local life becomes part of the lesson.',
        paragraphs: [
          'If you are learning Spanish, you can practice the exchange you want to have at a nearby shop. If you are learning English for hospitality, you can rehearse directions a guest might ask for. A local teacher can help connect the lesson to the setting around you.',
          'That does not mean every session needs an excursion. A notebook and a quiet table can be enough. What matters is that your practice has a recognizable connection to something you want to do.',
        ],
      },
      {
        title: 'A comfortable routine helps you keep going.',
        paragraphs: [
          'Agree on a meeting place, lesson length, and schedule before beginning. Bring questions from the week. Let your teacher know when something feels too easy, too fast, or unrelated to your goal. A private lesson should have room for that feedback.',
          'Meeting arrangements are confirmed directly with Carlos. Availability and location depend on the plan you agree together; there is no automatic booking or payment on this website.',
        ],
      },
      {
        title: 'Start with a conversation about your conversation.',
        paragraphs: [
          'You do not need a polished explanation of your level to make an inquiry. Say what language you want to learn, what you want to use it for, and when you are usually free. Carlos can help you decide on a sensible starting point.',
          'Whether you are a Puerto Plata local preparing for an opportunity or a foreign resident hoping to connect more easily, the first step is the same: tell us what you would like to say with more confidence.',
        ],
      },
    ],
  },
];

export const faqs = [
  {
    q: 'Are all lessons really in person?',
    a: 'Yes. Every lesson is face to face in Puerto Plata, Dominican Republic. We do not offer video classes. The meeting location is agreed directly with Carlos before your first lesson.',
    category: 'Getting started',
  },
  {
    q: 'Do I need to know any English or Spanish already?',
    a: 'No. Complete beginners are welcome. We start with a friendly conversation about your goals and build your lessons from your current level, including absolute beginner.',
    category: 'Getting started',
  },
  {
    q: 'Who will teach my lessons?',
    a: 'Carlos Reyna teaches every lesson personally. He lived in the United States for eight years, has taught hundreds of English and Spanish students, and has worked in Dominican hotel management.',
    category: 'Getting started',
  },
  {
    q: 'Where in Puerto Plata do we meet?',
    a: 'We agree on a suitable, comfortable location in Puerto Plata before starting. Share your area when you inquire so Carlos can confirm the available arrangements. There is no public walk-in classroom address at this stage.',
    category: 'The practical details',
  },
  {
    q: 'Can I focus on English for hotel or resort work?',
    a: 'Absolutely. We can practice interviews, front-desk conversations, guest requests, and everyday hospitality English. Carlos draws on his work as a Front Desk Supervisor and Night Manager in the Dominican Republic.',
    category: 'Your lessons',
  },
  {
    q: 'I am a foreigner living here. Can I learn practical Spanish?',
    a: 'Yes. Lessons can focus on the Spanish you need for everyday life: shopping, meeting people, asking questions, and feeling more at home in Puerto Plata. We practice understanding replies as well as asking questions.',
    category: 'Your lessons',
  },
  {
    q: 'How long is a lesson?',
    a: 'The sample plans use 60-minute sessions. Your final lesson length, frequency, and schedule are agreed with Carlos before you commit to a plan.',
    category: 'The practical details',
  },
  {
    q: 'Can I reschedule a lesson?',
    a: 'Please contact Carlos as early as possible if your plans change. Rescheduling and cancellation conditions will be agreed before you book. Availability for a replacement session is confirmed directly.',
    category: 'The practical details',
  },
  {
    q: 'How do I book and pay?',
    a: 'Use the inquiry button to tell Carlos about your goals. The form prepares an email in your mail app; it does not automatically book or charge you. Carlos will confirm availability, meeting details, pricing, and payment arrangements directly.',
    category: 'The practical details',
  },
  {
    q: 'How quickly will I become fluent?',
    a: 'Your progress depends on your starting point, your goal, the time you practice, and how often you use the language. We set practical milestones and adjust as you learn. We do not promise fluency within a fixed number of lessons.',
    category: 'Your lessons',
  },
];

export const stories = [
  {
    name: 'Andrea M.',
    role: 'Hospitality professional',
    language: 'English',
    quote:
      'The first time I handled a whole guest check-in in English, I thought: okay, I can actually do this.',
    detail:
      'A learning journey centered on welcoming guests, explaining hotel services, and feeling prepared at the front desk.',
    initial: 'A',
    color: 'peach',
  },
  {
    name: 'James R.',
    role: 'New to Puerto Plata',
    language: 'Spanish',
    quote: 'I stopped translating everything in my head and started enjoying the conversation.',
    detail:
      'Practical Spanish for familiar places, friendly introductions, and the everyday moments that make a new city feel like home.',
    initial: 'J',
    color: 'lime',
  },
  {
    name: 'Mariel P.',
    role: 'Career-focused learner',
    language: 'English',
    quote: 'It felt like the lessons were built around my life. Because they were.',
    detail:
      'Personal practice for interview questions, talking about work experience, and explaining ideas clearly.',
    initial: 'M',
    color: 'lavender',
  },
];
