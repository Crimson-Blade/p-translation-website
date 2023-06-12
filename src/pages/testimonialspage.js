import Layout from '../components/Layout'
import React from 'react'
import TestimonialsPage from '../components/TestimonialsPage'
import Seo from '../components/Seo'

const testimonialspage = ({location}) => {
  return (
    <Layout location={location}>
        <TestimonialsPage />
    </Layout>
  )
}

export default testimonialspage;
export const Head = () => <Seo title="Testimonials" />
