import React from 'react';
const Testimonials = () => {
  return (
    <div class="container mx-auto max-w-7xl p-2 lg:p-10">
      <div
        class="grid gap-6 grid-cols-1 text-white lg:grid-cols-4 lg:grid-rows-2"
      >
        <div class="relative p-10 rounded-xl bg-purple-700 lg:col-span-2">
          <div
            class="absolute top-3 right-10 scale-125 lg:top-7 md:right-24 lg:scale-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="104" height="102"><path d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z" fill="#A775F1" fill-rule="nonzero" /></svg>
          </div>
          <div class="flex z-10 space-x-4">
            <img
              src="images/image-daniel.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90 text-white">Daniel Clifford</h4>
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
              <h4 class="opacity-90 text-white">Jonathan Walters</h4>
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
          class="hidden p-10 rounded-xl text-gray-900 bg-sky-200 lg:block lg:row-span-2"
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

        <div class="p-10 rounded-xl text-gray-900 bg-sky-200">
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

        <div class="p-10 rounded-xl bg-gray-900 lg:col-span-2">
          <div class="flex space-x-4">
            <img
              src="images/image-patrick.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90 text-white">Patrick Abrams</h4>
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

        <div class="p-10 rounded-xl text-gray-900 bg-sky-200 lg:hidden">
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
  )
}
export default Testimonials;
