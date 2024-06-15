// src/NewsPost.js
import React from "react";

const newsPosts = [
  {
    title: "Mover of Movers Contest – Which Finalist Will Win $25,000?",
    date: "26 Apr 2024",
    category: "News",
    author: "Savira",
    imgSrc:
      "https://img.freepik.com/premium-photo/family-satisfied-by-quick-delivery-unpacking-order-from-online-shops-happy-family-opens-rec_136615-886.jpg",
  },
  {
    title: "Borneo Wins 2023 Fleet Safety Award",
    date: "26 Apr 2024",
    category: "Insights",
    author: "Savira",
    imgSrc:
      "https://flexshopper-assets.s3.amazonaws.com/marketing-images/landing-page/how-it-works/image-shipping.png",
  },
  {
    title:
      "Dodge Moving and Storage Receives Borneo Transit’s 2023 Move For Hunger Award",
    date: "26 Apr 2024",
    category: "News",
    author: "Savira",
    imgSrc:
      "https://static.wixstatic.com/media/ea4c4f_d7f3511c949b48a5995889f4782d5fc4~mv2.jpg/v1/crop/x_0,y_0,w_2529,h_2002/fill/w_323,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Delivery_edited.jpg",
  },
];

const NewsPost = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <div className="mt-8 w-full max-w-7xl mx-auto">
        <header className="w-full text-center">
          <h1 className="text-3xl font-bold">News Post</h1>
        </header>
        <h2 className="text-2xl font-semibold mb-6">Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsPosts.map((post, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={post.imgSrc}
                alt={post.title}
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm">{post.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPost;
