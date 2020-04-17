import React, { Fragment } from "react";
import Albums from "../../components/albums";
import NavbarFooter from "../../components/common/navbar_footer";
import SectionWrapper from '../../components/common/section-wrapper';

const AlbumScreen = () => {
  return (
    <Fragment>           
      <SectionWrapper>
         <Albums />
         <NavbarFooter />     
      </SectionWrapper>         
    </Fragment>
  );
};

export default AlbumScreen;
