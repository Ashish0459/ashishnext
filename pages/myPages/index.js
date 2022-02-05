import React from 'react';
import Link from "next/link"

const Mypages = () => {
  return <div>i am My page
  <Link
      href={{
        pathname: "/myPages/about[id]",
        query: { id: "test" },
      }}
    >
      <a><button>About page</button></a>
    </Link></div>;
};

export default Mypages;
