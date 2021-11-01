import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Navigation from "./Navigation";

const AppWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  display:flex;
  flex-direction:column;

  @media (min-width: 776px) {
    padding-top: 64px;
    flex-direction:row;
  }
`;
const MainDiv = styled.div`
    flex:75%;
    box-sizing:border-box;
    padding:12px;
    margin:0 auto;

    @media (min-width: 700px) {
        flex:80%;
`;

const Layout = ({children}) => {
    return(
        <React.Fragment>
            <Header/>
            <AppWrapper>
                <Navigation/>
                <MainDiv>{children}</MainDiv>
            </AppWrapper>
        </React.Fragment>

    );
}
export default Layout;