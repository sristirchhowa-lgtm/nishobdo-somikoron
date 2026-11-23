// ==================== CHAPTER 15: শূন্য সমতা (ZERO EQUILIBRIUM) ====================
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
            gap: 6px;
            flex-wrap: wrap;
        }
        .ch15-target-bar {
            background: #081326;
            border: 1px solid #1e3a5f;
            border-radius: 8px;
            padding: 9px 10px;
            margin-bottom: 12px;
        }
        .ch15-target-text {
            display: flex;
            justify-content: space-between;
            font-size: 11.5px;
            color: #d6ecff;
            margin-bottom: 6px;
        }
        .ch15-prog-track {
            width: 100%;
            height: 7px;
            background: #10203a;
            border-radius: 99px;
            overflow: hidden;
        }
        .ch15-prog-fill {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #00f5d4, #00c896);
            transition: width 0.25s ease;
        }
        .ch15-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 9px;
            max-width: 265px;
            margin: 0 auto 12px;
        }
        .ch15-cell {
            aspect-ratio: 1 / 1;
            border-radius: 10px;
            border: 1.5px solid #ff2a55;
            background: rgba(255, 42, 85, 0.14);
            color: #ff7b93;
            cursor: pointer;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: transform 0.12s, background 0.2s, border-color 0.2s, box-shadow 0.2s;
            user-select: none;
        }
        .ch15-cell:active { transform: scale(0.94); }
        .ch15-cell.stable {
            border-color: #00f5d4;
            background: rgba(0, 245, 212, 0.18);
            color: #00f5d4;
            box-shadow: 0 0 12px rgba(0, 245, 212, 0.28);
        }
        .ch15-cell.hint-glow {
            outline: 2.5px solid #ffbe0b;
            box-shadow: 0 0 18px rgba(255, 190, 11, 0.75);
        }
        .ch15-cell-num {
            position: absolute;
            top: 4px;
            left: 6px;
            font-family: 'Orbitron', monospace;
            font-size: 9px;
            opacity: 0.8;
        }
        .ch15-cell-sym {
            font-size: 20px;
            font-weight: bold;
            line-height: 1;
        }
        .ch15-cell-state {
            font-size: 9px;
            margin-top: 3px;
            opacity: 0.9;
        }
        .ch15-actions {
            display: flex;
            gap: 8px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }
        .ch15-btn {
            background: #10203a;
            border: 1px solid #3c659c;
            color: #d8ecff;
            padding: 8px 12px;
            border-radius: 6px;
            font-family: 'Orbitron', monospace;
            font-size: 10px;
            cursor: pointer;
        }
        .ch15-btn.hint {
            background: rgba(255, 190, 11, 0.14);
            border-color: #ffbe0b;
            color: #ffbe0b;
        }
        .ch15-btn.danger {
            border-color: #ff2a55;
            color: #ff7b93;
        }
        .ch15-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .ch15-status {
            background: #070e1d;
            border: 1px solid #243b63;
            border-radius: 8px;
            padding: 9px 10px;
            font-size: 12px;
            line-height: 1.55;
            color: #cfe4ff;
            text-align: center;
        }
        .ch15-bonus-log {
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

    const ch15HTML = `
    <div id="chapter15" class="chapter-view">
        <section class="section">
            <div class="heading">
                <span>ACT II FINALE // 05</span>
                <span class="red" id="ch15PathTag">LOG: 015 // ZERO EQUILIBRIUM</span>
            </div>

            <div id="ch15EntryGate" class="ch15-gate-box" style="display:none;">
                <div style="font-family:'Orbitron',monospace; font-size:11px; color:#ffbe0b; margin-bottom:6px;">
                    [ TIMELINE BRANCH NOT DETECTED ]
                </div>
                <p style="font-size:13px; color:#cfe4ff; margin:0;">
                    অধ্যায় ১৫-এর কোর ম্যাট্রিক্সে ঢোকার আগে তোমার সিদ্ধান্ত লক করো:
                </p>
                <div class="ch15-gate-btns">
                    <button type="button" class="ch15-gate-btn" id="ch15GateBtnA">
                        <strong style="color:#00f5d4; font-family:'Orbitron',monospace; font-size:11px;">[ PATH A: EMPATHY OVERRIDE ]</strong><br>
                        আনলিমিটেড চাল + থিয়ার <strong>THEA PULSE</strong> (নির্ভুল হিন্ট)।
                    </button>
                    <button type="button" class="ch15-gate-btn" id="ch15GateBtnB">
                        <strong style="color:#ff2a55; font-family:'Orbitron',monospace; font-size:11px;">[ PATH B: LOGIC BREACH ]</strong><br>
                        কঠিন মুভ-লিমিট মোড (ধাপ ১: ৪ চাল, ধাপ ২: ৬ চাল) + গোপন Act III টিজার।
                    </button>
                </div>
            </div>

            <div id="ch15MainContent" style="display:none;">
                <div class="story-text" id="ch15IntroStory"></div>
                <div class="dialogue-box thea-speak" id="ch15DialogueBox"></div>

                <div class="ch15-panel" id="ch15Panel">
                    <div class="ch15-hud">
                        <span id="ch15ModeBadge">PATH A // EMPATHY</span>
                        <span id="ch15StageBadge">ধাপ ১/২: CALIBRATION</span>
                        <span id="ch15MovesBadge">MOVES: 0</span>
                    </div>

                    <div class="ch15-target-bar">
                        <div class="ch15-target-text">
                            <strong>লক্ষ্য: ৯/৯ ঘর সবুজ/নীল করো</strong>
                            <span id="ch15CountLabel">এখন: ০/৯</span>
                        </div>
                        <div class="ch15-prog-track">
                            <div class="ch15-prog-fill" id="ch15ProgFill"></div>
                        </div>
                    </div>

                    <div class="ch15-grid" id="ch15Grid"></div>

                    <div class="ch15-actions">
                        <button type="button" class="ch15-btn hint" id="ch15HintBtn" style="display:none;">⚡ THEA PULSE (HINT)</button>
                        <button type="button" class="ch15-btn danger" id="ch15ResetBtn">↻ RESET STAGE</button>
                    </div>

                    <div class="ch15-status" id="ch15Status">
                        নিয়ম: যেকোনো ১টি ঘরে ট্যাপ করলে সেটি এবং তার ওপর, নিচ, ডান ও বামের ঘরগুলোর রঙ উল্টে যাবে।
                    </div>
                </div>
            </div>
        </section>

        <section class="section" id="hiddenSec15" style="display:none; border-color:#00f5d4;">
            <div class="heading">
                <span>ACT II COMPLETE // SINGULARITY STABILIZED</span>
                <span class="amber">ZERO EQUILIBRIUM</span>
            </div>
            <div class="story-text">
                <p>নবম কোরটি সবুজ হয়ে স্থির হওয়ার সাথে সাথেই চারপাশের লাল অস্থিরতা মিলিয়ে গেল। আদি সমীকরণের ভেতর থেকে ভেসে উঠল এক নিঃশব্দ আলোকরেখা—যেন পুরো মহাবিশ্ব এক মুহূর্তের জন্য শ্বাস থামিয়ে দিয়েছে।</p>
                <p>কোরের ঠিক কেন্দ্রে ভেসে থাকা হলোগ্রামে এবার আর কোনো সংকেত নেই—সেখানে লেখা শুধু একটি তারিখ এবং একটি নাম: <strong>২২ নভেম্বর // অবজেক্ট জিরো জাগ্রত।</strong></p>
            </div>
            <div class="dialogue-box" style="border-left-color:#00f5d4;">
                <span class="speaker-tag" style="color:#00f5d4;">THEA // ACT II FINALE</span>
                "আমরা শূন্য সমতায় পৌঁছেছি, অরি। কিন্তু এটা শেষ নয়—আদি সমীকরণের আসল দরজা মাত্র খুলল। এর ওপারে যা আছে, তা মানুষের কোনো যুক্তি দিয়ে ব্যাখ্যা করা যাবে না।"
            </div>
            <div class="ch15-bonus-log" id="ch15BreachBonus">
                <strong style="color:#ff2a55; font-family:'Orbitron',monospace; font-size:11px;">[ CLASSIFIED ACT III TEASER // PATH B BREACH BONUS ]</strong><br><br>
                ডিক্রিপ্টেড সিগন্যাল: <em>"ম্যাট্রিক্স স্থিতিশীল হয়েছে, কিন্তু প্রতি-মহাবিশ্বের কক্ষপথে দ্বিতীয় একটি থিয়ার অস্তিত্ব ধরা পড়েছে। অধ্যায় ১৬-এ দুটি বাস্তবতা একে অপরের মুখোমুখি হবে।"</em>
            </div>
        </section>
    </div>
    `;

    // 3x3 Lights-Out bitmasks (bit i = cell i; 1 = stable/green, 0 = unstable/red; target = 511)
    const TOGGLE_MASKS = Array.from({ length: 9 }, (_, idx) => {
        const r = Math.floor(idx / 3), c = idx % 3;
        let m = 1 << idx;
        if (r > 0) m |= 1 << (idx - 3);
        if (r < 2) m |= 1 << (idx + 3);
        if (c > 0) m |= 1 << (idx - 1);
        if (c < 2) m |= 1 << (idx + 1);
        return m;
    });

    function buildStartMask(solutionCells) {
        let mask = 511;
        solutionCells.forEach(i => { mask ^= TOGGLE_MASKS[i]; });
        return mask;
    }

    const STAGES = [
        {
            title: 'ধাপ ১/২: CALIBRATION',
            startMask: buildStartMask([1, 7]),       // 1-indexed: 2, 8
            limitB: 4
        },
        {
            title: 'ধাপ ২/২: CORE EQUILIBRIUM',
            startMask: buildStartMask([0, 2, 4, 7]), // 1-indexed: 1, 3, 5, 8
            limitB: 6
        }
    ];

    let stageIdx = 0;
    let boardMask = STAGES[0].startMask;
    let movesUsed = 0;
    let hintCell = -1;
    let stageLocked = false;

    function playCh15Tone(freq, dur = 0.08, type = 'sine') {
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

    function countStable(mask) {
        let n = 0;
        for (let i = 0; i < 9; i++) {
            if (mask & (1 << i)) n++;
        }
        return n;
    }

    function findOptimalCells(mask) {
        const need = mask ^ 511;
        if (need === 0) return [];
        for (let press = 1; press < 512; press++) {
            let eff = 0;
            for (let i = 0; i < 9; i++) {
                if (press & (1 << i)) eff ^= TOGGLE_MASKS[i];
            }
            if (eff === need) {
                const res = [];
                for (let i = 0; i < 9; i++) {
                    if (press & (1 << i)) res.push(i);
                }
                return res;
            }
        }
        return [];
    }

    function loadStage(idx) {
        stageIdx = idx;
        boardMask = STAGES[idx].startMask;
        movesUsed = 0;
        hintCell = -1;
        stageLocked = false;
        renderCh15Board();
    }

    function renderCh15Board() {
        const grid = document.getElementById('ch15Grid');
        const modeEl = document.getElementById('ch15ModeBadge');
        const stageEl = document.getElementById('ch15StageBadge');
        const movesEl = document.getElementById('ch15MovesBadge');
        const countEl = document.getElementById('ch15CountLabel');
        const fillEl = document.getElementById('ch15ProgFill');
        const hintBtn = document.getElementById('ch15HintBtn');

        if (!grid) return;

        const path = getActivePath();
        const isHard = path === 'protocol';
        const stable = countStable(boardMask);
        const solved = typeof gameState !== 'undefined' && gameState.ch15Solved;

        if (modeEl) modeEl.textContent = isHard ? 'PATH B // HARDCORE' : 'PATH A // EMPATHY';
        if (stageEl) stageEl.textContent = solved ? 'ALL STAGES SYNCED' : STAGES[stageIdx].title;
        if (movesEl) {
            if (solved) {
                movesEl.textContent = 'STATUS: EQUILIBRIUM';
            } else if (isHard) {
                const left = Math.max(0, STAGES[stageIdx].limitB - movesUsed);
                movesEl.textContent = `MOVES LEFT: ${left}`;
            } else {
                movesEl.textContent = `MOVES: ${movesUsed}`;
            }
        }
        if (countEl) countEl.textContent = `এখন: ${stable}/৯`;
        if (fillEl) fillEl.style.width = `${Math.round((stable / 9) * 100)}%`;

        if (hintBtn) {
            hintBtn.style.display = (!isHard && !solved) ? 'inline-block' : 'none';
            hintBtn.disabled = stageLocked || solved;
        }

        grid.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const isOn = Boolean(boardMask & (1 << i));
            const cell = document.createElement('button');
            cell.type = 'button';
            cell.className = 'ch15-cell' + (isOn ? ' stable' : '') + (hintCell === i ? ' hint-glow' : '');
            cell.innerHTML = `
                <span class="ch15-cell-num">${i + 1}</span>
                <span class="ch15-cell-sym">${isOn ? '◈' : '✕'}</span>
                <span class="ch15-cell-state">${isOn ? 'স্থির' : 'অস্থির'}</span>
            `;
            cell.addEventListener('click', () => handleCellTap(i));
            grid.appendChild(cell);
        }
    }

    function applyCh15SolvedState() {
        boardMask = 511;
        stageIdx = 1;
        hintCell = -1;
        stageLocked = true;
        renderCh15Board();

        const statusEl = document.getElementById('ch15Status');
        const hidden = document.getElementById('hiddenSec15');
        const bonus = document.getElementById('ch15BreachBonus');

        if (statusEl) {
            statusEl.style.borderColor = '#00f5d4';
            statusEl.innerHTML = `<strong style="color:#00f5d4;">✓ শূন্য সমতা অর্জিত! ৯/৯ কোর স্থিতিশীল।</strong>`;
        }
        if (hidden) hidden.style.display = 'block';
        if (bonus) {
            bonus.style.display = (getActivePath() === 'protocol') ? 'block' : 'none';
        }
    }

    function handleCellTap(i) {
        if (stageLocked || (typeof gameState !== 'undefined' && gameState.ch15Solved)) return;

        const path = getActivePath();
        const isHard = path === 'protocol';

        boardMask ^= TOGGLE_MASKS[i];
        movesUsed++;
        hintCell = -1;

        playCh15Tone(380 + countStable(boardMask) * 40, 0.07, 'triangle');
        renderCh15Board();

        const statusEl = document.getElementById('ch15Status');

        if (boardMask === 511) {
            stageLocked = true;
            if (stageIdx === 0) {
                playCh15Tone(640, 0.14, 'sine');
                if (statusEl) {
                    statusEl.style.borderColor = '#00f5d4';
                    statusEl.innerHTML = `<strong style="color:#00f5d4;">✓ ধাপ ১ সম্পন্ন! ধাপ ২ (Core Equilibrium) লোড হচ্ছে...</strong>`;
                }
                if (typeof showToast === 'function') showToast("⚡ ধাপ ১ সম্পন্ন! এবার ধাপ ২!");
                setTimeout(() => {
                    if (statusEl) {
                        statusEl.style.borderColor = '#243b63';
                        statusEl.textContent = 'ধাপ ২ চালু হয়েছে: আবার ৯টি ঘরকে একসাথে সবুজ/নীল করো।';
                    }
                    loadStage(1);
                }, 900);
            } else {
                if (typeof gameState !== 'undefined') {
                    gameState.ch15Solved = true;
                    if (typeof saveState === 'function') saveState();
                }
                applyCh15SolvedState();
                playCh15Tone(660, 0.14, 'sine');
                setTimeout(() => playCh15Tone(880, 0.26, 'sine'), 120);
                if (typeof triggerHapticPattern === 'function') triggerHapticPattern([100, 60, 220]);
                if (typeof showToast === 'function') showToast("⚡ শূন্য সমতা অর্জিত! Act II সমাপ্ত!");
                const hidden = document.getElementById('hiddenSec15');
                if (hidden) hidden.scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }

        if (isHard && movesUsed >= STAGES[stageIdx].limitB) {
            stageLocked = true;
            playCh15Tone(200, 0.16, 'sawtooth');
            if (typeof triggerHapticPattern === 'function') triggerHapticPattern([70, 40, 70]);
            if (statusEl) {
                statusEl.style.borderColor = '#ff2a55';
                statusEl.innerHTML = `<strong style="color:#ff2a55;">✖ মুভ লিমিট শেষ!</strong> নিচের <strong>RESET STAGE</strong> বাটনে ট্যাপ করে আবার চেষ্টা করো।`;
            }
        }
    }

    function syncCh15PathUI() {
        const path = getActivePath();
        const gate = document.getElementById('ch15EntryGate');
        const main = document.getElementById('ch15MainContent');
        const intro = document.getElementById('ch15IntroStory');
        const dial = document.getElementById('ch15DialogueBox');
        const panel = document.getElementById('ch15Panel');
        const tag = document.getElementById('ch15PathTag');

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
            if (tag) tag.textContent = 'LOG: 015 // PATH B: HARDCORE MATRIX';
            if (intro) intro.innerHTML = `<p>আদি সমীকরণের শেষ প্রাচীর ভেঙে ভেতরে ঢুকতেই ৯টি কোয়ান্টাম কোর প্রবল চাপে অস্থির হয়ে উঠেছে। প্যারাডক্স-ভাইরাসের কারণে প্রতি ধাপে তোমার হাতে <strong>সীমিত চাল</strong>।</p>`;
            if (dial) dial.innerHTML = `<span class="speaker-tag" style="color:#ff2a55;">THEA // CRITICAL OVERLOAD</span>"সাবধান অরি! একটা ঘরে ট্যাপ করলে তার চারপাশের কোরগুলোর অবস্থাও উল্টে যাবে। সীমিত চালের মধ্যে দুটি ধাপেই ৯/৯ ঘর স্থিতিশীল করো!"`;
        } else {
            if (panel) panel.classList.remove('path-b');
            if (tag) tag.textContent = 'LOG: 015 // PATH A: EMPATHY MATRIX';
            if (intro) intro.innerHTML = `<p>স্বর্ণালি প্রাচীর পেরিয়ে অরি ও থিয়া এখন আদি সমীকরণের মূল কেন্দ্রে। সামনে ৯টি সংযুক্ত কোয়ান্টাম কোর—সবগুলোকে একসাথে স্থিতিশীল করলেই খুলবে Act II-এর চূড়ান্ত সত্য।</p>`;
            if (dial) dial.innerHTML = `<span class="speaker-tag" style="color:var(--amber);">THEA // RESONANCE LINK</span>"প্রতিটি কোর তার পাশের কোরগুলোর সাথে যুক্ত। দুটি ধাপে ৯/৯ ঘর নীল করতে হবে। আটকে গেলে আমার <strong>THEA PULSE</strong> ব্যবহার কোরো।"`;
        }

        if (typeof gameState !== 'undefined' && gameState.ch15Solved) {
            applyCh15SolvedState();
        } else {
            loadStage(0);
        }
    }

    function initCh15() {
        const styleEl = document.createElement('style');
        styleEl.textContent = ch15CSS;
        document.head.appendChild(styleEl);

        const anchorEl = document.getElementById('chapter14') || document.getElementById('chapter13') || document.getElementById('chapter12');
        if (anchorEl) anchorEl.insertAdjacentHTML('afterend', ch15HTML);

        const openCh15 = () => {
            if (typeof gameState !== 'undefined' && gameState.ch14Solved && !gameState.unlockedCh15) {
                if (typeof unlockMultiverseUI === 'function') unlockMultiverseUI(15, true);
            }
            syncCh15PathUI();
            if (typeof switchMultiverseChapter === 'function') switchMultiverseChapter(15);
        };

        const switchers = document.querySelectorAll('.chapter-switcher');
        if (switchers.length >= 2) {
            const tBtn = document.createElement('button');
            tBtn.className = 'ch-btn locked-ch';
            tBtn.id = 'topBtn15';
            tBtn.textContent = '🔒 ' + chapterTitles[15];
            tBtn.onclick = openCh15;
            switchers[0].appendChild(tBtn);

            const bBtn = document.createElement('button');
            bBtn.className = 'ch-btn locked-ch';
            bBtn.id = 'botBtn15';
            bBtn.textContent = '🔒 ' + chapterTitles[15];
            bBtn.onclick = openCh15;
            switchers[1].appendChild(bBtn);
        }

        const hiddenSec14 = document.getElementById('hiddenSec14');
        if (hiddenSec14 && !document.getElementById('launchCh15Btn')) {
            const launchBtn = document.createElement('button');
            launchBtn.id = 'launchCh15Btn';
            launchBtn.type = 'button';
            launchBtn.className = 'reflex-btn';
            launchBtn.style.marginTop = '14px';
            launchBtn.textContent = '⚡ ENTER CHAPTER 15: শূন্য সমতা ↗';
            launchBtn.addEventListener('click', openCh15);
            hiddenSec14.appendChild(launchBtn);
        }

        const gateA = document.getElementById('ch15GateBtnA');
        const gateB = document.getElementById('ch15GateBtnB');
        if (gateA) gateA.addEventListener('click', () => {
            if (typeof gameState !== 'undefined') {
                gameState.ch13Choice = 'resonance';
                if (typeof saveState === 'function') saveState();
            }
            syncCh15PathUI();
        });
        if (gateB) gateB.addEventListener('click', () => {
            if (typeof gameState !== 'undefined') {
                gameState.ch13Choice = 'protocol';
                if (typeof saveState === 'function') saveState();
            }
            syncCh15PathUI();
        });

        const hintBtn = document.getElementById('ch15HintBtn');
        const resetBtn = document.getElementById('ch15ResetBtn');
        const statusEl = document.getElementById('ch15Status');

        if (hintBtn) hintBtn.addEventListener('click', () => {
            if (stageLocked || (typeof gameState !== 'undefined' && gameState.ch15Solved)) return;
            const optimal = findOptimalCells(boardMask);
            if (optimal.length > 0) {
                hintCell = optimal[0];
                playCh15Tone(740, 0.12, 'sine');
                if (statusEl) {
                    statusEl.style.borderColor = '#ffbe0b';
                    statusEl.innerHTML = `<strong style="color:#ffbe0b;">⚡ THEA PULSE:</strong> এখন <strong>ঘর ${hintCell + 1}</strong>-এ ট্যাপ করো (সমাধান হতে বাকি মাত্র ${optimal.length} চাল)।`;
                }
                renderCh15Board();
            }
        });

        if (resetBtn) resetBtn.addEventListener('click', () => {
            if (typeof gameState !== 'undefined' && gameState.ch15Solved) return;
            playCh15Tone(320, 0.08, 'sine');
            if (statusEl) {
                statusEl.style.borderColor = '#243b63';
                statusEl.textContent = 'বোর্ড রিসেট হয়েছে। ৯/৯ ঘর সবুজ/নীল করো।';
            }
            loadStage(stageIdx);
        });

        document.addEventListener('input', (e) => {
            if (e.target && e.target.value && e.target.value.trim().toLowerCase() === 'arka99') {
                if (typeof unlockMultiverseUI === 'function') unlockMultiverseUI(15, true);
            }
        });

        if (typeof gameState !== 'undefined' && (gameState.unlockedCh15 || gameState.ch14Solved)) {
            if (typeof unlockMultiverseUI === 'function') unlockMultiverseUI(15, false);
        }

        syncCh15PathUI();
    }

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', () => setTimeout(initCh15, 80));
    } else {
        setTimeout(initCh15, 80);
    }
})();
