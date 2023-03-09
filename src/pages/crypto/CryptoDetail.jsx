import { useLocation } from "react-router-dom";
import CurrencyComment from "../../components/comment/CurrencyComment";
import StickySidebar from "../../components/stock/StickySidebar";
import { useFetch } from "../../utils/function";

function CryptoDetail() {
  const {commentList } = useFetch();

  const { state } = useLocation();
  let itemCode = state.id;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h3>{state.id}</h3>
          <CurrencyComment itemCode={itemCode} commentList={commentList} />
          </div>

          <div className="col-lg-4">
            <StickySidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CryptoDetail;
