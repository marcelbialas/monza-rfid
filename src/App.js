import React from "react";
import {
  Container,
  CardID,
  Button,
  CardInfo,
  Ticket,
  LoadingContainer,
  CardHeader,
  Wrapper,
  CardLoader,
  CardFooter,
  Loader,
  DateTime,
} from "./AppElements";
import axios from "axios";
import "./App.css";

function App() {
  const [rfid, setRfid] = React.useState("");
  const [rfidData, setRfidData] = React.useState([]);
  const [log, setLog] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const loadCard = (mode) => {
  const date = new Date().toLocaleString("de-DE").replace(",", "");

  let modeID = "";
  let modeDesc = "";
  let times = 1;
  let RaceType = 1;

  switch (mode) {
    case 10:
    case 20:
      modeID = 1003;
      modeDesc = "11 Min. Training";
      RaceType = mode === 10 ? 1 : 3;
      setLog([...log, { name: modeDesc, anzahl: times }]);
      break;
    case 30:
      modeID = 1010;
      modeDesc = "11 Min. Training (3er-Ticket)";
      times = 3;
      RaceType = 3;
      setLog([...log, { name: modeDesc, anzahl: times }]);
      break;
    case "np":
      modeID = 1008;
      modeDesc = "11 Min. Training (Nice-Price)";
      times = 3;
      RaceType = 8;
      setLog([...log, { name: modeDesc, anzahl: times }]);
      break;
    case "vs":
      modeID = 1003;
      modeDesc = "Vater / Sohn Ticket";
      RaceType = 9;
      setLog([...log, { name: modeDesc }]);
      break;
    case 25:
      modeID = 2115;
      modeDesc = "Rennen Top 25";
      RaceType = 10;
      setLog([...log, { name: modeDesc }]);
      break;
    case 35:
      modeID = 2118;
      modeDesc = "Rennen Top 35";
      RaceType = 5;
      setLog([...log, { name: modeDesc }]);
      break;
    case 45:
      modeID = 2122;
      modeDesc = "Rennen Top 45";
      RaceType = 6;
      setLog([...log, { name: modeDesc }]);
      break;
    case 15:
      modeID = 2018;
      modeDesc = "Rennen Pro 10";
      RaceType = 7;
      setLog([...log, { name: modeDesc }]);
      break;
    case "p15":
      modeID = 2040;
      modeDesc = "Rennen Pro 15";
      RaceType = 8;
      setLog([...log, { name: modeDesc }]);
      break;
    case "p20":
      modeID = 2040;
      modeDesc = "Rennen Pro 20";
      RaceType = 9;
      setLog([...log, { name: modeDesc }]);
      break;
    case "sp":
      modeID = 2040;
      modeDesc = "Rennen Sonderpreis";
      setLog([...log, { name: modeDesc }]);
      break;
    case "k":
      modeID = 2041;
      modeDesc = "extra Kart";
      setLog([...log, { name: modeDesc }]);
      break;
    default:
      modeID = 2045;
      modeDesc = "Stundenbuchung";
      RaceType = 2;
      setLog([...log, { name: modeDesc }]);
      break;
  }

  const entry = `${modeID};${modeDesc};${RaceType};${date}`;
  for (let i = 0; i < times; i++) {
    rfidData.push(entry);
  }

  setRfidData([...rfidData]);
};

  const saveCard = () => {
    console.log(log);
    axios
      .post("http://localhost:5000/book", {
        data: rfidData,
        cardNumber: rfid,
        log: log,
      })
      .then((response) => {
        setRfid();
        setRfidData([]);
        window.location.reload();
      });
  };

  const deleteTicket = (id, name) => {
    let array = [...rfidData];

    for (let index = 0; index < array.length; index++) {
      if (array[index].includes(id)) {
        array.splice(index, 1);
        break;
      }
    }
    setRfidData(array);
  };

  const fetchData = async () => {
    setLoading(true);
    console.log("fetching data");
    await axios.get("http://localhost:5000/getData").then((response) => {
      setLoading(false);
      setRfid(response.data.RFID);
      setRfidData(response.data.arr);
      console.log(response.data);
    });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {loading && (
        <LoadingContainer>
          <Loader></Loader>
        </LoadingContainer>
      )}
      <CardHeader>
        <CardID>Karte {rfid} aufladen</CardID>
      </CardHeader>
      <Wrapper>
        <CardInfo>
          {rfidData.map((ticket) => (
            <Ticket
              key={Math.random()}
              onClick={() =>
                deleteTicket(
                  ticket.toString().split(";").splice(0, 1),
                  ticket.toString().split(";").slice(1, 2)
                )
              }
              isRace={ticket}
            >
              {ticket.toString().split(";").slice(1, 2)}
              <DateTime>{ticket.toString().split(";").slice(3, 4)}</DateTime>
            </Ticket>
          ))}
        </CardInfo>
        <CardLoader>
          <p>Trainings</p>
          <Button onClick={() => loadCard(10)} training>
            11 Minuten
          </Button>
          <Button onClick={() => loadCard(20)} training>
            22 Minuten
          </Button>
          <Button onClick={() => loadCard(30)} training>
            3er Ticket
          </Button>
          <Button onClick={() => loadCard("np")} training>
            Nice Price (3er-Ticket)
          </Button>
          <Button onClick={() => loadCard("vs")} training>
            Vater / Sohn
          </Button>
          <p>Rennen</p>
          <Button onClick={() => loadCard(25)} rennen>
            Top 25
          </Button>
          <Button onClick={() => loadCard(35)} rennen>
            Top 35
          </Button>
          <Button onClick={() => loadCard(45)} rennen>
            Top 45
          </Button>
          <Button onClick={() => loadCard(15)} rennen>
            Pro 10
          </Button>
          <Button onClick={() => loadCard("p15")} rennen>
            Pro 15
          </Button>
          <Button onClick={() => loadCard("p20")} rennen>
            Pro 20
          </Button>
        </CardLoader>
      </Wrapper>
      <CardFooter>
        <Button delete onClick={() => setRfidData([])}>
          Löschen
        </Button>
        <Button finish onClick={() => saveCard()}>
          ✓ Fertig
        </Button>
      </CardFooter>
    </Container>
  );
}

export default App;
