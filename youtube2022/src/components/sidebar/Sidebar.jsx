import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CloudIcon from "@mui/icons-material/Cloud";
import ChatIcon from "@mui/icons-material/Chat";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GrassIcon from "@mui/icons-material/Grass";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none", cursor:"pointer" }}>
          <span className="logo">AgroW</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Landing Page</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/rent" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Rent</span>
            </li>
          </Link>
          <Link to="/weather" style={{ textDecoration: "none" }}>
            <li>
              <CloudIcon className="icon" />
              <span>Weather</span>
            </li>
          </Link>
          <Link to="/CropRec" style={{ textDecoration: "none" }}>
            <li>
              <GrassIcon className="icon" />
              <span>
                Crop <br></br>
                Rec.
              </span>
            </li>
          </Link>
          <Link to="/FertRec" style={{textDecoration:"none"}}>
            <li>
              <SanitizerIcon className="icon" />
              <span>
                Fertilizer<br></br>Rec.
              </span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to="/VidRec" style={{textDecoration:"none"}}>
          <li>
            <InsertChartIcon className="icon" />
            <span>News</span>
          </li>

          </Link>
          <li>
            <ChatIcon className="icon" />
            <span>Chat</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
