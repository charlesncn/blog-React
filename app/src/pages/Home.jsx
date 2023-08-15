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
      img: "https://3.bp.blogspot.com/-dB6ndKqIAuI/XdWeOASO5AI/AAAAAAAANZA/MSbT9mh6bukxkI-tqnu_GARIZZV5WNVhQCLcBGAsYHQ/s1600/image1.gif",
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
      img: "https://www.elluminatiinc.com/wp-content/uploads/2020/07/blog/androidappdevelopmenttools.png",
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
      img: "https://miro.medium.com/v2/resize:fit:1400/1*tNsfhcY2cq5GBpkhKetLqA.png",
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
      img: "https://www.multirecruit.com/wp-content/uploads/2022/05/mobiledevelopment-1.png",
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
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC2X0sIY_AGvgi6jD8Eh_u8rOdZXKA6PP18tnJdA6jQxR-n4bF6vsIVI2D4FTOnHAlqSY5hJShEjHcRQr7P8QM-YyP3sM3Su_KxFRdBXhg8WUIoXr74luWfFvtgYGJHWdDe_gPnwpCsLR4YhE0U88QcSqrYs3LLjp7dGqQul_pRoerJr__-mD8lUPA/s1600/Android-IO22AndroidDevRecap_Social.png",
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
      img: "https://1.bp.blogspot.com/-b1_n6tOHvWU/YKMssWEjo-I/AAAAAAAAQjk/vIJQsAPUpRQKxR44GoCbm3CtRgr8tVBKACLcBGAsYHQ/s0/Android_NewForDevelopers_1024x512_updated.png",
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
