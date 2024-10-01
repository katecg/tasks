import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={givenAnswer}
                    onChange={(answer: React.ChangeEvent<HTMLInputElement>) => {
                        setGivenAnswer(answer.target.value);
                    }}
                />
            </Form.Group>
            <div>{givenAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
