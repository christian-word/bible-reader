    // парсит "1-5,7,6" -> массив чисел без дубликатов в порядке

const bookAliases = [
  { index: 1, ru: "Бытие", en: "Genesis" },
  { index: 2, ru: "Исход", en: "Exodus" },
  { index: 3, ru: "Левит", en: "Leviticus" },
  { index: 4, ru: "Числа", en: "Numbers" },
  { index: 5, ru: "Второзаконие", en: "Deuteronomy" },
  { index: 6, ru: "Иисус Навин", en: "Joshua" },
  { index: 7, ru: "Судьи", en: "Judges" },
  { index: 8, ru: "Руфь", en: "Ruth" },
  { index: 9, ru: "1 Царств", en: "1 Samuel" },
  { index:10, ru: "2 Царств", en: "2 Samuel" },
  { index:11, ru: "3 Царств", en: "1 Kings" },
  { index:12, ru: "4 Царств", en: "2 Kings" },
  { index:13, ru: "1 Паралипоменон", en: "1 Chronicles" },
  { index:14, ru: "2 Паралипоменон", en: "2 Chronicles" },
  { index:15, ru: "Ездра", en: "Ezra" },
  { index:16, ru: "Неемия", en: "Nehemiah" },
  { index:17, ru: "Есфирь", en: "Esther" },
  { index:18, ru: "Иов", en: "Job" },
  { index:19, ru: "Псалтирь", en: "Psalms" },
  { index:20, ru: "Притчи", en: "Proverbs" },
  { index:21, ru: "Екклесиаст", en: "Ecclesiastes" },
  { index:22, ru: "Песня Песней", en: "Song of Solomon" },
  { index:23, ru: "Исаия", en: "Isaiah" },
  { index:24, ru: "Иеремия", en: "Jeremiah" },
  { index:25, ru: "Плач Иеремии", en: "Lamentations" },
  { index:26, ru: "Иезекииль", en: "Ezekiel" },
  { index:27, ru: "Даниил", en: "Daniel" },
  { index:28, ru: "Осия", en: "Hosea" },
  { index:29, ru: "Иоиль", en: "Joel" },
  { index:30, ru: "Амос", en: "Amos" },
  { index:31, ru: "Авдий", en: "Obadiah" },
  { index:32, ru: "Иона", en: "Jonah" },
  { index:33, ru: "Михей", en: "Micah" },
  { index:34, ru: "Наум", en: "Nahum" },
  { index:35, ru: "Аввакум", en: "Habakkuk" },
  { index:36, ru: "Софония", en: "Zephaniah" },
  { index:37, ru: "Аггей", en: "Haggai" },
  { index:38, ru: "Захария", en: "Zechariah" },
  { index:39, ru: "Малахия", en: "Malachi" },
  { index:40, ru: "Матфей", en: "Matthew" },
  { index:41, ru: "Марк", en: "Mark" },
  { index:42, ru: "Лука", en: "Luke" },
  { index:43, ru: "Иоанн", en: "John" },
  { index:44, ru: "Деяния", en: "Acts" },
  { index:45, ru: "Римлянам", en: "Romans" },
  { index:46, ru: "1 Коринфянам", en: "1 Corinthians" },
  { index:47, ru: "2 Коринфянам", en: "2 Corinthians" },
  { index:48, ru: "Галатам", en: "Galatians" },
  { index:49, ru: "Ефесянам", en: "Ephesians" },
  { index:50, ru: "Филиппийцам", en: "Philippians" },
  { index:51, ru: "Колоссянам", en: "Colossians" },
  { index:52, ru: "1 Фессалоникийцам", en: "1 Thessalonians" },
  { index:53, ru: "2 Фессалоникийцам", en: "2 Thessalonians" },
  { index:54, ru: "1 Тимофею", en: "1 Timothy" },
  { index:55, ru: "2 Тимофею", en: "2 Timothy" },
  { index:56, ru: "Титу", en: "Titus" },
  { index:57, ru: "Филимону", en: "Philemon" },
  { index:58, ru: "Евреям", en: "Hebrews" },
  { index:59, ru: "Иакова", en: "James" },
  { index:60, ru: "1 Петра", en: "1 Peter" },
  { index:61, ru: "2 Петра", en: "2 Peter" },
  { index:62, ru: "1 Иоанна", en: "1 John" },
  { index:63, ru: "2 Иоанна", en: "2 John" },
  { index:64, ru: "3 Иоанна", en: "3 John" },
  { index:65, ru: "Иуды", en: "Jude" },
  { index:66, ru: "Откровение", en: "Revelation" },
];

    function parseVerseSpec(spec) {
      if (!spec || !spec.trim()) return null;
      const parts = spec.split(',');
      const out = [];
      const seen = new Set();
      for (let part of parts) {
        part = part.trim();
        if (!part) continue;
        const m = part.match(/^(\d+)-(\d+)$/);
        if (m) {
          let start = parseInt(m[1],10);
          let end = parseInt(m[2],10);
          const step = start <= end ? 1 : -1;
          if (step === 1) {
            for (let i = start; i <= end; i++) {
              if (!seen.has(i)) { out.push(i); seen.add(i); }
            }
          } else {
            for (let i = start; i >= end; i--) {
              if (!seen.has(i)) { out.push(i); seen.add(i); }
            }
          }
        } else {
          const num = parseInt(part,10);
          if (!isNaN(num) && !seen.has(num)) {
            out.push(num);
            seen.add(num);
          }
        }
      }
      return out;
    }

    function parseChapterSpec(spec) {
      if (!spec || !spec.trim()) return null;
      const m = spec.trim().match(/^(\d+)(?:-(\d+))?$/);
      if (!m) return null;
      const a = parseInt(m[1],10);
      const b = m[2] ? parseInt(m[2],10) : a;
      const arr = [];
      if (a <= b) {
        for (let i=a;i<=b;i++) arr.push(i);
      } else {
        for (let i=a;i>=b;i--) arr.push(i);
      }
      return arr;
    }

function findBook(bible, query) {
  if (!query) return null;
  const q = query.trim().toLowerCase();

  // Попытка по индексу
  const num = parseInt(q, 10);
  if (!isNaN(num)) {
    const alias = bookAliases.find(b => b.index === num);
    if (alias) {
      const match = bible.find(b => b.book && b.book.toLowerCase().includes(alias.ru.toLowerCase()));
      if (match) return match;
    }
  }

  // Попытка по английскому названию
  const alias = bookAliases.find(b => b.en.toLowerCase() === q);
  if (alias) {
    const match = bible.find(b => b.book && b.book.toLowerCase().includes(alias.ru.toLowerCase()));
    if (match) return match;
  }

  // Обычный поиск по русскому названию
  let exact = bible.find(b => b.book && b.book.toLowerCase() === q);
  if (exact) return exact;

  return bible.find(b => b.book && b.book.toLowerCase().includes(q));
}

    async function loadBible(url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Не удалось загрузить JSON: ' + res.status);
      return await res.json();
    }

    // Основная функция, возвращает объект {book, results: [...]}
    async function getBibleText(bookQuery, chapterSpecRaw, verseSpecRaw, url) {
      const bible = await loadBible(url);
      const book = findBook(bible, bookQuery);
      if (!book) throw new Error('Книга не найдена: ' + bookQuery);
      const chapterNums = parseChapterSpec(chapterSpecRaw) || (book.chapters || []).map(c => c.chapter);
      if (!chapterNums || chapterNums.length === 0) throw new Error('Не указана глава и не найдены главы в книге');
      const verseNums = parseVerseSpec(verseSpecRaw);
      const output = [];
      for (const chNum of chapterNums) {
        const ch = (book.chapters || []).find(c => c.chapter === chNum);
        if (!ch) continue;
        let versesToTake;
        if (verseNums === null) {
          versesToTake = (ch.verses || []).map(v => v.verse);
        } else {
          versesToTake = verseNums;
        }
        const verseMap = new Map((ch.verses || []).map(v => [v.verse, v.text]));
        for (const vnum of versesToTake) {
          if (verseMap.has(vnum)) {
            output.push({ chapter: chNum, verse: vnum, text: verseMap.get(vnum) });
          } else {
            output.push({ chapter: chNum, verse: vnum, missing: true });
          }
        }
      }
      return { book: book.book, results: output };
    }

    function render(resultObj) {
      const container = document.getElementById('result');
      container.innerHTML = '';
      const h = document.createElement('div');
      h.className = 'ref';
      h.textContent = resultObj.book;
      container.appendChild(h);
      if (!resultObj.results || resultObj.results.length === 0) {
        const no = document.createElement('div');
        no.textContent = 'Ничего не найдено.';
        container.appendChild(no);
        return;
      }
      // сгруппировать по главам для читаемости
      let currentChapter = null;
      for (const item of resultObj.results) {
        if (item.chapter !== currentChapter) {
          currentChapter = item.chapter;
          const chHeader = document.createElement('div');
          chHeader.textContent = 'Глава ' + currentChapter;
          chHeader.style.marginTop = '1em';
          chHeader.style.fontWeight = '700';
          container.appendChild(chHeader);
        }
        const d = document.createElement('div');
        d.className = 'verse';
        const prefix = document.createElement('span');
        prefix.style.fontWeight='600';
        prefix.textContent = `${item.chapter}:${item.verse} `;
        d.appendChild(prefix);
        const txt = document.createElement('span');
        if (item.missing) {
          txt.textContent = '[отсутствует]';
          txt.className = 'error';
        } else {
          txt.textContent = item.text;
        }
        d.appendChild(txt);
        container.appendChild(d);
      }
    }

    async function performFromUI() {
      const url = document.getElementById('jsonUrl').value.trim();
      const book = document.getElementById('bookInput').value.trim();
      const chapter = document.getElementById('chapterInput').value.trim();
      const verses = document.getElementById('verseInput').value.trim();
      const status = document.getElementById('status');
      status.textContent = 'Загрузка...';
      try {
        const res = await getBibleText(book, chapter, verses, url);
        status.textContent = '';
        render(res);
      } catch (e) {
        status.textContent = '';
        document.getElementById('result').innerHTML = '<div class="error">' + e.message + '</div>';
      }
    }

    document.getElementById('btnFetch').addEventListener('click', performFromUI);

    // автозагрузка из querystring: ?book=Бытие&chapter=1&verses=1-3
    function parseQuery() {
      const qp = Object.fromEntries(new URLSearchParams(window.location.search));
      return {
        book: qp.book || '',
        chapter: qp.chapter || '',
        verses: qp.verses || ''
      };
    }

    window.addEventListener('load', () => {
      const { book, chapter, verses } = parseQuery();
      if (book) document.getElementById('bookInput').value = book;
      if (chapter) document.getElementById('chapterInput').value = chapter;
      if (verses) document.getElementById('verseInput').value = verses;
      if (book && chapter) {
        performFromUI();
      }
    });

    // Экспорт в глобал для программного вызова
    window.getBibleText = getBibleText;