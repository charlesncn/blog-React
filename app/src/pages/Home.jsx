import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const post = [
    {
      id:1,
      title: 'How to build a website',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      img: 'https://img.freepik.com/free-vector/web-design-production-maintenance-websites-web-graphic-interface-design-responsive-website-software-engineering-development-colorful-icon_335657-2699.jpg?w=2000 ',
    },
    {
      id:2,
      title: 'How to build a website',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      img: 'https://i2.wp.com/edulogy.pk/wp-content/uploads/2021/10/designing.jpg?fit=626%2C417&ssl=1',
    }
  ]
  return (
    <div className='home'>
      <div className="posts">
        {post.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post:${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <p>{post.description}</p>
              <Link className='readMore' to={`/post:${post.id}`}>Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home