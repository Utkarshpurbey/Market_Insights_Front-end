import {useState} from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import WeatherCard from "../weather/Weather";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import './MyAppBar.scss'
export default function MyAppBar() {
  const { dispatch } = useContext(DarkModeContext);
  const pages = ["Commodities", "Region", "About"];

  const [menuItems, setmenuItems] = useState(null);
  // function to close and open the tooltip menu
  const openMenuToolTip = (event) => {
    setmenuItems(event.currentTarget);
  };

  const closeMenuToolTip = () => {
    setmenuItems(null);
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xxl">
          {/* adding the toolbar */}
          <Toolbar disableGutters>
            {/* adding the logo icon */}
            <Button
              sx={{
                color: "white",
                display: "block",
                letterSpacing: "5px",
                textDecoration: "none",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <span>Market Insights</span>
              </Link>
            </Button>
            {/* menu icon for mobile and tablet devices */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={openMenuToolTip} color="inherit">
                <MenuIcon />
              </IconButton>
              {/* tooptip options */}
              <Menu
                anchorEl={menuItems}
                open={Boolean(menuItems)}
                onClose={closeMenuToolTip}
              >
                {pages.map((page) => (
                  <Link
                  className="items"
                    key={page}
                    onClick={closeMenuToolTip}
                    to={`${page}`}
                    style={{
                      textDecoration: "none",
                      color: "blue",
                      display: "block",
                      paddingLeft: 12,
                    }}
                  >
                    <span>{`${page}`}</span>
                  </Link>
                ))}
                <Box className="items">

                <DarkModeOutlined
                
                onClick={() => dispatch({ type: "TOGGLE" })}
                />
                </Box>
              <WeatherCard />
              </Menu>
            </Box>
            {/* menu items for laptop devices */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link
                className="leptopItems"
                  key={page}
                  onClick={closeMenuToolTip}
                  to={`${page}`}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "block",
                    padding: 4,
                  }}
                >
                  <span>{`${page}`}</span>
                </Link>
              ))}
              <Box
                className="leptopItems"
              >

              <DarkModeOutlined
                onClick={() => dispatch({ type: "TOGGLE" })}
                />
                </Box>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <WeatherCard />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
