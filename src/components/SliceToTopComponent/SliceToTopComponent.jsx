import React from 'react'
import { useEffect } from 'react'
export default function SliceToTopComponent({children}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      {children}
    </>
  )
}
