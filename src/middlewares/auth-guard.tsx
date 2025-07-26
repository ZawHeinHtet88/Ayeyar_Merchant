
import { useAuthStore } from '@/modules/auth/store/index.store'
import { type ReactNode } from 'react'
import { Navigate } from 'react-router'

export default function AuthGuard({ children }: { children: ReactNode }) {
    const { isAuthenticated } = useAuthStore(state => state)
    return isAuthenticated ? children : <Navigate to="/login" />
}
