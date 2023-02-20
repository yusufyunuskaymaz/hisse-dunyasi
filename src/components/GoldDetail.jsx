import { useParams } from "react-router-dom";

function GoldDetail() {
    const {item}=useParams();
    console.log(item);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h3>{item}</h3>
          </div>

          <div className="col-4 stickyDiv"></div>
        </div>
      </div>
    </div>
  );
}
export default GoldDetail;
