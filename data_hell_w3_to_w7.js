(function() {
  if (!window.IOT_GAME_DATA) {
    window.IOT_GAME_DATA = [];
  }

  const hellLevelsByWorld = {
    week1: {
      id: "w1-hell",
      isHell: true,
      title: "🔥 地獄模式：Week 1 物聯網導論深度試煉（10 題）",
      bossName: "深淵感知審判長",
      expReward: 250,
      points: [
        {
          title: "地獄模式挑戰規則說明",
          detail: "• 本關卡採用「中文為主、括號僅附英文原名」之嚴格考試規格，完全移除解釋性提示。\n• 每答錯一題將扣除 25 HP，10 題全數答對即可獲得「🔥 地獄制霸」勳章與 250 EXP！"
        }
      ],
      comparisons: [],
      quizzes: [
        {
          q: "對照「物聯網系統五環節（裝置（Device）→ 連線（Connectivity）→ 運算（Compute）→ 資料（Data）→ 應用（Application））」與「從感知到行動五步驟（感知（Sensor）→ 傳輸（Network）→ 處理（Edge / Cloud）→ 分析（Data / AI）→ 行動（Application））」，下列關於第三與第四階段的映射關係何者完全正確？",
          options: [
            "A. 運算（Compute）負責儲存與分析，對應五步驟中的資料與人工智慧（Data / AI）",
            "B. 運算（Compute）負責處理與整合，對應五步驟中的邊緣與雲端（Edge / Cloud）",
            "C. 資料（Data）負責處理與整合，對應五步驟中的邊緣與雲端（Edge / Cloud）",
            "D. 資料（Data）負責產生價值，對應五步驟中的應用（Application）"
          ],
          ans: 1,
          exp: "解析：五環節中「03 運算（Compute）」的職責為處理與整合，對應五步驟中的「3 處理（Edge / Cloud）」；「04 資料（Data）」的職責為儲存與分析，對應五步驟中的「4 分析（Data / AI）」。"
        },
        {
          q: "在課程對「物聯網（IoT）：讓實體世界（Physical World）的狀態被感知」以及四大要素「感測（Sensor）、連線（Network）、資料（Data）、應用（Application）」的界定中，下列敘述何者最精確？",
          options: [
            "A. 不是把世界變成資料，而是把實體世界（Physical World）原本存在的狀態帶進數位系統（Digital World）",
            "B. 不是被動感知實體狀態，而是透過連線（Network）將實體世界（Physical World）直接合成為數位資料（Data）",
            "C. 是在感測（Sensor）層完成實體狀態的儲存與分析，再交由連線（Network）層負責跨系統交換資訊",
            "D. 是將數位系統（Digital World）的規則投射回實體世界（Physical World），以取代感測器（Sensor）的資料擷取"
          ],
          ans: 0,
          exp: "解析：簡報明確界定物聯網（IoT）「不是『把世界變成資料』，而是把實體世界原本存在的狀態，帶進數位系統」。"
        },
        {
          q: "某跨國製造企業導入物聯網（IoT）系統時，要求能將分布於不同廠區、不同型號機台的感測資料匯集於同一平台進行交叉比對，並讓研發部門無須自建底層設施即可直接取用所需的資訊科技（IT）能力。此兩項需求依序對應「為什麼物聯網（IoT）常常和雲端（Cloud）一起出現」的哪兩個因素？",
          options: [
            "A. 大量裝置（Massive Devices）、快速擴充（Rapid Scaling）",
            "B. 跨場域整合（Cross-Site Integration）、服務化（IT as a Service）",
            "C. 大量裝置（Massive Devices）、跨場域整合（Cross-Site Integration）",
            "D. 跨場域整合（Cross-Site Integration）、快速擴充（Rapid Scaling）"
          ],
          ans: 1,
          exp: "解析：物聯網（IoT）結合雲端（Cloud）的四大因素為：1. 大量裝置（同時產生資料，需要集中管理）、2. 快速擴充（設備、使用者、資料量可能持續增加）、3. 跨場域整合（不同地點、不同設備需要放在一起分析）、4. 服務化（把 IT 能力變成可以快速使用的服務）。"
        },
        {
          q: "在「邊緣（Edge）+ 雲端（Cloud）」協同架構中，若要將「模型訓練與服務（Model Training & Serving）」、「跨場域資料整合（Cross-Site Data Integration）」、「斷線仍可運作（Offline Operation）」與「大規模儲存與分析（Large-Scale Storage & Analytics）」四項能力進行歸類，下列配對何者完全正確？",
          options: [
            "A. 邊緣（Edge）負責斷線仍可運作與模型訓練與服務；雲端（Cloud）負責跨場域資料整合與大規模儲存與分析",
            "B. 邊緣（Edge）負責斷線仍可運作；雲端（Cloud）負責跨場域資料整合、大規模儲存與分析及模型訓練與服務",
            "C. 邊緣（Edge）負責跨場域資料整合與斷線仍可運作；雲端（Cloud）負責大規模儲存與分析及模型訓練與服務",
            "D. 邊緣（Edge）負責大規模儲存與分析；雲端（Cloud）負責斷線仍可運作、跨場域資料整合及模型訓練與服務"
          ],
          ans: 1,
          exp: "解析：邊緣（Edge）靠近資料產生的地方，負責「低延遲、即時反應、斷線仍可運作」；雲端（Cloud）負責集中管理與大規模運算，包含「跨場域資料整合、大規模儲存與分析、模型訓練與服務」。"
        },
        {
          q: "某智慧工廠系統在偵測到產線馬達電流異常後，自動比對前兩小時的冷卻水壓與環境溫度紀錄，進而找出了造成本次電流異常的根本原因；但系統尚未推估馬達何時會完全損壞，亦未自動派發維修工單。依據資料價值四階段，該系統目前已涵蓋至哪一階段？",
          options: [
            "A. 監控（Monitoring）",
            "B. 分析（Analysis）",
            "C. 預測（Prediction）",
            "D. 決策（Decision）"
          ],
          ans: 1,
          exp: "解析：資料價值四階段依序為：監控（Monitoring：現在發生什麼？）→ 分析（Analysis：為什麼發生？）→ 預測（Prediction：接下來會怎樣？）→ 決策（Decision：應該做什麼？）。找出異常成因屬於回答「為什麼發生？」，即分析（Analysis）。"
        },
        {
          q: "在「物聯網（IoT）+ 雲端（Cloud）+ 資料（Data）+ 人工智慧（AI）」的四階能力演進模型中，系統由「可視性（Visibility）」推進至「智慧能力（Intelligence）」時，其核心解決的問題是由下列何者轉變為何者？",
          options: [
            "A. 由「我連得上嗎？」轉變為「我知道發生什麼嗎？」",
            "B. 由「我知道發生什麼嗎？」轉變為「我能預測嗎？」",
            "C. 由「我能預測嗎？」轉變為「我能自動採取行動嗎？」",
            "D. 由「我知道發生什麼嗎？」轉變為「為什麼會發生？」"
          ],
          ans: 1,
          exp: "解析：四階能力模型依序為：連線能力（Connectivity：我連得上嗎？）→ 可視性（Visibility：我知道發生什麼嗎？）→ 智慧能力（Intelligence：我能預測嗎？）→ 行動能力（Action：我能自動採取行動嗎？）。"
        },
        {
          q: "根據課程中「案例｜智慧工廠：機器會說話嗎？」的架構圖（實體層（PHYSICAL）→ 資料層（DATA）→ 行動層（ACTION）），關於各區塊內部組件歸屬與狀態演進脈絡，下列敘述何者正確？",
          options: [
            "A. 邊緣／雲端（Edge / Cloud）與人工智慧模型（AI Model）皆位於資料層（DATA）區塊內，負責執行收集、儲存與分析",
            "B. 邊緣（Edge）位於實體層（PHYSICAL）區塊負責收集震動與電流，雲端（Cloud）與人工智慧模型（AI Model）則位於資料層（DATA）區塊負責分析",
            "C. 人工智慧模型（AI Model）位於行動層（ACTION）區塊內，直接負責從「知道機器狀態」推演至「預測可能故障」",
            "D. 狀態演進的順序為「確認機器運轉 → 診斷故障原因 → 自動停機檢修」，皆於行動層（ACTION）區塊完成"
          ],
          ans: 0,
          exp: "解析：在智慧工廠架構圖中，左方實體層（PHYSICAL）為生產機台（震動／溫度／電流）；中間資料層（DATA）包含邊緣／雲端（Edge / Cloud：收集→儲存→分析）與人工智慧模型（AI Model）；右方行動層（ACTION）為預測維護（在故障前安排維修）。"
        },
        {
          q: "課程指出「有資料之後，才真正開始有價值」，且系統的終點並非僅止於連上網。關於物聯網（IoT）價值增長的推移順序與系統能力演進目標，下列組合何者完全符合簡報定義？",
          options: [
            "A. 價值隨「感知 → 傳輸 → 儲存 → 監控」往後移而增加；系統由「連線」走向「收集、儲存與可視化」",
            "B. 價值隨「資料 → 分析 → 決策 → 行動」往後移而增加；系統由「知道」走向「理解、預測與行動」",
            "C. 價值隨「連線 → 監控 → 預測 → 決策」往後移而增加；系統由「感知」走向「分析、預測與自動化」",
            "D. 價值隨「收集 → 儲存 → 分析 → 預測」往後移而增加；系統由「監控」走向「診斷、決策與控制」"
          ],
          ans: 1,
          exp: "解析：簡報明確記載「IoT 的價值會隨著『資料 → 分析 → 決策 → 行動』往後移而增加」，並「讓系統從『知道』逐步走向『理解、預測與行動』」。"
        },
        {
          q: "關於課程總結「2026 的物聯網（IoT）」三大趨勢（邊緣加雲端（Edge + Cloud）、人工智慧乘物聯網（AI × IoT）、資安（Security））的技術內涵與彼此關係，下列敘述何者完全正確？",
          options: [
            "A. 邊緣加雲端（Edge + Cloud）旨在將所有即時反應與斷線運作需求統一收回雲端資料中心，以簡化現場端點架構",
            "B. 人工智慧乘物聯網（AI × IoT）的核心目標是擴大前端感測器的原始資料收集量，並取代邊緣與雲端的運算階層",
            "C. 邊緣加雲端（Edge + Cloud）實現即時性與集中運算並存；人工智慧乘物聯網（AI × IoT）推動系統從收集資料走向理解、預測與決策；而隨裝置與資料量成長，資安（Security）風險亦須同步強化治理",
            "D. 當系統導入人工智慧乘物聯網（AI × IoT）完成自動化決策後，前端連線裝置數量將大幅減少，使資安（Security）管理需求隨之降低"
          ],
          ans: 2,
          exp: "解析：2026 的 IoT 三大趨勢分別為：01 邊緣加雲端（Edge + Cloud：即時性與集中運算並存）、02 人工智慧乘物聯網（AI × IoT：從收集資料走向理解、預測與決策）、03 資安（Security：裝置越多、資料越多，安全風險也越需要被管理）。"
        },
        {
          q: "綜合「物聯網系統五環節」與「實體世界（Physical）→ 物聯網（IoT）→ 邊緣／雲端（Edge / Cloud）→ 資料（Data）→ 人工智慧（AI）→ 智慧應用（Action）」全鏈路架構，下列關於各階層職責邊界與價值轉化的敘述何者最精確？",
          options: [
            "A. 物聯網（IoT）感知與連線層是整條數位價值鏈的最終終點，負責獨立完成跨場域資料儲存與機器學習模型訓練",
            "B. 物聯網（IoT）是將實體世界（Physical）狀態帶入系統的入口而非終點；訊號須先經邊緣／雲端（Edge / Cloud）運算處理與資料（Data）層累積，再由人工智慧（AI）進行分析與決策，最終於智慧應用層觸發具體行動（Action）",
            "C. 資料（Data）層僅存在於遠端公有雲中負責視覺化呈現，所有成因診斷（Analysis）與故障預測（Prediction）皆在前端感測器（Sensor）硬體內直接完成",
            "D. 只要在實體世界（Physical）部署高密度感測器並連上網路（Connectivity），即可不經由邊緣／雲端運算與人工智慧（AI）分析，直接達成預測性維護（Predictive Maintenance）"
          ],
          ans: 1,
          exp: "解析：簡報總結強調「買了感測器 ≠ 完成 IoT」且「IoT 是入口，不是終點」；完整價值鏈必須將實體世界（Physical）的狀態經由 IoT（感知／連線）帶入，再透過 Edge / Cloud（運算處理與整合）、Data（資料儲存）與 AI（分析／決策），最終落地為智慧應用的具體行動（Action）。"
        }
      ]
    },

    week2: {
      id: "w2-hell",
      isHell: true,
      title: "🔥 地獄模式：Week 2 雲端運算與物聯網架構演進深度試煉（10 題）",
      bossName: "虛擬化與時序深淵領主",
      expReward: 250,
      points: [
        {
          title: "地獄模式挑戰規則說明",
          detail: "• 本關卡採用「中文為主、括號僅附英文原名」之嚴格考試規格，完全移除解釋性提示。\n• 每答錯一題將扣除 25 HP，10 題全數答對即可獲得「🔥 地獄制霸」勳章與 250 EXP！"
        }
      ],
      comparisons: [],
      quizzes: [
        {
          q: "在傳統企業實體機房的三層架構（應用層（Apps）／運算層（Compute）／設施層（Facility））與裸機架構（Bare-Metal Architecture）部署模式中，下列關於各層組件歸屬及架構瓶頸的敘述何者正確？",
          options: [
            "A. 網路卡（NIC）與儲存設備（Storage）屬於設施層（Facility）；而「資源孤島（Resource Silos）」是指因缺乏共享儲存導致異地備援機房無法同步資料",
            "B. 不斷電系統（UPS）與發電機屬於設施層（Facility）；而「峰值容量陷阱」是指依尖峰需求進行過度配置（Over-provisioning），以短期尖峰換來長期閒置成本",
            "C. 實體伺服器（Physical Server）與網路卡（NIC）屬於運算層（Compute）；而「硬體採購週期」瓶頸是指因單機對應單一應用導致資源難以彈性共享",
            "D. 機櫃與冷卻系統屬於運算層（Compute）；而「高可用性（High Availability, HA）建置成本」僅發生於雙活（Active-Active）架構，主備（Active-Passive）無須資料同步成本"
          ],
          ans: 1,
          exp: "解析：設施層（Facility）包含機櫃、不斷電系統（UPS）、冷卻、發電機；運算層（Compute）包含實體伺服器（Physical Server）、網路卡（NIC）、儲存（Storage）。單機對應單一應用難以共享為「資源孤島（Resource Silos）」；依尖峰採購造成過度配置（Over-provisioning）為「峰值容量陷阱」。"
        },
        {
          q: "關於伺服器虛擬化（Server Virtualization）架構中的虛擬機監視器（Hypervisor）職責、動態遷移（Live Migration）機制與維運限制，下列何者正確？",
          options: [
            "A. 動態遷移（Live Migration）採用預先複製（Pre-copy）先複製記憶體頁面以縮短切換停頓，但底層仍須維護儲存區域網路（SAN）／網路附加儲存（NAS）、實體交換器（Switch）與光纖通道（Fibre Channel, FC）",
            "B. 動態遷移（Live Migration）採用快照（Snapshot）先凍結磁碟寫入再搬移整個映像檔，且導入虛擬機監視器（Hypervisor）後即可免除底層韌體（Firmware）與硬體相容性的維護",
            "C. 虛擬機監視器（Hypervisor）位於作業系統（OS）與應用程式之間負責排程，能達成伺服器整合（Consolidation），但無法支援跨實體主機的動態負載調整",
            "D. 虛擬化將實體機的光纖通道（Fibre Channel, FC）與儲存區域網路（SAN）抽象化為單一儲存池，使企業不再需要配置實體網路交換器與獨立儲存設備"
          ],
          ans: 0,
          exp: "解析：動態遷移（Live Migration）透過預先複製（Pre-copy）先複製記憶體頁面，切換期間只需短暫停頓；但虛擬化環境底層的實體層（Physical：SAN / NAS、Switch、FC 及硬體折舊、韌體與相容性）仍需企業維護。"
        },
        {
          q: "對照美國國家標準暨技術研究院（NIST SP 800-145）雲端運算的五大特徵，下列針對各特徵內涵的敘述何者完全正確？",
          options: [
            "A. 「廣泛網路存取（Broad Network Access）」強調透過多租戶（Multi-tenant）機制進行隔離與分配，且使用者通常不需知道實體位置",
            "B. 「隨需自選服務（On-demand Self-service）」強調以 HTTP/HTTPS 與 REST API 作為標準網路協定，使手機與嵌入式設備皆可存取",
            "C. 「資源池化（Resource Pooling）」強調由供應商建立共享資源池並進行多租戶（Multi-tenant）隔離與動態指派，使用者通常不需知道實體位置",
            "D. 「計量付費（Measured Service）」強調透過自動伸縮（Auto-scaling）結合垂直擴充（Scale-up）與水平擴充（Scale-out），將買容量轉為按需取得容量"
          ],
          ans: 2,
          exp: "解析：隨需自選服務（On-demand Self-service）為透過主控台（Console）或 API 自助建立資源免提交人工工單；廣泛網路存取（Broad Network Access）為透過標準網路協定供各設備存取；資源池化（Resource Pooling）為建立共享資源池、多租戶（Multi-tenant）隔離與動態指派且不需知道實體位置；快速彈性（Rapid Elasticity）為 Scale-up / Scale-out / Auto-scaling。"
        },
        {
          q: "比較「私有雲（Private Cloud）」、「混合雲（Hybrid Cloud）」與「多雲策略（Multi-Cloud）」的架構特性及網路互聯技術，下列敘述何者正確？",
          options: [
            "A. 混合雲（Hybrid Cloud）的雲端爆發（Cloud Bursting）係指將工作負載同時跨不同雲端供應商部署，以作為容災策略並降低對單一供應商的依賴",
            "B. 私有雲（Private Cloud）常採用 OpenStack 或 VMware Cloud Foundation 建置，雖具備較高的環境控制權，但仍需承擔硬體與平台維運",
            "C. 混合雲（Hybrid Cloud）若採用 IPSec 虛擬私人網路（IPSec VPN）互聯，可獲得不受網際網路（Internet）路徑影響的保證頻寬與穩定低延遲",
            "D. 多雲策略（Multi-Cloud）透過將核心資料留在地端、尖峰負載外溢至公有雲，不僅降低了單一供應商鎖定風險，亦簡化了架構與維運複雜度"
          ],
          ans: 1,
          exp: "解析：私有雲（Private Cloud）具較高控制權但仍需承擔硬體與平台維運；混合雲（Hybrid Cloud）為地端與公有雲並存並支援雲端爆發（Cloud Bursting），其中 IPSec VPN 頻寬與延遲受 Internet 路徑影響，專屬連線（Direct Connect / ExpressRoute）則不經公網；跨不同雲商部署為多雲策略（Multi-Cloud），會增加架構與維運複雜度。"
        },
        {
          q: "關於基礎設施即程式碼（Infrastructure as Code, IaC）、Git 維運（GitOps）以及「裸機（Bare-Metal）→ 虛擬化（Virtualization）→ 雲端（Cloud）」三代架構演進對照表，下列敘述何者正確？",
          options: [
            "A. 手動設定環境易產生組態漂移（Configuration Drift）；基礎設施即程式碼（IaC）透過將實際雲端環境作為期望狀態（Desired State）的唯一來源，反向覆寫版本控制庫",
            "B. 在演進對照表中，虛擬化（Virtualization）的「資源池化」為高、「硬體責任」為企業、「管理方式」為平台導向；雲端（Cloud）的「管理方式」為服務導向",
            "C. 在演進對照表中，虛擬化（Virtualization）的「部署速度」為快、「彈性」為低、「管理方式」為服務導向；裸機（Bare-Metal）的「管理方式」為設備導向",
            "D. 企業儲存架構演進中，區塊儲存（Block Storage）提供 POSIX 共享檔案系統，檔案儲存（File Storage）提供區塊級存取，物件儲存（Object Storage）透過 API 存取海量資料"
          ],
          ans: 1,
          exp: "解析：演進對照表中，裸機（Bare-Metal）為「部署慢、彈性低、硬體責任在企業、資源池化低、設備導向」；虛擬化（Virtualization）為「部署中、彈性中~高、硬體責任在企業、資源池化高、平台導向」；雲端（Cloud）為「部署快、彈性高、硬體責任多由雲商、資源池化高、服務導向」。"
        },
        {
          q: "比較「傳統資訊科技（Traditional IT）負載」與「物聯網（IoT）負載」的差異，並考量時間序列資料（Time-series Data）對傳統關聯式資料庫（RDBMS）造成的衝擊，下列敘述何者正確？",
          options: [
            "A. 傳統資訊科技（IT）為裝置主動產生的事件串流（Event → Stream）模式；物聯網（IoT）則為人類發起的請求回應（Request → Response）模式",
            "B. 時間序列資料（Time-series Data）的核心欄位為裝置識別碼（Device ID）、負載（Payload）與主題（Topic），查詢常以單點隨機更新為主",
            "C. 物聯網（IoT）負載具小封包、高併發與持續寫入特性，瓶頸可能從處理器（CPU）轉為連線數與訊息吞吐；大量寫入會造成關聯式資料庫（RDBMS）索引與 I/O 壓力及鎖競爭",
            "D. 在傳統關聯式資料庫（RDBMS）中導入水平分片（Sharding）雖無法緩解時間序列寫入的 I/O 壓力，但能大幅降低資料分割與跨節點查詢的運維複雜度"
          ],
          ans: 2,
          exp: "解析：物聯網（IoT）為裝置主動產生事件串流（Event → Stream），具小封包（Small Payload）、高併發（High Concurrency）長連線、全天候持續寫入；時間序列資料核心欄位為裝置識別碼（Device ID）+ 指標（Metric）+ 時間戳記（Timestamp），大量寫入會造成 RDBMS 索引與 I/O 壓力及鎖競爭，而水平分片（Sharding）會增加資料分割與運維複雜度。"
        },
        {
          q: "根據課程對雲端服務層次模型（SPI）在物聯網（IoT）場景的應用剖析，下列關於基礎設施即服務（IaaS）、平台即服務（PaaS）與軟體即服務（SaaS）的實務做法與管理責任對照，何者正確？",
          options: [
            "A. 在虛擬機（VM）上自行部署 EMQX 或 Mosquitto 屬於平台即服務（PaaS）模式，底層叢集、負載平衡（LB）與修補（Patch）皆由供應商負責",
            "B. 採用 AWS IoT Core 或 Azure IoT Hub 屬於平台即服務（PaaS）模式，由供應商處理大量底層維運，通常依連線、訊息或其他用量計費",
            "C. 直接使用智慧路燈或智慧抄表平台屬於平台即服務（PaaS）模式，使用者主要透過 REST API 自行建置時序資料庫與管理底層基礎設施",
            "D. 越往雲端服務層次模型（SPI）的上層移動，使用者對底層架構的控制力越高，需要自行管理的底層基礎設施範圍也隨之增加"
          ],
          ans: 1,
          exp: "解析：基礎設施即服務（IaaS）為在 VM 上自行部署 EMQX / Mosquitto 並自行處理叢集、LB 與 Patch；平台即服務（PaaS）為使用 AWS IoT Core / Azure IoT Hub 等託管服務並依連線、訊息計費；軟體即服務（SaaS）為透過網頁介面（Web UI）直接使用智慧路燈／智慧抄表等完整垂直應用。"
        },
        {
          q: "在雲端物聯網（IoT）核心平台中，關於裝置閘道（Device Gateway）、訊息佇列遙測傳輸（MQTT）服務品質（QoS）以及裝置身分認證機制的敘述，下列何者正確？",
          options: [
            "A. 訊息佇列遙測傳輸（MQTT）透過代理伺服器（Broker）負責主題路由（Topic Routing）使發布者（Publisher）與訂閱者（Subscriber）解耦；其中 QoS 1 具確認（ACK）機制但可能重複，QoS 2 確保恰好一次（Exactly once）但交握開銷較高",
            "B. 裝置閘道（Device Gateway）僅支援 MQTT 與受限應用協定（CoAP），無法處理 HTTPS 或 WebSocket 長連線與保持連線（Keep-Alive）機制",
            "C. 裝置身分認證採用單向傳輸層安全（TLS）驗證伺服器憑證即可；若需大規模自動化註冊，則於裝置上線後由人工逐一簽發憑證以取代即時註冊（JIT Provisioning）",
            "D. 在雲端物聯網平台四層架構（裝置（Devices）→ 閘道（Gateway）→ 平台（Platform）→ 資料（Data））中，身分（Identity）、代理（Broker）、規則（Rules）與影子（Shadow）皆歸屬於閘道（Gateway）層"
          ],
          ans: 0,
          exp: "解析：四層架構中，閘道（Gateway）負責 MQTT / HTTPS / CoAP / WebSocket 連線與 Keep-Alive，平台（Platform）層包含 Identity、Broker、Rules、Shadow；MQTT QoS 0 為最多一次（At most once）、QoS 1 為至少一次（At least once，具 ACK 但可能重複）、QoS 2 為恰好一次（Exactly once，交握較多、開銷較高）。"
        },
        {
          q: "關於雲端物聯網（IoT）平台中「規則引擎（Rule Engine）」的分流路由與「裝置影子（Device Shadow）」的狀態同步機制，下列敘述何者正確？",
          options: [
            "A. 規則引擎（Rule Engine）解析訊息負載（Payload）後，每一筆訊息僅能擇一路由至通知事件服務或時序資料庫（TSDB），無法同時進行多路徑分流",
            "B. 裝置影子（Device Shadow）中，報告狀態（reported）代表應用程式希望裝置達到的狀態，期望狀態（desired）代表裝置實際回報的狀態，差值（delta）代表兩者差異",
            "C. 透過裝置影子（Device Shadow），應用程式不必直接依賴裝置在線即可修改期望狀態（desired），待裝置重新上線後即可同步報告狀態（reported）與期望狀態（desired）之間的差值（delta）",
            "D. 規則引擎（Rule Engine）的主要功能是在裝置離線時於雲端保存虛擬狀態快照，而裝置影子（Device Shadow）則負責在訊息中注入時間與裝置識別碼等中繼資料"
          ],
          ans: 2,
          exp: "解析：規則引擎（Rule Engine）負責解析 Payload、篩選轉換並注入中繼資料，且同一份訊息可有多條路徑（正常資料→TSDB / 數據湖、異常資料→告警通知）；裝置影子（Device Shadow）中，報告狀態（reported）為裝置實際回報、期望狀態（desired）為應用希望裝置達到的狀態、差值（delta）為兩者差異。"
        },
        {
          q: "課程在剖析「集中式純雲端物聯網（IoT）的限制」時，針對網路延遲組成與四大限制提出了具體定義。下列敘述何者完全正確？",
          options: [
            "A. 傳播延遲（Propagation Delay）是指封包在路由器排隊等待的時間，傳輸延遲（Transmission Delay）是指光訊號在光纖介質中的傳播時間，兩者皆隨實體距離增加而拉長",
            "B. 傳播延遲（Propagation Delay）是指介質中的傳播時間，傳輸延遲（Transmission Delay）是指封包送出的時間，排隊延遲（Queueing Delay）則是指路由器排隊時間；跨雲端延遲具不確定性，難以滿足毫秒級閉迴路控制",
            "C. 將高畫質影像原始資料全數上傳雲端僅會消耗上行頻寬，資料從雲端出站（Egress）並不會產生額外費用，故邊緣壓縮與特徵擷取純粹是為了解決物理延遲",
            "D. 基地台切換、光纖故障或網域名稱系統（DNS）中斷屬於「法規（Regulation）」維度的限制，必須透過資料去識別化與跨國加密傳輸來消除單點故障（SPOF）"
          ],
          ans: 1,
          exp: "解析：傳播延遲（Propagation Delay）為介質中的傳播時間、傳輸延遲（Transmission Delay）為封包送出的時間、排隊延遲（Queueing Delay）為路由器排隊時間；高畫質影像上傳消耗上行頻寬且資料出站（Egress）產生成本屬於經濟（Economic）限制；基地台切換、光纖故障、DNS 中斷與離線自治（Offline Autonomy）屬於可用性（Availability）限制。"
        }
      ]
    },

    week3: {
      id: "w3-hell",
      isHell: true,
      title: "🔥 地獄模式：Week 3 雲端運算商業與產業影響深度試煉（10 題）",
      bossName: "資本與治理深淵主宰",
      expReward: 250,
      points: [
        {
          title: "地獄模式挑戰規則說明",
          detail: "• 本關卡採用「中文為主、括號僅附英文原名」之嚴格考試規格，完全移除解釋性提示。\n• 涵蓋商業視角、總體擁有成本（TCO）冰山、服務水準（SLI / SLO / SLA）、雲端財務維運（FinOps）、四大產業轉型、零信任（Zero Trust）、電力使用效率（PUE）與逆向出雲（Cloud Repatriation）。"
        }
      ],
      comparisons: [],
      quizzes: [
        {
          q: "在課程「商業視角看技術」與「企業資訊科技（IT）成本的冰山」模型中，關於不同角色的關注焦點以及冰山三層成本（看得見／看不見／容易漏算）的歸類，下列何者完全正確？",
          options: [
            "A. 財務長（CFO）關注上市速度（Time-to-Market）與策略彈性；而「電力、冷卻、機房、專線」屬於冰山模型中「容易漏算」的成本",
            "B. 執行長（CEO）關注現金流、總體擁有成本（TCO）與投資報酬率（ROI）；而「維運人力、資安、稽核、設備汰換與停機成本」屬於「看不見」的成本",
            "C. 財務長（CFO）關注現金流、總體擁有成本（TCO）、投資報酬率（ROI）與成本可預測性；而「電力、冷卻、機房、專線、維護與備援」屬於「看不見」的成本，「維運人力、資安、稽核、設備汰換與停機成本」屬於「容易漏算」的成本",
            "D. 技術團隊關注總體擁有成本（TCO）與營收機會；而伺服器、儲存、網路設備的採購價格與專線費用皆屬於冰山模型中「看得見」的成本"
          ],
          ans: 2,
          exp: "解析：技術團隊關注架構彈性、效能、可擴充性與技術可行性；財務長（CFO）關注現金流、TCO、ROI、成本可預測性；執行長（CEO）關注上市速度、營收機會、策略彈性與風險。成本冰山中，「看得見」為伺服器／儲存／網路採購價；「看不見」為電力、冷卻、機房、專線、維護與備援；「容易漏算」為維運人力、資安、稽核、設備汰換與停機成本。"
        },
        {
          q: "比較「自建地端機房（On-Premises）」與「公有雲（Public Cloud）」的總體擁有成本（TCO）曲線、試錯成本非對稱性以及適用工作負載條件，下列敘述何者正確？",
          options: [
            "A. 自建地端機房在進入營運階段後僅有硬體折舊費，不再產生網路頻寬與專業維運人事費；公有雲則呈現前期階梯狀資本支出（CapEx）曲線",
            "B. 當企業工作負載屬於「長期高利用率、負載高度穩定、大量資料長期留存、高度依賴特定雲服務」時，採用公有雲在成本上可能較為不利",
            "C. 傳統資本模式的沉沒成本（Sunk Cost）極低，適合需求不確定與小規模驗證；雲端模式則透過將彈性成本轉為固定成本以降低創新門檻",
            "D. 公有雲總體擁有成本（TCO）曲線在第零天（Day 0）需預先買足峰值容量，其成本隨時間呈固定水平線，與業務規模增長無關"
          ],
          ans: 1,
          exp: "解析：公有雲在「需求不確定、需要快速擴縮、產品仍在驗證、希望降低前期資本支出」時可能有利；但在「長期高利用率、負載高度穩定、大量資料長期留存、高度依賴特定雲服務」時則可能不利。"
        },
        {
          q: "關於「服務水準指標（SLI）」、「服務水準目標（SLO）」、「服務水準協議（SLA）」三者的定義關係，以及可用性（Availability）「幾個九」與停機商業損失的剖析，下列何者正確？",
          options: [
            "A. 服務水準目標（SLO）是實際量測的服務指標，服務水準指標（SLI）是內部希望達成的目標，而服務水準協議（SLA）未達標時雲商須負擔無限營業賠償",
            "B. 99.9%（三個九）代表一年允許停機 52.6 分鐘，99.99%（四個九）代表一年允許停機 8.76 小時；且可用性提升時工程成本呈線性增加",
            "C. 99.99%（四個九）代表一年允許停機 52.6 分鐘，99.999%（五個九）為 5.26 分鐘；停機損失中「客服、人工補救、營運延遲」屬於間接損失，「客戶信任、品牌與合規風險」屬於長期影響",
            "D. 停機造成的「交易中斷、訂單流失、服務退款」屬於間接損失；而服務水準協議（SLA）對外承諾的目標值通常必須設定得比內部服務水準目標（SLO）更嚴格"
          ],
          ans: 2,
          exp: "解析：99.9%（三個九）年允許停機 8.76 小時、99.99%（四個九）為 52.6 分鐘、99.999%（五個九）為 5.26 分鐘。停機商業損失分為：直接損失（交易中斷、訂單流失、服務退款）、間接損失（客服、人工補救、營運延遲）、長期影響（客戶信任、品牌與合規風險）。"
        },
        {
          q: "針對雲端帳單失控成因、雲端財務維運（FinOps）三階段生命週期（認知（Inform）→ 最佳化（Optimize）→ 營運（Operate））以及四大成本最佳化策略，下列敘述何者正確？",
          options: [
            "A. 在雲端財務維運（FinOps）中，「標籤與成本分攤（Tag / Cost Allocation）」屬於最佳化（Optimize）階段，而「規格最佳化（Rightsizing）」屬於營運（Operate）階段",
            "B. 執行規格最佳化（Rightsizing）時，只要觀測到處理器（CPU）使用率偏低即可直接調降規格，無須考量記憶體、讀寫次數（IOPS）、尖峰與服務水準協議（SLA）",
            "C. 可中斷資源（Spot Instances）適合批次分析、部分持續整合（CI）與可重試工作，前提是應用程式必須能容忍中斷、重試或重新排程；而長期承諾（Reserved / Savings Plans）則適合長期、穩定、可預測的工作負載",
            "D. 孤兒磁碟、快照、閒置位址（IP）與負載平衡器（Load Balancer）在虛擬機（VM）關機後皆不會產生費用，帳單失控純粹源於採購折扣不足而非架構設計問題"
          ],
          ans: 2,
          exp: "解析：FinOps 生命週期中，認知（Inform）負責看懂成本（Tag / Cost Allocation）、最佳化（Optimize）負責找浪費（Rightsizing / 資源最佳化）、營運（Operate）負責建立治理（預算、告警、自動化）。執行 Rightsizing 時「不要只看 CPU」，還須看記憶體、IO、尖峰與 SLA；可中斷資源（Spot）適合可容忍中斷重試的工作，長期承諾（Reserved / Savings Plans）適合長期穩定可預測的負載。"
        },
        {
          q: "關於企業上雲帶來的組織轉型、人才斷層對策、雲端卓越中心（CCoE）以及「企業上雲決策四個象限」，下列敘述何者正確？",
          options: [
            "A. 開發維運一體化（DevOps）將傳統流程改為開發、測試、維運三部門嚴格分離交接，使開發團隊無須理解身分識別與存取管理（IAM）、網路與成本",
            "B. 雲端卓越中心（CCoE）是由外部系統整合商（SI）獨立組成的代管團隊，旨在取代企業內部的架構、資安、財務與業務部門",
            "C. 企業上雲決策四個象限包含：業務（是否需要彈性與快速上市）、法規（資料、跨境與委外是否允許）、技術（架構是否適合遷移／重構）、財務（TCO、ROI 與長期成本是否合理）",
            "D. 面對雲端人才斷層，既有資訊科技（IT）人員已熟稔分散式雲端架構，僅需針對高階主管進行基礎設施即程式碼（IaC）之技術培訓"
          ],
          ans: 2,
          exp: "解析：企業上雲決策四象限為業務、法規、技術、財務；雲端卓越中心（CCoE）是由企業內部的「架構、資安、財務與業務」共同建立雲端標準、治理規則與共用能力，把各自上雲變成企業治理。"
        },
        {
          q: "在智慧製造（工業物聯網（IIoT）／工業 4.0（Industry 4.0））轉型實務中，關於製造現場的營運科技（OT）階層、資訊科技與營運科技（IT/OT）融合流程以及產品即服務（Product-as-a-Service），下列敘述何者正確？",
          options: [
            "A. 製造現場營運科技（OT）階層由下而上依序為：感測與致動 → 分散式控制系統（DCS）→ 可程式邏輯控制器（PLC）→ 監控與資料採集（SCADA）→ 上層系統（MES / ERP）",
            "B. 製造現場營運科技（OT）階層中，可程式邏輯控制器（PLC）負責控制機械，監控與資料採集（SCADA）負責監控與採集，分散式控制系統（DCS）負責整合製程控制，最上層則為製造執行系統與企業資源規劃（MES / ERP / Analytics）",
            "C. 在資訊科技與營運科技（IT/OT）融合架構中，感測器與可程式邏輯控制器（PLC）會跳過邊緣（Edge），直接將未轉換的工業協定封包寫入跨廠區決策儀表板（Dashboard）",
            "D. 產品即服務（Product-as-a-Service）的核心是透過雲端供應鏈資訊同步，將設備由按使用量計費轉回傳統一次性硬體買斷模式"
          ],
          ans: 1,
          exp: "解析：製造現場的 OT 階層由下而上為：感測與致動 → PLC（控制機械）→ SCADA（監控與資料採集）→ DCS／控制層（整合製程控制）→ 上層系統（MES / ERP / Analytics）；IT/OT 融合流程為：設備（感測器／PLC）→ Edge（協定轉換、過濾、即時處理）→ Cloud（集中儲存、分析、AI）→ Dashboard（跨廠區監控與決策）。"
        },
        {
          q: "比較零售電商面對「潮汐負載」時的「單體電商架構（Monolith）」與「現代雲端零售架構」，以及全通路（Omnichannel）的運作核心，下列何者正確？",
          options: [
            "A. 單體電商在尖峰時因大量請求同時打進同一套服務，使資料庫成為瓶頸並導致鎖競爭（Lock Contention）增加、交易延遲與超賣風險；現代雲端零售則依序透過「內容傳遞網路／快取（CDN / Cache）→ 佇列（Queue）→ 非同步處理（Async）→ 資料庫／服務（DB / Service）」把尖峰拆開處理",
            "B. 現代雲端零售在尖峰時透過將所有非同步佇列（Queue）關閉，強制讓前端門市、應用程式（App）與網站各自維護獨立分離的本地庫存資料庫，以實現全通路（Omnichannel）",
            "C. 個人化推薦與動態定價完全依賴每季一次的離線關聯式資料庫批次報表，無須結合點擊、搜尋、停留等串流資料（Streaming Data）與機器學習模型",
            "D. 雲端彈性讓零售企業必須依照年度最高促銷尖峰永久購買固定硬體容量，以消除平日低流量期間的資源閒置"
          ],
          ans: 0,
          exp: "解析：單體電商在尖峰時所有流量集中打進同一服務與資料庫，導致鎖競爭增加、交易延遲與超賣；現代雲端零售透過「CDN / Cache（熱門內容就近提供）→ Queue（吸收瞬間流量）→ Async（非同步處理訂單）→ DB / Service（各功能獨立擴縮）」拆解尖峰；而全通路（Omnichannel）的核心是門市、App、網站與倉儲共享同一套即時庫存邏輯。"
        },
        {
          q: "比較「金融業」與「智慧醫療（醫療物聯網（IoMT）+ 雲端）」在上雲轉型時的核心系統策略與資料特性，下列敘述何者完全正確？",
          options: [
            "A. 金融業應優先將大型主機的核心帳務（Core）全面廢除重寫；而反洗錢（AML）風控則應由雲端串流與圖形分析（Graph Analytics）退回傳統批次分析以提高穩定度",
            "B. 金融業採「核心到邊緣（Core-to-Edge）」保留核心記帳以維持信任，透過標準應用程式介面（API）將外圍行動、理財與風控雲端化；智慧醫療中，醫院資訊系統（HIS）以掛號、病歷等結構化資料為主，醫療影像儲傳系統（PACS）則為單筆資料量大、保存週期長的電腦斷層／磁振造影（CT / MRI）影像",
            "C. 智慧醫療中，醫院資訊系統（HIS）專責儲存大容量電腦斷層（CT）影像，醫療影像儲傳系統（PACS）則專責處理結構化門診掛號紀錄；且醫療影像雲端化的唯一目的是節省地端硬碟空間而非跨院安全共享",
            "D. 數位純網銀因為沒有傳統實體分行網絡的包袱，在將銀行服務轉為應用程式介面（API）後，即可免除核心金融能力、法規遵循與資安信任的要求"
          ],
          ans: 1,
          exp: "解析：金融業遵循「不要輕易動核心帳務」，採 Core-to-Edge（Core 核心帳務維持信任 → API 建立標準介面 → Cloud Services 行動／理財／風控 → Channel App / Web / Open Banking），並以串流資料、規則引擎與圖形分析（Graph Analytics）強化雲端風控與 AML；醫療業中 HIS 為掛號、病歷等結構化資料，PACS 為 CT / MRI 等單筆量大、保存週期長的醫療影像，雲端化重點是在病患授權與合規下安全共享。"
        },
        {
          q: "關於供應商鎖定（Vendor Lock-in）、跨雲遷移成本、零信任架構（Zero Trust）以及軟體供應鏈（Software Supply Chain）安全，下列敘述何者正確？",
          options: [
            "A. 優先採用通用標準（Portability）雖比深度使用雲商專屬服務（Proprietary Services）具備更高的跨平台可攜性，但需自行組裝較多組件且前期工程成本較高；而跨雲遷移真正昂貴的三大成本包含程式依賴、資料遷移與資料出站費用（Egress）",
            "B. 零信任（Zero Trust）的三個核心原則為「內網預設信任、最高權限配置、邊界防火牆防禦」，在雲端環境中機器所在的網段位置遠比身分（Identity）更關鍵",
            "C. 雲端資安中「儲存桶公開、過寬安全群組」屬於底層虛擬機監視器（Hypervisor）硬體漏洞，無法透過策略即程式碼（Policy as Code）與持續掃描修正",
            "D. 軟體供應鏈（Software Supply Chain）攻擊僅針對企業自行撰寫的商業邏輯原始碼，與開源套件依賴、高權限持續整合／持續交付（CI/CD）管線及軟體物料清單（SBOM）無關"
          ],
          ans: 0,
          exp: "解析：深度使用雲商專屬服務（Proprietary Services）開發快、維運簡單但遷移成本高；通用標準優先（Portability）可攜性高但自行組裝較多、前期工程成本較高。跨雲遷移三大昂貴依賴為程式依賴（IAM / API / DB / 監控不同）、資料遷移與出站網路費（Egress）。零信任三原則為「驗證、最小權限、假設已入侵」，以身分為新邊界（Identity is the New Perimeter）。"
        },
        {
          q: "關於產業合規（支付卡產業資料安全標準（PCI DSS）／健康保險可攜與責任法（HIPAA））、綠色雲端（Green Cloud）之電力使用效率（PUE）指標以及逆向出雲（Cloud Repatriation）的評估條件，下列敘述何者正確？",
          options: [
            "A. 只要所選用的公有雲供應商已取得 PCI DSS 與 HIPAA 認證，企業部署於該雲端平台上的整個應用系統即自動達成完全合規",
            "B. 電力使用效率（PUE）的計算公式為「資訊科技（IT）設備能源 ÷ 資料中心總能源」，該數值越趨近於 0 代表冷卻與照明等非資訊科技能源開銷越低",
            "C. 電力使用效率（PUE）為「資料中心總能源 ÷ 資訊科技（IT）設備能源」，越接近 1 代表非資訊科技能源開銷越低；而「負載長期穩定、硬體利用率高、具備強大維運團隊、架構高度可攜」的工作負載較適合評估逆向出雲（Cloud Repatriation）",
            "D. 當工作負載呈現「需求快速成長、流量波動大、跨區域服務、需要大量彈性人工智慧（AI）算力」時，最優先適合執行逆向出雲（Cloud Repatriation）移回地端自建機房"
          ],
          ans: 2,
          exp: "解析：簡報明確指出「供應商有認證 ≠ 企業整個系統自動合規」；PUE = 資料中心總能源 ÷ IT 設備能源，越接近 1 表示非 IT 能源開銷越低；而適合評估逆向出雲（Cloud Repatriation）的條件為「負載長期穩定、硬體利用率高、具備強大維運團隊、架構高度可攜」。"
        }
      ]
    },

    week4: {
      id: "w4-hell",
      isHell: true,
      title: "🔥 地獄模式：Week 4 IaaS 基礎架構服務模式深度試煉（10 題）",
      bossName: "軟體定義基建魔神",
      expReward: 250,
      points: [
        {
          title: "地獄模式挑戰規則說明",
          detail: "• 本關卡採用「中文為主、括號僅附英文原名」之嚴格考試規格，完全移除解釋性提示。\n• 涵蓋傳統代管 vs. 雲端 IaaS、三層地理容災、虛擬化三大損耗、噪鄰與黑盒子、CaaS 算力超配、SaaS 三大儲存與底層容錯、NaaS 網路與雙層防火牆。"
        }
      ],
      comparisons: [],
      quizzes: [
        {
          q: "比較「傳統機房代管（Co-location）」、「傳統專屬伺服器租用（Dedicated Hosting）」與「現代雲端基礎架構即服務（Cloud IaaS）」，下列敘述何者完全正確？",
          options: [
            "A. 在傳統機房代管（Co-location）中，企業無須購買實體伺服器與交換器，由機房商直接交付未虛擬化的裸機最高權限（Root）帳密",
            "B. 在傳統專屬伺服器租用（Dedicated Hosting）中，企業可透過 RESTful API 在數十秒內動態進行水平擴充（Scale-out）並按秒計費",
            "C. 現代雲端基礎架構即服務（Cloud IaaS）受惠於硬體輔助虛擬化（Intel VT-x / AMD-V）與軟體定義網路（SDN）的成熟，將實體硬體轉化為可透過 API、軟體開發套件（SDK）與基礎設施即程式碼（IaC）即時調度的資源池",
            "D. 在基礎架構即服務（IaaS）共擔責任邊界中，雲端服務商負責管理至客端作業系統（Guest OS）修補與資料庫備份，租戶僅負責業務程式碼"
          ],
          ans: 2,
          exp: "解析：傳統機房代管（Co-location）由企業自購實體伺服器、交換器與儲存陣列運至 IDC 上架，機房商僅管機櫃空間、UPS 與冷卻；傳統專屬租用（Dedicated Hosting）為租用未虛擬化整台裸機，需人工工單裝機耗時數小時至數天；現代雲端 IaaS 則藉由硬體輔助虛擬化（Intel VT-x / AMD-V）與軟體定義網路（SDN）將資源轉為可透過 API / SDK / IaC 秒級調度的資源池。"
        },
        {
          q: "在雲端基礎架構即服務（IaaS）的分散式地理容災佈局中，關於「故障網域（Fault Domain）」、「可用區（Availability Zone, AZ）」與「區域（Region）」三層嵌套物理隔離架構，下列敘述何者正確？",
          options: [
            "A. 故障網域（Fault Domain）是指同一都會區內多座獨立水電與空調的資料中心，透過低延遲專屬光纖骨幹相連",
            "B. 可用區（Availability Zone, AZ）是指同一機房內將實體伺服器分散至不同機櫃（Rack），藉由獨立供電迴路（PDU）與機櫃頂端交換器（ToR Switch）限制單櫃故障衝擊",
            "C. 故障網域（Fault Domain）具備獨立供電迴路（PDU）與機櫃頂端交換器（ToR Switch）以隔離機櫃級故障；可用區（Availability Zone, AZ）為同城市獨立水電與空調的多座資料中心以低延遲光纖互聯；跨區域（Region）則透過跨國非同步複寫防範大型災難",
            "D. 跨區域（Region）部署在跨洲際資料中心之間預設採用零延遲同步複寫（Synchronous Replication），以消除光纖距離限制"
          ],
          ans: 2,
          exp: "解析：由小到大三層隔離依序為：1. 故障網域（Fault Domain）：將實體機分散至不同機櫃，具獨立 PDU 供電與 ToR 交換器；2. 可用區（AZ）：同一都會區內物理隔離、獨立水電空調的多座資料中心，以低延遲專屬光纖互聯；3. 區域（Region）：跨國／跨大陸地理節點非同步複寫。"
        },
        {
          q: "剖析基礎架構即服務（IaaS）的先天工程限制一「虛擬化效能損耗（Hypervisor Overhead）」，針對處理器（CPU）、記憶體與輸入／輸出（I/O）三大損耗機制的描述，下列何者完全正確？",
          options: [
            "A. 在三大損耗中以處理器（CPU）運算損耗最重；記憶體則透過單層轉譯直接將客端虛擬位址（GVA）映射為主機實體位址（HPA），無須經過擴展分頁表（EPT / NPT）",
            "B. 記憶體轉譯需經歷「客端虛擬位址（GVA）→ 客端假實體位址（GPA）→ 主機真實實體位址（HPA）」兩層轉譯與擴展分頁表（EPT / NPT）漫遊；而在三大損耗中以輸入／輸出（I/O）模擬瓶頸（中斷攔截＋軟體模擬＋多次記憶體複製）最重",
            "C. 當客端作業系統（Guest OS）執行一般加減法運算時皆會觸發虛擬機退出（VM-Exit）與上下文切換（Context Switch），而網路卡與硬碟 I/O 請求則不經過虛擬機監視器（Hypervisor）直接存取硬體",
            "D. 擴展分頁表（EPT / NPT）的作用是徹底消除轉換後備緩衝區未命中（TLB Miss），使虛擬機的記憶體存取延遲低於實體裸機"
          ],
          ans: 1,
          exp: "解析：虛擬化三大損耗為：1. CPU 運算損耗（敏感特權指令被 Hypervisor 截獲觸發 VM-Exit ⇄ VM-Entry 與 Context Switch）；2. 記憶體轉譯延遲（GVA → GPA → HPA 兩層位址轉譯、EPT / NPT 漫遊與 TLB Miss）；3. I/O 模擬瓶頸（最重！含中斷攔截、軟體模擬與多次記憶體複製）。"
        },
        {
          q: "關於基礎架構即服務（IaaS）多租戶環境下的「噪鄰效應（Noisy Neighbor）」與「底層硬體黑盒子與可見性缺失」，下列技術成因剖析何者正確？",
          options: [
            "A. 噪鄰效應僅發生在虛擬處理器（vCPU）超配時；底層實體處理器的第三階快取（L3 Cache）、記憶體匯流排（Memory Bus）與 25GbE 實體網卡佇列皆已實現 100% 硬體物理隔離",
            "B. 當虛擬機的虛擬處理器（vCPU）被宿主機排程器暫停（Paused）時，會導致虛擬時間戳記計數器（VTSC）落後而產生微秒級「時鐘漂移（Clock Drift）」，進而衝擊分散式資料庫的時間戳記；此外租戶亦無法觀測硬體效能計數器（PMC）與真實實體機櫃網路拓撲",
            "C. 租戶在虛擬私有雲（VPC）內只要將兩台虛擬機配置於同一個虛擬子網（如 `10.0.1.0/24`），即保證這兩台虛擬機在實體機房中必定插在同一個機櫃頂端交換器（ToR Switch）下",
            "D. 硬體效能計數器受限（PMC Blocked）是指租戶無法查看虛擬機作業系統內的硬碟剩餘空間與索引節點（Inode）使用率"
          ],
          ans: 1,
          exp: "解析：多租戶下 L3 快取、記憶體匯流排與實體網卡佇列依然物理共用，引發噪鄰效應；而黑盒子可見性缺失包含：1. 時鐘漂移（Clock Drift：vCPU 被排程暫停導致虛擬計時器微秒誤差，衝擊分散式 DB 時間戳）、2. 硬體計數器受限（PMC Blocked，無法觀測 L1/L2 快取命中率與分支預測失誤）、3. 物理網路拓撲未知。"
        },
        {
          q: "根據課程中基礎架構即服務（IaaS）的「四大部署模式決策矩陣（公有（Public）、混合（Hybrid）、託管私有（Hosted Private）、私有（Private））」，下列針對各模式在四個評估維度的對照何者完全正確？",
          options: [
            "A. 託管私有（Hosted Private）的資料主權為「高」、擴展彈性為「中」、前期資本支出（CAPEX）為「中」、維運團隊需求為「中」，能排除多租戶噪鄰干擾並免去企業自雇機電工務團隊",
            "B. 混合（Hybrid）的資料主權為「最高」、擴展彈性為「低」、前期資本支出（CAPEX）為「最高」，最適合軍事國防與中央銀行核心帳務系統",
            "C. 私有（Private）的資料主權為「最高」、擴展彈性為「高」、前期資本支出（CAPEX）為「低」，因為採用開源軟體建置故無須內部維運團隊",
            "D. 公有（Public）的資料主權為「中」、擴展彈性為「高」、前期資本支出（CAPEX）為「中」，且雲端服務商會代為負責虛擬機內部的核心漏洞（Kernel CVE）修補與檔案系統修復（fsck）"
          ],
          ans: 0,
          exp: "解析：依據簡報第 158 頁四大部署模式決策矩陣：公有（資料主權：低、擴展彈性：高、前期 CAPEX：低、維運團隊：低）；混合（中、高、中、中）；託管私有（高、中、中、中）；私有（最高、低、最高、高）。"
        },
        {
          q: "在算力即服務（Compute as a Service, CaaS）底層機制中，關於虛擬處理器（vCPU）物理映射、超額配置（Overcommit）以及實例規格分型（vCPU : RAM 比例）的敘述，下列何者正確？",
          options: [
            "A. 一個虛擬處理器（vCPU）在物理層面對應宿主機的一顆完整實體處理器插槽（Socket）；且記憶體超配是透過完全公平排程器（CFS）將記憶體直接壓縮至硬碟",
            "B. 算力即服務（CaaS）基於統計多工（Statistical Multiplexing）進行超額配置，處理器超配比常見為 1:2 至 1:4，記憶體超配則利用記憶體氣球（Memory Ballooning）與內核同頁合併（KSM）動態回收閒置記憶體；而規格分型中，通用型比例為 1:4、運算最佳化為 1:2、記憶體最佳化為 1:8 至 1:16",
            "C. 規格分型中，運算最佳化（Compute Optimized）的 vCPU 與 RAM 比例為 1:16，專供 Redis 快取使用；記憶體最佳化（Memory Optimized）的比例則為 1:2，專供批次影音轉碼使用",
            "D. 實體核心綁定（CPU Pinning）的作用是讓多個不同租戶的虛擬處理器（vCPU）高頻率輪流切換至同一顆實體核心，以提高超額配置比例"
          ],
          ans: 1,
          exp: "解析：一個 vCPU 對應宿主機 CPU 的一個超線程（Hardware Thread），低延遲場景用 CPU Pinning 綁定實體核心排除抖動；超額配置（Overcommit）基於統計多工，CPU 超配比常為 1:2~1:4，記憶體超配靠記憶體氣球（Memory Ballooning）與內核同頁合併（KSM）；規格分型黃金比例為通用型 1:4、運算最佳化 1:2、記憶體最佳化 1:8~1:16。"
        },
        {
          q: "關於算力即服務（CaaS）中的異質運算（Heterogeneous Computing）、裸機雲實例（Bare-Metal Instance）以及實例生命週期四狀態機（初始化（Provisioning）→ 運轉中（Running）→ 已停止（Stopped）→ 已銷毀（Terminated）），下列何者正確？",
          options: [
            "A. 裸機雲實例（Bare-Metal Instance）移除了虛擬機監視器（Hypervisor）層以消除 100% 虛擬化損耗並支援巢狀虛擬化（Nested Virtualization），因此無法使用雲端 API 秒級開關機與軟體定義網路（SDN）掛載",
            "B. 當虛擬機處於「已停止（Stopped）」狀態時，系統已釋放實體處理器（CPU）與記憶體並停止運算計費，但同時也徹底刪除了開機虛擬磁碟與私有位址（Private IP）",
            "C. 當虛擬機處於「已停止（Stopped）」狀態時，雖釋放了實體處理器（CPU）與記憶體（停止運算計費），但依然保留虛擬磁碟與網路私有位址（Private IP）；而異質運算可透過 NVIDIA 多執行個體 GPU（MIG）將實體晶片硬體級切分為獨立的虛擬繪圖處理器（vGPU）分區",
            "D. 自動伸縮組（Auto-scaling）在觸發擴展或縮減後，必須將冷卻時間（Cooldown Period）設為零，才能即時反應每秒鐘的處理器震盪（Flapping）"
          ],
          ans: 2,
          exp: "解析：裸機雲實例（Bare-Metal Instance）無 Hypervisor 層（零虛擬化損耗、零噪鄰、支援 Nested Virtualization），且依然保留雲端 API 秒級開關機與 SDN 無縫掛載；而在 Stopped 狀態下，釋放實體 CPU 與 RAM（停收運算費），但保留虛擬磁碟與私有 IP（仍收磁碟與 IP 費）。"
        },
        {
          q: "在基礎架構即服務（IaaS）的儲存即服務（Storage as a Service, SaaS）中，比較區塊儲存（Block Storage）的「網路型持久磁碟」與「本機暫態儲存（Ephemeral / Instance Store）」，下列敘述何者正確？",
          options: [
            "A. 網路型持久磁碟透過代幣桶演算法（Token Bucket）提供突發（Bursting）機制，當高負載持續耗盡代幣時，每秒讀寫次數（IOPS）會瞬間驟降至基礎基準線而引發效能懸崖；關鍵生產資料庫應改採預置固定讀寫（Provisioned IOPS）",
            "B. 本機暫態儲存（Ephemeral / Instance Store）是透過內部儲存網路（iSCSI / NVMe-oF）掛載的磁碟，支援在不停機狀態下從主機 A 解除綁定（Detach）並熱插拔掛載至主機 B",
            "C. 本機暫態儲存（Ephemeral / Instance Store）直接插載於宿主機主機板上，具備微秒級延遲與數十萬 IOPS，當虛擬機在雲端後台被執行停止（Stop）操作時，其內資料依然持久保留不消失",
            "D. 區塊儲存（Block Storage）的吞吐量（Throughput, MB/s）是衡量關聯式資料庫隨機小檔讀寫的核心指標，而每秒讀寫次數（IOPS）則是衡量大型備份檔連續傳輸速度的指標"
          ],
          ans: 0,
          exp: "解析：網路型持久磁碟經 iSCSI / NVMe-oF 掛載、支援 Detach 熱插拔，一般磁碟用代幣桶（Token Bucket）累積 I/O 代幣突發，耗盡代幣會驟降至基準線引發「效能懸崖陷阱」，關鍵 DB 應採預置固定 IOPS（Provisioned IOPS）。本機暫態儲存（Ephemeral Store）為宿主機直插 NVMe SSD，具非持久性（Non-persistent），一旦 VM 被 Stop 或實體機損壞，資料永久消失。"
        },
        {
          q: "比較共享檔案儲存（File Storage）與物件儲存（Object Storage）的架構特性，以及分散式儲存底層容錯機制（三副本複製（Triple Replication）vs. 糾刪碼（Erasure Coding））與快照（Snapshot）技術，下列何者正確？",
          options: [
            "A. 共享檔案儲存（File Storage）採用扁平儲存桶（Bucket）命名空間與 RESTful API 存取；物件儲存（Object Storage）則提供階層式目錄樹並支援標準 POSIX 與 NFS / SMB 協定",
            "B. 區塊儲存（Block Storage）多採用空間利用率達 67% 的糾刪碼（Erasure Coding）以保證低延遲；物件儲存（Object Storage）則多採用空間利用率僅 33% 的三副本複製（Triple Replication）",
            "C. 區塊儲存（Block Storage）多採三副本複製（Triple Replication，空間利用率 33%）保證低延遲，物件儲存（Object Storage）多採糾刪碼（Erasure Coding 如 8+4 模式，空間利用率 67%）極大化性價比且支援自訂元資料（Metadata）；而儲存快照則採用寫入時複製（Copy-on-Write, CoW）達成秒級增量備份",
            "D. 寫入時複製（Copy-on-Write, CoW）快照在建立瞬間會將整顆虛擬磁碟的所有區塊完整複製一份至新空間，因此建立快照時必須將虛擬機停機數分鐘"
          ],
          ans: 2,
          exp: "解析：三副本複製（Triple Replication）空間利用率僅 33%，區塊儲存多採此模式保低延遲；糾刪碼（Erasure Coding，如 8+4）空間利用率達 67%，物件儲存多採此模式以極大化海量儲存性價比，並支援自訂鍵值元資料（Metadata）作為物聯網數據湖基石。快照則採寫入時複製（Copy-on-Write, CoW），拍下瞬間僅標記元數據指針，耗時僅數毫秒。"
        },
        {
          q: "在網路即服務（Network as a Service, NaaS）中，關於軟體定義網路（SDN）、虛擬可擴充局部網路（VXLAN）、雙層虛擬防火牆以及負載平衡即服務（LBaaS）的比較，下列敘述何者完全正確？",
          options: [
            "A. 傳統實體虛擬區域網路（VLAN）支援 24 位元標籤（1,600 萬個網段），而虛擬可擴充局部網路（VXLAN）僅支援 12 位元標籤（4,094 個網段）且採用 MAC-in-TCP 封裝",
            "B. 第一層虛擬網卡級防火牆（綁於 vNIC）為「無狀態檢測（Stateless）」，進出站規則完全獨立；第二層子網路級封包過濾器（Subnet 邊界）為「有狀態檢測（Stateful）」，回程封包自動放行",
            "C. 虛擬可擴充局部網路（VXLAN）採 MAC-in-UDP 封裝與 24 位元網路識別碼（VNI）支援逾 1,600 萬個隔離網段；第一層虛擬網卡級防火牆為「有狀態檢測（Stateful）」且採允許清單（Allowlist），第二層子網路級封包過濾器為「無狀態檢測（Stateless）」並依規則編號（Rule Number）由小到大循序比對",
            "D. 第四層（Layer 4）負載平衡器能深入解析 HTTP 標頭、Cookie 與網址路徑並執行傳輸層安全（TLS）卸載；第七層（Layer 7）負載平衡器則僅能依據 TCP / UDP 連接埠轉發"
          ],
          ans: 2,
          exp: "解析：傳統 VLAN 僅 12-bit（上限 4,094 網段）；VXLAN 採 MAC-in-UDP 封裝與 24-bit VNI（逾 1,600 萬網段）。第一層虛擬網卡級防火牆（vNIC）為有狀態（Stateful，允許進站則回程自動放行、採 Allowlist）；第二層子網路級封包過濾器為無狀態（Stateless，須顯式配置雙向回應埠、依 Rule Number 由小到大循序評估）。"
        }
      ]
    },

    week5: {
      id: "w5-hell",
      isHell: true,
      title: "🔥 地獄模式：Week 5 PaaS 平台即服務模式深度試煉（10 題）",
      bossName: "無伺服器與快取煉獄王",
      expReward: 250,
      points: [
        {
          title: "地獄模式挑戰規則說明",
          detail: "• 本關卡採用「中文為主、括號僅附英文原名」之嚴格考試規格，完全移除解釋性提示。\n• 涵蓋 PaaS 三層抽象與四大限制、無狀態架構、DBaaS 四大能力、快取三大災難、FaaS 與 MicroVM、遞送語意與冪等性、藍綠 vs. 金絲雀部署、雙軌健康檢查與 IoT PaaS 成本治理。"
        }
      ],
      comparisons: [],
      quizzes: [
        {
          q: "在平台即服務（PaaS）的核心抽象化模型（租戶保留的頂層／被託管的中層／被隱藏的底層）與共擔責任模型（Shared Responsibility Model）中，下列歸類何者完全正確？",
          options: [
            "A. 「動態執行階段（Language Runtime）、網頁伺服器容器、連線池」屬於租戶保留的頂層；而「環境變數管理、網路安全白名單、資料庫索引優化」由雲端服務商全權負責",
            "B. 「商業邏輯程式碼（Business Logic）、資料庫綱要（Schema）與環境變數組態」屬於租戶保留的頂層；而在共擔責任中，作業系統漏洞（OS CVE）修補與執行環境（Runtime）升級由服務商全權負責，環境變數、網路白名單、資料庫索引優化與備份保留政策屬於共同邊界，結構化查詢語言注入（SQL Injection）與角色權限控制（RBAC）則由租戶獨立負責",
            "C. 「實體機房、虛擬機監視器（Hypervisor）、核心安全性更新」屬於被託管的中層；而「資料庫綱要（Schema）與角色權限控制（RBAC）」屬於服務商全權負責的範圍",
            "D. 平台即服務（PaaS）以「主機／虛擬機（VM）」為抽象顆粒度，水平擴充反應時間需數分鐘，且僅能依據處理器（CPU）使用率觸發伸縮"
          ],
          ans: 1,
          exp: "解析：PaaS 抽象模型中，租戶保留頂層為「商業邏輯程式碼、資料庫綱要（Schema）、環境變數組態」；被託管中層為「動態執行階段（Language Runtime）、Web 伺服器容器、連線池、自動日誌收集」；被隱藏底層為「實體機房、Hypervisor、OS 安裝與核心安全更新、實體儲存掛載」。共擔責任中，服務商負責實體安全、OS CVE 修補、Runtime 升級；共同邊界為環境變數、網路白名單、DB 索引優化與備份政策；租戶獨立負責程式碼邏輯漏洞（SQL Injection）、資料加解密與 RBAC。"
        },
        {
          q: "關於平台即服務（PaaS）的「五大核心技術特性」與「四項先天限制」，下列技術剖析何者正確？",
          options: [
            "A. 平台即服務（PaaS）開放租戶使用最高權限（`sudo`）修改 Linux 核心網路參數（`/proc/sys/net`），並支援任意自建私有二進位通訊協定與直接掛載本地實體磁碟",
            "B. 當系統因無流量而縮容至零（Scale to Zero）後，首筆請求進來時會經歷「排程器分配節點 → 下載容器映像檔 → 初始化語言執行環境（Language Runtime）→ 建立資料庫連線」，產生數百毫秒至數秒的冷啟動延遲（Cold Start Latency），故不適用於硬即時（Hard Real-time）工業閉迴路控制；且當常駐滿載實例規模極大時，會跨越成本交叉點（Cost Crossover）使帳單高於自建基礎架構即服務（IaaS）",
            "C. 宣告式部署（Declarative Deploy）鼓勵工程師直接在線上生產環境容器內進行熱修補（Hotfix），以避免每次程式碼推送（`git push`）都產生新的不可變基礎設施（Immutable Infrastructure）版本",
            "D. 內建可觀察性（Observability）要求應用程式必須自行掛載實體磁碟並將日誌寫入 `/var/log` 檔案，平台無法收集標準輸出（STDOUT / STDERR）串流"
          ],
          ans: 1,
          exp: "解析：PaaS 四大先天限制為：1. 平台環境鎖定（Platform Lock-in）、2. 底層核心缺乏存取權限（No Root Access：禁 sudo 改 `/proc/sys/net`、限制非 HTTP/HTTPS/WebSocket 之私有二進位協定、暫態無狀態檔案系統）、3. 冷啟動延遲（Cold Start Latency：Scale to Zero 後首筆請求需分配節點→下載映像→初始化 Runtime→建 DB 連線，不適用硬即時控制）、4. 大規模長期運行的成本膨脹（跨越成本交叉點 Cost Crossover）。"
        },
        {
          q: "比較平台即服務（PaaS）的「三種部署型態（公有／私有／混合）」、「三代技術演進浪潮」與「無狀態（Stateless）架構核心要求」，下列敘述何者正確？",
          options: [
            "A. 第一代平台即服務（PaaS）以標準 Docker 容器映像檔為交付物；第二代則要求依照專有規範（如 Heroku `Procfile`）打包原始碼",
            "B. 混合平台即服務（Hybrid PaaS）採「控制平面分離」設計，中央管理平台位於雲端，但具體運算節點可依合規需求部署在客戶機房；而在無狀態（Stateless）要求下，本地記憶體與本地磁碟皆不可信，使用者工作階段（Session）須改存外部快取，上傳檔案須改存物件儲存（Object Storage）",
            "C. 私有平台即服務（Private PaaS，如地端搭建 Kubernetes 搭配 OpenShift）由公有雲服務商全權負責底層叢集與儲存節點維運，企業無須配置雲原生維運團隊",
            "D. 無狀態（Stateless）架構要求將使用者的登入工作階段（Session）與任務進度強制保存在單一運算實例的本地記憶體中，以加快水平擴充（Scale-out）時的回應速度"
          ],
          ans: 1,
          exp: "解析：三代 PaaS 演進：第一代為代碼直接託管（如 Heroku `Procfile`）、第二代為容器原生化（Docker 映像檔）、第三代為無伺服器與事件驅動（FaaS）。混合 PaaS 採控制平面分離（中央管理在雲端、運算節點可部署於客戶機房）；無狀態（Stateless）架構要求本地記憶體不可信（Session 存外部快取）、本地磁碟不可信（檔案存物件儲存）。"
        },
        {
          q: "關於資料庫即服務（DBaaS）的「四項核心能力（自動化高可用、讀寫分離、時間點還原（PITR）、無感線上擴容）」，下列底層運作機制描述何者完全正確？",
          options: [
            "A. 自動化高可用在主節點（Primary）當機時，需由應用程式端手動修改程式碼中的連線字串位址（IP），才能切換至備援節點（Standby）",
            "B. 時間點還原（PITR）僅依賴每天半夜一次的全量磁碟備份，無法將誤執行刪除資料表（`DROP TABLE`）的資料庫還原至事故發生前 1 秒的狀態",
            "C. 雙機熱備故障轉移（Failover）時，客戶端連線字串指向固定的網域名稱別名（DNS CNAME）端點使切換對應用完全透明；時間點還原（PITR）則透過定時增量磁碟快照搭配即時串流儲存「交易預寫日誌（Write-Ahead Log, WAL）」，達成任意秒級精確還原",
            "D. 讀寫分離（Read/Write Splitting）由智慧資料庫代理層將所有的查詢語句（`SELECT`）導向寫入主庫（Primary），並將新增與更新語句（`INSERT / UPDATE`）分流至唯讀副本（Read Replicas）"
          ],
          ans: 2,
          exp: "解析：DBaaS 四大能力中：1. 高可用透過同步／半同步複寫至 Standby，30~60 秒自動 Failover，並以固定 DNS CNAME 虛擬端點漂移使切換對應用透明；2. 讀寫分離由智慧代理將 SELECT 導向 Read Replicas、INSERT/UPDATE 導向主庫；3. 時間點還原（PITR）結合增量快照與連續串流儲存之交易預寫日誌（WAL）實現秒級還原；4. 線上擴容（Online Scaling）先啟動新規格副本同步資料再執行毫秒級主從切換。"
        },
        {
          q: "在平台即服務（PaaS）的託管時序資料庫（Managed TSDB）與分散式快取（Managed In-Memory Cache）中，針對底層資料結構及「快取穿透（Cache Penetration）」、「快取擊穿（Cache Breakdown）」、「快取雪崩（Cache Avalanche）」三大陷阱的配對，下列何者正確？",
          options: [
            "A. 快取穿透是指單一熱點鍵值（Hot Key）剛好過期導致大量併發衝垮資料庫，防禦方式為設定過期時間附加隨機擾動值（Jitter）；快取擊穿則是指大量請求查詢不存在的鍵值（Key），防禦方式為布隆過濾器（Bloom Filter）",
            "B. 託管時序資料庫（TSDB）捨棄關聯式 B-Tree 改採日誌結構合併樹（LSM-Tree）以抗極限寫入；而在快取陷阱中，「快取穿透」為大量請求不存在的 Key（以布隆過濾器（Bloom Filter）防禦）、「快取擊穿」為熱點 Key 剛好過期（以互斥鎖（Mutex Lock）更新防禦）、「快取雪崩」為大量 Key 同一時間集體過期（以過期時間附加隨機擾動值（Jitter）防禦）",
            "C. 快取雪崩是指惡意攻擊者不斷查詢資料庫中不存在的設備識別碼，必須透過互斥鎖（Mutex Lock）阻塞所有查詢執行緒來防禦",
            "D. 託管時序資料庫（TSDB）為了加速隨機更新，底層全面採用傳統關聯式 B+ Tree 索引，並禁止對歷史秒級資料進行自動降採樣（Downsampling）"
          ],
          ans: 1,
          exp: "解析：Managed TSDB 捨棄 B-Tree 改採 LSM-Tree 應對極限寫入並支援自動降採樣（Downsampling）。三大快取陷阱必須精確區分：1. 快取穿透（Cache Penetration）：查不存在的 Key → 布隆過濾器（Bloom Filter）；2. 快取擊穿（Cache Breakdown）：單一熱點 Key 剛好過期 → 互斥鎖更新；3. 快取雪崩（Cache Avalanche）：大量 Key 同時集體過期 → 設定過期時間附加隨機擾動值（Jitter）。"
        },
        {
          q: "關於無伺服器架構（Serverless）與函式即服務（FaaS）的計費維度、冷啟動（Cold Start）語言差異以及微型虛擬化技術（MicroVM），下列敘述何者正確？",
          options: [
            "A. 函式即服務（FaaS）在半夜無任何事件觸發時仍需按小時支付基礎容器常駐費；且重型虛擬機語言（Java、C#）的冷啟動速度遠快於編譯型語言（Go、Rust）",
            "B. 標準 Docker 容器因各自擁有獨立核心，啟動需數十秒；而完整 KVM 虛擬機則共用宿主機核心，在多租戶環境下存在安全逃逸風險",
            "C. 函式即服務（FaaS）依「總請求次數（Requests）＋運算執行時間乘以配置記憶體（GB-Seconds）」計費，閒置時為零成本；其底層採用如 Firecracker 之微型虛擬機（MicroVM），解決了標準容器共用核心的安全逃逸風險與傳統 KVM 虛擬機啟動過慢的問題，能在 5 毫秒內啟動並維持硬體級隔離",
            "D. 預留並發實例（Provisioned Concurrency）的作用是強制將所有函式縮容至零，以徹底消除外部資料庫連線池的建立開銷"
          ],
          ans: 2,
          exp: "解析：FaaS 計費兩大維度為 Requests + GB-Seconds（半夜無事件則運算費為 0 元）；冷啟動中編譯型語言（Go、Rust）僅數十毫秒，重型 VM 語言（Java、C#）達數秒，可透過預留並發實例（Provisioned Concurrency）緩解。底層 MicroVM（如 Firecracker）兼顧 5 毫秒內啟動與硬體級多租戶安全隔離。"
        },
        {
          q: "在訊息佇列（Managed Message Queue）與事件驅動架構（EDA）中，比較「點對點佇列（Queue）vs. 發布／訂閱（Pub/Sub）」、「訊息遞送語意（Delivery Semantics）」與「消費者冪等性（Idempotency）」，下列敘述何者正確？",
          options: [
            "A. 點對點佇列（Queue）會將每一則訊息廣播複製給所有訂閱者；而發布／訂閱（Pub/Sub）則規定一則訊息僅能被單一工作節點競爭性取得並處理一次",
            "B. 「恰好一次（Exactly-once）」遞送語意開銷最低且吞吐量最高，適合高頻環境溫濕度；「最多一次（At-most-once）」則依賴兩階段提交與全局去重",
            "C. 「至少一次（At-least-once）」保證絕不丟失訊息但可能因網路重試造成重複，因此消費者必須實作「冪等性（Idempotency）」——例如為封包注入全局唯一通用唯一辨識碼（UUID）先查快取去重，或於資料庫採樂觀鎖（Optimistic Locking）／時間戳條件更新（`WHERE timestamp > current`）",
            "D. 事件驅動架構（EDA）的核心是讓事件處理者（Event Handler）以高頻率主動輪詢（Polling）並阻塞呼叫事件發起者（Event Source），確保雙向緊密耦合"
          ],
          ans: 2,
          exp: "解析：Queue 為單一工作節點競爭消費一次（適合任務分派），Pub/Sub 為一對多廣播分發（適合 IoT 數據多方消費）。遞送語意中，At-most-once 可掉包開銷最低；At-least-once 不丟失但可能重複，消費者須實作冪等性（Idempotency：UUID 快取去重或樂觀鎖 `WHERE timestamp > current`）；Exactly-once 依賴兩階段提交與全局去重，最昂貴且吞吐量大幅下降。"
        },
        {
          q: "關於平台即服務（PaaS）環境下的「資料庫連線池耗盡（Connection Exhaustion）危機」、「藍綠部署（Blue-Green）vs. 金絲雀部署（Canary）」以及「雙軌健康檢查（Liveness vs. Readiness Probe）」，下列敘述何者完全正確？",
          options: [
            "A. 當程序陷入無窮迴圈或死鎖（Deadlock）時，就緒用心跳（Readiness Probe）會直接重啟該運算實例；當應用剛開機尚未完成資料庫連線時，存活用心跳（Liveness Probe）則僅暫停分派流量而不重啟實例",
            "B. 為解決函式即服務（FaaS）瞬間拉起數千實例打滿關聯式資料庫連線上限的危機，應在兩者間架設常駐「資料庫連線代理（Database Proxy）」動態複用連線池；而在健康檢查中，存活用心跳（Liveness Probe）於偵測死鎖失敗時會重啟實例，就緒用心跳（Readiness Probe）則在應用完成載入與 DB 連線前不分派外部流量以防範雪崩效應",
            "C. 藍綠部署（Blue-Green Deployment）先將外部流量的 2% 導向新版本，逐步放大至 10%、25%、50%；金絲雀部署（Canary Deployment）則維持兩組完整環境並在毫秒級內將 100% 流量原子切換",
            "D. 應用程式介面閘道（API Gateway）所採用的權杖桶（Token Bucket）演算法嚴禁任何短時間的突發流量（Burst），強制所有請求以絕對恆定速率流出"
          ],
          ans: 1,
          exp: "解析：FaaS 高併發引發的連線池耗盡（Connection Exhaustion）需靠常駐「資料庫連線代理（Database Proxy）」動態複用連線池；藍綠部署為雙環境並存、毫秒級原子切換，金絲雀部署為 2% → 10% → 25% → 50% 漸進式放量；Liveness Probe 偵測死鎖並重啟實例，Readiness Probe 偵測是否完成開機載入與 DB 連線，通過前不分派流量以防範雪崩。"
        },
        {
          q: "在物聯網平台即服務（IoT PaaS）的五大核心模組中，關於高可用訊息代理（MQTT Broker）、數位憑證治理與基於屬性的授權（ABAC），下列敘述何者正確？",
          options: [
            "A. 共享訂閱機制（Shared Subscriptions）是在主題前加上 `\\$share/group/`，作用是為每個主題保存最新一筆數據，讓新訂閱者連線時立即獲取最新狀態",
            "B. 訊息保留（Retained Messages）的作用是將訊息均勻負載平衡分發給多個消費者；而連線閘道（Device Gateway）透過持續傳送大型韌體封包來維持裝置心跳",
            "C. 共享訂閱（`\\$share/group/`）可將訊息均勻負載平衡分發給多個消費者，訊息保留（Retained Messages）則為每個主題保存最新一筆數據；在資安上，透過基於屬性的授權（ABAC）利用 `\\${iot:ClientId}` 變數動態生成權限，即使單一設備遭物理拆解竊取憑證，亦無法橫向移動竊聽工廠其他機台數據",
            "D. 裝置首次出廠通電連線的即時註冊（JITR）必須搭配高風險的明文帳號密碼驗證，無法與雙向 X.509 憑證認證（mTLS）、線上憑證狀態查詢（OCSP）及遠端吊銷黑名單（CRL）並存"
          ],
          ans: 2,
          exp: "解析：MQTT 在 PaaS 層級中，`\\$share/group/` 共享訂閱負責將訊息均勻負載平衡分發給多個消費者；訊息保留（Retained Messages）負責為每個主題保存最新一筆數據供新訂閱者立即獲取。資安層面採雙向 mTLS、OCSP / CRL 與 JITR，並以 ABAC 動態策略變數 `\\${iot:ClientId}` 限制設備僅能存取自身主題，阻斷橫向移動。"
        },
        {
          q: "關於物聯網平台即服務（IoT PaaS）的維運關鍵指標（SLI / SLO）、跨區域多主動（Multi-Region Active）災難復原以及「避免物聯網帳單雪崩三招」，下列敘述何者完全正確？",
          options: [
            "A. 平台維運目標（SLO）通常將閘道連線成功率設定為 90% 以下，並要求端到端訊息延遲的第 95 分位數（P95）大於 10 秒，以節省雲端運算資源",
            "B. 為避免物聯網帳單雪崩，應要求終端設備將原本每 10 秒發送 1 筆 500 Byte 的封包，拆細為每秒發送 10 筆 50 Byte 的微小封包，並每筆直接觸發獨立的資料庫寫入",
            "C. 維運目標（SLO）要求閘道連線成功率達 99.95% 以上、端到端訊息延遲 P95 小於 100ms；而在成本治理上，透過「封包合併批次上報（如由每秒 1 筆改為每 10 秒打包 1 筆，訊息計費減少 90%）」、「本地邊緣過濾丟棄常態穩定重複數據」與「記憶體緩衝批次插入資料庫（Batch Insert）」，可有效防止帳單雪崩",
            "D. 在跨區域多主動（Multi-Region Active）架構中，裝置影子（Device Shadow）僅能存在於單一地理區域，一旦該區光纖中斷，遠端控制即永久失效"
          ],
          ans: 2,
          exp: "解析：IoT PaaS 的關鍵 SLO 為閘道連線成功率 > 99.95%、端到端延遲 P95 < 100ms；跨區容災透過全球 DNS 導向、DBaaS 跨國非同步複寫（秒級 RPO）與裝置影子跨區同步達成；防帳單雪崩三招為：1. 封包合併批次上報（省 90% 訊息費）、2. 本地邊緣過濾重複常態值、3. 資料庫寫入合併（Batch Insert）。"
        }
      ]
    },

    week6: {
      id: "w6-hell",
      isHell: true,
      title: "🔥 地獄模式：Week 6 SaaS × IoT 平台 × 邊緣運算深度試煉（10 題）",
      bossName: "多租戶與雲邊終極魔導",
      expReward: 250,
      points: [
        {
          title: "地獄模式挑戰規則說明",
          detail: "• 本關卡採用「中文為主、括號僅附英文原名」之嚴格考試規格，完全移除解釋性提示。\n• 涵蓋 SaaS 多租戶路由與三大資料庫隔離模型、權杖桶 vs. 漏桶、IDOR 與 RLS、特性旗標、MQTT vs. CoAP、OTA A/B 分區與看門狗、TSDB Gorilla 壓縮、告警時間滯後補償（Hysteresis）、邊緣三大物理壁壘、容器 Namespaces/Cgroups、K3s 邊緣自治與 EdgeX Foundry。"
        }
      ],
      comparisons: [],
      quizzes: [
        {
          q: "在軟體即服務（SaaS）的共擔責任模型、單租戶（Single-Tenant）vs. 多租戶（Multi-Tenancy）架構以及租戶身份辨識路由機制中，下列敘述何者完全正確？",
          options: [
            "A. 在軟體即服務（SaaS）責任邊界中，租戶仍須負責應用層容災與中介軟體更新；而單租戶（Single-Tenant）架構的維運邊際成本隨客戶數增加而趨近於零",
            "B. 在軟體即服務（SaaS）責任邊界中，雲端商全權負責至應用層與容災，租戶僅需管理身分認證（IAM）與資料治理；多租戶（Multi-Tenancy）透過在軟體層注入租戶標識符（Tenant ID）達成規模經濟，其身份路由包含子域名路由（Subdomain Routing）、網址路徑切分（Path-Based Routing）以及於 OAuth / JWT 負載（Payload）內嵌 `tenant_id` 的標頭注入（Header / Token Injection）",
            "C. 網址路徑切分（Path-Based Routing，如 `/api/v1/tenants/tenant-a/...`）最便於企業客戶進行專屬網域品牌化；而子域名路由（Subdomain Routing）則將 `tenant_id` 隱藏於加密權杖（Token）內部",
            "D. 多租戶（Multi-Tenancy）架構為每個客戶配置專屬的虛擬機、資料庫實例與實體網路拓撲，因此資源閒置浪費率最高且難以規模化"
          ],
          ans: 1,
          exp: "解析：SaaS 責任邊界中，雲商負責至應用層與容災，租戶僅管身分認證（IAM）與資料治理；單租戶（Single-Tenant）物理資源獨立但閒置率高、成本隨客戶線性暴增；多租戶（Multi-Tenancy）全域資源複用、以 Tenant ID 邏輯隔離，支援 Subdomain（便於品牌化）、Path-Based（適合純 API）與 JWT Header / Token Injection（內嵌 `tenant_id` 無感透傳至微服務）。"
        },
        {
          q: "比較多租戶資料庫三大隔離模型：「獨立資料庫（Database-per-Tenant）」、「共享庫獨立綱要（Schema-per-Tenant）」與「全共享表（Shared-Table with Tenant ID）」，下列剖析何者正確？",
          options: [
            "A. 獨立資料庫（Database-per-Tenant）將所有租戶資料存於同一張巨量表，雖徹底消除了資料庫連線池（Connection Pool）開銷，但資料隔離強度最低",
            "B. 共享庫獨立綱要（Schema-per-Tenant）為每個租戶建立獨立的實體資料庫引擎，因此能徹底隔絕單一租戶對處理器（CPU）、記憶體與磁碟 I/O 的硬體資源爭搶",
            "C. 獨立資料庫（Database-per-Tenant）具備物理級隔離並支援單租戶獨立備份還原，但資料庫連線池（Connection Pool）與遷移維護開銷極大；共享庫獨立綱要（Schema-per-Tenant）降低了硬體成本但無法徹底隔絕 CPU / RAM / I/O 資源爭搶；全共享表（Shared-Table）則強制以 `tenant_id` 作為複合主鍵或分區鍵，必須仰賴資料庫行級安全性（Row-Level Security, RLS）防範越權",
            "D. 在混合多租戶架構（Hybrid Multi-Tenancy）的階梯式選型中，一般免費與標準租戶應配置獨立資料庫（Database-per-Tenant），而高合規醫療與金融 VIP 租戶則應配置全共享表（Shared-Table）"
          ],
          ans: 2,
          exp: "解析：三大模型對比：1. Database-per-Tenant：物理隔離、合規高、支援單租戶獨立備份還原，但 Connection Pool 與維護開銷極大（適合 VIP）；2. Schema-per-Tenant：共享實體 DB 引擎、獨立 Schema，省硬體但共用 CPU/RAM/IO 易爭搶；3. Shared-Table：共用同一張表（含 `tenant_id`），擴展性最高、成本最低，但必配行級安全性（RLS）防越權（適合免費／標準租戶）。"
        },
        {
          q: "面對多租戶中的「吵鬧鄰居效應（Noisy Neighbor Effect，如物聯網設備韌體錯誤引發重試風暴（Retry Storm））」，關於流量限流演算法、資源配額與背壓機制（Backpressure）的設計，下列何者正確？",
          options: [
            "A. 權杖桶（Token Bucket）以恆定速率流出請求，嚴禁任何突發流量；漏桶（Leaky Bucket）則以固定速率生成權杖，允許短時間的密集突發流量（Burst）",
            "B. 權杖桶（Token Bucket）以固定速率生成權杖，允許適度的突發流量（Burst）；漏桶（Leaky Bucket）則以恆定速率流出請求，徹底平滑化流量。分散式限流可於 API Gateway 以 `Redis + Lua 腳本` 執行毫秒級原子化計數，並在超出配額時回傳 `HTTP 429 (Too Many Requests)` 攜帶 `Retry-After` 標頭，同時搭配訊息佇列（Kafka Buffering）通知生產端降速實施背壓（Backpressure）",
            "C. 當租戶超出每日呼叫配額時，系統應回傳 `HTTP 503 (Service Unavailable)` 並自動銷毀該租戶的資料庫綱要（Schema）以保護系統記憶體",
            "D. 背壓機制（Backpressure）是指當後端資料庫負載過高時，由 API Gateway 主動加速向現場物聯網設備發送輪詢指令，以清空設備端快取"
          ],
          ans: 1,
          exp: "解析：權杖桶（Token Bucket）允許適度突發流量（Burst）；漏桶（Leaky Bucket）則以恆定速率流出請求、徹底平滑化流量。分散式限流以 Redis + Lua 腳本執行原子計數，超額時優雅拒絕回傳 HTTP 429 並附帶 Retry-After 標頭，並以 Kafka 緩衝超量封包通知上游降速實施背壓（Backpressure）。"
        },
        {
          q: "關於軟體即服務（SaaS）的多租戶越權防禦、無感知升級、特性旗標（Feature Flags）以及應用程式介面（API）版本治理策略，下列敘述何者完全正確？",
          options: [
            "A. 不安全的物件參照（IDOR）是指攻擊者竄改請求參數中的設備識別碼以非法取得其他租戶資料，可於資料庫底層強制注入行級安全性（Row-Level Security, RLS）防禦；而特性旗標（Feature Flags）則將程式碼部署（Deploy）與功能對用戶開放（Release）解耦，異常時無須重新編譯部署即可於後台秒級全域關閉",
            "B. 在物聯網 MQTT 長連線場景下執行滾動升級（Rolling Update）時，必須直接強制切斷舊版 Pod 的所有 TCP 連線，不可配合優雅停機（Graceful Shutdown）以免延誤升級速度",
            "C. 語意化版本（Semantic Versioning）規範為 `Patch.Minor.Major`，允許在次版本（Minor）與修補版本（Patch）中隨意破壞既有介面合約",
            "D. 當雲端平台宣告舊版應用程式介面（API）棄用（Deprecation Policy）後，為確保資安應於 24 小時內強制關閉舊路徑，無須提供 6 至 12 個月的緩衝過渡期"
          ],
          ans: 0,
          exp: "解析：IDOR 越權漏洞可由資料庫底層強制注入行級安全性（RLS）防範；MQTT 長連線升級需配合優雅停機（Graceful Shutdown）；特性旗標（Feature Flags）將部署（Deploy）與發布（Release）解耦，支援條件式動態評估與秒級關閉控制爆炸半徑；語意化版本為 Major.Minor.Patch（嚴禁在次版本破壞合約），且棄用舊 API 後至少提供 6~12 個月過渡期。"
        },
        {
          q: "在物聯網專用平台（IoT SaaS）中，比較多協定接入中樞（MQTT vs. 受限應用協定（CoAP）vs. HTTP/HTTPS）、分散式代理叢集（Broker Cluster）與硬體級裝置安全，下列敘述何者正確？",
          options: [
            "A. 訊息佇列遙測傳輸（MQTT）基於 UDP 無連線架構，最小標頭為 64 Byte；受限應用協定（CoAP）則基於 TCP 長連線，適合大檔案影像上傳",
            "B. 訊息佇列遙測傳輸（MQTT）最小標頭僅 2 Byte，其分散式叢集（如 EMQX、VerneMQ）以一致性雜湊（Consistent Hashing）同步路由，並以持久化會話（Persistent Session）在設備斷線時於記憶體保留離線訊息；受限應用協定（CoAP）則基於 UDP 的 RESTful 仿生設計，適合窄頻物聯網（NB-IoT）電池供電環境；在安全上更將 X.509 私鑰燒錄於硬體安全模組（TPM / Secure Element）防物理讀取拷貝",
            "C. 持久化會話（Persistent Session）是指當設備嘗試向未授權主題（Topic）發布或監聽時，閘道器（Gateway）依然永久保持其 TCP 連線不斷開",
            "D. 通用型網頁軟體即服務（Web SaaS）因具備極輕量的 HTTP 交握開銷與內建裝置影子同步機制，可直接維持百萬級物聯網長連線而不會水土不服"
          ],
          ans: 1,
          exp: "解析：MQTT 採輕量 Pub/Sub、最小標頭僅 2 Byte，Broker 叢集（EMQX / VerneMQ）以一致性雜湊路由同步並透過持久化會話（Persistent Session）保留斷線訊息；CoAP 為基於 UDP 的 RESTful 協定，適合 NB-IoT 微控制器電池省電環境；HTTP/HTTPS 則作為偶發大檔上傳補充。資安上採 mTLS 並將 X.509 私鑰燒錄於硬體安全模組（TPM / Secure Element）防偽造拷貝。"
        },
        {
          q: "剖析大規模韌體空中升級（OTA as a Service）的端到端工作流與防禦性工程，下列關於安全下載通道、硬體雙分區（A/B Partitioning）與看門狗（Hardware Watchdog）的敘述何者正確？",
          options: [
            "A. 平台會將韌體映像檔設為長期公開網址供設備直接下載；設備在下載期間會直接抹除並覆寫當前正在運行的唯一系統分區",
            "B. 平台生成具時效性之預先簽署網址（Pre-Signed URLs）避免韌體公網暴露，設備即時回報下載中（Downloading）、校驗中（Verifying）、寫入中（Flashing）進度；新韌體會先寫入閒置的 B 分區（A/B Partitioning），開機成功並聯網驗證後才切換啟動旗標（Bootloader Flag），若新系統發生核心崩潰（Kernel Panic）或卡死，硬體看門狗（Hardware Watchdog）逾時會自動強制回滾至 A 分區",
            "C. 硬體看門狗（Hardware Watchdog）位於雲端伺服器上，負責將韌體依 `100% → 20% → 5% → 1%` 的逆向比例進行金絲雀推播（Canary Rollout）",
            "D. 在雙系統分區（A/B Partitioning）架構中，只要新韌體寫入 B 分區完成，無須經過重新開機與聯網驗證即可直接將舊的 A 分區格式化刪除"
          ],
          ans: 1,
          exp: "解析：OTA 安全工作流使用具時效性的預先簽署網址（Pre-Signed URLs），設備雙向回報 Downloading / Verifying / Flashing 進度；防禦工程包含：1. A/B 雙系統分區（新韌體寫入閒置 B 分區，開機並聯網驗證成功才切換 Bootloader Flag）、2. 硬體看門狗（Hardware Watchdog：新系統 Kernel Panic 卡死時逾時自動強制回滾至 A 分區）、3. 階梯式金絲雀推播（1% → 5% → 20% → 100%）。"
        },
        {
          q: "在時序遙測數據管線（Time-Series Pipeline）、低程式碼儀表板（Low-Code Dashboard）與智慧告警引擎實務中，下列針對資料壓縮、降採樣與告警風暴治理的敘述何者完全正確？",
          options: [
            "A. 時序資料庫（TSDB）利用 Gorilla 浮點數互斥或（XOR）壓縮與差值之差（Delta-of-Delta）時間戳壓縮節省 90% 儲存空間，並採日誌結構合併樹（LSM-Tree）實現純循序寫入；而智慧告警引擎為解決感測讀數於閥值邊界跳動引發的「臨界震盪（Alert Flapping）」，會採用「時間滯後補償（Hysteresis）」設定非對稱觸發條件（如 `> 80°C` 告警、需 `< 75°C` 才解除）",
            "B. 當使用者在前端儀表板查詢一年跨度的歷史數據時，系統應關閉自適應降採樣（Downsampling），直接將全年數千萬筆原始秒級數據完整傳回瀏覽器渲染",
            "C. 時間滯後補償（Hysteresis）是指當主幹網路中斷引發數百台設備同時離線時，將所有離線告警全部延遲 24 小時後再逐一發送給工程師",
            "D. 時序資料庫（TSDB）的自動生命週期歸檔（TTL）規定必須將最近 7 天的熱資料存放在高延遲冷存儲（Glacier），並將一年前的冷資料搬回記憶體快取"
          ],
          ans: 0,
          exp: "解析：TSDB 核心技術包含：1. Gorilla 浮點數 XOR 壓縮 + Delta-of-Delta 時間戳壓縮（節省 90% 空間）、2. LSM-Tree 純循序寫入、3. TTL 自動歸檔（熱資料 7 天、溫資料 90 天、冷資料轉 Glacier）。低程式碼看板查詢一年跨度時自動降採樣（Downsampling）為日均值防瀏覽器崩潰；智慧告警引擎則以時間滯後補償（Hysteresis 非對稱閥值）消除臨界震盪（Alert Flapping），並以事件去重與聚合（Deduplication & Grouping）將主幹網斷線彙整為單一根因通報。"
        },
        {
          q: "比較物聯網軟體即服務（IoT SaaS）在四大垂直產業（智慧製造、智慧微電網、智慧車聯網、智慧農業）的落地技術機制，下列敘述何者正確？",
          options: [
            "A. 智慧製造的傳統「定期檢修」能確保在軸承早期微裂紋階段精準預警並降低 80% 非預期停機，而無須仰賴邊緣高頻振動採集與頻譜分析",
            "B. 智慧微電網能源管理（EMS）將屋頂光電、儲能櫃與充電樁虛擬化聚合，即時對接時間電價（TOU）與電網需量反應（Demand Response）信號並結合氣象雲圖模型執行尖峰套利；智慧農業則以低功耗廣域網（LoRaWAN）傳輸土壤溫濕度，並結合蒸發散量（ETO）模型進行閉環回授控制（Closed-Loop Control）精準觸發電磁閥灌溉",
            "C. 智慧車聯網透過車載終端（T-Box）以受限應用協定（CoAP）傳送高畫質影音，並完全依賴人工客服電話通知駕駛是否駛入地理圍欄（Geofencing）管制區",
            "D. 導入物聯網雲端軟體即服務（IoT SaaS）雖能消除專職 24/7 維運團隊的隱形成本，但會使企業前期的固定資本支出（CapEx）大幅倍增"
          ],
          ans: 1,
          exp: "解析：智慧製造預測性維護（PdM）透過邊緣振動高頻採集 → 頻譜分析 → 雲端 ML 模型，於軸承微裂紋階段預警，降低 80% 非預期停機（克服定期檢修的零件浪費與事後維修的無預警停機）；微電網（EMS）對接時間電價（TOU）、需量反應與氣象雲圖執行 AI 充放電最佳化；車聯網以 MQTT T-Box 回傳 CAN-bus / GPS，利用空間索引實現地理圍欄（Geofencing）與設備影子遠端控制；智慧農業則走 LoRaWAN 並結合蒸發散量（ETO）模型執行閉環回授控制灌溉。"
        },
        {
          q: "剖析邊緣運算（Edge Computing）的「三大物理壁壘」、「三層邊緣階層光譜」以及「傳統虛擬機器（VM）vs. 輕量化容器（Container）」在邊緣環境的維運實務，下列何者完全正確？",
          options: [
            "A. 光於光纖傳播速度約 200 km/ms，雲端往返延遲（RTT）常超過 50~100ms 且具抖動（Jitter），無法滿足工業硬即時（< 1~5ms）要求；而在「信噪比極低法則（Low Signal-to-Noise Ratio）」下，現場感測數據 99% 為常態平穩雜訊、僅 1% 異常具業務價值。在邊緣虛擬化中，輕量容器直接共享宿主機 Linux 核心（Kernel），利用命名空間（Namespaces）實現隔離、控制群組（Cgroups）限制資源配額，並搭配多階段構建（Multi-Stage Builds）壓縮至 50MB 以下及唯讀檔案系統（`--read-only`）保護邊緣快閃記憶體（Flash）",
            "B. 邊緣運算階層光譜中，極限終端邊界（Device Edge / TinyML，如 ESP32 / STM32）提供數十 TOPS 算力與多協定轉譯；閘道邊緣（Gateway Edge / IPC，如 NVIDIA Jetson）則功耗以毫瓦計並僅能處理基礎類比訊號",
            "C. 傳統虛擬機器（VM）因直接共享宿主機核心且無客端作業系統（Guest OS）冗餘，啟動僅需數毫秒，比輕量化容器更適合部署於 2GB RAM 的嵌入式邊緣設備",
            "D. 在邊緣容器維運中，應將控制群組（Cgroups）用於隔離網路與檔案檢視視圖，並將命名空間（Namespaces）用於嚴格限制處理器與記憶體配額"
          ],
          ans: 0,
          exp: "解析：邊緣三大物理壁壘為：1. 光速與硬即時延遲（光纖 200 km/ms，雲端 RTT >50~100ms vs 工業硬即時 <1~5ms）；2. 骨幹頻寬與低信噪比法則（4K 串流 15~25Mbps，且 99% 為常態雜訊僅 1% 異常有價值）；3. 離線自主與資料主權。容器共享宿主機 Linux Kernel，靠 Namespaces 隔離行程／網路／檔案視圖，靠 Cgroups 限制資源配額；邊緣 Docker 實務採多階段構建（Multi-Stage Builds）壓至 <50MB，並以 `--read-only` 唯讀檔案系統保護 Flash 壽命與防竄改。"
        },
        {
          q: "比較「標準 Kubernetes（K8s）vs. 輕量化邊緣 K3s」的架構差異，以及工業物聯網邊緣中樞「EdgeX Foundry」的三大分層與斷網暫存機制，下列敘述何者完全正確？",
          options: [
            "A. 標準 Kubernetes（K8s）開不進邊緣是因為其控制平面（Control Plane）消耗 2~4GB RAM、分散式 etcd 對網路延遲與磁碟 IOPS 極苛刻且含大量公有雲驅動冗餘；K3s 將代碼瘦身為小於 100MB 單一執行檔、以 SQLite / Kine 替換 etcd 將記憶體門檻壓至 512MB，且具備「邊緣自治（Edge Autonomy）」在斷網期間屏蔽心跳逾時驅逐（Eviction），絕不主動銷毀既有運行中的 Pod",
            "B. 在 EdgeX Foundry 的三大分層中，北向層（App Services）負責原生支援 Modbus、BACnet、OPC UA 等工業協定驅動；南向層（Device Services）則負責執行資料過濾聚合並封裝 JSON 推送至雲端",
            "C. 當外部網路中斷時，K3s 的邊緣自治（Edge Autonomy）機制會立即強制驅逐（Evict）邊緣節點上的所有容器，並交由 EdgeX Foundry 的核心層（Core Services）重新編譯核心",
            "D. EdgeX Foundry 採用單體巨石架構，內部強制以關聯式資料庫同步阻塞連接南向採集與北向上傳，不支援本地快取斷網暫存（Store and Forward）"
          ],
          ans: 0,
          exp: "解析：K3s 針對標準 K8s 三大邊緣痛點（Control Plane 耗 2~4GB RAM、嚴苛 etcd、公有雲驅動包袱）進行改造：<100MB 單一二進位檔、以 SQLite / Kine 替換 etcd（記憶體門檻壓至 512MB），並提供邊緣自治（Edge Autonomy：斷網屏蔽心跳逾時驅逐 Eviction、本機 SQLite 快取維持狀態、網路復原自癒同步）。EdgeX Foundry 則以 ZeroMQ / MQTT 匯流排解耦並內嵌 Redis 實現斷網暫存轉發（Store and Forward），分為：南向層（Device Services：支援 Modbus / BACnet / OPC UA）、核心層（Core Services：Metadata 與 Core Data）、北向層（App Services：轉換過濾聚合並推送雲端）。"
        }
      ]
    },

    week7: {
      id: "w7-hell",
      isHell: true,
      title: "🔥 地獄模式：跨週次架構終極總複習試煉（10 題）",
      bossName: "端邊雲全知創世神",
      expReward: 350,
      points: [
        {
          title: "總複習地獄模式挑戰規則說明",
          detail: "• 本關卡為橫跨 Week 1 至 Week 6 全部 333 頁簡報的終極試煉，每一題皆為跨週次多觀念交叉比對題。\n• 採用「中文為主、括號僅附英文原名」之嚴格考試規格，全數答對可獲得最高榮譽「🔥 總複習地獄制霸」與 350 EXP！"
        }
      ],
      comparisons: [],
      quizzes: [
        {
          q: "【跨週次虛擬化全光譜對決】綜合比較「裸機雲實例（Bare-Metal Instance）」、「傳統虛擬機（Virtual Machine）」、「輕量化容器（Container）」與「微型虛擬機（MicroVM，如 Firecracker）」四種運算底座，下列敘述何者完全正確？",
          options: [
            "A. 傳統虛擬機因具備兩層記憶體轉譯（GVA → GPA → HPA）與輸入／輸出（I/O）軟體模擬損耗，且每台需載入數 GB 的客端作業系統（Guest OS），在邊緣嵌入式設備上水土不服；輕量化容器共享宿主機 Linux 核心（Kernel），以命名空間（Namespaces）隔離視圖、控制群組（Cgroups）限制配額達成毫秒級啟動；而公有雲多租戶函式即服務（FaaS）則採用微型虛擬機（MicroVM）在 5 毫秒內啟動並維持硬體級安全隔離，至於裸機雲實例（Bare-Metal Instance）則徹底移除虛擬機監視器（Hypervisor）以消除 100% 虛擬化損耗並支援巢狀虛擬化（Nested Virtualization）",
            "B. 輕量化容器透過虛擬機監視器（Hypervisor）模擬完整硬體，因此完全沒有多租戶容器逃逸風險；而微型虛擬機（MicroVM）則因共用宿主機核心導致啟動需耗時數分鐘",
            "C. 當傳統虛擬機的虛擬處理器（vCPU）被排程器暫停（Paused）時，可透過內核同頁合併（KSM）徹底消除時鐘漂移（Clock Drift）與第三階快取（L3 Cache）噪鄰爭搶",
            "D. 裸機雲實例（Bare-Metal Instance）屬於傳統專屬主機租用（Dedicated Hosting），必須透過人工工單派工安裝作業系統，無法結合軟體定義網路（SDN）與雲端 API 秒級調度"
          ],
          ans: 0,
          exp: "解析：本題綜合 Week 2、Week 4、Week 5 與 Week 6 的虛擬化演進：VM 具 GVA→GPA→HPA 轉譯與 I/O 模擬損耗及肥大 Guest OS；Container 共享 Linux Kernel（Namespaces 隔離 + Cgroups 限額）；MicroVM（Firecracker）解決標準容器多租戶逃逸與傳統 VM 慢啟動，5ms 啟動且具硬體隔離；Bare-Metal Instance 無 Hypervisor（零損耗、零噪鄰、支援 Nested Virtualization）且保留雲端 API 與 SDN。"
        },
        {
          q: "【跨週次儲存與資料庫架構總對決】綜合比較基礎架構即服務（IaaS）三大儲存型態、資料庫即服務（DBaaS）、時序資料庫（TSDB）與分散式快取，下列敘述何者完全正確？",
          options: [
            "A. 本機暫態儲存（Ephemeral Store）在虛擬機停止（Stop）後仍可持久保存資料，且底層採用空間利用率達 67% 的三副本複製（Triple Replication）",
            "B. 區塊儲存（Block Storage）多採三副本複製（Triple Replication，空間利用率 33%）保低延遲，但須注意代幣桶（Token Bucket）耗盡引發的 IOPS 效能懸崖；物件儲存（Object Storage）多採糾刪碼（Erasure Coding，空間利用率 67%）並支援自訂元資料（Metadata）與預先簽署網址（Pre-Signed URLs）；而時序資料庫（TSDB）捨棄傳統 B-Tree 改採日誌結構合併樹（LSM-Tree）純循序寫入，並搭配 Gorilla 浮點數互斥或（XOR）壓縮與差值之差（Delta-of-Delta）時間戳壓縮節省 90% 空間",
            "C. 當單一熱點鍵值（Hot Key）剛好過期引發「快取穿透（Cache Penetration）」時，應以布隆過濾器（Bloom Filter）防禦；當大量查詢不存在的鍵值引發「快取擊穿（Cache Breakdown）」時，應以互斥鎖（Mutex Lock）防禦",
            "D. 共享檔案儲存（File Storage）採無目錄扁平命名空間（Bucket + Key），無法支援多台虛擬機透過 POSIX 與 NFS / SMB 協定並行讀寫同一目錄"
          ],
          ans: 1,
          exp: "解析：Block 儲存多採三副本（33% 利用率）、注意 Token Bucket 效能懸崖，而本機暫態儲存（Ephemeral Store）在 Stop 後資料永久消失；File 儲存支援 POSIX / NFS / SMB 與 File Lock 多節點共享；Object 儲存多採糾刪碼（Erasure Coding，67% 利用率）、支援自訂 Metadata 與 OTA Pre-Signed URLs；TSDB 採 LSM-Tree 循序寫入與 Gorilla XOR + Delta-of-Delta 壓縮省 90% 空間。"
        },
        {
          q: "【跨週次網路、通訊協定與流量控制總對決】綜合比較雲端軟體定義網路（SDN / VXLAN）、雙層防火牆、物聯網通訊協定（MQTT / CoAP / HTTP）與限流演算法，下列敘述何者完全正確？",
          options: [
            "A. 虛擬可擴充局部網路（VXLAN）採用 MAC-in-UDP 封裝與 24 位元網路識別碼（VNI）支援逾 1,600 萬個隔離網段；第一層虛擬網卡級防火牆為有狀態檢測（Stateful），第二層子網路級過濾器為無狀態檢測（Stateless）；在接入協定中，MQTT 最小標頭僅 2 Byte 並支援共享訂閱（`\\$share/group/`）負載平衡，受限應用協定（CoAP）則基於 UDP RESTful 架構適配 NB-IoT 電池省電環境；而在限流演算法中，權杖桶（Token Bucket）允許適度突發流量（Burst），漏桶（Leaky Bucket）則以恆定速率流出請求",
            "B. 傳統虛擬區域網路（VLAN）具備 24 位元識別碼可切分 1,600 萬個網段；而混合雲採用 IPSec 虛擬私人網路（IPSec VPN）互聯時，封包不經過公眾網際網路（Internet），故延遲比專屬連線（Direct Connect）更穩定",
            "C. 第四層（Layer 4）負載平衡器專責解析 HTTP 標頭與 Cookie；而第七層（Layer 7）負載平衡器僅能處理 TCP / UDP 連線轉發",
            "D. 在訊息佇列遙測傳輸（MQTT）中，QoS 0 確保訊息恰好送達一次（Exactly once），而 QoS 2 則為最多一次（At most once）且協定交握開銷最低"
          ],
          ans: 0,
          exp: "解析：本題完美整合 Week 2、Week 4、Week 5 與 Week 6 的網路與協定重點：VXLAN（MAC-in-UDP、24-bit VNI、1600 萬網段）vs. VLAN（12-bit、4094 網段）；第一層 vNIC 防火牆（Stateful）vs. 第二層 Subnet 過濾器（Stateless）；MQTT（TCP、2 Byte 標頭、`\\$share/group/` 共享訂閱）vs. CoAP（UDP RESTful、NB-IoT 省電）；Token Bucket（允許 Burst）vs. Leaky Bucket（恆定速率流出）。"
        },
        {
          q: "【跨週次高可用、災難復原與狀態同步總對決】綜合比較雲端服務水準（SLI / SLO / SLA）、資料庫時間點還原（PITR）、裝置影子（Device Shadow）與邊緣斷網自治機制，下列敘述何者完全正確？",
          options: [
            "A. 99.999%（五個九）的可用性（Availability）代表一年允許停機 52.6 分鐘，且當雲端供應商未達服務水準協議（SLA）時，依法必須無上限賠償企業所有營業損失",
            "B. 99.999%（五個九）代表一年允許停機僅 5.26 分鐘（四個九為 52.6 分鐘、三個九為 8.76 小時）；資料庫即服務（DBaaS）透過增量快照搭配交易預寫日誌（Write-Ahead Log, WAL）實現時間點還原（PITR）秒級復原；物聯網裝置離線時，雲端透過裝置影子（Device Shadow）計算期望狀態（desired）與報告狀態（reported）之差值（delta）實現異步控制；而在邊緣端斷網時，K3s 透過邊緣自治（Edge Autonomy）屏蔽心跳逾時驅逐（Eviction），並由 EdgeX Foundry 內嵌 Redis 實現資料暫存與轉發（Store and Forward）",
            "C. 在裝置影子（Device Shadow）中，當使用者透過手機 App 修改冷氣溫度時，會直接覆寫 `reported` 欄位，並由冷氣硬體在離線狀態下主動計算 `desired` 欄位",
            "D. 當主幹網路中斷引發數百台感測器同時離線時，智慧告警引擎應利用時間滯後補償（Hysteresis）將該次斷網拆分為數百封獨立告警簡訊逐一發送，而不應進行事件去重與聚合（Deduplication & Grouping）"
          ],
          ans: 1,
          exp: "解析：三個九（99.9%）年停機 8.76 小時、四個九（99.99%）為 52.6 分鐘、五個九（99.999%）僅 5.26 分鐘，SLA 未達標通常提供 Service Credit 抵免而非無限賠償；DBaaS PITR 靠增量快照 + WAL 達成秒級還原；Device Shadow 靠 desired - reported = delta 實現離線異步同步；邊緣端斷網則靠 K3s 邊緣自治（不驅逐 Pod）與 EdgeX Foundry 本地 Redis 暫存轉發（Store and Forward）保障產線不停擺與資料不丟失。"
        },
        {
          q: "【跨週次雲端財務維運（FinOps）與成本治理總對決】綜合比較總體擁有成本（TCO）、平台即服務成本交叉點（Cost Crossover）、四大最佳化策略與物聯網防帳單雪崩設計，下列敘述何者完全正確？",
          options: [
            "A. 新創期採用平台即服務（PaaS）與無伺服器（Serverless FaaS）可將前期固定資本支出（CapEx）轉為彈性營運支出（OpEx）並大幅降低試錯沉沒成本；物聯網場景應透過「封包合併批次上報（如每 10 秒打包 1 筆省 90% 訊息費）＋本地邊緣過濾常態重複數據＋資料庫批次插入（Batch Insert）」防範帳單雪崩；而當成熟期系統達到數十台常駐滿載實例、跨越成本交叉點（Cost Crossover）且具備強大維運團隊與可攜架構時，則可評估將固定負載下沉回基礎架構即服務（IaaS）或執行逆向出雲（Cloud Repatriation）",
            "B. 執行雲端財務維運（FinOps）的規格最佳化（Rightsizing）時，只要觀測到虛擬機處理器（CPU）使用率低於 15%，即可無條件將實例規格砍半，無須檢視記憶體與磁碟 IOPS",
            "C. 企業若將虛擬機切換為「已停止（Stopped）」狀態，即可免除掛載之區塊儲存磁碟與保留位址（IP）的所有費用；且將跨國資料從公有雲大量搬出時完全免收出站流量費（Egress Cost）",
            "D. 金融業的核心不可中斷記帳主資料庫最適合部署於低成本的可中斷資源（Spot Instances）上，而可重試的夜間批次分析則應簽訂三年期長期承諾（Reserved Instances）"
          ],
          ans: 0,
          exp: "解析：本題貫穿 Week 3、Week 4、Week 5 與 Week 6 的財務與成本治理核心：新創期用 PaaS / FaaS 降 CapEx 與試錯沉沒成本；IoT 用「10 秒打包上報 + 邊緣過濾 99% 雜訊 + DB Batch Insert」防帳單雪崩；成熟期長期穩定高利用率負載若跨越 Cost Crossover 且具強大維運團隊與可攜架構，則評估下沉回 IaaS 或逆向出雲（Cloud Repatriation）。"
        },
        {
          q: "【跨週次多租戶架構與資安合規總對決】綜合比較零信任架構（Zero Trust）、物聯網端到端資安、多租戶資料庫隔離以及跨租戶越權防禦，下列敘述何者完全正確？",
          options: [
            "A. 零信任（Zero Trust）遵循「每次存取重新驗證、最小權限、假設已入侵」三原則，以身分作為新邊界（Identity is the New Perimeter）；在物聯網端側，強制採用雙向傳輸層安全（mTLS）並將 X.509 私鑰燒錄於硬體安全模組（TPM / Secure Element），同時在平台側以基於屬性的授權（ABAC）動態代入 `\\${iot:ClientId}` 阻斷橫向移動；而在多租戶全共享表（Shared-Table）資料庫中，則於底層強制注入行級安全性（Row-Level Security, RLS）以防範不安全的物件參照（IDOR）跨租戶越權漏洞",
            "B. 只要雲端服務商通過了支付卡產業資料安全標準（PCI DSS）與健康保險可攜與責任法（HIPAA）認證，企業在平台上誤將物件儲存桶（Object Bucket）設為公開讀取依然屬於完全合規",
            "C. 為防範軟體供應鏈（Software Supply Chain）攻擊與殭屍網路（如 Mirai）分散式阻斷服務（DDoS）攻擊，應賦予持續整合／持續交付（CI/CD）管線無限最高權限，並關閉裝置閘道器（Device Gateway）的速率限制",
            "D. 在多租戶資料庫隔離模型中，全共享表（Shared-Table with Tenant ID）具備物理級資料隔離與單一租戶獨立備份還原能力，但資料庫連線池（Connection Pool）開銷最大"
          ],
          ans: 0,
          exp: "解析：本題串聯 Week 2、Week 3、Week 5 與 Week 6 的全套資安防線：1. 零信任三原則（驗證、最小權限、假設已入侵）與 Identity is the New Perimeter；2. 裝置端雙向 mTLS + TPM / Secure Element 防私鑰拷貝 + JITR；3. 平台端 ABAC（`\\${iot:ClientId}`）主題微隔離防橫向移動；4. 多租戶應用與資料層以資料庫底層行級安全性（RLS）防禦 IDOR 竄改參數越權。"
        },
        {
          q: "【跨週次現代部署、持續交付與健康治理總對決】綜合比較基礎設施即程式碼（IaC）、Git 維運（GitOps）、滾動升級（Rolling Update）、藍綠部署（Blue-Green）、金絲雀部署（Canary）、特性旗標（Feature Flags）與雙軌健康檢查，下列敘述何者完全正確？",
          options: [
            "A. 藍綠部署（Blue-Green）透過逐步將流量由 2% 放大至 10%、25%、50% 以控制爆炸半徑；而金絲雀部署（Canary）則同時維持兩套 100% 完整環境並於毫秒級內一次性原子切換全部流量",
            "B. 基礎設施即程式碼（IaC）與 Git 維運（GitOps）以 Git 作為期望狀態（Desired State）的唯一來源，消除手動修改造成的組態漂移（Configuration Drift）；在應用發布上，藍綠部署以雙環境並存達成毫秒級原子切換與回滾，金絲雀部署以漸進式放量驗證真實流量，特性旗標（Feature Flags）則將部署（Deploy）與發布（Release）解耦實現後台秒級關閉異常邏輯；而在容器探測中，存活用心跳（Liveness Probe）負責重啟死鎖實例，就緒用心跳（Readiness Probe）則於開機載入完成前暫停導流以防雪崩",
            "C. 特性旗標（Feature Flags）要求每次調整租戶功能開關時，都必須重新修改原始碼、重新編譯容器映像檔並執行完整的藍綠環境切換",
            "D. 在物聯網大規模空中韌體升級（OTA）中，為求全網版本一致，應跳過 1% → 5% → 20% 的金絲雀階段，直接對全球十萬台設備同時進行 100% 強制覆寫"
          ],
          ans: 1,
          exp: "解析：IaC 與 GitOps 解決 Configuration Drift（以 Git 為 Desired State 唯一來源）；藍綠部署為雙環境原子切換（回滾最快但耗雙倍資源）；金絲雀部署為 2% → 10% → 50% 漸進放量（最小化爆炸半徑，亦用於 OTA 階梯推播）；Feature Flags 將 Deploy 與 Release 解耦（免重編譯秒級關閉）；Liveness Probe 偵測死鎖重啟，Readiness Probe 偵測就緒前不導流防雪崩。"
        },
        {
          q: "【跨週次訊號流與事件解耦架構總對決】比較「製造現場營運科技（OT）階層」、「EdgeX Foundry 邊緣微服務三層架構」與「雲端物聯網平台規則引擎（Rule Engine）及訊息佇列」，下列關於資料流向與解耦機制的敘述何者完全正確？",
          options: [
            "A. 製造現場訊號由下而上依序經由感測與致動、可程式邏輯控制器（PLC）、監控與資料採集（SCADA）、分散式控制系統（DCS）至上層製造執行系統（MES / ERP）；在邊緣端，EdgeX Foundry 由「南向層（Device Services）」原生解析 Modbus、BACnet、OPC UA 等工業協定，經「核心層（Core Services）」與內部 ZeroMQ / MQTT 匯流排及 Redis 斷網暫存（Store and Forward），再由「北向層（App Services）」清洗聚合後推送上雲；進入雲端後，宣告式規則引擎（Rule Engine）以類 SQL 語法在記憶體中剖析 JSON 負載，將單一封包平行分流至時序庫、冷存儲數據湖與即時告警事件總線",
            "B. 在 EdgeX Foundry 中，南向層（Device Services）負責將 JSON 封包推送至公有雲 SaaS；北向層（App Services）則負責直接透過序列埠讀取現場 PLC 的 Modbus 暫存器",
            "C. 當突發海量感測封包湧入雲端時，為達成削峰填谷（Peak Shaving）並讓同一筆感測數據能同時被「即時監控看板」、「告警服務」與「歷史儲存管線」三個下游系統各自完整處理，應採用僅允許單一節點競爭消費一次的點對點佇列（Queue），而非發布／訂閱（Pub/Sub）模式",
            "D. 宣告式規則引擎（Rule Engine）強制要求工程師必須自行架設後端虛擬機並撰寫數千行轉發程式碼，且每筆封包經解析後僅能路由至單一目標儲存庫"
          ],
          ans: 0,
          exp: "解析：本題串聯 Week 2、Week 3、Week 5 與 Week 6 的完整工業資料管線：OT 階層（PLC → SCADA → DCS → MES/ERP）→ EdgeX Foundry（南向層 Device Services 轉譯 Modbus/BACnet/OPC UA → 核心層 Core Services + Redis Store and Forward → 北向層 App Services 過濾聚合推上雲）→ 雲端 IoT 平台（Device Gateway 接入 → 宣告式 Rule Engine 類 SQL 即時過濾並多目標平行派送至 TSDB、冷存儲與告警分支）。"
        },
        {
          q: "【跨週次四大垂直產業痛點與雲端／邊緣架構處方總對決】針對「智慧製造」、「零售電商」、「金融業」與「智慧醫療」四大產業的核心痛點與標準架構處方，下列配對何者完全正確？",
          options: [
            "A. 智慧製造透過邊緣高頻振動採集、頻譜分析與雲端機器學習模型實現預測性維護（PdM），並催生依使用結果收費的產品即服務（Product-as-a-Service）；零售電商透過「CDN / Cache → 佇列（Queue）→ 非同步處理（Async）→ 服務獨立擴縮」拆解搶購尖峰並以全通路（Omnichannel）共享即時庫存；金融業採「核心到邊緣（Core-to-Edge）」保留大型主機核心記帳，並以串流資料、規則引擎與圖形分析（Graph Analytics）強化反洗錢（AML）風控；智慧醫療則區分結構化之醫院資訊系統（HIS）與大容量長週期之醫療影像儲傳系統（PACS），在病患授權與合規下實現跨院安全共享",
            "B. 零售電商面對雙 11 瞬間尖峰時，最佳實踐是移除訊息佇列（Queue）與快取（Cache），讓所有搶購請求直接對單體關聯式資料庫進行同步鎖定（Locking）以防止超賣",
            "C. 金融業上雲轉型的首要步驟是將核心記帳系統搬移至無持久性的本機暫態儲存（Ephemeral Store），並改用每日一次的離線批次分析執行即時盜刷攔截",
            "D. 智慧醫療的醫療影像儲傳系統（PACS）因為單筆資料量極小且無隱私合規限制，最適合透過受限應用協定（CoAP）每秒全量廣播至公眾網際網路"
          ],
          ans: 0,
          exp: "解析：選項 A 完整且精準地總結了 Week 3 與 Week 6 中四大垂直產業（製造 PdM + Product-as-a-Service、零售 CDN/Cache + Queue + Async + Omnichannel、金融 Core-to-Edge + 串流圖形分析 AML、醫療 HIS 結構化 vs. PACS 大容量影像合規安全共享）的核心架構設計。"
        },
        {
          q: "【端、邊、雲協同一體化終極架構藍圖】在課程最終章「端（Device）、邊（Edge）、雲（Cloud）協同一體化架構總覽」中，關於三層各自的硬體底座、軟體技術棧與核心職責邊界，下列敘述何者完全正確？",
          options: [
            "A. 端（Device）層運行標準 Kubernetes（K8s）與分散式 etcd 以執行跨國商業決策；邊（Edge）層專責跨洲際非同步災難備援與大型語言模型訓練；雲（Cloud）層則直接負責產線 1 毫秒內的硬即時（Hard Real-Time）飛剪閉迴路控制",
            "B. 端（Device）層專注於物理感知與致動（Sensors & Actuators、MCU 微控制器毫瓦級 TinyML），承載基礎訊號轉換與硬體安全晶片（TPM）防護；邊（Edge）層以輕量容器化中樞（K3s + EdgeX Foundry）承載小於 1~5ms 的硬即時響應、工業協定轉譯、過濾 99% 常態平穩雜訊、斷網離線自治與本地 AI 推論；雲（Cloud：IaaS + PaaS + SaaS）層則以全域資源池承載多租戶物聯網平台、巨量時序與資料湖儲存、跨場域大模型訓練與企業全局商業決策",
            "C. 當企業在邊（Edge）層導入 K3s 與 EdgeX Foundry 後，所有跨廠區的歷史時序歸檔、多租戶帳務計費與全局 AI 模型訓練皆應全數下沉至現場微控制器（ESP32）內執行，從此不再需要雲（Cloud）層",
            "D. 為消除物理世界的三大壁壘，端（Device）層的所有感測器應跳過邊（Edge）層閘道，直接以每秒單筆 50 Byte 的未壓縮明文 HTTP 封包跨國寫入公有雲的關聯式資料庫"
          ],
          ans: 1,
          exp: "解析：簡報第 52 頁「端、邊、雲協同一體化架構總覽」完美收束整門課程：1. 端（Device）：專注於極致物理感知與致動（Sensors & Actuators），承載基礎訊號轉換；2. 邊（Edge）：輕量容器化中樞（K3s + EdgeX），承載硬即時響應、協定轉譯、資料初篩與 AI 推論；3. 雲（Cloud: IaaS + PaaS + SaaS）：全域資源池承載多租戶 IoT 平台、巨量時序儲存、大模型訓練與商業決策。"
        }
      ]
    }
  };

  Object.keys(hellLevelsByWorld).forEach(worldId => {
    const world = window.IOT_GAME_DATA.find(w => w.worldId === worldId);
    if (world && Array.isArray(world.levels)) {
      const hellLevel = hellLevelsByWorld[worldId];
      const existingIdx = world.levels.findIndex(lv => lv.isHell || lv.id === hellLevel.id);
      if (existingIdx >= 0) {
        world.levels[existingIdx] = hellLevel;
      } else {
        world.levels.push(hellLevel);
      }
    }
  });
})();