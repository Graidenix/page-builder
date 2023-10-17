import React from 'react';
import { BuilderComponentsFC } from "@/types.ts";
import { previewData } from "@/mock/previewData";

export type LandingPageProps = BuilderComponentsFC & {};

const LandingPage: React.FC<LandingPageProps> = (props) => {
  const { NavBar, Footer } = props;
  return (
    <div>
      <NavBar {...previewData.NavBar} />
      <h1 className="py-6">Landing</h1>
      <Footer {...previewData.Footer} />
    </div>
  )
}

export default LandingPage
