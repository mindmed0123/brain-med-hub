import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogHeader from "@/components/blog/BlogHeader";
import HeroSection from "@/components/blog/HeroSection";
import FeaturedArticles from "@/components/blog/FeaturedArticles";
import CategoriesSection from "@/components/blog/CategoriesSection";
import ArticleList from "@/components/blog/ArticleList";
import AboutSection from "@/components/blog/AboutSection";
import BlogFooter from "@/components/blog/BlogFooter";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <HeroSection />
      <FeaturedArticles />
      <CategoriesSection />
      <ArticleList />
      <AboutSection />
      <BlogFooter />
    </div>
  );
};

export default Index;
