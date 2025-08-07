export async function pingServer() {
    const res = await fetch(`${process.env.BACKEND_URL}/routes/ping`, {
        next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!res.ok) {
        console.error('Ping failed:', res.statusText)
        return { ok: false }
    }

    return { ok: true }
}