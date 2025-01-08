import React from 'react';

const menuData = {
  solutions: [
    { title: 'Appointments', href: '/appointments' },
    { title: 'Consultation', href: '/consultation' },
    { title: 'Diagnostics', href: '/diagnostics' },
  ],
  social: [
    { title: 'Instagram', href: 'https://www.instagram.com/know_my_health' },
  ],
  resources: [
    { title: 'Privacy Policy', href: '/privacy-policy' },
    { title: 'Terms of Service', href: '/terms-of-service' },
  ],
  company: [
    { title: 'About Us', href: '/about-us' },
    { title: 'Careers', href: '/careers' },
    { title: 'Our Story', href: '/our-story' },
    { title: 'Contact Us', href: '/contact-us' },
  ],
};

const Base = () => {
  return (
    <footer className="bg-zinc-50">

      <div className="container mx-auto p-0 md:p-8 xl:px-0">

        <div className="mx-auto max-w-7xl px-6">

          <div className="xl:grid xl:grid-cols-3 xl:gap-8">

            <div className="space-y-4">
              <div>
                <a href="/">
                  <div className="flex items-center space-x-2 text-2xl font-medium">
                    <span className="text-black">Know My Health</span>
                  </div>
                </a>
              </div>
              <div className="max-w-md pr-16 text-md text-zinc-900">
                Enhance Your Lifestyle
              </div>
              <div className="flex space-x-2">
                <a href="" target="_blank" className="text-zinc-900 hover:text-zinc-900">
                  <span className="sr-only">Linkedin</span>
                  {/* Removed SVG */}
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-black">Our Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {menuData.solutions.map((item) => (
                      <li key={item.title}>
                        <a
                          href={item.href}
                          className="text-md leading-6 text-zinc-900 hover:text-zinc-500"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md font-semibold leading-6 text-black">Social</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {menuData.social.map((item) => (
                      <li key={item.title}>
                        <a
                          href={item.href}
                          className="text-md leading-6 text-zinc-900 hover:text-zinc-500"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-black">Resources</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {menuData.resources.map((item) => (
                      <li key={item.title}>
                        <a
                          href={item.href}
                          className="text-md leading-6 text-zinc-900 hover:text-zinc-500"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md font-semibold leading-6 text-black">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {menuData.company.map((item) => (
                      <li key={item.title}>
                        <a
                          href={item.href}
                          className="text-md leading-6 text-zinc-900 hover:text-zinc-500"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-zinc-400/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-md text-center text-black">
              Copyright © 2024. Designed & Developed By
              <a rel="noopener" href="/"> Team Knowmyhealth.</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Base;
