'use client'
import React from "react";

export interface BannerInfo {
  battingClub: string,
  battingClubTeam: string,
  bowlingClub: string,
  bowlingClubTean: string,
  batterOne: string,
  batterTwo: string,
  overs: string,
  thisOver: string,
  thisBowler: string,
  score: string,
  target: string,
}
const FETCH_TIMER_IN_MILLIS = 10000; // 10 secs

export default function Home() {
  const [banner, setBanner] = React.useState<BannerInfo>()

  function fetchBannerInfo() {
  
    const bannerInfo =  {
      batterOne: 'Teddy 40(60)',
      batterTwo: 'Brajesh* 20(60)',
      battingClub: 'NCI CC',
      battingClubTeam: '1 XI',
      bowlingClub: 'NCI CC',
      bowlingClubTean: '2 XI',
      thisOver: '. . . 1 1 .',
      thisBowler: 'Siva',
      overs: '40',
      score: '270-5',
      target: `270`
    };
    setBanner(bannerInfo);
  }
  

  React.useEffect(() => {
    fetchBannerInfo();
    const timer = setInterval(
      () => fetchBannerInfo(),
      FETCH_TIMER_IN_MILLIS
    );
    return () => clearInterval(timer);
  });

  return (
    <main className="">
    
      <div className="grid grid-rows-2 grid-cols-6 bg-red-950 rounded-lg m-4 divide-x-4 ">
      
        <div className="row-span-2 col-span-1 bg-slate-200 p-4 text-sky-500 font-mono font-bold">
          <div className="row-span-1">
            {banner?.battingClub}
          </div>
          <div className="row-span-1 ">
            {banner?.battingClubTeam}
          </div>
        </div>

        <div className="row-span-2 col-span-1  p-4">
          <div className="row-span-1">
            {banner?.score} ({banner?.overs} Overs)
          </div>
          {
            banner?.target && <div className="row-span-1">
              Target: {banner?.target}
            </div>
          }
        </div>
        
        <div className="row-span-2 col-span-1  p-4">
          <div className="row-span-1">
            {banner?.batterOne}
          </div>
          <div className="row-span-1 ">
            {banner?.batterTwo}
          </div>
        </div>

        <div className="row-span-2 col-span-2  p-4">
          <div className="row-span-1">
            {banner?.thisBowler}
          </div>
          <div className="row-span-1 ">
            {banner?.thisOver}
          </div>
        </div>

        <div className="row-span-2 col-span-1 bg-slate-200 p-4 text-sky-500 font-mono font-bold">
          <div className="row-span-1">
            {banner?.battingClub}
          </div>
          <div className="row-span-1 ">
            {banner?.bowlingClubTean}
          </div>
        </div>
      </div>
    </main>
  );
}
