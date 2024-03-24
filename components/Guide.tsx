import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col" id="solution">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          our solution
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Job opportunities & Trainings</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">We are going to create a website that is going to be a meeting place for both employers and employees. Furthermore, this website will help employees with qualifications find and acquire the opportunities they desire, and employees without qualifications will be trained. This training will focus on computer literacy, crop preservation, and interpersonal skills to get the necessary qualifications in order to receive job opportunities.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/camp.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Stake holders</p>
              </div>
              <p className="bold-20 mt-2">Rwandan youth</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Root cause</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Lack of capital resources</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide