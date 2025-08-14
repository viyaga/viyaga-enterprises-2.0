'use client'

import type { UIField, UIFieldClientComponent } from 'payload'
import { useFormFields } from '@payloadcms/ui'
import { useEffect, useState } from 'react'

const ReferralLinkDisplay: UIFieldClientComponent = () => {
  const referralCode = useFormFields(([fields]) => fields.referralCode)
  const [referralLink, setReferralLink] = useState('')

  useEffect(() => {
    if (referralCode?.value) {
      setReferralLink(`${window.location.origin}/register?ref=${referralCode.value}`)
    }
  }, [referralCode?.value])

  const copyToClipboard = () => {
    if (referralLink) navigator.clipboard.writeText(referralLink)
  }

  if (!referralCode?.value) {
    return <span>No referral code generated yet</span>
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <input
        type="text"
        readOnly
        value={referralLink}
        style={{
          flex: 1,
          padding: '4px 8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          background: '#f9f9f9',
        }}
      />
      <button
        type="button"
        onClick={copyToClipboard}
        style={{
          padding: '4px 8px',
          background: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Copy
      </button>
    </div>
  )
}

export default ReferralLinkDisplay