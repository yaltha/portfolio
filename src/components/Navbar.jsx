import styled from 'styled-components'

const Nav = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    overflow: auto;
    z-index: 1;
    text-decoration: none;
    // background-color: papayawhip;
    background-color: #1E3C72;
    // padding: 40px 0;
`

const Left = styled.div`
    // background-color: gray;
    padding-left: 40px;
`

const Right = styled.div`
    padding-right: 40px;
`
const Link = styled.a`
    text-decoration: none;
    color: #fff;
    margin: 0 30px;
    font-size: 1em;
    font-weight: bold;
`
const Button = styled.button`
    padding: .5em 1em;
    margin: 1em;
    border-radius: 3px;
    border: none;
    background-color: #d72323;
    color: white;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;
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
                    <Button href="http://">Portfolios</Button>
                </Right>
            </Nav>
        </>
    )
}

export default Navbar

