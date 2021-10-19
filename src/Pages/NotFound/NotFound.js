import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import "./NotFound.css";
import notFound from '../../images/notfound/notfound.jpg';
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  const handleBack = () => {
    history.push("./home");
  };
  return (
    <Container className="my-5">
      <Image src={notFound}></Image>
      <br />
      <Button onClick={handleBack} variant="primary">
        Go Home
      </Button>{" "}
    </Container>
  );
};

export default NotFound;
