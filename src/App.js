import { Button, Grid, Paper } from "@material-ui/core";
import "./App.css";
import SubBar from "./components/SubBar";
import UpBar from "./components/UpBar";
import FirstTable from "./components/FirstTable";
import SecondTable from "./components/SecondTable";
import { useState } from "react";
import CustomizedSelects from "./components/CustomizedSelects";
import SearchBar from "./components/SearchBar";
import TextBox from "./components/TextBox";
import ThirdTable from "./components/ThirdTable";
import CandleChart from "./components/candleChart/CandleChart";

function App() {
  const [sell, setSell] = useState(true);

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item sm={5}>
          <Paper style={{ height: "20vh", backgroundColor: "#000" }}>
            <UpBar upBtnContent="Trends" />
            <SubBar numOfPages={2} currentPage={1} />
            <FirstTable />
          </Paper>
        </Grid>
        <Grid item sm={2}>
          <Paper style={{ height: "22vh", backgroundColor: "#323232" }}>
            <UpBar upBtnContent="RFQ" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                color: "white",
              }}
            >
              <div
                style={{
                  width: "100%",
                  borderBottom: sell ? "1px red solid" : " ",
                  cursor: "pointer",
                  fontWeight: sell ? "bold" : "",
                }}
                onClick={() => setSell(true)}
              >
                <p style={{ color: sell ? "red" : "white" }}>Sell</p>
              </div>
              <div
                style={{
                  width: "100%",
                  borderBottom: !sell ? "1px green solid" : " ",
                  cursor: "pointer",
                  fontWeight: !sell ? "bold" : "",
                }}
                onClick={() => setSell(false)}
              >
                <p style={{ color: !sell ? "green" : "white" }}>Buy</p>
              </div>
            </div>
            <CustomizedSelects selects={["Produt"]} w="90%" paddTop="1vmin" />
            <CustomizedSelects selects={["Quantity"]} w="90%" paddTop="1vmin" />
            <Button
              variant="contained"
              style={{
                backgroundColor: "#0197e6",
                width: "50%",
                marginTop: "1.3vmin",
                borderRadius: "0px",
                color: "white",
              }}
            >
              Add
            </Button>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper style={{ height: "22vh", backgroundColor: "#000" }}>
            <UpBar upBtnContent="User Logs" />
            <SubBar numOfPages={2} currentPage={1} />
            <SecondTable />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={2}>
          <Paper
            style={{
              height: "57vh",
              backgroundColor: "#323232",
              padding: "4px",
            }}
          >
            <UpBar upBtnContent="Reaserch" />
            <SearchBar />
            <TextBox />
            <TextBox />
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper style={{ height: "57vh", backgroundColor: "#323232" }} >
            <UpBar upBtnContent="Price Chart"/>
            <SubBar/>
            <CandleChart />
          </Paper>
        </Grid>
        <Grid container item sm={3} style={{ height: "0" }}>
          <Grid item xs={12}>
            <Paper style={{ height: "20vh", backgroundColor: "#323232" }}>
              <UpBar upBtnContent="RFQ" />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <CustomizedSelects
                  selects={["Produt"]}
                  w="50%"
                  paddTop="1vmin"
                />
                <CustomizedSelects selects={["Foc"]} w="50%" paddTop="1vmin" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <CustomizedSelects
                  selects={["Produt"]}
                  w="50%"
                  paddTop="1vmin"
                />
                <CustomizedSelects selects={["Foc"]} w="50%" paddTop="1vmin" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "1vmin",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    width: "35%",
                    textAlign: "left",
                    textTransform: "capitalize",
                    
                  }}
                >
                  Sell <br/> 888,888.8888
                  {/* <div><p style={{display:"block"}}>Sell</p></div>
                  <p style={{display:"block"}}>Sell</p> */}
                </Button>
                <div style={{ width:"27%", height:"2vmin", backgroundColor:"#262626", color: "white", marginTop:"2vmin"}}>
                  -9,698.0
                </div>
                <Button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    width: "35%",
                    textAlign: "left",
                    textTransform: "capitalize",
                  }}
                >
                   Buy <br/> 888,888.8888
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={11} style={{ marginTop: "8px" }}>
            <Paper style={{ height: "15vh", backgroundColor: "#000" }}>
              <UpBar upBtnContent="Open position" />
              <SubBar currentPage={1} numOfPages={2} selects={[50, 100, 250]} />
              <div
                style={{ display: "flex", textAlign: "left", padding: "1vmin" }}
              >
                <p style={{ width: "50%", color: "white" }}>Currency</p>
                <p style={{ width: "50%", color: "white" }}>Balance</p>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Grid item sm={2}>
          <Paper style={{ height: "57vh", backgroundColor: "#323232" }}>
            <UpBar upBtnContent="Reaserch" />
            <SearchBar />
            <TextBox />
            <TextBox />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item style={{ width: "13vw" }}>
          <Paper style={{ height: "9vh", backgroundColor: "#323232" }}>
            <UpBar upBtnContent="Daily" />
            <p style={{ color: "#27ac25", fontSize: "2.2vmin" }}>$1,256,765</p>
          </Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper style={{ height: "16vh", backgroundColor: "#000" }}>
            <UpBar upBtnContent="Trends" />
            <SubBar numOfPages={2} currentPage={1} />
            <ThirdTable />
          </Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper style={{ height: "16vh", backgroundColor: "#000" }}>
            <UpBar upBtnContent="Trends" />
            <SubBar numOfPages={2} currentPage={1} />
            <ThirdTable />
          </Paper>{" "}
        </Grid>
        <Grid item sm={2}>
          <Paper style={{ height: "16vh", backgroundColor: "#000" }}>
            <UpBar upBtnContent="Trends" />
            <SubBar numOfPages={2} currentPage={1} />
            <ThirdTable />
          </Paper>{" "}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
