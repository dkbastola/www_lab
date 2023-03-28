import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
// import nodemailer from "nodemailer";
import axios from "axios";
import { app, firestore } from "../../data/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import "./Contact.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },

  grid: {
    padding: "0 50px",
  },
  addressContainer: {
    borderRight: `1px solid ${theme.palette.divider}`,
    // paddingRight: theme.spacing(4),
    // paddingLeft: theme.spacing(4),
    // marginBottom: theme.spacing(4),
  },
  formContainer: {
    paddingLeft: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

function ContactPage() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const data = { name, email, subject, message };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const db = getFirestore(app);
    await addDoc(collection(db, "contacts"), {
      name: name,
      email: email,
      subject: subject,
      message: message,
    })
      .then(() => {
        alert("Message has been submitted! Thank you.");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Grid className={classes.grid} container spacing={2}>
        <Grid item xs={12} md={6} className={classes.addressContainer}>
          <Typography variant="h5" gutterBottom>
            Mailing Address
          </Typography>
          <Typography variant="body1" gutterBottom>
            Peter Kiewit Institute
          </Typography>
          <Typography variant="body1" gutterBottom>
            Room# 173A
          </Typography>
          <Typography variant="body1" gutterBottom>
            1110 So. 67th Street
          </Typography>
          <Typography variant="body1" gutterBottom>
            University of Nebraska at Omaha
          </Typography>
          <Typography variant="body1" gutterBottom>
            Omaha NE 68182
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Voice: (402) 554-4899
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Fax: (402) 554-3284
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Email: dkbastola@unomaha.edu
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.formContainer}>
          <div onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              required
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              required
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              required
              label="Subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              required
              label="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              multiline
              rows={4}
            />
            <Button type="submit" variant="contained" color="primary">
              Send
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactPage;
