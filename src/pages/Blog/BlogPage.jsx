import React from "react";
import Footer from "../../components/Footer/Footer";
import { FooterWrapper } from "../../GlobalStyles";

const BlogPage = () => {
  return (
    <section className="mt-28 grid place-items-center ">
      {" "}
      <iframe
        className="w-full h-screen"
        src="https://metaslogopedia.blogspot.com"
        frameborder="0"
        title="blog"
      />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </section>
  );
};

export default BlogPage;
