import styled from "styled-components";

export default function Completed() {
  return <CompletedPage />;
}

const CompletedPage = styled.div`
  width: 100%;
  background-image: url(/images/completed.png);
  aspect-ratio: 0.36;
  background-repeat: no-repeat;
  background-size: contain;
`;
