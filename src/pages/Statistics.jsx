import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import { amber } from '@mui/material/colors'; // Import the desired color

function Statistics() {
    const { userData } = useContext(UserContext);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const theme = useTheme();

    useEffect(() => {
        const getPolnilnice = async function () {
            const res = await fetch("http://52.174.127.46:3000/elektropolnilnice/");
            const data = await res.json();
            setData(data);
            setIsLoading(false);
        }

        getPolnilnice().then();
    }, []);

    if (isLoading) {
        return (
            <div>
                <AppBar />
                <div className="flex justify-center items-center min-h-screen">
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            </div>
        );
    }

    const years = Array.from(new Set(data.map(item => new Date(item.dateCreated).getFullYear()))).sort((a, b) => a - b);
    const counts = years.map(year => data.filter(item => new Date(item.dateCreated).getFullYear() === year).length);

    const customTheme = createTheme({
        typography: {
            fontFamily: 'Inter, sans-serif', // Set the font to Inter, matching DaisyUI
        },
        palette: {
            text: {
                primary: '#ffffff', // Set the text color to white
            },
            primary: {
                main: amber[500], // Set the primary color
            },
        },
        components: {
            MuiChart: {
                styleOverrides: {
                    axis: {
                        '& .MuiAxis-root .MuiAxis-tick text': {
                            fill: '#ffffff', // Set the tick color to white
                            fontFamily: 'Inter, sans-serif', // Set font to Inter
                        },
                        '& .MuiAxis-root .MuiAxis-line': {
                            stroke: '#ffffff', // Set the axis line color to white
                        },
                        '& .MuiAxis-root .MuiAxis-label': {
                            fill: '#ffffff', // Set the axis label color to white
                            fontFamily: 'Inter, sans-serif', // Set font to Inter
                        },
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={customTheme}>
            <div className="mx-auto bg-neutral">
                <AppBar />
                <div className="container mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="card bg-base-100 shadow-xl my-8">
                            <div className="card-body">
                                <h2 className="card-title">Number of new Charging Stations by Year</h2>
                                <hr className={"hr-gradient"}/>
                                <div className="flex justify-center">
                                    <BarChart
                                        xAxis={[
                                            {
                                                id: 'barCategories',
                                                data: years,
                                                scaleType: 'band',
                                                label: 'Year',
                                                tickLineStyle: { stroke: 'white' },
                                                labelStyle: { fill: 'white' },
                                            },
                                        ]}
                                        yAxis={[
                                            {
                                                id: 'yAxis',
                                                label: 'Count',
                                                tickLineStyle: { stroke: 'white' },
                                                labelStyle: { fill: 'white' },
                                            },
                                        ]}
                                        series={[
                                            {
                                                data: counts,
                                                label: 'Number of new Charging Stations',
                                                color: theme.palette.primary.main, // Set the color of the bars
                                                tooltip: (params) => `Year: ${years[params.index]}, Count: ${counts[params.index]}`, // Set the tooltip to display the year and count
                                            },
                                        ]}
                                        width={500}
                                        height={300}
                                        sx={{
                                            '& .MuiAxis-root .MuiAxis-tick text': {
                                                fill: 'white',
                                                fontFamily: 'Inter, sans-serif',
                                            },
                                            '& .MuiAxis-root .MuiAxis-line': {
                                                stroke: 'white',
                                            },
                                            '& .MuiAxis-root .MuiAxis-label': {
                                                fill: 'white',
                                                fontFamily: 'Inter, sans-serif',
                                            },
                                            '& .MuiChart-root text': {
                                                fontFamily: 'Inter, sans-serif', // Apply Inter font to the whole chart
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-xs">
                            <thead>
                            <tr>
                                <th>Number</th>
                                <th>UUID</th>
                                <th>Address ID</th>
                                <th>Number of comments</th>
                                <th>Number of connections</th>
                                <th>Created</th>
                                <th>Last verified</th>
                                <th>Status</th>
                                <th>Cost</th>
                                <th>Type</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((item, index) => (
                                <tr key={item._id} className="hover">
                                    <td>{index + 1}</td>
                                    <td>{item.UUID}</td>
                                    <td>{item.address}</td>
                                    <td>{item.comments !== "null" ? item.comments : "No comments"}</td>
                                    <td>{item.connections.length}</td>
                                    <td>{new Date(item.dateCreated).toLocaleDateString()}</td>
                                    <td>{new Date(item.dateLastVerified).toLocaleDateString()}</td>
                                    <td>{item.status}</td>
                                    <td>{item.usageCost !== "null" ? item.usageCost : "/"}</td>
                                    <td>{item.usageType}</td>
                                </tr>
                            ))}
                            </tbody>
                            <tfoot>
                            <tr>
                                <th>Number</th>
                                <th>UUID</th>
                                <th>Address ID</th>
                                <th>Number of comments</th>
                                <th>Number of connections</th>
                                <th>Created</th>
                                <th>Last verified</th>
                                <th>Status</th>
                                <th>Cost</th>
                                <th>Type</th>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <br />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default Statistics;
