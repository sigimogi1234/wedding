(function () {
  // 수집 봇이 소스에서 번호를 바로 읽지 못하게 가려 둔다
  function unmask(v) { return atob(v).split('').reverse().join(''); }

  const INFO = {
    groom: { name: '이준하', short: '준하', father: '이성훈', mother: '임완수', phone: unmask('NDcwNS03NTU0LTAxMA==') },
    bride: { name: '김진아', short: '진아', father: '김정규', mother: '박선주', phone: unmask('NzE2My02NDQyLTAxMA==') },
    date: new Date(2027, 2, 20, 15, 30),
    venue: '라루체',
    hall: '그레이스홀',
    address: '서울특별시 중구 퇴계로18길 46',
    tel: '02-766-8200',
    mapQuery: '서울 중구 퇴계로18길 46',
  };

  const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
  const svg = (box, body, cls = 'art') => `<svg class="${cls}" viewBox="${box}" aria-hidden="true">${body}</svg>`;

  // 웨딩 케이크 토퍼처럼 얼굴 없이 옷과 실루엣으로만 표현한 인물
  function doll(o = {}) {
    const { skin = '#f2dccb', hair = '#4c3f37', top = '#5b6670', bottom = '#4c5660', kind = 'suit' } = o;
    const gown = kind === 'bride' || kind === 'dress';
    const lower = gown
      ? (kind === 'bride'
        ? `<path d="M16 38Q22 34 28 38L38 84H6z" fill="${top}" stroke="#cdbfaa" stroke-width="1"/>`
        : `<path d="M16 38Q22 34 28 38L34 72H10z" fill="${top}"/><rect class="l1" x="16" y="71" width="4.500" height="13" rx="2" fill="${skin}"/><rect class="l2" x="23.500" y="71" width="4.500" height="13" rx="2" fill="${skin}"/>`)
      : `<rect class="l1" x="15" y="60" width="6.500" height="24" rx="3" fill="${bottom}"/><rect class="l2" x="22.500" y="60" width="6.500" height="24" rx="3" fill="${bottom}"/>
         <path d="M13 40Q22 33 31 40L32 64H12z" fill="${top}"/><path d="M19 36l3 10 3-10z" fill="#fbf7ee"/>`;
    const longHair = gown ? `<path d="M8 22c-1 14 0 22 4 28h20c4-6 5-14 4-28z" fill="${hair}"/>` : '';
    const veil = kind === 'bride' ? '<path d="M10 14C3 40 2 64 6 80c11 4 21 4 32 0 4-16 3-40-4-66z" fill="#fbf7ee" opacity=".62"/>' : '';
    const bouquet = kind === 'bride' ? '<circle cx="22" cy="55" r="5.500" fill="#e6bdb8"/><circle cx="18" cy="58" r="3" fill="#b9c8a8"/><circle cx="26" cy="58" r="3" fill="#f0dfae"/>' : '';
    const flower = kind === 'groom' ? '<circle cx="28" cy="44" r="2" fill="#e6bdb8"/>' : '';
    return svg('0 0 44 88', `${longHair}<g class="c" style="stroke-width:1.2">${lower}<circle cx="22" cy="22" r="13" fill="${skin}"/></g>
      <g class="hf"><path d="M9 22a13 13 0 0 1 26 0c-4-6-9-8-13-8s-9 2-13 8z" fill="${hair}"/><circle cx="17.500" cy="25" r="1.400" fill="#403933"/><circle cx="26.500" cy="25" r="1.400" fill="#403933"/><ellipse cx="14" cy="29" rx="2.500" ry="1.500" fill="#eab3a8" opacity=".75"/><ellipse cx="30" cy="29" rx="2.500" ry="1.500" fill="#eab3a8" opacity=".75"/></g>
      <circle class="hb" cx="22" cy="22" r="13.200" fill="${hair}"/>${veil}${bouquet}${flower}`, 'doll');
  }

  const GROOM = { kind: 'groom', top: '#3f4750', bottom: '#363e47', hair: '#3c322c' };
  const BRIDE = { kind: 'bride', top: '#fbf5ea', hair: '#4c3f37' };
  const GUESTS = [
    { top: '#6d7f8c', bottom: '#586875', hair: '#3c322c' },
    { kind: 'dress', top: '#dcb0a6', hair: '#54443a' },
    { top: '#98a98b', bottom: '#7d8e72', hair: '#5a4a40' },
    { kind: 'dress', top: '#b5a6c2', hair: '#3c322c' },
  ];

  const door = (x, w, fill) => `<path d="M${x} 245v-${w}a${w / 2} ${w / 2} 0 0 1 ${w} 0v${w}z" fill="${fill}"/><circle cx="${x + w - 8}" cy="215" r="2.6" fill="#fffaf0"/>`;
  const win = (x, y, w = 28, h = 32) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="#c6deea"/><path d="M${x + w / 2} ${y}v${h}M${x} ${y + h / 2}h${w}" stroke="#fffaf0" stroke-width="2.5"/>`;

  const art = {
    home: svg('0 0 200 250', `<g class="c"><rect x="134" y="48" width="20" height="56" fill="#e3b19f"/><rect x="35" y="108" width="130" height="137" rx="8" fill="#f5cdb8"/><path d="M100 30l84 84H16z" fill="#e6a596"/></g>${win(49, 132)}${win(123, 132)}${door(81, 38, '#d59f86')}<path d="M100 74c-5-9-18-4-13 6 3 6 13 12 13 12s10-6 13-12c5-10-8-15-13-6z" fill="#fffaf0"/>`),
    clock: svg('0 0 200 250', `<g class="c"><rect x="62" y="72" width="76" height="173" rx="6" fill="#f6e3a9"/><path d="M100 10l52 66H48z" fill="#b5cda6"/><circle cx="100" cy="116" r="30" fill="#fffaf0"/></g><path d="M100 116v-20" stroke="#5c4a3e" stroke-width="4" stroke-linecap="round"/><path d="M100 116l14 8" stroke="#c9796f" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="116" r="3.5" fill="#5c4a3e"/>${door(84, 32, '#d8bd72')}`),
    venue: svg('0 0 200 250', `<g class="c"><rect x="16" y="98" width="168" height="147" rx="6" fill="#f3c6cf"/><path d="M100 30l92 72H8z" fill="#dfa4b2"/></g><circle cx="100" cy="76" r="17" fill="#fffaf0"/><path d="M100 84c-11-8-11-16-5-17 3 0 5 3 5 3s2-3 5-3c6 1 6 9-5 17z" fill="#e6a0ac"/><rect x="54" y="108" width="92" height="26" rx="13" fill="#fffaf0"/><text x="100" y="127" text-anchor="middle" font-family="Jua, sans-serif" font-size="17" fill="#5c4a3e">그레이스홀</text>${win(30, 148, 26, 42)}${win(144, 148, 26, 42)}<path d="M70 245v-52a30 30 0 0 1 60 0v52z" fill="#d0899a"/><path d="M100 164v81" stroke="#fffaf0" stroke-width="3"/>`),
    studio: svg('0 0 200 250', `<g class="c"><rect x="26" y="82" width="148" height="163" rx="6" fill="#c6deea"/><rect x="68" y="34" width="64" height="42" rx="8" fill="#93b5c8"/><rect x="18" y="72" width="164" height="16" rx="6" fill="#a9c7d8"/></g><circle cx="100" cy="55" r="13" fill="#fffaf0"/><circle cx="100" cy="55" r="7" fill="#7d9eb1"/>${[0, 1, 2, 3, 4, 5, 6].map((i) => `<rect x="${32 + i * 20}" y="92" width="20" height="24" fill="${i % 2 ? '#fffaf0' : '#f3c6cf'}"/>`).join('')}<rect x="40" y="130" width="40" height="46" fill="#fffaf0"/><rect x="45" y="135" width="30" height="28" fill="#f6e3a9"/><rect x="120" y="130" width="40" height="46" fill="#fffaf0"/><rect x="125" y="135" width="30" height="28" fill="#c8dbbb"/>${door(84, 32, '#88a8ba')}`),
    booth: svg('0 0 200 250', `<g class="c"><rect x="62" y="56" width="76" height="189" rx="12" fill="#f0b9b4"/></g><rect x="72" y="66" width="56" height="20" rx="6" fill="#fffaf0"/><text x="100" y="82" text-anchor="middle" font-family="Jua, sans-serif" font-size="15" fill="#5c4a3e">전화</text><rect x="72" y="94" width="56" height="130" rx="5" fill="#c6deea"/><path d="M100 94v130" stroke="#fffaf0" stroke-width="3"/><path d="M84 130c-2 12 8 30 22 33l6-8-9-6-4 4c-4-3-7-9-8-13l5-3-5-10z" fill="#5c4a3e" opacity=".7"/>`),
    bank: svg('0 0 200 250', `<g class="c"><rect x="28" y="104" width="144" height="122" fill="#ebe1f2"/><path d="M100 36l92 58H8z" fill="#c5b3da"/><rect x="18" y="92" width="164" height="16" rx="4" fill="#dacde8"/><rect x="14" y="226" width="172" height="19" rx="4" fill="#dacde8"/></g><circle cx="100" cy="70" r="15" fill="#f6e3a9"/><text x="100" y="77" text-anchor="middle" font-family="Jua, sans-serif" font-size="19" fill="#8a7040">₩</text>${[38, 62, 122, 146].map((x) => `<rect x="${x}" y="108" width="15" height="118" fill="#fffaf0"/>`).join('')}<path d="M84 226v-46a16 16 0 0 1 32 0v46z" fill="#b19cc9"/>`),
    post: svg('0 0 200 250', `<g class="c"><rect x="22" y="92" width="156" height="153" rx="6" fill="#c8dbbb"/><path d="M10 98q90-76 180 0z" fill="#a9c49a"/></g><rect x="74" y="50" width="52" height="36" rx="4" fill="#fffaf0"/><path d="M75 52l25 20 25-20" fill="none" stroke="#c9796f" stroke-width="3"/>${win(38, 124, 30, 34)}${win(132, 124, 30, 34)}${door(82, 36, '#92ad82')}`),
    tree: (c = '#c8dbbb') => svg('0 0 90 150', `<g class="c"><rect x="39" y="90" width="12" height="58" rx="5" fill="#c9a98c"/><circle cx="45" cy="55" r="38" fill="${c}"/></g>`),
    bush: (c = '#b5cda6') => svg('0 0 120 60', `<g class="c"><path d="M6 58c-8-20 10-34 24-26 6-20 40-24 50-4 18-8 38 10 32 30z" fill="${c}"/></g>`),
    cloud: svg('0 0 120 60', `<g class="c"><path d="M18 54C2 54 2 30 20 30c2-22 42-30 52-8 18-6 36 8 30 32z" fill="#fffaf0"/></g>`),
    plane: svg('0 0 60 60', `<g class="c"><path d="M4 30L56 6 40 54 28 36z" fill="#fffaf0"/></g><path d="M56 6L28 36l-2 14" fill="none" stroke="#d9c7ad" stroke-width="2"/>`),
    mailbox: svg('0 0 120 170', `<g class="c"><rect x="52" y="90" width="16" height="78" rx="4" fill="#c9a98c"/><path d="M14 92V52a30 30 0 0 1 30-30h46v70z" fill="#f0b9b4"/></g><rect x="30" y="52" width="46" height="8" rx="4" fill="#5c4a3e" opacity=".6"/>`),
    phone: (c) => svg('0 0 120 120', `<g class="c"><path d="M14 44c0-30 92-30 92 0v10H78V42H42v12H14z" fill="${c}"/><path d="M34 60h52l14 50H20z" fill="${c}"/></g><circle cx="60" cy="86" r="14" fill="#fffaf0"/>`),
    envelope: svg('0 0 240 130', `<g class="c"><rect x="4" y="4" width="232" height="122" rx="8" fill="#f5cdb8"/></g><path d="M6 8l114 72L234 8" fill="none" stroke="#e0ae97" stroke-width="3"/>`),
    camera: svg('0 0 130 170', `<path d="M65 90L30 166M65 90l35 76M65 90v76" stroke="#c9a98c" stroke-width="7" stroke-linecap="round"/><g class="c"><rect x="14" y="26" width="102" height="66" rx="10" fill="#93b5c8"/><rect x="44" y="12" width="36" height="18" rx="4" fill="#7d9eb1"/></g><circle cx="65" cy="59" r="22" fill="#fffaf0"/><circle cx="65" cy="59" r="12" fill="#7d9eb1"/>`),
    hill: (w, h, c, amp = 14, per = 2, ph = 0) => {
      let d = `M0 ${h}`;
      for (let x = 0; x <= w; x += 12) d += `L${x} ${(amp + 6 + Math.sin((x / w) * Math.PI * 2 * per + ph) * amp).toFixed(1)}`;
      return svg(`0 0 ${w} ${h}`, `<path class="c" d="${d}L${w} ${h}z" fill="${c}"/>`);
    },
  };

  const SCENES = [
    { bg: '#c8d5db', ground: '#ccd5c0', cap: '함께 걷는 길', extra: '' },
    { bg: '#ebdfbe', ground: '#e8d0c1', cap: '봄날의 소풍', extra: '' },
    { bg: '#d4cbd7', ground: '#c8d5db', cap: '우산 하나, 두 사람', extra: '' },
    { bg: '#6f7b89', ground: '#8f9aa6', cap: '별 보는 밤', extra: '' },
    { bg: '#e3cac7', ground: '#f3ecdf', cap: '우리의 약속', extra: '' },
  ];
  function scene(s, i) {
    const stars = i === 3 ? [[30, 30], [80, 50], [150, 24], [200, 58], [120, 74]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.5" fill="#fff6d8"/>`).join('') : '';
    const heart = i === 4 ? '<path d="M113 66c-14-22-42-8-30 14 7 12 30 26 30 26s23-14 30-26c12-22-16-36-30-14z" fill="#fbf7ee"/>' : '';
    return `<svg viewBox="0 0 226 226" aria-hidden="true"><rect width="226" height="226" fill="${s.bg}"/>${stars}${heart}<rect y="168" width="226" height="58" fill="${s.ground}"/>${doll(GROOM).replace('class="doll"', 'x="58" y="100" width="58" height="96"')}${doll(BRIDE).replace('class="doll"', 'x="110" y="100" width="58" height="96"')}</svg>`;
  }

  /* ---------- 공통 유틸 ---------- */
  let root;
  function mount(el) { root = el; }

  let toastTimer;
  function toast(text) {
    let t = root.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); root.appendChild(t); }
    t.textContent = text;
    requestAnimationFrame(() => t.classList.add('show'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
  }

  function copy(text, done) {
    const fallback = () => toast(`${text} 를 길게 눌러 복사해 주세요`);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => toast(done), fallback);
    } else fallback();
  }

  function openSheet({ title, html, bind, onClose }) {
    const veil = document.createElement('div');
    veil.className = 'veil';
    veil.innerHTML = `<section class="sheet" role="dialog" aria-modal="true" aria-label="${title}"><div class="grab" aria-hidden="true"><span></span></div><button class="close" aria-label="닫기">×</button><h2>${title}</h2><div class="sheet-body">${html}</div></section>`;
    root.appendChild(veil);
    requestAnimationFrame(() => requestAnimationFrame(() => veil.classList.add('show')));
    const sheet = veil.querySelector('.sheet');
    const close = () => {
      sheet.style.transition = '';
      sheet.style.transform = '';
      veil.style.opacity = '';
      veil.classList.remove('show');
      setTimeout(() => veil.remove(), 280);
      document.removeEventListener('keydown', onKey);
      if (onClose) onClose();
    };
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    veil.addEventListener('click', (e) => { if (e.target === veil) close(); });
    veil.querySelector('.close').addEventListener('click', close);
    // 손잡이를 아래로 끌면 닫힌다
    const grab = veil.querySelector('.grab');
    let dragY = null, dist = 0, lastY = 0, lastAt = 0, speed = 0;
    grab.addEventListener('pointerdown', (e) => {
      dragY = lastY = e.clientY; lastAt = performance.now(); dist = 0; speed = 0;
      sheet.style.transition = 'none';
      grab.setPointerCapture(e.pointerId);
    });
    grab.addEventListener('pointermove', (e) => {
      if (dragY === null) return;
      dist = Math.max(0, e.clientY - dragY);
      const now = performance.now();
      speed = (e.clientY - lastY) / Math.max(1, now - lastAt);
      lastY = e.clientY; lastAt = now;
      sheet.style.transform = `translateY(${dist}px)`;
      veil.style.opacity = String(Math.max(.25, 1 - dist / (sheet.offsetHeight * 1.2)));
    });
    const drop = () => {
      if (dragY === null) return;
      dragY = null;
      if (dist > sheet.offsetHeight * .22 || speed > .6) { close(); return; }
      sheet.style.transition = '';
      sheet.style.transform = 'none';
      veil.style.opacity = '';
    };
    grab.addEventListener('pointerup', drop);
    grab.addEventListener('pointercancel', drop);
    bindCommon(veil);
    if (bind) bind(veil);
    veil.querySelector('.close').focus({ preventScroll: true });
    return close;
  }

  function bindCommon(el) {
    el.querySelectorAll('[data-copy]').forEach((b) => b.addEventListener('click', () => copy(b.dataset.copy, b.dataset.done || '복사했어요')));
  }

  /* ---------- 방명록 ---------- */
  const KEY = 'wedding-letters';
  const SAMPLES = [
    { name: '예시 하객 1', text: '두 사람 정말 축하해요! 오래오래 행복하세요.', sample: true },
    { name: '예시 하객 2', text: '결혼식 날 꼭 갈게요. 그날 만나요.', sample: true },
    { name: '예시 하객 3', text: '마을이 너무 귀여워요. 우체국 단골 할게요.', sample: true },
    { name: '예시 하객 4', text: '늘 지금처럼 웃는 부부가 되길 바라요.', sample: true },
  ];
  let mine = [];
  try { mine = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { mine = []; }
  function letters() { return mine.concat(SAMPLES); }
  function addLetter(name, text) {
    const item = { name, text };
    mine.unshift(item);
    try { localStorage.setItem(KEY, JSON.stringify(mine)); } catch (e) { /* 저장이 막힌 브라우저에서는 이번 화면에만 보인다 */ }
    return item;
  }

  /* ---------- 내용 ---------- */
  function fmtDate() {
    const d = INFO.date;
    const h = d.getHours();
    const m = d.getMinutes();
    return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 ${DAYS[d.getDay()]}요일 ${h < 12 ? '오전' : '오후'} ${h > 12 ? h - 12 : h}시${m ? ` ${m}분` : ''}`;
  }
  function dday() {
    const now = new Date();
    const a = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const b = new Date(INFO.date.getFullYear(), INFO.date.getMonth(), INFO.date.getDate());
    const n = Math.round((b - a) / 864e5);
    return n > 0 ? `D-${n}` : n === 0 ? '오늘이에요' : '감사합니다';
  }
  function calendar() {
    const d = INFO.date;
    const first = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
    const last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    let cells = '<tr>' + '<td></td>'.repeat(first);
    for (let i = 1; i <= last; i++) {
      cells += `<td${i === d.getDate() ? ' class="on"' : ''}>${i}</td>`;
      if ((first + i) % 7 === 0 && i !== last) cells += '</tr><tr>';
    }
    return `<table class="cal"><thead><tr>${DAYS.map((x) => `<th>${x}</th>`).join('')}</tr></thead><tbody>${cells}</tr></tbody></table>`;
  }

  const q = encodeURIComponent(INFO.mapQuery);
  const mapLinks = `<div class="btn-row">
    <a class="btn" href="https://map.naver.com/p/search/${q}" target="_blank" rel="noopener">네이버지도</a>
    <a class="btn" href="https://map.kakao.com/?q=${q}" target="_blank" rel="noopener">카카오맵</a>
    <a class="btn" href="tmap://search?name=${q}">티맵</a>
  </div>`;
  const person = (label, p) => `<div class="person"><div><b>${label} ${p.name}</b><span>${p.phone}</span></div><a class="btn" href="tel:${p.phone}">전화</a><a class="btn" href="sms:${p.phone}">문자</a></div>`;
  const account = (label, who) => `<div class="person"><div><b>${label}</b><span class="note">${who} · 계좌번호를 곧 넣을 자리</span></div></div>`;

  const GREETING = '서로 다른 길을 걷던 두 사람이<br>이제 같은 길을 함께 걸으려 합니다.<br>귀한 걸음으로 축복해 주시면<br>더없는 기쁨으로 간직하겠습니다.';
  const FAMILY = `<div class="parents">
    <div><small>${INFO.groom.father} · ${INFO.groom.mother} 의 아들</small><br><b>신랑 ${INFO.groom.name}</b></div>
    <div><small>${INFO.bride.father} · ${INFO.bride.mother} 의 딸</small><br><b>신부 ${INFO.bride.name}</b></div>
  </div>`;

  const sections = {
    greet: { title: '초대합니다', html: () => `<p class="greet">${GREETING}</p>${FAMILY}` },
    when: { title: '언제 만나요', html: () => `<h3>${fmtDate()}</h3><p class="note">결혼식까지 ${dday()}</p>${calendar()}` },
    where: { title: '어디서 만나요', html: whereHTML },
    gallery: {
      title: '사진관',
      html: () => `<div class="pola-stack" data-nodrag>${SCENES.map((s, i) => `<div class="pola" data-i="${i}">${scene(s, i)}<p>${s.cap}</p></div>`).join('')}</div><p class="note" style="text-align:center">옆으로 밀면 다음 사진이 나와요</p>`,
      bind: bindGallery,
    },
    contact: { title: '전화하기', html: () => `${person('신랑', INFO.groom)}${person('신부', INFO.bride)}` },
    gift: { title: '마음 전하실 곳', html: () => `${account('신랑측', `${INFO.groom.name} · ${INFO.groom.father} · ${INFO.groom.mother}`)}${account('신부측', `${INFO.bride.name} · ${INFO.bride.father} · ${INFO.bride.mother}`)}` },
    guestbook: { title: '방명록', html: guestbookHTML, bind: bindGuestbook },
  };

  // 예식장 약도와 주차 안내도를 종이 지도 하나로 다시 그렸다.
  const road = (d, w = 11) => `<path d="${d}" fill="none" stroke="#fffaf0" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const label = (x, y, t, size = 11) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" fill="#85705f">${t}</text>`;
  const lot = (x, y, n) => `<circle cx="${x}" cy="${y}" r="12" fill="#c6deea" stroke="#fffaf0" stroke-width="3"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="14" fill="#5c4a3e">${n}</text>`;
  const PAPER_MAP = `<svg class="paper-map" viewBox="0 0 340 262" role="img" aria-label="명동역 3번 출구에서 라루체까지 가는 약도. 전용 주차장은 라루체에 있고 1번, 2번 주차장은 라루체 근처, 3번 주차장은 서쪽에 있습니다." font-family="Gowun Batang, serif">
    <rect width="340" height="262" rx="10" fill="#ece3d2"/>
    ${road('M0 44L90 34H340', 18)}${road('M250 40L206 160L176 262')}${road('M104 36L128 180L176 262', 8)}${road('M0 200L128 180', 9)}${road('M128 180L206 160', 7)}
    <path d="M0 44L90 34H340" fill="none" stroke="#b3c6d0" stroke-width="5"/>
    <rect x="176" y="14" width="120" height="24" rx="12" fill="#b3c6d0" stroke="#fbf7ee" stroke-width="3"/>
    <text x="236" y="31" text-anchor="middle" font-size="14" fill="#403933">4호선 명동역</text>
    ${label(30, 26, '퇴계로')}${label(262, 110, '퍼시픽호텔')}${label(166, 112, '정화예술대')}${label(58, 150, '쌍용플래티넘')}
    <path d="M254 56L208 162L190 176" fill="none" stroke="#96695b" stroke-width="3.5" stroke-dasharray="7 6" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="254" cy="52" r="14" fill="#96695b" stroke="#fbf7ee" stroke-width="3"/><text x="254" y="57" text-anchor="middle" font-size="14" fill="#fbf7ee">3</text>
    <text x="286" y="57" text-anchor="middle" font-size="12" fill="#403933">3번 출구</text>
    ${lot(40, 86, 3)}${lot(136, 196, 1)}${lot(126, 240, 2)}
    <g transform="translate(150 164)"><rect width="56" height="38" rx="7" fill="#d8bcb6" stroke="#fbf7ee" stroke-width="3"/><text x="28" y="17" text-anchor="middle" font-size="13" fill="#403933">라루체</text><text x="28" y="32" text-anchor="middle" font-size="10" fill="#403933">전용 주차</text></g>
  </svg>`;

  function whereHTML() {
    const row = (title, body) => `<details class="way"><summary>${title}</summary><div>${body}</div></details>`;
    return `<h3>${INFO.venue} ${INFO.hall}</h3>
      <div class="person"><div><span>${INFO.address}</span><br><span class="note">예식장 ${INFO.tel}</span></div><button class="btn butter" data-copy="${INFO.address}" data-done="주소를 복사했어요">복사</button></div>
      ${PAPER_MAP}${mapLinks}
      ${row('지하철', '<p>4호선 명동역 3번 출구에서 퍼시픽호텔 오른쪽 길로 60m</p>')}
      ${row('버스', '<p><b>퇴계로2가·명동역 정류장</b><br>104, 105, 421, 463, 507, 604, N16, 7011</p><p><b>명동입구 정류장</b><br>104, 421, 463, 507, 604, N16, 7011</p>')}
      ${row('자가용', '<p><b>강남에서</b><br>반포대교, 남산3호터널을 지나 쌍용플래티넘 아파트 옆에서 우회전한 뒤, 아파트를 끼고 좌회전</p><p><b>서울역에서</b><br>퇴계로 방면으로 회현역, 회현사거리를 지나 직진. 스테이트타워와 뉴오리엔탈호텔 사이로 우회전 후 왼쪽 첫 번째 골목</p><p><b>왕십리에서</b><br>퇴계로를 따라 남대문 방향으로 직진, 퇴계로2가 지하차도를 지나 회현사거리 신세계백화점 앞에서 유턴. 스테이트타워와 뉴오리엔탈호텔 사이로 우회전 후 왼쪽 첫 번째 골목</p>')}
      ${row('주차', '<p>라루체 전용 주차장과 지도의 1, 2, 3번 주차장을 이용하실 수 있어요.<span class="temp">요금 확인 중</span></p>')}`;
  }

  function letterList() {
    return letters().map((l) => `<div class="letter">${esc(l.text)}<small>${esc(l.name)}</small></div>`).join('');
  }
  function guestbookHTML() {
    return `<form class="form" id="gb-form">
      <label class="field">작성자<input id="gb-name" maxlength="12" required placeholder="이름을 적어 주세요"></label>
      <label class="field">편지<textarea id="gb-text" rows="3" maxlength="120" required placeholder="두 사람에게 한마디"></textarea></label>
      <button class="btn primary" type="submit">편지 보내기</button>
    </form><p class="note" style="margin-top:10px">지금은 준비 중이라 글이 이 휴대폰에만 저장돼요.</p><h3 style="margin-top:18px">마을에 도착한 편지</h3><div class="letters" id="gb-list">${letterList()}</div>`;
  }
  function bindGuestbook(el) {
    el.querySelector('#gb-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const name = el.querySelector('#gb-name').value.trim();
      const text = el.querySelector('#gb-text').value.trim();
      if (!name || !text) return;
      const item = addLetter(name, text);
      el.querySelector('#gb-list').innerHTML = letterList();
      e.target.reset();
      const p = document.createElement('div');
      p.className = 'fly-plane';
      p.innerHTML = art.plane;
      root.appendChild(p);
      setTimeout(() => p.remove(), 1600);
      toast('편지가 날아갔어요');
      root.dispatchEvent(new CustomEvent('letter', { detail: item }));
    });
  }

  function bindGallery(el) {
    const stack = el.querySelector('.pola-stack');
    if (!stack) return;
    let order = [...stack.querySelectorAll('.pola')];
    const tilt = [-3, 4, -6, 5, -2];
    const paint = () => order.forEach((p, i) => {
      p.style.zIndex = order.length - i;
      p.style.transform = `translateY(${i * 3}px) rotate(${tilt[(+p.dataset.i + i) % 5]}deg)`;
    });
    paint();
    let sx = null, dx = 0;
    stack.addEventListener('pointerdown', (e) => { sx = e.clientX; dx = 0; order[0].style.transition = 'none'; stack.setPointerCapture(e.pointerId); });
    stack.addEventListener('pointermove', (e) => {
      if (sx === null) return;
      dx = e.clientX - sx;
      order[0].style.transform = `translateX(${dx}px) rotate(${dx / 14}deg)`;
    });
    const up = () => {
      if (sx === null) return;
      sx = null;
      const top = order[0];
      top.style.transition = '';
      if (Math.abs(dx) > 50 || Math.abs(dx) < 6) {
        const dir = dx < 0 ? -1 : 1;
        top.style.transform = `translateX(${dir * 420}px) rotate(${dir * 24}deg)`;
        setTimeout(() => { order.push(order.shift()); paint(); }, 200);
      } else paint();
    };
    stack.addEventListener('pointerup', up);
    stack.addEventListener('pointercancel', up);
  }

  function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  function openSection(key, onClose) { const s = sections[key]; openSheet({ title: s.title, html: s.html(), bind: s.bind, onClose }); }
  function openSummary() {
    const order = ['greet', 'when', 'where', 'contact', 'gift'];
    openSheet({
      title: `${INFO.groom.short} ♥ ${INFO.bride.short} 결혼합니다`,
      html: `<div class="stack-v">${order.map((k) => `<section>${k === 'greet' ? '' : `<h3>${sections[k].title}</h3>`}${sections[k].html()}</section>`).join('')}</div>`,
    });
  }

  /* ---------- 음악: 저작권 걱정이 없도록 오르골 소리를 코드로 직접 연주한다 ---------- */
  const BARS = [
    [[60, 64, 67], [[76, 0], [79, 1], [84, 2]]],
    [[60, 65, 69], [[81, 0], [77, 1.5], [81, 2]]],
    [[59, 62, 67], [[79, 0], [74, 1], [79, 2]]],
    [[60, 64, 67], [[76, 0], [72, 1]]],
    [[60, 64, 67], [[72, 0], [76, 1], [79, 2]]],
    [[60, 65, 69], [[81, 0], [84, 1], [81, 2]]],
    [[59, 62, 67], [[79, 0], [83, 1], [86, 2]]],
    [[60, 64, 67], [[84, 0]]],
  ];
  const BEAT = 60 / 112;
  let ctx = null, master = null, echo = null, timer = null, cursor = 0, bar = 0, wanted = true, unlocked = false;
  const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);
  function ping(n, at, vol) {
    [[1, 1], [2, .24], [4, .05]].forEach(([mul, g]) => {
      const o = ctx.createOscillator(), a = ctx.createGain();
      o.type = 'sine';
      o.frequency.value = midi(n) * mul;
      a.gain.setValueAtTime(0, at);
      a.gain.linearRampToValueAtTime(vol * g, at + .006);
      a.gain.exponentialRampToValueAtTime(.0001, at + 1.3 / Math.sqrt(mul));
      o.connect(a); a.connect(master); a.connect(echo);
      o.start(at); o.stop(at + 1.4);
    });
  }
  function schedule() {
    while (cursor < ctx.currentTime + .6) {
      const [chord, tune] = BARS[bar];
      chord.forEach((n, i) => ping(n, cursor + i * BEAT, i ? .13 : .18));
      tune.forEach(([n, b]) => ping(n, cursor + b * BEAT, .42));
      cursor += 3 * BEAT;
      bar = (bar + 1) % BARS.length;
    }
  }
  function play() {
    if (!ctx || timer) return;
    ctx.resume();
    cursor = Math.max(cursor, ctx.currentTime + .1);
    master.gain.setTargetAtTime(.2, ctx.currentTime, .3);
    timer = setInterval(schedule, 200);
    schedule();
  }
  function pause() {
    if (!ctx || !timer) return;
    clearInterval(timer);
    timer = null;
    master.gain.setTargetAtTime(0, ctx.currentTime, .1);
  }
  function unlock() {
    if (unlocked) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    unlocked = true;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    echo = ctx.createDelay(1);
    echo.delayTime.value = .27;
    const wet = ctx.createGain();
    wet.gain.value = .2;
    echo.connect(wet); wet.connect(master);
    if (wanted) play();
  }
  ['touchend', 'click'].forEach((t) => document.addEventListener(t, unlock, { passive: true }));
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); else if (wanted) play(); });

  const SFX = { tap: [91], door: [72, 79], stamp: [76, 84, 88], splash: [93, 88, 96, 91], balloon: [79, 86], finale: [72, 76, 79, 84, 88] };
  function sfx(kind) {
    if (!ctx || !wanted || !timer) return;
    (SFX[kind] || []).forEach((n, i) => ping(n, ctx.currentTime + .01 + i * .085, .2));
  }

  function musicButton(btn) {
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 10v4h3l4 4V6L7 10z" fill="currentColor"/><path class="wave" d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12"/></svg><span>음악</span>';
    btn.setAttribute('aria-pressed', 'true');
    btn.setAttribute('aria-label', '배경음악');
    btn.addEventListener('click', () => {
      wanted = !wanted;
      btn.setAttribute('aria-pressed', String(wanted));
      unlock();
      if (wanted) play(); else pause();
    });
  }

  window.W = { sfx, INFO, art, doll, GROOM, BRIDE, GUESTS, sections, mount, toast, openSheet, openSection, openSummary, letters, addLetter, esc, bindCommon, bindGallery, musicButton, fmtDate, dday, calendar, GREETING, FAMILY, mapLinks, person, account, SCENES, scene };
})();
