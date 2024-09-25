import React, { useState } from "react";
import "./App.css";

function App(): React.JSX.Element {
    const [counter, setCounter] = useState<number>(0);

    function addOne(): void {
        setCounter(counter + 1);
    }

    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }

    type QuestionType = "short_answer_question" | "multiple_choice_question";
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question",
    );

    function changeType(): void {
        setType(
            questionType === "multiple_choice_question" ?
                "short_answer_question"
            :   "multiple_choice_question",
        );
    }

    const [attempts, setAttemps] = useState<number>(4);
    const [inProgess, setProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttemps(attempts - 1);
        setProgress(true);
    }

    function stopQuiz(): void {
        setProgress(false);
    }

    function mulligan(): void {
        setAttemps(attempts + 1);
    }

    const [leftDie, setLeftDie] = useState<number>(3);
    const [rightDie, setRightDie] = useState<number>(4);

    function d6(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    function rollLeft(): void {
        setLeftDie(d6());
    }

    function rollRight(): void {
        setRightDie(d6());
    }

    const [holiday, setHoliday] = useState<string>("Easter");

    function holidayAlphabetical(): void {
        const alphOrder = [
            "🐇Easter",
            "🎆Fourth of July",
            "🎃Halloween",
            "🥂New Year's",
            "🦃Thanksgiving",
        ];
        const index = alphOrder.findIndex((hol) => holiday === hol);
        setHoliday(alphOrder[index !== 4 ? index + 1 : 0]);
    }

    function holidayTimeOfYr(): void {
        const timeOrder = [
            "🥂New Year's",
            "🐇Easter",
            "🎆Fourth of July",
            "🎃Halloween",
            "🦃Thankgiving",
        ];
        const index = timeOrder.findIndex((hol) => holiday === hol);
        setHoliday(timeOrder[index !== 4 ? index + 1 : 0]);
    }

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr />
            <button onClick={addOne}>{counter}</button>
            <hr />
            <button onClick={flipVisibility}>Reveal Answer</button>
            {visible && <div>42</div>}
            <hr />
            <p>
                {questionType === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </p>
            <button onClick={changeType}>Change Type</button>

            <p>Attemps Remaining: {attempts}</p>

            <button onClick={startQuiz} disabled={inProgess || attempts == 0}>
                Start Quiz
            </button>
            <button onClick={stopQuiz} disabled={!inProgess}>
                Stop Quiz
            </button>
            <button onClick={mulligan}>Mulligan</button>

            <p></p>
            <button onClick={rollLeft}>Roll left</button>
            <button onClick={rollRight}>Roll right</button>

            <p>
                {leftDie === rightDie ?
                    leftDie === 1 ?
                        "lose"
                    :   "win"
                :   ""}
            </p>
            <button onClick={holidayAlphabetical}>Advance by Alphabet</button>
            <button onClick={holidayTimeOfYr}>Advance by Year</button>
            <p>Holiday: {holiday[0]}</p>
        </div>
    );
}

export default App;
