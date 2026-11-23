// ==================== CHAPTER 16: সমীকরণের ছায়া (THE SHADOW EQUATION) ====================
(function () {
    if (typeof chapterTitles !== 'undefined') {
        chapterTitles[16] = "CH 16: সমীকরণের ছায়া";
    }

    const ch16CSS = `
        .ch16-gate-box {
            background: #060d1c;
            border: 1px solid #ffbe0b;
            border-radius: 10px;
            padding: 16px;
            margin: 14px 0;
            text-align: center;
        }
        .ch16-gate-btns {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 12px;
        }
        .ch16-gate-btn {
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
        .ch16-gate-btn:hover { border-color: #00f5d4; }
        .ch16-rule-card {
            background: rgba(6, 16, 32, 0.92);
            border: 1px solid #1e3a5f;
            border-left: 3px solid #9b5de5;
            border-radius: 8px;
            padding: 12px 14px;
            margin: 12px 0;
            font-size: 13px;
            line-height: 1.7;
            color: #d6ecff;
        }
        .ch16-rule-card ul {
            margin: 8px 0 0 18px;
            padding: 0;
        }
        .ch16-rule-card li { margin-bottom: 4px; }
        .ch16-panel {
            background: #040914;
            border: 1px solid #00f5d4;
            border-radius: 10px;
            padding: 14px;
            margin: 14px 0;
            box-shadow: inset 0 0 24px rgba(0, 245, 212, 0.08);
        }
        .ch16-panel.path-b {
            border-color: #ff2a55;
            box-shadow: inset 0 0 24px rgba(255, 42, 85, 0.12);
        }
        .ch16-hud {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'Orbitron', monospace;
            font-size: 10px;
            color: #7ee8fa;
            margin-bottom: 10px;
            letter-spacing: 0.6px;
            flex-wrap: wrap;
            gap: 6px;
        }
        .ch16-progress-wrap {
            background: #081224;
            border: 1px solid #1b3154;
            border-radius: 8px;
            padding: 9px 10px;
            margin-bottom: 14px;
        }
        .ch16-progress-text {
            display: flex;
            justify-content: space-between;
            font-size: 11.5px;
            color: #cfe4ff;
            margin-bottom: 6px;
        }
        .ch16-progress-track {
            width: 100%;
            height: 7px;
            background: #10203a;
            border-radius: 99px;
            overflow: hidden;
        }
        .ch16-progress-fill {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #9b5de5, #00f5d4);
            transition: width 0.25s ease;
        }
        .ch16-dials {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            max-width: 300px;
            margin: 0 auto 14px;
        }
        .ch16-dial-btn {
            background: #091326;
            border: 1.5px solid #2b4a7a;
            border-radius: 12px;
            padding: 12px 8px;
            color: #e6f4ff;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
            transition: border-color 0.2s, transform 0.12s, box-shadow 0.2s;
        }
        .ch16-dial-btn:active { transform: scale(0.95); }
        .ch16-dial-btn.aligned {
            border-color: #00f5d4;
            background: rgba(0, 245, 212, 0.1);
            box-shadow: 0 0 14px rgba(0, 245, 212, 0.22);
        }
        .ch16-dial-btn.hinted {
            border-color: #ffbe0b;
            box-shadow: 0 0 16px rgba(255, 190, 11, 0.45);
        }
        .ch16-dial-btn:disabled {
            opacity: 0.65;
            cursor: not-allowed;
        }
        .ch16-ring {
            width: 54px;
            height: 54px;
            border-radius: 50%;
            border: 2px solid #2a4775;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            background: #050b17;
        }
        .ch16-dial-btn.aligned .ch16-ring {
            border-color: #00f5d4;
        }
        .ch16-arrow {
            font-size: 24px;
            line-height: 1;
            color: #ff5c8a;
            display: inline-block;
            transition: transform 0.22s ease, color 0.2s;
        }
        .ch16-dial-btn.aligned .ch16-arrow {
            color: #00f5d4;
        }
        .ch16-dial-title {
            font-family: 'Orbitron', monospace;
            font-size: 10.5px;
            color: #9dbce0;
        }
        .ch16-dial-deg {
            font-family: 'Orbitron', monospace;
            font-size: 11px;
            font-weight: bold;
            color: #ffbe0b;
        }
        .ch16-dial-btn.aligned .ch16-dial-deg {
            color: #00f5d4;
        }
        .ch16-actions {
            display: flex;
            gap: 8px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }
        .ch16-act-btn {
            background: #10203a;
            border: 1px solid #3c659c;
            color: #d8ecff;
            padding: 8px 12px;
            border-radius: 6px;
            font-family: 'Orbitron', monospace;
            font-size: 10px;
            cursor: pointer;
        }
        .ch16-act-btn.scan-btn {
            background: rgba(255, 190, 11, 0.14);
            border-color: #ffbe0b;
            color: #ffbe0b;
        }
        .ch16-act-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .ch16-status-box {
            background: #070e1d;
            border: 1px solid #243b63;
            border-radius: 8px;
            padding: 10px;
            margin-top: 8px;
            font-size: 12.5px;
            line-height: 1.6;
            color: #cfe4ff;
            text-align: center;
            display: none;
        }
        .ch16-bonus-log {
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

    const ch16HTML = `
    <div id="chapter16" class="chapter-view">
        <section class="section">
            <div class="heading">
                <span>ACT III: আদি সমীকরণ // 01</span>
                <span class="red" id="ch16PathTag">LOG: 016 // SHADOW EQUATION</span>
            </div>

            <div id="ch16EntryGate" class="ch16-gate-box" style="display:none;">
                <div style="font-family:'Orbitron',monospace; font-size:11px; color:#ffbe0b; margin-bottom:6px;">
                    [ TIMELINE BRANCH NOT DETECTED ]
                </div>
                <p style="font-size:13px; color:#cfe4ff; margin:0;">
                    অধ্যায় ১৬ শুরু করার আগে তোমার টাইমলাইন পাথ লক করো। একবার বেছে নিলে শুধু ওই পথটাই চালু থাকবে:
                </p>
                <div class="ch16-gate-btns">
                    <button type="button" class="ch16-gate-btn" id="ch16GateBtnA">
                        <strong style="color:#00f5d4; font-family:'Orbitron',monospace; font-size:11px;">[ PATH A: EMPATHY OVERRIDE ]</strong><br>
                        আনলিমিটেড চাল + থিয়ার <strong>PHASE SCAN</strong> হিন্ট সহায়তা।
                    </button>
                    <button type="button" class="ch16-gate-btn" id="ch16GateBtnB">
                        <strong style="color:#ff2a55; font-family:'Orbitron',monospace; font-size:11px;">[ PATH B: LOGIC BREACH ]</strong><br>
                        কঠিন মুভ-লিমিট মোড (ধাপ ১: ৪ চাল, ধাপ ২: ৬ চাল) + গোপন Act III ফাইল।
                    </button>
                </div>
            </div>

            <div id="ch16MainContent" style="display:none;">
                <div class="story-text" id="ch16
