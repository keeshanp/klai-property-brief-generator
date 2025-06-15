
import { Link } from "react-router-dom";
import { blogPosts } from "@/lib/blog-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogIndex = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <section className="py-12 md:py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">KLAP Property Blog</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, strategies, and news from the world of property investment in North East England.
            </p>
          </div>
        </section>
        
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="overflow-hidden flex flex-col">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover"/>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.date} - by {post.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                     <Button asChild>
                        <Link to={`/blog/${post.slug}`}>Read More</Link>
                     </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;
