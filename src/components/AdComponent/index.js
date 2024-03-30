import React, { useEffect } from 'react'

const AdComponent = () => {
  useEffect(() => {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="pub-2351736617081202"
      data-ad-slot="f08c47fec0942fa0"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}

export default AdComponent
