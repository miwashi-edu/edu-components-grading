import { FC, useState } from "react";
import * as S from "./styled";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

interface dataProps {
  name: string;
  message: string;
}

type ownProps = {
  data: dataProps[];
  showIndicators?: boolean;
  showArrows?: boolean;
  showStatus?: boolean;
  showThumbs?: boolean;
  emulateTouch?: boolean;
  infiniteLoop?: boolean;
  autoPlay?: boolean;
  interval?: number;
  transitionTime?: number;
  swipeable?: boolean;
  stopOnHover?: boolean;
  height?: string;
  width?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  textAlign?: "center" | "left" | "right";
};

const CustomCarousel: FC<ownProps> = ({
  data,
  showIndicators,
  showArrows,
  showStatus,
  showThumbs,
  emulateTouch,
  infiniteLoop,
  autoPlay,
  interval,
  transitionTime,
  swipeable,
  stopOnHover,
  height,
  width,
  backgroundColor,
  color,
  fontSize,
  textAlign,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handlePrevClick = () => {
    setSelectedIndex((prev: number) =>
      prev === 0 ? data.length - 1 : prev - 1
    );
  };

  const handleNextClick = () => {
    setSelectedIndex((prev: number) =>
      prev === data.length - 1 ? 0 : prev + 1
    );
  };

  const handleIndicatorClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <S.Wrapper height={height} width={width} backgroundColor={backgroundColor}>
      <S.Container
        showThumbs={showThumbs}
        emulateTouch={emulateTouch}
        infiniteLoop={infiniteLoop}
        showArrows={showArrows}
        showStatus={showStatus}
        showIndicators={false}
        selectedItem={selectedIndex}
        onChange={(index) => setSelectedIndex(index)}
        autoPlay={autoPlay}
        interval={interval}
        transitionTime={transitionTime}
        swipeable={swipeable}
        stopOnHover={stopOnHover}
      >
        {data.map((txt, idx) => (
          <S.TextWrapper key={idx}>
            <S.Text textAlign={textAlign} color={color}>{txt.message}</S.Text>
          </S.TextWrapper>
        ))}
      </S.Container>
      {showIndicators && (
        <S.IndicatorWrapper>
          {data.map((_, idx) => (
            <S.IconButton
              isSelected={selectedIndex === idx}
              key={idx}
              onClick={() => handleIndicatorClick(idx)}
            >
              _
            </S.IconButton>
          ))}
        </S.IndicatorWrapper>
      )}

      <S.BottomSection>
        <S.Text color={color}>
          Name: {data[selectedIndex].name}
        </S.Text>
        <S.NavWrapper>
          <S.IconWrapper>
            <S.ButtonThumb right="60px" backgroundColor={color} onClick={handlePrevClick}>
              <ArrowBack color="action" onClick={handlePrevClick} />
            </S.ButtonThumb>
            <S.ButtonThumb right="20px" backgroundColor={color} onClick={handleNextClick}>
              <ArrowForward color="action" onClick={handleNextClick} />
            </S.ButtonThumb>
          </S.IconWrapper>
        </S.NavWrapper>
      </S.BottomSection>
    </S.Wrapper>
  );
};

export default CustomCarousel;
