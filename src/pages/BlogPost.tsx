
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/lib/blog-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  // A simple markdown-to-HTML converter
  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-bold mt-6 mb-2 text-primary">{paragraph.substring(4)}</h3>;
      }
      if (paragraph.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
    });
  };

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">{post.title}</h1>
            <p className="text-muted-foreground mb-6">{post.date} - by {post.author}</p>
            <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8" />
            <article className="prose lg:prose-xl max-w-none text-foreground/90">
                {renderContent(post.content)}
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
