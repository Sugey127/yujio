import React, {useEffect, useState} from 'react'
import { GetStaticProps } from 'next'
import NavBar from  '../components/navbar/navbar'
import Link from 'next/link'
import Layout from '@components/layout/layout'
import fetch from 'isomorphic-unfetch'
import ProjectList from '@components/projectList/project_list'



export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(' http://localhost:3000/api/proyect')
  const { data: projectList}: TAPIProjectResponse = await response.json()

  return {
    props: {
      projectList,
    }
  }
}

const HomePage = ({ projectList }: {projectList: TProject[] }) => {
  return (
    <div>
      <ProjectList projects={projectList}/>
      <style jsx>
        {`
          section{
            text-align: center;
            margin-bottom: 2rem;
          }
        `}</style>
    </div>
  )
}

export default HomePage

// const index = () => {
//   const [proyectList, setProyectList] = useState<TProject[]>([])

//   useEffect(() => {
//     window
//       .fetch('/api/proyect')
//       .then((response) => response.json())
//       .then(({ data, length }) => {
//         setProyectList(data)
//       })
//   }, [])
//   return (
//     <div>
//       <h1>5 B</h1>
//       {
//         proyectList.map((proyect) => (
//           <div>{proyect.picture}</div>
//         ))
//       }
//     </div>
//   )
// }


//export default index