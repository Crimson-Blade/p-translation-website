import Layout from '../components/Layout'
import React from 'react'
import TestimonialsPage from '../components/TestimonialsPage'

const testimonialspage = ({location}) => {
  return (
    <Layout location={location}>
        <TestimonialsPage />
    </Layout>
  )
}

export default testimonialspage;