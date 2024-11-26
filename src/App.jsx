import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increament, increamentByAmount, reset } from './Redux/counterSlice';
import { Col, Row, Container } from 'react-bootstrap';

function App() {
  const [amount, setAmount] = useState(0);
  const { count } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const handleIncrementByAmount = () => {
    if (amount) {
      dispatch(increamentByAmount(Number(amount)));
    } else {
      alert('Enter a number');
    }
  };

  return (
    <>
      <Container className="text-light text-center mt-5">
        <h1 className="mb-4">Counter App</h1>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} className="border border-info p-4">
            <h1 className="fs-1">{count}</h1>
            <Row className="mt-4">
              <Col className="d-flex justify-content-between">
                <Button onClick={() => dispatch(increament())} variant="outline-warning">
                  Increment
                </Button>
                <Button onClick={() => dispatch(reset())} variant="outline-danger">
                  Reset
                </Button>
                <Button onClick={() => dispatch(decrement())} variant="outline-success">
                  Decrement
                </Button>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="d-flex justify-content-center">
                <Form.Control
                  type="number"
                  onChange={(e) => setAmount(e.target.value)}
                  className="me-2"
                  placeholder="Increment by amount"
                />
                <Button onClick={handleIncrementByAmount} variant="primary">
                  Increment by Amount
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
