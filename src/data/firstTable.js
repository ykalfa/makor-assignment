import React from "react"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {getDate} from '../util';


const data = [
  {
    date: getDate(),
    side:"BUY",
    product:"BTC-USD",
    quatity:"0.013",
    price:"1320000",
    counterParly:"I trust dba",
    providerPrice:"0.016",
    salespl:"0.650",
    type:"client",
    execution:"Rest API",
    status: <FiberManualRecordIcon style={{ fontSize: "1vh", color: "#27ac25" }} />,
    id: 1
  },
  {
    date: getDate(),
    side:"BUY",
    product:"BTC-USD",
    quatity:"0.013",
    price:"1320000",
    counterParly:"I trust dba",
    providerPrice:"0.016",
    salespl:"0.650",
    type:"client",
    execution:"Rest API",
    status: <FiberManualRecordIcon style={{ fontSize: "1vh", color: "#27ac25" }} />,
    id: 2
  },
  {
    date: getDate(),
    side:"BUY",
    product:"BTC-USD",
    quatity:"0.013",
    price:"1320000",
    counterParly:"I trust dba",
    providerPrice:"0.016",
    salespl:"0.650",
    type:"client",
    execution:"Rest API",
    status: <FiberManualRecordIcon style={{ fontSize: "1vh", color: "#27ac25" }} />,
    id: 3
  },
  {
    date: getDate(),
    side:"SELL",
    product:"BTC-USD",
    quatity:"0.013",
    price:"1320000",
    counterParly:"I trust dba",
    providerPrice:"0.016",
    salespl:"0.650",
    type:"client",
    execution:"Rest API",
    status: <FiberManualRecordIcon style={{ fontSize: "1vh", color: "#27ac25" }} />,
    id: 4
  },
  {
    date: getDate(),
    side:"SELL",
    product:"BTC-USD",
    quatity:"0.013",
    price:"1320000",
    counterParly:"I trust dba",
    providerPrice:"0.016",
    salespl:"0.650",
    type:"client",
    execution:"Rest API",
    status: <FiberManualRecordIcon style={{ fontSize: "1vh", color: "#27ac25" }} />,
    id: 5
  },
  {
    date: getDate(),
    side:"SELL",
    product:"BTC-USD",
    quatity:"0.013",
    price:"1320000",
    counterParly:"I trust dba",
    providerPrice:"0.016",
    salespl:"0.650",
    type:"client",
    execution:"Rest API",
    status: <FiberManualRecordIcon style={{ fontSize: "1vh", color: "#27ac25" }} />,
    id: 6
  },
];

export default data;