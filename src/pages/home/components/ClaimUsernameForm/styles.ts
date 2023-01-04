import { Box, styled } from "@ignite-ui/react";

export const Form = styled(Box, {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  marginTop: "$4",
  padding: "$4",
  gap: "$2",

  "@media(max-width: 600px)": {
    gridTemplateColumns: "1fr",
  },
});
