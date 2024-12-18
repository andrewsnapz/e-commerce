import { Grid, Column } from "../grid/Styles.tsx";
import Logo from "./Logo.tsx";

export default function NavBar() {
  return (
    <Grid as="nav">
      <Column sm={4} md={6} lg={12}>
        <Logo />
      </Column>
    </Grid>
  );
}
