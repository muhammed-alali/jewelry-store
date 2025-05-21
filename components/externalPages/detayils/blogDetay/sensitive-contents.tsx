export default function BlogSensitiveContents() {
  const popularPosts = [
    {
      title: "Unlocking the Market: Trends and Insights",
      date: "Mar 18, 2028",
      imageUrl: "/photo/house-1.jpg",
    },
    {
      title: "Buyer's Blueprint: Navigating Home Ownership",
      date: "Mar 18, 2028",
      imageUrl: "/photo/house-2.jpg",
    },
    {
      title: "Market Maven: News and Views in Real Estate",
      date: "Mar 18, 2028",
      imageUrl: "/photo/house-3.jpg",
    },
  ];

  return (
    <>
      <div className="  rounded-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">Sensitive Contents</h2>
        {popularPosts.map((post, index) => (
          <div key={index} className="flex items-start mb-4">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-16 h-16 rounded-md mr-4"
            />
            <div>
              <h3 className="text-[16px] cursor-pointer font-medium hover:text-SiteColor duration-300">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
