import React from "react";
import "./Profile.css";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Routes, Route, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { useRef } from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { display } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { LoginContext } from "../../Context/LoginContext";

const Account = () => {
  //const firstNameRef = useRef(null);

  const { profileData, setProfile } = useContext(LoginContext);
  const [name, setName] = useState(profileData.name);
  const [email, setEmail] = useState(profileData.email);
  const [phone, setPhone] = useState(+profileData.phone);
  const [password, setPassword] = useState(profileData.password);
  const [addr, setAddr] = useState(profileData.addr);

  const [visible, setVisiblity] = useState(false);
  const [passval, setPassVal] = useState("password");
  const style = { bgcolor: "black" };
  let navigate = useNavigate();
  const handleSubmit = async () => {
    const updatedProfile = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      addr: addr,
    };
    const url = `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/profile/update`;
    try {
      await axios.post(url, updatedProfile);
    } catch (e) {
      console.log(e);
    }
  };
  const routeChange = () => {
    let path = `/profile/cart/ac`;
    navigate(path);
  };
  return (
    <Container fixed sx={{ bgcolor: "grey" }}>
      <div>
        <h1>Account</h1>
      </div>
      <div>
        <Accordion sx={style}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Personal Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper} sx={{ m: "auto", width: "60%" }}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ width: "20%", height: "50px" }}
                    >
                      <Typography color="blue">Name</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        id="name"
                        value={name}
                        variant="outlined"
                        required
                        sx={{ width: "100%" }}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={{ width: "25%" }}>
                      <Typography color="blue">Phone Number</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        id="phone"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={phone}
                        sx={{ width: "100%" }}
                        onChange={(e) => {
                          setPhone(+e.target.value);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={{ width: "20%" }}>
                      <Typography color="blue">Email</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        variant="outlined"
                        id="email"
                        value={email}
                        sx={{ width: "100%" }}
                        //onChange={(e) => {setEmail(e.target.value);}}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ width: "auto" }}
                    >
                      <Typography color="blue">Password</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <TextField
                          id="password"
                          type={passval}
                          variant="outlined"
                          sx={{ width: "100%", ml: "0" }}
                        />
                        <IconButton
                          onClick={() => {
                            if (passval == "password") {
                              setPassVal("");
                              setVisiblity(!visible);
                            } else {
                              setPassVal("password");
                              setVisiblity(!visible);
                            }
                          }}
                        >
                          {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={{ width: "20%" }}>
                      <Typography color="blue">Address</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <TextField
                                id="address"
                                variant="standard"
                                label="Line 1"
                                sx={{ width: "100%" }}
                                value={addr[0]}
                                onChange={(e) => {
                                  var A = addr;
                                  A[0] = e.target.value;
                                  setAddr(A);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <TextField
                                label="Line 2"
                                variant="standard"
                                sx={{ width: "100%" }}
                                value={addr[1]}
                                onChange={(e) => {
                                  const A = addr;
                                  A[1] = e.target.value;
                                  setAddr(A);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <TextField
                                label="City"
                                variant="standard"
                                sx={{ width: "100%" }}
                                value={addr[2]}
                                onChange={(e) => {
                                  const A = addr;
                                  A[2] = e.target.value;
                                  setAddr(A);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <TextField
                                label="State"
                                variant="standard"
                                sx={{ width: "100%" }}
                                value={addr[3]}
                                onChange={(e) => {
                                  const A = addr;
                                  A[3] = e.target.value;
                                  setAddr(A);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <TextField
                                label="Country"
                                variant="standard"
                                value={addr[4]}
                                onChange={(e) => {
                                  const A = addr;
                                  A[4] = e.target.value;
                                  setAddr(A);
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: "20%", alignItems: "center" }}>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={style}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Friends</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Friend List</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={style}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            onClick={() => {
              routeChange();
            }}
          >
            <Typography>Cart</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion sx={style}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            onClick={() => {
              routeChange();
            }}
          >
            <Typography>Library</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion sx={style}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Setting</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Friend List</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
};
export default Account;
