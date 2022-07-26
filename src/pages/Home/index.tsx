import { Box } from "@mui/material";

export const Home = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      height="calc(100vh - 60px)"
      margin={4}
    >
      <Box display="flex" sx={{ flexGrow: 1 }} border="1px solid black">
        TEST
      </Box>
      <Box display="flex" sx={{ flexGrow: 1 }} border="1px solid black">
        TEST
      </Box>
      <Box display="flex" sx={{ flexGrow: 1 }} border="1px solid black">
        TEST
      </Box>
    </Box>
  );
};
