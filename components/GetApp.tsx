import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section id="prototype" className="flexCenter w-full flex-col pb-[100px] pt-8">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Prototype demo!</h2>
          <p className="regular-16 text-gray-10">Jobs portal website</p>
          <div className="flex  flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Click here to view"
              variant="btn_white"
              // url="https://www.figma.com/proto/ULzGTNaQ1FXHZbt4rY3yIH/Afrivision-ventures---job-portal?page-id=0%3A1&type=design&node-id=1246-779&viewport=109%2C-2192%2C0.09&t=64EQhzTzTwTn5erJ-1&scaling=scale-down-width&mode=design"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp