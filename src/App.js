/** @format */
import React from 'react';
import styled from 'styled-components';
import Typography from './components/Typography';
import screenPicture from './assets/images/screen_picture.png';
import star from './assets/images/star.png';
import halfstar from './assets/images/halfstar.png';
import arrowDown from './assets/images/arrowDown.png';
import arrowUp from './assets/images/arrowUp.png';
import amazon from './assets/images/amazon.png';
import amazon2 from './assets/images/amazon2.png';

const SPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  flex-direction: column;
  margin: 38px auto;
`;
const SCard = styled.div`
  display: flex;
  height: ${(props) => (props.detailed ? '403px' : '176px')};
  width: ${(props) => (props.detailed ? '1022px' : '1024px')};
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: rgba(199, 199, 199, 0.0352);
  margin-bottom: 24px;

  @media screen and (max-width: 1024px) {
    height: 132px;
    width: 672px;
  }

  @media only screen and (max-width: 680px) {
    width: 340px;
    height: 375px;
  }
`;
const ScardContainer = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    width: 672px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 680px) {
    display: none;
  }
`;
const SCard3 = styled.div`
  margin-top: 24px;
  width: 216px;
  height: 384px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: rgba(199, 199, 199, 0.0352);
`;
const SRelatedTextBox = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    margin-top: 24px;
    width: 329px;
    height: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #55626e;
    margin-right: 337px;
  }
  @media screen and (max-width: 680px) {
    display: none;
  }
`;

const SCard2 = styled.div`
  display: flex;
  height: ${(props) => (props.detailed ? '403px' : '176px')};
  width: ${(props) => (props.detailed ? '1022px' : '1024px')};
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: rgba(199, 199, 199, 0.0352);
  margin-top: 24px;

  @media screen and (max-width: 1024px) {
    height: 340px;
    width: 672px;
  }

  @media only screen and (max-width: 680px) {
    width: 340px;
    height: 828px;
  }
`;

const SNumTextBox = styled.div`
  height: 108px;
  width: 95px;
  margin-top: 34px;
  margin-left: 12px;
  font-weight: 700;
  font-size: 80px;
  color: rgba(85, 98, 110, 0.25);
  text-transform: capitalize;
  line-height: 108px;
  text-transform: capitalize;

  @media screen and (max-width: 1024px) {
    height: 68px;
    width: 59px;
    position: absolute;
    margin-left: 589px;
    margin-top: -30px;
    font-size: 50px;
    font-weight: 700;
    line-height: 68px;
    letter-spacing: 0px;
    text-align: left;
  }

  @media only screen and (max-width: 680px) {
    position: absolute;
    width: 76px;
    height: 77px;
    margin-left: 245px;
    margin-top: -38px;
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
    text-transform: capitalize;
    color: rgba(85, 98, 110, 0.25);
  }
`;
const SImg = styled.img`
  height: 128px;
  width: 202px;
  left: 579px;
  top: 41px;
  border-radius: 0px;
  margin: 16px 24px 32px;

  @media screen and (max-width: 1024px) {
    height: 75px;
    width: 118px;
    margin-left: 15px;
    margin-top: 19px;
    border-radius: 0px;
  }
  @media screen and (max-width: 680px) {
    box-sizing: border-box;
    width: 160px;
    height: 101px;
    margin-top: 42px;
    margin-left: 90.68px;
  }
`;

const SMiddleSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const SRateWrapper = styled.div`
  margin-top: 55px;
  margin-left: 24px;
  margin-bottom: 56.59px;
  width: 67px;
  height: 64.41px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 49.01px;
    height: 41.33px;
    margin-left: 16px;
    margin-top: 36px;
  }
  @media screen and (max-width: 680px) {
    width: 49.01px;
    height: 41.33px;
    margin-left: -45px;
    margin-top: 83.45px;
  }
`;
const SRateCaptionBox = styled.div`
  width: 61.53px;
  height: 43.1px;
  margin-left: 4.47px;

  @media screen and (max-width: 1024px) {
    width: 42.96px;
    height: 31.77px;
  }
`;
const SRateCaptionTextBox = styled.div`
  width: 52px;
  height: 39px;
  font-style: normal;
  font-weight: 700;
  font-size: 32.8165px;
  line-height: 39px;
  text-align: center;
  color: #55626e;

  @media screen and (max-width: 1024px) {
    width: 38px;
    height: 34px;
    left: 291.68px;
    top: 129.45px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #55626e;
  }

  @media screen and (max-width: 680px) {
    width: 32px;
    height: 28px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #55626e;
  }
`;

const STitleBox = styled.div`
  height: 44px;
  width: 277px;
  margin-top: 16px;
  text-align: left;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: #55626e;

  @media screen and (max-width: 1024px) {
    margin-top: 12px;
    height: 40px;
    width: 224px;
    font-weight: 500;
    font-size: 14px;
    line-height: 19.6px;
    letter-spacing: 0.2px;
  }

  @media screen and (max-width: 680px) {
    display: flex;
    width: 300px;
    height: 40px;
    left: 0px;
    margin-top: 210px;
    margin-left: -254px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #55626e;
  }
`;

const SBrandTextBox = styled.div`
  margin-top: 4px;
  width: 41px;
  height: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: rgba(98, 110, 121, 1);

  @media screen and (max-width: 1024px) {
    margin-top: 24px;
    width: 35.29px;
    height: 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0.2px;
    color: rgba(98, 110, 121, 1);
  }

  @media screen and (max-width: 680px) {
    margin-top: 156px;
    margin-left: -125.18px;
    width: 41px;
    height: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #626e79;
    position: absolute;
  }
`;

const SDiscountBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  width: 62px;
  height: 21px;
  left: 0px;
  margin-top: 12px;
  background: #55a0ea;
  border-radius: 4px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 680px) {
    display: flex;
    width: 61px;
    height: 21px;
    margin-left: -255px;
    margin-top: -70px;
  }
`;
const SDiscountBox2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  width: 62px;
  height: 21px;
  left: 0px;
  margin-top: 12px;
  background: #55a0ea;
  border-radius: 4px;

  @media screen and (max-width: 1024px) {
    display: flex;
    width: 62px;
    height: 21px;
    margin-top: -20px;
  }

  @media screen and (max-width: 680px) {
    display: flex;
    width: 61px;
    height: 21px;
    margin-left: -255px;
    margin-top: -70px;
  }
`;

const SStarsBox = styled.div`
  width: 66.34px;
  height: 11.08px;
  margin-top: 10.22px;
  display: flex;
  flex-direction: row;
  gap: 2.73px;

  @media screen and (max-width: 1024px) {
    width: 49.01px;
    height: 8.19px;
    margin-top: 1.37px;
    margin-right: 15px;
  }
`;

const SStarIcon = styled.img`
  width: 11.08px;
  height: 11.08px;
  left: 55.26px;
`;
const SHalfStarIcon = styled.img`
  width: 11.08px;
  height: 11.08px;
  left: 55.26px;
`;
const SArrowIcon = styled.img`
  height: 6.15px;
  width: 11.25px;
  color: rgba(85, 98, 110, 1);
`;

const SDealWrapper = styled.div`
  width: 246.3px;
  height: 85px;
  margin: 65px 16.7px 26px 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 21px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 13px;
    width: 171px;
    height: 66px;
    margin: 48px 17px 18px 37px;
  }
`;

const SDealButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 246px;
  height: 44px;
  background-color: rgba(11, 118, 224, 1);
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  letter-spacing: 0.2px;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 171px;
    height: 36px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: 0.2px;
  }
  @media screen and (max-width: 680px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-align: right;
    letter-spacing: 0.2px;
    height: 42px;
    width: 280px;
    margin-left: -552px;
    margin-top: 230px;
    border-radius: 12px;
  }
`;

const SBottonButtonTextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 60px;
  width: 246.3px;
  height: 20px;
`;
const SBottonButtonSecTextBox = styled.div`
  width: 108px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    position: absolute;
    width: 88px;
    height: 17px;
    margin-left: -290px;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    position: absolute;
    width: 88px;
    height: 17px;
    margin-left: -290px;
  }
`;
const SArrowBox = styled.div`
  width: 20px;
  height: 19.67px;
  background: #ffffff;
  flex: none;
  order: 1;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 16px;
    height: 16px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

const SMainHighlightsBox = styled.div`
  position: absolute;
  width: 171px;
  height: 28px;
  margin-left: 118px;
  margin-top: 193px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #55626e;

  @media screen and (max-width: 1024px) {
    width: 449px;
    height: 25px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.2px;
    color: #55626e;
    margin-left: 16px;
    margin-top: 143px;
  }

  @media screen and (max-width: 680px) {
    width: 449px;
    height: 25px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.2px;
    color: #55626e;
    margin-top: 359px;
  }
`;

const SDecriptionBox = styled.div`
  position: absolute;
  width: 545px;
  height: 140px;
  margin-left: 118px;
  margin-top: 229px;
  list-style-type: none;
  color: #7b8997;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;

  .tabletDesc {
    display: none;
  }
  .mobileDesc {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    width: 449px;
    height: 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #7b8997;
    margin-left: 16px;
    margin-top: 167px;

    .tabletDesc {
      display: inline;
    }
    .desktopDesc {
      display: none;
    }
    .mobileDesc {
      display: none;
    }
  }

  @media screen and (max-width: 680px) {
    width: 300px;
    height: 160px;
    font-weight: 400;
    line-height: 20px;
    font-size: 12px;
    letter-spacing: 0.2px;
    color: ##7b8997;
    margin-top: 392px;

    .tabletDesc {
      display: none;
    }
    .desktopDesc {
      display: none;
    }
    .mobileDesc {
      display: inline;
    }
  }
`;

const SPriceBox = styled.div`
  position: absolute;
  width: 246px;
  height: 130px;
  margin-left: 761px;
  margin-top: 245px;

  @media screen and (max-width: 1024px) {
    width: 170px;
    height: 94px;
    margin-left: 510px;
    margin-top: 195px;
  }
  @media screen and (max-width: 680px) {
    width: 300px;
    height: 71px;
    margin-left: 10px;
    margin-top: 700px;
  }
`;
const SAmazonIcon = styled.img`
  height: 11.58px;
  width: 65.82px;
  margin-left: 31.58px;
  margin-top: 13.13px;
  border-radius: 0px;
  color: rgba(34, 31, 31, 1);

  @media screen and (max-width: 1024px) {
    height: 7.72px;
    width: 44.16px;
    margin-left: -171.583313px;
    margin-top: 67.421265px;
  }
  @media screen and (max-width: 680px) {
    height: 11.583001136779785px;
    width: 65.82936096191406px;
    margin-left: -120.416672px;
    margin-top: 58.131897px;
    border-radius: 0px;
  }
`;
const SAmazon2Icon = styled.img`
  height: 7.77px;
  width: 34.93px;
  margin-left: 183.85px;
  margin-top: 23.95px;
  border-radius: 0px;
  position: absolute;

  @media screen and (max-width: 1024px) {
    height: 5.18px;
    width: 23.43px;
    margin-left: -23.37px;
    margin-top: 74.3px;
  }

  @media screen and (max-width: 680px) {
    height: 7.77052116394043px;
    width: 34.93669891357422px;
    margin-left: 30.845688px;
    margin-top: 67.956909px;
    border-radius: 0px;
  }
`;

const SViewBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 246px;
  height: 44px;
  margin-top: 24px;
  border: 1px solid #0b76e0;
  border-radius: 12px;
  @media screen and (max-width: 1024px) {
    width: 94px;
    height: 36px;
    margin-left: 52px;
    margin-top: -22px;
  }
  @media screen and (max-width: 680px) {
    width: 152px;
    height: 32px;
    margin-left: 154px;
    margin-top: -21px;
  }
`;
const SOnAmazonBox = styled.div`
  font-weight: 400;

  @media screen and (max-width: 1024px) {
    margin-left: 85px;
    font-size: 12px;
  }
  @media screen and (max-width: 680px) {
    margin-left: -305px;
    font-size: 14px;
  }
`;

const SShowMoreBox = styled.div`
  width: 88px;
  height: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.2px;
  color: #55626e;
  flex: none;
  order: 0;
  flex-grow: 0;

  @media screen and (max-width: 1024px) {
    width: 68px;
    height: 17px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0.2px;
    color: #55626e;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  @media screen and (max-width: 680px) {
    width: 88px;
    height: 17px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.2px;
    color: #55626e;
    margin-left: 380px;
  }
`;

const App = () => {
  return (
    <SPageContainer>
      <SCard>
        <SNumTextBox>01</SNumTextBox>
        <SImg src={screenPicture} />
        <SMiddleSectionWrapper>
          <STitleBox>
            Sony X95J 85 Inch TV: BRAVIA XR Full Array LED 4K Ultra HD Smart
          </STitleBox>
          <SBrandTextBox>SONY</SBrandTextBox>
          <SDiscountBox>
            <Typography
              text='50% OFF'
              fontweight={500}
              fontsize='small'
              color='rgba(255, 255, 255, 1)'
              lineheight='19.6px'
              spacing='0.2px'
            />
          </SDiscountBox>
        </SMiddleSectionWrapper>
        <SRateWrapper>
          <SRateCaptionBox>
            <SRateCaptionTextBox>9.8</SRateCaptionTextBox>
          </SRateCaptionBox>
          <SStarsBox>
            <SStarIcon src={star} />
            <SStarIcon src={star} />
            <SStarIcon src={star} />
            <SStarIcon src={star} />
            <SHalfStarIcon src={halfstar} />
          </SStarsBox>
        </SRateWrapper>
        <SDealWrapper>
          <SDealButton>View Deal</SDealButton>
          <SBottonButtonTextBox>
            <SOnAmazonBox>
              <Typography
                text='On Amazon'
                fontweight={400}
                fontsize='small'
                color='rgba(98, 110, 121, 1)'
                lineheight='19.6px'
                spacing='0.2px'
              />
            </SOnAmazonBox>
            <SBottonButtonSecTextBox>
              <SShowMoreBox>Show more</SShowMoreBox>
              <SArrowBox>
                <SArrowIcon src={arrowDown} />
              </SArrowBox>
            </SBottonButtonSecTextBox>
          </SBottonButtonTextBox>
        </SDealWrapper>
      </SCard>
      <SCard2 detailed>
        <SNumTextBox>02</SNumTextBox>
        <SImg src={screenPicture} />
        <SMiddleSectionWrapper>
          <STitleBox>
            Sony X95J 85 Inch TV: BRAVIA XR Full Array LED 4K Ultra HD Smart
          </STitleBox>
          <SBrandTextBox>SONY</SBrandTextBox>
          <SDiscountBox2>
            <Typography
              text='50% OFF'
              fontweight={500}
              fontsize='small'
              color='rgba(255, 255, 255, 1)'
              lineheight='19.6px'
              spacing='0.2px'
            />
          </SDiscountBox2>
        </SMiddleSectionWrapper>
        <SRateWrapper>
          <SRateCaptionBox>
            <SRateCaptionTextBox>9.8</SRateCaptionTextBox>
          </SRateCaptionBox>
          <SStarsBox>
            <SStarIcon src={star} />
            <SStarIcon src={star} />
            <SStarIcon src={star} />
            <SStarIcon src={star} />
            <SHalfStarIcon src={halfstar} />
          </SStarsBox>
        </SRateWrapper>
        <SDealWrapper>
          <SDealButton>View Deal</SDealButton>
          <SBottonButtonTextBox>
            <SOnAmazonBox>
              <Typography
                text='On Amazon'
                fontweight={400}
                fontsize='small'
                color='rgba(98, 110, 121, 1)'
                lineheight='19.6px'
                spacing='0.2px'
              />
            </SOnAmazonBox>
            <SBottonButtonSecTextBox>
              <SShowMoreBox>Show less</SShowMoreBox>
              <SArrowBox>
                <SArrowIcon src={arrowUp} />
              </SArrowBox>
            </SBottonButtonSecTextBox>
          </SBottonButtonTextBox>
        </SDealWrapper>
        <SMainHighlightsBox>Main Highlights</SMainHighlightsBox>
        <SDecriptionBox>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
            }}
          >
            <div style={{ color: '#7B8997', width: '2px', height: '2px' }}>
              &#x2022;
            </div>
            <li className='desktopDesc'>
              Smart platform with Freeview Play, Netflix, Disney+ and more.{' '}
            </li>
            <li className='tabletDesc'>Packaging may vary. </li>
            <li className='mobileDesc'>
              4K Ultra HD (2160p resolution): Enjoy breathtaking 4K movies and
              TV shows at 4 times the resolution of Full HD, and upscale your
              current content to Ultra HD-level picture quality.{' '}
            </li>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
            }}
          >
            <div style={{ color: '#7B8997', width: '2px', height: '2px' }}>
              &#x2022;
            </div>
            <li className='desktopDesc'>
              Dolby Vision IQ for true-to-life picture and Dolby Atmos for
              immersive sound.
            </li>
            <li className='mobileDesc'>
              Voice remote with Alexa: Use the sound of your voice to do
              everything a regular remote would do: Switch streaming services,
              inputs, channels and much more.
            </li>
            <li className='tabletDesc'>An ideal gift set.</li>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
            }}
          >
            <div style={{ color: '#7B8997', width: '2px', height: '2px' }}>
              &#x2022;
            </div>
            <li className='tabletDesc'>
              Helps you brush longer with the 2 minutes embedded timer.
            </li>
            <li className='mobileDesc'>
              Access thousands of sAhows with Fire TV - Watch over 1 million
              streaming movies and TV episodes with access to thousands of
              channels, apps and Alexa skills, including Apple TV+, Disney+,
              Hulu, Netflix, Prime Video, Sling TV, YouTube and other services
              right from this TV.
            </li>
            <li className='desktopDesc'>
              HDMI 2.1 Spec, 1ms response time and low input lag for superfast
              gameplay.
            </li>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
            }}
          >
            <div style={{ color: '#7B8997', width: '2px', height: '2px' }}>
              &#x2022;
            </div>
            <li className='desktopDesc'>
              Designed for an outstanding gaming, movie and sport viewing
              experience.
            </li>
            <li className='mobileDesc'>
              Hands-free control: Pair with your Amazon Echo and go hands-free,
              controlling volume, search, channels and more.
            </li>
            <li className='tabletDesc'>
              Battery lasts more than 2 weeks with 1 charge with the Lithium-ION
              battery.
            </li>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
            }}
          >
            <div
              className='desktopDesc'
              style={{ color: '#7B8997', width: '2px', height: '2px' }}
            >
              &#x2022;
            </div>
            <li className='desktopDesc'>
              LG 4K SELF-LIT OLED evo for the most advanced OLED picture
              quality.
            </li>
            <li className='tabletDesc'>
              3 BRUSHING MODES: daily clean, whitening and sensitive.
            </li>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
            }}
          >
            <div
              className='tabletDesc'
              style={{ color: '#7B8997', width: '2px', height: '2px' }}
            >
              &#x2022;
            </div>
            <li className='tabletDesc'>
              For a clean that wow – remove bacteria by removing up to 100% more
              plaque vs. a manual toothbrush.
            </li>
          </div>
        </SDecriptionBox>
        <SPriceBox>
          <Typography
            text='$99.00'
            fontweight={600}
            fontsize='large2'
            color='rgba(44, 56, 74, 1)'
            lineheight='28px'
            spacing='0.2px'
          />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                marginTop: '8px',
                width: '71px',
                height: '25px',
                textDecorationLine: 'line-through',
                color: '#9FA9B3',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                text='$199.00'
                fontweight={400}
                fontsize='medium2'
                color='rgba(159, 169, 179, 1)'
                lineheight='25px'
                spacing='0.2px'
              />
            </div>
            <div
              style={{
                marginLeft: '8px',
                width: '63px',
                height: '20px',
                marginTop: '10px',
              }}
            >
              <Typography
                text='(26% off)'
                fontweight={400}
                fontsize='small'
                color='#DF0923'
                lineheight='20px'
                spacing='0.2px'
              />
            </div>
            <SAmazonIcon src={amazon} />
            <SAmazon2Icon src={amazon2} />
          </div>
          <SViewBox>
            <Typography
              text='View'
              fontweight={700}
              fontsize='medium'
              color='rgba(11, 118, 224, 1)'
              lineheight='22px'
              spacing='0.2px'
            />
          </SViewBox>
        </SPriceBox>
      </SCard2>
      <SRelatedTextBox>Related deals you might like for tv</SRelatedTextBox>
      <ScardContainer>
        <SCard3 />
        <SCard3 />
        <SCard3 />
        <SCard3 />
        <SCard3 />
        <SCard3 />
      </ScardContainer>
    </SPageContainer>
  );
};

export default App;
