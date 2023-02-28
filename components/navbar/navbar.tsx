import Link from "next/link"
import React from 'react'
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";
import Container from "semantic-ui-react/dist/commonjs/elements/Container";

const navbar = () => {
    return (
        <nav>
            <Menu
                size='large'
            >
                <Container>
                    <Menu.Item as='a' active>
                        Home
                    </Menu.Item>
                    <Menu.Item as='a'>Work</Menu.Item>
                    <Menu.Item as='a'>Company</Menu.Item>
                    <Menu.Item as='a'>Careers</Menu.Item>
                    <Menu.Item position='right'>
                    </Menu.Item>
                </Container>
            </Menu>
        </nav>
    )
}
 export default navbar