'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import slider_bg from '@/assets/img/slider/arcade_arena.png';
import slider_img1 from '@/assets/img/slider/p2e.png';  // Updated image reference
import slider_img2 from '@/assets/img/slider/pvp.png';  // Updated image reference
import slider_img3 from '@/assets/img/slider/m2e.png';  // Updated image reference
//import shape_1 from '@/assets/img/slider/slider_shape01.png';
//import shape_2 from '@/assets/img/slider/slider_shape02.png';
//import shape_3 from '@/assets/img/slider/slider_shape03.png';
//import shape_4 from '@/assets/img/slider/slider_shape04.png';
import '@/assets/scss/utils/_arcadearenatext.scss';
import "@/assets/scss/components/_arcade-arena.scss";

const ArcadeArena = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <MouseParallaxContainer>
      <section className="slider__area slider__bg" style={{ backgroundImage: `url(${slider_bg.src})`, height: '100vh' }}> {/* Updated height */}
        <div className="slider-activee">
          <div className="single-slider">
            <div className="container custom-container">
              <div className="row justify-content-center align-items-center" style={{ height: '50vh' }}> {/* Removed marginTop */}
                <div className="col-lg-12 text-center"> {/* Added text-center class */}
                  <div className="slider__content">
                    <div className="slider__btn wow fadeIn" data-wow-delay="1.2s">  {/* Updated animation */}
                      {/*<Link href="https://discord.gg/gNU6xj6tPf" className="tg-btn-1"><span>Join Discord</span></Link>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       {/* <div className="slider__shapes">
         <Image src={shape_1} alt="shape" />
         <Image src={shape_2} alt="shape" />
         <Image src={shape_3} alt="shape" />
         <Image src={shape_4} alt="shape" />
        </div> */}
 <div className="image-buttons">
                    <div className="slider__img button1">
                        <Link href="/p2e">
                            <Image src={slider_img1} alt="Button 1" width={236} height={300} priority />
                        </Link>
                        <div className="icon-text">Play 2 Earn</div>
                    </div>
                    <div className="slider__img button2">
                        <Link href="/pvp">
                            <Image src={slider_img2} alt="Button 2" width={200} height={200} priority />
                        </Link>
                        <div className="icon-text">Player VS Player</div>
                    </div>
                    <div className="slider__img button3">
                        <Link href="/m2e">
                            <Image src={slider_img3} alt="Button 3" width={236} height={300} priority />
                        </Link>
                        <div className="icon-text">Move 2 Earn</div>
                    </div>
                </div>
      </section>
    </MouseParallaxContainer>
  );
};

export default ArcadeArena;
