import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import  Header  from "components/header/Header";

import { Page } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <Header />

       <Suspense fallback={null}>
        <Page>
          <Outlet />
        </Page>
      </Suspense>
    </>

  )
}

export default Layout;