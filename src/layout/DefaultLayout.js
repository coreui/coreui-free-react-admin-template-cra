import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  const location = useLocation()

  useEffect(() => {
    // Google Tag Manager
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'pageview',
      page_location: window.location.href,
    })
  }, [location])

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
