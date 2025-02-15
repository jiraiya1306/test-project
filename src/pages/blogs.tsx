import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';



export function Blog() {
  
  const blogPosts = [
    {
      id: 1,
      title: "Essential Wig Maintenance Tips for Longer Lasting Hairpieces",
      excerpt: "Learn the best practices for maintaining your wigs and hairpieces to ensure they stay beautiful and last longer.",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      author: "Sarah Johnson",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Wig Conditioning",
      excerpt: "Discover professional techniques for conditioning your wig to maintain its softness and natural appearance.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      author: "Emily Davis",
      date: "March 10, 2024"
    },
    {
      id: 3,
      title: "How to Choose the Right Wig Care Products",
      excerpt: "A comprehensive guide to selecting the best products for your artificial hair care needs.",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      author: "Michael Chen",
      date: "March 5, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Hair Care Blog</h1>
        
        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1560869713-7d9646e857e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Featured post"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>March 20, 2024</span>
                <span className="mx-2">•</span>
                <User className="w-4 h-4 mr-2" />
                <span>Jessica Williams</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">The Evolution of Artificial Hair Care</h2>
              <p className="text-gray-600 mb-6">
                Explore the fascinating journey of artificial hair care technology and how modern techniques are revolutionizing the industry.
              </p>
              <button className="flex items-center text-pink-600 hover:text-pink-700 font-semibold">
                Read More <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="flex items-center text-pink-600 hover:text-pink-700 font-semibold">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}