// src/components/MediaCarousel.jsx
import styled from "styled-components";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";
import video4 from "./video4.mp4";

const CarouselWrapper = styled.section`
  width: 60%;
  margin: auto;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000, #1a1a1ab9);
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    border-radius: 0.75rem;
    width: 90%;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 */
  border-radius: 0.75rem;
  overflow: hidden;
  background: #000;

  @media (max-width: 500px) {
    padding-top: 75%; /* Ajusta proporção para telas menores */
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export function MediaCarousel() {
  return (
    <CarouselWrapper>
      <Title>Destaques</Title>

      <VideoContainer>
        <StyledVideo src={video1} controls />
      </VideoContainer>

      <VideoContainer>
        <StyledVideo src={video2} controls />
      </VideoContainer>

      <VideoContainer>
        <StyledVideo src={video3} controls />
      </VideoContainer>

      <VideoContainer>
        <StyledVideo src={video4} controls />
      </VideoContainer>
    </CarouselWrapper>
  );
}
