import { useTheme, Grid, Text, Button } from "@geist-ui/core";

export default function Navbar() {
  const theme = useTheme();
  console.log(
    theme.layout.pageMargin,
    theme.layout.pageWidth,
    theme.layout.pageWidthWithMargin
  );
  return (
    <div
      style={{
        width: "100vw",
        background: "white",
        boxShadow: `${theme.expressiveness.shadowSmall}`,
        zIndex: 9999,
        position: "sticky",

        top: 0,
        left: 0,
      }}
    >
      <Grid.Container
        justify="space-between"
        alignItems="center"
        style={{
          maxWidth: theme.layout.pageWidth,
          width: "100%",
          padding: `0 ${theme.layout.gap}`,
          margin: "0 auto",
          height: 64,
        }}
      >
        <Grid>
          <Text h4 my="auto">
            Nextjs 13 Beta
          </Text>
        </Grid>
        <Grid>
          <Button type="success-light" auto effect={false} scale={3 / 4}>
            Login
          </Button>
        </Grid>
      </Grid.Container>
    </div>
  );
}
