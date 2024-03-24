import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Afrivision Ventures</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        Empowering the Rwandan youth by closing opportunities and education gaps, generating employment, and promoting economic expansion through agriculture for a more promising and inclusive future.
        </p>

        <div className="my-11 flex flex-wrap gap-5">



        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="View prototype" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="E-Lab challenges" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[340px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Kigali,Rwanda</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">GC</p>
              <p className="bold-20 text-white">Unemployment</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">GO</p>
              <p className="bold-20 text-white">Agriculture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero