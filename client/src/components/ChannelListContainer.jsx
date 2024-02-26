import React, { useState } from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import HospitalIcon from "../assets/hospital.png";
import Logout from "../assets/logout.png";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";

const SideBar = () => {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner">
          <img src={HospitalIcon} alt="Icon" width="30" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner">
          <img src={Logout} alt="logout" width="30" />
        </div>
      </div>
    </div>
  );
};

const CompanyHeader = () => {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">Medical Pager</p>
    </div>
  );
};

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
        //   filters={{}}
          channelRenderFilterFn={() =>{ }}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="team"
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="team"
            />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={()=>{ }}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="messaging"
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="messaging"
            />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
