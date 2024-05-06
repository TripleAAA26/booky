import { useMutation } from '@tanstack/react-query'
import { userRegistration } from '../services/authApi.ts'
import { User } from '../../types.ts'


export function useRegister() {
    const { mutate:register } = useMutation({
        mutationFn: (user: User) => userRegistration({ user }),
        onSuccess: () => {},
        onError: error => {
            throw new Error(error.message)
        }
    })

    return { register }
}