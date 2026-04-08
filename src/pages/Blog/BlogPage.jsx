import React from "react";
import Footer from "../../components/Footer/Footer";
import { FooterWrapper } from "../../GlobalStyles";
import Seo from "../../components/Seo";
import { SEO } from "../../config/seo";

const BlogPage = () => {
  return (
    <section className="mt-28 grid place-items-center ">
      <Seo
        title={SEO.blog.title}
        description={SEO.blog.description}
        path={SEO.blog.path}
      />
      <header className="w-full max-w-4xl px-4 text-center mb-4">
        <h1 className="text-2xl font-extrabold text-[#b1c2b6] mb-2">
          Blog de logopedia
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Artículos y recursos del Centro Metas en A Coruña
        </p>
      </header>
      <iframe
        className="w-full h-screen"
        src="https://metaslogopedia.blogspot.com"
        frameBorder="0"
        title="Blog de Metas Logopedia — artículos en Blogger"
      />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </section>
  );
};

export default BlogPage;
