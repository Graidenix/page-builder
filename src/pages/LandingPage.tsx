import React from 'react';
import {BuilderComponentsProps} from "@/types.ts";

export type LandingPageProps = BuilderComponentsProps & {};

const LandingPage: React.FC<LandingPageProps> = (props) => {
    const {NavBar, Footer} = props;
  return (
      <div>
          <NavBar/>
          <h1 className="py-6">Landing</h1>
          <Footer/>
      </div>
  )
}

export default LandingPage
