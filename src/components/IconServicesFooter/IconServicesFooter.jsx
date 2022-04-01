import IconButton from "@mui/material/IconButton";
import { Grid, Typography } from "@mui/material";

export default function IconServicesFooter({ icon, text }) {
  return (
    <>
      <Grid item sx={{ mt: 2 }}>
        <IconButton
          sx={{
            mt: "10px",
            mb: "15px",
            mr: "72px",
            width: "122px",
            height: "89px",
            opacity: "100%",
            padding: 0,
            borderRadius: 0
          }}
        >
          <img src={icon} alt={"Icon Footer"} />
          <Typography
            sx={{
              fontFamily: "PoppinsRegular",
              fontSize: "15px",
              ml:2,
              color: "violetMain.main",
              textAlign: "left",
              letterSpacing: "0px",
              opacity: 1,
            }}
          >
            {text}
          </Typography>
        </IconButton>
      </Grid>
    </>
  );
}
