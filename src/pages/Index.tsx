import BlogHeader from "@/components/blog/BlogHeader";
import HeroSection from "@/components/blog/HeroSection";
import FeaturedArticles from "@/components/blog/FeaturedArticles";
import CategoriesSection from "@/components/blog/CategoriesSection";
import ArticleList from "@/components/blog/ArticleList";
import BlogFooter from "@/components/blog/BlogFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <HeroSection />
      <FeaturedArticles />
      <CategoriesSection />
      <ArticleList />
      <BlogFooter />
    </div>
  );
};

export default Index;
