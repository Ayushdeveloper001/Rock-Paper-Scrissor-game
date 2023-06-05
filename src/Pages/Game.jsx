import { useNavigate } from "react-router-dom";
import paper from "../Assets/icon-paper.svg";
import rock from "../Assets/icon-rock.svg";
import scissors from "../Assets/icon-scissors.svg";
import { useDispatch } from "react-redux";
import { updateMyChoice } from "../Store/Slice/NameSlice";

const Game = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setMyChoice = (e) => {
    dispatch(updateMyChoice(e.target.id));
    navigate("/result");
  };

  return (
    <section className="game">
      <div className="container">
        <div className="container-game">
          <div
            className="paper"
            id="paper"
            onClick={(e) => {
              setMyChoice(e);
            }}
          >
            <img src={paper} alt="paper" id="paper" />
          </div>
          <div
            className="rock"
            id="rock"
            onClick={(e) => {
              setMyChoice(e);
            }}
          >
            <img src={rock} alt="rock" id="rock" />
          </div>
          <div
            className="scissors"
            id="scissors"
            onClick={(e) => {
              setMyChoice(e);
            }}
          >
            <img src={scissors} alt="scrissor" id="scissors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
