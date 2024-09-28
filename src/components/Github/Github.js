import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()

    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/hiteshchoudhary')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className='text-center mx-20 bg-gray-600 text-white p-4 text-3xl h-200 w-100 '>
       <div className='inline-block '>  <img src={"https://media.licdn.com/dms/image/v2/D5603AQFlj-OLMac6cA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708192255231?e=1732752000&v=beta&t=3r4gI8byv4AXTqBbXv_4fmLVa8NNlO-q_PTzVHz4FzY"} alt="Git picture" width={200} /></div> 
    <div>Social media Accounts </div>
    <ul>
    
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/harsh81r"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                       @ Github
                                    </a>
                                </li>


                                <li className="mb-4">
                                    <a
                                        href="https://www.linkedin.com/in/harsh-khare-1a30412a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                       @ Linkedin
                                    </a>
                                </li>
                                     <li className="mb-4">
                                    <a
                                        href="https://github.com/harsh81r"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                       
                                    </a>
                                </li>




    </ul>
  
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}