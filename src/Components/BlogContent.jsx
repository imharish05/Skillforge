import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../App'
const BlogContent = () => {


   let {id} =  useParams()

   let {blogContent} = useContext(UserContext)

   let blogItem = blogContent.filter((item)=> item.route === id)


  return (
    <div className='BlogContent container-fluid'>
      {blogItem.map((item)=>{
        return(
          <div className="container">
            <div className="wrapper d-flex flex-column align-items-center justify-content-around py-5">
            <p className="h1 pb-5 text-center">{item.heading}</p>
            <img src={item.img} alt="" className='img-fluid rounded-4'/>
            <p className='py-4 px-md-5'>{item.intro}</p>

            <p className="h3 pb-3 text-center">{item.question}</p>

            <p className='px-md-5'>{item.para}</p>

            <p className="h3 py-3 text-center">{item.tagline}</p>
            <ul className='align-self-start px-md-5'>
            <li className='text-muted'>{item.uses1}</li>
            <li className='text-muted'>{item.uses2}</li>
            <li className='text-muted'>{item.uses3}</li>

            
            </ul>
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default BlogContent