// File: page.tsx

import React from 'react';
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import M2eBackground from "@/app/components/m2e/m2eBackground";  // Import the SimpleInteractiveBackground component

export default function Page() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* m2e background start */}
      <M2eBackground />
      {/* m2e background end */}
    </Wrapper>
  );
}
