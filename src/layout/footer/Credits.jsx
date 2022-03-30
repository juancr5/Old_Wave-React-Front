import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";

import experimentality from "../../assets/icons/experimentality-vtex.svg";

const Credits = () => {
  return (
    <>
      <Box sx={{ display: "flex" , alignItems: "center", justifyContent: "center" }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "PoppinsRegular",
            letterSpacing: "0px",
            textAlign: "center",
            color: "darkGrey.main",
          }}
        >
          oldwave© 2020 | Powered by:
        </Typography>
        <IconButton
          sx={{
            width: "132px",
            height: "7px",
          }}
        >
          <img src={experimentality} alt={"experimentality"} />
        </IconButton>
      </Box>
    </>
  );
};

export default Credits;
