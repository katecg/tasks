import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    function useAttempt() {
        attemptsLeft > 0 ? setAttemptsLeft(attemptsLeft - 1) : null;
    }

    function addGain() {
        !isNaN(parseInt(attemptsRequested)) ?
            setAttemptsLeft(attemptsLeft + parseInt(attemptsRequested))
        :   null;
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Number of attemps left: {attemptsLeft}</div>
            <Form.Group controlId="formAttempt">
                <Form.Label>Request more attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(attemps) => {
                        setAttemptsRequested(attemps.target.value);
                    }}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attemptsLeft === 0}>
                Use
            </Button>
            <Button onClick={addGain}>Gain</Button>
        </div>
    );
}
