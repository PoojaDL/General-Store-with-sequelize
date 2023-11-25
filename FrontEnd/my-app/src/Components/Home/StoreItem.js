import { Button, Col, Row } from "react-bootstrap";
import { Fragment } from "react";
import classes from "./StoreItem.module.css";
import axios from "axios";

const StoreItem = (props) => {
  const buyItem = (e) => {
    e.preventDefault();
    const item = { ...props, quantity: props.quantity - +e.target.value };
    if (e.target.value < props.quantity) {
      axios
        .put(`http://localhost:3030/home/updateItem/${props.id}`, item)
        .then((res) => {
          //   console.log(res);
          props.fetchItems();
        })
        .catch((err) => console.log(err));
    } else if (e.target.value == props.quantity) {
      axios(`http://localhost:3030/home/deleteItem/${props.id}`)
        .then((res) => {
          //   console.log(res);
          props.fetchItems();
          alert("Removing the Item");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Choose available quantity");
    }
  };

  return (
    <Fragment>
      <Row className={classes.items}>
        <Col sm={7}>
          <Row>
            <Col xm={6} className={`d-block ${classes.price}`}>
              <h2 className="py-3">₹{props.price}</h2>
            </Col>
            <Col xm={6} className="py-2">
              <p className={classes.description}>{props.item}</p>
              <p className="p-0 m-0">{props.description}</p>
            </Col>
            <Col xm={6} className={`d-block ${classes.quantity}`}>
              <h2 className="p-3 mx-2">{props.quantity}</h2>
            </Col>
          </Row>
        </Col>
        <Col sm={5} className="py-3">
          <Button className="btn-sm btn-light me-3" value="1" onClick={buyItem}>
            Buy1
          </Button>
          <Button className="btn-sm btn-light me-3" value="2" onClick={buyItem}>
            Buy2
          </Button>
          <Button className="btn-sm btn-light" value="3" onClick={buyItem}>
            Buy3
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default StoreItem;
