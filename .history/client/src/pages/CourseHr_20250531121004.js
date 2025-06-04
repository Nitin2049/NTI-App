import React from 'react';
import styled from 'styled-components';

const CourseContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
  background: #f9fbfd;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  color: #2e3b55;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #4b5563;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  color: #374151;
`;

const Badge = styled.span`
  display: inline-block;
  background-color: #dbeafe;
  color: #1d4ed8;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const CourseHR = () => {
  return (
    <CourseContainer>
      <Title>Human Resources Management Course</Title>
      <Subtitle>Master the fundamentals of HR and become a strategic partner in your organization.</Subtitle>

      <Section>
        <SectionTitle>Course Overview</SectionTitle>
        <p>
          This comprehensive HR course provides the skills needed to manage the modern workforce.
          Learn about recruitment, employee engagement, performance management, labor laws, and organizational behavior.
        </p>
      </Section>

      <Section>
        <SectionTitle>What You’ll Learn</SectionTitle>
        <List>
          <li>HR roles and responsibilities</li>
          <li>Talent acquisition & onboarding</li>
          <li>Performance appraisal systems</li>
          <li>Employee relations and conflict resolution</li>
          <li>Compensation and benefits</li>
          <li>Labor laws and compliance</li>
        </List>
      </Section>

      <Section>
        <SectionTitle>Ideal For</SectionTitle>
        <p>Beginners, HR assistants, team leaders, and managers looking to enhance their HR capabilities.</p>
      </Section>

      <Badge>100% Online · 6 Weeks · Certificate Included</Badge>
    </CourseContainer>
  );
};

export default CourseHR;
