// ==================== CHAPTER 12: CHRONO SHATTER (MODULAR PLUGIN) ====================
(function () {
    if (typeof chapterTitles !== 'undefined') {
        chapterTitles[12] = "CH 12: ক্রোনো শ্যাটার";
    }

    const ch12CSS = `
        .ch12-panel {
            background: #070108;
            border: 1px solid #9d4edd;
            border-radius: 10px;
            padding: 16px;
            margin: 16px 0;
            text-align: center;
            box-shadow: inset 0 0 28px rgba(157, 78, 221, 0.16);
        }
        .ch12-nodes {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 12px;
        }
        .ch12-node {
            padding: 5px 10px;
            border: 1px solid #ff2a55;
            border-radius: 4px;
            font-family: 'Orbitron', monospace;
            font-size: 10px;
            color: #ff2a55;
            background: rgba(255, 42, 85, 0.1);
            transition: 0.3s;
        }
        .ch12-node.shattered {
            border-color: #00f5d4;
            color: #00f5d4;
            background: rgba(0, 245, 212, 0.12);
            text-decoration: line-through;
        }
        #ch12Scope {
            width: 100%;
            height: 115px;
            background: #030005;
            border: 1px solid #3c1659;
            border-radius: 6px;
            display: block;
            margin-bottom: 14px;
        }
        .ch12-dial-wrap {
            position: relative;
            width: 156px;
            height: 156px;
            margin: 12px auto;
            touch-action: none;
            user-select: none;
        }
        .ch12-dial-ring {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 3px dashed #9d4edd;
            background: radial-gradient(circle, #180526 0%, #050008 75%);
            position: relative;
            cursor: grab;
            box-shadow: 0 0 20px rgba(157, 78, 221, 0.25);
        }
        .ch12-dial-ring.in-silence {
            border-color: #00f5d4;
            box-shadow: 0 0 26px rgba(0, 245, 212, 0.45);
        }
        .ch12-dial-hand {
            position: absolute;
            top: 12px;
            left: 50%;
            width: 4px;
            height: 62px;
            margin-left: -2px;
            background: linear-gradient(180deg, #00f5d4, #9d4edd);
            transform-origin: bottom center;
            border-radius: 3px;
            pointer-events: none;
        }
        .ch12-dial-core {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background: #0d0217;
            border: 2px solid #00f5d4;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Orbitron', monospace;
            font-size: 11px;
            color: #fff;
            pointer-events: none;
        }
        .ch12-btn-row {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 12px;
        }
        .ch12-step-btn {
            background: #170626;
            border: 1px solid #9d4edd;
            color: #e0c3fc;
            padding: 8px 14px;
            border-radius: 6px;
            font-family: 'Orbitron', monospace;
            font-size: 11px;
            cursor: pointer;
        }
        .ch12-step-btn:active {
            background: #9d4edd;
            color: #000;
        }
        .ch12-lock-bg {
            width: 100%;
            height: 6px;
            background: #1d082e;
            border-radius: 3px;
            overflow: hidden;
            margin-top: 14px;
        }
        .ch12-lock-fill {
            height: 100%;
            width: 0%;
            background: #00f5d4;
            transition: width 0.08s linear;
        }
        .ch12-telemetry {
            display: flex;
            justify-content: space-between;
            font-family: 'Orbitron', monospace;
            font-size: 10px;
            color: #d0a8f5;
            margin-top: 8px;
        }
    `;

    const ch12HTML = `
    <div id="chapter12" class="chapter-view">
        <section class="section">
            <div class="heading">
                <span>ACT II: সমান্তরাল পতন // 02</span>
                <span class="red">LOG: 012 // CHRONO SHATTER</span>
            </div>
            <div class="story-text">
                <p>মেমরি হাবের গোপন লগ ডিক্রিপ্ট হতেই চারপাশের রক্তিম আকাশে এক বিকট, তীক্ষ্ণ <strong>404.8 Hz</strong> কম্পন শুরু হলো। অবজেক্ট জিরোর কোনো শরীর নেই—সে নিজেকে সময়-তরঙ্গের ভেতর লুকিয়ে রেখেছে।</p>
            </div>
            <div class="dialogue-box thea-speak">
                <span class="speaker-tag" style="color:var(--amber)">THEA // ACOUSTIC ANALYSIS</span>
                "অরি, ওকে সরাসরি ধ্বংস করা যাবে না! ওর 404.8 Hz তরঙ্গের ঠিক বিপরীত দশায় (<strong>180° Anti-Phase</strong>) আমাদের তরঙ্গ বসাতে হবে। দুটো তরঙ্গ কাটাকাটি হয়ে যে মুহূর্তে <strong>পরম নিস্তব্ধতা</strong> নামবে, ওর ক্রোনো-অ্যাঙ্কর ভেঙে পড়বে!"
            </div>
            <div class="dialogue-box" style="border-left-color:#ff2a55; background:rgba(255,42,85,0.07);">
                <span class="speaker-tag" style="color:#ff2a55;">OBJECT ZERO // TIMELINE ECHO</span>
                "সময়ের কাঁটা উল্টো দিকে ঘোরানোর সাহস করো না! এই অ্যাঙ্কর ভাঙলে শুধু আমি নই—এই পুরো মহাবিশ্বের সমীকরণ শূন্য হয়ে যাবে!"
            </div>
        </section>

        <section class="section">
            <div class="heading">
                <span>02 / DESTRUCTIVE INTERFERENCE</span>
                <span class="amber" id="ch12StatusBadge">NODES: 0/3</span>
            </div>
            <div class="story-text">
                <p><strong>ক্রোনো-ডায়াল অপারেশন:</strong> নিচের ডায়ালটি আঙুল দিয়ে <strong>উল্টো দিকে (Counter-Clockwise)</strong> ঘোরাও অথবা নিচের বাটন ব্যবহার করো। ফেজ পার্থক্য <strong>180°</strong>-এ পৌঁছালে বিকট শব্দ থেমে সাদা রেখাটি সোজা হয়ে যাবে—সেই অবস্থায় ধরে রেখে ৩টি নোড ভাঙো।</p>
            </div>

            <div class="ch12-panel">
                <div class="ch12-nodes">
                    <span class="ch12-node" id="ch12Node1">NODE 01</span>
                    <span class="ch12-node" id="ch12Node2">NODE 02</span>
                    <span class="ch12-node" id="ch12Node3">NODE 03</span>
                </div>

                <canvas id="ch12Scope" width="460" height="115"></canvas>

                <div class="ch12-dial-wrap" id="ch12DialWrap">
                    <div class="ch12-dial-ring" id="ch12DialRing">
                        <div class="ch12-dial-hand" id="ch12DialHand"></div>
                        <div class="ch12-dial-core" id="ch12PhaseReadout">0°</div>
                    </div>
                </div>

                <div class="ch12-btn-row">
                    <button type="button" class="ch12-step-btn" id="ch12BtnCCW">⟲ -6°</button>
                    <button type="button" class="ch12-step-btn" id="ch12BtnAudio">🔊 404.8Hz: OFF</button>
                    <button type="button" class="ch12-step-btn" id="ch12BtnCW">+6° ⟳</button>
                </div>

                <div class="ch12-lock-bg">
                    <div class="ch12-lock-fill" id="ch12LockFill"></div>
                </div>
                <div class="ch12-telemetry">
                    <span id="ch12WaveState">SIGNAL: INTERFERENCE ACTIVE</span>
                    <span id="ch12LockPct">SILENCE LOCK: 0%</span>
                </div>
            </div>
        </section>

        <section class="section" id="hiddenSec12" style="display:none; border-color:#00f5d4;">
            <div class="heading">
                <span>03 / THE SILENCE AFTER COLLAPSE</span>
                <span class="amber">ANCHOR SHATTERED</span>
            </div>
            <div class="story-text">
                <p>তৃতীয় নোডটি ভাঙার সাথে সাথেই 404.8 Hz-এর বিকট গর্জন থেমে গিয়ে মহাবিশ্বে নেমে এল এক অদ্ভুত, গভীর নিস্তব্ধতা। অবজেক্ট জিরোর ছায়ামূর্তি হাজারটা আলোর কণায় ভেঙে হাওয়ায় মিলিয়ে যেতে শুরু করল।</p>
            </div>
            <div class="dialogue-box" style="border-left-color:#9d4edd; background:rgba(157,78,221,0.08);">
                <span class="speaker-tag" style="color:#d0a8f5;">OBJECT ZERO // FINAL TRANSMISSION</span>
                "তুমি জিতে গেছ... কিন্তু একটা কথা মনে রেখো, অরি। আমি ছিলাম কেবল প্রথম প্রতিচ্ছবি। সিঙ্গুলারিটির ওপারে যে 'আসল সমীকরণ' আমাদের দুজনকেই তৈরি করেছে—সে এখন জেগে উঠেছে..."
            </div>
            <div class="dialogue-box" style="border-left-color:#00f5d4; background:rgba(0,245,212,0.06);">
                <span class="speaker-tag" style="color:#00f5d4;">ORI // ACT II LOG UPDATED</span>
                "থিয়া, ও মিথ্যা বলেনি। অবজেক্ট জিরো ধ্বংস হওয়ার পর স্ক্যানারে একটা সম্পূর্ণ নতুন কোঅর্ডিনেট দেখা যাচ্ছে... যা কোনো পরিচিত মহাবিশ্বের নয়।"
            </div>
        </section>
    </div>
    `;

    // State variables (strictly isolated inside IIFE)
    let carrierAngle = 45;
    let dialAngle = 45;
    let nodesBroken = 0;
    let lockProgress = 0;
    let waveTime = 0;
    let isDragging = false;
    let humOsc = null;
    let humGain = null;
    let humActive = false;

    function normDeg(deg) {
        return ((deg % 360) + 360) % 360;
    }

    function getPhaseDiff() {
        return Math.round(normDeg(dialAngle - carrierAngle));
    }

    function startHum() {
        try {
            if (typeof audioEnabled !== 'undefined' && !audioEnabled) return;
            if (typeof initAudio === 'function') initAudio();
            if (typeof audioCtx === 'undefined' || !audioCtx) return;
            if (humOsc) return;

            humOsc = audioCtx.createOscillator();
            humGain = audioCtx.createGain();
            humOsc.type = 'sine';
            humOsc.frequency.setValueAtTime(404.8, audioCtx.currentTime);
            humGain.gain.setValueAtTime(0.03, audioCtx.currentTime);
            humOsc.connect(humGain);
            humGain.connect(audioCtx.destination);
            humOsc.start();
            humActive = true;

            const btn = document.getElementById('ch12BtnAudio');
            if (btn) btn.textContent = "🔊 404.8Hz: ON";
        } catch (e) {}
    }

    function stopHum() {
        try {
            if (humOsc) {
                humOsc.stop();
                humOsc.disconnect();
                humOsc = null;
            }
            if (humGain) {
                humGain.disconnect();
                humGain = null;
            }
            humActive = false;
            const btn = document.getElementById('ch12BtnAudio');
            if (btn) btn.textContent = "🔇 404.8Hz: OFF";
        } catch (e) {}
    }

    function applyCh12SolvedState() {
        nodesBroken = 3;
        lockProgress = 100;
        stopHum();
        for (let i = 1; i <= 3; i++) {
            const el = document.getElementById('ch12Node' + i);
            if (el) el.classList.add('shattered');
        }
        const badge = document.getElementById('ch12StatusBadge');
        const fill = document.getElementById('ch12LockFill');
        const pct = document.getElementById('ch12LockPct');
        const stateTxt = document.getElementById('ch12WaveState');
        const ring = document.getElementById('ch12DialRing');
        const hidden = document.getElementById('hiddenSec12');

        if (badge) badge.textContent = "● CHRONO SHATTERED";
        if (fill) fill.style.width = "100%";
        if (pct) pct.textContent = "SILENCE LOCK: 100%";
        if (stateTxt) stateTxt.textContent = "✓ TOTAL SILENCE ACHIEVED";
        if (ring) ring.classList.add('in-silence');
        if (hidden) hidden.style.display = "block";
    }

    function drawScope(diff, inSilence) {
        const canvas = document.getElementById('ch12Scope');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        const mid = h / 2;

        ctx.clearRect(0, 0, w, h);

        // Center grid line
        ctx.strokeStyle = "rgba(157, 78, 221, 0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, mid);
        ctx.lineTo(w, mid);
        ctx.stroke();

        const radCarrier = (carrierAngle * Math.PI) / 180;
        const radDial = (dialAngle * Math.PI) / 180;

        // 1. Object Zero Carrier Wave (Red)
        ctx.strokeStyle = "rgba(255, 42, 85, 0.55)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let x = 0; x < w; x += 3) {
            const y = mid + Math.sin(x * 0.045 + waveTime + radCarrier) * 24;
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();

        // 2. Ori Counter Wave (Cyan)
        ctx.strokeStyle = "rgba(0, 245, 212, 0.45)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let x = 0; x < w; x += 3) {
            const y = mid + Math.sin(x * 0.045 + waveTime + radDial) * 24;
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();

        // 3. Resultant Destructive Interference Wave (White / Cyan)
        ctx.strokeStyle = inSilence ? "#00f5d4" : "#ffffff";
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        for (let x = 0; x < w; x += 3) {
            const y1 = Math.sin(x * 0.045 + waveTime + radCarrier);
            const y2 = Math.sin(x * 0.045 + waveTime + radDial);
            const y = mid + (y1 + y2) * 20;
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    function updateDialUI(diff, inSilence) {
        const hand = document.getElementById('ch12DialHand');
        const readout = document.getElementById('ch12PhaseReadout');
        const ring = document.getElementById('ch12DialRing');
        if (hand) hand.style.transform = `rotate(${dialAngle}deg)`;
        if (readout) {
            readout.textContent = `${diff}°`;
            readout.style.color = inSilence ? "#00f5d4" : "#ff9eb0";
        }
        if (ring) {
            inSilence ? ring.classList.add('in-silence') : ring.classList.remove('in-silence');
        }
    }

    function initCh12() {
        // Inject CSS
        const styleEl = document.createElement('style');
        styleEl.textContent = ch12CSS;
        document.head.appendChild(styleEl);

        // Inject Chapter 12 HTML right after Chapter 11
        const anchorEl = document.getElementById('chapter11') || document.getElementById('chapter10');
        if (anchorEl) {
            anchorEl.insertAdjacentHTML('afterend', ch12HTML);
        }

        // Add CH 12 buttons to top and bottom switchers
        const switchers = document.querySelectorAll('.chapter-switcher');
        if (switchers.length >= 2) {
            const tBtn = document.createElement('button');
            tBtn.className = 'ch-btn locked-ch';
            tBtn.id = 'topBtn12';
            tBtn.textContent = '🔒 ' + chapterTitles[12];
            tBtn.onclick = () => switchMultiverseChapter(12);
            switchers[0].appendChild(tBtn);

            const bBtn = document.createElement('button');
            bBtn.className = 'ch-btn locked-ch';
            bBtn.id = 'botBtn12';
            bBtn.textContent = '🔒 ' + chapterTitles[12];
            bBtn.onclick = () => switchMultiverseChapter(12);
            switchers[1].appendChild(bBtn);
        }

        // Inject Launch Button inside Chapter 11's Final Bridge
        const ch11Bridge = document.getElementById('ch11FinalBridge') || document.getElementById('hiddenSec11');
        if (ch11Bridge) {
            const launchBtn = document.createElement('button');
            launchBtn.type = 'button';
            launchBtn.className = 'reflex-btn';
            launchBtn.style.marginTop = '12px';
            launchBtn.textContent = '⚡ ENTER CHAPTER 12: CHRONO SHATTER ↗';
            launchBtn.addEventListener('click', () => {
                if (gameState.ch11Solved) {
                    unlockMultiverseUI(12, true);
                    switchMultiverseChapter(12);
                }
            });
            ch11Bridge.appendChild(launchBtn);
        }

        // Strict Unlock Rule: Only unlock if Ch11 is solved OR 'arka99' is explicitly typed
        document.addEventListener('input', (e) => {
            if (e.target && e.target.value && e.target.value.trim().toLowerCase() === 'arka99') {
                unlockMultiverseUI(12, true);
            }
        });

        if (gameState.unlockedCh12 || gameState.ch11Solved) {
            unlockMultiverseUI(12, false);
        }
        if (gameState.ch12Solved) {
            applyCh12SolvedState();
        }

        // Dial Touch & Mouse Dragging
        const dialWrap = document.getElementById('ch12DialWrap');
        function setAngleFromPoint(clientX, clientY) {
            if (gameState.ch12Solved) return;
            const rect = dialWrap.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const rad = Math.atan2(clientY - cy, clientX - cx);
            dialAngle = normDeg((rad * 180) / Math.PI + 90);
        }

        if (dialWrap) {
            dialWrap.addEventListener('mousedown', (e) => { isDragging = true; startHum(); setAngleFromPoint(e.clientX, e.clientY); });
            window.addEventListener('mousemove', (e) => { if (isDragging) setAngleFromPoint(e.clientX, e.clientY); });
            window.addEventListener('mouseup', () => { isDragging = false; });

            dialWrap.addEventListener('touchstart', (e) => {
                isDragging = true;
                startHum();
                setAngleFromPoint(e.touches[0].clientX, e.touches[0].clientY);
            }, { passive: true });
            dialWrap.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
                setAngleFromPoint(e.touches[0].clientX, e.touches[0].clientY);
            }, { passive: false });
            window.addEventListener('touchend', () => { isDragging = false; });
        }

        // Precision Step Buttons
        const btnCCW = document.getElementById('ch12BtnCCW');
        const btnCW = document.getElementById('ch12BtnCW');
        const btnAudio = document.getElementById('ch12BtnAudio');

        if (btnCCW) btnCCW.addEventListener('click', () => {
            if (gameState.ch12Solved) return;
            startHum();
            dialAngle = normDeg(dialAngle - 6);
        });
        if (btnCW) btnCW.addEventListener('click', () => {
            if (gameState.ch12Solved) return;
            startHum();
            dialAngle = normDeg(dialAngle + 6);
        });
        if (btnAudio) btnAudio.addEventListener('click', () => {
            humActive ? stopHum() : startHum();
        });

        // Main Animation & Logic Loop (Only active when viewing Chapter 12)
        setInterval(() => {
            if (gameState.currentCh !== 12) {
                if (humActive) stopHum();
                return;
            }

            waveTime += 0.14;

            if (gameState.ch12Solved) {
                dialAngle = normDeg(carrierAngle + 180);
                drawScope(180, true);
                updateDialUI(180, true);
                return;
            }

            // Subtle clockwise drift from Object Zero (increases slightly per node)
            if (!isDragging) {
                carrierAngle = normDeg(carrierAngle + (0.28 + nodesBroken * 0.18));
            }

            const diff = getPhaseDiff();
            const distFrom180 = Math.abs(diff - 180);
            const inSilence = distFrom180 <= 11;

            // Update 404.8Hz volume smoothly (0 volume at 180° = Total Silence)
            if (humActive && humGain && typeof audioCtx !== 'undefined' && audioCtx) {
                const vol = inSilence ? 0.0005 : Math.min(0.06, (distFrom180 / 180) * 0.06);
                humGain.gain.setTargetAtTime(vol, audioCtx.currentTime, 0.05);
            }

            const fill = document.getElementById('ch12LockFill');
            const pctTxt = document.getElementById('ch12LockPct');
            const stateTxt = document.getElementById('ch12WaveState');

            if (inSilence) {
                lockProgress = Math.min(100, lockProgress + 2.8);
                if (stateTxt) stateTxt.textContent = "● ANTI-PHASE ALIGNED — HOLD SILENCE!";
            } else {
                lockProgress = Math.max(0, lockProgress - 1.4);
                if (stateTxt) stateTxt.textContent = "SIGNAL: 404.8 Hz INTERFERENCE";
            }

            if (fill) fill.style.width = Math.floor(lockProgress) + "%";
            if (pctTxt) pctTxt.textContent = `SILENCE LOCK: ${Math.floor(lockProgress)}%`;

            if (lockProgress >= 100) {
                nodesBroken++;
                lockProgress = 0;
                const nodeEl = document.getElementById('ch12Node' + nodesBroken);
                if (nodeEl) nodeEl.classList.add('shattered');
                const badge = document.getElementById('ch12StatusBadge');
                if (badge) badge.textContent = `NODES: ${nodesBroken}/3`;

                if (typeof playBeep === 'function') playBeep(true);
                if (typeof triggerHapticPattern === 'function') triggerHapticPattern([100, 50, 180]);

                if (nodesBroken >= 3) {
                    gameState.ch12Solved = true;
                    if (typeof saveState === 'function') saveState();
                    applyCh12SolvedState();
                    if (typeof showToast === 'function') showToast("⚡ ক্রোনো-অ্যাঙ্কর ধ্বংস হয়েছে! অধ্যায় ১২ সম্পন্ন!");
                    const hidden = document.getElementById('hiddenSec12');
                    if (hidden) hidden.scrollIntoView({ behavior: 'smooth' });
                } else {
                    carrierAngle = normDeg(carrierAngle + 115);
                    if (typeof showToast === 'function') showToast(`💥 NODE 0${nodesBroken} SHATTERED! পরের নোড লক করো!`);
                }
            }

            drawScope(diff, inSilence);
            updateDialUI(diff, inSilence);
        }, 50);
    }

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', initCh12);
    } else {
        initCh12();
    }
})();
