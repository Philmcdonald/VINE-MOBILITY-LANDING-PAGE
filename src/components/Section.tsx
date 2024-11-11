import React, { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  flex?: boolean;
  classes?: string;
  id?: string;
  bg?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  flex,
  classes,
  id,
  bg,
}) => {
  return (
    <section className={`my-10 md:my-12 lg:my-16 ${bg ? bg : ""}`} id={id}>
      <Container classes={classes} flex={flex}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
