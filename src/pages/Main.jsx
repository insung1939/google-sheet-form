import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Main() {
  const navigate = useNavigate();
  const goForm = () => {
    navigate("/form");
  };
  const goNaverCafe = () => {
    window.open("https://cafe.naver.com/kusitms");
  };
  const goNaverBlog = () => {
    window.open("https://blog.naver.com/kusitms10");
  };
  const goOfficialInstagram = () => {
    window.open("https://www.instagram.com/kusitms_official/");
  };
  const goOfficialIFacebook = () => {
    window.open("https://www.facebook.com/kusitms.page");
  };
  const goLectureInstagram = () => {
    window.open("https://www.instagram.com/kusitms_lecture/");
  };
  const goLectureFacebook = () => {
    window.open("https://www.facebook.com/lecturebykusitms");
  };

  return (
    <div>
      {/* <Button onClick={goForm}>강연회 신청하러 가기</Button> */}
      <Background1 />
      <Background2 onClick={goForm} />
      <Background3 />
      <Background4 />
      <Background5 />
      <Background6 />
      <Background7 onClick={goLectureInstagram} />
      <Background8 />
      <Background9 onClick={goLectureFacebook} />
      <Background10 />
      <Background11 />
      <Background12 />
      <Background13 onClick={goNaverCafe} />
      <Background14 />
      <Background15 onClick={goNaverBlog} />
      <Background16 />
      <Background17 onClick={goOfficialInstagram} />
      <Background18 />
      <Background19 onClick={goOfficialIFacebook} />
      <Background20 />
      <Background21 onClick={goLectureInstagram} />
      <Background22 />
      <Background23 onClick={goLectureFacebook} />
      <Background24 />
      <Background25 />
      <Background26 onClick={goForm} />
      <Background27 />
    </div>
  );
}

const Background = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Background1 = styled(Background)`
  background-image: url(/images/slice_1_cut_url_01.jpg);
  aspect-ratio: 0.30277;
`;

const Background2 = styled(Background)`
  background-image: url(/images/slice_1_cut_url_02.jpg);
  aspect-ratio: 5.47;
`;
const Background3 = styled(Background)`
  background-image: url(/images/slice_1_cut_url_03.jpg);
  aspect-ratio: 0.8518;
`;
const Background4 = styled(Background)`
  background-image: url(/images/slice_1_cut_url_04.jpg);
  aspect-ratio: 0.23;
`;
const Background5 = styled(Background)`
  background-image: url(/images/slice_1_cut_url_05.jpg);
  aspect-ratio: 0.3681;
`;
const Background6 = styled(Background)`
  background-image: url(/images/slice_1_cut_url_06.jpg);
  aspect-ratio: 14.3125;
`;
const Background7 = styled(Background)`
  background-image: url(/images/slice_1_cut_url_07.jpg);
  aspect-ratio: 17.8441;
`;
const Background8 = styled(Background)`
  background-image: url(/images/slice_1_cut_url_08.jpg);
  aspect-ratio: 10.4885;
`;
const Background9 = styled(Background)`
  background-image: url(/images/slice_1_cut_url_09.jpg);
  aspect-ratio: 17.3924;
`;
const Background10 = styled(Background)`
  background-image: url(/images/slice_1_cut_url_10.jpg);
  aspect-ratio: 12.0526;
`;
const Background11 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_11.jpg);
  aspect-ratio: 0.1194;
`;
const Background12 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_12.jpg);
  aspect-ratio: 3.2636;
`;
const Background13 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_13.jpg);
  aspect-ratio: 18.32;
`;
const Background14 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_14.jpg);
  aspect-ratio: 8.32727;
`;
const Background15 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_15.jpg);
  aspect-ratio: 18.32;
`;
const Background16 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_16.jpg);
  aspect-ratio: 8.03508;
`;
const Background17 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_17.jpg);
  aspect-ratio: 18.32;
`;
const Background18 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_18.jpg);
  aspect-ratio: 8.2275;
`;
const Background19 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_19.jpg);
  aspect-ratio: 18.32;
`;
const Background20 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_20.jpg);
  aspect-ratio: 8.32727;
`;
const Background21 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_21.jpg);
  aspect-ratio: 18.32;
`;
const Background22 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_22.jpg);
  aspect-ratio: 8.08235;
`;
const Background23 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_23.jpg);
  aspect-ratio: 18.32;
`;
const Background24 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_24.jpg);
  aspect-ratio: 11.35537;
`;
const Background25 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_25.jpg);
  aspect-ratio: 3.6253;
`;
const Background26 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_26.jpg);
  aspect-ratio: 5.94805;
`;
const Background27 = styled(Background)`
  background-image: url(/images/slice_2_cut_url_27.jpg);
  aspect-ratio: 0.62;
`;
