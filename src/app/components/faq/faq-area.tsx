'use client'
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React,{useState} from "react";
import s_1_img from "@/assets/img/others/services_img01.jpg";
import s_2_img from "@/assets/img/others/services_img02.jpg";
import s_3_img from "@/assets/img/others/services_img03.jpg";
import s_4_img from "@/assets/img/others/services_img04.jpg";
import TextAnimation from "../common/text-animation";



// service images
/*const service_images:StaticImageData[] = [s_1_img,s_2_img,s_3_img,s_4_img];*/
// faq data type 
type IFaq = {
  id: string;
  active?: boolean;
  title: string;
  desc: string;
} 
// faq data 
const faq_data: IFaq[] = [
  {
    id: "one",
    active: true,
    title: "How do I participate in the Beta phase of your Pong game?",
    desc: "To participate, you must possess a WL role, be at least level 10 on our Discord server, and be an active community member on Discord and Twitter."
  },
  {
    id: "two",
    title: "What benefits do I get as an NFT holder of your project?",
    desc: "As an NFT holder, you will enjoy revenue shares, reduced/free service use, gain multipliers in our PvE games, and more."
  },
  {
    id: "three",
    title: "Can you explain the Play2Earn system in your PvE games?",
    desc: "In our single-player games, you can earn game coins while playing. The methods of earning differ based on the game."
  },
  {
    id: "four",
    title: "How does the pawnshop service work for NFT holders?",
    desc: "You can pledge your NFT as collateral to receive a loan equal to 50% of its current market value. Repay the loan plus a 18.88% fee within one week to reclaim your NFT."
  },
  {
    id: "five",
    title: "What is the LevelUp zone, and how does Move2Earn function?",
    desc: "LevelUp Zone offers psychological support and a supportive community. The Move2Earn system lets users earn Meta Arcade Coin by engaging in physical activities tracked by the platform."
  },
  {
    id: "six",
    title: "How can I participate in the Leisure Raffle and what are the prizes?",
    desc: "Participate in the Leisure Raffle by purchasing one of the 3333 available tickets. Prizes include all-expenses-paid world trips for 33 lucky winners."
  },
  {
    id: "seven",
    title: "Are there any rewards for top players in your PvP games?",
    desc: "Yes, top players are rewarded through tournaments, leaderboards, collaborations, and more."
  },
  {
    id: "eight",
    title: "What other services can we expect from your utility project in the future?",
    desc: "Future services may include different types of events, metaverse, real-life payments with Meta Arcade Coin, etc."
  },
  {
    id: "nine",
    title: "How can I stay updated on the launch of new games and services?",
    desc: "Stay updated by following our Twitter, being active on our Discord, and checking the announcement channel."
  },
  {
    id: "ten",
    title: "Is your platform compatible with both Web3 and Web2 communities?",
    desc: "Yes, our platform is compatible with both Web3 and Web2 communities."
  },
];


const FaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleMouseOver = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseOut = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section className="faq-area">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="faq__content-wrap">
                    <div className="section__title text-start">
                        <span className="sub-title tg__animate-text">Players Guidebook</span>
                        <h3 className="title">Decode the Playground</h3>
                        <TextAnimation title="Answers unveiling the essence of our world." />
                    </div>
                    <div className="faq__wrapper">
                        <div className="accordion" id="accordionExample">
                          {faq_data.map((item,i) => (
                            <div key={i} className="accordion-item" onClick={() => handleMouseOver(i)}>
                                <h2 className="accordion-header" id={`heading-${item.id}`}>
                                    <button className={`accordion-button ${item.active?"":"collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${item.id}`} aria-expanded={item.active?"true":"false"} aria-controls={`collapse-${item.id}`}>
                                       <span className="count">{i+1}</span> {item.title}
                                    </button>
                                </h2>
                                <div id={`collapse-${item.id}`} className={`accordion-collapse collapse ${item.active ? "show" : ""}`} aria-labelledby={`heading-${item.id}`} data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="col-lg-6">*/}
            {/*    <div className="services__images">*/}
            {/*    {service_images.map((s,i) => (*/}
            {/*        <div*/}
            {/*            key={i}*/}
            {/*            className={`services__images-item ${activeIndex === i ? "active" : ""}`}*/}
            {/*            style={activeIndex === i ? {} : { display: 'none' }} // Only display the image when its index matches the active FAQ index*/}
            {/*        >*/}
            {/*            <Image src={s} alt="img" style={{ width: '100%', height: '100%' }} />*/}
            {/*            */}{/*<Link href="/service-details" className="services__link">*/}
            {/*            */}{/*    <i className="flaticon-next"></i>*/}
            {/*            */}{/*</Link>*/}
            {/*        </div>*/}
            {/*      ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </div>
</section>
  );
};

export default FaqArea;