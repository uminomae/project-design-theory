export const toggles = {
    htmlBreath: true,
};

// CHANGED(2026-11-08): ヒーローの文字が淡かったので、呼吸を弱めた（#70・pjdhiro が案 C を選んだ）。
// 不透明度は 0.4〜0.8 から 0.8〜1.0 に。ぼかし（1.5px）と縮み（0.95）はやめた。
export const breathConfig = {
    period: 8,
    htmlMinOpacity: 0.8,
    htmlMaxOpacity: 1.0,
    htmlMaxBlur: 0,
    htmlMinScale: 1,
};
