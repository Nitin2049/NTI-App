import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: linear-gradient(135deg, #e0f7fa, #e1bee7);
  padding: 3rem 2rem;
  border-radius: 12px;
  max-width: 1100px;
  margin: 2rem auto;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Image = styled.img`
  flex: 1;
  max-width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const List = styled.ul`
  margin-top: 1rem;
  list-style: square;
  padding-left: 1.5rem;
  color: #444;
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  background-color: #4a148c;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6a1b9a;
  }
`;

const CourseBusinessAnalyst = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Business Analyst Professional Program</Title>
        <Subtitle>Master business analysis techniques and tools in 10 weeks</Subtitle>
      </Header>
      <FlexContainer>
        <TextContent>
          <p>
            This hands-on course equips you with the essential skills needed to become a proficient Business Analyst.
            Learn how to gather requirements, create impactful reports, and bridge the gap between business needs and technical solutions.
          </p>
          <List>
            <li>📊 Data Interpretation & Visualization</li>
            <li>🧠 Critical Thinking & Problem Solving</li>
            <li>💼 Agile & Waterfall Methodologies</li>
            <li>🛠️ Tools: Excel, SQL, Power BI, Tableau</li>
            <li>🎓 Industry-recognized Certification</li>
          </List>
          <Button href="#enroll">Join the Program</Button>
        </TextContent>
        <Image
          src="https://images.unsplash.com/photo-1611974789851-9c2a0a7236a3"
          alt="Business Analyst Course"
        />
      </FlexContainer>
    </Wrapper>
  );
};

export default CourseBusinessAnalyst;
