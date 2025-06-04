import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to right, #f5f7fa, #c3cfe2);
  padding: 3rem 2rem;
  border-radius: 10px;
  max-width: 1000px;
  margin: 2rem auto;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  color: #555;
  text-align: center;
  font-weight: normal;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Image = styled.img`
  flex: 1;
  max-width: 100%;
  border-radius: 10px;
  object-fit: cover;
  height: auto;
`;

const List = styled.ul`
  margin-top: 1rem;
  padding-left: 1.5rem;
  color: #444;
  list-style-type: square;
`;

const Button = styled.a`
  display: inline-block;
  background: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  margin-top: 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;

  &:hover {
    background: #0056b3;
  }
`;

const CourseDigitalMarketing = () => {
  return (
    <Container>
      <Title>Digital Marketing Mastery</Title>
      <Subtitle>Become a Certified Digital Marketer in 8 Weeks</Subtitle>
      <Grid>
        <Content>
          <p>
            This comprehensive course covers everything you need to thrive in the digital marketing landscape.
            Learn SEO, social media marketing, PPC, content strategy, and analytics from industry experts.
          </p>
          <List>
            <li>✅ SEO & SEM Fundamentals</li>
            <li>📱 Social Media Strategy</li>
            <li>💡 Content Creation & Branding</li>
            <li>📊 Analytics & Conversion Optimization</li>
            <li>🎓 Certificate Upon Completion</li>
          </List>
          <Button href="#enroll">Enroll Now</Button>
        </Content>
        <Image className='w-50 h-50' src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7" alt="Digital Marketing" />
      </Grid>
    </Container>
  );
};

export default CourseDigitalMarketing;
