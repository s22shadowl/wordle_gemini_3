這份 `README.md` 已經根據最新的「技術架構優化」與「UX/UI 改進」進行了全面更新。

包含了 PWA 離線支援、每日挑戰/無限模式切換、防作弊機制以及高對比模式的說明。你可以將此內容存為 `README.md`。

***

# 🟩 Wordle Pro (PWA + Daily Challenge)

這是一個專業級的 Wordle 網頁版複刻專案，具備完整的遊戲體驗與現代化 Web 技術架構。

不僅完美還原了原版遊戲規則，更加入了 **PWA 離線支援**、**每日挑戰/無限模式切換**、**高對比模式** 以及 **戰績統計分享** 等進階功能。所有程式碼皆以原生 HTML/CSS/JS 撰寫，無須編譯即可部署。

## ✨ 核心特色

### 🎮 遊戲體驗
*   **雙重模式**：
    *   📅 **每日挑戰**：每天根據日期生成唯一題目，全球玩家題目同步（適合與朋友競賽）。
    *   ♾️ **無限模式**：隨機選題，適合無限制練習刷題。
*   **嚴謹驗證**：採用雙字庫機制（2,300+ 謎底庫 / 12,000+ 允許猜測庫），確保輸入的單字合法且有效。
*   **自動存檔**：使用 LocalStorage 保存當前進度與盤面，重新整理網頁也不會丟失進度。
*   **戰績統計**：紀錄遊玩次數、勝率、連勝紀錄（Streak），並支援 **Emoji 網格分享** 功能。
*   **友善設計**：支援 **高對比模式**（橘/藍配色，色盲友善）與螢幕閱讀器輔助。

### 🛠 技術架構
*   **PWA 支援 (Progressive Web App)**：包含 `manifest.json` 與 `Service Worker`，可將遊戲安裝至手機/電腦桌面，並支援**離線遊玩**（斷網也能玩）。
*   **基礎防作弊**：答案在前端進行 Base64 編碼混淆，防止直接透過 Console 查看明文變數作弊。
*   **Seeded Random**：每日挑戰使用日期作為種子 (Seed)，確保跨裝置、跨時區的題目一致性。
*   **零依賴**：完全不使用 React/Vue 或 Webpack，純原生代碼，極度輕量。

## 📂 檔案結構

為了啟用完整功能（包含 PWA），專案包含以下三個檔案：

1.  `index.html` - 遊戲核心邏輯、介面與樣式。
2.  `manifest.json` - 定義 App 在手機桌面的圖示與名稱。
3.  `sw.js` - Service Worker，負責快取字庫與資源，實現離線遊玩。

## 🚀 部署說明

由於此專案為純靜態網頁，你可以免費部署到 GitHub Pages、Netlify 或 Vercel。

### 方式一：完整部署 (推薦，支援 PWA)
1.  在 GitHub 建立一個新的 Repository (例如 `wordle-pro`)。
2.  將 `index.html`, `manifest.json`, `sw.js` 三個檔案上傳至該 Repository。
3.  進入 **Settings** > **Pages**。
4.  在 **Branch** 選項中選擇 `main` (或 master) 並儲存。
5.  取得網址後，用手機瀏覽器開啟，並選擇「加入主畫面」即可安裝 App。

### 方式二：簡易單檔部署
1.  僅上傳 `index.html`。
2.  遊戲仍可完美運行（包含每日模式、統計等），唯獨無法安裝到桌面或離線遊玩。

## ⚙️ 自定義設定

你可以編輯 `index.html` 中的 JavaScript 常數來修改遊戲配置：

### 修改字庫來源
預設使用 GitHub 開源社群整理的 Wordle 字庫，若需更改可修改以下變數：

```javascript
// 謎底列表 (答案只會從這裡出現)
const URL_ANSWERS = "你的謎底列表網址.txt";

// 允許猜測列表 (包含生僻字，用來驗證輸入是否合法)
const URL_ALLOWED = "你的合法單字列表網址.txt";
```
> **注意**：來源必須是純文字檔，每個單字以換行 (`\n`) 分隔，且必須支援 CORS (Cross-Origin Resource Sharing)。

### 修改遊戲參數
```javascript
const WORD_LENGTH = 5;   // 單字長度 (若修改需配合 CSS 調整 Grid)
const MAX_ATTEMPTS = 6;  // 最大嘗試次數
```

## ⚠️ 常見問題

**Q: 為什麼顯示「連線失敗」？**
A: 遊戲初始化需要從 GitHub 下載字庫。請檢查網路連線，或確認您的網路環境是否阻擋了 `raw.githubusercontent.com`。

**Q: 如何重置戰績？**
A: 清除瀏覽器的 Local Storage，或手動執行 `localStorage.clear()`。

## 📜 版權與致謝

*   本專案為教育與練習用途的開源程式碼。
*   原版 Wordle 遊戲概念歸 [The New York Times](https://www.nytimes.com/games/wordle/index.html) 所有。
*   字庫來源：[gradyn/wordle-list](https://github.com/gradyn/wordle-list)
