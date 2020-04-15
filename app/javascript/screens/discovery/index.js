import React, { Fragment } from "react";
import SectionWrapper from "../../components/common/section-wrapper";
import NavbarFooter from "../../components/common/navbar_footer";
import Discovery from "../../components/descovery";

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
