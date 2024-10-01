import React, { useState } from "react";
//import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [theColor, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color) => (
                <label
                    key={color}
                    style={{ backgroundColor: color, color: "black" }}
                >
                    <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={theColor === color}
                        onChange={(event) => {
                            setColor(event.target.value);
                        }}
                    />
                    {color}
                </label>
            ))}
            <div>
                <span>You have chosen: </span>
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: theColor,
                        color: "black",
                    }}
                >
                    {theColor}
                </span>
            </div>
        </div>
    );
}
