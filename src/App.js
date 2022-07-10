import React from "react";
import Canvas from "./components/Canvas";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { PlayArrow, Adjust } from "@mui/icons-material";
import Slider from "@mui/material/Slider";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import CloseIcon from "@mui/icons-material/Close";
import RuleIcon from "@mui/icons-material/Rule";
import Portal from "@mui/material/Portal";

import RaidGame from "./paperScripts/main";
import preview from "./paperScripts/preview";

const raidGame = new RaidGame();

const getIsWide = () => window.innerWidth > (window.innerHeight * 1.2);

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [isWide, setIsWide] = React.useState(getIsWide());
  const actions = [
    { icon: <RuleIcon />, name: "Equip", action: () => setDrawerOpen(true) },
    {
      icon: <PlayArrow />,
      name: "Start",
      action: () => console.log("start game"),
    },
  ];

  React.useEffect(() => {
    const onResize = () => {
      console.log(getIsWide());
      setIsWide(getIsWide());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <Canvas
        paperScript={(canvas) => raidGame.initCanvas(canvas)}
        style={{
          // marginLeft: "0.25vw",
          // marginTop: "0.25vh",
          height: "99.5vh",
          width: "99.5vw",
        }}
      />
      {actions.map((action, i) => (
        <Tooltip
          title={action.name}
          placement="left"
          sx={{ userSelect: "none" }}
          key={action.name}
        >
          <Fab
            size="medium"
            sx={{
              position: "absolute",
              bottom: 64 * i + 16,
              right: 16,
              backgroundColor: "white",
              border: "2px solid blue",
            }}
            onClick={action.action}
          >
            {action.icon}
          </Fab>
        </Tooltip>
      ))}
      <Drawer
        anchor={isWide ? "right" : "bottom"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            height: isWide ? "100vh" : "75vh",
            width: isWide ? "75vw" : "100vw",
            backgroundColor: 'rgba(0, 0, 0, 0)'
          }}
        >
          <Stack
            spacing={2}
            direction="column"
            sx={{
              ms: 1,
              backgroundColor: 'purple'
            }}
            alignItems="center"
          >
            <Box sx={{ width: isWide ? "75vw" : "100vw", flexGrow: 1, backgroundColor: 'yellow' }}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                  </Typography>
                  <IconButton
                    size="large"
                    aria-label="close-menu"
                    sx={{ color: "white" }}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
            </Box>
            <Box sx={{ backgroundColor: 'red' }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  mb: 1,
                  width: isWide ? "75vw" : "100vw",
                }}
                alignItems="center"
              >
                <ZoomOutIcon />
                <Slider
                  defaultValue={50}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                />
                <ZoomInIcon />
              </Stack>
              <Canvas
                paperScript={preview}
                style={{ width: "200px", height: "200px" }}
              />
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default App;
