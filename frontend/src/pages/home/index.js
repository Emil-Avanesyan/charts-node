import {useEffect, useState} from "react";
import {PieChart} from 'react-minimal-pie-chart';
import LineChart from 'react-linechart';
import './style.css';

const Home = () => {
    const [data, setData] = useState([]);

    function getData() {
        fetch('/api/get-data')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log('error', err))
    }

    useEffect(() => {
        getData()
    }, [])


    const PiesData = data.length && data.map((line, idx) => {
        return {title: line.type, value: line.amount, color: line.color}
    })

    const LinesData = data.length && data.map((line, idx) => {
        return {x: line.date, y: line.amount}
    })

    useEffect(() => {
        fetch('/api').then(res => res.json()).then(result => console.log(result))
    }, [])

    return (
        <div>
            <h1>Home</h1>
            {data.length ? (
                <>
                    <table>
                        <thead>
                        <tr>
                            {Object.keys(data[0]).map((key, idx) => {
                                return (
                                    <th key={idx}>{key}</th>
                                )
                            })}
                        </tr>
                        </thead>

                        <tbody>
                        {data.map((line, idx) => {
                            return (
                                <tr key={idx}>
                                    {
                                        Object.values(line).map((item, index) => {
                                            return (
                                                <td key={index}>{item}</td>
                                            )
                                        })}
                                </tr>

                            )

                        })}

                        </tbody>
                    </table>

                    <div className="diagramsSection">
                        <PieChart
                            className='pieDiagram'
                            data={PiesData}
                        />

                        <LineChart
                            className='lineDiagram'
                            width={600}
                            height={400}
                            xLabel='Months'
                            yLabel='Amount'
                            xMax={12}
                            data={[
                                {
                                    color: "steelblue",
                                    points: LinesData
                                }
                            ]}
                        />
                    </div>

                </>
            ) : null}

        </div>
    );
}

export default Home;
