"use client";

import { useEffect, useState } from "react";

const ENDPOINT_URL = "https://rtsv.ntech.nikachu.net/"

type EventStatus = {
    headStatus: boolean,
    stock: {
        avrasm: number,
        smartremote_guide: number,
        unicode_animal_book: number
    }
}

const EVENT_START = new Date("2025-06-01T00:00:00.000+09:00")
const IS_DEBUG = false

function formatDate(date: Date): string {
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月は0-11なので+1
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${month}/${day} ${hours}:${minutes}:${seconds}`;
}

export default function RealtimeEvent() {
    const [status, setStatus] = useState<EventStatus | null>(null);
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        (async () => {
            if (!IS_DEBUG && new Date(Date.now()) < EVENT_START) {
                // イベント開始前の場合取得しない
                return
            }
            // fetch status
            const request = await fetch(ENDPOINT_URL + "status");
            const status = (await request.json()) as EventStatus;
            setStatus(status);
            setDate(new Date())
        })();
    }, [])

    if (!IS_DEBUG && date < EVENT_START) {
        return <div className="flex flex-wrap gap-2">
            <span className="font-bold">サークル代表の居場所({formatDate(date)}更新)</span>
            <span className="">イベント開始日({formatDate(EVENT_START)}以降)に閲覧できるようになります。</span>
        </div>
    }


    if (!status) {
        // if status is null
        return <div>
            <span className="font-bold">サークル代表の現在の居場所</span>
            <span>読み込み中です...</span>
        </div>
    }


    return <div>
        <div className="flex flex-wrap gap-2">
            <span className="font-bold">サークル代表の現在の居場所({formatDate(date)}更新)</span>
            {status.headStatus ? <span className="text-green-600">出展ブース内</span> : <span className="text-red-600">出展ブース外</span>}
        </div>
    </div>
}
