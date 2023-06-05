import { useNavigate } from "react-router-dom";
import paper from "../Assets/icon-paper.svg";
import rock from "../Assets/icon-rock.svg";
import scissors from "../Assets/icon-scissors.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateScore } from "../Store/Slice/NameSlice";

const Result = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const score = useSelector((state) => state.name.score);
  const myChoice = useSelector((state) => state.name.myChoice);

  const [computerChoice, setComputerChoice] = useState("");
  // let [totalScore, setTotalScore] = useState(0);
  const [win, setWin] = useState("");

  const result = () => {
    if (myChoice === "rock" && computerChoice === "scissors") {
      setWin("user");
    } else if (myChoice === "rock" && computerChoice === "paper") {
      setWin("computer");
    } else if (myChoice === "scissors" && computerChoice === "paper") {
      setWin("user");
    } else if (myChoice === "scissors" && computerChoice === "rock") {
      setWin("computer");
    } else if (myChoice === "paper" && computerChoice === "rock") {
      setWin("user");
    } else if (myChoice === "paper" && computerChoice === "scissors") {
      setWin("computer");
    } else {
      setWin("draw");
      return;
    }
  };

  const getComputerChoice = () => {
    const arr = ["paper", "rock", "scissors"];
    setComputerChoice(arr[Math.floor(Math.random() * 3)]);
    result();
    // if (win === "user") {
    //   // setTotalScore(score + 1);
    //   dispatch(updateScore(score));
    // } else if (win === "computer") {
    //   dispatch(updateScore(score));
    //   // setTotalScore(totalScore - 1);
    // }
  };

  useEffect(() => {
    getComputerChoice();
  }, [computerChoice]);

  return (
    <section className="result">
      <div className="container">
        <div className="score">
          {win === "draw" ? <h3>Match Draw!!!</h3> : <h3>{win} Win!!!</h3>}
          {/* <h3>Computer Win</h3> */}
          {/* <div>
            <h1>{score}</h1>
            <h2>Score</h2>
          </div> */}
        </div>
        <div className="box">
          <div className={win === "user" ? "user win" : "user"}>
            {myChoice === "rock" && (
              <div className="rock">
                <img src={rock} />
              </div>
            )}
            {myChoice === "paper" && (
              <div className="paper">
                <img src={paper} />
              </div>
            )}
            {myChoice === "scissors" && (
              <div className="scissors">
                <img src={scissors} />
              </div>
            )}
          </div>
          <h1>VS</h1>
          <div className={win === "computer" ? "computer win" : "computer"}>
            {computerChoice === "rock" && (
              <div className="rock">
                <img src={rock} />
              </div>
            )}
            {computerChoice === "paper" && (
              <div className="paper">
                <img src={paper} />
              </div>
            )}
            {computerChoice === "scissors" && (
              <div className="scissors">
                <img src={scissors} />
              </div>
            )}
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/game");
          }}
        >
          Play Again
        </button>
      </div>
    </section>
  );
};

export default Result;
