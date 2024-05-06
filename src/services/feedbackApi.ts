import { Feedback } from '../../types.ts'

const BASE_URL = 'http://localhost:8000'



export async function addFeedbackApi({ feedback }: { feedback: Feedback }) {
    const res = await fetch(`${BASE_URL}/feedbacks`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(feedback)
    })

    const data = await res.json()

    return data
}