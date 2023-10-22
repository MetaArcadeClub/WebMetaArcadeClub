// File: page.tsx

import React from 'react';
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import PvPBackground from "@/app/components/pvp/PvPBackground";  // Import the SimpleInteractiveBackground component

export default function Page() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* PvP background start */}
      <PvPBackground />
      {/* PvP background end */}
    </Wrapper>
  );
}
