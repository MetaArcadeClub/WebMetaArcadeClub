// File: page.tsx

import React from 'react';
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import SimpleInteractiveBackground from "@/app/components/p2e/SimpleInteractiveBackground";  // Import the SimpleInteractiveBackground component

export default function Page() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* Simple interactive background start */}
      <SimpleInteractiveBackground />
      {/* Simple interactive background end */}
    </Wrapper>
  );
}
