import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    text-decoration: none;
    transition: opacity 0.3s ease-in-out;
`


const Card = styled.div`
  position: relative; /* MUY IMPORTANTE para que el botón se posicione dentro */
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    filter: brightness(1.1);
  }
    &:hover ${Button} {
    opacity: 1;
    pointer-events: auto;
}
`;


const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  object-position: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const ProjectCards = ({ project }) => {
  return (
    <Card>
      <Image src={project.img} alt={project.title} />
      <Details>
        <Title>{project.title}</Title>
        <Description>{project.desc}</Description>
      </Details>
      {project.link && (
        <Button href={project.link} target="_blank" rel="noopener noreferrer">
          Ver Proyecto
        </Button>
      )}
    </Card>
  );
};

export default ProjectCards;
