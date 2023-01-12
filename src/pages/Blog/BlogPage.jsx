import React from "react";
import kidsImg from "../../assets/images/kids8.JPG";
import Footer from "../../components/Footer/Footer";
import { FooterWrapper } from "../../GlobalStyles";

const BlogPage = () => {
  return (
    <section className="mt-28 grid place-items-center ">
      <h1 className="text-green-200 text-3xl font-bold mb-2">Blog</h1>
      <div className="w-400 mb-20 relative">
        <h2 className="absolute">Proximamente...</h2>
        <img src={kidsImg} alt="group of kids" className="w-full" />
      </div>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </section>
  );
};

export default BlogPage;
