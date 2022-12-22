import styled from "styled-components";
import Logo from "../Icon/Logo";
import { useForm } from "react-hook-form";
import { Button } from "../styles/common";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Layout>
      <Header>
        <Logo />
        <SmallTypography>우리의 이야기를, 지금부터 플레이</SmallTypography>
      </Header>
      <Main>
        <DateTypography>2023년 1월 14일 토요일 추천</DateTypography>
        <Title>당신을 위한 KUSITMS</Title>
        <Info>
          IT에 관심있는 당신을 위한 최적의 플레이리스트, PLAY:IT에 신청하여
          유익한 시간을 무료로 경험해보세요.
        </Info>
        <Info>
          네 분의 연사님 이야기가 담긴 토요일의 강연회를 감상하며 다양한 혜택을
          즐길 수 있습니다. 아래 안내에 따라 정보를 입력하여 신청을
          완료해보세요.{" "}
        </Info>
        <FormLayout onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Label>성명</Label>
            <Input
              {...register("name", { required: true })}
              placeholder="당신의 이름은 무엇인가요?"
            />
            {errors.name && <ErrorText>입력을 완료해주세요.</ErrorText>}
          </InputWrapper>
          <InputWrapper>
            <Label>성별</Label>
            <Input
              {...register("gender", { required: true })}
              placeholder="남/여"
            />
            {errors.gender && <ErrorText>입력을 완료해주세요.</ErrorText>}
          </InputWrapper>
          <InputWrapper>
            <Label>생년월일</Label>
            <Input
              {...register("birth", { required: true })}
              placeholder="YYYY/MM/KK"
            />
            {errors.birth && <ErrorText>입력을 완료해주세요.</ErrorText>}
          </InputWrapper>
          <InputWrapper>
            <Label>전화번호</Label>
            <Input
              {...register("hp", { required: true })}
              placeholder="000-0000-0000"
            />
            {errors.hp && <ErrorText>입력을 완료해주세요.</ErrorText>}
          </InputWrapper>
          <InputWrapper>
            <Label>E-mail</Label>
            <Input
              {...register("email", { required: true })}
              placeholder="example@kusitms.com"
            />
            {errors.email && <ErrorText>입력을 완료해주세요.</ErrorText>}
          </InputWrapper>
          <InputWrapper>
            <Label>소속 대학 / 전공 / 재학 여부</Label>
            <Input
              {...register("group", { required: true })}
              placeholder="큐시즘대학/큐시즘전공/재학"
            />
            {errors.group && <ErrorText>입력을 완료해주세요.</ErrorText>}
          </InputWrapper>
          <Submit type="submit" value="완료하기" />
        </FormLayout>
      </Main>
    </Layout>
  );
}

const Layout = styled.div`
  background: linear-gradient(
      180deg,
      #0e1634 0%,
      rgba(14, 22, 52, 0) 77.08%,
      rgba(14, 22, 52, 0.37) 100%
    ),
    linear-gradient(180deg, #0e1634 0%, #871e57 61.46%, #2b1734 91.15%);
`;

const Main = styled.div`
  padding: 0 58px 94px;
`;

const Header = styled.div`
  background: rgba(0, 0, 0, 0.26);
  height: fit-content;
  display: flex;
  gap: 11px;
  padding: 55px 58px 10px;
`;

const SmallTypography = styled.p`
  font-size: 11px;
  color: white;
`;

const DateTypography = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 180%;
  margin-top: 45px;
  color: rgba(255, 255, 255, 0.79);
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 180%;
  color: white;
  margin-bottom: 14px;
`;

const Info = styled.p`
  word-break: keep-all;
  font-weight: 500;
  font-size: 17px;
  line-height: 180%;
  margin-bottom: 35px;
  color: white;
`;

const FormLayout = styled.form`
  margin-top: 63px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 44px;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;
  color: white;
`;

const Input = styled.input`
  outline: none;
  border: none;
  height: 38px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding-left: 12px;
  background: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 180%;
  color: white;
  &::placeholder {
    font-weight: 500;
    font-size: 20px;
    line-height: 180%;
    opacity: 0.3;
  }
  &:focus {
    border-bottom: 1px solid white;
  }
`;

const ErrorText = styled.span`
  font-weight: 600;
  font-size: 13px;
  line-height: 180%;
  color: #d70051;
  padding-left: 12px;
`;

const Submit = styled.input`
  height: 53px;
  border-radius: 26.5px;
  background-color: #d70051;
  color: white;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  padding: 10px 0;
  width: 275px;
  border: none;
`;
