
import { Car, Tag } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <>

<div className='h-full w-full flex flex-col gap-6 shadow-md'>
      <div className=''>
          <img className="h-[80vh] w-full object-cover" src="https://img.freepik.com/premium-photo/ai-generated-illustration-porsche-911-car-driving-along-winding-mountain-road-dusk_665346-117268.jpg?w=996" />
      </div>



  <div className='w-full h-[20vh] flex flex-row  shadow-md'>

    <div className='w-[25%] h-full flex justify-center items-center shadow-md'>
        <div className=''>
          {/* <Award className='w-12 h-12 '/> */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DBb5Rr0aq5Wfk8E8it3TRKkvdbLJB7brXA&s" alt=""className='h-19 w-20' />
        </div>
        <div className="">
          <div>
              India's #1
          </div>
          <div>Largest Auto Portal</div>
        </div>
    </div>

      <div className='w-[25%] h-full flex flex-row justify-center items-center shadow-lg'>
      <div className=''>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74YNegq2kcYjfJnITTbZt3nZg2TJ0Jck-EQ&s" alt=""className='h-20 w-20' />
                </div>
                <div className="">
                    <div>
                      Car Sold
                    </div>
                    <div> Every 4 minute</div>
                </div>
      </div>

      <div className='w-[25%] h-full flex justify-center items-center shadow-md'>
      <div className=''>
      <Tag className='w-12 h-12 '/>
                </div>
                <div className="">
                    <div>
                      Offers
                    </div>
                    <div> Stay updated pay less </div>
                </div>
      </div>

      <div className='w-[25%] h-full flex justify-center items-center shadow-md'>
      <div className=''>
            <img src="data:image/png;base64,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" alt=""className='w-20 h-20' />
                </div>
                <div className="">
                  
                    <div >
                      Compare
                    </div>
                    <div > Decode the right car </div>
                </div>
      </div>

  </div>


  <div>
  <footer className="bg-gray-100">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    
    <div className='flex flex-row justify-center items-center'>
      <div className='text-2xl font-bold'>MotoMart</div>
      <div><Car className="h-8 w-8" /></div>
      </div>
    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 text-2xl font-bold">
      Where Value meets Velocity
    </p>

    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> About </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Careers </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> History </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Services </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Projects </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Blog </a>
      </li>
    </ul>

    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Facebook</span>
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Instagram</span>
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Twitter</span>
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">GitHub</span>
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Dribbble</span>
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</footer>
  </div>

</div>

    </>
  )
}

export default Home