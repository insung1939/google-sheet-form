import styled from "styled-components";
import Logo from "../Icon/Logo";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isChecked, setIsChecked] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const onSubmit = (data) => {
    if (!isChecked) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
      console.log(data);
    }
  };

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
          <CheckedLabel>
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={(e) => handleCheckbox(e)}
            />
            <CheckText>개인정보 수집 • 이용 동의</CheckText>
          </CheckedLabel>
          {showWarning && (
            <ErrorText>개인정보 수집 • 이용 동의를 체크해주세요.</ErrorText>
          )}

          <NumberOl>
            <Li>
              본인은 한국대학생IT경영학회(KUSITMS)의 [강연회 참석자 모집]과
              관련하여 다음 각 호의 정보를 수집 및 이용하는 것에 동의합니다.
              <br />
              가. 수집 • 이용 목적
              <CustomOl>
                <Li>강연회 참석자 모집</Li>
              </CustomOl>
              나. 수집하는 개인정보의 항목
              <CustomOl>
                <Li>
                  신청자 : 성명, 성별, 생년월일, 전화번호, 소속대학, 전공 등
                </Li>
              </CustomOl>
            </Li>
            <Li>
              본인은 동의서가 작성된 때로부터 1항의 사용 목적이 종료되는
              때(일주일)까지 한국대학생IT경영학회(KUSITMS) 26기 강연회 TF팀이
              본인의 개인정보를 보유하는 것에 동의합니다.
            </Li>
            <Li>
              본인은 상기 개인정보의 수집에 대하여 거부할 권리를 보유하고
              있으며, 동의를 거부하면 명단에서 제외될 수 있다는 사실을 인지한
              상태에서 작성된 것임을 확인합니다.
            </Li>
          </NumberOl>
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
  text-align: center;
  margin-top: 63px;
`;

const InputWrapper = styled.div`
  display: flex;
  text-align: left;
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
  margin-top: 81px;
`;

const CheckedLabel = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  margin-top: 81px;
  gap: 10px;
`;

const CheckBox = styled.input`
  appearance: none;
  margin: 0;
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.66667 24C1.93333 24 1.30533 23.7391 0.782667 23.2173C0.260889 22.6947 0 22.0667 0 21.3333V2.66667C0 1.93333 0.260889 1.30533 0.782667 0.782667C1.30533 0.260889 1.93333 0 2.66667 0H21.3333C22.0667 0 22.6947 0.260889 23.2173 0.782667C23.7391 1.30533 24 1.93333 24 2.66667V21.3333C24 22.0667 23.7391 22.6947 23.2173 23.2173C22.6947 23.7391 22.0667 24 21.3333 24H2.66667ZM10.1333 17.0333C10.3111 17.0333 10.4778 17.0058 10.6333 16.9507C10.7889 16.8947 10.9333 16.8 11.0667 16.6667L18.6333 9.1C18.8778 8.85556 19 8.55556 19 8.2C19 7.84444 18.8667 7.53333 18.6 7.26667C18.3556 7.02222 18.0444 6.9 17.6667 6.9C17.2889 6.9 16.9778 7.02222 16.7333 7.26667L10.1333 13.8667L7.23333 10.9667C6.98889 10.7222 6.68889 10.6 6.33333 10.6C5.97778 10.6 5.66667 10.7333 5.4 11C5.15556 11.2444 5.03333 11.5556 5.03333 11.9333C5.03333 12.3111 5.15556 12.6222 5.4 12.8667L9.2 16.6667C9.33333 16.8 9.47778 16.8947 9.63333 16.9507C9.78889 17.0058 9.95556 17.0333 10.1333 17.0333V17.0333Z' fill='white'/%3E%3C/svg%3E%0A");
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  :checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.66667 24C1.93333 24 1.30533 23.7391 0.782667 23.2173C0.260889 22.6947 0 22.0667 0 21.3333V2.66667C0 1.93333 0.260889 1.30533 0.782667 0.782667C1.30533 0.260889 1.93333 0 2.66667 0H21.3333C22.0667 0 22.6947 0.260889 23.2173 0.782667C23.7391 1.30533 24 1.93333 24 2.66667V21.3333C24 22.0667 23.7391 22.6947 23.2173 23.2173C22.6947 23.7391 22.0667 24 21.3333 24H2.66667ZM10.1333 17.0333C10.3111 17.0333 10.4778 17.0058 10.6333 16.9507C10.7889 16.8947 10.9333 16.8 11.0667 16.6667L18.6333 9.1C18.8778 8.85556 19 8.55556 19 8.2C19 7.84444 18.8667 7.53333 18.6 7.26667C18.3556 7.02222 18.0444 6.9 17.6667 6.9C17.2889 6.9 16.9778 7.02222 16.7333 7.26667L10.1333 13.8667L7.23333 10.9667C6.98889 10.7222 6.68889 10.6 6.33333 10.6C5.97778 10.6 5.66667 10.7333 5.4 11C5.15556 11.2444 5.03333 11.5556 5.03333 11.9333C5.03333 12.3111 5.15556 12.6222 5.4 12.8667L9.2 16.6667C9.33333 16.8 9.47778 16.8947 9.63333 16.9507C9.78889 17.0058 9.95556 17.0333 10.1333 17.0333Z' fill='%23D70051'/%3E%3C/svg%3E%0A");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

const CheckText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 180%;
  color: white;
`;

const NumberOl = styled.ol`
  padding-left: 15px;
`;

const Li = styled.li`
  text-align: left;
  font-weight: 500;
  font-size: 13px;
  line-height: 180%;
  color: rgba(255, 255, 255, 0.79);
  word-break: keep-all;
`;

const CustomOl = styled(NumberOl)`
  padding-left: 30px;
`;
