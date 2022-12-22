import { useNavigate } from "react-router-dom";
import { Button } from "../styles/common";

export default function Main() {
  const navigate = useNavigate();
  const goForm = () => {
    navigate("/form");
  };
  return (
    <div>
      <Button onClick={goForm}>강연회 신청하러 가기</Button>
    </div>
  );
}
