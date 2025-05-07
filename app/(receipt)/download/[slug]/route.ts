import { Receipt } from "@/utils/EReceiptUtils";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { type NextRequest, NextResponse } from "next/server";

// https://nikatech.nikachu.net/download/filename?receipt={RECEIPT_UUID}
export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    // ファイル名の取得とチェック
    const bucketPath = (await params).slug;
    if ((!bucketPath) || bucketPath.split(":").length < 2) {
        const response = {
            status: false,
            reason: "Path parameter filename is invalid"
        }
        return new NextResponse(JSON.stringify(response), { status: 404, headers: { "Content-Type": "application/json" } });
    }
    const [categoryId, fileName] = bucketPath.split(":");

    // レシートIDのチェック
    const searchParams = request.nextUrl.searchParams;
    const receiptId = searchParams.get("receipt");
    if (!receiptId) {
        const response = {
            status: false,
            reason: "Query parameter receiptId is not exist"
        }
        return new NextResponse(JSON.stringify(response), { status: 404, headers: { "Content-Type": "application/json" } });
    }

    // レシートの取得と存在チェック
    const context = await getCloudflareContext({ async: true });
    const receiptStr = await context.env.nikatech_receipt.get(receiptId.toUpperCase());
    if (!receiptStr) {
        const response = {
            status: false,
            reason: "Receipt data is not found"
        }
        return new NextResponse(JSON.stringify(response), { status: 404, headers: { "Content-Type": "application/json" } });
    }
    const receipt = JSON.parse(receiptStr) as Receipt

    // 指定idの商品を購入しているか
    const itemelement = receipt.item.find(e => e.id === categoryId)
    if (!itemelement || itemelement.count <= 0) {
        // 購入品の中に指定idの商品が存在する場合
        const response = {
            status: false,
            reason: "You didn't buy this item."
        }
        return new NextResponse(JSON.stringify(response), { status: 403, headers: { "Content-Type": "application/json" } });
    }

    // バケットからファイルを取得
    const data = await context.env.NIKATECH_ASSETS.get(bucketPath);
    if (!data) {
        // バケット内にファイルがない場合
        const response = {
            status: false,
            reason: "File in database is not found."
        }
        return new NextResponse(JSON.stringify(response), { status: 404, headers: { "Content-Type": "application/json" } });
    }
    const fileContent = data.body

    const headers = new Headers({
        "Content-Type": "binary/octet-stream",
        "Content-Disposition": `attachment; filename=${fileName}`,
    });
    return new NextResponse(fileContent, { headers });
}
