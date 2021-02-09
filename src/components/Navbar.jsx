import styled from 'styled-components'

const Nav = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    width:100%;
    overflow: auto;
    z-index: 1;
    text-decoration: none;
    // background-color: papayawhip;
`

const Left = styled.div`
    // background-color: gray;
    text-decoration: none;
    
`

const Right = styled.div`

`
const Link = styled.a`
    text-decoration: none;
    color: black;
`

const Navbar = () => {
    return (
        <>
            {/* <h3>Navbar</h3>    */}
            <Nav>
                <Left>
                    <Link href="http://">Yaltha Rullist</Link>
                </Left>
                <Right>
                    <Link href="http://">Home</Link>
                    <Link href="http://">About</Link>
                    <Link href="http://">Contact</Link>
                    <Link href="http://">Portfolios</Link>
                </Right>
            </Nav>
        </>
    )
}

export default Navbar

