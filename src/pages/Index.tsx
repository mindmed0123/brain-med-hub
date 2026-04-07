import BlogHeader from "@/components/blog/BlogHeader";
import HeroSection from "@/components/blog/HeroSection";
import FeaturedArticles from "@/components/blog/FeaturedArticles";
import CategoriesSection from "@/components/blog/CategoriesSection";
import ArticleList from "@/components/blog/ArticleList";
import CTASection from "@/components/blog/CTASection";
import BlogFooter from "@/components/blog/BlogFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <HeroSection />
      <FeaturedArticles />
      <CategoriesSection />
      <ArticleList />
      <CTASection />
      <BlogFooter />
    </div>
  );
};

export default Index;
