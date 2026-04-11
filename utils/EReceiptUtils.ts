export type Receipt = {
    id: string // UUIDv7 compatible string
    date: number // UNIX seconds

    type: "PURCHASE" | "RETURN"
    store: string
    event: string
    cashier: string

    item: {
        id: string
        count: number
        barcode?: string[]
        name: string,
        price: number
    }[]

    sum: number
    paid: number
    payment: string

    receiptType: "NOTISSUE" | "RECEIPT" | "RYOSYUSYO"
    header: string
    footer: string

    payData: string
    pubPayData: string
}

export function paymentToReadableString(t: string): string {
    switch (t) {
        // その他
        case "CASH":
            return "現金";
        case "CREDIT":
            return "国際ブランド";
        case "BARCODE":
            return "1,2次元コード";
        case "TECHBOOKFEST":
            return "技術書典公式後払い";

        // Airペイ
        case "CREDIT_AIRPAY":
            return "クレジット(Airペイ)";
        case "CREDIT_AIRPAY_TOUCH":
            return "クレ(Airペイタッチ)";
        case "CREDIT_UNIONPAY_AIRPAY":
            return "銀聯(Airペイ)";
        case "BARCODE_AIRPAY":
            return "QRコード(Airペイ)";
        case "QUICPAY_AIRPAY":
            return "QUICPay+(Airペイ)";

        // Airペイ QR
        case "BARCODE_AIRPAYQR":
            return "QRコード(AirQR)";

        // Squareタ
        case "CREDIT_SQ":
            return "クレジット(Square)";
        case "ID_SQ":
            return "iD(Square)";
        case "QUICPAY_SQ":
            return "QUICPay+(Square)";
        case "TRANSPORTATION_IC_SQ":
            return "交通系IC(Square)";
        case "BARCODE_SQ":
            return "QRコード(Square)";

        // Square他
        case "CREDIT_SQ_MN":
            return "クレ(Square MN)";
        case "CREDIT_SQ_MS":
            return "クレ(Sq MSリーダ)";
        case "CREDIT_SQ_IPHONE":
            return "クレ(Sq Tap to Pay iPhone)";
        case "CREDIT_SQ_ANDROID":
            return "クレ(Sq Tap to Pay Android)";
        case "GIFTCARD_SQ":
            return "ギフトカード(Square)";

        default:
            return t; 
    }
}
export function paymentToSlipString(t: string): string {
    switch (t) {
        case "CREDIT_SQ":
            return "クレジットカード売上票"
        case "ID_SQ":
            return "iD売上票"
        case "QUICPAY_SQ":
            return "QUICPay+売上票"
        case "TRANSPORTATION_IC_SQ":
            return "交通系IC売上票"
        default:
            return ""
    }
}
