import { useState } from 'react'
import LoginPage from './LoginPage'

function App() {
  const [loggedInEmail, setLoggedInEmail] = useState(null)

  if (loggedInEmail) {
    return (
      <div style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F4EE',
      }}>
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: '1.5rem',
          color: '#3F5C4D',
          fontWeight: 700,
        }}>
          Login riuscito
        </p>
      </div>
    )
  }

  return <LoginPage onLoginSuccess={setLoggedInEmail} />
}

export default App
