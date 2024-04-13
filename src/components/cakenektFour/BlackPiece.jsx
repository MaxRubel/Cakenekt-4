import blackChip from "../../assets/images/blackChip.png";

// eslint-disable-next-line react/prop-types
export default function BlackPiece({ choosingCol }) {
  let padding;
  switch (choosingCol) {
    case 0:
      padding = "5px";
      break;
    case 1:
      padding = "118px";
      break;
    case 2:
      padding = "225px";
      break;
    case 3:
      padding = "339px";
      break;
    case 4:
      padding = "450px";
      break;
    case 5:
      padding = "560px";
      break;
    case 6:
      padding = "673px";
      break;
  }

  return (
    <div className="piece" style={{ paddingLeft: padding }}>
      <img src={blackChip} />
    </div>
  );
}
