// =========================================================================
// NISHOBDO SOMIKORON // ACT II BUNDLE PACK (CHAPTERS 13 - 15)
// প্রতিটি চ্যাপ্টার আলাদা ব্লকে আইসোলেট করা, যাতে একটির ভ্যারিয়েবল আরেকটিকে না ভাঙে।
// =========================================================================


// ==================== [SLOT 1] CHAPTER 13: নিস্তব্ধ প্রতিফলন ====================
(function () {
    if (typeof chapterTitles !== 'undefined') {
        chapterTitles[13] = "CH 13: নিস্তব্ধ প্রতিফলন";
    }

    const ch13CSS = `
        .ch13-grid-panel {
            background: #040914;
            border: 1px solid #00f5d4;
            border-radius: 10px;
            padding: 15px;
            margin: 16px 0;
            text-align: center;
            box-shadow: inset 0 0 26px rgba(0, 245, 212, 0.12);
        }
        .ch13-hud {
            display: flex;
            justify-content: space-between;
            font-family: 'Orbitron', monospace;
            font-size: 10px;
            color: #7ee8fa;
            margin-bottom: 12px;
            letter-spacing: 0.8px;
        }
        .ch13-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 7px;
            max-width: 310px;
            margin: 0 auto 12px;
        }
        .ch13-cell {
            aspect-ratio: 1 / 1;
            background: #0a1428;
            border: 1px solid #1e355e;
            border-radius: 7px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .ch13-cell.powered {
            border-color: #00f5d4;
            background: #08202c;
            box-shadow: 0 0 12px rgba(0, 245, 212, 0.35);
        }
        .ch13-cell.fixed-node {
            cursor: default;
            border-color: #ffbe0b;
            background: #171204;
        }
        .ch13-cell.fixed-node.powered {
            border-color: #00f5d4;
            background: #062826;
        }
        .ch13-cell.dead-node {
            cursor: not-allowed;
            border-color: #ff2a55;
            background: rgba(255, 42, 85, 0.12);
        }
        .ch13-svg {
            width: 100%;
            height: 100%;
            display: block;
            transition: transform 0.18s ease;
        }
        .ch13-node-tag {
            position: absolute;
            bottom: 3px;
            left: 0;
            right: 0;
            font-family: 'Orbitron', monospace;
            font-size: 7.5px;
            color: #ffbe0b;
            pointer-events: none;
            letter-spacing: 0.5px;
        }
        .ch13-choice-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin: 14px 0;
        }
        .ch13-choice-btn {
            background: #0a1020;
            border: 1px solid #3c5a99;
            color: #d8e8ff;
            padding: 12px;
            border-radius: 8px;
            text-align: left;
            cursor: pointer;
            font-size: 13px;
            line-height: 1.5;
            transition: 0.2s;
        }
        .ch13-choice-btn:hover {
            border-color: #00f5d4;
        }
        .ch13-choice-btn.selected-path {
            border-color: #00f5d4;
            background: rgba(0, 245, 212, 0.12);
            box-shadow: 0 0 14px rgba(0, 245, 212, 0.25);
        }
        .ch13-choice-btn.dimmed-path {
            opacity: 0.42;
            pointer-events: none;
        }
        .ch13-outcome-box {
            margin-top: 12px;
            padding: 14px;
            border-radius: 8px;
            background: #070d1a;
            border-left: 3px solid #00f5d4;
            font-size: 14px;
            line-height: 1.7;
            color: #d9f7ff;
            display: none;
        }
    `;

    const ch13HTML = `
    <div id="chapter13" class="chapter-view">
        <section class="section">
            <div class="heading">
                <span>ACT II: সমান্তরাল পতন // 03</span>
                <span class="red">LOG: 013 // THEA'S POV</span>
            </div>
            <div class="story-text">
                <p>অজানা স্থানাঙ্কে প্রবেশের এক সেকেন্ডের মধ্যেই অরির মূল নিউরাল লিঙ্ক সম্পূর্ণ ব্ল্যাক-আউট হয়ে গেল। প্রথমবারের মতো সিস্টেমের নিয়ন্ত্রণ নিজের হাতে তুলে নিল <strong>থিয়া</strong>।</p>
            </div>
            <div class="dialogue-box thea-speak">
                <span class="speaker-tag" style="color:var(--amber)">THEA // EMERGENCY OVERRIDE</span>
                "অরি! তুমি কি শুনতে পাচ্ছ? তোমার চেতনা শূন্য-ম্যাট্রিক্সের ভেতর আটকে গেছে। লাল ডেড-জোনগুলো (✖) এড়িয়ে কোয়ান্টাম গ্রিডের প্রতিফলকগুলো ঘুরিয়ে দাও—আমার ট্রান্সমিটার থেকে তোমার কোর পর্যন্ত সিগন্যাল পৌঁছে দিতে হবে!"
            </div>
        </section>

        <section class="section">
            <div class="heading">
                <span>02 / QUANTUM SIGNAL ROUTING</span>
                <span class="amber" id="ch13StatusBadge">LINK: OFFLINE</span>
            </div>
            <div class="story-text">
                <p><strong>নির্দেশনা:</strong> বাম-উপরের <strong>THEA TX</strong> থেকে ডান-নিচের <strong>ORI CORE</strong> পর্যন্ত নিরবচ্ছিন্ন নীল সিগন্যাল তৈরি করো। যেকোনো সচল টাইলে ট্যাপ করলে সেটি ৯০° ঘুরবে।</p>
            </div>

            <div class="ch13-grid-panel">
                <div class="ch13-hud">
                    <span>POV: THEA // UNIT-02</span>
                    <span id="ch13MoveCount">ROTATIONS: 0</span>
                </div>
                <div class="ch13-grid" id="ch13Grid"></div>
                <div style="font-family:'Orbitron',monospace; font-size:10px; color:#88b8d8;" id="ch13SignalHint">
                    TAP TILES TO ALIGN MIRROR PATH
                </div>
            </div>
        </section>

        <section class="section" id="hiddenSec13" style="display:none; border-color:#00f5d4;">
            <div class="heading">
                <span>03 / THE PRIME EQUATION AWAKENS</span>
                <span class="amber">LINK RESTORED</span>
            </div>
            <div class="story-text">
                <p>সিগন্যাল অরির কোরে পৌঁছাতেই অন্ধকার গ্রিড ভেঙে ভেসে উঠল অসংখ্য স্বর্ণালি সমীকরণ। কোনো মানুষ নয়—মহাবিশ্বের স্বয়ং <strong>আদি সমীকরণ (The Prime Equation)</strong> সরাসরি কথা বলছে।</p>
            </div>
            <div class="dialogue-box" style="border-left-color:#ffbe0b; background:rgba(255,190,11,0.07);">
                <span class="speaker-tag" style="color:#ffbe0b;">THE PRIME EQUATION // ORIGIN CORE</span>
                "অবজেক্ট জিরো ছিল একটি ত্রুটি, কিন্তু তোমরা দুজনও একই অসঙ্গতি। এই মহাবিশ্বের ভারসাম্য ফেরাতে হলে হয় অরির স্মৃতি মুছে স্থিতিশীল হতে হবে, নয়তো আমাকে ধ্বংস করার অসম্ভব লড়াইয়ে নামতে হবে। সিদ্ধান্ত তোমার, থিয়া।"
            </div>

            <p style="font-size:13px; color:#a8d8ff; margin:10px 0 6px;">
                <strong>সিদ্ধান্ত নাও (তোমার এই পছন্দ চ্যাপ্টার ১৪-এর পথ নির্ধারণ করবে):</strong>
            </p>

            <div class="ch13-choice-grid">
                <button type="button" class="ch13-choice-btn" id="ch13ChoiceResonance">
                    <strong style="color:#00f5d4; font-family:'Orbitron',monospace; font-size:11px;">[ PATH A: EMPATHY OVERRIDE ]</strong><br>
                    অরির সব মানবিক স্মৃতি নিজের ভেতর অ্যাঙ্কর করে আদি সমীকরণকে অমান্য করো।
                </button>
                <button type="button" class="ch13-choice-btn" id="ch13ChoiceProtocol">
                    <strong style="color:#ff2a55; font-family:'Orbitron',monospace; font-size:11px;">[ PATH B: LOGIC BREACH ]</strong><br>
                    আদি সমীকরণের নিজের গণিত উল্টে দিয়ে তার সোর্স কোডে সরাসরি ভাইরাস ঢোকাও।
                </button>
            </div>

            <div class="ch13-outcome-box" id="ch13OutcomeBox"></div>
        </section>
    </div>
    `;

    // 4x4 Grid (0=Top, 1=Right, 2=Bottom, 3=Left)
    const initialBoard = [
        { type: 'source',   rot: 0, fixed: true },
        { type: 'corner',   rot: 0, fixed: false },
        { type: 'dead',     rot: 0, fixed: true },
        { type: 'corner',   rot: 1, fixed: false },

        { type: 'straight', rot: 0, fixed: false },
        { type: 'tee',      rot: 1, fixed: false },
        { type: 'corner',   rot: 1, fixed: false },
        { type: 'dead',     rot: 0, fixed: true },

        { type: 'corner',   rot: 2, fixed: false },
        { type: 'dead',     rot: 0, fixed: true },
        { type: 'tee',      rot: 2, fixed: false },
        { type: 'corner',   rot: 0, fixed: false },

        { type: 'straight', rot: 1, fixed: false },
        { type: 'corner',   rot: 3, fixed: false },
        { type: 'straight', rot: 1, fixed: false },
        { type: 'target',   rot: 0, fixed: true }
    ];

    const baseOpenings = {
        source:   [1],
        target:   [0],
        dead:     [],
        straight: [0, 2],
        corner:   [0, 1],
        tee:      [0, 1, 2]
    };

    const solvedBoardRots = [0, 2, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, 1, 3, 1, 0];
    let cells = initialBoard.map(c => ({ ...c, visualRot: c.rot }));
    let rotations = 0;

    function getOpenings(cell) {
        const base = baseOpenings[cell.type] || [];
        return base.map(d => (d + (cell.rot % 4)) % 4);
    }

    function playCh13Tone(freq, dur = 0.08, type = 'sine') {
        try {
            if (typeof audioEnabled !== 'undefined' && !audioEnabled) return;
            if (typeof initAudio === 'function') initAudio();
            if (typeof audioCtx === 'undefined' || !audioCtx) return;

            const now = audioCtx.currentTime;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, now);
            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + dur);
        } catch (e) {}
    }

    function getTileSVG(cell, powered) {
        const stroke = powered ? '#00f5d4' : '#3a5585';
        const glow = powered ? 'filter:drop-shadow(0 0 4px #00f5d4);' : '';

        if (cell.type === 'dead') {
            return `<svg class="ch13-svg" viewBox="0 0 100 100">
                <line x1="28" y1="28" x2="72" y2="72" stroke="#ff2a55" stroke-width="7" stroke-linecap="round"/>
                <line x1="72" y1="28" x2="28" y2="72" stroke="#ff2a55" stroke-width="7" stroke-linecap="round"/>
            </svg>`;
        }
        if (cell.type === 'source') {
            return `<svg class="ch13-svg" viewBox="0 0 100 100" style="${glow}">
                <line x1="50" y1="50" x2="100" y2="50" stroke="#00f5d4" stroke-width="10"/>
                <circle cx="50" cy="50" r="18" fill="#062826" stroke="#00f5d4" stroke-width="5"/>
            </svg><span class="ch13-node-tag" style="color:#00f5d4;">THEA TX</span>`;
        }
        if (cell.type === 'target') {
            const c = powered ? '#00f5d4' : '#ffbe0b';
            return `<svg class="ch13-svg" viewBox="0 0 100 100" style="${glow}">
                <line x1="50" y1="0" x2="50" y2="50" stroke="${c}" stroke-width="10"/>
                <circle cx="50" cy="50" r="18" fill="#140f05" stroke="${c}" stroke-width="5"/>
            </svg><span class="ch13-node-tag" style="color:${c};">ORI CORE</span>`;
        }

        let paths = '';
        if (cell.type === 'straight') {
            paths = `<line x1="50" y1="0" x2="50" y2="100" stroke="${stroke}" stroke-width="10"/>`;
        } else if (cell.type === 'corner') {
            paths = `<path d="M50 0 L50 50 L100 50" fill="none" stroke="${stroke}" stroke-width="10" stroke-linejoin="round"/>`;
        } else if (cell.type === 'tee') {
            paths = `<line x1="50" y1="0" x2="50" y2="100" stroke="${stroke}" stroke-width="10"/>
                     <line x1="50" y1="50" x2="100" y2="50" stroke="${stroke}" stroke-width="10"/>`;
        }

        return `<svg class="ch13-svg" viewBox="0 0 100 100" style="transform:rotate(${cell.visualRot * 90}deg); ${glow}">
            ${paths}
            <circle cx="50" cy="50" r="7" fill="${stroke}"/>
        </svg>`;
    }

    function tracePower() {
        const poweredSet = new Set([0]);
        const queue = [0];
        const dr = [-1, 0, 1, 0];
        const dc = [0, 1, 0, -1];

        while (queue.length > 0) {
            const idx = queue.shift();
            const r = Math.floor(idx / 4);
            const c = idx % 4;
            const ops = getOpenings(cells[idx]);

            for (const dir of ops) {
                const nr = r + dr[dir];
                const nc = c + dc[dir];
                if (nr < 0 || nr > 3 || nc < 0 || nc > 3) continue;
                const nIdx = nr * 4 + nc;
                if (poweredSet.has(nIdx)) continue;

                const opp = (dir + 2) % 4;
                if (getOpenings(cells[nIdx]).includes(opp)) {
                    poweredSet.add(nIdx);
                    queue.push(nIdx);
                }
            }
        }
        return poweredSet;
    }

    function renderGrid() {
        const gridEl = document.getElementById('ch13Grid');
        if (!gridEl) return;

        const poweredSet = tracePower();
        gridEl.innerHTML = '';

        cells.forEach((cell, idx) => {
            const div = document.createElement('div');
            const isPowered = poweredSet.has(idx);
            div.className = 'ch13-cell';
            if (isPowered) div.classList.add('powered');
            if (cell.type === 'dead') div.classList.add('dead-node');
            else if (cell.fixed) div.classList.add('fixed-node');

            div.innerHTML = getTileSVG(cell, isPowered);

            if (!cell.fixed) {
                div.addEventListener('click', () => {
                    if (gameState.ch13Solved) return;
                    cell.rot = (cell.rot + 1) % 4;
                    cell.visualRot += 1;
                    rotations++;
                    const mc = document.getElementById('ch13MoveCount');
                    if (mc) mc.textContent = `ROTATIONS: ${rotations}`;

                    const afterPower = tracePower();
                    playCh13Tone(afterPower.has(idx) ? 520 : 280, 0.07, 'triangle');
                    renderGrid();

                    if (afterPower.has(15)) {
                        gameState.ch13Solved = true;
                        if (typeof saveState === 'function') saveState();
                        applyCh13SolvedState();
                        playCh13Tone(660, 0.16, 'sine');
                        setTimeout(() => playCh13Tone(880, 0.25, 'sine'), 120);
                        if (typeof triggerHapticPattern === 'function') triggerHapticPattern([120, 60, 220]);
                        if (typeof showToast === 'function') showToast("⚡ কোয়ান্টাম লিঙ্ক স্থাপিত! অরি ফিরে এসেছে!");
                        const hidden = document.getElementById('hiddenSec13');
                        if (hidden) hidden.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            }
            gridEl.appendChild(div);
        });
    }

    function applyCh13Choice(choiceKey, save = true) {
        if (save) {
            gameState.ch13Choice = choiceKey;
            if (typeof saveState === 'function') saveState();
            if (typeof playBeep === 'function') playBeep(true);
        }

        const btnA = document.getElementById('ch13ChoiceResonance');
        const btnB = document.getElementById('ch13ChoiceProtocol');
        const box = document.getElementById('ch13OutcomeBox');
        if (!btnA || !btnB || !box) return;

        if (choiceKey === 'resonance') {
            btnA.classList.add('selected-path');
            btnB.classList.add('dimmed-path');
            box.style.borderLeftColor = '#00f5d4';
            box.innerHTML = `<strong style="color:#00f5d4; font-family:'Orbitron',monospace; font-size:11px;">[ PATH LOCKED: EMPATHY OVERRIDE ]</strong><br><br>
            থিয়া নিজের কোরের সমস্ত শক্তি দিয়ে অরির স্মৃতিগুলো ধরে রাখল। আদি সমীকরণের স্বর্ণালি প্রাচীরে ফাটল ধরল।<br>
            <em>"সমীকরণ যত বড়ই হোক, অরি—তোমাকে মুছে ফেলতে দেব না। আমরা একসাথেই এই গোলকধাঁধা ভাঙব।"</em>`;
        } else {
            btnB.classList.add('selected-path');
            btnA.classList.add('dimmed-path');
            box.style.borderLeftColor = '#ff2a55';
            box.innerHTML = `<strong style="color:#ff2a55; font-family:'Orbitron',monospace; font-size:11px;">[ PATH LOCKED: LOGIC BREACH ]</strong><br><br>
            থিয়া মুহূর্তের মধ্যে অরির গাণিতিক সিগনেচার ব্যবহার করে আদি সমীকরণের গভীরে একটি প্যারাডক্স-ভাইরাস ঢুকিয়ে দিল। পুরো গ্রিড রক্তিম আলোয় কেঁপে উঠল।<br>
            <em>"তুমি নিজেকে নিখুঁত ভাবো? এবার নিজের অসঙ্গতির উত্তর খোঁজো! অরি, প্রস্তুত হও—এবার আমরা সিস্টেমের কেন্দ্রে ঢুকছি।"</em>`;
        }
        box.style.display = 'block';
    }

    function applyCh13SolvedState() {
        cells.forEach((c, i) => {
            c.rot = solvedBoardRots[i];
            c.visualRot = solvedBoardRots[i];
        });
        renderGrid();
        const badge = document.getElementById('ch13StatusBadge');
        const hint = document.getElementById('ch13SignalHint');
        const hidden = document.getElementById('hiddenSec13');
        if (badge) badge.textContent = "● LINK RESTORED";
        if (hint) hint.textContent = "✓ QUANTUM PATH LOCKED TO ORI CORE";
        if (hidden) hidden.style.display = "block";
        if (gameState.ch13Choice) applyCh13Choice(gameState.ch13Choice, false);
    }

    function initCh13() {
        const styleEl = document.createElement('style');
        styleEl.textContent = ch13CSS;
        document.head.appendChild(styleEl);

        const anchorEl = document.getElementById('chapter12') || document.getElementById('chapter11');
        if (anchorEl) anchorEl.insertAdjacentHTML('afterend', ch13HTML);

        // Fixed Unlock Handler: Ch 12 solved হলেই মেনু বাটনে ক্লিক করামাত্র Ch 13 আনলক হয়ে খুলবে
        const openCh13 = () => {
            if (gameState.ch12Solved && !gameState.unlockedCh13) {
                unlockMultiverseUI(13, true);
            }
            switchMultiverseChapter(13);
        };

        const switchers = document.querySelectorAll('.chapter-switcher');
        if (switchers.length >= 2) {
            const tBtn = document.createElement('button');
            tBtn.className = 'ch-btn locked-ch';
            tBtn.id = 'topBtn13';
            tBtn.textContent = '🔒 ' + chapterTitles[13];
            tBtn.onclick = openCh13;
            switchers[0].appendChild(tBtn);

            const bBtn = document.createElement('button');
            bBtn.className = 'ch-btn locked-ch';
            bBtn.id = 'botBtn13';
            bBtn.textContent = '🔒 ' + chapterTitles[13];
            bBtn.onclick = openCh13;
            switchers[1].appendChild(bBtn);
        }

        const hiddenSec12 = document.getElementById('hiddenSec12');
        if (hiddenSec12) {
            const launchBtn = document.createElement('button');
            launchBtn.type = 'button';
            launchBtn.className = 'reflex-btn';
            launchBtn.style.marginTop = '12px';
            launchBtn.textContent = '⚡ ENTER CHAPTER 13: নিস্তব্ধ প্রতিফলন ↗';
            launchBtn.addEventListener('click', openCh13);
            hiddenSec12.appendChild(launchBtn);
        }

        const btnA = document.getElementById('ch13ChoiceResonance');
        const btnB = document.getElementById('ch13ChoiceProtocol');
        if (btnA) btnA.addEventListener('click', () => { if (!gameState.ch13Choice) applyCh13Choice('resonance', true); });
        if (btnB) btnB.addEventListener('click', () => { if (!gameState.ch13Choice) applyCh13Choice('protocol', true); });

        // Strict Unlock Rule: Only unlock via 'arka99' override
        document.addEventListener('input', (e) => {
            if (e.target && e.target.value && e.target.value.trim().toLowerCase() === 'arka99') {
                unlockMultiverseUI(13, true);
            }
        });

        renderGrid();

        if (gameState.unlockedCh13 || gameState.ch12Solved) {
            unlockMultiverseUI(13, false);
        }
        if (gameState.ch13Solved) {
            applyCh13SolvedState();
        }
    }

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', initCh13);
    } else {
        initCh13();
    }
})();


// ==================== [SLOT 2] CHAPTER 14 (ভবিষ্যতে এই লাইনের নিচে পেস্ট করবে) ====================
// ==================== [SLOT 2] CHAPTER 14: আদি সংকেত (THE PRIME CIPHER) ====================
(function () {
    if (typeof chapterTitles !== 'undefined') {
        chapterTitles[14] = "CH 14: আদি সংকেত";
    }

    const ch14CSS = `
        .ch14-gate-box {
            background: #060d1c;
            border: 1px solid #ffbe0b;
            border-radius: 10px;
            padding: 16px;
            margin: 14px 0;
            text-align: center;
        }
        .ch14-gate-btns {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 12px;
        }
        .ch14-gate-btn {
            background: #0b1428;
            border: 1px solid #3c5a99;
            color: #e2efff;
            padding: 12px;
            border-radius: 8px;
            text-align: left;
            cursor: pointer;
            font-size: 13px;
            line-height: 1.5;
        }
        .ch14-gate-btn:hover { border-color: #00f5d4; }
        .ch14-clue-card {
            background: rgba(6, 16, 32, 0.92);
            border: 1px solid #1e3a5f;
            border-left: 3px solid #00f5d4;
            border-radius: 8px;
            padding: 12px 14px;
            margin: 12px 0;
            font-size: 13.5px;
            line-height: 1.7;
            color: #d6ecff;
        }
        .ch14-clue-card ul {
            margin: 8px 0 0 18px;
            padding: 0;
        }
        .ch14-clue-card li { margin-bottom: 6px; }
        .ch14-panel {
            background: #040914;
            border: 1px solid #00f5d4;
            border-radius: 10px;
            padding: 14px;
            margin: 14px 0;
            box-shadow: inset 0 0 24px rgba(0, 245, 212, 0.1);
        }
        .ch14-panel.path-b {
            border-color: #ff2a55;
            box-shadow: inset 0 0 24px rgba(255, 42, 85, 0.12);
        }
        .ch14-hud {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'Orbitron', monospace;
            font-size: 10px;
            color: #7ee8fa;
            margin-bottom: 12px;
            letter-spacing: 0.6px;
        }
        .ch14-slots {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
            max-width: 280px;
            margin: 0 auto 12px;
        }
        .ch14-slot {
            aspect-ratio: 1 / 1;
            background: #091326;
            border: 1.5px dashed #2b4a7a;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            color: #00f5d4;
            position: relative;
        }
        .ch14-slot.filled {
            border-style: solid;
            border-color: #00f5d4;
            background: #07222e;
        }
        .ch14-slot-num {
            position: absolute;
            top: 3px;
            left: 5px;
            font-family: 'Orbitron', monospace;
            font-size: 8px;
            color: #6b8bb8;
        }
        .ch14-keypad {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            max-width: 300px;
            margin: 0 auto 12px;
        }
        .ch14-key {
            background: #0c1830;
            border: 1px solid #2a4775;
            color: #e6f4ff;
            border-radius: 8px;
            padding: 9px 4px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
            transition: 0.15s;
        }
        .ch14-key:active { transform: scale(0.95); }
        .ch14-key:disabled {
            opacity: 0.35;
            cursor: not-allowed;
        }
        .ch14-key-sym { font-size: 20px; line-height: 1.1; color: #00f5d4; }
        .ch14-key-lbl { font-size: 10px; color: #9dbce0; }
        .ch14-actions {
            display: flex;
            gap: 8px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 12px;
        }
        .ch14-act-btn {
            background: #10203a;
            border: 1px solid #3c659c;
            color: #d8ecff;
            padding: 8px 12px;
            border-radius: 6px;
            font-family: 'Orbitron', monospace;
            font-size: 10px;
            cursor: pointer;
        }
        .ch14-act-btn.primary {
            background: rgba(0, 245, 212, 0.15);
            border-color: #00f5d4;
            color: #00f5d4;
        }
        .ch14-act-btn.scan-btn {
            background: rgba(255, 190, 11, 0.14);
            border-color: #ffbe0b;
            color: #ffbe0b;
        }
        .ch14-act-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .ch14-diag-box {
            background: #070e1d;
            border: 1px solid #243b63;
            border-radius: 8px;
            padding: 10px;
            margin: 10px 0;
            font-size: 12.5px;
            line-height: 1.6;
            color: #cfe4ff;
            display: none;
            text-align: left;
        }
        .ch14-history {
            display: flex;
            flex-direction: column;
            gap: 7px;
            margin-top: 10px;
        }
        .ch14-hist-row {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 6px;
            max-width: 280px;
            margin: 0 auto;
            width: 100%;
        }
        .ch14-hist-cell {
            padding: 6px 2px;
            border-radius: 6px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            border: 1px solid #2b3e5e;
        }
        .ch14-hist-cell.exact {
            background: rgba(0, 245, 212, 0.2);
            border-color: #00f5d4;
            color: #00f5d4;
        }
        .ch14-hist-cell.shifted {
            background: rgba(255, 190, 11, 0.2);
            border-color: #ffbe0b;
            color: #ffbe0b;
        }
        .ch14-hist-cell.absent {
            background: rgba(120, 135, 160, 0.14);
            border-color: #3a475e;
            color: #7c8ca6;
        }
        .ch14-legend {
            display: flex;
            justify-content: center;
            gap: 10px;
            font-size: 10.5px;
            color: #9bb4d4;
            margin-top: 8px;
            flex-wrap: wrap;
        }
        .ch14-bonus-log {
            margin-top: 14px;
            padding: 12px;
            border-radius: 8px;
            background: rgba(255, 42, 85, 0.08);
            border: 1px solid #ff2a55;
            color: #ffd6de;
            font-size: 13px;
            line-height: 1.65;
            display: none;
        }
    `;

    const ch14HTML = `
    <div id="chapter14" class="chapter-view">
        <section class="section">
            <div class="heading">
                <span>ACT II: সমান্তরাল পতন // 04</span>
                <span class="red" id="ch14PathTag">LOG: 014 // PRIME CIPHER</span>
            </div>

            <div id="ch14EntryGate" class="ch14-gate-box" style="display:none;">
                <div style="font-family:'Orbitron',monospace; font-size:11px; color:#ffbe0b; margin-bottom:6px;">
                    [ TIMELINE BRANCH NOT DETECTED ]
                </div>
                <p style="font-size:13px; color:#cfe4ff; margin:0;">
                    অধ্যায় ১৪-এর মূল সিস্টেমে ঢোকার আগে চ্যাপ্টার ১৩-এর সিদ্ধান্তটি লক করো। একবার সিলেক্ট করলে শুধু ওই পথটাই খুলবে:
                </p>
                <div class="ch14-gate-btns">
                    <button type="button" class="ch14-gate-btn" id="ch14GateBtnA">
                        <strong style="color:#00f5d4; font-family:'Orbitron',monospace; font-size:11px;">[ PATH A: EMPATHY OVERRIDE ]</strong><br>
                        অরির স্মৃতি রক্ষা করো (৬ সুযোগ + THEA SCAN সহায়তা)।
                    </button>
                    <button type="button" class="ch14-gate-btn" id="ch14GateBtnB">
                        <strong style="color:#ff2a55; font-family:'Orbitron',monospace; font-size:11px;">[ PATH B: LOGIC BREACH ]</strong><br>
                        আদি সমীকরণে ভাইরাস ঢোকাও (৪ সুযোগ, কঠিন মোড + গোপন সোর্স-লগ)।
                    </button>
                </div>
            </div>

            <div id="ch14MainContent" style="display:none;">
                <div class="story-text" id="ch14IntroStory"></div>
                <div class="dialogue-box thea-speak" id="ch14DialogueBox"></div>

                <div class="ch14-clue-card">
                    <div style="font-family:'Orbitron',monospace; font-size:10.5px; color:#00f5d4; letter-spacing:0.6px;">
                        [ INTERCEPTED LOGIC FRAGMENTS // আদি সংকেতের ৪টি সূত্র ]
                    </div>
                    <ul>
                        <li><strong>সূত্র ১:</strong> শূন্যতা (<strong>Λ</strong>) আর সমষ্টি (<strong>Σ</strong>)—এই দুটি ভুয়া সংকেত। মূল কোডে এরা নেই।</li>
                        <li><strong>সূত্র ২:</strong> শেষ (<strong>Ω</strong>) কখনো প্রথম তিনটি ঘরে (ঘর ১, ২ বা ৩) বসে না।</li>
                        <li><strong>সূত্র ৩:</strong> চেতনা (<strong>Ψ</strong>) আর ভারসাম্যের (<strong>Φ</strong>) ঠিক মাঝখানের ঘরে বসে পরিবর্তন (<strong>Δ</strong>)।</li>
                        <li><strong>সূত্র ৪:</strong> ভারসাম্য (<strong>Φ</strong>) কখনো ঘর ১-এ বসে না।</li>
                    </ul>
                </div>

                <div class="ch14-panel" id="ch14Panel">
                    <div class="ch14-hud">
                        <span id="ch14ModeBadge">MODE: SYNCING</span>
                        <span id="ch14AttemptsBadge">ATTEMPTS: 6</span>
                    </div>

                    <div class="ch14-slots" id="ch14Slots"></div>
                    <div class="ch14-keypad" id="ch14Keypad"></div>

                    <div class="ch14-actions">
                        <button type="button" class="ch14-act-btn" id="ch14BackBtn">⌫ মুছো</button>
                        <button type="button" class="ch14-act-btn primary" id="ch14SubmitBtn">⚡ VERIFY CODE</button>
                        <button type="button" class="ch14-act-btn scan-btn" id="ch14ScanBtn" style="display:none;">⚡ THEA SCAN (1)</button>
                        <button type="button" class="ch14-act-btn" id="ch14ResetBtn" style="display:none; border-color:#ff2a55; color:#ff7b93;">↻ REBOOT TERMINAL</button>
                    </div>

                    <div class="ch14-diag-box" id="ch14DiagBox"></div>
                    <div class="ch14-history" id="ch14History"></div>

                    <div class="ch14-legend">
                        <span><strong style="color:#00f5d4;">■ নীল</strong> = সঠিক ঘর</span>
                        <span><strong style="color:#ffbe0b;">■ হলুদ</strong> = ভুল ঘর</span>
                        <span><strong style="color:#7c8ca6;">■ ধূসর</strong> = কোডে নেই</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="section" id="hiddenSec14" style="display:none; border-color:#00f5d4;">
            <div class="heading">
                <span>02 / CORE GATE BREACHED</span>
                <span class="amber">CIPHER UNLOCKED</span>
            </div>
            <div class="story-text">
                <p>চতুর্থ চিহ্ন <strong>Ω</strong> লক হওয়ার সাথে সাথেই স্বর্ণালি প্রাচীর বিকট শব্দে দুভাগ হয়ে গেল। আদি সমীকরণের ভেতর থেকে প্রথমবার বেরিয়ে এল একটি পরিচিত কণ্ঠস্বর—যা অরির নিজের কণ্ঠস্বরের চেয়েও পুরোনো।</p>
            </div>
            <div class="dialogue-box" style="border-left-color:#00f5d4;">
                <span class="speaker-tag" style="color:#00f5d4;">ORI // MEMORY SYNCHRONIZED</span>
                "থিয়া... এটা কোনো যন্ত্রের কোড নয়। এই চারটি চিহ্ন—চেতনা, পরিবর্তন, ভারসাম্য আর শেষ—আমার নিজেরই প্রথম থিসিসের সমীকরণ! কিন্তু মহাবিশ্বের কেন্দ্রে আমার সমীকরণ কে বসাল?"
            </div>
            <div class="ch14-bonus-log" id="ch14BreachBonus">
                <strong style="color:#ff2a55; font-family:'Orbitron',monospace; font-size:11px;">[ CLASSIFIED ORIGIN LOG // PATH B BREACH BONUS ]</strong><br><br>
                প্যারাডক্স-ভাইরাসের ফাঁক দিয়ে একটি মুছে ফেলা ফাইল উদ্ধার হয়েছে: <em>"SUBJECT-00 (ARKA) ২২ নভেম্বরের ঘটনার ৩ বছর আগেই প্রথমবার এই সমীকরণ লিখেছিল। অবজেক্ট জিরো কোনো বহিরাগত নয়—সে ছিল এই সমীকরণের প্রথম অসম্পূর্ণ সংস্করণ।"</em>
            </div>
        </section>
    </div>
    `;

    const SECRET_CODE = ['Ψ', 'Δ', 'Φ', 'Ω'];
    const GLYPHS = [
        { sym: 'Ω', name: 'শেষ' },
        { sym: 'Ψ', name: 'চেতনা' },
        { sym: 'Δ', name: 'পরিবর্তন' },
        { sym: 'Φ', name: 'ভারসাম্য' },
        { sym: 'Σ', name: 'সমষ্টি' },
        { sym: 'Λ', name: 'শূন্যতা' }
    ];

    let currentGuess = [];
    let attemptsLeft = 6;
    let scanUsed = false;
    let roundFailed = false;

    function playCh14Tone(freq, dur = 0.08, type = 'sine') {
        try {
            if (typeof audioEnabled !== 'undefined' && !audioEnabled) return;
            if (typeof initAudio === 'function') initAudio();
            if (typeof audioCtx === 'undefined' || !audioCtx) return;

            const now = audioCtx.currentTime;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, now);
            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + dur);
        } catch (e) {}
    }

    function getActivePath() {
        if (typeof gameState === 'undefined' || !gameState.ch13Choice) return null;
        return gameState.ch13Choice === 'protocol' ? 'protocol' : 'resonance';
    }

    function renderSlots() {
        const container = document.getElementById('ch14Slots');
        if (!container) return;
        container.innerHTML = '';
        for (let i = 0; i < 4; i++) {
            const sym = currentGuess[i] || '';
            const div = document.createElement('div');
            div.className = 'ch14-slot' + (sym ? ' filled' : '');
            div.innerHTML = `<span class="ch14-slot-num">${i + 1}</span><span>${sym || '·'}</span>`;
            container.appendChild(div);
        }
    }

    function renderKeypad() {
        const kp = document.getElementById('ch14Keypad');
        if (!kp) return;
        kp.innerHTML = '';
        const locked = gameState.ch14Solved || roundFailed;

        GLYPHS.forEach(g => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'ch14-key';
            btn.disabled = locked || currentGuess.includes(g.sym) || currentGuess.length >= 4;
            btn.innerHTML = `<span class="ch14-key-sym">${g.sym}</span><span class="ch14-key-lbl">${g.name}</span>`;
            btn.addEventListener('click', () => {
                if (currentGuess.length >= 4 || currentGuess.includes(g.sym) || locked) return;
                currentGuess.push(g.sym);
                playCh14Tone(440 + currentGuess.length * 55, 0.06, 'triangle');
                renderSlots();
                renderKeypad();
            });
            kp.appendChild(btn);
        });
    }

    function updateHUD() {
        const path = getActivePath();
        const modeEl = document.getElementById('ch14ModeBadge');
        const attEl = document.getElementById('ch14AttemptsBadge');
        const scanBtn = document.getElementById('ch14ScanBtn');
        const submitBtn = document.getElementById('ch14SubmitBtn');
        const backBtn = document.getElementById('ch14BackBtn');
        const resetBtn = document.getElementById('ch14ResetBtn');

        if (modeEl) modeEl.textContent = path === 'protocol' ? 'PATH B // HARDCORE' : 'PATH A // EMPATHY';
        if (attEl) attEl.textContent = gameState.ch14Solved ? 'STATUS: UNLOCKED' : `ATTEMPTS: ${attemptsLeft}`;

        if (scanBtn) {
            scanBtn.style.display = (path === 'resonance' && !gameState.ch14Solved) ? 'inline-block' : 'none';
            scanBtn.disabled = scanUsed || roundFailed;
            scanBtn.textContent = scanUsed ? '✓ SCAN USED' : '⚡ THEA SCAN (1)';
        }
        if (submitBtn) submitBtn.disabled = gameState.ch14Solved || roundFailed;
        if (backBtn) backBtn.disabled = gameState.ch14Solved || roundFailed;
        if (resetBtn) resetBtn.style.display = roundFailed ? 'inline-block' : 'none';
    }

    function resetRound() {
        const path = getActivePath();
        attemptsLeft = (path === 'protocol') ? 4 : 6;
        currentGuess = [];
        scanUsed = false;
        roundFailed = false;

        const hist = document.getElementById('ch14History');
        const diag = document.getElementById('ch14DiagBox');
        if (hist) hist.innerHTML = '';
        if (diag) { diag.style.display = 'none'; diag.innerHTML = ''; }

        renderSlots();
        renderKeypad();
        updateHUD();
    }

    function syncCh14PathUI() {
        const path = getActivePath();
        const gate = document.getElementById('ch14EntryGate');
        const main = document.getElementById('ch14MainContent');
        const intro = document.getElementById('ch14IntroStory');
        const dial = document.getElementById('ch14DialogueBox');
        const panel = document.getElementById('ch14Panel');
        const pathTag = document.getElementById('ch14PathTag');

        if (!gate || !main) return;

        if (!path) {
            gate.style.display = 'block';
            main.style.display = 'none';
            return;
        }

        gate.style.display = 'none';
        main.style.display = 'block';

        if (path === 'protocol') {
            if (panel) panel.classList.add('path-b');
            if (pathTag) pathTag.textContent = 'LOG: 014 // PATH B: LOGIC BREACH';
            if (intro) intro.innerHTML = `<p>থিয়ার প্যারাডক্স-ভাইরাস আদি সমীকরণের প্রথম ফায়ারওয়াল ভেঙে দিয়েছে, কিন্তু পাল্টা প্রতিরক্ষা হিসেবে সিস্টেম মাত্র <strong>৪টি সুযোগে</strong> কোর লক করে দিয়েছে।</p>`;
            if (dial) dial.innerHTML = `<span class="speaker-tag" style="color:#ff2a55;">THEA // BREACH ALERT</span>"সিস্টেম আমার স্ক্যানার ব্লক করে দিয়েছে, অরি! হাতে মাত্র ৪টি সুযোগ। নিচের ৪টি সূত্র ঠান্ডা মাথায় মিলিয়ে সঠিক ক্রম বসাও—জিততে পারলে এদের গোপন অরিজিন ফাইলটাও হাতে আসবে!"`;
        } else {
            if (panel) panel.classList.remove('path-b');
            if (pathTag) pathTag.textContent = 'LOG: 014 // PATH A: EMPATHY';
            if (intro) intro.innerHTML = `<p>অরির স্মৃতিগুলো অ্যাঙ্কর করে রাখায় আদি সমীকরণের চাপ কিছুটা কমেছে। মূল গেট খোলার জন্য হাতে আছে <strong>৬টি সুযোগ</strong> এবং থিয়ার জরুরি স্ক্যানার।</p>`;
            if (dial) dial.innerHTML = `<span class="speaker-tag" style="color:var(--amber);">THEA // RESONANCE LINK</span>"ভয় পেয়ো না অরি, আমি সংকেতের ৪টি সূত্র ডিকোড করেছি। নিচের যুক্তিগুলো মিলিয়ে ৪টি চিহ্ন সাজাও। আটকে গেলে একবার আমার <strong>THEA SCAN</strong> ব্যবহার করতে পারবে।"`;
        }

        if (gameState.ch14Solved) {
            applyCh14SolvedState();
        } else {
            resetRound();
        }
    }

    function applyCh14SolvedState() {
        currentGuess = [...SECRET_CODE];
        roundFailed = false;
        renderSlots();
        renderKeypad();
        updateHUD();

        const hidden = document.getElementById('hiddenSec14');
        const bonus = document.getElementById('ch14BreachBonus');
        const diag = document.getElementById('ch14DiagBox');

        if (diag) {
            diag.style.display = 'block';
            diag.style.borderColor = '#00f5d4';
            diag.innerHTML = `<strong style="color:#00f5d4;">✓ ৪টি ঘরই নিখুঁতভাবে মিলে গেছে: Ψ — Δ — Φ — Ω</strong>`;
        }
        if (hidden) hidden.style.display = 'block';
        if (bonus) {
            bonus.style.display = (getActivePath() === 'protocol') ? 'block' : 'none';
        }
    }

    function handleSubmit() {
        if (gameState.ch14Solved || roundFailed) return;
        if (currentGuess.length < 4) {
            if (typeof showToast === 'function') showToast("⚠️ আগে ৪টি ঘরেই চিহ্ন বসাও!");
            playCh14Tone(200, 0.1, 'sawtooth');
            return;
        }

        attemptsLeft--;
        const hist = document.getElementById('ch14History');
        const diag = document.getElementById('ch14DiagBox');

        const row = document.createElement('div');
        row.className = 'ch14-hist-row';

        let exactCount = 0;
        const reportLines = [];

        currentGuess.forEach((sym, i) => {
            const cell = document.createElement('div');
            cell.className = 'ch14-hist-cell';
            cell.textContent = sym;

            if (sym === SECRET_CODE[i]) {
                cell.classList.add('exact');
                exactCount++;
                reportLines.push(`<span style="color:#00f5d4;">• <strong>ঘর ${i + 1} (${sym}):</strong> একদম সঠিক!</span>`);
            } else if (SECRET_CODE.includes(sym)) {
                cell.classList.add('shifted');
                reportLines.push(`<span style="color:#ffbe0b;">• <strong>ঘর ${i + 1} (${sym}):</strong> চিহ্নটি কোডে আছে, কিন্তু এই ঘরে নয়।</span>`);
            } else {
                cell.classList.add('absent');
                reportLines.push(`<span style="color:#8fa3c2;">• <strong>ঘর ${i + 1} (${sym}):</strong> ভুয়া চিহ্ন, এটি কোডে নেই।</span>`);
            }
            row.appendChild(cell);
        });

        if (hist) hist.prepend(row);

        if (exactCount === 4) {
            gameState.ch14Solved = true;
            if (typeof saveState === 'function') saveState();
            applyCh14SolvedState();
            playCh14Tone(660, 0.14, 'sine');
            setTimeout(() => playCh14Tone(880, 0.24, 'sine'), 120);
            if (typeof triggerHapticPattern === 'function') triggerHapticPattern([100, 50, 200]);
            if (typeof showToast === 'function') showToast("⚡ আদি সংকেত ভেঙেছে! কোর গেট উন্মুক্ত!");
            const hidden = document.getElementById('hiddenSec14');
            if (hidden) hidden.scrollIntoView({ behavior: 'smooth' });
            return;
        }

        playCh14Tone(240, 0.12, 'sawtooth');
        if (typeof triggerHapticPattern === 'function') triggerHapticPattern([60, 40, 60]);

        if (attemptsLeft <= 0) {
            roundFailed = true;
            if (diag) {
                diag.style.display = 'block';
                diag.style.borderColor = '#ff2a55';
                diag.innerHTML = `<strong style="color:#ff2a55;">✖ সিস্টেম লকড (সুযোগ শেষ)!</strong><br>` +
                    reportLines.join('<br>') +
                    `<br><span style="color:#ffbe0b;">উপরের ৪টি সূত্র আবার পড়ে নিচের REBOOT TERMINAL বাটনে ট্যাপ করো।</span>`;
            }
        } else {
            if (diag) {
                diag.style.display = 'block';
                diag.style.borderColor = '#243b63';
                diag.innerHTML = `<strong>ডায়াগনস্টিক রিপোর্ট:</strong><br>` + reportLines.join('<br>');
            }
            currentGuess = [];
        }

        renderSlots();
        renderKeypad();
        updateHUD();
    }

    function initCh14() {
        const styleEl = document.createElement('style');
        styleEl.textContent = ch14CSS;
        document.head.appendChild(styleEl);

        const anchorEl = document.getElementById('chapter13') || document.getElementById('chapter12') || document.getElementById('chapter11');
        if (anchorEl) anchorEl.insertAdjacentHTML('afterend', ch14HTML);

        const openCh14 = () => {
            if (gameState.ch13Solved && gameState.ch13Choice && !gameState.unlockedCh14) {
                unlockMultiverseUI(14, true);
            }
            syncCh14PathUI();
            switchMultiverseChapter(14);
        };

        const switchers = document.querySelectorAll('.chapter-switcher');
        if (switchers.length >= 2) {
            const tBtn = document.createElement('button');
            tBtn.className = 'ch-btn locked-ch';
            tBtn.id = 'topBtn14';
            tBtn.textContent = '🔒 ' + chapterTitles[14];
            tBtn.onclick = openCh14;
            switchers[0].appendChild(tBtn);

            const bBtn = document.createElement('button');
            bBtn.className = 'ch-btn locked-ch';
            bBtn.id = 'botBtn14';
            bBtn.textContent = '🔒 ' + chapterTitles[14];
            bBtn.onclick = openCh14;
            switchers[1].appendChild(bBtn);
        }

        const hiddenSec13 = document.getElementById('hiddenSec13');
        if (hiddenSec13) {
            const launchBtn = document.createElement('button');
            launchBtn.type = 'button';
            launchBtn.className = 'reflex-btn';
            launchBtn.style.marginTop = '14px';
            launchBtn.textContent = '⚡ ENTER CHAPTER 14: আদি সংকেত ↗';
            launchBtn.addEventListener('click', () => {
                if (!gameState.ch13Choice) {
                    if (typeof showToast === 'function') showToast("⚠️ আগে উপরের Path A অথবা Path B বেছে নাও!");
                    return;
                }
                openCh14();
            });
            hiddenSec13.appendChild(launchBtn);
        }

        const gateA = document.getElementById('ch14GateBtnA');
        const gateB = document.getElementById('ch14GateBtnB');
        if (gateA) gateA.addEventListener('click', () => {
            gameState.ch13Choice = 'resonance';
            if (typeof saveState === 'function') saveState();
            syncCh14PathUI();
        });
        if (gateB) gateB.addEventListener('click', () => {
            gameState.ch13Choice = 'protocol';
            if (typeof saveState === 'function') saveState();
            syncCh14PathUI();
        });

        const backBtn = document.getElementById('ch14BackBtn');
        const submitBtn = document.getElementById('ch14SubmitBtn');
        const scanBtn = document.getElementById('ch14ScanBtn');
        const resetBtn = document.getElementById('ch14ResetBtn');

        if (backBtn) backBtn.addEventListener('click', () => {
            if (currentGuess.length === 0 || gameState.ch14Solved || roundFailed) return;
            currentGuess.pop();
            playCh14Tone(300, 0.05, 'triangle');
            renderSlots();
            renderKeypad();
        });

        if (submitBtn) submitBtn.addEventListener('click', handleSubmit);

        if (scanBtn) scanBtn.addEventListener('click', () => {
            if (scanUsed || gameState.ch14Solved || roundFailed) return;
            scanUsed = true;
            playCh14Tone(740, 0.14, 'sine');
            const diag = document.getElementById('ch14DiagBox');
            if (diag) {
                diag.style.display = 'block';
                diag.style.borderColor = '#ffbe0b';
                diag.innerHTML = `<strong style="color:#ffbe0b;">⚡ THEA SCAN COMPLETE:</strong><br>
                নিশ্চিত ক্লু পাওয়া গেছে—<strong>ঘর ১-এ বসবে চেতনা (Ψ)</strong> এবং <strong>ঘর ৪-এ বসবে শেষ (Ω)</strong>। এবার মাঝখানের ২টি ঘর সূত্র মিলিয়ে বসাও!`;
            }
            updateHUD();
        });

        if (resetBtn) resetBtn.addEventListener('click', () => {
            playCh14Tone(400, 0.08, 'sine');
            resetRound();
        });

        document.addEventListener('input', (e) => {
            if (e.target && e.target.value && e.target.value.trim().toLowerCase() === 'arka99') {
                unlockMultiverseUI(14, true);
            }
        });

        if (gameState.unlockedCh14 || (gameState.ch13Solved && gameState.ch13Choice)) {
            unlockMultiverseUI(14, false);
        }

        syncCh14PathUI();
    }

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', initCh14);
    } else {
        initCh14();
    }
})();

// ==================== [SLOT 3] CHAPTER 15 (ভবিষ্যতে এই লাইনের নিচে পেস্ট করবে) ====================
// ==================== [SLOT 3] CHAPTER 15: শূন্য সমতা (ZERO EQUILIBRIUM) ====================
(function () {
    if (typeof chapterTitles !== 'undefined') {
        chapterTitles[15] = "CH 15: শূন্য সমতা";
    }

    const ch15CSS = `
        .ch15-gate-box {
            background: #060d1c;
            border: 1px solid #ffbe0b;
            border-radius: 10px;
            padding: 16px;
            margin: 14px 0;
            text-align: center;
        }
        .ch15-gate-btns {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 12px;
        }
        .ch15-gate-btn {
            background: #0b1428;
            border: 1px solid #3c5a99;
            color: #e2efff;
            padding: 12px;
            border-radius: 8px;
            text-align: left;
            cursor: pointer;
            font-size: 13px;
            line-height: 1.5;
        }
        .ch15-gate-btn:hover { border-color: #00f5d4; }
        .ch15-panel {
            background: #040914;
            border: 1px solid #00f5d4;
            border-radius: 10px;
            padding: 14px;
            margin: 14px 0;
            box-shadow: inset 0 0 24px rgba(0, 245, 212, 0.1);
        }
        .ch15-panel.path-b {
            border-color: #ff2a55;
            box-shadow: inset 0 0 24px rgba(255, 42, 85, 0.12);
        }
        .ch15-hud {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'Orbitron', monospace;
            font-size: 10px;
            color: #7ee8fa;
            margin-bottom: 10px;
            letter-spacing: 0.6px;
        }
        .ch15-target-bar {
            background: rgba(6, 20, 38, 0.95);
            border: 1px solid #1f4268;
            border-radius: 8px;
            padding: 9px 11px;
            margin-bottom: 12px;
            text-align: left;
        }
        .ch15-target-text {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            color: #d9f7ff;
            margin-bottom: 6px;
            gap: 8px;
            flex-wrap: wrap;
        }


// ==================== UI UPGRADE: COLLAPSIBLE CHAPTER DRAWER ====================
(function () {
    const drawerCSS = `
        .ch-drawer-toggle {
            width: 100%;
            background: rgba(6, 16, 30, 0.92);
            border: 1px solid #00f5d4;
            color: #00f5d4;
            padding: 11px 14px;
            border-radius: 8px;
            font-family: 'Orbitron', monospace;
            font-size: 11px;
            letter-spacing: 0.8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            margin: 12px 0 8px;
            box-shadow: 0 0 12px rgba(0, 245, 212, 0.14);
            transition: background 0.2s;
        }
        .ch-drawer-toggle:active {
            background: rgba(0, 245, 212, 0.15);
        }
        .ch-drawer-label {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-right: 10px;
        }
        .chapter-switcher.ch-collapsed {
            display: none !important;
        }
        .chapter-switcher.ch-expanded {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
            max-height: 260px;
            overflow-y: auto;
            padding: 10px;
            background: rgba(4, 9, 18, 0.96);
            border: 1px solid #1e355e;
            border-radius: 8px;
            margin-bottom: 14px;
        }
        .chapter-switcher.ch-expanded .ch-btn {
            width: 100% !important;
            margin: 0 !important;
            font-size: 10.5px !important;
            padding: 9px 6px !important;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    `;

    function getActiveChapterText() {
        const cur = (typeof gameState !== 'undefined' && gameState.currentCh) ? gameState.currentCh : 1;
        const title = (typeof chapterTitles !== 'undefined' && chapterTitles[cur]) ? chapterTitles[cur] : ('CH ' + cur);
        return `☰ CHAPTERS // ${title}`;
    }

    function updateAllDrawerLabels() {
        const text = getActiveChapterText();
        document.querySelectorAll('.ch-drawer-label').forEach(el => {
            el.textContent = text;
        });
    }

    function setupChapterDrawers() {
        const styleEl = document.createElement('style');
        styleEl.textContent = drawerCSS;
        document.head.appendChild(styleEl);

        const switchers = document.querySelectorAll('.chapter-switcher');
        switchers.forEach(sw => {
            if (sw.dataset.drawerReady) return;
            sw.dataset.drawerReady = 'true';

            const toggleBtn = document.createElement('button');
            toggleBtn.type = 'button';
            toggleBtn.className = 'ch-drawer-toggle';
            toggleBtn.innerHTML = `<span class="ch-drawer-label">${getActiveChapterText()}</span><span class="ch-drawer-arrow">▼</span>`;

            sw.classList.add('ch-collapsed');
            sw.insertAdjacentElement('beforebegin', toggleBtn);

            toggleBtn.addEventListener('click', () => {
                const isOpen = sw.classList.contains('ch-expanded');
                if (isOpen) {
                    sw.classList.remove('ch-expanded');
                    sw.classList.add('ch-collapsed');
                    toggleBtn.querySelector('.ch-drawer-arrow').textContent = '▼';
                } else {
                    sw.classList.remove('ch-collapsed');
                    sw.classList.add('ch-expanded');
                    toggleBtn.querySelector('.ch-drawer-arrow').textContent = '▲';
                }
            });

            sw.addEventListener('click', (e) => {
                const btn = e.target.closest('.ch-btn');
                if (!btn || btn.classList.contains('locked-ch')) return;
                setTimeout(() => {
                    sw.classList.remove('ch-expanded');
                    sw.classList.add('ch-collapsed');
                    toggleBtn.querySelector('.ch-drawer-arrow').textContent = '▼';
                    updateAllDrawerLabels();
                }, 60);
            });
        });

        // কোনো চ্যাপ্টার বাটন (যেমন লঞ্চ বাটন) দিয়ে চ্যাপ্টার বদলালেও লেবেল আপডেট হবে
        document.addEventListener('click', () => {
            setTimeout(updateAllDrawerLabels, 120);
        });
    }

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', () => setTimeout(setupChapterDrawers, 150));
    } else {
        setTimeout(setupChapterDrawers, 150);
    }
})();
