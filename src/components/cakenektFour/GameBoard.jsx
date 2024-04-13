import BlackPiece from "./BlackPiece";
import RedPiece from "./RedPiece";

// eslint-disable-next-line react/prop-types
export default function GameBoard({ gameBoard }) {
  return (
    <>
      <div id="col0" className="column">
        <div className="spot00">
          {gameBoard[0][0] === "black" && <BlackPiece />}
          {gameBoard[0][0] === "red" && <RedPiece />}
        </div>
        <div className="spot01">
          {gameBoard[0][1] === "black" && <BlackPiece />}
          {gameBoard[0][1] === "red" && <RedPiece />}
        </div>
        <div className="spot02">
          {gameBoard[0][2] === "black" && <BlackPiece />}
          {gameBoard[0][2] === "red" && <RedPiece />}
        </div>
        <div className="spot03">
          {gameBoard[0][3] === "black" && <BlackPiece />}
          {gameBoard[0][3] === "red" && <RedPiece />}
        </div>
        <div className="spot04">
          {gameBoard[0][4] === "black" && <BlackPiece />}
          {gameBoard[0][4] === "red" && <RedPiece />}
        </div>
        <div className="spot05">
          {gameBoard[0][5] === "black" && <BlackPiece />}
          {gameBoard[0][5] === "red" && <RedPiece />}
        </div>
      </div>
      <div id="col1" className="column">
        <div className="spot10">
          {gameBoard[1][0] === "black" && <BlackPiece />}
          {gameBoard[1][0] === "red" && <RedPiece />}
        </div>
        <div className="spot11">
          {gameBoard[1][1] === "black" && <BlackPiece />}
          {gameBoard[1][1] === "red" && <RedPiece />}
        </div>
        <div className="spot12">
          {gameBoard[1][2] === "black" && <BlackPiece />}
          {gameBoard[1][2] === "red" && <RedPiece />}
        </div>
        <div className="spot13">
          {gameBoard[1][3] === "black" && <BlackPiece />}
          {gameBoard[1][3] === "red" && <RedPiece />}
        </div>
        <div className="spot14">
          {gameBoard[1][4] === "black" && <BlackPiece />}
          {gameBoard[1][4] === "red" && <RedPiece />}
        </div>
        <div className="spot15">
          {gameBoard[1][5] === "black" && <BlackPiece />}
          {gameBoard[1][5] === "red" && <RedPiece />}
        </div>
      </div>
      <div id="col2" className="column">
        <div className="spot20">
          {gameBoard[2][0] === "black" && <BlackPiece />}
          {gameBoard[2][0] === "red" && <RedPiece />}
        </div>
        <div className="spot21">
          {gameBoard[2][1] === "black" && <BlackPiece />}
          {gameBoard[2][1] === "red" && <RedPiece />}
        </div>
        <div className="spot22">
          {gameBoard[2][2] === "black" && <BlackPiece />}
          {gameBoard[2][2] === "red" && <RedPiece />}
        </div>
        <div className="spot23">
          {gameBoard[2][3] === "black" && <BlackPiece />}
          {gameBoard[2][3] === "red" && <RedPiece />}
        </div>
        <div className="spot24">
          {gameBoard[2][4] === "black" && <BlackPiece />}
          {gameBoard[2][4] === "red" && <RedPiece />}
        </div>
        <div className="spot25">
          {gameBoard[2][5] === "black" && <BlackPiece />}
          {gameBoard[2][5] === "red" && <RedPiece />}
        </div>
      </div>
      <div id="col3" className="column">
        <div className="spot30">
          {gameBoard[3][0] === "black" && <BlackPiece />}
          {gameBoard[3][0] === "red" && <RedPiece />}
        </div>
        <div className="spot31">
          {gameBoard[3][1] === "black" && <BlackPiece />}
          {gameBoard[3][1] === "red" && <RedPiece />}
        </div>
        <div className="spot32">
          {gameBoard[3][2] === "black" && <BlackPiece />}
          {gameBoard[3][2] === "red" && <RedPiece />}
        </div>
        <div className="spot33">
          {gameBoard[3][3] === "black" && <BlackPiece />}
          {gameBoard[3][3] === "red" && <RedPiece />}
        </div>
        <div className="spot34">
          {gameBoard[3][4] === "black" && <BlackPiece />}
          {gameBoard[3][4] === "red" && <RedPiece />}
        </div>
        <div className="spot35">
          {gameBoard[3][5] === "black" && <BlackPiece />}
          {gameBoard[3][5] === "red" && <RedPiece />}
        </div>
      </div>
      <div id="col4" className="column">
        <div className="spot40">
          {gameBoard[4][0] === "black" && <BlackPiece />}
          {gameBoard[4][0] === "red" && <RedPiece />}
        </div>
        <div className="spot41">
          {gameBoard[4][1] === "black" && <BlackPiece />}
          {gameBoard[4][1] === "red" && <RedPiece />}
        </div>
        <div className="spot42">
          {gameBoard[4][2] === "black" && <BlackPiece />}
          {gameBoard[4][2] === "red" && <RedPiece />}
        </div>
        <div className="spot43">
          {gameBoard[4][3] === "black" && <BlackPiece />}
          {gameBoard[4][3] === "red" && <RedPiece />}
        </div>
        <div className="spot44">
          {gameBoard[4][4] === "black" && <BlackPiece />}
          {gameBoard[4][4] === "red" && <RedPiece />}
        </div>
        <div className="spot45">
          {gameBoard[4][5] === "black" && <BlackPiece />}
          {gameBoard[4][5] === "red" && <RedPiece />}
        </div>
      </div>
      <div id="col5" className="column">
        <div className="spot50">
          {gameBoard[5][0] === "black" && <BlackPiece />}
          {gameBoard[5][0] === "red" && <RedPiece />}
        </div>
        <div className="spot51">
          {gameBoard[5][1] === "black" && <BlackPiece />}
          {gameBoard[5][1] === "red" && <RedPiece />}
        </div>
        <div className="spot52">
          {gameBoard[5][2] === "black" && <BlackPiece />}
          {gameBoard[5][2] === "red" && <RedPiece />}
        </div>
        <div className="spot53">
          {gameBoard[5][3] === "black" && <BlackPiece />}
          {gameBoard[5][3] === "red" && <RedPiece />}
        </div>
        <div className="spot54">
          {gameBoard[5][4] === "black" && <BlackPiece />}
          {gameBoard[5][4] === "red" && <RedPiece />}
        </div>
        <div className="spot55">
          {gameBoard[5][5] === "black" && <BlackPiece />}
          {gameBoard[5][5] === "red" && <RedPiece />}
        </div>
      </div>
      <div id="col5" className="column">
        <div className="spot60">
          {gameBoard[6][0] === "black" && <BlackPiece />}
          {gameBoard[6][0] === "red" && <RedPiece />}
        </div>
        <div className="spot61">
          {gameBoard[6][1] === "black" && <BlackPiece />}
          {gameBoard[6][1] === "red" && <RedPiece />}
        </div>
        <div className="spot62">
          {gameBoard[6][2] === "black" && <BlackPiece />}
          {gameBoard[6][2] === "red" && <RedPiece />}
        </div>
        <div className="spot63">
          {gameBoard[6][3] === "black" && <BlackPiece />}
          {gameBoard[6][3] === "red" && <RedPiece />}
        </div>
        <div className="spot64">
          {gameBoard[6][4] === "black" && <BlackPiece />}
          {gameBoard[6][4] === "red" && <RedPiece />}
        </div>
        <div className="spot65">
          {gameBoard[6][5] === "black" && <BlackPiece />}
          {gameBoard[6][5] === "red" && <RedPiece />}
        </div>
      </div>
    </>
  );
}
