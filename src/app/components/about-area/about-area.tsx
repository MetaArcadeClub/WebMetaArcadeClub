'use client'
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import about_1 from "@/assets/img/others/about_tab01.png";
import about_2 from "@/assets/img/others/about_tab02.png";
import about_3 from "@/assets/img/others/about_tab03.png";
import about_4 from "@/assets/img/others/about_tab04.png";
import about_5 from "@/assets/img/others/about_tab05.png";
import about_6 from "@/assets/img/others/about_tab06.png";
import about_7 from "@/assets/img/others/about_tab07.png";
import about_8 from "@/assets/img/others/about_tab08.png";
import about_9 from "@/assets/img/others/about_tab09.png";
import about_10 from "@/assets/img/others/about_tab10.png";
import about_11 from "@/assets/img/others/about_tab11.png";
import about_bg_1 from "@/assets/img/others/about_img01.jpg";
import about_bg_2 from "@/assets/img/others/about_img02.jpg";
import about_bg_3 from "@/assets/img/others/about_img03.jpg";
import about_bg_4 from "@/assets/img/others/about_img04.jpg";
import about_bg_5 from "@/assets/img/others/about_img05.jpg";
import about_bg_6 from "@/assets/img/others/about_img06.jpg";
import about_bg_7 from "@/assets/img/others/about_img07.jpg";
import about_bg_8 from "@/assets/img/others/about_img08.jpg";
import about_bg_9 from "@/assets/img/others/about_img09.jpg";
import about_bg_10 from "@/assets/img/others/about_img10.jpg";
import about_bg_11 from "@/assets/img/others/about_img11.jpg";
import icon_1 from "@/assets/img/icons/features_icon01.png";
import icon_2 from "@/assets/img/icons/features_icon02.png";
import icon_3 from "@/assets/img/icons/features_icon03.png";
import TextAnimation from "../common/text-animation";
import banner from "@/assets/img/others/banner.jpg";

// nav button
type INavProps = {id: string;img: StaticImageData;isActive?:boolean}
function NavBtn({id,img,isActive}:INavProps) {
  // handle open search
  const handleClickSound = (audioPath: string) => {
    const audio = new Audio(audioPath);
    audio.play();
  };
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${isActive ? "active" : ""}`}
        id={`about${id}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#about${id}`}
        type="button"
        role="tab"
        aria-controls={`about${id}`}
        aria-selected={isActive?"true":"false"}
        tabIndex={-1}
        onClick={() => handleClickSound("/assets/audio/tab.mp3")}
      >
        <span className="img-shape"></span>
        <Image src={img} alt="img" />
      </button>
    </li>
  );
}

// tab content item
// prop type
type ITabProps = {
    id: string;
    img: StaticImageData;
    title: string;
    isActive?: boolean;
    description?: string;
    subtitle?: string;
    gameImages?: StaticImageData[];  // Add this line
    gameDescriptions?: string[];    // Add this line
}

function TabItem({ id, img, title, isActive, description, subtitle, gameImages, gameDescriptions }: ITabProps) {
    return (
        <div
            className={`tab-pane ${isActive ? "show active" : ""}`}
            id={`about${id}`}
            role="tabpanel"
            aria-labelledby={`about${id}-tab`}
        >
            <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-10">
                    <div className="about__img">
                        <Image src={img} alt={title} />
                    </div>
                </div>
                <div className="col-xl-7 col-lg-10">
                    <div className="about__flex-wrap">
                        <div className="about__content-wrap">
                            <div className="about__content">
                                <h4 className="title">{title}</h4>
                                {subtitle && <h5 className="subtitle">{subtitle}</h5>}
                                <p>
                                    {description || "Default description if none is provided."}
                                </p>
                            </div>
                            <div className="about__content-list">
                                <ul className="list-wrap">
                                    {gameImages && gameDescriptions && gameImages.map((gameImg, index) => (
                                        <li key={index}>
                                            <Image src={gameImg} alt={gameDescriptions[index]} />
                                            {gameDescriptions[index]}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const AboutArea = () => {
  return (
    <section className="about__area section-pt-130 section-pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
                          <TextAnimation title="Inside the Game Engine" />
               <h3 className="title">From Pixels to Purpose</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="about__tab-wrap">
              <div className="text-boxes-container">
              <TextAnimation title="Mission" />
              <TextAnimation title="Vision" />
              </div>
              <div className="text-boxes-container">
                              <div className="text-box">
                                  Fusing pixelated quests with real-world strides, we craft realms where gaming pulses sync with heartbeats, amplifying well-being through Move2Earn dynamics.
                              </div>
                              <div className="text-box">
                                  In the luminous expanse of Solana, imagine a nexus where every game level ascends you in life, molding every gamer into an avatar of vitality.
                              </div>
              </div>
              <Image src={banner} alt="Banner Image" className="mission-vision-banner" />
              <h3 className="title">Team</h3>
              {/*<div className="about__buttons">*/}
              {/*  <Link href="/shop" className="tg-btn-2">*/}
              {/*    buy Hero*/}
              {/*  </Link>*/}
              {/*  <Link href="/shop" className="tg-btn-2 -secondary">*/}
              {/*    buy nfts*/}
              {/*  </Link>*/}
              {/*</div>*/}
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <NavBtn id="01" img={about_1} isActive={true} />
                <NavBtn id="02" img={about_2} />
                <NavBtn id="03" img={about_3} />
                <NavBtn id="04" img={about_4} />
                <NavBtn id="05" img={about_5} />
                <NavBtn id="06" img={about_6} />
                <NavBtn id="07" img={about_7} />
                <NavBtn id="08" img={about_8} />
                <NavBtn id="09" img={about_9} />
                <NavBtn id="10" img={about_10} />
                <NavBtn id="11" img={about_11} />
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
                  <TabItem
                      id="01"
                      img={about_bg_1}
                      isActive={true}
                      title="jeChilly"
                      subtitle="Founder"
                      description="The maestro who dreamed of pixels long before inception. With more game time than your grandmas knitting marathon, Jechilly spearheaded Meta Arcade Club with one joystick in hand and a dream in another."
                      gameImages={[icon_1, icon_2, icon_3]}
                      gameDescriptions={[
                          "Master of Pixel Prophecy",
                          "Level 999 Leadership",
                          "Daydreamer Extraordinaire"
                      ]}
                  />
                  <TabItem
                      id="02"
                      img={about_bg_2}
                      title="AsterX"
                      subtitle="Co-Founder"
                      description="Steering the ship and occasionally falling off it (into the virtual sea, of course). With an uncanny ability to turn bugs into features, Asterx ensures every game is an unforgettable rollercoaster."
                      gameImages={[icon_1, icon_2, icon_3]}
                      gameDescriptions={[
                          "Bug Whisperer",
                          "Defender of the Arcade Realm",
                          "Joystick Juggler"
                      ]}
                  />
                  <TabItem
                      id="03"
                      img={about_bg_3}
                      title="Munu"
                      subtitle="Co-Founder"
                      description="Our secret weapon when the chips are down... or when they are glitching. Munu the tactical genius who turns every meltdown into a breakthrough."
                      gameImages={[icon_1, icon_2, icon_3]}
                      gameDescriptions={[
                          "Crisis Crushinator",
                          "Strategy Sorcerer",
                          "Late-Night Coffee Conjurer"
                      ]}
                  />
                  <TabItem
                      id="04"
                      img={about_bg_4}
                      title="RaDesign"
                      subtitle="Graphic Designer"
                      description="When he is not painting the Sistine Chapel in pixel art, Radesign ensures our games look like a visual buffet. Every design screams, Eat me! Or...play me?"
                      gameImages={[icon_1, icon_2, icon_3]}
                      gameDescriptions={[
                          "Pixel Picasso",
                          "RGB Wrangler",
                          "Master of Visual Spells"
                      ]}
                  />
                  <TabItem
                      id="05"
                      img={about_bg_5}
                      title="Hussayn"
                      subtitle="Full-Stack Game Dev"
                      description="The digital architect with more layers than an onion. From back-end battles to front-end fiestas, Hussayn code dances better than most people."
                      gameImages={[icon_1, icon_2, icon_3]}
                      gameDescriptions={[
                          "Byte-sized Ballet",
                          "Code Charmer",
                          "Stack Stackler"
                      ]}
                  />
                  <TabItem
                      id="06"
                      img={about_bg_6}
                      title="Razvan"
                      subtitle="Frontend Developer"
                      description="The guy who ensures our first impressions always pop. Razvan front-ends are so slick, they slide right off the screen."
                      gameImages={[icon_1, icon_2, icon_3]}
                      gameDescriptions={[
                          "Pixel Perfectionist",
                          "Clickbait Creator",
                          "Cascade Commander"
                      ]}
                  />
                  <TabItem
                      id="07"
                      img={about_bg_7}
                      title="Vlad"
                      subtitle="Event Manager"
                      description="The maestro of mayhem. Vlad ensures our events are smoother than a joystick glide. If chaos had a rival, it would be him."
                      gameImages={[icon_1, icon_2, icon_3]}
                      gameDescriptions={[
                          "Chaos Coordinator",
                          "Pixel Party Planner",
                          "RSVP Ringleader"
                      ]}
                  />
                  <TabItem
                      id="08"
                      img={about_bg_8}
                      title="Virtual Partener"
                      subtitle="Marketing"
                      description="The shadowy figure turning the gears of hype. Spreading our lore across the metaverse, one viral campaign at a time."
                      gameImages={[icon_1, icon_2, icon_3]}
                      gameDescriptions={[
                          "Buzzword Bard",
                          "Meme Magician",
                          "Digital Drumbeater"
                      ]}
                  />
                  <TabItem
                      id="09"
                      img={about_bg_9}
                      title="Carlous.eth"
                      subtitle="Advisor"
                      description="The sage of the server, the Gandalf of our gaming journey. Guiding us through digital mazes with an ether torch."
                      gameImages={[icon_1, icon_2, icon_3]}
                      gameDescriptions={[
                          "Blockchain Brainiac",
                          "Ethereal Explorer",
                          "Wise Wallet Wizard"
                      ]}
                  />
                  <TabItem
                      id="10"
                      img={about_bg_10}
                      title="Ciprian"
                      subtitle="3D Graphic Designer"
                      description="Sculpting dreams in 3D, Ciprian crafts universes one vertex at a time. If its got depth, he is dived deep into it."
                      gameImages={[icon_1, icon_2, icon_3]}
                      gameDescriptions={[
                          "Polygon Poet",
                          "Depth Diver",
                          "Triangular Trailblazer"
                      ]}
                  />
                  <TabItem
                      id="11"
                      img={about_bg_11}
                      title="Vali"
                      subtitle="3D Graphic designer"
                      description="While others puzzled over puzzles, Vali was sculpting 3D marvels. With more hours in modeling than a cats ninth life, his masterpieces stand testament to precision, skill, and a sprinkle of magic."
                      gameImages={[icon_1, icon_2, icon_3]}
                      gameDescriptions={[
                          "Dimensional Drifter",
                          "Animation Alchemist",
                          "Vertex Vandal"
                      ]}
                  />
          {/*<TabItem id="02" img={about_bg_2} title="Axie Infinity" rate="60%" />*/}
          {/*<TabItem id="03" img={about_bg_3} title="The Walking Dead" rate="75%"/>*/}
          {/*<TabItem id="04" img={about_bg_4} title="The Dogami" rate="65%" />*/}
          {/*<TabItem id="05" img={about_bg_5} title="The Sandbox" rate="85%" />*/}
          {/*<TabItem id="06" img={about_bg_6} title="Pegaxy Horses" rate="90%" />*/}
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
