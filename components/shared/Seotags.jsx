import React from "react";

function Seotags({ meta }) {
  return (
    <>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={meta.pageUrl} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.pageUrl} />
      <meta property="og:image:height" content="445" />
      <meta property="og:image:width" content="800" />
      <meta name="twitter:title" content={meta.title} />
      <meta
        name="twitter:description"
        content={meta.description}
      />
      <meta name="twitter:card" content="summary_large_image"></meta>
    </>
  );
}

export default Seotags;
