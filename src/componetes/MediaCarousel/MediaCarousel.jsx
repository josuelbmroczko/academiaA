// src/components/MediaCarousel.jsx
import { useState } from "react";
import styled from "styled-components";
import video1 from "./video1.mp4"
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
  const [media] = useState([
    {
      type: "video",
      src: "/video.mp4",
      alt: "Vídeo de exemplo",
    },
  ]);

  return (
    <CarouselWrapper>
      <Title>Destaque</Title>
      {media.map((item, index) =>
        item.type === "video" ? (
          <VideoContainer key={index}>
            <StyledVideo src={video1} controls />
          </VideoContainer>
        ) : (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            style={{
              width: "100%",
              borderRadius: "0.75rem",
              objectFit: "cover",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          />
        )
      )}
    </CarouselWrapper>
  );
}
