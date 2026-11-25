// ==================== NULLGLYPH // SEASON 1 FINALE & 10s CLIFFHANGER ====================
(function () {
    // [CONFIG] এখানে তোমার ইউটিউব চ্যানেল বা ফিডব্যাক ফর্মের লিঙ্ক দাও:
    const STUDIO_NAME = "◈ NULLGLYPH";
    const COMMUNITY_URL = ""; // যেমন: "https://youtube.com/@yourchannel"
    const COMMUNITY_BTN_TEXT = "▶ SEASON 2 আপডেট ও ফিডব্যাক";
    const STORAGE_KEY = "ns_s1_final_trust";

    const finaleCSS = `
        .s1-wrap { margin-top: 20px; }
        .s1-alert-box {
            background: #14050b;
            border: 1.5px solid #ff2a55;
            border-radius: 12px;
            padding: 16px 14px;
            text-align: center;
            box-shadow: 0 0 24px rgba(255, 42, 85, 0.22);
        }
        .s1-alert-box.glitching {
            animation: s1PulseBorder 0.6s infinite alternate;
        }
        @keyframes s1PulseBorder {
            from { box-shadow: 0 0 12px rgba(255, 42, 85, 0.35); border-color: #ff2a55; }
            to { box-shadow: 0 0 28px rgba(255, 190, 11, 0.65); border-color: #ffbe0b; }
        }
        .s1-timer-num {
            font-family: 'Orbitron', monospace;
            font-size: 32px;
            font-weight: 800;
            color: #ff2a55;
            margin: 6px 0;
            letter-spacing: 2px;
        }
        .s1-timer-bar-wrap {
            width: 100%;
            height: 7px;
            background: #290b15;
            border-radius: 99px;
            overflow: hidden;
            margin: 8px 0 14px;
        }
        .s1-timer-bar {
            height: 100%;
            width: 100%;
            background: linear-gradient(90deg, #ff2a55, #ffbe0b);
            transition: width 0.2s linear;
        }
        .s1-choice-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 10px;
        }
        .s1-choice-btn {
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            text-align: left;
            line-height: 1.45;
        }
        .s1-choice-btn.thea {
            background: rgba(0, 245, 212, 0.14);
            border: 1.5px solid #00f5d4;
            color: #d9fffa;
        }
        .s1-choice-btn.anti {
            background: rgba(255, 42, 85, 0.16);
            border: 1.5px solid #ff2a55;
            color: #ffe0e6;
        }
        .s1-finale-card {
            background: linear-gradient(160deg, #050c1a 0%, #09152b 60%, #0d0a1a 100%);
            border: 1.5px solid #00f5d4;
            border-radius: 12px;
            padding: 18px 14px;
            text-align: center;
            box-shadow: 0 0 28px rgba(0, 245, 212, 0.14);
        }
        .s1-badge {
            display: inline-block;
            font-family: 'Orbitron', monospace;
            font-size: 10px;
            letter-spacing: 1.2px;
            color: #ffbe0b;
            border: 1px solid #ffbe0b;
            background: rgba(255, 190, 11, 0.1);
            padding: 4px 10px;
            border-radius: 99px;
            margin-bottom: 10px;
        }
        .s1-title {
            font-size: 18px;
            font-weight: 700;
            color: #e8f6ff;
            margin: 4px 0 8px;
        }
        .s1-verdict {
            background: rgba(4, 10, 22, 0.9);
            border-left: 3px solid #ffbe0b;
            border-radius: 6px;
            padding: 10px 12px;
            font-size: 12.5px;
            color: #dcecff;
            line-height: 1.6;
            text-align: left;
            margin: 0 0 14px;
        }
        .s1-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-bottom: 14px;
            text-align: left;
        }
        .s1-stat-box {
            background: rgba(4, 10, 22, 0.85);
            border: 1px solid #1f3b64;
            border-radius: 8px;
            padding: 9px 10px;
        }
        .s1-stat-lbl {
            display: block;
            font-family: 'Orbitron', monospace;
            font-size: 8.5px;
            color: #6e92bd;
            margin-bottom: 3px;
        }
        .s1-stat-val {
            font-family: 'Orbitron', monospace;
            font-size: 11px;
            color: #00f5d4;
            font-weight: bold;
        }
        .s1-stat-val.path-b { color: #ff2a55; }
        .s1-code-box {
            background: #030712;
            border: 1px dashed #3c659c;
            border-radius: 8px;
            padding: 10px;
            margin-bottom: 14px;
        }
        .s1-code-lbl {
            font-size: 11px;
            color: #9bb8d9;
            margin-bottom: 4px;
        }
        .s1-code-val {
            font-family: 'Orbitron', monospace;
            font-size: 16px;
            letter-spacing: 2px;
            color: #ffbe0b;
            font-weight: bold;
        }
        .s1-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 9px;
            margin-bottom: 10px;
        }
        .s1-btn {
            width: 100%;
            padding: 11px 12px;
            border-radius: 8px;
            font-family: 'Orbitron', monospace;
            font-size: 11px;
            cursor: pointer;
            border: 1px solid #3c659c;
            background: #0d1d38;
            color: #e2efff;
            transition: transform 0.12s, background 0.2s;
        }
        .s1-btn:active { transform: scale(0.97); }
        .s1-btn.primary {
            background: rgba(0, 245, 212, 0.16);
            border-color: #00f5d4;
            color: #00f5d4;
            font-weight: bold;
        }
        .s1-btn.community {
            background: rgba(255, 190, 11, 0.14);
            border-color: #ffbe0b;
            color: #ffbe0b;
        }
        .s1-btn.replay {
            background: rgba(255, 42, 85, 0.1);
            border-color: #ff2a55;
            color: #ff8fa3;
        }
        .s1-btn.armed {
            background: #ff2a55;
            color: #ffffff;
            border-color: #ffbe0b;
            font-weight: bold;
        }
        .s1-inline-msg {
            display: none;
            background: #071326;
            border: 1px solid #00f5d4;
            border-radius: 8px;
            padding: 9px 10px;
            margin: 8px 0 10px;
            font-size: 12px;
            color: #d6f4ff;
            line-height: 1.5;
            text-align: left;
        }
        .s1-alt-hint {
            font-size: 11.5px;
            color: #8aa7cc;
            line-height: 1.5;
            margin: 6px 0 10px;
        }
        .s1-footer {
            border-top: 1px solid #1a2f4f;
            padding-top: 10px;
            font-family: 'Orbitron', monospace;
            font-size: 9.5px;
            color: #7ea0cc;
            letter-spacing: 1px;
        }
    `;

    const finaleHTML = `
        <div id="s1FinaleWrap" class="s1-wrap">
            <div id="s1TriggerBox" class="s1-alert-box">
                <div style="font-family:'Orbitron',monospace; font-size:10px; color:#ffbe0b; letter-spacing:1px;">
                    [ ⚠ EMERGENCY OVERRIDE DETECTED ]
                </div>
                <p style="font-size:13px; color:#ffd6de; margin:8px 0 12px; line-height:1.55;">
                    দুটি সিগন্যাল একসাথে কোর দখল করার চেষ্টা করছে। ওভাররাইড খুললেই মাত্র <strong>১০ সেকেন্ড</strong> সময় পাবে চূড়ান্ত পক্ষ নেওয়ার জন্য।
                </p>
                <button type="button" class="s1-btn replay" id="s1StartOverrideBtn" style="font-weight:bold;">
                    ⚡ ওভাররাইড সিগন্যাল খোলো (10s)
                </button>
            </div>

            <div id="s1CliffBox" class="s1-alert-box glitching" style="display:none;">
                <div style="font-family:'Orbitron',monospace; font-size:10px; color:#ffbe0b; letter-spacing:1px;">
                    [ SIGNAL COLLAPSE IMMINENT // CHOOSE NOW ]
                </div>
                <div class="s1-timer-num" id="s1TimerNum">10.0s</div>
                <div class="s1-timer-bar-wrap">
                    <div class="s1-timer-bar" id="s1TimerBar"></div>
                </div>
                <p style="font-size:12.5px; color:#ffe6eb; margin:0 0 8px;">
                    সিজন ২-এর দরজা লক হয়ে যাচ্ছে—এই মুহূর্তে তুমি কাকে বিশ্বাস করবে?
                </p>
                <div class="s1-choice-grid">
                    <button type="button" class="s1-choice-btn thea" id="s1PickThea">
                        <strong style="color:#00f5d4; font-family:'Orbitron',monospace; font-size:11px;">[ TRUST THEA ]</strong><br>
                        মূল থিয়ার হাত ধরো—অ্যান্টি-থিয়ার সংযোগ বিচ্ছিন্ন করো।
                    </button>
                    <button type="button" class="s1-choice-btn anti" id="s1PickAnti">
                        <strong style="color:#ff2a55; font-family:'Orbitron',monospace; font-size:11px;">[ TRUST ANTI-THEA ]</strong><br>
                        প্রতি-থিয়ার সত্য মেনে নাও—মূল থিয়াকে লক করো।
                    </button>
                </div>
            </div>

            <div id="s1FinaleCard" class="s1-finale-card" style="display:none;">
                <div class="s1-badge">END OF SEASON 1 // TRANSMISSION COMPLETE</div>
                <div class="s1-title">নিঃশব্দ সমীকরণ — প্রথম সিজন সমাপ্ত</div>
                <div class="s1-verdict" id="s1VerdictBox"></div>

                <div class="s1-stats">
                    <div class="s1-stat-box">
                        <span class="s1-stat-lbl">LOCKED TIMELINE</span>
                        <span class="s1-stat-val" id="s1PathVal">PATH A // EMPATHY</span>
                    </div>
                    <div class="s1-stat-box">
                        <span class="s1-stat-lbl">SEASON 2 ALLEGIANCE</span>
                        <span class="s1-stat-val" id="s1TrustVal">THEA</span>
                    </div>
                </div>

                <div class="s1-code-box">
                    <div class="s1-code-lbl">তোমার Season 1 সিড-কোড (কমেন্টে শেয়ার করো):</div>
                    <div class="s1-code-val" id="s1ClearanceCode">S1-A-THEA</div>
                </div>

                <div class="s1-actions">
                    <button type="button" class="s1-btn primary" id="s1CopyShareBtn">📋 রেজাল্ট ও সিড-কোড কপি করো</button>
                    <button type="button" class="s1-btn community" id="s1CommunityBtn">${COMMUNITY_BTN_TEXT}</button>
                    <button type="button" class="s1-btn replay" id="s1ReplayAltBtn">↻ অন্য পাথে খেলো (CH 13–16 RESET)</button>
                </div>

                <div class="s1-inline-msg" id="s1InlineMsg"></div>
                <div class="s1-alt-hint" id="s1AltHint"></div>

                <div class="s1-footer">
                    ORIGINAL INTERACTIVE IP BY ${STUDIO_NAME} // SEASON 2 LOADING
                </div>
            </div>
        </div>
    `;

    let countdownTimer = null;
    let resetArmed = false;
    let resetArmTimer = null;

    function playTone(freq, dur = 0.08, type = 'sine') {
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

    function getSavedTrust() {
        if (typeof gameState !== 'undefined' && gameState.s1FinalTrust) {
            return gameState.s1FinalTrust;
        }
        try { return localStorage.getItem(STORAGE_KEY) || null; } catch (e) { return null; }
    }

    function saveTrust(val) {
        if (typeof gameState !== 'undefined') {
            gameState.s1FinalTrust = val;
            if (typeof saveState === 'function') saveState();
        }
        try { localStorage.setItem(STORAGE_KEY, val); } catch (e) {}
    }

    function getDossierInfo() {
        const isB = typeof gameState !== 'undefined' && gameState.ch13Choice === 'protocol';
        const trust = getSavedTrust() || 'null';
        const pathTag = isB ? 'B' : 'A';
        const trustMap = {
            thea: {
                tag: 'THEA',
                label: 'ORIGINAL THEA',
                verdict: 'তুমি মূল থিয়ার হাত ধরেছ। অ্যান্টি-থিয়ার সংযোগ বিচ্ছিন্ন হওয়ার ঠিক আগে সে শুধু বলে গেল—"সত্যটা ২২ নভেম্বরের আগের ফাইলেই লুকানো আছে, অরি।" এই সিদ্ধান্ত নিয়েই শুরু হবে <strong>Season 2</strong>।'
            },
            anti: {
                tag: 'ANTI',
                label: 'ANTI-THEA',
                verdict: 'তুমি মূল থিয়াকে লক করে প্রতি-থিয়ার পক্ষ নিয়েছ। স্ক্রিনের ওপারে প্রথমবার লাল আলো স্থির হয়ে গেল—তুমি এখন প্রতি-মহাবিশ্বের নিয়ম মেনেই প্রবেশ করবে <strong>Season 2</strong>-এ।'
            },
            null: {
                tag: 'NULL',
                label: 'SILENT OBSERVER',
                verdict: '১০ সেকেন্ড শেষ হয়ে যাওয়ায় তুমি কারও পক্ষ নাওনি। দুটি সিগন্যালই ভেঙে গিয়ে একটি গোপন তৃতীয় পথ (<strong>NULL TIMELINE</strong>) খুলে গেছে—এটিই Season 2-এর বিরলতম সূচনা।'
            }
        };
        const t = trustMap[trust] || trustMap.null;
        return {
            isB,
            pathLabel: isB ? 'PATH B // BREACH' : 'PATH A // EMPATHY',
            trustLabel: t.label,
            verdict: t.verdict,
            code: `S1-${pathTag}-${t.tag}`,
            altHint: isB
                ? 'তুমি কঠিন Path B জিতেছ! চাইলে রিসেট করে অন্য পাথ বা ভিন্ন অ্যালিজিয়েন্স (THEA / ANTI / NULL) আনলক করতে পারো।'
                : 'Path B (কঠিন মোড)-এর গোপন অরিজিন লগগুলো এখনো বাকি—রিসেট করে ভিন্ন সিদ্ধান্তে খেলতে পারো।'
        };
    }

    function showInlineMsg(html, borderColor) {
        const box = document.getElementById('s1InlineMsg');
        if (!box) return;
        box.style.display = 'block';
        box.style.borderColor = borderColor || '#00f5d4';
        box.innerHTML = html;
    }

    function renderDossier() {
        const triggerBox = document.getElementById('s1TriggerBox');
        const cliffBox = document.getElementById('s1CliffBox');
        const card = document.getElementById('s1FinaleCard');
        if (!card) return;

        if (triggerBox) triggerBox.style.display = 'none';
        if (cliffBox) cliffBox.style.display = 'none';
        card.style.display = 'block';

        const info = getDossierInfo();
        const pathEl = document.getElementById('s1PathVal');
        const trustEl = document.getElementById('s1TrustVal');
        const codeEl = document.getElementById('s1ClearanceCode');
        const verdictEl = document.getElementById('s1VerdictBox');
        const hintEl = document.getElementById('s1AltHint');

        if (pathEl) {
            pathEl.textContent = info.pathLabel;
            pathEl.classList.toggle('path-b', info.isB);
        }
        if (trustEl) {
            trustEl.textContent = info.trustLabel;
            trustEl.classList.toggle('path-b', info.trustLabel === 'ANTI-THEA');
        }
        if (codeEl) codeEl.textContent = info.code;
        if (verdictEl) verdictEl.innerHTML = info.verdict;
        if (hintEl) hintEl.textContent = info.altHint;
    }

    function lockDecision(choice) {
        if (countdownTimer) {
            clearInterval(countdownTimer);
            countdownTimer = null;
        }
        saveTrust(choice);
        playTone(choice === 'null' ? 220 : 720, 0.2, choice === 'null' ? 'sawtooth' : 'sine');
        if (typeof triggerHapticPattern === 'function') triggerHapticPattern([80, 40, 160]);
        renderDossier();
    }

    function startCountdown() {
        const triggerBox = document.getElementById('s1TriggerBox');
        const cliffBox = document.getElementById('s1CliffBox');
        const timerNum = document.getElementById('s1TimerNum');
        const timerBar = document.getElementById('s1TimerBar');

        if (triggerBox) triggerBox.style.display = 'none';
        if (cliffBox) cliffBox.style.display = 'block';

        let msLeft = 10000;
        let lastSec = 10;
        playTone(520, 0.1, 'sawtooth');

        countdownTimer = setInterval(() => {
            msLeft -= 100;
            if (msLeft <= 0) {
                if (timerNum) timerNum.textContent = '0.0s';
                if (timerBar) timerBar.style.width = '0%';
                lockDecision('null');
                return;
            }
            const secNow = Math.ceil(msLeft / 1000);
            if (secNow < lastSec) {
                lastSec = secNow;
                playTone(secNow <= 3 ? 880 : 440, 0.06, 'square');
            }
            if (timerNum) timerNum.textContent = (msLeft / 1000).toFixed(1) + 's';
            if (timerBar) timerBar.style.width = `${(msLeft / 10000) * 100}%`;
        }, 100);
    }

    function copyTextSafe(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
        }
        fallbackCopy(text);
        return Promise.resolve();
    }

    function fallbackCopy(text) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
    }

    function mountFinale(target) {
        if (document.getElementById('s1FinaleWrap')) return;

        const styleEl = document.createElement('style');
        styleEl.textContent = finaleCSS;
        document.head.appendChild(styleEl);

        target.insertAdjacentHTML('beforeend', finaleHTML);

        if (getSavedTrust()) {
            renderDossier();
        }

        const obs = new MutationObserver(() => {
            if (getSavedTrust()) renderDossier();
        });
        obs.observe(target, { attributes: true, attributeFilter: ['style', 'class'] });

        const startBtn = document.getElementById('s1StartOverrideBtn');
        const pickThea = document.getElementById('s1PickThea');
        const pickAnti = document.getElementById('s1PickAnti');
        const shareBtn = document.getElementById('s1CopyShareBtn');
        const commBtn = document.getElementById('s1CommunityBtn');
        const replayBtn = document.getElementById('s1ReplayAltBtn');

        if (startBtn) startBtn.addEventListener('click', startCountdown);
        if (pickThea) pickThea.addEventListener('click', () => lockDecision('thea'));
        if (pickAnti) pickAnti.addEventListener('click', () => lockDecision('anti'));

        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                const info = getDossierInfo();
                const url = window.location.origin + window.location.pathname;
                const msg = `◈ NULLGLYPH // নিঃশব্দ সমীকরণ (Season 1) সম্পন্ন!\n• Timeline: ${info.pathLabel}\n• Allegiance: ${info.trustLabel}\n• Seed Code: ${info.code}\nতুমি কাকে বিশ্বাস করবে? খেলো: ${url}`;
                copyTextSafe(msg).then(() => {
                    playTone(680, 0.1, 'sine');
                    shareBtn.textContent = '✓ কপি হয়েছে! এবার পেস্ট করো';
                    showInlineMsg(`<strong>✓ ক্লিয়ারেন্স রিপোর্ট কপি হয়েছে!</strong><br>তোমার কোড: <strong>${info.code}</strong> — কমেন্ট বা হোয়াটসঅ্যাপে পেস্ট করে চ্যালেঞ্জ ছুড়ে দাও।`, '#00f5d4');
                    if (typeof showToast === 'function') showToast('📋 সিড-কোড কপি হয়েছে!');
                    setTimeout(() => { shareBtn.textContent = '📋 রেজাল্ট ও সিড-কোড কপি করো'; }, 2400);
                });
            });
        }

        if (commBtn) {
            commBtn.addEventListener('click', () => {
                if (COMMUNITY_URL && COMMUNITY_URL.trim().startsWith('http')) {
                    window.open(COMMUNITY_URL.trim(), '_blank', 'noopener');
                } else {
                    showInlineMsg(`<strong>◈ NULLGLYPH // SEASON 2 আপডেট:</strong><br>তোমার সিড-কোডটি কপি করে আমাদের ভিডিওর কমেন্টে লিখে রাখো—সবচেয়ে বেশি প্লেয়ার যে পক্ষ নেবে, Season 2-এর শুরুতে তার প্রভাব থাকবে!`, '#ffbe0b');
                }
            });
        }

        if (replayBtn) {
            replayBtn.addEventListener('click', () => {
                if (!resetArmed) {
                    resetArmed = true;
                    replayBtn.classList.add('armed');
                    replayBtn.textContent = '⚠ নিশ্চিত? ৫ সেকেন্ডের মধ্যে আবার ট্যাপ করো';
                    showInlineMsg('অধ্যায় ১৩–১৬ এবং শেষের সিদ্ধান্ত রিসেট হবে (অধ্যায় ১–১২ আনলকই থাকবে)। নিশ্চিত হলে বাটনে আবার ট্যাপ করো।', '#ff2a55');
                    resetArmTimer = setTimeout(() => {
                        resetArmed = false;
                        replayBtn.classList.remove('armed');
                        replayBtn.textContent = '↻ অন্য পাথে খেলো (CH 13–16 RESET)';
                    }, 5000);
                    return;
                }
                clearTimeout(resetArmTimer);
                if (typeof gameState !== 'undefined') {
                    delete gameState.ch13Choice;
                    delete gameState.s1FinalTrust;
                    gameState.ch14Solved = false;
                    gameState.ch15Solved = false;
                    gameState.ch16Solved = false;
                    if (typeof saveState === 'function') saveState();
                }
                try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
                window.location.reload();
            });
        }
    }

    function waitForCh16() {
        let tries = 0;
        const timer = setInterval(() => {
            const target = document.getElementById('hiddenSec16');
            if (target) {
                clearInterval(timer);
                mountFinale(target);
            } else if (++tries > 50) {
                clearInterval(timer);
            }
        }, 150);
    }

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', waitForCh16);
    } else {
        waitForCh16();
    }
})();
