import React, { useState } from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import HospitalIcon from "../assets/hospital.png";
import Logout from "../assets/logout.png";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";

const cookies = new Cookies();

const SideBar = ({logout}) => {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner" onc>
          <img src={HospitalIcon} alt="Icon" width="30" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner" onClick={logout}>
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

const ChannelListContainer = ({
  isCreating,
  setIsCreating,
  setCreateType,
  setIsEditing
}) => {
const logout = () => {
  cookies.remove('token');
  cookies.remove("username");
  cookies.remove("fullName");
  cookies.remove("userId");
  cookies.remove("phoneNumber");
  cookies.remove("avatarURL");
  cookies.remove("hashedPassword");

  window.location.reload();
}

  return (
    <>
      <SideBar logout={logout}/>
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() =>{ }}
          List={(listProps) => (
            
            <TeamChannelList
              {...listProps}
              type="team"
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType}
              setIsEditing={setIsEditing}
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
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType}
              setIsEditing={setIsEditing}
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
