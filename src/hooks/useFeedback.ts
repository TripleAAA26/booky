import { useMutation } from '@tanstack/react-query'
import { addFeedbackApi } from '../services/feedbackApi.ts'
import { Feedback } from '../../types.ts'


export function useFeedback() {
    const { mutate: sendFeedback } = useMutation({
        mutationFn: (feedback: Feedback) => addFeedbackApi({ feedback }),
        onSuccess: () => {},
        onError: error => {
            console.log(error)
        }
    })


    return { sendFeedback }
}