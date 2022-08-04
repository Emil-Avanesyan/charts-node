
const List = ({data}) => {

    return (
        <table className='list'>
            <thead>
            <tr>
                {Object.keys(data[0]).map((key, idx) => {
                    return (
                        <th key={idx}>{key[0].toUpperCase() + key.substring(1)}</th>
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
    );
}

export default List;
