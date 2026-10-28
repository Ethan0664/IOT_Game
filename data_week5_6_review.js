(function() {
  if (!window.IOT_GAME_DATA) {
    window.IOT_GAME_DATA = [];
  }

  const week5To7Data = [
    {
      worldId: "week5",
      worldTitle: "第五大塊：Week 5 PaaS 平台即服務模式",
      worldDesc: "PaaS 三層抽象、五大特性與四大限制、無狀態設計、DBaaS 與快取三大災難、FaaS 與 MicroVM、藍綠/金絲雀部署與 IoT PaaS",
      levels: [
        {
          id: "w5-1",
          title: "5-1 從 IaaS 到 PaaS 的抽象化、五大技術特性與四項先天限制",
          bossName: "執行環境抽象者",
          expReward: 80,
          points: [
            {
              title: "從 IaaS 到 PaaS 的維運斷層、NIST 定義與三層抽象化模型",
              detail: "【IaaS 的殘留維運斷層】\n• 開了 IaaS 虛擬機後，團隊仍須手動安裝 OS Patch、編譯 Nginx、維護 MySQL 叢集；軟體工程師竟花費 40% 以上的時間在除錯底層 Linux 核心參數與相依套件庫衝突！\n• 核心比喻：IaaS 像是「給你資源（虛擬機）」；PaaS 更接近「給你可以直接拿來開發與執行應用程式的環境（只要提交程式碼或容器，底層自動就緒）」。\n\n【NIST SP 800-145 PaaS 定義與三層黑盒子抽象模型】\n• 租戶保留的頂層：商業邏輯程式碼（Business Logic）、資料庫綱要（Schema）與環境變數組態。\n• 被託管的中層：動態執行階段（Language Runtime）、Web 伺服器容器、連線池、自動日誌收集。\n• 被隱藏的底層：實體機房、Hypervisor、作業系統安裝、核心安全性更新、實體儲存陣列掛載。\n• 現代 PaaS 三大支柱：1. 運算與執行環境（Application Runtime：Java/Python/Node.js/Go 容器環境）；2. 託管資料服務（Managed Data Services：RDBMS/NoSQL/TSDB）；3. 分散式中介軟體（Distributed Middleware：MQ、事件匯流排、API 閘道、快取）。"
            },
            {
              title: "PaaS 共擔責任模型與五大核心技術特性",
              detail: "【PaaS 共擔責任模型】\n• 服務商全權負責：實體安全、OS CVE 弱點修補、Runtime 引擎升級、底層高可用容錯演練。\n• 共同邊界：環境變數管理、網路安全白名單、資料庫索引優化與備份保留政策制定。\n• 租戶獨立負責：應用程式碼邏輯漏洞（如 SQL Injection）、資料加解密、權限存取控制（RBAC）。\n\n【PaaS 五大核心技術特性】\n1. 多語言執行環境 (Language Runtimes)：預建模組化容器沙盒，自動讀取 `requirements.txt` 或 `package.json` 打包依賴，底層修補漏洞時支援藍綠部署無感置換。\n2. 內建自動負載平衡與反向代理：預設配置 HTTPS 終止代理與 L7 智慧路由，自動偵測實例健康度隔離當機程序，並自動向 Let's Encrypt 申請與輪換 TLS 憑證。\n3. 極致快速的彈性伸縮 (Auto-scaling)：不同於 IaaS 僅看 CPU，PaaS 能依據應用層指標「HTTP 每秒請求數 (RPS)」、「連線回應延遲」在數百毫秒至數秒內拉起數十個實例；無流量時更支援「縮容至零 (Scale to Zero)」達成零算力支出。\n4. 版本控制與宣告式部署 (Declarative Deploy)：Git-driven（`git push` 觸發建置），採不可變基礎設施（Immutable Infrastructure 嚴禁線上熱修補），當新版拋出 HTTP 500 錯誤率升高時支援「一鍵即時回滾 (Instant Rollback)」。\n5. 內建可觀察性 (Observability)：自動收集 STDOUT/STDERR 日誌串流、在 HTTP 標頭注入 Trace ID 進行分散式追蹤、內建 APM 剖析記憶體洩漏與慢查詢 SQL / Deadlock。"
            },
            {
              title: "PaaS 的四項先天限制（Lock-in / No Root / Cold Start / 長期成本膨脹）",
              detail: "1. 平台環境鎖定 (Platform Lock-in)：依賴平台專有設定檔與專利 API，無法隨意安裝自訂 C/C++ 底層動態連結庫，且資料庫引擎重大版本升級受服務商排程限制。\n2. 底層核心缺乏存取權限 (No Root Access)：禁止使用 `sudo` 或修改 Linux 核心參數（如 `/proc/sys/net` 網路調校）；難以自建私有二進位通訊協定（通常強制限制在 HTTP/HTTPS/WebSocket）；採暫態無狀態檔案系統，無法直接掛載本地實體磁碟。\n3. 冷啟動延遲 (Cold Start Latency)：當系統縮容至零（Scale to Zero）後首筆請求進來時，需經歷「排程器分配節點 → 下載容器映像 → 初始化 Runtime → 建立 DB 連線」，延遲達數百毫秒至數秒，無法適用於硬即時（Hard Real-time）工業閉迴路控制。\n4. 大規模長期運行的成本膨脹 (Cost Crossover)：PaaS 單價包含代管維運溢價；當系統規模達到數十台常駐滿載實例時，會跨越「成本交叉點（Cost Crossover）」，帳單遠高於自建 IaaS（新創期採 PaaS 買速度，規模極大時需評估將固定負載下沉回 IaaS）。"
            }
          ],
          comparisons: [
            {
              title: "IaaS vs. PaaS 技術特質與維運維度橫向對比表",
              headers: ["比較維度", "IaaS（基礎架構即服務）", "PaaS（平台即服務）"],
              rows: [
                ["抽象顆粒度", "以「主機 / 虛擬機 (VM)」為單位", "以「應用程式 / 函式 / 服務」為單位"],
                ["擴充反應時間與指標", "水平加開 VM 需數分鐘，主要依 CPU 指標", "依 HTTP RPS 或延遲加開 Pod/實例僅需數百毫秒至數秒，支援 Scale to Zero"],
                ["高可用 (HA) 建置", "需手動配置跨可用區負載平衡與叢集", "平台內建自動多節點容錯與 Let's Encrypt 憑證自動輪換"],
                ["維運技能樹要求", "需精通 Linux 核心調校、OS Patch 與網路路由", "僅需熟悉 Git、API 與商業應用程式架構"],
                ["長期滿載成本結構", "固定大規模負載下單位算力成本較低", "具代管溢價，常駐滿載超過成本交叉點 (Cost Crossover) 時帳單較高"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【IaaS vs. PaaS 抽象與特性比較】關於 IaaS 與 PaaS 在抽象層次、彈性伸縮與共擔責任模型的比較，下列敘述何者正確？",
              options: [
                "A. 在 PaaS 模式下，租戶依然必須每天手動登入伺服器執行 `sudo apt upgrade` 修補 Linux OS CVE 漏洞",
                "B. IaaS 以「應用程式」為單位且支援毫秒級 Scale to Zero；PaaS 則以「虛擬機」為單位且擴充需數十分鐘",
                "C. PaaS 將 OS、Hypervisor 與 Runtime 託管並黑盒子化，租戶僅需保留頂層「商業邏輯程式碼、DB Schema 與環境變數」，且能依據應用層指標（如 HTTP RPS、回應延遲）快速伸縮甚至縮容至零",
                "D. 採用 PaaS 後，就算工程師寫出 SQL Injection 漏洞或設定錯誤的 RBAC 權限，雲端服務商也會負全責"
              ],
              ans: 2,
              exp: "解析：PaaS 隱藏底層 OS/Hypervisor 並託管中層 Runtime，租戶保留頂層商業邏輯、Schema 與環境變數；且應用程式邏輯漏洞（如 SQL Injection）與 RBAC 權限仍由租戶獨立負責。"
            },
            {
              q: "【PaaS 四大先天限制比較】某工業自動化團隊想開發一套要求「2 毫秒內必須完成閉迴路反應、使用自訂私有二進位 TCP/UDP 協定、且需透過 `sudo` 修改 `/proc/sys/net` 核心參數」的系統；同時另一家大型企業有 100 台全年 100% 滿載的固定負載伺服器。根據 PaaS 四大先天限制，下列判斷何者正確？",
              options: [
                "A. 工業自動化系統會撞上 PaaS「No Root Access（禁止 sudo 與限制通訊協定）」與「Cold Start 冷啟動延遲」限制；而百台常駐滿載企業則會遇到「成本交叉點（Cost Crossover）」導致 PaaS 帳單遠高於 IaaS",
                "B. PaaS 的 Scale to Zero 可以完全消除冷啟動延遲，達到 0.01 毫秒硬即時反應",
                "C. PaaS 預設開放所有租戶 Root 權限自由編譯底層 Linux Kernel",
                "D. 系統規模越大、負載越固定滿載，PaaS 就比自建 IaaS 越便宜"
              ],
              ans: 0,
              exp: "解析：PaaS 具有四項先天限制：1. Platform Lock-in、2. No Root Access（禁 sudo 改核心、限制非標準二進位協定、無狀態檔案系統）、3. Cold Start（不適用硬即時控制）、4. 長期大規模常駐負載的成本膨脹（Cost Crossover）。"
            }
          ]
        },
        {
          id: "w5-2",
          title: "5-2 PaaS 部署型態、五大應用、三代演進與無狀態（Stateless）設計",
          bossName: "無狀態容器導師",
          expReward: 80,
          points: [
            {
              title: "PaaS 三種部署型態：公有 PaaS、私有 PaaS、混合 PaaS",
              detail: "1. 公有 PaaS (Public PaaS)：由超大規模雲商在公有雲託管，以多租戶容器叢集動態分配算力。核心價值為「零維運開銷、全球節點分佈、極端彈性」，適合一般商業 Web、SaaS 後台、IoT 非敏感資料轉發。\n2. 私有 PaaS (Private PaaS)：企業在地端伺服器搭建開源平台（如 Kubernetes 搭配 Red Hat OpenShift 或 Cloud Foundry）。讓內部研發享有標準化 PaaS 體驗且確保資料 100% 留存內網；但代價是企業必須配置專職雲原生維運團隊維護底層 K8s 與儲存節點。\n3. 混合 PaaS (Hybrid PaaS)：採「控制平面分離」架構——中央管理平台位於雲端，但具體運算節點可依合規需求部署在客戶地端機房（如金融業核心記帳跑地端節點，對外行銷查詢跑公有雲彈性節點）。"
            },
            {
              title: "PaaS 五大核心應用方向",
              detail: "1. 現代雲原生微服務架構：將單體巨石（Monolith）拆分為數十個不同語言撰寫的微服務，透過 REST API 或 gRPC 溝通，各小組獨立部署擴展，無需為每個微服務單獨架 VM 與 LB。\n2. 敏捷原型開發與概念驗證 (PoC)：從寫下第一行代碼到上線測試僅需數小時；若市場驗證失敗，直接刪除 PaaS 組件即可，「專案終止成本歸零」，最適合黑客松與創新實驗室。\n3. API 閘道與後端整合 (BaaS)：提供流量整形（Rate Limiting）、防爬蟲、API 金鑰驗證，充當企業遺留系統與現代 App 間的轉換層，快速介接第三方金流、簡訊與 SSO。\n4. 物聯網 (IoT) 事件處理與遙測管線：以 PaaS 訊息佇列作為吸收海量感測器並發上報的「緩衝蓄水池」，透過規則分流保護脆弱的後端資料庫不被瞬間沖垮。\n5. 現代資料管線與 ETL 批次處理：託管排程器定時觸發無伺服器短暫運算實例，執行資料去識別化與清洗聚合，算完自動釋放。"
            },
            {
              title: "三代 PaaS 技術演進與「無狀態（Stateless）架構」核心鐵律",
              detail: "【從傳統到現代：三代 PaaS 演進浪潮】\n• 第一代 PaaS（代碼直接託管）：早期如 Heroku，要求嚴格依照特定規範（如 `Procfile`）打包代碼，受限於特定語言版本，靈活性較差。\n• 第二代 PaaS（容器原生化）：以 Docker 容器映像檔為標準交付物，開發者獲得完全自訂 Runtime 的自由。\n• 第三代 PaaS（無伺服器與事件驅動）：FaaS（Function as a Service）與全託管組件深度融合，算力顆粒度極限精細化。\n\n【PaaS 生態下的無狀態 (Stateless) 架構三大要求】\n為了確保系統能隨時水平增減十台運算實例且任何一台皆可處理任意請求：\n1. 本地記憶體不可信：絕不將使用者 Session 或任務進度保存在伺服器本地記憶體中，全面改存於外部快取（如託管 Redis）。\n2. 本地磁碟不可信：禁止依賴本地磁碟存放使用者上傳檔案（容器重啟即消失），全面轉向物件儲存（Object Storage）或雲端共享檔案系統。\n3. 水平擴充可行性：透過 CI/CD（Git Webhook → 測試建置映像存入 Registry → 健康檢查平滑切換）達成自動化交付。"
            }
          ],
          comparisons: [
            {
              title: "三代 PaaS 技術演進浪潮對照表",
              headers: ["演進世代", "核心交付物與代表", "技術特徵與靈活性比較"],
              rows: [
                ["第一代 PaaS（代碼託管）", "原始碼 + 專有設定檔（如早期 Heroku Procfile）", "部署極簡，但嚴格受限於平台支援的特定語言版本，靈活性較差"],
                ["第二代 PaaS（容器原生）", "標準 Docker 容器映像檔 (Container Image)", "突破語言環境限制，開發者擁有完全自訂 Runtime 與系統相依庫的自由"],
                ["第三代 PaaS（無伺服器化）", "單一事件處理函式 (FaaS) + 全託管中介組件", "事件驅動、毫秒級瞬態啟動、無流量時零成本，算力顆粒度極限精細化"]
              ]
            },
            {
              title: "有狀態傳統設計 (Stateful) vs. PaaS 無狀態架構設計 (Stateless) 比較",
              headers: ["資源維度", "傳統有狀態設計（阻礙水平擴縮）", "PaaS 無狀態 (Stateless) 標準設計"],
              rows: [
                ["使用者登入狀態 (Session)", "保存在單台伺服器的本地記憶體中", "本地記憶體不可信！統一外移至外部託管快取（如 Redis）"],
                ["使用者上傳檔案與圖片", "直接寫入伺服器本地磁碟目錄", "本地磁碟不可信（縮容即消失）！全面改存物件儲存 (Object Storage)"],
                ["水平擴充影響", "請求若被導向其他節點會發生登出或找不到檔案", "任意增減十台運算實例，任何一台皆能處理任意請求且結果完全一致"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【無狀態設計比較】某工程師將舊網站搬上 PaaS 平台並開啟 Auto-scaling（從 1 台自動擴展為 5 台實例）。上線後用戶紛紛抱怨：「剛登入成功，重新整理網頁卻又被強制登出；剛上傳的大頭貼圖片，過幾分鐘就破圖消失！」請問這是因為工程師違反了 PaaS 的哪一項核心架構要求？",
              options: [
                "A. 違反了「無狀態（Stateless）架構」要求：誤將 Session 保存在本地記憶體、將上傳檔案存在暫態本地磁碟；應將 Session 改存外部快取（Redis），檔案改存物件儲存（Object Storage）",
                "B. 因為工程師沒有購買自建機房的 UPS 不斷電系統",
                "C. 因為他使用了第三代 PaaS 而不是第一代 Heroku Procfile",
                "D. 因為 PaaS 平台不支援 HTTP 與 HTTPS 協定"
              ],
              ans: 0,
              exp: "解析：PaaS 運算實例隨時會動態增減或銷毀，因此必須遵循無狀態（Stateless）設計：本地記憶體不可信（Session 存外部快取）、本地磁碟不可信（檔案存物件儲存）。"
            },
            {
              q: "【三代 PaaS 與部署選型比較】關於「三代 PaaS 演進」以及「IaaS vs. PaaS 架構選型思維」，下列敘述何者正確？",
              options: [
                "A. 第一代 PaaS 以 Docker 容器為交付物；第二代則要求寫 Procfile",
                "B. 當企業需要客製化 Linux 核心模組、跑非標準網路協定、且負載極度龐大固定時應選 PaaS；當團隊以純軟體開發為主、追求極速上市且免除維運時應選自建 Bare-Metal",
                "C. 實務上常採「混合共存模式」：將核心資料庫自建於高規格受控環境，而周邊快速迭代的 Web / API 業務全面採用 PaaS 託管；且第二代 PaaS 透過容器原生化賦予開發者自訂 Runtime 的自由",
                "D. 私有 PaaS（如地端自建 OpenShift）完全不需要任何維運人員照顧底層 Kubernetes 叢集"
              ],
              ans: 2,
              exp: "解析：需客製化 Linux 核心、非標準協定、負載龐大固定且有資深網管時選 IaaS；純軟體開發、追求 Time-to-Market 與免維運時選 PaaS，兩者亦可混合共存。"
            }
          ]
        },
        {
          id: "w5-3",
          title: "5-3 DBaaS 四大能力、Managed TSDB 與分散式快取三大災難防禦",
          bossName: "快取雪崩守護神",
          expReward: 85,
          points: [
            {
              title: "中介軟體即服務（Software Glue）與 DBaaS 四大核心能力",
              detail: "【中介軟體即服務 (Middleware as a Service)】\n• 充當連接不同應用程式、資料庫與外部協定的「軟體膠水（Software Glue）」。現代 PaaS 將其分為三層：資料持久化層（DBaaS）、事件邏輯運算層（FaaS）、非同步通訊緩衝層（Message Broker），實現模組解耦。\n\n【DBaaS（資料庫即服務）四項核心能力】\n租戶只面對 SQL 介面與連線字串，把底層高可用與擴容交給平台：\n1. 自動化高可用與雙機熱備 (HA & Failover)：Primary 節點寫入時透過同步/半同步複寫至 Standby 節點；Primary 當機時，守護程序在 30～60 秒內自動將 Standby 提升為 Primary，且客戶端連線指向固定的「DNS CNAME 虛擬端點」，底層切換對應用程式完全透明。\n2. 讀寫分離 (Read/Write Splitting)：針對物聯網監控與電商「讀多寫少」特性，建立多個唯讀副本（Read Replicas），由智慧 DB 代理層自動辨識 SQL（`SELECT` 導向唯讀節點，`INSERT/UPDATE` 導向主庫）。\n3. 時間點還原 (PITR, Point-in-Time Recovery)：透過定時增量磁碟快照 + 即時串流儲存「交易預寫日誌（Write-Ahead Log, WAL）」，當工程師誤下 `DROP TABLE` 時，可精確還原至「事故發生前 1 秒」的狀態，也能零衝擊克隆測試庫。\n4. 無感線上垂直擴容 (Online Scaling)：儲存容量自動無感增長；升級 CPU/RAM 時平台先在背景啟動新規格副本同步資料，最後執行毫秒級主從切換，徹底告別初期預買三年容量的焦慮。"
            },
            {
              title: "時序資料庫即服務（Managed TSDB）與分散式快取（Managed Cache）",
              detail: "• Managed TSDB in PaaS：專為海量 IoT 裝置每秒上報的時序資料（Timestamp + Metric + Device ID）設計。底層捨棄傳統關聯式 B-Tree，改採「LSM-Tree（Log-Structured Merge-tree）」以支援極限高速循序寫入；並支援配置生命週期政策「自動降採樣（Downsampling，如將一個月前的秒級資料自動聚合為分級平均值節省空間）」。\n• 分散式快取即服務（如託管 Redis / Memcached）：位於應用與磁碟 DB 之間的記憶體高速緩衝層，提供「亞毫秒級（Sub-millisecond）」讀取延遲，常用於 IoT 最新狀態緩存、Session 快照與全域分散式鎖（Distributed Lock）。"
            },
            {
              title: "必考！快取架構三大陷阱與防禦模式（穿透 vs. 擊穿 vs. 雪崩）",
              detail: "1. 快取穿透 (Cache Penetration)：\n   - 現象：惡意攻擊或異常請求大量查詢「快取與資料庫中都根本不存在的 Key」，導致請求每次都穿透快取直接打爆後端資料庫。\n   - 防禦：在快取前部署「布隆過濾器（Bloom Filter）」快速攔截不存在的 Key（或快取空值）。\n2. 快取擊穿 (Cache Breakdown)：\n   - 現象：某一個極高併發存取的「單一熱點 Key（Hot Key）」剛好到期的瞬間，成千上萬筆併發請求同時發現快取失效，瞬間全數鑿穿至後端資料庫。\n   - 防禦：採用「互斥鎖更新（Mutex Lock）」，只允許單一執行緒去資料庫撈取並重建快取，其餘執行緒等待。\n3. 快取雪崩 (Cache Avalanche)：\n   - 現象：「大批量的 Key 在同一時間集體過期」（或快取叢集節點故障），導致海量請求瞬間如雪崩般湧向資料庫。\n   - 防禦：在設定 Key 的過期時間（TTL）時，強制附加「隨機擾動值（Random Jitter）」，打散過期時間點。"
            }
          ],
          comparisons: [
            {
              title: "分散式快取三大災難陷阱與防禦機制終極對照表",
              headers: ["快取災難名稱", "故障觸發核心成因", "對後端資料庫的衝擊", "標準工程防禦解法"],
              rows: [
                ["1. 快取穿透 (Cache Penetration)", "大量請求查詢「快取與 DB 皆不存在的 Key」", "快取永遠 Miss，所有無效請求 100% 穿透打向 DB", "布隆過濾器 (Bloom Filter) 預先攔截不存在的 Key"],
                ["2. 快取擊穿 (Cache Breakdown)", "「單一超高併發熱點 Key」剛好過期失效的瞬間", "針對該熱點的數萬併發瞬間同時衝進 DB 重建快取", "互斥鎖更新 (Mutex Lock)，僅讓一個執行緒回源查 DB"],
                ["3. 快取雪崩 (Cache Avalanche)", "「大量 Key 在同一時間點集體過期」", "全面性快取失效，全站流量瞬間壓垮後端 DB", "設定過期時間 (TTL) 時附加「隨機擾動值 (Random Jitter)」"]
              ]
            },
            {
              title: "傳統關聯式資料庫 (RDBMS) vs. PaaS 託管時序資料庫 (Managed TSDB)",
              headers: ["比較維度", "傳統關聯式資料庫 (RDBMS)", "託管時序資料庫 (Managed TSDB)"],
              rows: [
                ["底層索引結構", "B-Tree / B+ Tree（隨機寫入需頻繁調整樹結構）", "LSM-Tree（日誌結構合併樹，轉為高速循序寫入）"],
                ["歷史資料處理", "需人工寫腳本定期刪除或搬移舊表", "內建自動降採樣 (Downsampling) 與 TTL 生命週期管理"],
                ["最佳適用場景", "高一致性帳務交易、複雜關聯查詢", "海量 IoT 感測器每秒持續追加寫入的時序指標"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【快取三大陷阱比較】關於分散式快取中的「快取穿透（Penetration）」、「快取擊穿（Breakdown）」與「快取雪崩（Avalanche）」三者的成因與防禦配對，下列何者完全正確？",
              options: [
                "A. 快取穿透是「大量 Key 同時過期」，防禦用互斥鎖；快取雪崩是「查詢不存在的 Key」，防禦用布隆過濾器",
                "B. 快取穿透是「查詢不存在的 Key」（防禦：布隆過濾器 Bloom Filter）；快取擊穿是「單一熱點 Key 剛好過期」（防禦：互斥鎖 Mutex Lock）；快取雪崩是「大量 Key 同時集體過期」（防禦：過期時間加上隨機擾動值 Jitter）",
                "C. 三種問題都只需要把資料庫的硬碟拔掉就能解決",
                "D. 布隆過濾器（Bloom Filter）的作用是把資料庫的 B-Tree 轉成關聯表"
              ],
              ans: 1,
              exp: "解析：穿透＝查不存在的 Key（用布隆過濾器）；擊穿＝單一熱點 Key 過期（用互斥鎖）；雪崩＝大量 Key 同時過期（TTL 加隨機擾動值 Jitter）。這是極經典的架構比較考點！"
            },
            {
              q: "【DBaaS 四大能力比較】某工程師在下午 14:30:00 不小心對生產環境資料庫執行了 `DROP TABLE orders`，且團隊希望將資料庫精確還原到「14:29:59（事故發生前 1 秒）」的狀態；同時平時為了應付大量報表查詢，希望將 `SELECT` 自動導向唯讀節點。這分別依賴 DBaaS 的哪兩項能力？",
              options: [
                "A. 分別依賴「時間點還原（PITR，結合增量快照與 WAL 預寫日誌）」與「讀寫分離（Read Replicas 搭配智慧 DB 代理層）」",
                "B. 依賴手動去機房換硬碟與關閉 DNS CNAME",
                "C. 依賴將資料庫改為無持久性的暫態儲存",
                "D. 依賴把所有 SQL 查詢都丟棄不處理"
              ],
              ans: 0,
              exp: "解析：PITR（Point-in-Time Recovery）利用增量快照與連續串流儲存的交易預寫日誌（WAL）實現任意秒級還原；讀寫分離則透過 Read Replicas 與智慧代理分流 SELECT 與 INSERT/UPDATE。"
            }
          ]
        },
        {
          id: "w5-4",
          title: "5-4 Serverless / FaaS、MicroVM 革命、Queue vs. Pub/Sub 與冪等性",
          bossName: "微虛瞬態仲裁者",
          expReward: 85,
          points: [
            {
              title: "Serverless 與 FaaS 本質、執行生命週期與極致細粒度計費",
              detail: "• 核心觀念：Serverless 不是真的沒有伺服器，而是「開發者徹底不需要管理或感知任何伺服器」。\n• FaaS (Function as a Service) 生命週期：將程式拆解為無狀態、短暫運行的單一功能函式，平時處於凍結狀態；當事件（HTTP 呼叫或 MQTT 封包）抵達時 → 底層微型容器（MicroVM）在數十毫秒內被拉起掛載代碼 → 執行邏輯寫入 DB 後迅速銷毀或凍結。\n• 極致計費模式：依「總請求次數 (Requests) + 執行時間 × 配置記憶體 (GB-Seconds)」結算。若半夜沒有任何事件產生，運算費用為「絕對的零元」！單一函式設有最長超時限制（5～15 分鐘）防止無限迴圈燒穿帳單。"
            },
            {
              title: "FaaS 冷啟動（Cold Start）深入拆解與 MicroVM（Firecracker）技術革命",
              detail: "【FaaS 冷啟動耗時拆解與語言差異】\n• 冷啟動流程：下載容器映像 → 啟動 MicroVM → 初始化 Language Runtime → 建立外部 DB 連線池。\n• 程式語言差異：編譯型語言（Go、Rust）冷啟動僅需「數十毫秒」；重型虛擬機語言（Java、C#）可能長達「數秒」！緩解手段包含：預留並發實例（Provisioned Concurrency）、輕量化套件體積、使用連線代理池。\n\n【微型虛擬化技術：MicroVM 革命（如 AWS Firecracker）】\n• 傳統 Docker 容器痛點：共用宿主機核心，在公有雲多租戶環境下存在「容器逃逸」安全風險。\n• 傳統 KVM 虛擬機痛點：啟動需數秒至數十秒，過於笨重，無法滿足 FaaS 毫秒級彈性。\n• MicroVM 技術突破：如 Firecracker，精簡掉所有非必要虛擬硬體設備，能在「5 毫秒（5ms）內極速啟動」，同時維持「硬體級安全隔離」！"
            },
            {
              title: "訊息佇列（Queue vs. Pub/Sub）、遞送語意與消費者冪等性（Idempotency）",
              detail: "【Managed Message Queue 與兩種分發模型對比】\n• 削峰填谷 (Peak Shaving)：將突發海量請求堆疊於持久化日誌中，消費者處理完回傳 ACK 才刪除。\n• 點對點佇列 (Queue) vs. 發布/訂閱 (Pub/Sub)：\n  - 點對點佇列 (Queue)：一則訊息「僅能被單一工作節點競爭性取得並處理一次」，適合工作任務分派。\n  - 發布/訂閱 (Pub/Sub)：一則訊息發布至 Topic 後，「廣播複製分發給所有訂閱者」，適合 IoT 感測數據同時供監控儀表板與儲存管線多方消費。\n\n【訊息遞送語意折衷與消費者冪等性 (Idempotency) 實務】\n• 三種語意：At-most-once（最多一次，可掉包，適合高頻溫濕度）、At-least-once（至少一次，不丟包但可能重複，最常用）、Exactly-once（恰好一次，依賴兩階段提交與全局去重，開銷最昂貴、吞吐量大幅下降）。\n• 冪等性設計 (Idempotency)：為配合 At-least-once 的重複訊息，必須確保「同一個操作執行一次與重複執行十次，系統最終狀態完全一致」！\n  - 實務手段一：為每筆 IoT 封包注入全局唯一 `UUID`，消費者先查快取，若已處理過則直接忽略。\n  - 實務手段二：資料庫改採樂觀鎖（Optimistic Locking）或以時間戳條件更新（`WHERE timestamp > current`）。\n• 事件驅動架構 (EDA)：從主動輪詢（Polling）轉向「Event Source → Event Broker → Event Handler」，新增業務功能只需增加新訂閱者，無需修改原發布者程式碼。"
            }
          ],
          comparisons: [
            {
              title: "傳統容器 (Docker) vs. 傳統虛擬機 (KVM) vs. 微型虛擬機 (MicroVM / Firecracker)",
              headers: ["比較維度", "傳統容器 (Standard Docker)", "傳統虛擬機 (Full KVM VM)", "微型虛擬機 (MicroVM, 如 Firecracker)"],
              rows: [
                ["安全隔離邊界", "共用宿主機 Kernel，多租戶下有容器逃逸風險", "完整硬體虛擬化，具備強硬體級隔離", "精簡版硬體虛擬化，兼具強硬體級多租戶隔離"],
                ["啟動速度與資源開銷", "極快（毫秒級）、記憶體開銷極小", "慢（數秒至數十秒）、Guest OS 肥大", "極快（約 5 毫秒內啟動）、記憶體開銷極精簡"],
                ["PaaS / FaaS 定位", "適合單一租戶內部微服務叢集", "適合長駐型 IaaS 運算實例", "專為公有雲多租戶 Serverless FaaS 瞬態排程打造"]
              ]
            },
            {
              title: "點對點佇列 (Queue) vs. 發布/訂閱 (Pub/Sub) 與三種遞送語意比較",
              headers: ["模式 / 語意", "訊息分發與可靠性機制", "工程折衷與典型應用場景"],
              rows: [
                ["點對點佇列 (Queue)", "單一訊息僅能被一個消費者競爭取得並消費一次", "適合後端非同步工作任務分派（如轉檔、發信工作池）"],
                ["發布/訂閱 (Pub/Sub)", "單一訊息廣播複製給所有訂閱該 Topic 的消費者", "適合 IoT 遙測數據同時分發給即時看板、告警引擎與儲存管線"],
                ["At-least-once（至少一次）", "保證絕不丟失，但網路重試會產生重複訊息", "實務最常用！但消費者必須實作「冪等性（UUID 去重或樂觀鎖）」"],
                ["Exactly-once（恰好一次）", "依賴兩階段提交與全局去重確保不丟不重", "分散式系統中最昂貴協定，吞吐量大幅下降，僅用於嚴格計費交易"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【MicroVM 與 FaaS 冷啟動比較】為什麼現代公有雲的無伺服器平台（Serverless FaaS）底層廣泛採用如 AWS Firecracker 的「MicroVM（微型虛擬機）」技術，且在延遲敏感場景偏好使用 Go / Rust 而非 Java？",
              options: [
                "A. 因為標準 Docker 容器共用主機核心存在多租戶安全逃逸風險，而傳統 KVM 虛擬機啟動太慢；MicroVM 精簡非必要虛擬硬體，能在 5 毫秒內啟動並維持硬體級隔離。此外編譯型語言（Go/Rust）冷啟動僅數十毫秒，遠快於重型 VM 語言（Java/C#）",
                "B. 因為 MicroVM 啟動需要 30 分鐘，可以幫雲端供應商多收 GB-Seconds 的錢",
                "C. 因為 FaaS 在半夜沒有任何流量時，每秒鐘仍會收取最高額的固定月租費",
                "D. 因為 Java 程式無法在任何雲端環境執行"
              ],
              ans: 0,
              exp: "解析：MicroVM（如 Firecracker）解決了傳統容器多租戶逃逸風險與傳統 VM 啟動過慢的兩難，達成 5ms 啟動與硬體隔離；而 Go/Rust 等編譯語言能大幅縮短冷啟動中初始化 Language Runtime 的耗時。"
            },
            {
              q: "【遞送語意與冪等性比較】在物聯網訊息管線中，若訊息佇列設定為「At-least-once（至少一次）」遞送語意，當網路發生短暫抖動重試時，後端消費者可能會收到兩次完全相同的扣款或狀態更新封包。工程師應如何設計「消費者冪等性（Idempotency）」來防範資料錯亂？",
              options: [
                "A. 直接改用 At-most-once，讓所有重要帳務訊息隨便掉包不重傳",
                "B. 為每筆上報封包注入全局唯一 `UUID`（消費者先查快取，已處理則忽略），或在資料庫操作採用樂觀鎖 / 時間戳條件更新（`WHERE timestamp > current`），確保執行一次與執行十次最終狀態完全一致",
                "C. 把訊息佇列刪除，改由前端每秒鐘用無窮迴圈暴力輪詢（Polling）資料庫",
                "D. 規定每台感測器一輩子只能發送一筆封包"
              ],
              ans: 1,
              exp: "解析：At-least-once 保證不丟包但可能重複，因此消費者必須實作「冪等性（Idempotency）」：透過全局唯一 UUID 快取去重，或以樂觀鎖 / `WHERE timestamp > current` 確保重複執行不改變最終結果。"
            }
          ]
        },
        {
          id: "w5-5",
          title: "5-5 API 流量整形、連線池耗盡危機、藍綠 vs. 金絲雀部署與雙軌健康檢查",
          bossName: "流量守門審判者",
          expReward: 85,
          points: [
            {
              title: "API 閘道即服務、權杖桶（Token Bucket）與「連線池耗盡危機」",
              detail: "【API Gateway 與權杖桶演算法】\n• API Gateway 作為統一入口，將身分認證、流量限制、CORS 標頭與日誌等跨切面功能集中下沉，並支援將外部 HTTP REST 自動轉為內部 gRPC 或事件佇列。\n• 權杖桶 (Token Bucket)：以固定速率往桶中放權杖，請求進來需消耗權杖；允許短時間消耗累積權杖以「平滑應對瞬間突發尖峰（Burst）」，同時確保長週期平均速率不超載，防禦被劫持 IoT 設備發起的 DoS 攻擊。\n\n【PaaS / FaaS 環境下的連線池耗盡 (Connection Exhaustion) 危機】\n• 危機根源：當突發流量湧入，FaaS 在一秒內瞬間拉起數千個無狀態函式實例，每個實例各自向後端關聯式資料庫（PostgreSQL / MySQL）建立新連線，瞬間打爆單台 DB 數百至數千的記憶體連線上限！\n• 雲端中介標準解法：在 FaaS 與 DBaaS 之間架設常駐的「資料庫連線代理（Database Proxy）」，由代理層動態複用連線池，保護後端資料庫。"
            },
            {
              title: "現代 PaaS 部署範式對決：藍綠部署（Blue-Green）vs. 金絲雀部署（Canary）",
              detail: "1. 藍綠部署 (Blue-Green Deployment)：\n   - 運作機制：生產環境同時並存 Blue（當前運行舊版）與 Green（新部署版）兩組完全一致的獨立環境。新版通過內部測試後，反向代理在毫秒級內將外部路由指針從 Blue「100% 原子切換」至 Green。\n   - 優勢與代價：若新版發生異常，指針立即切回 Blue，停機與回滾時間趨近零；但代價是部署期間需消耗雙倍運算資源。\n2. 金絲雀部署 (Canary Deployment)：\n   - 運作機制：漸進式放量！先將外部流量的 `2%` 導向新版本，其餘 `98%` 依然走舊版本；觀察日誌與錯誤率指標無異常後，在數小時內逐步放大至 `10% → 25% → 50% → 100%`。\n   - 優勢：即使新版本存在隱性重大 Bug 或緩慢記憶體洩漏，受影響的終端使用者也被嚴格控制在極小爆炸半徑內。"
            },
            {
              title: "日誌串流（Log Streaming）與雙軌健康檢查（Liveness vs. Readiness Probe）",
              detail: "• Log Streaming 架構：微服務拋棄維護本地 `/var/log` 檔案，統一寫入「標準輸出（STDOUT）」；由平台守護程序即時捕捉並分流至時序日誌庫索引，維運人員可在數秒內跨數千容器搜尋特定 `Trace ID` 的錯誤堆疊。\n• 健康檢查雙軌機制（必考對比！）：\n  1. 存活用心跳 (Liveness Probe)：偵測程序是否陷入「無窮迴圈或死鎖（Deadlock）」。若探測失敗，平台會直接「重啟（Restart）該運算實例」。\n  2. 就緒用心跳 (Readiness Probe)：偵測剛啟動的應用「是否已完成開機配置載入與外部資料庫連線」。在通過檢查前，負載平衡器「絕不分派任何外部流量給它」（但不會重啟它），防範剛啟動尚未準備好的節點被大量流量沖垮引發雪崩效應！"
            }
          ],
          comparisons: [
            {
              title: "現代無感部署對決：藍綠部署 (Blue-Green) vs. 金絲雀部署 (Canary)",
              headers: ["比較維度", "藍綠部署 (Blue-Green Deployment)", "金絲雀部署 (Canary Deployment)"],
              rows: [
                ["環境與流量切換方式", "雙套完整環境 (Blue/Green) 並存，反向代理一次性 100% 原子切換流量", "新舊版本並存，先導流 2% 給新版，逐步依 10%→25%→50%→100% 漸進放量"],
                ["資源消耗成本", "高（切換期間需準備雙倍 200% 的伺服器實例容量）", "低（僅需額外啟動少數金絲雀新版實例）"],
                ["核心風險控制優勢", "回滾速度最快（毫秒級切回舊環境），環境隔離最乾淨", "爆炸半徑最小（隱性 Bug 僅影響 2% 真實用戶），適合驗證真實生產流量反應"]
              ]
            },
            {
              title: "PaaS / 容器雙軌健康檢查比較：Liveness Probe vs. Readiness Probe",
              headers: ["健康檢查類型", "探測核心目的", "探測失敗時的平台處置動作", "解決的工程痛點"],
              rows: [
                ["存活用心跳 (Liveness Probe)", "檢查程式是否還活著（是否發生死鎖 Deadlock 或無窮迴圈卡死）", "直接殺掉並「重新啟動 (Restart)」該容器實例", "讓卡死的殭屍程序自動重啟自癒"],
                ["就緒用心跳 (Readiness Probe)", "檢查程式是否已準備好接客（是否完成大型快取載入與 DB 連線）", "「不重啟實例」，但從負載平衡摘除，「暫停分派任何外部流量」", "防止剛開機還沒連上 DB 的實例被瞬間流量衝垮引發雪崩"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【雙軌健康檢查比較】某 Java 微服務啟動時需要花 25 秒載入大型本地字典與建立資料庫連線池。若工程師誤將「Liveness Probe（存活用心跳）」設為開機後第 5 秒就檢查且失敗即刻處理，卻沒設定「Readiness Probe（就緒用心跳）」，會發生什麼現象？",
              options: [
                "A. 容器還沒載入完就被 Liveness Probe 判定死亡而無限循環重啟（CrashLoop）；正確做法應以 Readiness Probe 在載入完成前暫停分派外部流量（不重啟），並以 Liveness Probe 偵測運行中死鎖",
                "B. Readiness Probe 探測失敗時會自動把整座雲端資料中心格式化",
                "C. Liveness Probe 的唯一功能是幫微服務申請 Let's Encrypt 憑證",
                "D. 微服務應該把所有日誌寫進本地 `/var/log` 磁碟，絕對不能輸出到 STDOUT"
              ],
              ans: 0,
              exp: "解析：Liveness Probe 用於偵測死鎖/無窮迴圈，失敗時會「重啟實例」；Readiness Probe 用於偵測是否完成開機載入與 DB 連線，失敗時「不分派外部流量但不重啟」，防範雪崩效應。"
            },
            {
              q: "【連線池耗盡與部署策略比較】當促銷流量突發湧入，Serverless FaaS 瞬間拉起 3,000 個函式實例，導致後端 PostgreSQL 資料庫因連線數被打滿而崩潰；同時團隊希望下次新演算法上線時先讓 2% 的真實用戶試用觀察是否有記憶體洩漏。這兩個問題分別應採用什麼架構方案解決？",
              options: [
                "A. 分別採用「資料庫連線代理（Database Proxy）動態複用連線池」與「金絲雀部署（Canary Deployment，2% → 10% → 50% 漸進放量）」",
                "B. 把資料庫關機，並採用手動 SSH 上傳程式碼熱修補",
                "C. 改用無狀態的 NACL 防火牆取代資料庫",
                "D. 將 FaaS 每個函式的超時時間設為 100 年"
              ],
              ans: 0,
              exp: "解析：FaaS 瞬間高併發引發的 Connection Exhaustion（連線池耗盡）需在 FaaS 與 DBaaS 間架設常駐「資料庫連線代理 (Database Proxy)」複用連線池；而先導流 2% 漸進放大觀察錯誤率則是標準的「金絲雀部署 (Canary Deployment)」。"
            }
          ]
        },
        {
          id: "w5-6",
          title: "5-6 IoT PaaS 五大核心模組、資安、SLI/SLO、跨區容災與帳單治理",
          bossName: "百萬長連統御者",
          expReward: 90,
          points: [
            {
              title: "IoT PaaS 邏輯拓撲與模組 1：託管連線閘道、共享訂閱與保留訊息",
              detail: "【IoT PaaS 三層邏輯拓撲】\n• 邊緣接入層（TLS 加密接入）→ 平台核心層（Device Gateway、身分授權、裝置影子、規則引擎、Jobs/OTA）→ 資料與應用層（TSDB、資料湖、FaaS、監控儀表板）。\n\n【核心模組 1：託管型連線閘道 (Managed Device Gateway) 與 MQTT 高可用】\n• 在記憶體中同時維持數百萬個 MQTT TCP 長連線，以極小開銷的心跳封包（`PINGREQ / PINGRESP`）精準感知設備在線狀態，並將 MQTT、WebSocket、HTTPS 封包統一正規化。\n• MQTT Broker 在 PaaS 層級的三大高可用機制：\n  1. 叢集化狀態同步：多節點共用記憶體狀態路由表，單節點當機時連線自動漂移重連。\n  2. 共享訂閱機制 (Shared Subscriptions)：在主題前加上 `\\$share/group/`，即可將高頻設備訊息「均勻負載平衡分發」給後端多個消費者實例。\n  3. 訊息保留 (Retained Messages)：Broker 為每個主題保存最新一筆數據，新訂閱者剛連上線時無需乾等，可立即獲取設備最新狀態。"
            },
            {
              title: "模組 2～5：零信任憑證與 ABAC、規則引擎、裝置影子、Jobs & OTA",
              detail: "• 核心模組 2（身分識別與 ABAC 細粒度授權）：放棄高風險帳密，強制雙向 X.509 憑證認證（mTLS）；集中管理憑證簽發、在線狀態查詢（OCSP）與吊銷黑名單（CRL），並支援出廠首次通電自動註冊（JITR）。透過「基於屬性的授權（ABAC）」利用 `\\${iot:ClientId}` 變數動態生成權限，確保設備 A 僅能存取 `device/A/telemetry`，就算單一設備被駭客物理拆解竊取憑證，也無法橫向移動竊聽工廠其他機台！\n• 核心模組 3（宣告式規則引擎 Rules Engine）：充當中央智慧郵局，支援類 SQL 語法（如 `SELECT temperature, device_id FROM 'sensors/#' WHERE temperature > 80`）無程式碼路由至三條分支：1. 即時告警分支（Webhook 通報工程師）；2. 原始資料保存分支（批次打包寫入低成本物件儲存數據湖）；3. 業務整合分支（派發至 ERP/CRM 自動更新維修工單）。\n• 核心模組 4（裝置影子 Device Shadow）：克服設備休眠（Sleep）或地下室斷網，以 JSON 維持 `reported`（實際回報）、`desired`（期望設定）與 `delta`（差值），實現異步遠端控制。\n• 核心模組 5（大規模韌體升級 Jobs & OTA）：結合 1% 測試設備 24 小時金絲雀升級策略，以及斷電/校驗失敗時硬體 Dual-Boot 雙分區自動回滾機制。"
            },
            {
              title: "IoT PaaS 資安防禦、SLI/SLO 指標、跨區多活容災與「防帳單雪崩三招」",
              detail: "【資安防禦戰略】\n• 防禦殭屍網路（如 Mirai）DDoS 攻擊：Gateway 強制實施速率限制（Rate Limiting）與連線白名單，自動封鎖異常高頻連線之 Device ID。\n• 防禦中間人攻擊（MITM）篡改數據：強制 TLS 1.3 傳輸加密與封包數位簽章。\n\n【維運 SLI / SLO 與跨區域多主動 (Multi-Region Active) 容災】\n• 關鍵 SLO 設定：1. 閘道連線成功率 `> 99.95%`；2. 端到端訊息延遲（感測器發出至規則引擎路由完成）P95 需 `< 100ms`；3. 嚴格監控規則引擎執行失敗率。\n• 跨區容災：當某區域光纖中斷，全球 DNS 自動將設備導向次要區域；DBaaS 跨國非同步複寫（秒級 RPO）；裝置影子跨區同步確保遠端控制不中斷。\n\n【PaaS 成本治理實戰：如何避免物聯網帳單雪崩？（必考三招）】\n1. 封包合併批次上報：避免每秒發送 1 筆 50 Byte 封包，改為「每 10 秒打包 1 筆上報」，訊息計費瞬間減少 `90%`！\n2. 善用本地邊緣過濾：常態穩定的重複數據（如室溫維持 25 度無變化）在邊緣端直接丟棄，僅上報變化差值（Delta）。\n3. 資料庫寫入合併：在 FaaS 與 DB 之間利用記憶體緩衝區進行「批次插入（Batch Insert）」，大幅降低資料庫 IOPS 寫入費用。"
            }
          ],
          comparisons: [
            {
              title: "MQTT 進階特性與 IoT PaaS 授權機制比較",
              headers: ["技術機制", "核心運作原理", "解決的物聯網實務問題"],
              rows: [
                ["共享訂閱 ($share/group/)", "將同一 Topic 的訊息均勻負載平衡分發給群組內多個後端消費者", "防止單一後端服務被百萬設備的高頻訊息塞爆"],
                ["保留訊息 (Retained Messages)", "Broker 為每個 Topic 持久化保存最後一筆有效狀態封包", "手機 App 或監控看板剛連上線瞬間即可拿到最新讀數，不必等設備下次上報"],
                ["ABAC 動態策略變數 (${iot:ClientId})", "單一策略範本動態綁定設備自身 ID，嚴格限制僅能讀寫專屬 Topic", "阻斷橫向移動！單台路燈被駭客拆解竊取憑證，也無法偽造或竊聽其他路燈"],
                ["OCSP / CRL 憑證治理", "在線憑證狀態查詢與遠端吊銷黑名單", "當特定設備遺失或遭入侵時，雲端可秒級精準封殺該張 X.509 憑證"]
              ]
            },
            {
              title: "物聯網 PaaS 帳單雪崩模式 vs. 成本治理最佳化模式比較",
              headers: ["設計環節", "帳單雪崩錯誤設計", "PaaS 成本治理最佳化設計"],
              rows: [
                ["設備端上報頻率", "每秒單獨發送 1 筆 50 Byte 微小封包", "每 10 秒打包合併發送 1 筆（訊息費用立減 90%）"],
                ["穩定無變化數據處理", "溫度完全沒變仍每秒重複上傳雲端", "本地邊緣過濾直接丟棄常態重複值，僅上報變化差值"],
                ["後端資料庫寫入", "每收到 1 筆訊息就觸發 1 次獨立 DB INSERT", "在 FaaS 與 DB 間以記憶體緩衝執行批次插入 (Batch Insert)"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【MQTT 高可用與 ABAC 資安比較】在 IoT PaaS 平台中，若希望：(1) 後端 5 台微服務能均勻分攤消費同一個高頻感測 Topic 的訊息；(2) 防止駭客拆解單一感測器竊取憑證後，跨主題竊聽整個工廠其他機台的數據。工程師應分別啟用哪兩項機制？",
              options: [
                "A. (1) 啟用 MQTT 共享訂閱（`\\$share/group/`）；(2) 啟用基於屬性的細粒度授權（ABAC），利用 `\\${iot:ClientId}` 變數限制設備僅能存取自身專屬主題以阻斷橫向移動",
                "B. (1) 關閉 PINGREQ 心跳；(2) 讓所有十萬台設備共用同一組帳號密碼 `admin/123456`",
                "C. (1) 刪除規則引擎；(2) 停用 TLS 加密改用明文傳輸",
                "D. (1) 將 QoS 設為負數；(2) 關閉 OCSP 憑證吊銷檢查"
              ],
              ans: 0,
              exp: "解析：MQTT 的 `\\$share/group/` 共享訂閱可將訊息負載平衡分發給多個消費者；而 ABAC 利用 `\\${iot:ClientId}` 變數動態限制主題權限，能有效阻斷單一設備遭破解後的橫向移動。"
            },
            {
              q: "【PaaS 成本治理比較】某智慧農業團隊部署了 50,000 個溫濕度感測器，原本設定每個感測器「每秒發送 1 筆 50 Byte 封包（全天溫度幾乎維持不變）」，且後端每收到 1 筆就立即對資料庫執行單筆寫入，導致首月 PaaS 帳單高達數百萬台幣。下列哪一組重構方案最符合課程的「防帳單雪崩三招」？",
              options: [
                "A. 改為每毫秒發送 10 筆封包，並關閉資料庫索引",
                "B. 1. 封包合併批次上報（改為每 10 秒打包 1 筆上報，訊息計費立減 90%）；2. 善用本地邊緣過濾（丟棄無變化的重複溫度數據，僅傳變化差值）；3. 在 FaaS 與 DB 間利用記憶體緩衝進行批次插入（Batch Insert）",
                "C. 將所有感測器電源拔掉，改由人工每天走進農田手抄溫度",
                "D. 將端到端延遲 SLO 放寬到 30 天以上"
              ],
              ans: 1,
              exp: "解析：簡報第 129 頁明確列出避免物聯網帳單雪崩的三招：1. 封包合併批次上報（每 10 秒打包 1 筆省 90%）、2. 本地邊緣過濾重複常態數據、3. 資料庫寫入合併（Batch Insert）。"
            }
          ]
        }
      ]
    },
    {
      worldId: "week6",
      worldTitle: "第六大塊：Week 6 SaaS 模式 × IoT 平台 × 邊緣運算",
      worldDesc: "單租戶 vs. 多租戶、三大 DB 隔離模型、權杖桶 vs. 漏桶、IoT SaaS 進階治理、VM vs. 容器、K3s 與 EdgeX Foundry",
      levels: [
        {
          id: "w6-1",
          title: "6-1 雲端演進、單租戶 vs. 多租戶架構與三大資料庫隔離模型",
          bossName: "多租戶隔離建築師",
          expReward: 85,
          points: [
            {
              title: "雲端服務模式演進、共擔責任邊界與 SaaS 的商業價值",
              detail: "• 雲端演進邏輯：從 On-Premises（自建機房的高額固定資本支出 CapEx 與實體水電跳線負擔）→ IaaS（雲商管至 Hypervisor，租戶管 OS）→ PaaS（雲商管至 Runtime 與中介軟體，租戶管代碼與資料）→ SaaS（雲商全權負責至應用層與容災，租戶僅需管理「身分認證 IAM 與資料治理」），全面轉為按需營運支出（OpEx）。\n• 企業全面擁抱 SaaS 的三大價值：1. 快速驗證（Time-to-Market：秒級開通生產環境，將 IoT PoC 週期由數月縮短至數天）；2. 成本結構轉型（依連線設備數或 API 呼叫量彈性計費）；3. 無痛持續交付（告別光碟與大改版，平台無感升級持續獲取新功能）。"
            },
            {
              title: "SaaS 核心架構對決：單租戶（Single-Tenant）vs. 多租戶（Multi-Tenancy）与路由解析",
              detail: "【單租戶 (Single-Tenant) vs. 多租戶 (Multi-Tenancy)】\n• 單租戶架構：每個客戶擁有專屬獨立的 VM、資料庫實例與網路拓撲。優勢是資料安全性與合規性極高、支援深度客製化與專屬升級排程；致命傷是資源閒置浪費率高、維運成本隨客戶數呈「線性暴增」，難以規模化。\n• 多租戶架構：所有客戶共享同一套微服務叢集、記憶體快取與實體伺服器，在軟體層級注入「租戶標識符（`Tenant ID`）」實現邏輯隔離。優勢是單一版本持續迭代、硬體利用率極大化，維運邊際成本趨近於零（規模經濟）。\n\n【租戶身份辨識與路由三種模式】\n1. 子域名路由 (Subdomain Routing)：以 `tenant-a.iot-cloud.com` 區隔，便於企業客戶品牌化與邊界路由導向。\n2. URL 路徑切分 (Path-Based Routing)：以 `/api/v1/tenants/tenant-a/...` 區隔，適合純 API 服務。\n3. JWT 標頭注入 (Header / Token Injection)：在 OAuth / JWT Payload 內嵌 `tenant_id`，由 API Gateway 驗證後無感透傳至內部微服務。"
            },
            {
              title: "必考！多租戶資料庫三大隔離模型與混合選型矩陣",
              detail: "1. 模型一：獨立資料庫 (Database-per-Tenant)：應用層共享，但底層為每個租戶建立獨立的 DB Instance。優勢：物理級資料隔離、符合醫療/金融嚴苛法規、支援單一租戶獨立備份還原；工程瓶頸：資料庫連線池（Connection Pool）開銷極大，遷移與維護成本隨租戶數飆升。\n2. 模型二：共享庫獨立 Schema (Schema-per-Tenant)：共享同一個實體資料庫引擎，但為每個租戶劃分獨立的 Schema。優勢：大幅降低硬體採購成本，同時保有邏輯結構隔離與權限防護；工程瓶頸：共用同一個 DB 的 CPU、RAM 與 I/O，無法徹底隔絕單一租戶對硬體資源的爭搶。\n3. 模型三：全共享表 (Shared-Table with Tenant ID)：所有租戶資料存放在同一張巨量資料表/時序表中，每張表強制包含 `tenant_id` 欄位作為複合主鍵或分區鍵（Partition Key）。優勢：成本最低、擴展性最高；極限工程要求：必須仰賴資料庫「行級安全性（Row-Level Security, RLS）」或 ORM 框架嚴防資料越權外洩。\n4. 混合架構 (Hybrid Multi-Tenancy) 階梯式選型：依「儲存成本、資料隔離強度、維運擴展性」三維度評估——一般免費/標準租戶走「全共享表」，企業級 VIP 租戶則動態分流升級為「專屬獨立資料庫」。"
            }
          ],
          comparisons: [
            {
              title: "SaaS 單租戶架構 (Single-Tenant) vs. 多租戶架構 (Multi-Tenancy) 對比",
              headers: ["比較維度", "單租戶架構 (Single-Tenant)", "多租戶架構 (Multi-Tenancy)"],
              rows: [
                ["資源分配方式", "每個客戶獨享專屬 VM、DB 實例與網路拓撲", "所有客戶共享微服務叢集、快取與伺服器，以 Tenant ID 邏輯切分"],
                ["客製化與合規", "極高（支援深度客製化與客戶專屬升級排程）", "標準化單一版本迭代，深度客製化較受限"],
                ["成本與規模化效益", "資源閒置率高，維運成本隨客戶數「線性暴增」", "硬體利用率極大化，新增租戶的維運邊際成本趨近於零"]
              ]
            },
            {
              title: "多租戶資料庫三大隔離模型選型矩陣（成本 vs. 隔離強度 vs. 擴展性）",
              headers: ["隔離模型", "架構拓撲", "資料隔離強度", "儲存與維運成本", "核心工程瓶頸與適用對象"],
              rows: [
                ["1. 獨立資料庫 (Database-per-Tenant)", "每租戶擁有獨立 DB Instance", "最高（物理級隔離，支援單租戶獨立備份還原）", "最高", "Connection Pool 開銷極大；適合金融/醫療與企業級 VIP 租戶"],
                ["2. 共享庫獨立 Schema (Schema-per-Tenant)", "共用 DB 引擎，每租戶獨立 Schema", "中（邏輯結構與權限隔離）", "中", "共用 DB 的 CPU/RAM/IO 易發生資源爭搶；適合中型企業租戶"],
                ["3. 全共享表 (Shared-Table + Tenant ID)", "共用同一張大表，以 tenant_id 作為複合主鍵/分區鍵", "低（必須強制依賴底層 RLS 行級安全性防越權）", "最低（規模擴展性最高）", "若漏寫過濾條件將引發跨租戶資料外洩；適合海量免費/標準版租戶"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【多租戶資料庫隔離模型比較】某 IoT SaaS 公司同時服務「十萬名免費版個人用戶」與「五家要求物理級資料隔離與獨立備份還原的大型跨國銀行 VIP 客戶」。根據課程的「多租戶資料庫隔離模型選型矩陣」，該公司應如何設計資料庫架構？",
              options: [
                "A. 為十萬名免費個人用戶每人開立一座獨立的 Database Instance，讓連線池直接爆炸",
                "B. 採用「混合多租戶架構（Hybrid Multi-Tenancy）」：一般免費/標準租戶走成本最低、擴展性最高的「全共享表（Shared-Table + `tenant_id` 搭配 RLS 行級安全）」；企業級銀行 VIP 租戶則升級為物理隔離的「專屬獨立資料庫（Database-per-Tenant）」",
                "C. 讓跨國銀行與免費用戶全部混在同一張沒有 `tenant_id` 欄位的資料表裡",
                "D. 要求銀行客戶自己管理 SaaS 平台的底層 Hypervisor 與硬體水電"
              ],
              ans: 1,
              exp: "解析：全共享表（Shared-Table）成本最低、擴展性最高，適合海量一般租戶；獨立資料庫（Database-per-Tenant）提供物理級隔離與獨立備份還原，適合金融/醫療等高合規 VIP 客戶，兩者結合即為 Hybrid Multi-Tenancy。"
            },
            {
              q: "【責任邊界與租戶路由比較】在雲端共擔責任模型中，當企業採用頂層「SaaS」服務時，租戶仍須自行負責哪一部分？而在多租戶微服務內部無感透傳租戶身分時，最常將 `tenant_id` 封裝於何處？",
              options: [
                "A. 租戶僅需管理「身分認證（IAM）與資料治理」；而在內部微服務透傳時，常採用 JWT 標頭注入（在 OAuth/JWT Payload 內嵌 `tenant_id`）",
                "B. 租戶必須負責修補 SaaS 伺服器的 Linux Kernel 與更換損壞硬碟",
                "C. SaaS 只能透過修改實體網路卡 MAC 位址來區分租戶",
                "D. 單租戶（Single-Tenant）架構的維運邊際成本比多租戶更低"
              ],
              ans: 0,
              exp: "解析：在 SaaS 責任邊界中，雲商全權負責至應用層與容災，租戶僅需管理 IAM 身分認證與資料治理；租戶辨識路由支援 Subdomain、URL Path 與 JWT Payload 注入 `tenant_id` 無感透傳。"
            }
          ]
        },
        {
          id: "w6-2",
          title: "6-2 多租戶限流（權杖桶 vs. 漏桶）、越權防禦、無感升級與特性旗標",
          bossName: "重試風暴鎮壓者",
          expReward: 85,
          points: [
            {
              title: "多租戶吵鬧鄰居效應（Noisy Neighbor）與限流演算法：權杖桶 vs. 漏桶",
              detail: "【多租戶中的吵鬧鄰居效應】\n• 現象與连锁崩潰：單一異常租戶的突發流量（Spike Traffic）吞噬共享運算資源，導致資料庫連線池耗盡、執行緒阻塞、記憶體溢出（OOM）引發全系統雪崩。\n• 物聯網高發場景：某租戶現場設備韌體寫出無窮迴圈 Bug、斷線重連引發「重試風暴（Retry Storm）」、或邊緣設備時鐘異常跳轉。\n\n【流量削峰與限流演算法對決（必考！）】\n• 權杖桶 (Token Bucket)：以固定速率生成權杖存入桶中；「允許適度的突發流量（Burst）」，適合短時間密集請求。\n• 漏桶 (Leaky Bucket)：無論水（請求）倒進桶子的速度多快，桶底永遠「以恆定速率流出請求」，徹底平滑化流量、削平尖峰，嚴格限制後端最大處理速度。\n• 分散式限流實作：於 API Gateway 採用 `Redis + Lua 腳本` 執行毫秒級原子化計數與扣減。"
            },
            {
              title: "資源配額（HTTP 429）、背壓機制（Backpressure）與跨租戶越權防禦（IDOR / RLS）",
              detail: "【多租戶配額與背壓機制】\n• 多維度配額管制 (Quotas)：按租戶限制最大連線數、每日 API 呼叫量、DB 儲存容量與併發查詢數。\n• 優雅拒絕策略：超出配額時回傳標準 `HTTP 429 (Too Many Requests)` 狀態碼，並攜帶 `Retry-After` 標頭告知設備退避等待秒數。\n• 訊息佇列削峰與背壓 (Backpressure)：將超量封包緩衝入分散式佇列（Kafka Buffering），並反向通知上游生產端降速以實施背壓。\n\n【多租戶安全防禦：IDOR 越權漏洞與 RLS 行級安全】\n• 不安全的物件參照 (IDOR, Insecure Direct Object Reference)：攻擊者竄改 API 請求參數中的設備 ID（如將 `/devices/101` 改為他人的 `/devices/102`），企圖非法讀取其他租戶資料。\n• 資料庫行級安全 (Row-Level Security, RLS)：於資料庫底層強制注入安全政策（自動檢核當前連線 Session 的 `tenant_id`），就算應用層工程師漏寫 `WHERE tenant_id = ?` 也不會外洩他戶資料，並搭配全生命週期審計日誌（Audit Logging）。"
            },
            {
              title: "SaaS 持續交付、滾動 vs. 藍綠升級、特性旗標（Feature Flags）與 API 版本治理",
              detail: "• 不可變交付與無感知升級：將應用打包為不可變容器映像檔，保持 Dev / Staging / Prod 環境嚴格鏡像。升級時採「滾動升級（Rolling Update：逐一替換舊版 Pod）」或「藍綠部署（Blue-Green）」；在 IoT MQTT 長連線場景下，升級舊節點時必須配合「優雅停機（Graceful Shutdown）」平滑移轉連線。\n• 動態功能發布——特性旗標 (Feature Flags)：將「程式碼部署上線（Deploy）」與「功能對用戶開放（Release）」徹底解耦！於執行期動態比對租戶 ID、地域或時間戳決定是否啟用新邏輯；一旦新演算法出現異常，無需重新編譯部署，在後台開關一按即可「秒級全域關閉」控制爆炸半徑。\n• API 版本治理與向後相容：落實語意化版本（Semantic Versioning：`Major.Minor.Patch`，嚴禁在次版本破壞介面合約），採 URL（`/api/v1/`）或 Header（`Accept: application/vnd.iot.v2+json`）版本化；宣告舊 API 棄用後至少提供 `6～12 個月過渡緩衝期（Deprecation Policy）`，支援現場不便頻繁更新的 IoT 設備平滑過渡。"
            }
          ],
          comparisons: [
            {
              title: "流量限流演算法對決：權杖桶 (Token Bucket) vs. 漏桶 (Leaky Bucket)",
              headers: ["比較維度", "權杖桶演算法 (Token Bucket)", "漏桶演算法 (Leaky Bucket)"],
              rows: [
                ["核心運作機制", "以固定速率生成權杖放入桶中，請求須領取權杖才放行", "請求如水倒入桶中緩衝，桶底永遠以「恆定速率」流出請求"],
                ["面對突發流量 (Burst)", "允許適度突發流量！只要桶內有累積權杖即可瞬間批量通過", "不允許突發流出！強制將突發尖峰徹底削平為恆定速率"],
                ["最佳適用場景", "一般 API Gateway 限流（允許用戶短時間密集點擊或突發批次上報）", "保護後端處理速率極度脆弱、嚴禁任何瞬間併發衝擊的舊系統或窄頻寫入"]
              ]
            },
            {
              title: "SaaS 部署與發布技術比較：Rolling Update vs. Blue-Green vs. Feature Flags",
              headers: ["技術名稱", "運作層次與機制", "核心工程價值"],
              rows: [
                ["滾動升級 (Rolling Update)", "基礎設施層：在同叢集中逐一替換舊版 Pod 實例", "不需雙倍機器成本，隨時維持足夠健康節點對外服務"],
                ["藍綠部署 (Blue-Green)", "基礎設施層：平行部署全新綠環境，驗證後於 LB 秒級切換", "新舊環境完全物理隔離，切換與回滾速度極快"],
                ["特性旗標 (Feature Flags)", "應用程式邏輯層：將「部署 (Deploy)」與「發布 (Release)」解耦", "可在生產環境針對特定 VIP 租戶動態開啟新功能；異常時免重部署，後台一鍵秒級關閉"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【權杖桶 vs. 漏桶與多租戶防禦比較】某租戶的現場設備因韌體 Bug 發起「重試風暴（Retry Storm）」。平台架構師希望：(1) 在 API Gateway 使用 `Redis + Lua` 實施限流，且要求流出至後端舊資料庫的請求必須「徹底平滑化、以絕對恆定的速率流出」；(2) 對超額請求回傳標準 HTTP 狀態碼與退避標頭。請問 (1) 與 (2) 應分別採用什麼設計？",
              options: [
                "A. (1) 採用允許突發流量的權杖桶（Token Bucket）；(2) 回傳 HTTP 200 OK",
                "B. (1) 採用以恆定速率流出的「漏桶演算法（Leaky Bucket）」；(2) 超出配額時回傳 `HTTP 429 (Too Many Requests)` 並攜帶 `Retry-After` 標頭",
                "C. (1) 關閉所有防火牆；(2) 回傳 HTTP 500 並將資料庫刪除",
                "D. 允許攻擊者透過竄改網址 ID（IDOR）借用別家租戶的配額"
              ],
              ans: 1,
              exp: "解析：權杖桶（Token Bucket）允許適度突發流量（Burst），而漏桶（Leaky Bucket）則以恆定速率流出請求、徹底平滑化流量；超出租戶配額時應優雅拒絕，回傳 HTTP 429 (Too Many Requests) 並附帶 Retry-After 標頭。"
            },
            {
              q: "【IDOR / RLS 與 Feature Flags 比較】關於多租戶資安防禦「IDOR 與 RLS」以及現代發布技術「特性旗標（Feature Flags）」與「API 版本治理」，下列敘述何者正確？",
              options: [
                "A. 程式碼一旦部署上線（Deploy）就必然等於對所有用戶開放（Release），如果新演算法有 Bug 只能花兩小時重新編譯打包",
                "B. 為防範攻擊者竄改請求參數設備 ID 越權存取他戶資料（IDOR 漏洞），應在資料庫底層強制注入「行級安全性（Row-Level Security, RLS）」；而透過「特性旗標（Feature Flags）」可將部署與發布解耦，異常時在後台開關一按即可秒級全域關閉",
                "C. 語意化版本（Semantic Versioning）規定可以在小修補 Patch 版本中隨意刪除舊 API 欄位，且舊 API 宣告棄用後應在 3 秒內強制關閉",
                "D. 在 MQTT 百萬長連線場景執行滾動升級時，直接拔掉伺服器電源比執行優雅停機（Graceful Shutdown）更好"
              ],
              ans: 1,
              exp: "解析：RLS 可在資料庫底層防止因應用層漏寫條件引發的 IDOR 跨租戶越權；Feature Flags 將 Deploy 與 Release 解耦並支援秒級關閉異常功能；而 IoT API 棄用後應提供至少 6～12 個月過渡緩衝期。"
            }
          ]
        },
        {
          id: "w6-3",
          title: "6-3 IoT SaaS 平台四大模組、多協定接入、OTA 看門狗與 TSDB 壓縮告警",
          bossName: "時序壓縮魔導師",
          expReward: 90,
          points: [
            {
              title: "為什麼通用 Web SaaS 在物聯網會水土不服？IoT SaaS 四大核心模組與多協定接入",
              detail: "【通用 Web SaaS 的水土不服】\n物聯網具備「大規模併發長連線、微小封包高頻傳輸、現場不可靠弱網」三大挑戰；通用 Web SaaS 的 HTTP 交握開銷過重、無法維持百萬長連線，且缺乏離線裝置影子同步機制。因此專用 IoT SaaS 充當邊緣設備與業務系統間的「通訊轉譯與資料編排中樞」，包含四大模組：1. 連線層 (Connectivity & Gateway)、2. 治理層 (Device Registry & Shadow)、3. 資料層 (Rule Engine & Analytics)、4. 應用層 (APIs & Dashboards)。\n\n【多協定接入中樞：MQTT vs. CoAP vs. HTTP/HTTPS】\n• MQTT：輕量級 Pub/Sub 架構、最小標頭僅 `2 Byte`、支援三種 QoS，為常駐長連線核心。\n• CoAP：基於 `UDP` 的 RESTful 仿生協定，免除 TCP 三向交握開銷，適合 `NB-IoT` 等微控制器電池供電的極限省電環境。\n• HTTP / HTTPS：補充角色，適合無狀態、偶發性之大檔案上傳（如高畫質影像截圖、日誌包批次傳輸）。"
            },
            {
              title: "百萬級 MQTT 叢集、TPM 硬體安全晶片與 OTA 防禦性工程（A/B 分區 + 看門狗）",
              detail: "• 百萬級 MQTT Broker 叢集（如 EMQX、VerneMQ）：基於 Erlang / Go 高併發架構，節點間以「一致性雜湊（Consistent Hashing）」進行路由同步；並透過「持久化會話（Persistent Session）」在設備短暫斷線時於記憶體代為保留離線訊息，重連後批次補發。\n• 雙向安全與硬體晶片整合：採用 mTLS 雙向驗證 X.509 憑證，並將私鑰直接燒錄於「硬體安全模組（TPM / Secure Element）」晶片中防物理讀取，徹底杜絕設備被偽造拷貝；搭配 JITR 首次連線自動實名註冊與 Topic 階層微隔離（越權嘗試 Pub/Sub 時 Gateway 即刻中斷 TCP 連線）。\n• 大規模 OTA 防禦性工程：\n  1. 安全通道：SaaS 生成具時效性的「預先簽署網址（Pre-Signed URLs）」，讓設備去物件儲存拉取韌體，避免韌體檔直接公網暴露，並即時回報 Downloading / Verifying / Flashing 進度。\n  2. 硬體雙系統分區 (A/B Partitioning)：新韌體寫入閒置的 B 分區，重開機成功並聯網驗證後才切換 Bootloader Flag。\n  3. 硬體看門狗防護 (Hardware Watchdog)：若新系統發生 Kernel Panic 或卡死，看門狗計時逾時會「自動強制回滾（Rollback）至穩定的 A 分區」，搭配 `1% → 5% → 20% → 100%` 階梯式金絲雀推播。"
            },
            {
              title: "TSDB 極限壓縮技術、低程式碼降採樣與智慧告警引擎（震盪抑制 Hysteresis）",
              detail: "【時序資料庫 (TSDB) 三大核心技術】\n1. 極限資料壓縮：利用「Gorilla 浮點數 XOR 壓縮」與「Delta-of-Delta 時間戳壓縮」，節省高達 `90%` 儲存空間！\n2. 高吞吐 LSM-Tree 架構：捨棄傳統 B+ Tree 隨機寫入，實現純循序寫入（Sequential Writes）。\n3. 自動生命週期歸檔 (TTL)：熱資料保留 7 天，溫資料保留 90 天，冷資料自動轉存至低成本冷存儲（Glacier）。\n\n【低程式碼可視化與智慧告警引擎（必考！）】\n• 自適應時段降採樣 (Downsampling)：在 Dashboard 查詢一年跨度時，自動由原始秒級數據平滑聚合為「日均值」，防止前端瀏覽器記憶體崩潰。\n• 臨界震盪 (Alert Flapping) 與時間滯後補償 (Hysteresis)：當感測器讀數在警報閥值（如 80°C）上下微小跳動（79.9°C ⇄ 80.1°C）時，會導致高頻重複發送警報與恢復通知。解法是設定「時間滯後補償（Hysteresis 非對稱觸發條件，例如 `> 80°C` 觸發告警，但必須降溫至 `< 75°C` 才解除告警）」或滑動時間窗；並在主幹網斷線引發數百台設備離線時，執行「事件去重與聚合（Deduplication & Grouping）」彙整為單一根因通報。"
            }
          ],
          comparisons: [
            {
              title: "IoT 接入通訊協定三強對決：MQTT vs. CoAP vs. HTTP/HTTPS",
              headers: ["比較維度", "MQTT 協定", "CoAP 協定", "HTTP / HTTPS 協定"],
              rows: [
                ["傳輸層與架構模式", "基於 TCP 長連線，採 Pub/Sub 發布訂閱架構", "基於 UDP 無連線，採 RESTful (GET/POST) 仿生架構", "基於 TCP，採無狀態 Request-Response 架構"],
                ["封包開銷與耗電量", "極輕量（最小標頭僅 2 Byte），支援 3 種 QoS", "極限省電（免 TCP 交握），專為受限微控制器設計", "標頭肥大、TLS/TCP 交握開銷重，耗電量最高"],
                ["最佳適用物聯網場景", "雙向即時控制、常駐連線車聯網與工業機台遙測", "NB-IoT 智慧水錶/農業等靠電池供電數年的低功耗設備", "偶發性的大檔案上傳（如攝影機截圖、韌體包、批次日誌）"]
              ]
            },
            {
              title: "智慧告警引擎：單一門檻告警（引發 Flapping 震盪）vs. 時間滯後補償 (Hysteresis)",
              headers: ["告警機制", "規則設定方式", "當溫度在 79.8°C ～ 80.2°C 微幅跳動時的系統行為"],
              rows: [
                ["傳統單一門檻告警", "> 80°C 告警，<= 80°C 立即解除", "發生嚴重「臨界震盪 (Alert Flapping)」，一分鐘內狂發數十封告警與恢復通知洗版"],
                ["時間滯後補償 (Hysteresis)", "非對稱雙閥值：> 80°C 觸發告警，須 < 75°C 才解除告警", "徹底消除臨界跳動引起的重複洗版，確保工程師只收到真實有效的告警事件"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【多協定選型與 OTA 防禦比較】關於 IoT SaaS 的「接入協定選型（MQTT / CoAP / HTTP）」與「OTA 韌體升級防禦工程」，下列敘述何者正確？",
              options: [
                "A. NB-IoT 電池供電水錶最適合維持 24 小時 HTTP 雙向長連線；而大檔案影像上傳最適合用 2 Byte 標頭的 CoAP",
                "B. CoAP 基於 UDP RESTful 架構，適合 NB-IoT 電池極限省電環境；而在 OTA 升級中，透過「A/B 雙系統分區（A/B Partitioning）」搭配「硬體看門狗（Hardware Watchdog）」，若新韌體發生 Kernel Panic 卡死，看門狗逾時會自動強制回滾至舊分區",
                "C. OTA 升級時應該把加密金鑰與商業韌體放在無任何驗證的公開 FTP 任人下載，不應使用 Pre-Signed URLs",
                "D. 為了節省成本，X.509 私鑰應該用明文印在設備外殼貼紙上，不應該放進 TPM / Secure Element 硬體安全晶片"
              ],
              ans: 1,
              exp: "解析：MQTT 走 TCP Pub/Sub（最小標頭 2 Byte）；CoAP 走 UDP RESTful 適合 NB-IoT 極限省電；HTTP 適合偶發大檔上傳。OTA 則透過 Pre-Signed URLs、A/B 分區、Hardware Watchdog 看門狗逾時自動回滾與金絲雀推播確保設備永不變磚。"
            },
            {
              q: "【TSDB 壓縮與智慧告警引擎比較】在 IoT SaaS 資料層中：(1) 時序資料庫（TSDB）如何節省高達 90% 的儲存空間？(2) 當機台溫度在警報門檻 80°C 邊界微幅跳動導致通知洗版（臨界震盪 Alert Flapping）時，應採用什麼機制抑制？",
              options: [
                "A. (1) 利用 Gorilla 浮點數 XOR 壓縮與 Delta-of-Delta 時間戳壓縮；(2) 採用「時間滯後補償（Hysteresis）」設定非對稱觸發條件（如 `> 80°C` 告警，需 `< 75°C` 才解除）",
                "B. (1) 直接隨機刪掉 90% 的感測資料；(2) 把警報系統永久關閉",
                "C. (1) 改用傳統 B+ Tree 隨機寫入；(2) 當主幹網斷線導致 500 台設備離線時，故意連發 500 封簡訊轟炸工程師而不做事件聚合（Grouping）",
                "D. 在前端瀏覽器查詢一年期歷史圖表時，不進行任何降採樣（Downsampling），直接把 3,000 萬筆秒級點位塞爆瀏覽器記憶體"
              ],
              ans: 0,
              exp: "解析：TSDB 透過 Gorilla 浮點數 XOR 壓縮與 Delta-of-Delta 時間戳壓縮節省 90% 空間，並搭配 LSM-Tree 循序寫入；告警引擎則利用「時間滯後補償 (Hysteresis)」的非對稱閥值消除臨界震盪 (Alert Flapping)。"
            }
          ]
        },
        {
          id: "w6-4",
          title: "6-4 IoT SaaS 四大產業落地實務與總體擁有成本（TCO）評估",
          bossName: "微電網調度先知",
          expReward: 80,
          points: [
            {
              title: "產業落地實務（一、二）：智慧製造預測性維護（PdM）與智慧微電網（EMS）",
              detail: "【產業一：智慧製造工業預測性維護 (Predictive Maintenance, PdM)】\n• 傳統維護兩難：定期檢修（Preventive）會造成未達壽命的良好零件提前換掉浪費；事後維修（Reactive）則導致無預警停機與重大產能損失。\n• 端到端 SaaS 解法：邊緣高頻振動感測器採集 → IoT 平台頻譜分析（FFT）→ 雲端異常檢測 ML 模型。於旋轉機械軸承「早期微裂紋階段」即精準預警，將非預期停機時間降低 `80% 以上`！\n\n【產業二：智慧微電網與分佈式能源管理 SaaS (EMS)】\n• 分散式能源聚合（虛擬電廠）：將數萬組屋頂太陽能光電板、工業儲能電池櫃與電動車充電樁，虛擬化聚合為單一微電網資源池。\n• 動態尖峰套利與 AI 最佳化：即時對接電力交易市場「時間電價（TOU）」與電網「需量反應（Demand Response）」信號，並結合氣象局雲圖日照預測模型，由 SaaS 雲端秒級發布充放電排程指令。"
            },
            {
              title: "產業落地實務（三、四）：智慧車聯網、智慧農業與 IoT SaaS TCO 評估",
              detail: "【產業三：智慧車聯網 (Connected Vehicle) SaaS 平台】\n• 海量遙測：以 MQTT 接入車載 T-Box，持續回傳 CAN-bus 引擎轉速、電池電量與 GPS 軌跡。\n• 地理圍欄 (Geofencing) 與遠端控制：利用空間索引演算法即時判定車輛進出管制區域，秒級觸發業務事件；並透過「設備影子（Device Shadow）」實現手機遠端無感開鎖、預冷空調與防盜鎖定。\n\n【產業四：智慧農業環境監控與自動灌溉 SaaS】\n• 極低功耗廣域網 (LPWAN)：土壤溫濕度與光照感測器走 `LoRaWAN` 傳輸，電池壽命長達數年。\n• 閉環回授控制 (Closed-Loop Control)：雲端結合「蒸發散量（ETO）模型」與土壤水份，精準觸發電磁閥灌溉，並將作物生長週期照明與施肥配方知識庫 SaaS 化。\n\n【物聯網雲端 SaaS 的 TCO 評估架構】\n1. 資本支出 (CapEx) 歸零：省去前期自建機房伺服器、網路與備援電力的百萬固定投資。\n2. 營運支出 (OpEx) 彈性可預測：按月依活躍設備數、訊息百萬筆數與儲存 GB 數平滑計費。\n3. 隱形成本大幅削減：免除專職 24/7 輪班資安與基礎設施維運團隊的人事與管理負擔。"
            }
          ],
          comparisons: [
            {
              title: "工業設備三種維護模式比較：事後維修 vs. 定期檢修 vs. IoT SaaS 預測性維護 (PdM)",
              headers: ["維護模式", "觸發時機與做法", "對工廠造成的成本與風險"],
              rows: [
                ["事後維修 (Reactive)", "等機台壞掉冒煙停擺後才叫人來修", "造成產線無預警停機與巨額訂單違約損失"],
                ["定期檢修 (Preventive)", "不論好壞，每固定滿三個月就強制停機換零件", "把還很健康的未達壽命零件換掉，造成備品與人力浪費"],
                ["預測性維護 (PdM SaaS)", "邊緣振動採集 → 頻譜分析 → 雲端 ML 模型即時監測健康度", "在軸承早期微裂紋階段精準預警，非預期停機時間降低 80% 以上"]
              ]
            },
            {
              title: "IoT SaaS 四大垂直產業落地技術特徵總覽",
              headers: ["垂直產業", "前端通訊與感測核心", "雲端 SaaS 關鍵演算法與控制機制"],
              rows: [
                ["智慧製造 (PdM)", "邊緣高頻振動感測器", "頻譜分析 + 雲端異常檢測 ML 模型，提前預警軸承微裂紋"],
                ["智慧微電網 (EMS)", "屋頂光電板、儲能櫃、充電樁", "對接時間電價 (TOU) 與需量反應，結合氣象雲圖 AI 最佳化充放電套利"],
                ["智慧車聯網", "車載 T-Box (CAN-bus + GPS) 走 MQTT", "空間索引實現地理圍欄 (Geofencing) 秒級觸發 + 設備影子遠端開鎖/空調"],
                ["智慧農業", "土壤溫濕度走 LoRaWAN (數年續航)", "蒸發散量 (ETO) 模型結合閉環回授控制 (Closed-Loop) 自動觸發電磁閥灌溉"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【製造維護模式與車聯網比較】關於智慧製造「預測性維護（PdM）」與「傳統定期檢修 / 事後維修」的比較，以及智慧車聯網的關鍵技術，下列敘述何者正確？",
              options: [
                "A. 傳統定期檢修能保證零件 100% 用到最後一秒且零浪費；而預測性維護則是等機器炸裂後才開始買零件",
                "B. 傳統定期檢修會造成未達壽命零件浪費，事後維修則導致無預警停機；IoT SaaS 預測性維護透過「邊緣振動採集 → 頻譜分析 → 雲端 ML 模型」在軸承微裂紋階段預警，可降低 80% 以上非預期停機。車聯網則利用空間索引實現地理圍欄（Geofencing）與設備影子遠端控制",
                "C. 智慧車聯網的 T-Box 必須牽一條實體光纖綁在車尾才能傳送 CAN-bus 資料",
                "D. 導入 IoT SaaS 會讓企業的前期資本支出（CapEx）暴增十倍"
              ],
              ans: 1,
              exp: "解析：PdM 克服了定期檢修的零件浪費與事後維修的無預警停機，降低 80% 以上非預期停機；車聯網則透過 MQTT T-Box、Geofencing 空間索引與 Device Shadow 完成遠端診斷控制。"
            },
            {
              q: "【微電網與智慧農業比較】在智慧微電網（EMS）與智慧農業 SaaS 實務中，系統分別如何達成最佳化控制？",
              options: [
                "A. 微電網聚合光電與儲能電池，對接時間電價（TOU）、需量反應（Demand Response）與氣象雲圖預測模型進行 AI 充放電套利；智慧農業則採用低功耗 LoRaWAN 傳輸，並結合蒸發散量（ETO）模型進行閉環回授控制（Closed-Loop）自動灌溉",
                "B. 智慧農業感測器使用高耗電 5G 每秒傳送 8K 影片，每天要換三次電池",
                "C. 微電網 EMS 完全不理會電價高低，固定在電費最貴的尖峰時刻全速充電",
                "D. 農業知識庫無法放上雲端 SaaS"
              ],
              ans: 0,
              exp: "解析：微電網 EMS 結合 TOU 時間電價、需量反應與氣象日照模型執行尖峰套利；智慧農業利用 LoRaWAN 達成數年電池續航，並結合 ETO 蒸發散量模型執行閉環自動灌溉。"
            }
          ]
        },
        {
          id: "w6-5",
          title: "6-5 邊緣運算（Edge Computing）三大物理壁壘、階層光譜與容器化下沉",
          bossName: "光速延遲破壁者",
          expReward: 90,
          points: [
            {
              title: "邊緣運算的必然性：物理世界不可打破的「三大壁壘」",
              detail: "為什麼計算範式必須從「集中化雲端處理」反轉走向「分佈式近端處理」？因為存在三大物理壁壘：\n1. 壁壘一：光速與硬即時延遲 (Deterministic Latency)：光在光纖中傳播速度約 `200 km/ms`，加上路由器交換機跳轉，雲端往返延遲（RTT）往往超過 `50～100ms`，且公網擁塞會產生非確定性延遲抖動（Jitter）。但工業硬即時（Hard Real-Time：如運動控制、產線飛剪、無人機避障）嚴格要求延遲 `< 1～5ms` 且抖動近乎為零！\n2. 壁壘二：骨幹頻寬上限與資料傳輸成本爆炸 (Bandwidth & TCO)：單支 4K 工業視覺攝影機即時串流需 `15～25Mbps` 頻寬，數百路串流將直接癱瘓對外網路且公有雲 Egress 資費天文數字。更重要的是「信噪比極低法則（Low Signal-to-Noise Ratio）」——現場感測數據 `99%` 為常態平穩雜訊，僅 `1%` 異常事件具備業務價值！\n3. 壁壘三：離線資料自主性與資料主權 (Data Sovereignty & Autonomy)：地震斷纜、施工挖斷光纖隨時可能導致外網中斷數小時至數天，離線期間邊緣必須維持自主運作保障「產線不停擺」；且軍工、先進半導體製程配方與醫療隱私依法嚴禁離開物理廠區。"
            },
            {
              title: "邊緣運算階層光譜（The Edge Computing Continuum）三層剖析",
              detail: "• 第一層：極限終端邊界 (Device Edge / TinyML)：如 MCU 微控制器（ESP32、STM32），功耗以「毫瓦（mW）」計，記憶體僅數百 KB，直接跑極低參數量化模型（TinyML）。\n• 第二層：閘道邊緣 (Gateway Edge / IPC)：如工業電腦（Advantech 研華、NVIDIA Jetson），提供「數十 TOPS」AI 算力與多工業協定轉譯。\n• 第三層：微型場域邊緣 (MEC / On-Premise Data Center)：廠區邊緣機櫃伺服器，負責多產線即時排程與全廠區大數據彙整。"
            },
            {
              title: "虛擬化下沉演進：傳統虛擬機器（VM）vs. 輕量化容器（Container）與邊緣 Docker 實務",
              detail: "【為什麼傳統 VM 開不進邊緣，而輕量化容器全面崛起？】\n• 傳統虛擬機器 (VM) 的困境：Hypervisor 必須模擬完整 CPU、晶片組與周邊，且每台 VM 都必須加載完整獨立的「Guest OS 核心」，記憶體開銷達數 GB、開機需數分鐘；現場嵌入式硬體（僅 2～4GB RAM、Flash 受限）根本無法承受多重 OS 冗餘開銷。\n• 輕量化容器 (Container) 的崛起：所有容器直接「共享宿主機 Linux 核心（Kernel）」，免除 Guest OS 冗餘層！底層利用 Linux 核心原生機制：\n  1. `Namespaces`（命名空間）：實現行程（PID）、網路與檔案系統檢視隔離。\n  2. `Cgroups`（控制群組）：嚴格限制每個容器的 CPU 與記憶體資源配額。\n  具備「啟動僅需數毫秒、記憶體開銷僅數十 MB」的極致優勢，完美適配邊緣嵌入式環境！\n\n【Docker 與 containerd 在邊緣環境的三大維運實務】\n1. 不可變環境打包 (Image as an Artifact)：將邊緣演算法與系統庫封裝為映像檔，消除現場編譯環境不一致噩夢。\n2. 多階段構建 (Multi-Stage Builds)：在 Dockerfile 中丟棄構建期編譯器（如 GCC）與臨時套件，將邊緣映像檔極限壓縮至 `50MB 以下`。\n3. 本地唯讀檔案系統 (Read-Only Root Filesystem)：以 `--read-only` 參數運行容器，減少高頻寫入以保護邊緣脆弱的 Flash / SD 卡儲存壽命，並防止惡意竄改。"
            }
          ],
          comparisons: [
            {
              title: "邊緣運算階層光譜三層對照表（Device Edge vs. Gateway Edge vs. MEC）",
              headers: ["邊緣層級", "代表硬體設備", "功耗與算力規模", "核心運算定位"],
              rows: [
                ["1. 極限終端邊界 (Device Edge / TinyML)", "MCU 微控制器 (ESP32, STM32)", "毫瓦級 (mW) 功耗、KB/MB 級記憶體", "直接貼附感測器跑超輕量量化模型 (TinyML) 與基礎訊號濾波"],
                ["2. 閘道邊緣 (Gateway Edge / IPC)", "工業電腦 (Advantech IPC, NVIDIA Jetson)", "瓦至數十瓦、提供數十 TOPS AI 算力", "多工業協定轉譯、機器視覺瑕疵檢測、產線毫秒級閉迴路控制"],
                ["3. 微型場域邊緣 (MEC / On-Prem DC)", "廠區邊緣機櫃伺服器叢集", "千瓦級機櫃算力", "跨產線即時排程協同、廠區敏感配方資料湖彙整"]
              ]
            },
            {
              title: "傳統虛擬機器 (VM) vs. 輕量化容器技術 (Container) 在邊緣環境的比較",
              headers: ["比較維度", "傳統虛擬機器 (Virtual Machines)", "輕量化容器 (Containerization)"],
              rows: [
                ["架構隔離層次", "硬體級虛擬化（Hypervisor 模擬硬體 + 獨立完整 Guest OS）", "作業系統級虛擬化（共享宿主機 Linux Kernel，無 Guest OS 冗餘）"],
                ["Linux 底層核心機制", "依賴 KVM / Xen 與 CPU VT-x、EPT 硬體輔助", "利用 Namespaces 實現視圖隔離 + Cgroups 嚴格限制資源配額"],
                ["啟動時間與記憶體開銷", "慢（開機需數分鐘）、重（每台佔用數 GB RAM）", "極快（啟動僅需數毫秒）、極輕（僅數十 MB，多階段構建可壓至 <50MB）"],
                ["邊緣嵌入式適配度", "水土不服（2~4GB RAM 邊緣設備無法承受多重 OS）", "完美適配（搭配 --read-only 唯讀掛載可保護邊緣 Flash 壽命並防竄改）"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【三大物理壁壘比較】為什麼工業產線飛剪控制、無人機毫秒級避障與 100 支 4K 工業視覺攝影機，絕對不能採用「100% 傳回遠端公有雲處理」的架構？",
              options: [
                "A. 因為光纖傳播速度約 200 km/ms，雲端 RTT（>50~100ms 且具網路抖動 Jitter）無法滿足工業硬即時（<1~5ms）要求；且 4K 串流（每支 15~25Mbps）全上傳會癱瘓骨幹頻寬與造成天價資費，同時現場數據 99% 為常態平穩雜訊（低信噪比法則），更需防範斷纜時產線停擺",
                "B. 因為公有雲的硬碟容量只有 10MB 裝不下影片",
                "C. 因為光速在空氣中每秒只能走 1 公尺",
                "D. 因為半導體先進製程配方依法規定必須公開貼在公有雲論壇上"
              ],
              ans: 0,
              exp: "解析：邊緣運算的三大物理壁壘為：1. 光速極限與硬即時延遲（雲端 RTT >50~100ms vs 工業硬即時 <1~5ms）；2. 骨幹頻寬上限與低信噪比法則（99% 常態雜訊、僅 1% 異常有價值）；3. 離線資料自主性（斷網產線不停擺）與資料主權合規。"
            },
            {
              q: "【傳統 VM vs. 輕量容器與邊緣實務比較】在僅有 2GB RAM 與 Flash 儲存的邊緣工業電腦（IPC）上部署演算法時，為什麼「輕量化容器（Docker / containerd）」遠優於「傳統虛擬機（VM）」？且應如何配置以縮減體積與保護 Flash 儲存？",
              options: [
                "A. 容器每台都要安裝一套 10GB 的 Windows Server Guest OS，所以比 VM 更省空間",
                "B. 容器直接共享宿主機 Linux Kernel（免除 Guest OS 冗餘），利用 `Namespaces` 實現隔離、`Cgroups` 限制資源配額，啟動僅需數毫秒且僅佔數十 MB；實務上更透過「多階段構建（Multi-Stage Builds）」將映像壓至 50MB 以下，並以 `--read-only` 唯讀檔案系統運行以保護邊緣 Flash 並防竄改",
                "C. 在邊緣容器內應該把所有 C++ 編譯器與暫存檔全部塞進正式映像檔，讓映像檔超過 20GB 越好",
                "D. `Cgroups` 是用來做加密貨幣挖礦的協定"
              ],
              ans: 1,
              exp: "解析：容器共享宿主機 Linux Kernel，靠 Namespaces 隔離行程/網路/檔案視圖、靠 Cgroups 限制 CPU/RAM 配額；邊緣維運實務則搭配 Multi-Stage Builds 丟棄編譯器壓至 <50MB，並用 `--read-only` 保護 Flash 儲存。"
            }
          ]
        },
        {
          id: "w6-6",
          title: "6-6 邊緣編排 K3s vs. 標準 K8s、EdgeX Foundry 與端邊雲協同總覽",
          bossName: "端邊雲協同主宰",
          expReward: 100,
          points: [
            {
              title: "為什麼標準 Kubernetes (K8s) 開不進邊緣？輕量化 K3s 深度剖析",
              detail: "【標準 Kubernetes (K8s) 在邊緣的三大困局】\n1. Control Plane 記憶體過度消耗：API Server、Scheduler 等核心組件光空轉就需消耗 `2～4GB RAM`，嚴重排擠邊緣業務算力。\n2. 分散式 etcd 的嚴苛限制：etcd 對網路延遲與磁碟 IOPS 要求極端苛刻，面對邊緣弱網與慢速 Flash 儲存極易崩潰。\n3. 海量公有雲驅動程式冗餘：代碼包袱沉重，包含大量邊緣永遠用不到的 AWS EBS、GCP PD 等外部雲端擴充套件。\n\n【輕量化邊緣 K8s 旗艦架構：K3s 三大改造】\n1. 極致代碼瘦身：剔除所有公有雲專屬驅動與過時功能，將整個容器編排系統封裝為「小於 100MB 的單一二進位執行檔（Single Binary）」。\n2. 以 SQLite / Kine 替換 etcd：單節點與邊緣環境預設採用輕量級 `SQLite`（透過 Kine 墊片轉換），將記憶體運作門檻一舉壓低至 `512MB`！\n3. 開箱即用邊緣組件鏈 (Batteries Included)：直接內建 Flannel CNI、Traefik Ingress Controller、CoreDNS 與本地儲存驅動。"
            },
            {
              title: "K3s 殺手級功能：邊緣自治（Edge Autonomy）機制",
              detail: "當工廠外網光纖被挖斷時，標準雲端叢集常因節點失聯而引發災難；K3s 具備三大邊緣自治設計：\n1. 心跳逾時驅逐屏蔽：斷網期間，邊緣節點「絕不主動銷毀或驅逐（Evict）既有正在運行中的 Pod 服務」。\n2. 本地狀態快取鏡像：邊緣 Agent 以本機 SQLite 快取維護容器期望狀態，確保離線期間產線業務持續正常運作。\n3. 網路自癒與雙向對齊：外部網路復原瞬間，自動向雲端 Control Plane 回報健康指標並平滑同步期間變更。"
            },
            {
              title: "工業物聯網邊緣中樞：EdgeX Foundry 微服務架構與三大分層",
              detail: "【EdgeX Foundry 核心架構機制】\n• 微服務鬆耦合設計：由十餘個獨立輕量容器組成，支援隨硬體資源彈性裁剪。\n• 雙向資料匯流排：基於內部 `ZeroMQ / MQTT` 訊息總線，徹底解耦「南向設備採集」與「北向雲端上傳」流程。\n• 邊緣資料暫存 (Store and Forward)：本地內嵌 `Redis` 快取，斷網期間感測封包自動暫存於本地不丟失，待聯網後自動批次補傳上雲！\n\n【EdgeX Foundry 三大分層（由下而上必考！）】\n1. 南向層 (Southbound - Device Services)：直接面對工廠底層實體設備，原生支援 `Modbus、BACnet、OPC UA、REST` 等工業協定驅動模組，將異質工業訊號轉為標準格式。\n2. 核心層 (Core Services)：維護本地 Metadata 設備清單與指令控制，並由 `Core Data` 提供本機資料持久化。\n3. 北向層 (Northbound - App Services)：執行邊緣資料轉換、過濾、聚合，並封裝為標準 JSON 透過加密通道推送至北向雲端 IoT SaaS。"
            },
            {
              title: "端、邊、雲協同一體化架構總覽（End-to-End Synergy Architecture）",
              detail: "將整門課 Week 1 到 Week 6 的架構拼圖完美合一：\n• 端 (Device)：專注於極致物理感知與致動（Sensors & Actuators、MCU TinyML），承載基礎訊號轉換。\n• 邊 (Edge)：輕量容器化中樞（`K3s + EdgeX Foundry`），承載毫秒級硬即時響應、多工業協定轉譯（Modbus/OPC UA）、99% 雜訊資料初篩過濾、斷網暫存自治與本地 AI 推論。\n• 雲 (Cloud: IaaS + PaaS + SaaS)：全域彈性資源池，承載多租戶 IoT 平台、巨量時序與資料湖儲存、跨場域大模型訓練與企業級商業決策。"
            }
          ],
          comparisons: [
            {
              title: "容器編排引擎對決：標準 Kubernetes (K8s) vs. 輕量化邊緣 K3s",
              headers: ["比較維度", "標準 Kubernetes (Standard K8s)", "輕量化邊緣 K3s"],
              rows: [
                ["套件體積與冗余度", "龐大（含大量公有雲專屬儲存/網路驅動包袱）", "極致瘦身（剔除公有雲冗餘，封裝為 <100MB 單一執行檔）"],
                ["狀態儲存引擎", "強制依賴分散式 etcd（對網路延遲與磁碟 IOPS 極敏感）", "透過 Kine 預設改用輕量級 SQLite，抗弱網與慢速儲存"],
                ["記憶體運作門檻", "Control Plane 至少消耗 2 ~ 4 GB RAM", "記憶體門檻壓低至 512 MB RAM，完美跑在邊緣工控機"],
                ["斷網邊緣自治能力", "節點心跳逾時易觸發 Pod 驅逐 (Eviction) 導致服務中斷", "具備 Edge Autonomy：斷網屏蔽驅逐、本機 SQLite 維持運作、連網自動同步"]
              ]
            },
            {
              title: "EdgeX Foundry 工業邊緣框架三大分層職責對照表",
              headers: ["分層名稱", "面向方向", "核心組件與支援協定 / 功能"],
              rows: [
                ["1. 南向層 (Device Services)", "向下連接現場實體感測器、PLC 與工業機台", "原生內建 Modbus、BACnet、OPC UA、REST 等工業協定驅動轉譯"],
                ["2. 核心層 (Core Services)", "邊緣中樞內部狀態管理與暫存", "維護本地 Metadata 設備清單、Core Data 本機持久化（搭配 Redis Store and Forward）"],
                ["3. 北向層 (App Services)", "向上對接遠端公有雲 / 私有雲 IoT SaaS 平台", "執行邊緣數據清洗、過濾、聚合壓縮，並封裝 JSON 安全推送上雲"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【標準 K8s vs. K3s 與邊緣自治比較】為什麼標準 Kubernetes (K8s) 難以直接部署在記憶體僅 2GB 且網路偶爾不穩的工廠邊緣電腦上，而必須改用「K3s」？",
              options: [
                "A. 因為標準 K8s 的 Control Plane 需消耗 2~4GB RAM 且其分散式 etcd 對網路延遲與磁碟 IOPS 極度苛刻；K3s 剔除公有雲冗餘驅動封裝為 <100MB 單一執行檔、以 SQLite/Kine 替換 etcd 將記憶體門檻壓至 512MB，且具備「邊緣自治（斷網時屏蔽心跳逾時驅逐 Pod、以本機快取維持產線運作）」",
                "B. 因為 K3s 在斷網瞬間會自動把邊緣電腦上正在運行的所有工業控制 Pod 全部強制刪除",
                "C. 因為標準 K8s 不支援容器技術，只能跑傳統裸機程式",
                "D. 因為 K3s 強制要求每台邊緣設備必須安裝 128GB 記憶體與 10 顆 etcd 硬碟"
              ],
              ans: 0,
              exp: "解析：K3s 針對邊緣痛點進行三大改造：<100MB 單一執行檔、以 SQLite/Kine 替換嚴苛的 etcd（記憶體門檻壓至 512MB），並提供 Edge Autonomy（斷網屏蔽驅逐 Eviction、本地狀態快取、連網自癒同步）。"
            },
            {
              q: "【EdgeX Foundry 三大分層與斷網暫存比較】在智慧工廠導入「EdgeX Foundry」邊緣微服務框架時：(1) 負責直接對接工廠底層 `Modbus`、`BACnet`、`OPC UA` 機台的模組位於哪一層？(2) 負責過濾聚合併將 JSON 推送上雲的位於哪一層？(3) 當外網斷線時如何確保感測封包不遺失？",
              options: [
                "A. (1) 北向層；(2) 南向層；(3) 斷網時直接把資料丟進垃圾桶",
                "B. (1) 南向層（Device Services）；(2) 北向層（App Services）；(3) 透過本地內嵌 Redis 快取實現「邊緣資料暫存與轉發（Store and Forward）」，斷網期間封包暫存不丟失，聯網後自動補傳",
                "C. (1) 與 (2) 都在雲端 SaaS 的瀏覽器畫面裡執行",
                "D. EdgeX Foundry 是一個單體巨石 Windows 桌面繪圖軟體，不支援微服務容器"
              ],
              ans: 1,
              exp: "解析：EdgeX Foundry 分為三層：向下接工業協定（Modbus/BACnet/OPC UA）為「南向層 (Device Services)」；中間管理 Metadata 與本機資料為「核心層 (Core Services)」；向上過濾聚合推上雲端為「北向層 (App Services)」，並以本地 Redis 實現 Store and Forward 斷網暫存補傳。"
            }
          ]
        }
      ]
    },
    {
      worldId: "week7",
      worldTitle: "第七大塊：跨週次架構終極總複習（Week 1 ～ Week 6 綜合試煉）",
      worldDesc: "橫跨六週簡報精華的終極試煉：運算與服務模式全演進、儲存與資料庫總對決、網路與通訊協定比較、端邊雲與商業 FinOps 決策",
      levels: [
        {
          id: "w7-1",
          title: "7-1 總複習（一）：基礎設施、虛擬化與雲端服務模式全演進對決",
          bossName: "全棧架構大宗師",
          expReward: 120,
          points: [
            {
              title: "基礎設施與虛擬化演進全光譜（Bare-Metal → VM → Container → MicroVM）",
              detail: "串聯 Week 2、Week 4、Week 5、Week 6 的底層運算演進：\n1. 傳統裸機 (Bare-Metal) 與傳統代管 (Co-location / Dedicated)：OS 直接裝於實體機，面臨採購週期以月計、資源孤島、峰值過度配置（Over-provisioning）與人工工單跳線瓶頸。\n2. 伺服器虛擬化 (VM / IaaS CaaS)：透過 Hypervisor 解耦 OS 與硬體，支援 Snapshot、Live Migration（Pre-copy）與 API 秒級調度；但存在 Hypervisor 三大損耗（CPU VM-Exit、記憶體 GVA→GPA→HPA 兩層轉譯、最重的 I/O 模擬）、多租戶噪鄰效應（L3 Cache/記憶體頻寬/網卡佇列）與時鐘漂移（Clock Drift）。（若需零虛擬化損耗則選雲端 Bare-Metal Instance）。\n3. 輕量化容器 (Container)：共享宿主機 Linux Kernel（免除數 GB 的 Guest OS），以 `Namespaces` 隔離視圖、`Cgroups` 限制配額，毫秒級啟動、僅佔數十 MB，成為現代 PaaS 與邊緣運算（K3s）基石。\n4. 微型虛擬機 (MicroVM, 如 Firecracker)：解決公有雲多租戶下標準 Docker 共用 Kernel 的安全逃逸風險，同時克服傳統 KVM 啟動慢的缺點，達成「5 毫秒啟動 + 硬體級安全隔離」，支撐第三代無伺服器 FaaS。"
            },
            {
              title: "On-Premises vs. IaaS vs. PaaS vs. FaaS vs. SaaS 責任與選型總整理",
              detail: "• IaaS：雲商管至 Hypervisor；租戶管 Guest OS（Kernel CVE、Inode、fsck）、中介軟體與應用。適合舊系統無縫搬遷（Legacy）、自建百萬連線 EMQX、私有二進位協定與長期大規模固定負載。\n• PaaS：雲商管至 Runtime 與中介軟體；租戶管商業邏輯程式碼、DB Schema 與環境變數（須遵循無狀態 Stateless 鐵律）。適合敏捷微服務、快速 PoC，但須注意 No Root Access、Cold Start 與常駐滿載下的成本交叉點（Cost Crossover）。\n• Serverless FaaS：事件驅動瞬態函式，依 Requests + GB-Seconds 計費（閒置 0 元），需搭配 Database Proxy 防範連線池耗盡。\n• SaaS：雲商全權負責至應用層；租戶僅管 IAM 身分認證與資料治理。分為單租戶（物理隔離但成本線性暴增）與多租戶（資源複用邊際成本趨零，靠 Tenant ID 邏輯隔離）。"
            }
          ],
          comparisons: [
            {
              title: "跨週次運算虛擬化技術四代終極比較表",
              headers: ["技術型態", "隔離邊界與核心架構", "啟動時間與資源開銷", "核心優勢與最佳定位"],
              rows: [
                ["裸機 / 裸機雲 (Bare-Metal)", "無 Hypervisor，獨佔實體 CPU/RAM", "傳統數天 / 裸機雲數分鐘；獨佔整機", "零虛擬化損耗、零噪鄰、支援巢狀虛擬化"],
                ["傳統虛擬機 (VM / KVM)", "Hypervisor 硬體虛擬化 + 獨立 Guest OS", "數十秒至數分鐘；佔用數 GB RAM", "強隔離、支援不同 OS，但具 I/O 模擬損耗與邊緣水土不服"],
                ["輕量化容器 (Docker)", "共享宿主機 Linux Kernel (Namespaces + Cgroups)", "數毫秒；僅佔數十 MB RAM", "極致輕量彈性，完美適配雲原生微服務與資源受限邊緣設備"],
                ["微型虛擬機 (MicroVM)", "精簡版硬體虛擬化 (如 Firecracker)", "約 5 毫秒內；極低記憶體開銷", "兼具硬體級多租戶安全隔離與毫秒級啟動，FaaS 最佳底座"]
              ]
            },
            {
              title: "雲端 SPI + Serverless 服務模型全方位責任與特性總對照",
              headers: ["服務模型", "雲商管理頂層邊界", "租戶保留管理責任", "計費顆粒度與成本陷阱"],
              rows: [
                ["IaaS", "管至 Hypervisor 虛擬化層", "Guest OS (Patch/fsck)、Runtime、DB、App", "依 vCPU 秒數/GB 計費；注意 Stopped 狀態磁碟與 IP 仍計費及殭屍資源"],
                ["PaaS", "管至 Language Runtime 與託管中介軟體", "商業邏輯代碼、DB Schema、環境變數、RBAC", "依實例規格或 RPS 伸縮；注意長期常駐滿載的成本交叉點 (Cost Crossover)"],
                ["FaaS (Serverless)", "管至函式執行環境與瞬態排程", "單一無狀態事件處理函式代碼", "依 Requests + GB-Seconds（半夜閒置 0 元）；注意冷啟動與 DB 連線池耗盡"],
                ["SaaS", "全權負責至完整應用程式與容災", "僅負責 IAM 身分認證與資料治理組態", "依訂閱席次、活躍設備數或 API 呼叫量；CapEx 歸零、OpEx 可預測"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【跨週次虛擬化技術總比較】請綜合比較「傳統虛擬機（VM）」、「標準容器（Docker）」與「微型虛擬機（MicroVM，如 Firecracker）」，下列敘述何者完全正確？",
              options: [
                "A. 傳統 VM 因為包含完整 Guest OS 與 Hypervisor I/O 模擬損耗，在僅有 2GB RAM 的邊緣設備上水土不服；標準 Docker 容器透過共享 Linux Kernel（搭配 Namespaces 與 Cgroups）達成毫秒級啟動與數十 MB 輕量化；而公有雲多租戶 FaaS 則採用 MicroVM 以同時兼顧 5 毫秒極速啟動與硬體級安全隔離",
                "B. 標準 Docker 容器每一台都內建獨立的硬體 Hypervisor，因此啟動需要 15 分鐘",
                "C. 傳統 VM 完全沒有記憶體兩層轉譯（GVA→GPA→HPA）與時鐘漂移（Clock Drift）問題",
                "D. 裸機雲（Bare-Metal Instance）內建三層 Hypervisor 所以效能最差"
              ],
              ans: 0,
              exp: "解析：本題完美串聯 Week 4（VM 損耗與裸機雲）、Week 5（MicroVM 解決容器多租戶逃逸與 VM 慢啟動）與 Week 6（邊緣環境棄 VM 採共享 Kernel 之輕量容器）。"
            },
            {
              q: "【跨週次服務模式與責任邊界總比較】某企業架構師正在為四個子系統挑選雲端模式：(甲) 需自建私有二進位協定且要求自行調校 Linux `/proc/sys/net` 核心參數的系統；(乙) 每日僅半夜觸發 5 分鐘執行資料去識別化清洗的任務；(丙) 供全公司直接透過 Web UI 操作的現成智慧抄表系統；(丁) 由純軟體團隊快速開發、遵循無狀態設計的 RESTful 微服務。請問 (甲)、(乙)、(丙)、(丁) 依序最適合哪種模式？",
              options: [
                "A. (甲) SaaS、(乙) Bare-Metal、(丙) IaaS、(丁) Co-location",
                "B. (甲) IaaS、(乙) Serverless FaaS、(丙) SaaS、(丁) PaaS",
                "C. 四個全部都用第一代 Heroku Procfile",
                "D. 四個全部都買實體主機放進辦公室"
              ],
              ans: 1,
              exp: "解析：(甲) 需 Root 權限改核心與私有二進位協定，違反 PaaS 限制，必選 IaaS；(乙) 短暫事件觸發且無流量零成本，選 Serverless FaaS；(丙) 直接透過 Web UI 使用完整垂直應用，為 SaaS；(丁) 純軟體團隊快速迭代無狀態微服務，為 PaaS。"
            }
          ]
        },
        {
          id: "w7-2",
          title: "7-2 總複習（二）：儲存架構、資料庫、時序管線與快取機制總對決",
          bossName: "數據洪流大審判官",
          expReward: 120,
          points: [
            {
              title: "IaaS 三大儲存（Block / File / Object）與底層容錯總整理",
              detail: "• 區塊儲存 (Block Storage)：裸磁區低延遲隨機讀寫，適合開機碟與 RDBMS；底層採三副本（Triple Replication，33% 空間利用率）保低延遲。須區分「網路持久磁碟（Stop 不消失、支援 CoW 快照、注意 Token Bucket 耗盡的效能懸崖）」與「本機暫態儲存（Ephemeral NVMe，微秒級極致 IOPS 但 Stop 即永久消失）」。\n• 共享檔案儲存 (File Storage)：階層目錄樹、支援 POSIX 與 NFS/SMB，內建 File Lock 供多節點並行掛載讀寫。\n• 物件儲存 (Object Storage)：扁平 Bucket + Key 結構，純 HTTP REST API 存取、11 個 9 持久性，底層採糾刪碼（Erasure Coding 如 8+4，67% 空間利用率）；支援自訂 Metadata 標籤與 Pre-Signed URLs，為 IoT 數據湖與 OTA 韌體存放基石。"
            },
            {
              title: "RDBMS (DBaaS) vs. TSDB（時序資料庫）vs. 多租戶隔離 vs. 快取三大災難",
              detail: "• DBaaS 關聯式資料庫：支援雙機熱備自動 Failover（DNS CNAME 漂移）、讀寫分離（Read Replicas）、PITR 時間點還原（快照 + WAL 秒級還原）與 Online Scaling；但在面對海量 IoT 高頻寫入時，其 B-Tree 索引重組、磁碟 I/O 與鎖競爭會成為致命瓶頸。\n• 時序資料庫 (TSDB)：專為 IoT 時序資料（Device ID + Metric + Timestamp）打造，底層改採 `LSM-Tree` 純循序寫入，並利用 `Gorilla 浮點數 XOR 壓縮 + Delta-of-Delta 時間戳壓縮` 節省 90% 空間，搭配自動降採樣（Downsampling）與冷熱 TTL 歸檔。\n• 多租戶 DB 三大隔離模型：Database-per-Tenant（物理隔離、VIP 首選，但 Connection Pool 開銷大）vs. Schema-per-Tenant（共享引擎、硬體資源爭搶）vs. Shared-Table（共表含 `tenant_id`，成本最低但必配 RLS 行級安全防 IDOR 越權）。\n• 分散式快取三大災難：穿透（查不存在 Key → 布隆過濾器）、擊穿（單一熱點 Key 過期 → 互斥鎖）、雪崩（大量 Key 同時過期 → TTL 加隨機 Jitter）。"
            }
          ],
          comparisons: [
            {
              title: "跨週次儲存與資料庫架構選型全景比較表",
              headers: ["資料場景與挑戰", "錯誤架構選型（引發災難）", "正確雲端與物聯網架構選型"],
              rows: [
                ["百萬 IoT 裝置每秒高頻寫入溫濕度", "直接單筆 INSERT 寫入傳統 B-Tree RDBMS（引發索引 I/O 鎖死與帳單雪崩）", "10 秒批次合併 + 採用 LSM-Tree 時序資料庫 (TSDB) 搭配 Gorilla/Delta-of-Delta 壓縮"],
                ["存放數十 PB 監控錄影、OTA 韌體與原始 JSON 數據湖", "放進昂貴的本機暫態區塊儲存或 RDBMS BLOB 欄位", "存放於物件儲存 (Object Storage，Erasure Coding + 自訂 Metadata + 冷熱儲存階層化)"],
                ["高併發電商與 IoT 最新狀態快取防禦", "不設防護直接查 DB，或所有快取設完全相同的過期秒數", "託管 Redis 快取 + 布隆過濾器 (防穿透) + 互斥鎖 (防擊穿) + 隨機 Jitter (防雪崩)"],
                ["SaaS 平台同時服務十萬免費用戶與醫療金融 VIP", "全部開獨立 DB（成本爆炸）或全部混在無保護共表（違反法規）", "混合多租戶架構：免費用戶走 Shared-Table + RLS；VIP 走 Database-per-Tenant"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【跨週次儲存與資料庫大綜合】關於雲端儲存（Block / File / Object）與資料庫（RDBMS / TSDB / Redis 快取）的底層技術對比，下列哪一項敘述完全正確？",
              options: [
                "A. 物件儲存（Object Storage）多採用空間利用率達 67% 的糾刪碼（Erasure Coding）並支援自訂 Metadata 與 Pre-Signed URLs；而時序資料庫（TSDB）捨棄傳統 B-Tree 改採 LSM-Tree 循序寫入，並利用 Gorilla XOR 與 Delta-of-Delta 壓縮節省 90% 空間",
                "B. 本機暫態儲存（Ephemeral Store）在 VM 按下 Stop 後資料依然永久保存，最適合放唯一正式版資料庫",
                "C. 當單一熱點 Key 過期引發「快取擊穿」時，應該把所有資料表刪掉；當查詢不存在的 Key 引發「快取穿透」時，應該改用三副本複製",
                "D. 傳統關聯式資料庫（RDBMS）的 B-Tree 索引最適合承受每秒一千萬筆隨機感測器寫入，完全不會有任何 I/O 壓力"
              ],
              ans: 0,
              exp: "解析：Object 儲存採 Erasure Coding（67% 利用率）、支援 Metadata 與 OTA Pre-Signed URLs；Block 儲存多採 Triple Replication（33% 利用率）；TSDB 採 LSM-Tree 與 Gorilla + Delta-of-Delta 壓縮應對 IoT 高頻時序寫入。"
            },
            {
              q: "【多租戶隔離與 DBaaS 復原綜合比較】某多租戶 SaaS 平台採用「全共享表（Shared-Table with `tenant_id`）」服務一般租戶，某天發生兩件事：(1) 惡意租戶嘗試竄改 API 網址中的設備 ID 偷看別家租戶資料（IDOR 攻擊）；(2) 內部工程師誤刪了 VIP 獨立資料庫的一張設定表，需還原至事故發生前 1 秒。這兩件事應分別由哪兩項技術化解？",
              options: [
                "A. (1) 依賴資料庫底層強制注入「行級安全性（Row-Level Security, RLS）」；(2) 依賴 DBaaS 的「時間點還原（PITR，結合增量快照與 WAL 預寫日誌）」",
                "B. (1) 依賴把資料庫改成公開讀取；(2) 依賴 Read Replicas 讀寫分離把誤刪指令同步給所有副本",
                "C. 兩者都靠把伺服器硬碟拔掉重插解決",
                "D. (1) 依賴 Liveness Probe 重啟容器；(2) 依賴布隆過濾器"
              ],
              ans: 0,
              exp: "解析：在 Shared-Table 模型中，必須仰賴資料庫底層的 RLS（Row-Level Security 行級安全性）防範 IDOR 跨租戶越權；而誤刪資料表的秒級還原則依賴 DBaaS 的 PITR（快照 + WAL 預寫日誌）。"
            }
          ]
        },
        {
          id: "w7-3",
          title: "7-3 總複習（三）：雲端網路、物聯網通訊協定與流量控制總對決",
          bossName: "封包路由總司令",
          expReward: 120,
          points: [
            {
              title: "雲端網路虛擬化（SDN / VXLAN / 雙層防火牆 / LBaaS / 混合互聯）總整理",
              detail: "• SDN 與 VXLAN：SDN 將控制平面與資料轉發平面分離；VXLAN 採用 `MAC-in-UDP` 封裝與 `24-bit VNI`（支援超過 1,600 萬個隔離網段），徹底突破傳統實體 VLAN `12-bit`（僅 4,094 個網段）的多租戶瓶頸。\n• 公私子網與混合雲互聯：Public Subnet 走 IGW；Private Subnet 主機無公網 IP，透過 NAT Gateway 單向出站下載更新。跨 VPC 大規模互聯採星狀中樞（Hub-and-Spoke）；混合雲互聯則分為受公網影響的 `IPSec VPN` 與低延遲保證頻寬的實體專線 `Direct Connect / ExpressRoute`。\n• 雙層虛擬防火牆與 LBaaS：第一層網卡級 Security Group（`Stateful 有狀態`、回程自動放行、Allowlist）vs. 第二層子網路級 NACL（`Stateless 無狀態`、進出雙向皆須配置、依編號順序評估）；L4 LB（TCP/UDP 超低延遲）vs. L7 LB（解析 HTTP URL/Cookie 與 TLS 卸載）。"
            },
            {
              title: "IoT 協定（MQTT / CoAP / HTTP / 工業協定）與流量限流（權杖桶 vs. 漏桶）",
              detail: "• 北向雲端接入協定：MQTT（TCP 長連線、2 Byte 標頭、Pub/Sub、QoS 0/1/2、Shared Subscriptions 負載平衡、Retained Messages 保留最新狀態、Persistent Session 離線補發）vs. CoAP（UDP RESTful、NB-IoT 電池極限省電）vs. HTTP/HTTPS（無狀態大檔上傳）。\n• 南向工業現場協定：由 EdgeX Foundry 南向層（Device Services）原生支援 `Modbus、BACnet、OPC UA` 進行轉譯。\n• 流量整形演算法：權杖桶（Token Bucket：固定速率生權杖，「允許適度突發流量 Burst」）vs. 漏桶（Leaky Bucket：「以恆定速率流出」，徹底削平尖峰平滑流量），配額超限時回傳 `HTTP 429 + Retry-After` 並以 Kafka 實施背壓（Backpressure）。"
            }
          ],
          comparisons: [
            {
              title: "跨週次網路、協定與流量治理成對概念終極對比",
              headers: ["對比主題", "模式 A 關鍵特徵", "模式 B 關鍵特徵"],
              rows: [
                ["VLAN vs. VXLAN", "VLAN：12-bit ID，上限 4,094 網段，受限實體二層", "VXLAN：24-bit VNI，上限 1,600 萬網段，MAC-in-UDP 跨三層封裝"],
                ["Security Group vs. NACL", "vNIC 網卡級：有狀態 (Stateful)，回程自動放行", "Subnet 子網級：無狀態 (Stateless)，須顯式配雙向埠，依編號順序評估"],
                ["MQTT vs. CoAP", "MQTT：基於 TCP 長連線 Pub/Sub，支援 QoS 0/1/2", "CoAP：基於 UDP RESTful，免交握開銷，NB-IoT 電池省電首選"],
                ["權杖桶 vs. 漏桶限流", "Token Bucket：允許消耗累積權杖應付「瞬間突發 (Burst)」", "Leaky Bucket：桶底永遠以「恆定速率」流出，強制平滑化流量"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【網路與流量控制跨週次綜合】請判斷下列四組網路與流量控制技術的對比，哪一個選項完全正確？",
              options: [
                "A. VXLAN 只有 12-bit 只能切 4,094 個網段；而傳統 VLAN 有 24-bit 可切 1,600 萬個網段",
                "B. 第一層虛擬網卡級防火牆為「有狀態（Stateful）」；第二層子網路級封包過濾器為「無狀態（Stateless）」；而在 API 限流中，「權杖桶（Token Bucket）」允許適度突發流量（Burst），「漏桶（Leaky Bucket）」則以恆定速率流出請求",
                "C. IPSec VPN 因為拉設了專屬海底光纖，所以比 Direct Connect 專線更穩定且不受 Internet 擁塞影響",
                "D. Layer 4 負載平衡器專門解析 HTTP Cookie，而 Layer 7 負載平衡器無法解析 URL 路徑"
              ],
              ans: 1,
              exp: "解析：第一層 vNIC 防火牆為 Stateful，第二層 Subnet 過濾器為 Stateless；Token Bucket 允許 Burst 突發，Leaky Bucket 則恆定速率流出。VXLAN 為 24-bit（1600 萬網段），Direct Connect 才是實體專線。"
            },
            {
              q: "【物聯網通訊協定與資安綜合】某智慧城市專案包含三類設備：(1) 靠電池供電需維持 5 年壽命的 NB-IoT 地下水位計；(2) 需雙向即時控制且要求「恰好送達一次絕不重複」的智慧電網計費電錶；(3) 工廠內部走 `Modbus` 與 `OPC UA` 的傳統車床。請問這三類設備在端邊雲架構中應如何搭配協定與安全機制？",
              options: [
                "A. (1) 採用基於 UDP 的 CoAP 協定省電；(2) 採用 MQTT QoS 2（Exactly once）搭配 mTLS 與 TPM 硬體安全晶片加上設備影子；(3) 透過邊緣端 EdgeX Foundry 的「南向層（Device Services）」轉譯工業協定，再由北向層推送上雲",
                "B. 三種設備全部直接用明文 HTTP 每毫秒輪詢公有雲資料庫",
                "C. (1) 使用耗電最高的 HTTPS 長連線；(2) 使用會掉包的 MQTT QoS 0",
                "D. 讓所有設備共用同一個 MQTT Client ID 且不設 Topic 權限隔離"
              ],
              ans: 0,
              exp: "解析：(1) NB-IoT 電池設備選基於 UDP 的 CoAP；(2) 嚴格不丟不重的計費控制選 MQTT QoS 2 (Exactly once) 並以 mTLS + TPM 保障安全；(3) Modbus/OPC UA 由 EdgeX Foundry 南向層接入轉譯。"
            }
          ]
        },
        {
          id: "w7-4",
          title: "7-4 總複習（四）：端邊雲協同、部署策略與商業 FinOps 綜合決策",
          bossName: "雲邊商業終極考官",
          expReward: 150,
          points: [
            {
              title: "端邊雲協同（Device + Edge + Cloud）與四大部署發布策略總整理",
              detail: "• 為什麼必須 Edge + Cloud 協同？純雲端受制於四大壁壘：1. 物理光速與延遲（雲端 RTT >50~100ms 無法滿足工業硬即時 <1~5ms）；2. 經濟頻寬與 Egress 成本（99% 數據為常態雜訊，僅 1% 異常有價值）；3. 斷網可用性與 SPOF（需靠 K3s 邊緣自治不驅逐 Pod + EdgeX Redis Store-and-Forward 維持離線運作）；4. 資料主權與隱私合規（GDPR/HIPAA/半導體配方不出廠）。\n• 軟體升級與發布四大技術比較：\n  1. 滾動升級 (Rolling Update)：逐一替換舊 Pod，節省機器但新舊短暫共存（MQTT 需配合 Graceful Shutdown）。\n  2. 藍綠部署 (Blue-Green)：雙套完整環境並存，驗證後 LB 毫秒級 100% 原子切換，回滾最快但耗雙倍資源。\n  3. 金絲雀部署 (Canary)：先導流 `1%~2%` 給新版，逐步依 `10% → 25% → 50% → 100%` 漸進放量（亦用於 IoT OTA 韌體升級搭配 A/B 分區與看門狗回滾）。\n  4. 特性旗標 (Feature Flags)：將「部署（Deploy）」與「發布（Release）」解耦，執行期動態判斷租戶開關，異常時免重編譯一鍵秒級關閉。"
            },
            {
              title: "商業視角、SLI/SLO/SLA、FinOps 成本治理與「逆向出雲」總整理",
              detail: "• 商業與可用性契約：TCO 必須計入水下冰山成本（水電冷卻專線、24/7 維運人力、資安與停機損失）。SLI（實際量測）→ SLO（內部目標）→ SLA（對外合約與 Service Credit 補償）；從 `99.9%`（年停機 8.76 小時）→ `99.99%`（52.6 分鐘）→ `99.999%`（5.26 分鐘），跨區架構成本呈非線性暴增。\n• FinOps 三階段（Inform → Optimize → Operate）與四大省錢招式：\n  1. Rightsizing（先觀測再調降，切記「不要只看 CPU」，還須看 RAM/IOPS/尖峰）。\n  2. 長期承諾（Reserved / Savings Plans，適合長期穩定基載）。\n  3. Spot 可中斷資源（適合可容忍中斷重試的批次分析與 CI）。\n  4. 儲存階層化（熱資料 → 溫/冷資料 → Archive 歸檔）與 IoT 批次合併上報（10 秒打包 1 筆省 90% 訊息費）。\n• 雲與地的終極平衡（Cloud Repatriation 逆向出雲）：當企業進入成熟期，面對「負載長期穩定、硬體利用率極高、超過 PaaS/IaaS 成本交叉點（Cost Crossover）、具備強大維運團隊且架構高度可攜」的工作負載，可評估移回地端私有雲或混合雲；而「流量劇烈波動、新產品快速驗證（低試錯沉沒成本）、跨國部署與彈性 AI 算力」則繼續善用公有雲。"
            }
          ],
          comparisons: [
            {
              title: "端（Device）、邊（Edge）、雲（Cloud）終極職責與技術棧全景表",
              headers: ["架構層級", "硬體與基礎設施底座", "核心軟體技術棧", "負責處理的業務與資料特性"],
              rows: [
                ["端 (Device Layer)", "感測器、致動器、MCU (ESP32/STM32)、TPM 安全晶片", "FreeRTOS / 嵌入式韌體、TinyML、mTLS、A/B 分區與硬體看門狗", "毫瓦級物理狀態感知、基礎訊號轉換、防私鑰拷貝與安全雙分區 OTA"],
                ["邊 (Edge Layer)", "工業電腦 (IPC / Jetson)、廠區 MEC 伺服器", "Linux 容器 (Namespaces/Cgroups)、K3s (SQLite + 邊緣自治)、EdgeX Foundry (南向/核心/北向 + Redis 暫存)", "<1~5ms 硬即時閉迴路控制、Modbus/OPC UA 轉譯、過濾 99% 常態雜訊、斷網離線自治與暫存補傳"],
                ["雲 (Cloud Layer)", "Hyperscale 公有雲 / 混合雲 (Region + AZ + Fault Domain)", "IaaS (CaaS/SaaS/NaaS)、PaaS (DBaaS/FaaS/IoT Core)、多租戶 SaaS (Broker 叢集/Shadow/TSDB/Rule Engine)", "百萬設備集中治理、跨場域大數據分析、AI 大模型訓練、EMS/PdM/全通路商業決策"]
              ]
            }
          ],
          quizzes: [
            {
              q: "【端邊雲與部署策略終極綜合】某跨國智慧工廠希望建立一套完整的端邊雲系統，下列哪一項架構設計完全符合本課程 Week 1 至 Week 6 的最佳工程實踐？",
              options: [
                "A. 在端側將 X.509 私鑰燒錄於 TPM 硬體安全晶片並配置 A/B 分區與硬體看門狗 OTA；在邊緣側採用輕量容器搭配 K3s（SQLite + 斷網不驅逐 Pod 的邊緣自治）與 EdgeX Foundry（南向轉譯 Modbus/OPC UA、本地 Redis 斷網暫存補傳、過濾 99% 常態雜訊並執行毫秒級控制）；在雲端側以多租戶 SaaS / PaaS 搭配設備影子、TSDB 與 AI 模型進行跨廠區預測性維護",
                "B. 在 2GB RAM 的邊緣工業電腦上強行安裝標準 Kubernetes (K8s) 與 etcd，並規定斷網超過 3 秒就把所有產線容器全部銷毀",
                "C. 將工廠所有 100 支 4K 攝影機與每秒百萬筆未過濾的溫度雜訊 100% 透過公網傳到美洲資料中心，再由雲端下達 1 毫秒內的緊急煞車指令",
                "D. 為了加快開發速度，關閉所有零信任驗證，讓全球所有工廠機台共用同一個資料庫帳號且不設任何限流配額"
              ],
              ans: 0,
              exp: "解析：選項 A 完整串聯了端側（TPM + A/B 分區 + 看門狗）、邊緣側（容器 + K3s 邊緣自治 + EdgeX 南北向與 Redis 暫存 + 物理壁壘克服）以及雲端側（多租戶治理、Shadow、TSDB 與 PdM 預測維護）的全套核心架構！"
            },
            {
              q: "【商業 FinOps、SLA 與雲地決策終極綜合】關於企業技術長（CTO）與財務長（CFO）在進行雲端商業決策時的判斷，下列敘述何者完全正確？",
              options: [
                "A. 簽署 99.999%（五個九）SLA 代表一年可以停機 8.76 小時，且若雲商違約會無上限賠償企業所有營業損失",
                "B. 執行 FinOps 的 Rightsizing 時只要看 CPU 使用率低於 20% 就立刻砍半規格，完全不必看記憶體與 IOPS；且核心不可中斷的金融帳務主庫最適合放在隨時會被回收的 Spot 實例上",
                "C. 新創產品驗證期應善用公有雲 PaaS / Serverless 將前期 CapEx 轉為彈性 OpEx 並降低試錯沉沒成本；IoT 設備應透過「10 秒批次合併上報 + 邊緣過濾重複值 + DB 批次寫入」防止帳單雪崩；而當成熟期特定負載達到「長期高度穩定、高利用率、跨越成本交叉點（Cost Crossover）且具強大維運團隊」時，則可評估混合雲或逆向出雲（Cloud Repatriation）",
                "D. 金融業上雲的第一步應該是把穩定運行數十年的大型主機核心帳務系統直接刪除，改由實習生用 HTML 寫一個新帳務表"
              ],
              ans: 2,
              exp: "解析：五個九（99.999%）一年僅允許停機 5.26 分鐘（三個九才是 8.76 小時），且 SLA 違約僅提供 Service Credit 抵免而非無限賠償；Rightsizing 絕不可只看 CPU；Spot 僅適合可中斷重試的批次任務；而新創買速度與彈性、成熟穩定高負載評估 Cost Crossover 與逆向出雲、IoT 採批次上報防帳單雪崩，正是整門課商業與架構結合的核心精髓！"
            }
          ]
        }
      ]
    }
  ];

  week5To7Data.forEach(newWorld => {
    const existingIdx = window.IOT_GAME_DATA.findIndex(w => w.worldId === newWorld.worldId);
    if (existingIdx >= 0) {
      window.IOT_GAME_DATA[existingIdx] = newWorld;
    } else {
      window.IOT_GAME_DATA.push(newWorld);
    }
  });
})();