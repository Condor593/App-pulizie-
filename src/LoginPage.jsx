import { useState } from 'react'
import { supabase } from './supabaseClient'
import './LoginPage.css'

export default function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const normalized = email.trim().toLowerCase()

    const { data, error: dbError } = await supabase
      .from('collaboratori')
      .select('email')
      .ilike('email', normalized)
      .maybeSingle()

    console.log('[Login] normalized:', normalized, '| data:', data, '| error:', dbError)

    setLoading(false)

    if (dbError) {
      console.error('[Login] DB error:', dbError)
      setError(`Errore: ${dbError.message}`)
      return
    }

    if (!data) {
      setError('Email non riconosciuta. Verifica e riprova.')
      return
    }

    onLoginSuccess(data.email)
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-logo">
          <span className="logo-icon">✦</span>
        </div>
        <h1 className="login-title">Pulizie Pro</h1>
        <p className="login-subtitle">Accedi con la tua email aziendale</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="field-group">
            <label htmlFor="email" className="field-label">Email</label>
            <input
              id="email"
              type="email"
              className="field-input"
              placeholder="nome@esempio.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              autoFocus
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Verifica in corso…' : 'Accedi'}
          </button>
        </form>
      </div>
    </div>
  )
}
