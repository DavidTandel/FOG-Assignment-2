import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../../components";
import ImageGallery from "../../components/ImageGallery";
import MenuMultiplayerServerBrowserInvite from "../../components/MenuMultiplayerServerBrowserInvite";
import RegionInfoRow from "../../components/RegionInfoRow";
import Sidebar1 from "../../components/Sidebarl";
import React, { Suspense } from "react";

const regionSettingsList = [
  { regionText: "Region", locationText: "europe - de" },
  { regionText: "punkbuster", locationText: "on" },
  { regionText: "fairfight", locationText: "on" },
  { regionText: "password", locationText: "off" },
  { regionText: "preset", locationText: "normal" },
];

const minimapSettingsList = [
  { regionText: "minimap", locationText: "on" },
  { regionText: "only squad leader spawn", locationText: "off" },
  { regionText: "vehicles", locationText: "on" },
  { regionText: "team balance", locationText: "on" },
  { regionText: "minimap spotting", locationText: "on" },
  { regionText: "hud", locationText: "on" },
  { regionText: "3p vehicle cam", locationText: "on" },
  { regionText: "regenerative health", locationText: "on" },
  { regionText: "kill cam", locationText: "on" },
  { regionText: "friendly fire", locationText: "off" },
  { regionText: "3d spotting", locationText: "on" },
  { regionText: "enemy name tags", locationText: "on" },
];

const gameplaySettingsList = [
  { regionText: "tickets", locationText: "400" },
  { regionText: "vehicle spawn delay", locationText: "25" },
  { regionText: "bullet damage", locationText: "100" },
  { regionText: "kick after team kills", locationText: "5" },
  { regionText: "player health", locationText: "100" },
  { regionText: "player respawn time", locationText: "100" },
  { regionText: "kick after idle", locationText: "300" },
  { regionText: "ban after kicks", locationText: "3" },
];

export default function MenuMultiplayerServerBrowserPage() {
    return (
      <>
        <Helmet>
          <title>Multiplayer Server Browser - Join the Action Now!</title>
          <meta
            name="description"
            content="Explore and join multiplayer servers with ease. Find the perfect game with server info, player counts, and settings. Dive into the action on our server browser!"
          />
        </Helmet>
        <div className="h-[1080px] w-full bg-white-e bg-[url(/public/images/img_menu_multiplayer.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
          <div>
            <div>
              <div className="h-[1080px] bg-[url(/public/images/img_group_1.png)] bg-cover bg-no-repeat py-9 lg:h-auto md:h-auto sm:py-4">
                <div className="mb-4 flex items-center gap-0.5 md:flex-col">
                  <div className="flex w-[6%] flex-col items-end gap-[324px] self-end lg:gap-[243px] md:w-full md:gap-[243px] md:px-5 sm:gap-[162px]">
                    <Sidebar1 />
                  </div>
                  <div className="flex w-[74%] flex-col items-start justify-center gap-7 lg:w-full md:w-full">
                    <Img
                      src="images/img_television_white_b.svg"
                      alt="Television"
                      className="h-[22px] w-full lg:h-auto md:h-auto"
                    />
                    <img src="images/img_vector_white_b.svg" alt="Vector" className="h-[16px]" />
                  </div>
                </div>
                <div className="mb-8 flex-1 md:self-stretch md:px-5">
                    <div className="flex items-start md:flex-col">
                        <div className="flex flex-col items-start">
                        <Img
                            src="images/img_arrow_left_white_b.svg"
                            alt="Arrowleft"
                            className="mb-1.5 h-[14px] self-end"
                        />
                        <Breadcrumb
                            separator={
                            <Text className="h-[31px] w-[10px] text-[24px] font-medium uppercase tracking-[1.44px] !text-white-1 lg:text-[20px]">
                            </Text>
                            }
                            className="flex flex-1 flex-wrap items-center gap-3 px-6 sm:px-4"
                        >
                            <BreadcrumbItem>
                            <BreadcrumbLink href="#" className="lg:text-[15px]">
                                <Heading as="h1" className="text-[18px] font-semibold uppercase tracking-[1.08px]">
                                multiplayer
                                </Heading>
                            </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#" className="lg:text-[15px]">
                                <Heading as="h2" className="text-[18px] font-semibold uppercase tracking-[1.08px]">
                                server browser
                                </Heading>
                            </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="relative mt-[-6px] text-[46px] font-semibold uppercase tracking-[1.38px] lg:text-[39px] md:text-[30px] sm:text-[24px]">
                        <Heading
                            size="headinglg"
                            as="h3"
                        >
                            server info
                        </Heading>
                        </div>

                        <div className="flex flex-col items-start gap-[30px]">
                        <div className="flex flex-col items-start gap-3.5 self-stretch">
                            <Heading
                            size="headingmd"
                            as="h4"
                            className="text-[36px] font-semibold tracking-[2.16px] lg:text-[30px] md:text-[30px] sm:text-[28px]"
                            >
                            #1 NASA | Noobs Welcome | Conquest 40Hz
                            </Heading>

                            <div className="flex items-center gap-2 self-stretch sm:flex-col">
                            <Img
                                src="images/img_megaphone_amber_500_1.svg"
                                alt="Megaphone"
                                className="mb-1.5 h-[6px] self-end sm:mb-0 sm:w-full"
                            />

                            <Heading
                                as="h5"
                                className="text-[18px] font-semibold uppercase tracking-[1.08px] !text-white-1 lg:text-[15px]"
                            >
                                conquest large | siege of shanghai - normal | 40 hz
                            </Heading>
                            </div>

                            <Heading
                            as="h6"
                            className="text-[18px] font-semibold leading-[22px] tracking-[0.54px] !text-white-1 lg:text-[15px]"
                            >
                            <>
                            
                                Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us:
                                <br />
                                www.epg.gg | Discord
                                <br />
                                https://discord.gg/3r5NK4d
                                </>
                            </Heading>
                            <div className="flex self-stretch md:flex-col">
                                <Button shape="square" className="min-w-[324px] !border px-[33px] tracking-[1.08px] sm:px-4">
                                join
                                </Button>
                                <Button shape="square" className="ml-2 min-w-[324px] !border px-[33px] tracking-[1.08px] md:ml-0 sm:px-4">
                                spectate
                                </Button>
                                <Button shape="square" className="ml-2 min-w-[324px] !border px-[33px] tracking-[1.08px] md:ml-0 sm:px-4">
                                join as commander
                                </Button>
                                <Button shape="square" className="ml-2 min-w-[166px] !border px-[33px] tracking-[1.08px] md:ml-0 sm:px-4">
                                13672
                                </Button>
                            </div>
                            <div className="flex self-stretch">
                                <div className="flex flex-col items-start">
                                    <Heading
                                    as="h6"
                                    className="text-[18px] font-semibold uppercase tracking-[1.08px] lg:text-[15px]"
                                    >
                                    players
                                    </Heading>
                                    <Heading
                                    size="headings"
                                    as="h3"
                                    className="text-[30px] font-semibold tracking-[1.80px] lg:text-[25px] md:text-[24px] sm:text-[22px]"
                                    >
                                    64/64
                                    </Heading>
                                </div>
                                <div className="flex flex-col items-start">
                                    <Heading
                                    as="h6"
                                    className="text-[18px] font-semibold uppercase tracking-[1.08px] lg:text-[15px]"
                                    >
                                    ping
                                    </Heading>
                                    <Heading
                                    size="headings"
                                    as="h3"
                                    className="text-[30px] font-semibold tracking-[1.80px] lg:text-[25px] md:text-[24px] sm:text-[22px]"
                                    >
                                    47ms
                                    </Heading>
                                </div>
                                <div className="flex flex-1 flex-col items-start pl-[72px] pr-14 lg:pl-8 md:pl-5 sm:px-4">
                                    <Heading
                                        as="h6"
                                        className="text-[18px] font-semibold uppercase tracking-[1.08px] lg:text-[15px]"
                                    >
                                        tickrate
                                    </Heading>
                                    <Heading
                                        size="headings"
                                        as="h3"
                                        className="text-[30px] font-semibold tracking-[1.80px] lg:text-[25px] md:text-[24px] sm:text-[22px]"
                                    >
                                        60 Hz
                                    </Heading>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-3 self-stretch md:flex-col">
                                <div className="flex w-[22%] flex-col items-start gap-2 md:w-full">
                                    <Heading
                                    as="h6"
                                    className="ml-4 text-[18px] font-semibold uppercase tracking-[1.26px] lg:text-[15px] md:ml-0"
                                    >
                                    settings
                                    </Heading>
                                    <div className="flex flex-col gap-0.5 self-stretch">
                                    <Suspense fallback={<div>Loading feed...</div>}>
                                        {regionSettingsList.map((d, index) => (
                                        <RegionInfoRow {...d} key={"listregion" + index} />
                                        ))}
                                    </Suspense>
                                    </div>
                                </div>

                                <div className="flex w-[24%] flex-col items-start gap-2 self-center md:w-full">
                                    <Heading
                                    as="h6"
                                    className="ml-[30px] text-[18px] font-semibold uppercase tracking-[1.26px] lg:text-[15px] md:ml-0"
                                    >
                                    advanced
                                    </Heading>
                                    <div className="ml-3 flex flex-col gap-0.5 self-stretch md:ml-0">
                                    <Suspense fallback={<div>Loading feed...</div>}>
                                        {minimapSettingsList.map((d, index) => (
                                        <RegionInfoRow {...d} key={"listminimap" + index} />
                                        ))}
                                    </Suspense>
                                    </div>
                                </div>
                                <div className="flex w-[24%] flex-col items-start gap-2 self-center md:w-full">
                                    <Heading
                                        as="h6"
                                        className="ml-[30px] text-[18px] font-semibold uppercase tracking-[1.26px] lg:text-[15px] md:ml-0"
                                    >
                                        advanced
                                    </Heading>
                                    <div className="ml-3 flex flex-col gap-0.5 self-stretch md:ml-0">
                                        <Suspense fallback={<div>Loading feed...</div>}>
                                        {minimapSettingsList.map((d, index) => (
                                            <RegionInfoRow {...d} key={"listminimap" + index} />
                                        ))}
                                        </Suspense>
                                    </div>
                                    </div>

                                    <div className="flex flex-1 flex-col items-start gap-2 px-3.5 md:self-stretch">
                                    <Heading
                                        as="h6"
                                        className="ml-4 text-[18px] font-semibold uppercase tracking-[1.26px] lg:text-[15px] md:ml-0"
                                    >
                                        rules
                                    </Heading>
                                    <div className="mr-[382px] flex flex-col gap-0.5 self-stretch md:mr-0">
                                        <Suspense fallback={<div>Loading feed...</div>}>
                                        {gameplaySettingsList.map((d, index) => (
                                            <RegionInfoRow {...d} key={"listtickets" + index} />
                                        ))}
                                        </Suspense>
                                    </div>
                                </div>
                            </div>
                            <Heading
                            as="h6"
                            className="text-[18px] font-semibold uppercase tracking-[1.26px] lg:text-[15px]"
                            >
                            map rotation
                            </Heading>
                        </div>
                        <MenuMultiplayerServerBrowserInvite/>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative ml-32 mr-[410px] mt-[-72px] flex md:mx-0 md:flex-col">
            <ImageGallery />

            <Img
                src="images/img_rectangle_35.png"
                alt="Rectangle"
                className="mt-10 h-[30px] w-full object-cover lg:h-auto"
            />

            <ImageGallery dawnbreakerImage="images/img_propaganda_1.png" />
            <ImageGallery dawnbreakerImage="images/img_op_locker_1_1.png" />
            <ImageGallery dawnbreakerImage="images/img_lancang_dam_1.png" />
        </div>
        </div>
        </div>
        </div>
                    
      </>
    );
  }