import { Heading, Grid } from "@instructure/ui"
import Item from "./components/Item"
import './App.css';

function App() {
  return (
    <main style={{ margin: "0 25%" }}>
      <Grid>
        <Grid.Row>
          <Grid.Col textAlign="center">
            <Heading margin="medium 0 0 0">TODOS</Heading>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            INPUTFIELD
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col >
            <Item text="Not asd" ></Item>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </main>
  );
}

export default App;
