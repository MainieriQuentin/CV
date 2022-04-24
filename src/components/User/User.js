import React from "react";
import "../User/User.css";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function User() {
  return (
    <div className="user">
      <img className="user__avatar" src="./images/avatar2.jpg" alt="" />
      <h1 className="user__name">MAINIERI Quentin</h1>
      <p className="user__profession">Developpeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon />7 rue du meix Joublot 71530 Fragnes la Loyère
        </p>
        <p className="user__info">
          <PhoneIcon />
          <a href="tel:+33671023010">0671023010</a>
        </p>
        <p className="user__info">
          <EmailIcon />
          quentin.mainieri@live.fr
        </p>
        <p className="user__info">
          <EventIcon />
          Date de naissance: 12 mars 1993
        </p>
        <p className="user__info">
          <LocationOnIcon />
          Lieu de naissance: St Rémy
        </p>
      </div>
    </div>
  );
}

export default User;
