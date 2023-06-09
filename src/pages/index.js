import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data.jsx';
import SvgCharts from '../svg/SvgCharts';
import clip from '../video/Hero-Banner-V5.mp4'
import heroPlaceholder from '../images/Hero-Placeholder.jpg'
import Testimonials from '../components/Testimonials';
import CompanyLandscape from '../components/CompanyLandscape';
import LogoSlider from '../components/LogoSlider';
const Index = ({location}) =>{
return (
  <Layout location={location}>
    <section className="flex flex-col justify-center h-screen">
      <video autoPlay loop muted poster={heroPlaceholder} className='absolute top-0 left-0 w-full h-full object-cover object-center -z-10'>
        <source src={clip} type='video/mp4' />
      </video>
      <div className='absolute left-0 top-0 w-full h-full bg-sky-900/30 -z-10' />
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-white">
            Helping Patients And Doctors With NPWT
          </h1>
          <p className="text-xl lg:text-2xl mt-6 text-gray-300 font-light">
            Create clinically, technically, and financially viable products and sell or
            license them to commercialization partners
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
        </div>
        <div className="lg:w-1/2">
          {/* <HeroImage /> */}
        </div>
      </div>
    </section>
    <section id="features" className="pb-20 lg:pb-40">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service One</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Two</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Three</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    ###LOGOSLIDERHERE###
      <LogoSlider />
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
    <section className='mx-auto py-20  text-center'>
      <CompanyLandscape />
      <div className='bg-white -translate-y-[200px]'>
        <Testimonials/> 
      </div>
    </section>
    {/* <section className='py-20'>
    </section> */}
    
  </Layout>
)};

export default Index;