import { Button, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import axios from "axios";

const NewStoreForm = (props) => {
  const [isNewAdded, setNewItem] = useState("");
  const itemInput = useRef();
  const descInput = useRef();
  const priceInput = useRef();
  const quantityInput = useRef();

  const itemFormSubmit = (event) => {
    event.preventDefault();

    const dataEntered = {
      item: itemInput.current.value,
      description: descInput.current.value,
      price: priceInput.current.value,
      quantity: quantityInput.current.value,
    };

    if (itemInput.current.value && descInput.current.value) {
      console.log(dataEntered);
      axios
        .post("http://localhost:3030/home/addItem", dataEntered)
        .then((res) => {
          // console.log(res);
          props.fetchItems();
        })
        .catch((err) => console.log(err));
    } else {
      setNewItem("Enter valid inputs");
    }

    setTimeout(() => {
      setNewItem("");
    }, 2000);
  };

  return (
    <div
      style={{
        width: "60%",
        border: "2px solid black",
        borderRadius: "1.5rem",
        background: "white",
      }}
      className="p-5 mx-auto my-5"
    >
      {isNewAdded && (
        <div
          style={{ background: "darkred", color: "white" }}
          className="m-3"
          align="center"
        >
          <p>
            <b>{isNewAdded}</b>
          </p>
        </div>
      )}
      <Form onSubmit={itemFormSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Item</Form.Label>
          <Form.Control type="text" ref={itemInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" ref={descInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" ref={priceInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" ref={quantityInput} />
        </Form.Group>
        <div className="pt-5 mx-auto">
          <Button className="me-1 btn-light btn-outline-dark" type="submit">
            Add Item
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewStoreForm;
