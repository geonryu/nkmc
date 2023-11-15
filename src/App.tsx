import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Company from './pages/company/about';
import Location from './pages/company/location';
import Home from './pages/home';
import Layout from './routes/layout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path:"", 
                element: <Home />
            },
            {
                path: "/company",
                children: [
                    {
                        path: "/company/about",
                        element: <Company />
                    },
                    {
                        path: "/company/location",
                        element: <Location />
                    }
                ]
            }
        ]
    },
]);

const GlobalStyles = createGlobalStyle`
    *, :after, :before, ::after, ::before {box-sizing:border-box}
    * {margin:0; padding: 0; background-repeat: no-repeat; background-size: cover; background-position: center center;}
    body, html {height:100%; font-family: 'Pretendard'; font-weight: 400;}
    body {-webkit-font-smoothing:antialiased; line-height:1.5}
    canvas, img, picture, svg, video {display:block;max-width:100%}
    button, input, select, textarea {font:inherit; border: 0; background-color: transparent;}
    button{cursor: pointer;}
    h1, h2, h3, h4, h5, h6, p {overflow-wrap:break-word}
    #__next, #root {isolation:isolate}
    ul,ol{list-style: none;}
    a{text-decoration: none; color: inherit;}
    img{vertical-align: top; max-width: 100%;}
    textarea{resize: none;}
    select, option{appearance: none;}
`
const Wrapper = styled.div`
`;

function App() {
    // const [count, setCount] = useState(0)
    
    return (
        <Wrapper>
            <GlobalStyles />
            <RouterProvider router={router}/>
        </Wrapper>
    )
}

export default App
