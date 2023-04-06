import { useState } from 'react'
import viteLogo from '/vite.svg'
import './index.css'
import AppRouter from './routes/AppRouter'
import AuthProvider from './auth/AuthProvider'

function App() {
  const [count, setCount] = useState(0)
  return (
  <AuthProvider>
      <AppRouter />   
  </AuthProvider>
  )
}

export default App
