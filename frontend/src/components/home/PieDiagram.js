import {PieChart} from "react-minimal-pie-chart";

const PieDiagram = ({data}) => {

    const PiesData = data.map((line, idx) => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        return {title: line.type, value: +line.amount, color: randomColor}
    })

    return (
        <div className='pieDiagramSection'>
            <h2 className='diagramTitle'>Expense Type</h2>
            <PieChart
                className='pieDiagram'
                data={PiesData}
                labelStyle={{
                    fill: 'white',
                    fontSize: '10px'
                }}
                label={({ x, y, dx, dy, dataEntry }) => (
                    <text
                        key={dataEntry.value}
                        x={x}
                        y={y}
                        dx={dx}
                        dy={dy}
                        dominant-baseline="central"
                        text-anchor="middle"
                        style={{
                            fill: '#fff', pointerEvents: 'none', fontSize: '3px'
                        }}>
                        <tspan x={x} y={y} dx={dx} dy={dy}>{dataEntry.title}</tspan>
                        <tspan x={x} y={y+5} dx={dx} dy={dy}>{`${Math.round(dataEntry.percentage)}%`}</tspan>
                    </text>
                )}
            />

        </div>

    );
}

export default PieDiagram;
