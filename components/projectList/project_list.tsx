import React from "react";
import {Card} from "semantic-ui-react";
import Link from "next/link";
import Image from "next/image";

type ProectListProps={
    projects:TProject[]
}

const mapProjectToCard=(project:TProject[])=>
    project.map(({project_name, id, description,picture})=>(
        <Card
            as ="a"
            header={project_name}
            image={{children:<Image src={picture} width={333} height={333} alt='' /> }}
            meta={{
                children:<Card.Meta style={{color: 'dimgray'}}>{description}</Card.Meta>,
            }}
        />
    ))

    const ProjectList=({projects}:ProjectListProps)=>(
        <Card.Group itemsPerRow={3} stackable>
        {mapProjectToCard(projects)}
        </Card.Group>
    )

export default ProjectList