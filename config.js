// 接続先の設定。README_導入手順.md の手順4で、API_URL に Apps Script のURLを入れてください。
window.TSK_CONFIG = {
  API_URL: "https://script.google.com/macros/s/AKfycbytbeU-3k3TXYWKDBX49rl5kECKtZKeDrJTr9T3UIfjL3KFoLllyFY3M54JLGDJnXvdaA/exec",   // 例: "https://script.google.com/macros/s/xxxxxxxx/exec"
  AI_URL: "https://tskai.app.n8n.cloud/webhook/tsk-ai-read"     // 議事録の「AIで整理する」と、仕様書の「メール・見積書から作る」用（n8n の TSK-B02 の Webhook URL。合言葉を確かめてからAIが動く）
};
