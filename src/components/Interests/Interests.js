import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SportsRugbyIcon from "@material-ui/icons/SportsRugby";
import CodeIcon from "@material-ui/icons/Code";
import LandscapeIcon from "@material-ui/icons/Landscape";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

function Interests() {
  return (
    <div className="skills">
      <h2 className="h2">Centres d'interêts</h2>
      <ul>
        <li>Musique</li>
        <li>Rugby</li>
        <li>Code</li>
        <li>Gaming</li>
        <li>Nature</li>
      </ul>

      <div className="interests">
        <MusicNoteIcon style={{ fontSize: 40 }} />
        <SportsRugbyIcon style={{ fontSize: 40 }} />
        <CodeIcon style={{ fontSize: 40 }} />
        <VideogameAssetIcon style={{ fontSize: 40 }} />
        <LandscapeIcon style={{ fontSize: 40 }} />
      </div>
    </div>
  );
}

export default Interests;
