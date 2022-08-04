import {useEffect, useState} from "react";
import './style.css';
import List from "../../components/home/List";
import PieDiagram from "../../components/home/PieDiagram";
import LineDiagram from "../../components/home/LineDiagram";
import AddNewPopUp from "../../components/home/AddNewPopUp";

const Home = () => {
    const [data, setData] = useState([]);
    const [popUp, setPopUp] = useState(false);

    function getData() {
        fetch('/api/get-data')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log('error', err))
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <h1>Expenses List And Diagrams</h1>
            {data.length ? (
                <>

                    <div className='listSection'>
                        <div className='listTopSection'>
                            <h2 className='diagramTitle'>Expenses List</h2>
                            <button
                                className='addBtn'
                                onClick={() => setPopUp(true)}
                            >Add New</button>
                        </div>
                        <List data={data} />
                    </div>


                    <div className="diagramsSection">

                        <PieDiagram data={data} />

                        <LineDiagram data={data} />

                    </div>

                    {popUp &&
                        <AddNewPopUp setPopUp={setPopUp} setData={setData} />
                        }

                </>
            ) : null}

        </div>
    );
}

export default Home;
