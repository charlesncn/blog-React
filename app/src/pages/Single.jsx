import React from "react";

const Single = () => {
  const post = [
    {
      id: 1,
      title: "How to build a website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://img.freepik.com/free-vector/web-design-production-maintenance-websites-web-graphic-interface-design-responsive-website-software-engineering-development-colorful-icon_335657-2699.jpg?w=2000",
      userIcon:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      username: "John Doe",
    },
  ];
  return (
    <div className="post-cotainer">
      {post.map(post => (
        <div className="single-post" key={post.id}>
          <div className="content">
            <img src={post.img} alt="" />
            <div className="user">
              <img src={post.userIcon} alt="" />
              <div className="info">
                <span>{post.username}</span>
                <p>posted 11 hrs ago.</p>
              </div>
            </div>
          </div>
          <div className="menu"></div>
        </div>
      ))}
    </div>
  );
};

export default Single;
