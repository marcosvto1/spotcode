import React from "react";
import SectionWrapper from "../../components/common/section-wrapper";
import NavbarFooter from "../../components/common/navbar_footer";
import Favorites from '../../components/favorites';

const FavoritesScreen = () => {
  return (
    <>
      <SectionWrapper>
        <Favorites />
        <NavbarFooter />
      </SectionWrapper>
    </>
  );
};

export default FavoritesScreen;
