export default function GetDateISO8601String(date: Date): string {
    // UTC+9のタイムゾーンのオフセット（分単位）
    const timezoneOffsetMinutes = 9 * 60;

    // UTC時刻を基準に時間を調整
    const adjustedDate = new Date(date.getTime() + timezoneOffsetMinutes * 60 * 1000);

    // 調整後の年、月、日、時、分、秒を取得
    const year = adjustedDate.getUTCFullYear();
    const month = String(adjustedDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(adjustedDate.getUTCDate()).padStart(2, '0');
    const hours = String(adjustedDate.getUTCHours()).padStart(2, '0');
    const minutes = String(adjustedDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(adjustedDate.getUTCSeconds()).padStart(2, '0');

    // ISO 8601 拡張形式の文字列を組み立てる
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+09:00`;
}
