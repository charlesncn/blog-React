import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const post = [
    {
      id: 1,
      title: "How to build a website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem"+
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum"+
        " dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor"+
        " sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet"+
        " consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem"+
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum"+
        " dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor"+
        " sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet"+
        " consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet "+
        "consectetur adipisicing elit. Quisquam, quod.",
      img: "https://img.freepik.com/free-vector/web-design-production-maintenance-websites-web-graphic-interface-design-responsive-website-software-engineering-development-colorful-icon_335657-2699.jpg?w=2000 ",
    },
    {
      id: 2,
      title: "Become an Adroid Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem"+
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum"+
        " dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor"+
        " sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet"+
        " consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem"+
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum"+
        " dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor",
      img: "https://dvokhk8ohqhd8.cloudfront.net/assets/engineering_types/android/hero_image-fc5b7ec3e1de4498f823edc8ed1d345d16e52de1c2b4be98d3fb26df086df117.svg",
    },
    {
      id: 3,
      title: "Become an Adroid Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem"+
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum"+
        " dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor"+
        " sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet"+
        " consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem"+
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum"+
        " dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor",
      img: "https://dvokhk8ohqhd8.cloudfront.net/assets/engineering_types/android/hero_image-fc5b7ec3e1de4498f823edc8ed1d345d16e52de1c2b4be98d3fb26df086df117.svg",
    },
    {
      id: 4,
      title: "Become an Adroid Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem"+
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum"+
        " dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor"+
        " sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet"+
        " consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem"+
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum"+
        " dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor",
      img: "https://dvokhk8ohqhd8.cloudfront.net/assets/engineering_types/android/hero_image-fc5b7ec3e1de4498f823edc8ed1d345d16e52de1c2b4be98d3fb26df086df117.svg",
    },
    {
      id: 5,
      title: "Become an Adroid Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem"+
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum"+
        " dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor"+
        " sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet"+
        " consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem"+
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum"+
        " dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor",
      img: "https://dvokhk8ohqhd8.cloudfront.net/assets/engineering_types/android/hero_image-fc5b7ec3e1de4498f823edc8ed1d345d16e52de1c2b4be98d3fb26df086df117.svg",
    },
    {
      id: 6,
      title: "Become an Adroid Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem"+
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum"+
        " dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor"+
        " sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet"+
        " consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem"+
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum"+
        " dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor",
      img: "https://dvokhk8ohqhd8.cloudfront.net/assets/engineering_types/android/hero_image-fc5b7ec3e1de4498f823edc8ed1d345d16e52de1c2b4be98d3fb26df086df117.svg",
    },
    {
      id: 7,
      title: "Become an Adroid Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem"+
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum"+
        " dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor"+
        " sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet"+
        " consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem"+
        "ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum"+
        " dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor",
      img: "https://dvokhk8ohqhd8.cloudfront.net/assets/engineering_types/android/hero_image-fc5b7ec3e1de4498f823edc8ed1d345d16e52de1c2b4be98d3fb26df086df117.svg",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {post.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post:${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <p>{post.description}</p>
              <Link className="readMore" to={`/post:${post.id}`}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
