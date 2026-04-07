import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TopBanner from "@/components/blog/TopBanner";
import BlogHeader from "@/components/blog/BlogHeader";
import HeroSection from "@/components/blog/HeroSection";
import FeaturedArticles from "@/components/blog/FeaturedArticles";
import ArticleList from "@/components/blog/ArticleList";
import CategoriesSection from "@/components/blog/CategoriesSection";
import LeadCaptureForm from "@/components/blog/LeadCaptureForm";
import AboutSection from "@/components/blog/AboutSection";
import BlogFooter from "@/components/blog/BlogFooter";
import SEOHead from "@/components/blog/SEOHead";

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
      <SEOHead />
      <TopBanner />
      <BlogHeader />
      <HeroSection />
      <FeaturedArticles />
      <ArticleList />
      <CategoriesSection />
      <LeadCaptureForm />
      <AboutSection />
      <BlogFooter />
    </div>
  );
};

export default Index;
