import {
  Button,
  Container,
  Card,
  Row,
  Text,
  Input,
  Grid,
} from "@nextui-org/react";
import OffersTable from "./OffersTable";

export default function Home() {
  return (
    <>
      <Container
        css={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            padding: "12px",
            width: "512px",
          }}
        >
          <Grid.Container gap={2}>
            <Grid>
              <Input bordered label="Collateral" />
            </Grid>
            <Grid>
              <Button color="gradient" auto>
                Create Order
              </Button>
            </Grid>
          </Grid.Container>
          <Input bordered label="Token Out" />
          <Button color="gradient" auto>
            Create Order
          </Button>
        </Card>
      </Container>
    </>
  );
}
