import React, { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  flex?: boolean;
  classes?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, flex, classes, id }) => {
  return (
    <section className="my-14" id={id}>
      <Container classes={classes} flex={flex}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
