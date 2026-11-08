import { useEffect, useState } from 'react'

function App() {
  const [days, setDays] = useState(0)
  const [guest, setGuest] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setGuest(params.get('guest') || params.get('to') || '')
    const target = new Date('2026-12-17T09:30:00+05:30').getTime()
    const update = () => setDays(Math.max(0, Math.ceil((target - Date.now()) / 86400000)))
    update()
    const interval = window.setInterval(update, 60000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <main>
      <section className="hero">
        <img className="mandala" src="/mandala.png" alt="" />
        <p className="eyebrow">WITH THE BLESSINGS OF THE TRIPLE GEM</p>
        {guest && <p className="guest">Dear {decodeURIComponent(guest.replaceAll('+', ' '))},</p>}
        <h1>Nileshika <span>&</span> Priyankara</h1>
        <p className="subtitle">Together with our families, we invite you to celebrate our wedding</p>
        <div className="date">THURSDAY · 17 DECEMBER 2026</div>
        <p className="venue">Bolgoda 360 · Moratuwa, Sri Lanka</p>
        <p className="countdown">{days} <span>days to our special day</span></p>
        <a className="gold-button" href="#rsvp">RSVP</a>
      </section>

      <section className="intro">
        <div className="intro-image"><img src="/hero.png" alt="Wedding invitation decoration" /></div>
        <div className="intro-copy">
          <p className="eyebrow">A DAY TO REMEMBER</p>
          <h2>Two hearts, one beautiful beginning</h2>
          <p>We would be delighted to have you with us as we begin this new chapter surrounded by family and friends.</p>
          <p className="date">17 · 12 · 2026</p>
        </div>
      </section>

      <section className="gallery">
        <p className="eyebrow">MEMORIES & MOMENTS</p>
        <h2>Our celebration</h2>
        <div className="gallery-grid">
          {['gallery-1.jpg', 'gallery-2.jpg', 'gallery-3.jpg', 'gallery-4.jpg'].map((image) => (
            <img key={image} src={`/${image}`} alt="Wedding gallery" loading="lazy" />
          ))}
        </div>
      </section>

      <section className="venue-section">
        <img src="/venue.png" alt="Wedding venue" />
        <div>
          <p className="eyebrow">THE VENUE</p>
          <h2>Bolgoda 360</h2>
          <p>Moratuwa, Sri Lanka</p>
          <p>Thursday, 17 December 2026 · 9:30 AM onwards</p>
        </div>
      </section>

      <section className="rsvp" id="rsvp">
        <p className="eyebrow">KINDLY REPLY</p>
        <h2>Will you join us?</h2>
        <p>Please let us know if you can celebrate with us.</p>
        <form name="rsvp" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="rsvp" />
          <p className="hidden"><label>Do not fill this: <input name="bot-field" /></label></p>
          <label>Invitation name<input name="invited-as" required defaultValue={guest} /></label>
          <label>Your name<input name="name" required /></label>
          <label>Attendance
            <select name="attendance" required defaultValue="">
              <option value="" disabled>Select an option</option>
              <option value="Joyfully accepts">Joyfully accepts</option>
              <option value="Regretfully declines">Regretfully declines</option>
            </select>
          </label>
          <label>Number of guests<input name="guests" type="number" min="1" max="10" defaultValue="1" required /></label>
          <label>Message (optional)<textarea name="message" rows={3} /></label>
          <button className="gold-button" type="submit">Send RSVP</button>
        </form>
        <p className="small-note">RSVP form submissions are collected through Netlify Forms after deployment.</p>
      </section>
      <footer>With love, Nileshika & Priyankara 🤍</footer>
    </main>
  )
}
export default App
