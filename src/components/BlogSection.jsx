import React from 'react';
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import blog3 from '../images/blog3.png'

const blogs = [
  {
    date: '23 Nov 2022',
    author: 'Amanda Hugh',
    title: 'What Makes an Authentic Employee Profile?',
    description: "I'm totally unconvinced that two people can find a person they haven't known previously...",
    image:blog1,
  },
  {
    date: '15 Nov 2022',
    author: 'Sofía Kent',
    title: 'Why Does It Matter to be Authentic Employee?',
    description: "I'm totally unconvinced that two people can find a person they haven't known previously...",
    image:blog2,
  },
  {
    date: '23 Sep 2022',
    author: 'Jason Bone',
    title: 'What Makes an Authentic Employee Profile?',
    description: "I'm totally unconvinced that two people can find a person they haven't known previously...",
    image: blog3,
  },
];

function BlogSection() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl  md:mx-28">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Whats new on <span className="text-blue-600">Trustco.</span>?
          </h2>
          <a href="#" className="text-blue-600 hover:underline flex items-center">
            See All <span className="ml-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>{blog.date}</strong>, by {blog.author}
                </p>
                <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center">
                  Read Story <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
