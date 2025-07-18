import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = ({ theme }) => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className={`common-padding ${theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className={`hiw-title ${theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
            A17 Bionic Ultra chip.
            <br /> A monster win for gaming.
          </h2>

          <p className={`hiw-subtitle ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className={`font-semibold text-center mt-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
            Honkai: Star Rail
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className={`hiw-text g_fadeIn ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
              A17 Bionic Ultra is an entirely new class of iPhone chip that delivers our {' '}
              <span className={theme === 'dark' ? 'text-white' : 'text-black'}>
                best graphic performance by far
              </span>.
            </p>

            <p className={`hiw-text g_fadeIn ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Mobile {' '}
              <span className={theme === 'dark' ? 'text-white' : 'text-black'}>
                games will look and feel so immersive
              </span>,
              with incredibly detailed environments and characters.
            </p>
          </div>


          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className={`hiw-text ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>New</p>
            <p className={`hiw-bigtext ${theme === 'dark' ? 'text-white' : 'text-black'
              }`}>Pro-class GPU</p>
            <p className={`hiw-text ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>with 8 cores</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks