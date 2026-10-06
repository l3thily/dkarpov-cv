import { createContext, useContext, useEffect, useState } from 'react'

const dict = {
  ru: {
    nav: { about: 'Обо мне', experience: 'Опыт', projects: 'Проекты', contact: 'Контакты' },
    hero: {
      eyebrow: 'Москва · открыт к предложениям',
      name1: 'Даниил',
      name2: 'Карпов',
      roles: ['Python-разработчик', 'AI-автоматизация', 'экономист-международник', 'риски и страхование'],
      rolePrefix: '',
      statement:
        'Студент 4-го курса МЭО МГИМО со специализацией в рисках и страховании — и разработчик, который доводит идеи до продакшна: AI-боты, автоматизация процессов, full-stack приложения.',
      briefTitle: '// коротко',
      brief: [
        { label: 'стек', value: 'Python · FastAPI · React · Flutter · PostgreSQL' },
        { label: 'ai', value: 'GPT · Claude · Whisper · DeepSeek · LangChain' },
        { label: 'учёба', value: 'МГИМО · МЭО, 4 курс · риски и страхование' },
        { label: 'языки', value: 'русский · english C1 · العربية A1' },
      ],
      scroll: 'листай вниз',
    },
    marquee: ['Python', 'FastAPI', 'React', 'Flutter', 'PostgreSQL', 'asyncio', 'OpenAI API', 'Claude API', 'DeepSeek', 'Whisper', 'LangChain', 'Playwright', 'Docker', 'Linux VPS', 'systemd', 'Telegram API', 'SQLite', 'ffmpeg', 'TypeScript', 'Next.js', 'Three.js', 'Celery'],
    about: {
      index: '01',
      title: 'Обо мне',
      lead: [
        'Я студент 4-го курса МЭО МГИМО, специализация — управление рисками и страхование. Параллельно с учёбой делаю коммерческие проекты как разработчик: телеграм-боты, AI-автоматизация, десктопные и веб-приложения. Всё, что перечислено ниже, я написал сам — от идеи до деплоя на сервер — и это реально используется: издательством, юридической фирмой, строительной и реставрационной компаниями, командой переводчиков.',
        'До этого я работал с клиентами в Альфа-Банке, проходил практику менеджером ВЭД, развивал юмористический паблик ВКонтакте до 25 тысяч подписчиков и возил товары из Китая под заказ. Этот опыт помогает в разработке: я понимаю, как устроены процессы заказчика и где они буксуют, поэтому делаю инструменты, которые вписываются в реальную работу, а не усложняют её.',
        'Ищу стажировку или позицию, где пригодится и экономическое образование, и умение писать код: финансы, аналитика, автоматизация.',
      ],
      groups: [
        { name: 'Разработка', items: ['Python (asyncio, aiogram, Telethon)', 'FastAPI · PostgreSQL · SQLite', 'TypeScript · React · Next.js', 'Flutter · Dart', 'Docker · Linux · systemd'] },
        { name: 'AI и интеграции', items: ['OpenAI GPT · Whisper', 'Claude API', 'DeepSeek API', 'LangChain', 'Groq'] },
        { name: 'Домен', items: ['Риски и страхование', 'ВЭД и логистика Китай—РФ', 'Банковские продукты', 'Контент и рост сообществ'] },
        { name: 'Языки', items: ['Русский — родной', 'English — C1', 'العربية — A1'] },
      ],
    },
    experience: {
      index: '02',
      title: 'Опыт',
      jobs: [
        {
          org: 'Альфа-Банк',
          role: 'Специалист по работе с физическими лицами',
          period: '9 месяцев',
          desc: 'Консультирование клиентов, подбор банковских продуктов, работа с возражениями и нестандартными ситуациями. Ежедневная работа с людьми под метрики — школа коммуникации, которую не даёт ни один курс.',
        },
        {
          org: 'ИСРП',
          role: 'Менеджер ВЭД · практика',
          period: '1 месяц',
          desc: 'Сопровождение внешнеэкономических операций: документы, коммуникация с поставщиками, логистические цепочки Китай—Россия.',
        },
        {
          org: 'МГИМО',
          role: 'Факультет МЭО · риски и страхование',
          period: '4-й курс',
          desc: 'Международные экономические отношения со специализацией в управлении рисками и страховании. Дипломная работа на стыке финансов и анализа данных.',
        },
        {
          org: 'МФТИ',
          role: 'Профессиональная переподготовка · «Основы технологий ИИ»',
          period: '2026',
          desc: 'Курс профессиональной переподготовки по основам технологий искусственного интеллекта.',
        },
      ],
    },
    projects: {
      index: '03',
      title: 'Разработка',
      subtitle: 'Не пет-проекты ради строчки в резюме — работающие системы с реальными пользователями: от заказов для бизнеса до собственных продуктов.',
      impactLabel: 'Результат',
      featured: [
        {
          name: "CRM и документооборот для издательства",
          tagline: "Сделки, документы и отчётность в одном кабинете с AI-помощником",
          desc: "Единая рабочая система издательской компании: сделки по стадиям, клиенты и контакты, выпуски и прайс, счета, акты, договоры и КП с автонумерацией. ИИ-помощник отвечает по базе в вебе и Telegram, пишет документы по промпту, разбирает PDF-карточки и фото договоров, расшифровывает голосовые (локальный Whisper). Отдельный бот собирает отчёты об оказанных услугах на фирменном бланке и сам проверяет пакет на ошибки.",
          impact: "Ежедневный инструмент команды: продажи, документы и отчёты для заказчиков ведутся в одном месте, рутину берёт на себя ИИ.",
          tags: [
            "Python",
            "FastAPI",
            "SQLite",
            "Claude API",
            "Whisper",
            "Telegram · MAX"
          ]
        },
        {
          name: "AI-офис управления инвестпортфелем",
          tagline: "Портфель, аналитика и AI-агенты по каждому активу",
          desc: "Управляющая система для частного инвестпортфеля: NAV, LTV, XIRR, 12-месячный cash flow, календарь платежей, кабинеты инвесторов с серверной фильтрацией прав. Четыре отраслевых модуля — недвижимость, нефтепродукты, общепит, транспорт. У каждого актива свой AI-агент, над ними AI-директор: ежедневные отчёты, тревоги и недельный brief. Двусторонняя синхронизация с Google Таблицами и Excel, Telegram-бот принимает документы.",
          impact: "MVP по концепции заказчика закрыт целиком: от учёта и ролей до автономных ежедневных и недельных контуров AI.",
          tags: [
            "Python",
            "FastAPI",
            "Claude API",
            "Google Sheets",
            "Telegram",
            "systemd"
          ]
        },
        {
          name: "AI-лидогенерация в Telegram",
          tagline: "Telegram-userbot для лидогенерации юридической компании",
          desc: "Userbot вступает в 30+ чатов ЖК и новостроек, мониторит сообщения в реальном времени и через двухуровневую фильтрацию (keyword pre-filter + DeepSeek-классификация) находит потенциальных клиентов — по прямым запросам и косвенным сигналам. Карточка лида с AI-анализом уходит в канал менеджеров с inline-кнопками «Принять/Отклонить» и защитой от гонки.",
          impact: "Заменил команду ручных парсеров: клиент ушёл с ежемесячной комиссии на разовую оплату за систему.",
          tags: [
            "Python",
            "Telethon",
            "DeepSeek API",
            "asyncio",
            "Ubuntu VPS"
          ]
        },
        {
          name: "Глоссарий переводчиков",
          tagline: "Offline-first терминологическая база для китайско-русской команды",
          desc: "Десктопное macOS-приложение с общей базой терминов, работающее без сети. Событийная модель голосов вместо naive-счётчиков — параллельная офлайн-работа не теряет ни одного голоса при синхронизации. Собственный delta-sync поверх монотонного changelog, UUID, tombstones. Полнотекстовый поиск по иероглифам через trigram-токенизатор FTS5, дедупликация по расстоянию Левенштейна и пиньиню.",
          impact: "Терминология команды сходится к норме сама — через частотность реального использования, без модерации.",
          tags: [
            "Flutter",
            "FastAPI",
            "PostgreSQL",
            "SQLite / Drift",
            "offline-first sync"
          ]
        }
      ],
      grid: [
        {
          name: "Анализ звонков продаж",
          desc: "Telegram-бот: загружаешь запись звонка — получаешь транскрипт (Whisper) и оценку по рубрике из 5 критериев (GPT) со структурированным отчётом. Лимиты, апселл, захват лидов.",
          tags: [
            "Python",
            "Whisper",
            "GPT",
            "SQLite"
          ]
        },
        {
          name: "Бот управления стройкой",
          desc: "Центральный инструмент строительной компании: 19+ объектов, финансы и маржа, дедлайны. AI-парсинг PDF/Excel, синк с Google Sheets и Calendar, автоотчёты.",
          tags: [
            "Python",
            "OpenAI",
            "LangChain",
            "Google API"
          ]
        },
        {
          name: "Протоколы Zoom-встреч",
          desc: "Бот сам заходит в Zoom-встречу через headless Chromium (Xvfb), пишет аудио через виртуальный sink PulseAudio, присылает транскрипт и summary, архивирует на Яндекс Диск. Очередь обработки записей на Celery.",
          tags: [
            "Playwright",
            "ffmpeg",
            "Whisper",
            "Claude API",
            "Celery"
          ]
        },
        {
          name: "Учёт реставрационных работ",
          desc: "Веб-система для реставрационной компании: объекты и помещения, смены, выполненные работы и дефекты с фотофиксацией, журнал аудита. Telegram-бот с пошаговым мастером для мастеров на объекте.",
          tags: [
            "TypeScript",
            "Fastify",
            "Prisma",
            "PostgreSQL",
            "React",
            "Docker"
          ]
        },
        {
          name: "AI-ассистент для 1С",
          desc: "Telegram-бот с AI-агентом поверх 1С: отвечает на вопросы по договорам и документам, формирует docx, помнит контекст диалога. Адаптер 1С и mock-сервер для разработки, тесты в CI.",
          tags: [
            "Python",
            "LLM-агент",
            "1С",
            "Docker",
            "GitHub Actions"
          ]
        },
        {
          name: "AI-редакция футбольного канала",
          desc: "Автоматизированная редакция Telegram-канала: парсер 9 источников, дедупликация и AI-фильтр шума, живой поиск фактов, генерация постов и картинок в голосе бренда, двойное одобрение админами и автопубликация по расписанию.",
          tags: [
            "Python",
            "Claude API",
            "DeepSeek",
            "APScheduler"
          ]
        },
        {
          name: "3D-конфигуратор ювелирных украшений",
          desc: "Премиальный веб-конфигуратор помолвочного кольца: металл, огранка и камни, гравировка в реальном времени, физически корректный рендер бриллианта, расчёт цены и заявка на консультацию. Плюс бизнес-план и финмодель под запуск.",
          tags: [
            "Next.js",
            "React Three Fiber",
            "Three.js",
            "Zustand"
          ]
        },
        {
          name: "Прогнозы на ЧМ-2026",
          desc: "Telegram Mini App с прогнозами на ЧМ-2026: очки взвешены по редкости исхода на основе market-implied вероятностей Polymarket. Полный стек и жизненный цикл матча.",
          tags: [
            "FastAPI",
            "PostgreSQL",
            "React",
            "Docker"
          ]
        },
        {
          name: "Тренажёр лексики",
          desc: "Веб-тренажёр по юнитам университетских учебников: интервальные повторения FSRS-5, режимы «контекст», спринт, экзамен, AI-подсказки для запоминания трудных слов, синхронизация прогресса между устройствами.",
          tags: [
            "JavaScript",
            "Python",
            "FSRS",
            "Claude API"
          ]
        },
        {
          name: "Симулятор футбольной карьеры",
          desc: "Браузерная игра: карьера игрока от академии до финалов, 490+ клубов, трансферы и награды. Мультиплеер-комнаты с детерминированной синхронизацией мира между игроками.",
          tags: [
            "JavaScript",
            "Python",
            "PWA",
            "GitHub Pages"
          ]
        },
        {
          name: "AI-разбор почты",
          desc: "Агент следит за двумя Gmail-ящиками, классифицирует письма через LLM, присылает важное в Telegram (включая коды 2FA) и готовит черновики ответов.",
          tags: [
            "Python",
            "Gmail API",
            "Claude API",
            "Telegram"
          ]
        },
        {
          name: "Офлайн-мессенджер для кампуса",
          desc: "P2P-мессенджер без интернета: устройства находят друг друга в локальной сети (mDNS) и через Wi-Fi Direct / Bluetooth, сообщения идут напрямую.",
          tags: [
            "Flutter",
            "Dart",
            "mDNS",
            "Wi-Fi Direct"
          ]
        },
        {
          name: "AI-помощник для фриланс-откликов",
          desc: "Chrome-расширение, которое на hh.ru и profi.ru готовит персональные отклики на вакансии и задания. Backend с лицензиями и Telegram-бот продажи доступа через Stars.",
          tags: [
            "TypeScript",
            "Chrome MV3",
            "React",
            "Fastify",
            "Zod"
          ]
        },
        {
          name: "Калькулятор риска глаукомы",
          desc: "Reverse-engineering PLS-DA моделей из Excel-хемометрики в Python с почти точным численным совпадением. 34 клинических параметра, вероятности классов, визуализация.",
          tags: [
            "Python",
            "NumPy",
            "SciPy",
            "Data Science"
          ]
        },
        {
          name: "Discord-бот для сообщества",
          desc: "Комбайн для аниме-сообщества: XP и уровни, экономика с казной кланов, музыка, карточки профилей на Pillow, тикеты, гивы, полный automod. 24/7 на systemd.",
          tags: [
            "Python",
            "Discord API",
            "Pillow",
            "SQLite"
          ]
        }
      ],
    },
    ventures: {
      index: '04',
      title: 'Не только код',
      items: [
        {
          name: 'Юмористическое сообщество ВКонтакте',
          role: 'Сооснователь · контент-менеджер',
          desc: 'Выстроил контент-план и вырастил паблик до заметных охватов: понимание алгоритмов, виральности и того, что заставляет людей делиться.',
          stats: [
            { value: '25K', label: 'подписчиков' },
            { value: '1M', label: 'охват в месяц на пике' },
          ],
        },
        {
          name: 'Логистика Китай — Москва',
          role: 'Основатель',
          desc: 'Закупка и продажа товаров из Китая под заказ: поиск поставщиков, переговоры, юнит-экономика, доставка и клиентский сервис — полный цикл в одиночку.',
          stats: [
            { value: 'B2C', label: 'под заказ' },
            { value: '360°', label: 'полный цикл сделки' },
          ],
        },
      ],
    },
    contact: {
      index: '05',
      title: 'Контакты',
      heading: 'Давайте работать вместе',
      sub: 'Открыт к стажировкам и позициям на стыке финансов, аналитики и разработки — а также к интересным проектным задачам.',
      emailLabel: 'Написать на почту',
      tgLabel: 'Telegram',
      email: 'danyakarpov71@gmail.com',
      tg: 'rickovvens',
    },
    footer: {
      made: 'Сделано вручную · React + Framer Motion',
      rights: 'Даниил Карпов',
    },
  },

  en: {
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    hero: {
      eyebrow: 'Moscow · open to opportunities',
      name1: 'Daniil',
      name2: 'Karpov',
      roles: ['Python developer', 'AI automation', 'economics major', 'risk & insurance'],
      rolePrefix: '',
      statement:
        'Final-year International Economics student at MGIMO specialising in risk & insurance — and a developer who ships to production: AI bots, process automation, full-stack apps.',
      briefTitle: '// tl;dr',
      brief: [
        { label: 'stack', value: 'Python · FastAPI · React · Flutter · PostgreSQL' },
        { label: 'ai', value: 'GPT · Claude · Whisper · DeepSeek · LangChain' },
        { label: 'study', value: 'MGIMO · Int’l Economics, 4th year · risk & insurance' },
        { label: 'langs', value: 'Russian · English C1 · Arabic A1' },
      ],
      scroll: 'scroll down',
    },
    marquee: ['Python', 'FastAPI', 'React', 'Flutter', 'PostgreSQL', 'asyncio', 'OpenAI API', 'Claude API', 'DeepSeek', 'Whisper', 'LangChain', 'Playwright', 'Docker', 'Linux VPS', 'systemd', 'Telegram API', 'SQLite', 'ffmpeg', 'TypeScript', 'Next.js', 'Three.js', 'Celery'],
    about: {
      index: '01',
      title: 'About',
      lead: [
        'I’m a final-year International Economics student at MGIMO, specialising in risk management and insurance. Alongside my studies I build commercial software: Telegram bots, AI automation, desktop and web apps. Everything listed below I wrote myself — from the idea to deployment on a server — and it is used in practice: by a publisher, a law firm, construction and restoration companies, a team of translators.',
        'Before that I worked with retail clients at Alfa-Bank, interned as a foreign trade manager, grew a humor community on VK to 25 thousand followers and ran an import business sourcing goods from China. That experience helps me as a developer: I understand how a client’s processes work and where they get stuck, so I build tools that fit into real workflows instead of complicating them.',
        'I’m looking for an internship or a role where both sides are useful — the economics degree and the ability to write code: finance, analytics, automation.',
      ],
      groups: [
        { name: 'Engineering', items: ['Python (asyncio, aiogram, Telethon)', 'FastAPI · PostgreSQL · SQLite', 'TypeScript · React · Next.js', 'Flutter · Dart', 'Docker · Linux · systemd'] },
        { name: 'AI & integrations', items: ['OpenAI GPT · Whisper', 'Claude API', 'DeepSeek API', 'LangChain', 'Groq'] },
        { name: 'Domain', items: ['Risk & insurance', 'China—Russia foreign trade & logistics', 'Retail banking products', 'Content & community growth'] },
        { name: 'Languages', items: ['Russian — native', 'English — C1', 'Arabic — A1'] },
      ],
    },
    experience: {
      index: '02',
      title: 'Experience',
      jobs: [
        {
          org: 'Alfa-Bank',
          role: 'Retail Client Specialist',
          period: '9 months',
          desc: 'Advised retail clients, matched banking products to needs, handled objections and edge cases. Daily client-facing work under metrics — a school of communication no course can teach.',
        },
        {
          org: 'ISRP',
          role: 'Foreign Trade Manager · internship',
          period: '1 month',
          desc: 'Supported foreign trade operations: documentation, supplier communication, China—Russia logistics chains.',
        },
        {
          org: 'MGIMO University',
          role: 'International Economic Relations · Risk & Insurance',
          period: '4th year',
          desc: 'International economics with a specialisation in risk management and insurance. Thesis at the intersection of finance and data analysis.',
        },
        {
          org: 'MIPT',
          role: 'Professional retraining · "Fundamentals of AI Technologies"',
          period: '2026',
          desc: 'Professional retraining programme on the fundamentals of artificial intelligence technologies.',
        },
      ],
    },
    projects: {
      index: '03',
      title: 'Software Projects',
      subtitle: 'Not pet projects for a CV line — working systems with real users: from business commissions to products of my own.',
      impactLabel: 'Impact',
      featured: [
        {
          name: "CRM & document workflow for a publisher",
          tagline: "Deals, documents and reporting in one workspace with an AI assistant",
          desc: "One workspace for a publishing company: deals by stage, clients and contacts, issues and price list, invoices, acts, contracts and proposals with auto-numbering. An AI assistant answers from the database on the web and in Telegram, drafts documents from a prompt, parses PDF client cards and contract photos, and transcribes voice notes (local Whisper). A companion bot assembles service reports on the company letterhead and checks each package for errors.",
          impact: "The team’s daily tool: sales, paperwork and client reports live in one place, with AI taking over the routine.",
          tags: [
            "Python",
            "FastAPI",
            "SQLite",
            "Claude API",
            "Whisper",
            "Telegram · MAX"
          ]
        },
        {
          name: "AI investment office",
          tagline: "Portfolio, analytics and an AI agent for every asset",
          desc: "A management system for a private investment portfolio: NAV, LTV, XIRR, 12-month cash flow, payment calendar, investor portals with server-side access filtering. Four industry modules — real estate, fuel trading, restaurants, transport. Every asset has its own AI agent, with an AI director above them: daily reports, alerts and a weekly brief. Two-way sync with Google Sheets and Excel; a Telegram bot ingests documents.",
          impact: "The client’s MVP spec delivered in full: from accounting and roles to autonomous daily and weekly AI loops.",
          tags: [
            "Python",
            "FastAPI",
            "Claude API",
            "Google Sheets",
            "Telegram",
            "systemd"
          ]
        },
        {
          name: "AI lead generation in Telegram",
          tagline: "Telegram userbot for law-firm lead generation",
          desc: "A userbot joins 30+ residential-complex chats, monitors messages in real time and finds potential clients through two-tier filtering (keyword pre-filter + DeepSeek classification) — both direct requests and indirect signals. Lead cards with AI analysis land in a managers’ channel with race-safe Accept/Decline inline buttons.",
          impact: "Replaced a team of manual chat parsers: the client moved from a monthly commission to a one-time payment for the system.",
          tags: [
            "Python",
            "Telethon",
            "DeepSeek API",
            "asyncio",
            "Ubuntu VPS"
          ]
        },
        {
          name: "Translators’ Glossary",
          tagline: "Offline-first terminology base for a Chinese-Russian team",
          desc: "A desktop macOS app with a shared term base that works fully offline. Event-sourced votes instead of naive counters — parallel offline work never loses a single vote on sync. Custom delta-sync over a monotonic changelog, UUIDs, tombstones. Full-text CJK search via an FTS5 trigram tokenizer, dedup by Levenshtein distance and pinyin.",
          impact: "Team terminology converges to a norm on its own — driven by real usage frequency, no moderation needed.",
          tags: [
            "Flutter",
            "FastAPI",
            "PostgreSQL",
            "SQLite / Drift",
            "offline-first sync"
          ]
        }
      ],
      grid: [
        {
          name: "Sales call analysis",
          desc: "Telegram bot: upload a sales-call recording — get a Whisper transcript and a GPT score across a 5-criteria rubric with a structured report. Free limits, upsell flow, lead capture.",
          tags: [
            "Python",
            "Whisper",
            "GPT",
            "SQLite"
          ]
        },
        {
          name: "Construction management bot",
          desc: "A construction company’s central tool: 19+ active sites, financials and margins, deadlines. AI parsing of PDF/Excel, Google Sheets & Calendar sync, automated reports.",
          tags: [
            "Python",
            "OpenAI",
            "LangChain",
            "Google API"
          ]
        },
        {
          name: "Zoom meeting minutes",
          desc: "The bot joins a Zoom call by itself via headless Chromium (Xvfb), records audio through a virtual PulseAudio sink, sends a transcript and summary, archives to cloud storage. Recording processing runs on a Celery queue.",
          tags: [
            "Playwright",
            "ffmpeg",
            "Whisper",
            "Claude API",
            "Celery"
          ]
        },
        {
          name: "Restoration works tracking",
          desc: "A web system for a restoration company: sites and rooms, shifts, completed works and defects with photo records, audit log. A Telegram bot with a step-by-step wizard for on-site foremen.",
          tags: [
            "TypeScript",
            "Fastify",
            "Prisma",
            "PostgreSQL",
            "React",
            "Docker"
          ]
        },
        {
          name: "AI assistant for 1C",
          desc: "A Telegram bot with an AI agent on top of 1C: answers questions about contracts and documents, generates docx, keeps dialogue context. 1C adapter plus a mock server for development, tests in CI.",
          tags: [
            "Python",
            "LLM agent",
            "1C",
            "Docker",
            "GitHub Actions"
          ]
        },
        {
          name: "AI newsroom for a football channel",
          desc: "An automated newsroom for a Telegram channel: a parser over 9 sources, dedup and AI noise filtering, live fact search, post and image generation in the brand voice, two-admin approval and scheduled auto-publishing.",
          tags: [
            "Python",
            "Claude API",
            "DeepSeek",
            "APScheduler"
          ]
        },
        {
          name: "3D jewelry configurator",
          desc: "A premium web configurator for engagement rings: metal, cut and stones, real-time engraving, physically based diamond rendering, pricing and consultation requests. Backed by a business plan and financial model for launch.",
          tags: [
            "Next.js",
            "React Three Fiber",
            "Three.js",
            "Zustand"
          ]
        },
        {
          name: "World Cup 2026 predictions",
          desc: "Telegram Mini App for World Cup 2026 predictions: points weighted by outcome rarity from Polymarket market-implied probabilities. Full stack and full match lifecycle.",
          tags: [
            "FastAPI",
            "PostgreSQL",
            "React",
            "Docker"
          ]
        },
        {
          name: "Vocabulary trainer",
          desc: "A web trainer built on university textbook units: FSRS-5 spaced repetition, context, sprint and exam modes, AI mnemonics for hard words, progress sync across devices.",
          tags: [
            "JavaScript",
            "Python",
            "FSRS",
            "Claude API"
          ]
        },
        {
          name: "Football career simulator",
          desc: "A browser game: a player’s career from academy to finals, 490+ clubs, transfers and awards. Multiplayer rooms with deterministic world sync between players.",
          tags: [
            "JavaScript",
            "Python",
            "PWA",
            "GitHub Pages"
          ]
        },
        {
          name: "AI email triage",
          desc: "An agent watches two Gmail inboxes, classifies mail with an LLM, forwards what matters to Telegram (including 2FA codes) and drafts replies.",
          tags: [
            "Python",
            "Gmail API",
            "Claude API",
            "Telegram"
          ]
        },
        {
          name: "Offline campus messenger",
          desc: "A peer-to-peer messenger with no internet: devices discover each other over the local network (mDNS) and via Wi-Fi Direct / Bluetooth, messages go directly.",
          tags: [
            "Flutter",
            "Dart",
            "mDNS",
            "Wi-Fi Direct"
          ]
        },
        {
          name: "AI assistant for freelance applications",
          desc: "A Chrome extension that drafts personalised applications to jobs on hh.ru and tasks on profi.ru. Backend with licensing and a Telegram bot selling access via Stars.",
          tags: [
            "TypeScript",
            "Chrome MV3",
            "React",
            "Fastify",
            "Zod"
          ]
        },
        {
          name: "Glaucoma risk calculator",
          desc: "Reverse-engineered PLS-DA models from an Excel chemometrics add-in into Python with near-perfect numerical precision. 34 clinical parameters, class probabilities, visualisation.",
          tags: [
            "Python",
            "NumPy",
            "SciPy",
            "Data Science"
          ]
        },
        {
          name: "Discord community bot",
          desc: "A full-featured bot for an anime community: XP and levels, economy with clan treasury, music, Pillow profile cards, tickets, giveaways, complete automod. 24/7 on systemd.",
          tags: [
            "Python",
            "Discord API",
            "Pillow",
            "SQLite"
          ]
        }
      ],
    },
    ventures: {
      index: '04',
      title: 'Beyond Code',
      items: [
        {
          name: 'Humor community on VK',
          role: 'Co-founder · content manager',
          desc: 'Built the content strategy and grew the community to serious reach: a working understanding of algorithms, virality and what makes people share.',
          stats: [
            { value: '25K', label: 'followers' },
            { value: '1M', label: 'monthly reach at peak' },
          ],
        },
        {
          name: 'China — Moscow logistics',
          role: 'Founder',
          desc: 'Sourcing and reselling goods from China on demand: supplier search, negotiations, unit economics, delivery and customer service — the full cycle, solo.',
          stats: [
            { value: 'B2C', label: 'made to order' },
            { value: '360°', label: 'full deal cycle' },
          ],
        },
      ],
    },
    contact: {
      index: '05',
      title: 'Contact',
      heading: 'Let’s work together',
      sub: 'Open to internships and roles at the intersection of finance, analytics and engineering — and to interesting project work.',
      emailLabel: 'Send an email',
      tgLabel: 'Telegram',
      email: 'danyakarpov71@gmail.com',
      tg: 'rickovvens',
    },
    footer: {
      made: 'Handcrafted · React + Framer Motion',
      rights: 'Daniil Karpov',
    },
  },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'ru' || saved === 'en') return saved
    return navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
