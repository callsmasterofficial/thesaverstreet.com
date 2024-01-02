import React from "react";

const sanitize = (slug) => {
  slug.includes("&") ? slug.replaceAll("&", "&amp;") : slug;
};

const createSitemap = (data) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
        <url>
            <loc>https://www.thesaverstreet.com/</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/all-stores</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/top-coupons</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/black-friday</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/privacy-policy</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/copyright</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/accessibility-statement</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/do-not-sell-my-info</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/terms-of-use</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/The Saver Street-coins</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/about</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/frequently-asked-questions</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/deal-of-the-day</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/extension</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/blog/</loc>
        </url>
        <url>
            <loc>https://www.thesaverstreet.com/404/</loc>
        </url>
        ${
          data &&
          data.blog
            .map(({ slug }) => {
              return `
                    <url>
                        <loc>${`https://www.thesaverstreet.com/blog/${encodeURIComponent(
                          slug
                        )}`}</loc>
                    </url>
                `;
            })
            .join("")
        }
        ${
          data &&
          data.store
            .map(({ slug }) => {
              return `
                    <url>
                        <loc>${`https://www.thesaverstreet.com/all-stores/${encodeURIComponent(
                          slug
                        )}`}</loc>
                    </url>
                `;
            })
            .join("")
        }
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    try {
      const request = await fetch(`https://www.thesaverstreet.com/api/sitemap`);
      const data = await request.json();
      res.setHeader("Content-Type", "application/xml");
      res.write(createSitemap(data));
      res.end();
    } catch (err) {
      res.write({ err: err.message });
      res.end();
    }
  }
}

export default Sitemap;
