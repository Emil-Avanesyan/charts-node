import LineChart from "react-linechart";

const LineDiagram = ({data}) => {

    const LinesData = data.map((line, idx) => {
        return {x: line.date, y: line.amount}
    })


    return (
        <div className='lineDiagramSection'>
            <h2 className='diagramTitle'>Expenses by Months</h2>
            <LineChart
                className='lineDiagram'
                width={680}
                height={500}
                xLabel='Months'
                yLabel='Amount'
                yMin='0'
                isDate={true}
                data={[
                    {
                        color: "steelblue",
                        points: LinesData
                    }
                ]}
            />
        </div>

    );
}

export default LineDiagram;
