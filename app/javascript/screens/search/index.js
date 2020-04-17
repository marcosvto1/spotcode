import React, {Fragment, useState, useEffect} from 'react';
import SectionWrapper from "../../components/common/section-wrapper";
import NavbarFooter from "../../components/common/navbar_footer";
import Search from '../../components/search';
import {Heading} from 'react-bulma-components';

const SearchScreen = () => {

  return (
    <>
      <SectionWrapper>
        <Heading className="has-text-centered has-text-white">Buscar</Heading>
        <Search />
        <NavbarFooter />
      </SectionWrapper>
    </>
  );
}

export default SearchScreen;