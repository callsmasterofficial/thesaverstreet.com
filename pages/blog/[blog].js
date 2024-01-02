import React from "react";
import db from "../../config/db";
import Blog from "../../models/blog";
import Footer from "../../components/shared/Footer";
import BlogCat from "../../models/blogCategory";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const slug = context.params.blog;
  try {
    db();
    const blog = await Blog.findOne({ site: process.env.SITE_ID, slug });
    const data = JSON.parse(JSON.stringify({ blog }));
    return {
      props: {
        data,
        meta: {
          title: blog.meta_title,
          description: blog.meta_description,
          keywords: blog.meta_keywords,
          pageUrl: "https://www.thesaverstreet.com/blog/" + slug,
          featuredImage: blog.featured_image || process.env.FAV_ICON,
        },
      }, // will be passed to the page component as props
      revalidate: 86400,
    };
  } catch (err) {
    return {
      notFound: true, // will be passed to the page component as props
      revalidate: 24,
    };
  }
}
export const config = { amp: "hybrid" };

const SingleBlog = ({ data }) => {
  const categories = [...new Set(data?.blog.cat.map((item) => item.name))];
  const tags = [...new Set(data?.blog.tags.map((item) => item))];

  // const categories = [
  //   ...new Set(data?.blog.cat.map((item) => item.name)),
  // ];
  // const tags = [
  //   ...new Set( data?.blog.tags.map((item) => item)),
  // ];

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="card">
              <div className="card-body">
                <h4 className="font-weight-semibold2 text-capitalize">
                  {data?.blog.title}
                </h4>
                <div className="item7-card-img mt-3">
                  <img
                    src={data?.blog.featured_image}
                    alt="Countries with the Least Covid Restrictions"
                    className="w-100 br-5"
                  />
                </div>
                <div className="item7-card-desc d-flex mb-2 mt-3">
                  <i className="fe fe-calendar text-muted mr-2" />
                  2022-03-09
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: data?.blog.description }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control br-tl-5 br-bl-5"
                      placeholder="Search"
                    />

                    <button
                      type="button"
                      className="btn btn-primary singlebolgBtn"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title">Categories</h5>
                </div>
                <div className="card-body p-0">
                  <div className="list-catergory">
                    <div className="item-list">
                      <ul className="list-group mb-0">
                        <li className="list-group-item">
                          <a href="#" className="text-dark">
                            covid
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title">Popular Stores</h5>
                </div>
                <div className="card-body p-0">
                  <div className="list-catergory">
                    <div className="item-list">
                      <ul className="list-group mb-0">
                        <li className="list-group-item">
                          <div className="row my-4">
                            <div className="col-lg-4">
                              <a href="#" className="text-dark">
                                <div className="card">
                                  <img
                                    src="https://cdn.honey.io/images/store-logos/326944219204203689.png"
                                    width="100%"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a href="#" className="text-dark">
                                <div className="card">
                                  <img
                                    src="https://cdn.honey.io/images/store-logos/326944219204203689.png"
                                    width="100%"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a href="#" className="text-dark">
                                <div className="card">
                                  <img
                                    src="https://cdn.honey.io/images/store-logos/326944219204203689.png"
                                    width="100%"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="row my-4">
                            <div className="col-lg-4">
                              <a href="#" className="text-dark">
                                <div className="card">
                                  <img
                                    src="https://cdn.honey.io/images/store-logos/294748574666744778.png"
                                    width="100%"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a href="#" className="text-dark">
                                <div className="card">
                                  <img
                                    src="https://cdn.honey.io/images/store-logos/294748574666744778.png"
                                    width="100%"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a href="#" className="text-dark">
                                <div className="card">
                                  <img
                                    src="https://cdn.honey.io/images/store-logos/294748574666744778.png"
                                    width="100%"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="row my-4">
                            <div className="col-lg-4">
                              <a href="#" className="text-dark">
                                <div className="card">
                                  <img
                                    src="https://cdn.honey.io/images/store-logos/294748574666744778.png"
                                    width="100%"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a href="#" className="text-dark">
                                <div className="card">
                                  <img
                                    src="https://cdn.honey.io/images/store-logos/294748574666744778.png"
                                    width="100%"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a href="#" className="text-dark">
                                <div className="card">
                                  <img
                                    src="https://cdn.honey.io/images/store-logos/294748574666744778.png"
                                    width="100%"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="row my-4">
                            <div className="col-lg-4">
                              <a href="#" className="text-dark">
                                <div className="card">
                                  <img
                                    src="https://cdn.honey.io/images/store-logos/294748574666744778.png"
                                    width="100%"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a href="#" className="text-dark">
                                <div className="card">
                                  <img
                                    src="https://cdn.honey.io/images/store-logos/294748574666744778.png"
                                    width="100%"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a href="#" className="text-dark">
                                <div className="card">
                                  <img
                                    src="https://cdn.honey.io/images/store-logos/294748574666744778.png"
                                    width="100%"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Popular Tour Tags</h5>
                </div>
                <div className="card-body">
                  <div className="product-tags clearfix">
                    <ul className="list-unstyled mb-0 ">
                      <li>
                        <a href="javascript:void(0)">
                          covid travel restrictions
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">covid restrictions </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          least covid restrictions
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">travel warnings</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">coronavirus</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">COVID-19</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">pandemic </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">airport</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">quarantines</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">travel</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">tourism</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
// SingleBlog.getInitialProps = async({query:{blog}})=>{
//   const slug = blog;
//   try {
//     db();
//     const blog = await Blog.findOne({ slug })
//     const data = JSON.parse(JSON.stringify({ blog }));
//     return {
//         data,

//     };
//   } catch (err) {
//

//   }
// }
export default SingleBlog;
