import { useEffect, useState } from 'react'

const siteCode = import.meta.env.VITE_GOATCOUNTER_CODE?.trim()

export default function VisitorCounter() {
  const [views, setViews] = useState(null)

  useEffect(() => {
    if (!siteCode) return undefined

    let active = true
    const counterUrl = `https://${siteCode}.goatcounter.com/counter/TOTAL.json`
    const loadCount = () => {
      fetch(counterUrl)
        .then((response) => {
          if (!response.ok) throw new Error('Could not load visitor count')
          return response.json()
        })
        .then((data) => {
          if (active) setViews(data.count)
        })
        .catch(() => undefined)
    }

    const existingScript = document.querySelector('script[data-goatcounter]')
    if (existingScript) {
      loadCount()
    } else {
      const script = document.createElement('script')
      script.dataset.goatcounter = `https://${siteCode}.goatcounter.com/count`
      script.src = 'https://gc.zgo.at/count.js'
      script.async = true
      script.onload = loadCount
      document.head.appendChild(script)
    }

    return () => {
      active = false
    }
  }, [])

  if (!siteCode || views === null) return null

  return <span>Public portfolio views: {views}</span>
}