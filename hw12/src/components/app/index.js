import React from "react";
import ResponsiveAppBar from '../responsiveappbar';
import ComplexGrid from '../complexgrid';
import Container from '@mui/material/Container';
import ActionAreaCard from '../actionareacard';
import ProductStatistic from "../productstatistic";
import ScreenProducts from "../screenproducts";
import GetStarted from "../getstarted";
import Footer from "../footer";
import "./app.css"

function App() {
    return (
        <>
            <Container maxWidth="xl" sx={{bgcolor: 'rgb(60 100 177 / 6%)'}}>
                <ResponsiveAppBar />
                <ComplexGrid />
            </Container>
            <Container maxWidth="xl" sx={{bgcolor: 'white'}}>
                <ActionAreaCard />
                <ProductStatistic />
                <ScreenProducts />
            </Container>
            <Container maxWidth="xl" sx={{bgcolor: 'rgb(60 100 177 / 6%)'}}>
                <GetStarted/>
            </Container>
            <Container maxWidth="xl" sx={{bgcolor: '#373F41'}}>
                <Footer/>
            </Container>
        </>
    )
}
export default App;