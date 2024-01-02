import React, { useState } from "react";
import Link from "next/link";
import db from "../../config/db";
import Blog from "../../models/blog";
import BlogCat from "../../models/blogCategory";
import Footer from "../../components/shared/Footer";

const site = process.env.SITE_ID;

export async function getStaticProps() {
  try {
    await db();
    const blogsRaw = await Blog.find(
      { site },
      "title slug featured_image createdAt cat tags author meta_description",
      { sort: { createdAt: -1 }, limit: 12 }
    )
      .populate("cat", "name slug")
      .exec();
    const data = JSON.parse(JSON.stringify({ initalBlogs: blogsRaw }));
    return {
      props: {
        data,
      },
      revalidate: 86400,
    };
  } catch (err) {
    
    return {
      props: {
        err,
      },
    };
  }
}

export default function Index({ data: { initalBlogs } }) {
  const [blogs, setBlogs] = useState(initalBlogs);
  const categories = [
    ...new Set(blogs.map((blog) => blog.cat.map((item) => item.name)).flat(1)),
  ];
  const tags =  [
    ...new Set(blogs.map((blog) => blog.tags.map((item) => item)).flat(1)),
  ];

  
  return (
    <>
     <div className="mb-4">
        <img
          style={{ width: "100%" }}
          src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648642513352-blog.jpeg"
          alt="cyber monday deals"
        ></img>
      </div>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {blogs && blogs.map((blog) => (
              <div className="col blog-card" key={blog._id}>
              <div className="card h-100 shadow-sm">
                <div>
                  <img
                    src={blog.featured_image}
                    className="card-img-top blogImage"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">
                    {blog.meta_description}
                  </p>
                  <p className="card-text read-more">
                    <Link href={`/blog/${blog.slug}`}>Read More...</Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
      <Footer />
    </>
  );
};

