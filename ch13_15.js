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


// ==================== [SLOT 3] CHAPTER 15 (ভবিষ্যতে এই লাইনের নিচে পেস্ট করবে) ====================
