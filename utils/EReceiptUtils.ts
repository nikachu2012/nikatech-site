export type Receipt = {
    type: "PURCHASE" | "CANCEL"
    sum: number
    id: string

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

    date: number
    payment: string,
    paid: number
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
