import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="120" cy="120" r="120" />
    <rect x="0" y="270" rx="5" ry="5" width="240" height="24" />
    <rect x="0" y="320" rx="4" ry="4" width="240" height="68" />
    <rect x="0" y="410" rx="10" ry="10" width="100" height="30" />
    <rect x="143" y="410" rx="10" ry="10" width="100" height="30" />
  </ContentLoader>
);

export default Skeleton;
