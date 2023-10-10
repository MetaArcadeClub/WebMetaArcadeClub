"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import bg from "@/assets/img/bg/roadmap_bg.jpg";
import road_map from "@/assets/img/others/roadmap1.png";
import road_map_step from "@/assets/img/bg/breadcrumb_bg01.jpg";
import useTextAnimation from "@/hooks/use-text-animation";

// road map lists
type IRoadMap = {
  id: number;
  active: boolean;
  title: string;
  lists: {
    active: boolean;
    text: string;
  }[];
};
const road_map_lists: IRoadMap[] = [
  {
    id: 1,
    active: true,
    title: "Phase I",
    lists: [
      {active: true, text: "Finalize 3D Pong with optimal visuals and gameplay" },
      {active: true, text: "Host a celebratory game launch tournament with exciting prizes" },
      {active: true, text: "Revamp the Meta Arcade Club website for better user experience" },
      {active: true, text: "Initiate targeted social media campaigns" },
      {active: true, text: "Implement feedback mechanisms for improvement" },
    ],
  },
  {
    id: 2,
    active: false,
    title: "Phase II",
      lists: [
      {active: false, text: "Official launch of 3D Pong with promotional campaigns." },
      {active: false, text: "Launch Meta Arcade Club's first NFT collection with unique assets" },
      {active: false, text: "Kickstart development of new NFT-based arcade games" },
      {active: false, text: "Release special skins for 3D Pong and organize tournaments." },
    ],
  },
  {
    id: 3,
    active: false,
    title: "Phase III",
    lists: [
      {active: false, text: "Roll out NFT renting and introduce the Pawn Arcade feature" },
      {active: false, text: "Aim for a broader audience, moving beyond just the web3 enthusiasts" },
      {active: false, text: "Start producing and distributing branded merchandise" },
      {active: false, text: "Promote the exclusive Arcadians collection and metaverse" },
      {active: false, text: "Offer exclusive ticket collection for special perks" },
    ],
    },
  {
    id: 4,
    active: false,
    title: "Phase IV",
    lists: [
      {active: false, text: "Begin the exciting journey of developing the Meta Arcade Club metaverse" },
      {active: false, text: "Regularly introduce new games to the platform to retain user interest" },
      {active: false, text: "Launch limited edition merchandise" },
      {active: false, text: "Review and refine the Level Up Zone, adapting to user needs" },
    ],
  },
];

const RoadMapArea = () => {
  const [isView, setIsView] = useState<boolean>(false);
  useTextAnimation(isView);

  const handleInViewChange = (inView: boolean) => {
    if (inView) {
      setIsView(true);
    }
  };


  return (
    <section
      className="roadMap__area roadMap-bg section-pt-150 section-pb-150"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="roadMap__inner">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                  <div className="roadMap__content">
                    <h2 className="title">Pixelated Pathways</h2>
                    <p>
                     Level up with us! Track our quests, power-ups, and next-level achievements as we navigate the game of progress.
                    </p>
                    {/*<Link href="/contact" className="tg-btn-1 -btn-yellow">*/}
                    {/*  <span>roadmap</span>*/}
                    {/*</Link>*/}
                  </div>
                  <div className="roadMap__img">
                    <Image
                      src={road_map}
                      className="tg-parallax"
                      data-scale="1.5"
                      data-orientation="down"
                      alt="roadMap__img"
                    />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="roadMap__steps-wrap">
                    {road_map_lists.map((item) => (
                      <div
                        key={item.id}
                        className={`roadMap__steps-item ${item.active ? "active" : ""}`}
                      >
                        <h3 className="title">{item.title}</h3>
                        <InView
                          as="ul"
                          onChange={handleInViewChange} className="roadMap__list list-wrap">
                          {item.lists.map((l, i) => (
                            <li
                              key={i}
                              className={`${l.active ? "active" : ""} tg__animate-text style2`}
                            >
                              {l.text}
                            </li>
                          ))}
                        </InView>
                        {/*<Image*/}
                        {/*  src={road_map_step}*/}
                        {/*  alt="img"*/}
                        {/*  className="roadMap__steps-img"*/}
                        {/*/>*/}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMapArea;
