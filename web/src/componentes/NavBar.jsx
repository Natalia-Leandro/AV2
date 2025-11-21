import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

export default function NavBar() {
  const location = useLocation();

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "#7b1fa2",
          borderRadius: "20px",
          width: "85%",
          maxWidth: "1100px",
          boxShadow: "0px 6px 18px rgba(0,0,0,0.18)",
        }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Stack direction="row" spacing={3}>
            <Button
              component={RouterLink}
              to="/"
              startIcon={<ListAltIcon />}
              sx={{
                background: location.pathname === "/" ? "#e91e63" : "transparent",
                color: "white",
                fontWeight: "bold",
                padding: "10px 26px",
                borderRadius: "12px",
                "&:hover": {
                  background:
                    location.pathname === "/" ? "#c2185b" : "rgba(255,255,255,0.25)",
                },
              }}
            >
              ALUNOS
            </Button>

            <Button
              component={RouterLink}
              to="/novo"
              startIcon={<PersonAddAlt1Icon />}
              sx={{
                background: location.pathname === "/novo" ? "#e91e63" : "transparent",
                color: "white",
                fontWeight: "bold",
                padding: "10px 26px",
                borderRadius: "12px",
                "&:hover": {
                  background:
                    location.pathname === "/novo" ? "#c2185b" : "rgba(255,255,255,0.25)",
                },
              }}
            >
              NOVO ALUNO
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}
