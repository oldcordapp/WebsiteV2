import React, { useRef, useState, useLayoutEffect, useMemo } from "react";
import styled, { keyframes, css } from "styled-components";

const scroll = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: fit-content;

  ${({ duration, direction }) =>
    css`
      animation: ${scroll} ${duration}s linear infinite;
      animation-direction: ${direction === "right" ? "reverse" : "normal"};
    `}

  ${({ pauseOnHover }) =>
    pauseOnHover &&
    css`
      ${MarqueeContainer}:hover & {
        animation-play-state: paused;
      }
    `}
`;

const ContentWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: ${({ gap }) => gap};
  margin-left: ${({ gap }) => gap};
`;

const MeasuringDiv = styled.div`
  position: absolute;
  opacity: 0;
  top: -1000px;
  left: -1000px;
  pointer-events: none;
  white-space: nowrap;
  visibility: hidden;
  display: flex;
  gap: ${({ gap }) => gap};
`;

const Marquee = ({
  children,
  speed = 50,
  direction = "left",
  pauseOnHover = false,
  gap = "1rem",
}) => {
  const [contentWidth, setContentWidth] = useState(0);
  const [numClones, setNumClones] = useState(1);

  const containerRef = useRef(null);
  const measuringRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !measuringRef.current) return;

    const calculateWidths = () => {
      const newContainerWidth = containerRef.current.offsetWidth;
      const newContentWidth = measuringRef.current.offsetWidth;

      setContentWidth(newContentWidth);

      if (newContentWidth > 0 && newContainerWidth > 0) {
        const clonesNeeded = Math.ceil(newContainerWidth / newContentWidth);
        setNumClones(clonesNeeded + 1);
      }
    };

    calculateWidths();

    const resizeObserver = new ResizeObserver(calculateWidths);
    resizeObserver.observe(containerRef.current);
    resizeObserver.observe(measuringRef.current);

    return () => resizeObserver.disconnect();
  }, [children, gap]);

  const clonedChildren = useMemo(() => {
    return Array.from({ length: numClones }).map((_, index) => (
      <React.Fragment key={index}>
        {React.Children.map(children, (child, childIndex) =>
          React.cloneElement(child, { key: `clone-${index}-${childIndex}` })
        )}
      </React.Fragment>
    ));
  }, [children, numClones]);

  const totalContentWidth = contentWidth * numClones;
  const duration = totalContentWidth > 0 ? totalContentWidth / speed : 0;

  return (
    <>
      <MeasuringDiv ref={measuringRef} gap={gap}>
        {children}
      </MeasuringDiv>

      <MarqueeContainer ref={containerRef}>
        <MarqueeTrack
          duration={duration}
          direction={direction}
          pauseOnHover={pauseOnHover}
        >
          <ContentWrapper gap={gap}>{clonedChildren}</ContentWrapper>

          <ContentWrapper gap={gap} aria-hidden="true">
            {clonedChildren}
          </ContentWrapper>
        </MarqueeTrack>
      </MarqueeContainer>
    </>
  );
};

export default Marquee;
