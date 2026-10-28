(function() {
  // 1. 注入視覺化圖表與架構流程圖專用 CSS 樣式
  const styleEl = document.createElement("style");
  styleEl.textContent = `
    .diagram-card {
      background: linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.95) 100%);
      border: 1px solid #38bdf8;
      border-radius: 14px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      overflow-x: auto;
    }
    .diagram-card h3 {
      color: #38bdf8;
      font-size: 1.15rem;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px;
    }
    .diag-flow {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      flex-wrap: wrap;
      padding: 12px 0;
    }
    .diag-node {
      background: #0f172a;
      border: 1px solid #475569;
      border-top: 3px solid #38bdf8;
      border-radius: 10px;
      padding: 12px 16px;
      min-width: 135px;
      flex: 1;
      text-align: center;
    }
    .diag-node.warn { border-top-color: #f59e0b; }
    .diag-node.ok { border-top-color: #22c55e; }
    .diag-node.err { border-top-color: #ef4444; }
    .diag-node strong {
      display: block;
      color: #f8fafc;
      font-size: 0.92rem;
      margin-bottom: 4px;
    }
    .diag-node span {
      display: block;
      color: #94a3b8;
      font-size: 0.8rem;
      line-height: 1.45;
    }
    .diag-arrow {
      color: #38bdf8;
      font-size: 1.3rem;
      font-weight: bold;
      padding: 0 2px;
      user-select: none;
    }
    .diag-grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
      margin-top: 8px;
    }
    .diag-grid-3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-top: 8px;
    }
    .diag-box {
      background: rgba(15, 23, 42, 0.75);
      border: 1px solid #334155;
      border-radius: 10px;
      padding: 14px 16px;
    }
    .diag-box h4 {
      color: #f59e0b;
      font-size: 0.95rem;
      margin-bottom: 8px;
      border-bottom: 1px dashed #334155;
      padding-bottom: 6px;
    }
    .diag-layer {
      background: #1e293b;
      border: 1px solid #475569;
      border-radius: 6px;
      padding: 8px 12px;
      margin-bottom: 6px;
      font-size: 0.84rem;
      text-align: center;
      color: #e2e8f0;
    }
    .diag-layer.highlight {
      background: rgba(56, 189, 248, 0.18);
      border-color: #38bdf8;
      color: #7dd3fc;
      font-weight: 700;
    }
    .diag-layer.danger {
      background: rgba(239, 68, 68, 0.18);
      border-color: #ef4444;
      color: #fca5a5;
      font-weight: 700;
    }
    .diag-nest-outer {
      border: 2px dashed #38bdf8;
      border-radius: 12px;
      padding: 14px;
      background: rgba(56, 189, 248, 0.04);
    }
    .diag-nest-mid {
      border: 2px solid #22c55e;
      border-radius: 10px;
      padding: 12px;
      margin-top: 8px;
      background: rgba(34, 197, 94, 0.05);
    }
    .diag-nest-inner {
      border: 1px solid #f59e0b;
      border-radius: 8px;
      padding: 10px;
      margin-top: 8px;
      background: rgba(245, 158, 11, 0.08);
    }
    .svg-container {
      width: 100%;
      overflow-x: auto;
      display: flex;
      justify-content: center;
      margin: 8px 0;
    }
    .svg-container svg {
      max-width: 100%;
      height: auto;
      background: #0b1120;
      border-radius: 10px;
      border: 1px solid #334155;
    }
  `;
  document.head.appendChild(styleEl);

  // 2. 各小關卡專屬視覺化架構圖、流程圖與 SVG 曲線圖庫
  const LEVEL_DIAGRAMS = {
    "w1-1": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化流程圖：S-N-D-A 與完整 IoT 五環節閉迴路</span><span class="level-num">Week 1-1</span></h3>
        <div class="diag-flow">
          <div class="diag-node warn">
            <strong>實體世界 (Physical)</strong>
            <span>機器震動/溫度、車輛位置、居家門窗、環境溫濕度</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node">
            <strong>01 Device (感知 S)</strong>
            <span>Sensor 擷取物理狀態（買感測器僅完成此步！）</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node">
            <strong>02 Connectivity (傳輸 N)</strong>
            <span>網路交換資訊，將狀態帶進數位系統</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node">
            <strong>03 Compute (處理)</strong>
            <span>Edge / Cloud 資料處理與跨源整合</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node">
            <strong>04 Data (分析 D)</strong>
            <span>Data / AI 儲存、特徵分析與預測</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node ok">
            <strong>05 Application (行動 A)</strong>
            <span>支持決策與自動化閉迴路控制 (Action)</span>
          </div>
        </div>
      </div>
    `,
    "w1-2": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化架構圖：Edge（邊緣端）+ Cloud（雲端）協同分工模型</span><span class="level-num">Week 1-2</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>⚡ EDGE（靠近資料產生的第一線現場）</h4>
            <div class="diag-layer highlight">✔ 低延遲（毫秒級硬即時反應）</div>
            <div class="diag-layer highlight">✔ 即時反應（本地閉迴路控制與安全保護）</div>
            <div class="diag-layer highlight">✔ 斷線仍可運作（Offline Autonomy 離線自主）</div>
          </div>
          <div class="diag-box">
            <h4>☁️ CLOUD（遠端集中式超大規模資源池）</h4>
            <div class="diag-layer">✔ 大量裝置集中管理 + 快速擴充彈性</div>
            <div class="diag-layer">✔ 跨場域資料整合（不同地點、不同設備匯聚）</div>
            <div class="diag-layer">✔ 大規模儲存分析 + AI 模型訓練與服務化</div>
          </div>
        </div>
      </div>
    `,
    "w1-3": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化階梯圖：資料價值四階段 × 系統成熟度四階 × 智慧工廠預測維護</span><span class="level-num">Week 1-3</span></h3>
        <div class="diag-flow">
          <div class="diag-node">
            <strong>1. Monitoring / Visibility</strong>
            <span>「現在發生什麼？」<br>我知道機器正在運轉與當前讀數</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node">
            <strong>2. Analysis (成因分析)</strong>
            <span>「為什麼發生？」<br>交叉比對震動/溫度/電流診斷異常原因</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node warn">
            <strong>3. Prediction / Intelligence</strong>
            <span>「接下來會怎樣？」<br>AI 模型推論，精準預測可能故障時間</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node ok">
            <strong>4. Decision / Action</strong>
            <span>「應該做什麼？」<br>在故障發生前自動排程檢修（預測維護）</span>
          </div>
        </div>
      </div>
    `,
    "w2-1": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化圖解：傳統機房三層結構與「資源孤島 vs. 峰值容量陷阱」</span><span class="level-num">Week 2-1</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>🏢 傳統實體機房三層結構與資源孤島</h4>
            <div class="diag-layer"><strong>Apps 層：</strong>ERP / DB / Web（一機綁定一應用，無法跨機共享）</div>
            <div class="diag-layer"><strong>Compute 層：</strong>Physical Server / NIC 網卡 / Storage 儲存</div>
            <div class="diag-layer highlight"><strong>Facility 設施層：</strong>機櫃 / UPS 不斷電 / 冷卻空調 / 發電機</div>
          </div>
          <div class="diag-box">
            <h4>📉 峰值容量陷阱 (Over-provisioning)</h4>
            <div class="svg-container">
              <svg width="380" height="145" viewBox="0 0 380 145">
                <line x1="35" y1="120" x2="355" y2="120" stroke="#64748b" stroke-width="2"/>
                <line x1="35" y1="20" x2="35" y2="120" stroke="#64748b" stroke-width="2"/>
                <line x1="35" y1="35" x2="350" y2="35" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,4"/>
                <text x="42" y="28" fill="#ef4444" font-size="11" font-weight="bold">依促銷尖峰採購之固定硬體容量 (Over-provisioning)</text>
                <path d="M 35 105 Q 110 102, 160 104 T 230 36 T 275 104 L 350 105" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="2.5"/>
                <text x="55" y="75" fill="#f59e0b" font-size="11">⬅ 平時 90% 容量長期閒置浪費 ➡</text>
                <text x="210" y="136" fill="#94a3b8" font-size="11">短期促銷尖峰</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,
    "w2-2": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化架構圖：Hypervisor 抽象化與 Live Migration (Pre-copy) 動態遷移</span><span class="level-num">Week 2-2</span></h3>
        <div class="diag-flow">
          <div class="diag-node">
            <strong>原實體主機 Host A</strong>
            <span>VM 持續運行中，觸發硬體維護需求</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node warn">
            <strong>階段 1：Pre-copy 記憶體複製</strong>
            <span>在背景持續將 Memory Pages 複製至目標主機</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node ok">
            <strong>階段 2：極短暫停頓切換</strong>
            <span>同步最後差量狀態，平滑移轉至 Host B 繼續服務</span>
          </div>
        </div>
        <div class="diag-layer danger" style="margin-top:8px;">
          ⚠️ 地端虛擬化維運限制：底層 Physical 層的「SAN / NAS 儲存網路、實體交換器 (Switch)、光纖通道 (Fibre Channel, FC)」與硬體韌體相容性仍須企業自行維護！
        </div>
      </div>
    `,
    "w2-3": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化對照圖：NIST 五大雲端特徵 × Scale-up vs. Scale-out</span><span class="level-num">Week 2-3</span></h3>
        <div class="diag-flow">
          <div class="diag-node"><strong>1. 隨需自選</strong><span>On-demand<br>Console/API免工單</span></div>
          <div class="diag-node"><strong>2. 廣泛網路存取</strong><span>Broad Access<br>HTTP/REST 多端點</span></div>
          <div class="diag-node"><strong>3. 資源池化</strong><span>Resource Pool<br>多租戶動態指派</span></div>
          <div class="diag-node ok"><strong>4. 快速彈性</strong><span>Rapid Elasticity<br>Scale-up / Scale-out</span></div>
          <div class="diag-node warn"><strong>5. 計量付費</strong><span>Measured Service<br>Pay-as-you-go</span></div>
        </div>
        <div class="diag-grid-2" style="margin-top:10px;">
          <div class="diag-box">
            <h4>⬆️ 垂直擴充 (Scale-up)</h4>
            <div class="diag-layer">直接拉高「單一虛擬機」規格（如 2 vCPU/4GB ➔ 8 vCPU/16GB），受限單機物理上限</div>
          </div>
          <div class="diag-box">
            <h4>➡️ 水平擴充 (Scale-out)</h4>
            <div class="diag-layer highlight">由 Load Balancer 動態橫向增加「多台無狀態節點 (VM-1, VM-2, VM-3...)」</div>
          </div>
        </div>
      </div>
    `,
    "w2-4": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化流程圖：混合雲 Cloud Bursting 與 GitOps 期望狀態閉迴路</span><span class="level-num">Week 2-4</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>🌉 混合雲互聯與 Cloud Bursting</h4>
            <div class="diag-flow">
              <div class="diag-node"><strong>地端 On-Prem</strong><span>核心敏感資料留地端</span></div>
              <div class="diag-arrow">➔</div>
              <div class="diag-node warn"><strong>IPSec VPN / Direct Connect</strong><span>公網加密隧道 vs. 實體光纖專線</span></div>
              <div class="diag-arrow">➔</div>
              <div class="diag-node ok"><strong>公有雲 Burst</strong><span>尖峰流量算力外溢擴展</span></div>
            </div>
          </div>
          <div class="diag-box">
            <h4>🔄 GitOps 現代維運（把「改機器」轉成「改定義」）</h4>
            <div class="diag-flow">
              <div class="diag-node"><strong>Git 儲存庫</strong><span>唯一 Desired State 來源</span></div>
              <div class="diag-arrow">➔</div>
              <div class="diag-node"><strong>PR 審查 & CI/CD</strong><span>Terraform Plan / Apply</span></div>
              <div class="diag-arrow">➔</div>
              <div class="diag-node ok"><strong>Cloud 實際環境</strong><span>自動同步消除組態漂移</span></div>
            </div>
          </div>
        </div>
      </div>
    `,
    "w2-5": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化比較圖：IoT 時序寫入瓶頸 × SPI 三層模型管理責任邊界</span><span class="level-num">Week 2-5</span></h3>
        <div class="diag-grid-3">
          <div class="diag-box">
            <h4>🔧 IaaS（自建基礎設施）</h4>
            <div class="diag-layer danger">租戶自管：VM 上自建 EMQX/Mosquitto、自理叢集、LB 與 OS Patch</div>
            <div class="diag-layer">雲商負責：底層虛擬機與硬體</div>
          </div>
          <div class="diag-box">
            <h4>⚙️ PaaS（託管物聯網平台）</h4>
            <div class="diag-layer warn">租戶自管：規則路由配置與業務邏輯（依連線/訊息量計費）</div>
            <div class="diag-layer highlight">雲商負責：AWS IoT Core / Azure IoT Hub 底層叢集維運</div>
          </div>
          <div class="diag-box">
            <h4>🖥️ SaaS（完整垂直應用）</h4>
            <div class="diag-layer">租戶自管：僅透過 Web UI 操作組態（如智慧路燈/抄表平台）</div>
            <div class="diag-layer highlight">雲商負責：從硬體一路包辦到完整應用</div>
          </div>
        </div>
      </div>
    `,
    "w2-6": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化流程圖：Device Shadow 狀態同步 × 網路 RTT 三大延遲拆解</span><span class="level-num">Week 2-6</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>👥 裝置影子 (Device Shadow) 離線非同步控制</h4>
            <div class="diag-flow">
              <div class="diag-node"><strong>手機 App 端</strong><span>修改期望狀態<br><code>desired: 22°C</code></span></div>
              <div class="diag-arrow">➔</div>
              <div class="diag-node warn"><strong>雲端 Shadow JSON</strong><span>比對實際 <code>reported: 28°C</code><br>計算差值 <code>delta: 22°C</code></span></div>
              <div class="diag-arrow">➔</div>
              <div class="diag-node ok"><strong>實體裝置重連</strong><span>主動拉取 <code>delta</code><br>同步冷氣並回報新狀態</span></div>
            </div>
          </div>
          <div class="diag-box">
            <h4>⏱️ 為什麼純雲端無法硬即時？RTT 延遲三成分</h4>
            <div class="diag-layer danger"><strong>1. Propagation Delay（傳播延遲）：</strong>光訊號於光纖介質中傳播的時間（受物理距離與光速極限綁死！）</div>
            <div class="diag-layer"><strong>2. Transmission Delay（傳輸延遲）：</strong>封包推上網路線送出的時間（取決於封包大小 ÷ 頻寬）</div>
            <div class="diag-layer"><strong>3. Queueing Delay（排隊延遲）：</strong>封包在中間路由器佇列排隊等待轉發的時間（擁塞時產生抖動 Jitter）</div>
          </div>
        </div>
      </div>
    `,
    "w3-1": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化曲線圖：企業 IT 成本冰山 × 自建地端 vs. 公有雲 TCO 數學模型</span><span class="level-num">Week 3-1</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>🧊 企業 IT 成本冰山三層結構</h4>
            <div class="diag-layer highlight">🌊 水面之上（看得見）：伺服器、儲存、網路設備採購價</div>
            <div class="diag-layer">💧 水面之下（看不見）：電力、冷卻、機房空間、專線、維護與備援</div>
            <div class="diag-layer danger">🌑 最深處（容易漏算）：維運人力、資安、稽核、設備汰換與停機損失</div>
          </div>
          <div class="diag-box">
            <h4>📈 TCO 累積成本曲線對比（階梯 CapEx vs. 動態 OpEx）</h4>
            <div class="svg-container">
              <svg width="380" height="165" viewBox="0 0 380 165">
                <line x1="40" y1="140" x2="355" y2="140" stroke="#64748b" stroke-width="2"/>
                <line x1="40" y1="15" x2="40" y2="140" stroke="#64748b" stroke-width="2"/>
                <!-- 自建地端階梯線 -->
                <polyline points="40,110 40,85 95,85 95,60 155,60 155,35 220,35 345,22" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
                <text x="50" y="30" fill="#f59e0b" font-size="11" font-weight="bold">自建地端：前期極高階梯狀 CapEx + 營運折舊水電</text>
                <!-- 公有雲動態斜線 -->
                <path d="M 40 140 Q 180 100, 345 45" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
                <circle cx="40" cy="140" r="4" fill="#22c55e"/>
                <text x="52" y="132" fill="#22c55e" font-size="11" font-weight="bold">Day 0 零前置資本</text>
                <text x="175" y="108" fill="#38bdf8" font-size="11" font-weight="bold">公有雲 OpEx（隨規模線性/次線性增長）</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,
    "w3-2": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化關係圖：SLI → SLO → SLA 三層指標與「幾個九」停機代價</span><span class="level-num">Week 3-2</span></h3>
        <div class="diag-flow">
          <div class="diag-node">
            <strong>SLI (服務水準指標)</strong>
            <span>實際量測的客觀數據<br>例：實際可用性 99.96%</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node warn">
            <strong>SLO (服務水準目標)</strong>
            <span>內部團隊希望達成的目標<br>例：內部目標 >= 99.95%</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node ok">
            <strong>SLA (服務水準協議)</strong>
            <span>對外商業合約承諾（例 >= 99.9%）<br>未達標提供 Service Credit 抵免</span>
          </div>
        </div>
        <div class="diag-grid-3" style="margin-top:8px;">
          <div class="diag-layer"><strong>99.9%（三個九）：</strong>年允許停機 <strong>8.76 小時</strong></div>
          <div class="diag-layer highlight"><strong>99.99%（四個九）：</strong>年允許停機 <strong>52.6 分鐘</strong></div>
          <div class="diag-layer danger"><strong>99.999%（五個九）：</strong>年允許停機僅 <strong>5.26 分鐘</strong>（跨區成本非線性暴增）</div>
        </div>
      </div>
    `,
    "w3-3": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化流程圖：FinOps 三階段生命週期 × 儲存階層化自動降級</span><span class="level-num">Week 3-3</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>💰 FinOps 雲端財務維運生命週期</h4>
            <div class="diag-flow">
              <div class="diag-node"><strong>1. Inform (看懂成本)</strong><span>Tag 標籤與成本分攤<br>(Cost Allocation)</span></div>
              <div class="diag-arrow">➔</div>
              <div class="diag-node warn"><strong>2. Optimize (找浪費)</strong><span>Rightsizing（不只看CPU！）<br>RI承諾 / Spot可中斷資源</span></div>
              <div class="diag-arrow">➔</div>
              <div class="diag-node ok"><strong>3. Operate (建治理)</strong><span>部門預算控制、異常帳單告警與自動關閉殭屍資源</span></div>
            </div>
          </div>
          <div class="diag-box">
            <h4>🗄️ 儲存階層化 (Storage Tiering)</h4>
            <div class="diag-flow">
              <div class="diag-node err"><strong>熱資料 (Hot)</strong><span>近期頻繁存取<br>高效能 SSD 儲存</span></div>
              <div class="diag-arrow">➔</div>
              <div class="diag-node warn"><strong>溫/冷資料 (Cool/Cold)</strong><span>存取頻率下降<br>轉入低成本儲存層</span></div>
              <div class="diag-arrow">➔</div>
              <div class="diag-node"><strong>歸檔 (Archive)</strong><span>長期合規保存、極低頻存取<br>成本最低 (Glacier)</span></div>
            </div>
          </div>
        </div>
      </div>
    `,
    "w3-4": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化產業架構圖：製造 OT 階層 × 零售拆解尖峰 × 金融 Core-to-Edge</span><span class="level-num">Week 3-4</span></h3>
        <div class="diag-grid-3">
          <div class="diag-box">
            <h4>🏭 製造現場 OT 五層與 IT/OT 融合</h4>
            <div class="diag-layer highlight">上層系統：MES / ERP / Analytics</div>
            <div class="diag-layer">DCS / 控制層（整合製程控制）</div>
            <div class="diag-layer">SCADA（監控與資料採集）</div>
            <div class="diag-layer">PLC（可程式邏輯控制器：控制機械）</div>
            <div class="diag-layer">底層：感測與致動 (Sensors & Actuators)</div>
          </div>
          <div class="diag-box">
            <h4>🛒 現代雲端零售：把搶購尖峰拆開處理</h4>
            <div class="diag-layer highlight">1. CDN / Cache（把熱門靜態內容就近提供）</div>
            <div class="diag-layer">2. Queue 訊息佇列（吸收瞬間暴增搶購流量）</div>
            <div class="diag-layer">3. Async（非同步處理訂單，防 DB 鎖死超賣）</div>
            <div class="diag-layer">4. DB / Service（各功能獨立擴縮 + 全通路庫存）</div>
          </div>
          <div class="diag-box">
            <h4>🏦 金融業 Core-to-Edge 雲端化策略</h4>
            <div class="diag-layer danger">Core：保留大型主機核心記帳（維持穩定與信任）</div>
            <div class="diag-layer">API：建立標準化安全介面解耦內外</div>
            <div class="diag-layer highlight">Cloud Services：行動理財、串流+圖形分析 AML 風控</div>
            <div class="diag-layer">Channel：App / Web / Open Banking 開放銀行</div>
          </div>
        </div>
      </div>
    `,
    "w3-5": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化模型：Zero Trust 零信任三原則 × PUE 能源效率 × 逆向出雲評估</span><span class="level-num">Week 3-5</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>🛡️ Zero Trust（Identity is the New Perimeter）</h4>
            <div class="diag-layer highlight">原則 1：驗證（每次存取都重新確認身分與情境，不因內網就信任）</div>
            <div class="diag-layer highlight">原則 2：最小權限（只給完成當前工作所需的最低權限）</div>
            <div class="diag-layer highlight">原則 3：假設已入侵（透過網路分段、持續監控降低橫向移動）</div>
          </div>
          <div class="diag-box">
            <h4>🌱 Green Cloud PUE 與逆向出雲 (Cloud Repatriation)</h4>
            <div class="diag-layer"><strong>PUE 公式：</strong>資料中心總能源 ÷ IT 設備能源（越接近 <strong>1.0</strong> 代表非 IT 冷卻耗能越低）</div>
            <div class="diag-layer warn"><strong>適合評估逆向出雲：</strong>負載長期穩定、硬體利用率高、具強大維運團隊、架構高度可攜</div>
            <div class="diag-layer"><strong>仍需留在公有雲：</strong>需求快速成長、流量波動大、跨區域服務、需大量彈性 AI 算力</div>
          </div>
        </div>
      </div>
    `,
    "w4-1": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化演進圖：傳統機房代管 (Co-location) vs. 現代軟體定義雲端 IaaS</span><span class="level-num">Week 4-1</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>🔧 傳統機房代管 (Co-location) 人工工單模式</h4>
            <div class="diag-layer">企業自購資產：Server 伺服器 / Switch 交換器 / Storage 儲存</div>
            <div class="diag-layer">IDC 機房負責：Rack 機櫃空間 / UPS 電力 / Cooling 冷卻空調</div>
            <div class="diag-layer danger">維運致命傷：換硬碟與網路實體跳線皆須派工程師進機房 + 人工工單（耗時數天至數週）</div>
          </div>
          <div class="diag-box">
            <h4>⚡ 現代雲端 IaaS（硬體資產 ➔ 可程式化資源池）</h4>
            <div class="diag-layer highlight">兩大催化劑：硬體輔助虛擬化 (Intel VT-x / AMD-V) + 軟體定義網路 (SDN)</div>
            <div class="diag-layer">三位一體資源池：Compute (CPU/RAM) + Storage (Block/File/Object) + Network (VPC)</div>
            <div class="diag-layer highlight">交付革命：透過 HTTP RESTful API / SDK / Terraform IaC 秒級全自動交付！</div>
          </div>
        </div>
      </div>
    `,
    "w4-2": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化嵌套圖：三層地理容災佈局 × 虛擬化兩層位址轉譯與噪鄰盲區</span><span class="level-num">Week 4-2</span></h3>
        <div class="diag-grid-2">
          <div class="diag-nest-outer">
            <strong style="color:#38bdf8;">🌐 第三層：跨區域 Region（如台灣 vs. 美洲，跨國非同步複寫防強震海嘯）</strong>
            <div class="diag-nest-mid">
              <strong style="color:#4ade80;">🏙️ 第二層：可用區 Availability Zone (AZ1 ↔ AZ2，同都會區獨立水電資料中心，低延遲光纖互聯)</strong>
              <div class="diag-nest-inner">
                <strong style="color:#fbbf24;">🗄️ 第一層：故障網域 Fault Domain (Rack A ↔ Rack B)</strong>
                <div style="font-size:0.82rem;color:#e2e8f0;margin-top:4px;">實體伺服器分散不同機櫃，具獨立供電迴路 (PDU) 與頂端交換器 (ToR Switch)</div>
              </div>
            </div>
          </div>
          <div class="diag-box">
            <h4>⚠️ Hypervisor 三大損耗與底層微架構盲區</h4>
            <div class="diag-layer"><strong>記憶體兩層轉譯：</strong>GVA (虛擬位址) ➔ GPA (假實體位址) ➔ HPA (真實實體位址，經 EPT/NPT)</div>
            <div class="diag-layer danger"><strong>I/O 模擬瓶頸（最重！）：</strong>Guest OS I/O 請求 ➔ Hypervisor 中斷攔截 + 軟體模擬 + 多次記憶體拷貝</div>
            <div class="diag-layer warn"><strong>噪鄰共用盲區：</strong>L3 Cache 爭搶 + 記憶體匯流排爭搶 + 25GbE 實體網卡佇列爭搶 + vCPU 暫停引發時鐘漂移 (Clock Drift)</div>
          </div>
        </div>
      </div>
    `,
    "w4-3": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化決策矩陣：IaaS 四大部署模式光譜（資料主權 vs. 擴展彈性）</span><span class="level-num">Week 4-3</span></h3>
        <div class="diag-flow">
          <div class="diag-node">
            <strong>1. 公有 IaaS (Public)</strong>
            <span>主權：低｜彈性：高<br>零前期 CAPEX，適合公網波動業務</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node">
            <strong>2. 混合 IaaS (Hybrid)</strong>
            <span>主權：中｜彈性：高<br>核心留地端 + 尖峰算力外溢 (Cloud Bursting)</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node warn">
            <strong>3. 託管私有 (Hosted Private)</strong>
            <span>主權：高｜彈性：中<br>企業獨佔實體機防噪鄰 + IDC 代管水電空調（適合金融 PCI-DSS）</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node err">
            <strong>4. 私有 IaaS (Private)</strong>
            <span>主權：最高｜彈性：低<br>物理不出廠區，最高 CAPEX（晶圓廠/國防/央行）</span>
          </div>
        </div>
      </div>
    `,
    "w4-4": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化狀態機：CaaS 虛擬機生命週期與「Stopped 狀態計費陷阱」</span><span class="level-num">Week 4-4</span></h3>
        <div class="diag-flow">
          <div class="diag-node">
            <strong>Provisioning (初始化)</strong>
            <span>API 請求 ➔ 選宿主機、配 IP、掛載開機碟</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node ok">
            <strong>Running (運轉中)</strong>
            <span>正常運行，持續收取「vCPU/RAM 運算費 + 磁碟費 + IP 費」</span>
          </div>
          <div class="diag-arrow">⇄</div>
          <div class="diag-node warn">
            <strong>Stopped (已停止/關機)</strong>
            <span>釋放 CPU/RAM（停收運算費），但<strong>保留虛擬磁碟與私有 IP 仍持續計費！</strong></span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node err">
            <strong>Terminated (已銷毀)</strong>
            <span>徹底刪除虛擬機定義與暫態資源，完全停止計費</span>
          </div>
        </div>
      </div>
    `,
    "w4-5": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化儲存圖解：Block / File / Object × 磁碟代幣桶效能懸崖 × 容錯機制</span><span class="level-num">Week 4-5</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>⚠️ 區塊儲存突發 (Bursting) 與效能懸崖陷阱</h4>
            <div class="svg-container">
              <svg width="380" height="140" viewBox="0 0 380 140">
                <line x1="35" y1="115" x2="355" y2="115" stroke="#64748b" stroke-width="2"/>
                <line x1="35" y1="15" x2="35" y2="115" stroke="#64748b" stroke-width="2"/>
                <polyline points="35,35 185,35 195,95 345,95" fill="none" stroke="#ef4444" stroke-width="3"/>
                <text x="45" y="27" fill="#38bdf8" font-size="11" font-weight="bold">消耗 Token Bucket 累積代幣維持高突發 IOPS</text>
                <text x="195" y="65" fill="#ef4444" font-size="11" font-weight="bold">⚡ 代幣耗盡瞬間驟降（效能懸崖）</text>
                <text x="200" y="110" fill="#94a3b8" font-size="11">基礎基準線 IOPS（關鍵 DB 應改採 Provisioned IOPS）</text>
              </svg>
            </div>
          </div>
          <div class="diag-box">
            <h4>🛡️ 分散式儲存底層容錯機制對決</h4>
            <div class="diag-layer highlight"><strong>Triple Replication（三副本複製）：</strong>同一份資料寫入 3 台獨立節點 ➔ 空間利用率僅 <strong>33%</strong>，讀寫延遲最低（<strong>Block 區塊儲存</strong>首選）</div>
            <div class="diag-layer"><strong>Erasure Coding（糾刪碼，如 8+4 模式）：</strong>切分 8 份資料塊 + 計算 4 份同位元 ➔ 空間利用率高達 <strong>67%</strong>，性價比最高（<strong>Object 物件儲存</strong>首選）</div>
            <div class="diag-layer danger"><strong>本機暫態儲存 (Ephemeral NVMe)：</strong>宿主機直插、微秒級極致 IOPS，但 VM 一旦 Stop 資料即永久消失！</div>
          </div>
        </div>
      </div>
    `,
    "w4-6": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化網路拓撲：VXLAN (24-bit) 封裝 × 雙層虛擬防火牆包覆順序</span><span class="level-num">Week 4-6</span></h3>
        <div class="diag-nest-outer">
          <strong style="color:#f59e0b;">🛡️ 外層防線（第二層）：子網路級封包過濾器 (Subnet / NACL)</strong>
          <div style="font-size:0.84rem;color:#cbd5e1;margin-top:4px;">
            • 作用於整個 Subnet 進出邊界｜<strong>無狀態檢測 (Stateless)</strong>：進站與出站完全獨立比對，必須顯式配置雙向回應埠｜依 <strong>規則編號 (Rule Number) 由小到大</strong> 循序評估
          </div>
          <div class="diag-nest-mid" style="border-color:#38bdf8;">
            <strong style="color:#38bdf8;">🛡️ 內層防線（第一層）：虛擬網卡級防火牆 (vNIC / Security Group)</strong>
            <div style="font-size:0.84rem;color:#cbd5e1;margin-top:4px;">
              • 直接綁定於虛擬機 vNIC 網卡之上｜<strong>有狀態檢測 (Stateful)</strong>：允許傳入連線 (Inbound) 時，回程回應封包 (Outbound) <strong>自動放行</strong>｜採允許清單 (Allowlist，預設拒絕)
            </div>
          </div>
        </div>
      </div>
    `,
    "w5-1": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化模型：PaaS 三層黑盒子抽象模型 × 長期滿載成本交叉點 (Cost Crossover)</span><span class="level-num">Week 5-1</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>📦 PaaS 黑盒子化了哪些層次？</h4>
            <div class="diag-layer highlight"><strong>🔼 租戶保留的頂層：</strong>商業邏輯程式碼 (Business Logic)、資料庫綱要 (Schema)、環境變數組態</div>
            <div class="diag-layer warn"><strong>⚙️ 被平台託管的中層：</strong>動態執行階段 (Language Runtime)、Web 容器、連線池、自動日誌收集</div>
            <div class="diag-layer"><strong>🔒 被隱藏的底層：</strong>實體機房、Hypervisor、OS 安裝與核心安全更新、實體儲存掛載</div>
          </div>
          <div class="diag-box">
            <h4>💸 PaaS vs. IaaS 成本交叉點 (Cost Crossover)</h4>
            <div class="svg-container">
              <svg width="380" height="145" viewBox="0 0 380 145">
                <line x1="35" y1="125" x2="355" y2="125" stroke="#64748b" stroke-width="2"/>
                <line x1="35" y1="15" x2="35" y2="125" stroke="#64748b" stroke-width="2"/>
                <!-- IaaS 線 -->
                <line x1="35" y1="95" x2="345" y2="45" stroke="#22c55e" stroke-width="2.5"/>
                <text x="235" y="40" fill="#22c55e" font-size="11" font-weight="bold">自建 IaaS 成本</text>
                <!-- PaaS 線 -->
                <line x1="35" y1="120" x2="345" y2="18" stroke="#f43f5e" stroke-width="2.5"/>
                <text x="205" y="22" fill="#f43f5e" font-size="11" font-weight="bold">PaaS 帳單（含代管溢價）</text>
                <circle cx="156" cy="75" r="5" fill="#f59e0b"/>
                <text x="110" y="96" fill="#f59e0b" font-size="11" font-weight="bold">⬆ 成本交叉點 (Cost Crossover)</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,
    "w5-2": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化架構圖：PaaS 無狀態（Stateless）設計鐵律與狀態外移</span><span class="level-num">Week 5-2</span></h3>
        <div class="diag-flow">
          <div class="diag-node">
            <strong>外部流量負載平衡</strong>
            <span>Auto-scaling 隨時動態增減 1~10 台 PaaS 運算實例</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node warn">
            <strong>無狀態容器實例群</strong>
            <span>❌ 本地記憶體不可信<br>❌ 本地暫態磁碟不可信</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node ok">
            <strong>外部持久化與快取層</strong>
            <span>✔ Session 改存外部 Redis 快取<br>✔ 上傳檔案改存 Object 物件儲存</span>
          </div>
        </div>
      </div>
    `,
    "w5-3": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化防禦圖：分散式快取三大災難（穿透 vs. 擊穿 vs. 雪崩）攔截動線</span><span class="level-num">Week 5-3</span></h3>
        <div class="diag-grid-3">
          <div class="diag-box">
            <h4>1️⃣ 快取穿透 (Penetration)</h4>
            <div class="diag-layer danger">成因：惡意或異常查詢「快取與 DB 皆不存在的 Key」</div>
            <div class="diag-layer highlight">🛡️ 防禦：在快取前部署<strong>布隆過濾器 (Bloom Filter)</strong> 直接攔截不存在的 Key</div>
          </div>
          <div class="diag-box">
            <h4>2️⃣ 快取擊穿 (Breakdown)</h4>
            <div class="diag-layer danger">成因：「單一超高併發熱點 Key」剛好到期的瞬間</div>
            <div class="diag-layer highlight">🛡️ 防禦：<strong>互斥鎖更新 (Mutex Lock)</strong>，僅允許單一執行緒回 DB 重建快取</div>
          </div>
          <div class="diag-box">
            <h4>3️⃣ 快取雪崩 (Avalanche)</h4>
            <div class="diag-layer danger">成因：「大批量 Key 在同一時間點集體過期」</div>
            <div class="diag-layer highlight">🛡️ 防禦：設定過期時間 (TTL) 時附加<strong>隨機擾動值 (Random Jitter)</strong> 打散到期日</div>
          </div>
        </div>
      </div>
    `,
    "w5-4": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化比較圖：Docker vs. KVM vs. MicroVM (Firecracker) × 冪等性去重</span><span class="level-num">Week 5-4</span></h3>
        <div class="diag-grid-3">
          <div class="diag-box">
            <h4>🐳 標準 Docker 容器</h4>
            <div class="diag-layer">毫秒級啟動，但共用宿主機 Kernel，公有雲多租戶下有<strong>容器逃逸風險</strong></div>
          </div>
          <div class="diag-box">
            <h4>🖥️ 傳統 KVM 虛擬機</h4>
            <div class="diag-layer">強硬體級隔離，但完整 Guest OS 啟動需數秒至數十秒，無法滿足瞬態彈性</div>
          </div>
          <div class="diag-box">
            <h4>🔥 MicroVM (如 Firecracker)</h4>
            <div class="diag-layer highlight">精簡非必要虛擬硬體 ➔ <strong>5 毫秒內極速啟動 + 維持硬體級多租戶隔離</strong>（FaaS 核心底座）</div>
          </div>
        </div>
      </div>
    `,
    "w5-5": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化架構圖：Database Proxy 防連線池耗盡 × 雙軌健康檢查 (Liveness / Readiness)</span><span class="level-num">Week 5-5</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>🔌 化解 FaaS 瞬間高併發連線池耗盡危機</h4>
            <div class="diag-flow">
              <div class="diag-node err"><strong>數千個 FaaS 實例</strong><span>瞬間併發啟動</span></div>
              <div class="diag-arrow">➔</div>
              <div class="diag-node ok"><strong>Database Proxy</strong><span>常駐連線代理層<br>動態複用連線池</span></div>
              <div class="diag-arrow">➔</div>
              <div class="diag-node"><strong>後端 DBaaS</strong><span>維持穩定連線數不崩潰</span></div>
            </div>
          </div>
          <div class="diag-box">
            <h4>💓 容器雙軌健康檢查機制</h4>
            <div class="diag-layer danger"><strong>存活用心跳 (Liveness Probe)：</strong>偵測無窮迴圈或死鎖 (Deadlock) ➔ 失敗時直接<strong>重啟 (Restart)</strong> 實例</div>
            <div class="diag-layer highlight"><strong>就緒用心跳 (Readiness Probe)：</strong>偵測是否完成開機載入與 DB 連線 ➔ 通過前<strong>暫停分派外部流量（不重啟）</strong>防雪崩</div>
          </div>
        </div>
      </div>
    `,
    "w5-6": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化管線圖：物聯網 PaaS 防帳單雪崩三招（省下 90% 訊息與寫入成本）</span><span class="level-num">Week 5-6</span></h3>
        <div class="diag-flow">
          <div class="diag-node ok">
            <strong>第 1 招：封包合併批次上報</strong>
            <span>避免每秒發 1 筆 50B，改為<strong>每 10 秒打包 1 筆上報</strong>（訊息費立減 90%！）</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node ok">
            <strong>第 2 招：本地邊緣過濾</strong>
            <span>常態穩定無變化的重複數據在邊緣直接丟棄，<strong>僅上報變化差值</strong></span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node ok">
            <strong>第 3 招：資料庫批次寫入</strong>
            <span>在 FaaS 與 DB 間利用記憶體緩衝進行<strong>批次插入 (Batch Insert)</strong></span>
          </div>
        </div>
      </div>
    `,
    "w6-1": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化拓撲圖：多租戶資料庫三大隔離模型選型矩陣</span><span class="level-num">Week 6-1</span></h3>
        <div class="diag-grid-3">
          <div class="diag-box">
            <h4>🏛️ 1. 獨立資料庫 (Database-per-Tenant)</h4>
            <div class="diag-layer highlight">架構：每租戶專屬獨立 DB Instance</div>
            <div class="diag-layer">優勢：物理級隔離、單租戶獨立備份（適合醫療/金融 VIP）</div>
            <div class="diag-layer danger">瓶頸：Connection Pool 開銷與維護成本極高</div>
          </div>
          <div class="diag-box">
            <h4>🗂️ 2. 共享庫獨立 Schema (Schema-per-Tenant)</h4>
            <div class="diag-layer">架構：共用實體 DB 引擎，每租戶獨立 Schema</div>
            <div class="diag-layer">優勢：降低硬體採購成本、保有邏輯結構隔離</div>
            <div class="diag-layer warn">瓶頸：共用 CPU / RAM / I/O，無法徹底隔絕資源爭搶</div>
          </div>
          <div class="diag-box">
            <h4>📊 3. 全共享表 (Shared-Table + Tenant ID)</h4>
            <div class="diag-layer">架構：共用同一張巨量表，強制含 <code>tenant_id</code> 分區鍵</div>
            <div class="diag-layer">優勢：成本最低、規模擴展性最高（適合免費/標準租戶）</div>
            <div class="diag-layer danger">要求：必配資料庫底層<strong>行級安全性 (RLS)</strong> 防越權！</div>
          </div>
        </div>
      </div>
    `,
    "w6-2": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化演算法圖解：權杖桶 (Token Bucket) vs. 漏桶 (Leaky Bucket) × Feature Flags</span><span class="level-num">Week 6-2</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>🪣 權杖桶 (Token Bucket)：允許適度突發流量 (Burst)</h4>
            <div class="diag-layer highlight">以固定速率生權杖存入桶中 ➔ 短時間密集請求只要領得到累積權杖即可<strong>瞬間批量通過 (Burst)</strong></div>
          </div>
          <div class="diag-box">
            <h4>💧 漏桶 (Leaky Bucket)：恆定速率流出、徹底平滑流量</h4>
            <div class="diag-layer warn">無論上方突發請求倒入多快，桶底永遠<strong>以恆定速率流出請求</strong>，嚴格限制後端最大處理速度</div>
          </div>
        </div>
        <div class="diag-layer" style="margin-top:8px;">
          🚩 <strong>特性旗標 (Feature Flags)：</strong>將「程式碼部署 (Deploy)」與「功能開放 (Release)」解耦，執行期動態比對租戶 ID，異常時免重新編譯，後台一鍵<strong>秒級全域關閉</strong>！
        </div>
      </div>
    `,
    "w6-3": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化波形與流程圖：OTA A/B 分區看門狗回滾 × 告警時間滯後補償 (Hysteresis)</span><span class="level-num">Week 6-3</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>🔄 OTA 防變磚：A/B 雙分區 + 硬體看門狗 (Watchdog)</h4>
            <div class="diag-flow">
              <div class="diag-node"><strong>A 分區運行中</strong><span>Pre-Signed URL 下載新韌體寫入閒置 <strong>B 分區</strong></span></div>
              <div class="diag-arrow">➔</div>
              <div class="diag-node warn"><strong>重開機驗證</strong><span>聯網驗證成功才切換 Bootloader Flag</span></div>
              <div class="diag-arrow">➔</div>
              <div class="diag-node err"><strong>Watchdog 防護</strong><span>若 Kernel Panic 卡死，看門狗逾時<strong>自動回滾至 A 分區</strong></span></div>
            </div>
          </div>
          <div class="diag-box">
            <h4>📈 智慧告警：時間滯後補償 (Hysteresis) 抑制臨界震盪</h4>
            <div class="svg-container">
              <svg width="380" height="145" viewBox="0 0 380 145">
                <line x1="35" y1="40" x2="355" y2="40" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="5,4"/>
                <text x="42" y="33" fill="#ef4444" font-size="11" font-weight="bold">觸發告警門檻：> 80°C</text>
                <line x1="35" y1="95" x2="355" y2="95" stroke="#22c55e" stroke-width="1.8" stroke-dasharray="5,4"/>
                <text x="42" y="112" fill="#22c55e" font-size="11" font-weight="bold">解除告警門檻：需降溫至 < 75°C（非對稱閥值防洗版）</text>
                <path d="M 35 120 Q 80 70, 115 30 Q 135 48, 155 32 Q 175 50, 195 35 Q 240 65, 310 110 L 350 115" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
                <circle cx="110" cy="36" r="4" fill="#ef4444"/>
                <circle cx="282" cy="95" r="4" fill="#22c55e"/>
                <text x="125" y="65" fill="#f59e0b" font-size="10">79~81°C 震盪期間不重複發送通知</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,
    "w6-4": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化產業閉迴路：製造 PdM × 微電網 EMS × 車聯網 × 智慧農業</span><span class="level-num">Week 6-4</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>⚙️ 智慧製造 PdM & ⚡ 微電網 EMS</h4>
            <div class="diag-layer highlight"><strong>預測性維護 (PdM)：</strong>邊緣高頻振動採集 ➔ 頻譜分析 ➔ 雲端異常檢測 ML，軸承微裂紋階段預警（降低 80% 非預期停機）</div>
            <div class="diag-layer"><strong>微電網 (EMS)：</strong>聚合光電/儲能/充電樁 ➔ 對接時間電價 (TOU) 與需量反應 + 氣象雲圖 AI 最佳化充放電套利</div>
          </div>
          <div class="diag-box">
            <h4>🚗 智慧車聯網 & 🌱 智慧農業</h4>
            <div class="diag-layer"><strong>智慧車聯網：</strong>MQTT 接入車載 T-Box (CAN-bus/GPS) ➔ 空間索引判定地理圍欄 (Geofencing) + 設備影子遠端開鎖/空調</div>
            <div class="diag-layer highlight"><strong>智慧農業：</strong>土壤感測走 LoRaWAN (數年續航) ➔ 結合蒸發散量 (ETO) 模型執行閉環回授控制 (Closed-Loop) 自動灌溉</div>
          </div>
        </div>
      </div>
    `,
    "w6-5": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化比較圖：邊緣運算三層光譜 × 傳統 VM vs. 輕量容器（Namespaces + Cgroups）</span><span class="level-num">Week 6-5</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>📡 邊緣運算階層光譜 (Edge Continuum)</h4>
            <div class="diag-layer"><strong>1. 極限終端 (Device Edge / TinyML)：</strong>ESP32 / STM32 微控制器，毫瓦級功耗跑量化小模型</div>
            <div class="diag-layer highlight"><strong>2. 閘道邊緣 (Gateway Edge / IPC)：</strong>研華 IPC / NVIDIA Jetson，提供數十 TOPS 算力與協定轉譯</div>
            <div class="diag-layer"><strong>3. 微型場域邊緣 (MEC)：</strong>廠區邊緣機櫃伺服器，負責多產線即時排程與廠區數據彙整</div>
          </div>
          <div class="diag-box">
            <h4>🐳 為什麼輕量容器能取代傳統 VM 進入邊緣？</h4>
            <div class="diag-layer danger"><strong>傳統 VM 困境：</strong>Hypervisor 模擬硬體 + 獨立完整 Guest OS（佔數 GB RAM、啟動需數分鐘）</div>
            <div class="diag-layer highlight"><strong>輕量容器優勢：</strong>直接共享宿主機 Linux Kernel！以 <strong>Namespaces</strong> 隔離視圖、<strong>Cgroups</strong> 限制配額（毫秒啟動、多階段構建壓至 &lt;50MB、<code>--read-only</code> 保護 Flash）</div>
          </div>
        </div>
      </div>
    `,
    "w6-6": `
      <div class="diagram-card">
        <h3><span>🎨 視覺化全景圖：K3s 邊緣自治 × EdgeX Foundry 三大分層 × 端邊雲協同</span><span class="level-num">Week 6-6</span></h3>
        <div class="diag-flow">
          <div class="diag-node">
            <strong>端 (Device) + 南向層</strong>
            <span>EdgeX <strong>南向層 (Device Services)</strong><br>原生轉譯 Modbus / BACnet / OPC UA</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node warn">
            <strong>邊 (Edge：K3s + EdgeX 核心層)</strong>
            <span>• <strong>K3s：</strong>&lt;100MB、SQLite 替換 etcd (512MB RAM)、斷網不驅逐 Pod (邊緣自治)<br>• <strong>EdgeX 核心層 + 本地 Redis：</strong>Store and Forward 斷網暫存補傳</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node ok">
            <strong>北向層 ➔ 雲 (Cloud SaaS)</strong>
            <span>EdgeX <strong>北向層 (App Services)</strong> 清洗過濾 99% 雜訊並封裝 JSON ➔ 推送雲端多租戶 TSDB 與 AI 訓練</span>
          </div>
        </div>
      </div>
    `,
    "w7-1": `
      <div class="diagram-card">
        <h3><span>🎨 總複習視覺化全景（一）：四代運算底座演進與 SPI + FaaS 責任邊界</span><span class="level-num">Review 7-1</span></h3>
        <div class="diag-flow">
          <div class="diag-node"><strong>Bare-Metal 裸機</strong><span>無虛擬化層<br>零損耗但具資源孤島</span></div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node"><strong>傳統 VM (KVM)</strong><span>Hypervisor + Guest OS<br>強隔離但 I/O 損耗重</span></div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node ok"><strong>輕量容器 (Docker)</strong><span>共享 Linux Kernel<br>Namespaces + Cgroups</span></div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node warn"><strong>MicroVM (Firecracker)</strong><span>5ms 極速啟動 + 硬體隔離<br>公有雲多租戶 FaaS 底座</span></div>
        </div>
      </div>
    `,
    "w7-2": `
      <div class="diagram-card">
        <h3><span>🎨 總複習視覺化全景（二）：儲存、資料庫、時序壓縮與快取防線</span><span class="level-num">Review 7-2</span></h3>
        <div class="diag-grid-3">
          <div class="diag-box">
            <h4>💾 IaaS 儲存與容錯</h4>
            <div class="diag-layer">Block：三副本 (33%)、低延遲 DB（注意暫態碟 Stop 消失）</div>
            <div class="diag-layer">File：POSIX / NFS / SMB 多機共享</div>
            <div class="diag-layer highlight">Object：糾刪碼 (67%)、Metadata 數據湖、OTA Pre-Signed URL</div>
          </div>
          <div class="diag-box">
            <h4>⏱️ DBaaS vs. TSDB</h4>
            <div class="diag-layer">DBaaS：CNAME 漂移 Failover、Read Replicas、PITR (快照+WAL)</div>
            <div class="diag-layer highlight">TSDB：LSM-Tree 循序寫入 + Gorilla XOR & Delta-of-Delta 壓縮省 90% 空間</div>
          </div>
          <div class="diag-box">
            <h4>🛡️ 快取災難與多租戶 RLS</h4>
            <div class="diag-layer">穿透 ➔ 布隆過濾器｜擊穿 ➔ 互斥鎖｜雪崩 ➔ 隨機 Jitter</div>
            <div class="diag-layer danger">Shared-Table 共表必配底層 RLS 行級安全防 IDOR 越權</div>
          </div>
        </div>
      </div>
    `,
    "w7-3": `
      <div class="diagram-card">
        <h3><span>🎨 總複習視覺化全景（三）：網路虛擬化、IoT 協定與流量整形對決</span><span class="level-num">Review 7-3</span></h3>
        <div class="diag-grid-2">
          <div class="diag-box">
            <h4>🌐 雲端網路虛擬化對比</h4>
            <div class="diag-layer"><strong>VLAN (12-bit, 4094)</strong> vs. <strong>VXLAN (24-bit VNI, 1600萬, MAC-in-UDP)</strong></div>
            <div class="diag-layer"><strong>第一層 vNIC 防火牆 (Stateful)</strong> vs. <strong>第二層 Subnet NACL (Stateless)</strong></div>
            <div class="diag-layer"><strong>IPSec VPN (經公網)</strong> vs. <strong>Direct Connect (實體光纖專線)</strong></div>
          </div>
          <div class="diag-box">
            <h4>📡 IoT 協定與限流演算法</h4>
            <div class="diag-layer"><strong>MQTT (TCP 長連線, 2B 標頭)</strong> vs. <strong>CoAP (UDP RESTful, NB-IoT 省電)</strong></div>
            <div class="diag-layer highlight"><strong>權杖桶 Token Bucket (允許 Burst)</strong> vs. <strong>漏桶 Leaky Bucket (恆定速率流出)</strong></div>
          </div>
        </div>
      </div>
    `,
    "w7-4": `
      <div class="diagram-card">
        <h3><span>🎨 總複習視覺化全景（四）：端、邊、雲協同一體化終極架構藍圖</span><span class="level-num">Review 7-4</span></h3>
        <div class="diag-flow">
          <div class="diag-node">
            <strong>端 (Device Layer)</strong>
            <span>Sensors/Actuators、MCU TinyML、mTLS + TPM 防拷貝、A/B 分區 + 看門狗 OTA</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node warn">
            <strong>邊 (Edge Layer)</strong>
            <span>IPC/Jetson、輕量容器 + K3s (SQLite/邊緣自治) + EdgeX (南北向轉譯/Redis 斷網暫存)、&lt;1~5ms 硬即時與過濾 99% 雜訊</span>
          </div>
          <div class="diag-arrow">➔</div>
          <div class="diag-node ok">
            <strong>雲 (Cloud Layer)</strong>
            <span>IaaS/PaaS/SaaS、多租戶 Broker 叢集、Device Shadow、TSDB、大模型訓練與 FinOps 商業治理</span>
          </div>
        </div>
      </div>
    `
  };

  // 3. 將先前盤點的 13 個微觀簡報細節自動注入對應關卡知識點中（確保 333 頁簡報 100% 零遺漏）
  const MICRO_SUPPLEMENTS = {
    "w2-4": {
      title: "補充細節：多雲策略（Multi-Cloud）的四大共通管理層",
      detail: "當企業跨不同雲端供應商（如 Cloud A 跑主業務 Workload、Cloud B 跑異地容災 DR 或特定服務）部署時，架構團隊必須在底層統一建立並治理四大共通層：「資料（Data）、網路（Network）、身分識別與存取管理（IAM）、監控（Monitoring）」。"
    },
    "w3-3": {
      title: "補充細節：企業雲端協議（從技術走向採購談判）",
      detail: "• 規模效應：當企業雲端支出達到一定規模後，商務採購條件會直接影響總體擁有成本（TCO）。\n• 可談判內容：包含承諾用量（Committed Use）、專屬階層折扣、企業級技術支援與架構顧問服務。\n• 決策核心注意：承諾用量絕非越多越好，必須與實際業務需求預測模型一起評估，避免過度承諾造成閒置浪費。"
    },
    "w3-4": {
      title: "補充細節：雲端如何提升供應鏈韌性與「資訊穿透力」",
      detail: "• 資訊同步：讓庫存、訂單、物流資料達成跨企業即時同步。\n• 共同視圖與資訊穿透力：從上游原料、製造、物流到下游零售節點共享同一套即時可用資料，大幅降低供應鏈資訊落差。\n• 動態調整：當市場需求突然變動時，能更快連動調整生產排程與原料採購。"
    },
    "w3-5": {
      title: "補充細節：全球快速交付四支柱、GDPR 跨境邊界、綠電三方責任與架構師能力邊界",
      detail: "1. 雲端支援全球快速交付四大支柱：標準化（基礎環境模板化）、自動化（Infrastructure as Code）、區域部署（依需求建立全球區域資源）、治理（政策、權限與網路一致化）。\n2. GDPR 與跨境資料傳輸：跨境傳輸不只是單純的技術設定，還必須同時考量「資料類型、資料處理者責任、合法傳輸機制与企業所在地法規」。\n3. 綠電與碳足跡三方責任：雲端供應商（增加再生能源採用與透明度）、企業（將雲端排放納入自身 ESG / 碳盤查）、架構師（將資料中心區域、資源效率與工作負載執行時機納入設計）。\n4. 現代架構師能力邊界與基礎設施隱形化：架構師需兼具「技術深度、商業理解（TCO/ROI/SLA）、決策能力（限制條件下做出可解釋可治理的選擇）」；未來 IT 基礎設施逐漸「隱形化」，工程師透過 API 與自動化管理設施，將注意力集中在業務邏輯與服務價值。"
    },
    "w5-2": {
      title: "補充細節：ETL 批次處理「降維分析落地」與 IaaS vs. PaaS 選型指標",
      detail: "• 現代資料管線與 ETL 三步驟：1. 資料排程引擎（定時從關聯式 DB 拉取資料並壓縮）→ 2. 無伺服器數據清洗（調用短暫運算實例執行去識別化與聚合統計，算完自動釋放）→ 3. 降維分析落地（將原始巨量日誌精煉為輕量結構化特徵，注入商業分析報表系統）。\n• 我該選 IaaS 還是 PaaS？\n  - 選擇 IaaS 指標：需客製化 Linux 核心模組、需跑非標準網路協定、負載極度龐大且固定、擁有資深網管維運團隊。\n  - 選擇 PaaS 指標：團隊以純軟體開發為主、業務需極速上市（Time-to-Market）、流量難以預估、希望免除維運負擔（實務上亦可採「核心 DB 自建於高規格 IaaS + 周邊 Web/API 採 PaaS」之混合共存模式）。"
    },
    "w5-3": {
      title: "補充細節：中介軟體即服務（Middleware as a Service）四大核心功能矩陣",
      detail: "過去企業需自行搭建 RPC 伺服器、手動設定負載平衡流表與維護大型快取；現代 PaaS 將中介軟體封裝為高可用網路端點（Endpoint），透過標準 API 提供四大核心功能矩陣：「1. 身分授權中繼、2. 分散式鎖管理、3. 資料序列化轉發、4. 跨網路通訊調度」。"
    },
    "w6-3": {
      title: "補充細節：多租戶 Topic 命名空間路徑格式、規則引擎記憶體剖析與 Shadow 差量公式",
      detail: "1. 多租戶 Topic 命名空間隔離：採用包含租戶與設備階層的路徑格式，如 `tenants/{tenant_id}/devices/{device_id}/...`，並以單一策略範本動態代入 `\\${iot:ClientId}`；設備若嘗試向未授權 Topic 發布（Pub）或監聽（Sub），Gateway 會即刻中斷其 TCP 連線。\n2. 規則引擎記憶體剖析：以類 SQL 語法在記憶體中快速剖析 JSON Payload，支援「欄位投影、數學計算與布林過濾」，單一封包一次解析即可平行分流至「時序庫、熱儲存、冷存儲與事件總線」。\n3. 設備影子差量計算公式：系統自動運算 `Delta = Desired - Reported`，並僅向設備推播有差異的差量欄位。"
    }
  };

  function initDiagramsAndSupplements() {
    if (!window.IOT_GAME_DATA) return;

    // 注入 13 個微觀補充知識點
    Object.keys(MICRO_SUPPLEMENTS).forEach(lvId => {
      for (const w of window.IOT_GAME_DATA) {
        const foundLv = w.levels.find(l => l.id === lvId);
        if (foundLv && !foundLv.points.some(p => p.title === MICRO_SUPPLEMENTS[lvId].title)) {
          foundLv.points.push(MICRO_SUPPLEMENTS[lvId]);
        }
      }
    });

    // 在頂部導覽列新增「📊 架構圖鑑」與「💾 存檔轉移」按鈕
    const rpgBar = document.querySelector(".rpg-bar");
    if (rpgBar && !document.getElementById("btnGallery")) {
      const galleryBtn = document.createElement("button");
      galleryBtn.id = "btnGallery";
      galleryBtn.className = "btn btn-primary";
      galleryBtn.innerHTML = "📊 架構圖鑑";
      galleryBtn.onclick = () => window.goDiagramGallery();

      const syncBtn = document.createElement("button");
      syncBtn.id = "btnSyncSave";
      syncBtn.className = "btn";
      syncBtn.innerHTML = "💾 存檔碼";
      syncBtn.title = "匯出或匯入進度存檔碼（方便電腦與平板同步進度）";
      syncBtn.onclick = () => window.openSyncModal();

      const wrongBtn = rpgBar.querySelector("button[onclick*='goWrongBook']");
      if (wrongBtn) {
        rpgBar.insertBefore(galleryBtn, wrongBtn);
        rpgBar.insertBefore(syncBtn, wrongBtn.nextSibling);
      } else {
        rpgBar.appendChild(galleryBtn);
        rpgBar.appendChild(syncBtn);
      }
    }

    // 包裝原有的 renderStageStudy，自動插入該關卡的視覺化架構流程圖
    const origRenderStageStudy = window.renderStageStudy;
    if (typeof origRenderStageStudy === "function") {
      window.renderStageStudy = function(container) {
        origRenderStageStudy(container);
        const diagHtml = LEVEL_DIAGRAMS[window.currentLevelId];
        if (diagHtml) {
          const wrapper = document.createElement("div");
          wrapper.innerHTML = diagHtml;
          const firstComp = container.querySelector(".comp-section") || container.querySelector(".cta-banner");
          if (firstComp && firstComp.parentNode) {
            firstComp.parentNode.insertBefore(wrapper.firstElementChild, firstComp);
          } else {
            container.appendChild(wrapper.firstElementChild);
          }
        }
      };
    }

    // 擴充 renderApp 支援「📊 全學期架構圖鑑」頁面
    const origRenderApp = window.renderApp;
    if (typeof origRenderApp === "function") {
      window.renderApp = function() {
        if (window.currentView === "diagramGallery") {
          const root = document.getElementById("appRoot");
          renderDiagramGallery(root);
        } else {
          origRenderApp();
        }
      };
    }
  }

  window.goDiagramGallery = function() {
    window.currentView = "diagramGallery";
    window.scrollTo(0, 0);
    window.renderApp();
  };

  function renderDiagramGallery(container) {
    let html = `
      <div class="nav-bar">
        <div class="view-heading">
          <div style="margin-bottom:10px;">
            <button class="btn" onclick="goWorldMap()">⬅ 返回七大領域入口大廳</button>
          </div>
          <h1>📊 全學期視覺化架構圖與流程圖鑑（Week 1 ～ Week 6 ＆ 總複習）</h1>
          <p>一頁總覽所有核心系統分層、狀態機、封包流向與 SVG 數學曲線，點擊右上方按鈕可直接跳轉至該關卡</p>
        </div>
      </div>
    `;

    window.IOT_GAME_DATA.forEach(world => {
      html += `
        <div style="margin: 28px 0 14px; padding-bottom: 8px; border-bottom: 2px solid var(--primary);">
          <h2 style="color: var(--primary); font-size: 1.35rem;">${world.worldTitle}</h2>
        </div>
      `;
      world.levels.forEach(lv => {
        if (!lv.isHell && LEVEL_DIAGRAMS[lv.id]) {
          html += `
            <div style="margin-bottom: 22px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;flex-wrap:wrap;gap:8px;">
                <strong style="color:#e2e8f0;font-size:1rem;">📌 ${lv.title}</strong>
                <div style="display:flex;gap:8px;">
                  <button class="btn" style="padding:4px 12px;font-size:0.82rem;" onclick="goStageStudy('${lv.id}')">📘 閱讀完整知識卡</button>
                  <button class="btn btn-primary" style="padding:4px 12px;font-size:0.82rem;" onclick="goStageQuiz('${lv.id}')">⚔️ 測驗本關</button>
                </div>
              </div>
              ${LEVEL_DIAGRAMS[lv.id]}
            </div>
          `;
        }
      });
    });

    container.innerHTML = html;
  }

  // 跨裝置（電腦 ⇄ 平板）存檔碼匯出與匯入功能
  window.openSyncModal = function() {
    const currentSave = localStorage.getItem("IOT_RPG_SAVE_V1") || JSON.stringify({ lv: 1, exp: 0, hp: 100, passedLevels: {}, wrongQuestions: [] });
    const encoded = btoa(encodeURIComponent(currentSave));
    const userInput = prompt(
      "【💻 電腦 ⇄ 📱 平板 跨裝置存檔碼】\n\n" +
      "1. 若要「匯出」目前進度：請直接全選複製下方框內的存檔碼。\n" +
      "2. 若要「匯入」其他裝置的進度：請將複製來的存檔碼貼入下方框內並按確定：",
      encoded
    );
    if (userInput && userInput.trim() !== "" && userInput.trim() !== encoded) {
      try {
        const decoded = decodeURIComponent(atob(userInput.trim()));
        const parsed = JSON.parse(decoded);
        if (parsed && typeof parsed === "object" && parsed.passedLevels) {
          localStorage.setItem("IOT_RPG_SAVE_V1", JSON.stringify(parsed));
          alert("✅ 存檔碼匯入成功！畫面將立即更新為最新進度。");
          location.reload();
        } else {
          alert("❌ 存檔碼格式不正確，請確認是否完整複製。");
        }
      } catch (e) {
        alert("❌ 存檔碼解析失敗，請確認是否完整複製。");
      }
    }
  };

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initDiagramsAndSupplements);
  } else {
    initDiagramsAndSupplements();
  }
})();