export type Receipt = {
    id: string // UUIDv7 compatible string
    date: number // UNIX seconds

    type: "PURCHASE" | "CANCEL"
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
}

export function paymentToReadableString(t: string): string {
    switch (t) {
        case "CASH":
            return "現金"
        case "CREDIT":
            return "クレジット"
        case "CREDIT_AIRPAY":
            return "クレジット(Airペイ)"
        case "CREDIT_AIRPAY_TOUCH":
            return "クレ(Airペイタッチ)"
        case "CREDIT_UNIONPAY_AIRPAY":
            return "銀聯(Airペイ)"
        case "BARCODE":
            return "QRコード"
        case "BARCODE_AIRPAY":
            return "QRコード(Airペイ)"
        case "TECHBOOKFEST":
            return "技術書典公式後払い"
        default:
            return t
    }
}
