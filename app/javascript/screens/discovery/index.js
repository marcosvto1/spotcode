import React, { Fragment } from "react";
import NavbarFooter from "../../components/common/navbar_footer";
import Discovery from "../../components/discovery";
import SectionWrapper from "../../components/common/section-wrapper";

const DiscoveryScreen = () => {
  return (
    <>
      <SectionWrapper>
        <Discovery />
      </SectionWrapper>
      <NavbarFooter />
    </>
  );
};

export default DiscoveryScreen;
