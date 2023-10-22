// File: page.tsx

import React from 'react';
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import ArcadeArena from "@/app/components/arcade-arena/arcade-arena";
import Footer from "@/layout/footer/footer-2";

export default function Page() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* arena banner start */}
        <ArcadeArena />
        {/* arena banner end */}
      </main>
      {/* main area end */}
      {/* footer end */}
    </Wrapper>
  );
}
