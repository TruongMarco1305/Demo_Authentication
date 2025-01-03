import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthStore } from '../stores/auth'

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated;
    if (!isAuthenticated) {
      throw redirect({
        to: '/login',
      })
    }
  },
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome to my authentication home page!</h3>
    </div>
  )
}
