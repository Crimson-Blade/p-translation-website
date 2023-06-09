import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data.jsx';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import clip from '../video/Hero-Banner-V5.mp4'
import heroPlaceholder from '../images/Hero-Placeholder.jpg'
const Index = () => (
  <Layout>
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
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
    <section className='py-20'>
    <div class="container mx-auto max-w-7xl p-2 md:p-10">
      <div
        class="grid gap-6 grid-cols-1 text-white md:grid-cols-4 md:grid-rows-2"
      >
        <div class="relative p-10 rounded-xl bg-purple-700 md:col-span-2">
          <img
            src="../images/bg-pattern-quotation.svg"
            alt=""
            class="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
          />
          <div class="flex z-10 space-x-4">
            <img
              src="images/image-daniel.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Daniel Clifford</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <p class="relative z-10 mt-6 text-xl">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
          </p>

          <p class="mt-6 opacity-50 line-clamp-6">
            "I was an EMT for many years before I joined the bootcamp. I've been
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and
            found it incredibly fun! I enrolled shortly thereafter. The next 12
            weeks was the best - and most grueling - time of my life. Since
            completing the course, I've successfully switched careers, working
            as a Software Engineer at a VR startup. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ratione vero repudiandae, quasi atque
            officiis eum consectetur odio amet dolorem deleniti repellat
            expedita aut sunt laudantium cum itaque nam voluptatum quod! Quo
            totam sequi omnis deserunt? Sit nam molestiae excepturi,
            perspiciatis labore deleniti eum, eligendi quisquam quod sed nobis
            exercitationem tempora! "
          </p>
        </div>

        <div class="p-10 rounded-xl bg-gray-600">
          <div class="flex space-x-4">
            <img
              src="images/image-jonathan.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Jonathan Walters</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <p class="mt-6 text-xl">
            The team was very supportive and kept me motivated
          </p>

          <p class="mt-6 opacity-50 line-clamp-5">
            "I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I've made in myself. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque ipsam veritatis natus illum
            ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum rem
            necessitatibus facere nihil deleniti assumenda vel velit neque quia,
            nisi ipsum laudantium impedit eveniet iste. Pariatur, exercitationem
            consequuntur praesentium a est eum velit quos maiores ipsum facere
            tempora! "
          </p>
        </div>

        <div
          class="hidden p-10 rounded-xl text-gray-900 bg-white md:block md:row-span-2"
        >
          <div class="flex space-x-4">
            <img
              src="images/image-kira.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Kira Whittle</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <p class="mt-6 text-xl">
            Such a life-changing experience. Highly recommended!
          </p>
          <p class="mt-6 opacity-50">
            "Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend!"
          </p>
        </div>

        <div class="p-10 rounded-xl text-gray-900 bg-white">
          <div class="flex space-x-4">
            <img
              src="images/image-jeanette.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Jeanette Harmon</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <p class="mt-6 text-xl">
            An overall wonderful and rewarding experience
          </p>

          <p class="mt-6 opacity-50">
            "Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love."
          </p>
        </div>

        <div class="p-10 rounded-xl bg-gray-900 md:col-span-2">
          <div class="flex space-x-4">
            <img
              src="images/image-patrick.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Patrick Abrams</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <p class="mt-6 text-xl">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </p>

          <p class="mt-6 opacity-50">
            "The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people."
          </p>
        </div>

        <div class="p-10 rounded-xl text-gray-900 bg-white md:hidden">
          <div class="flex space-x-4">
            <img
              src="images/image-kira.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Kira Whittle</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <p class="mt-6 text-xl">
            Such a life-changing experience. Highly recommended!
          </p>

          <p class="mt-6 opacity-50">
            "Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend!"
          </p>
        </div>
      </div>
    </div>
    </section>
  </Layout>
);

export default Index;