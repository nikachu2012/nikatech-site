"use client";

export default function Year() {
    return <>{new Date(Date.now()).getFullYear()}</>
}
