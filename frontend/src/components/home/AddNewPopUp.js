import {useState} from "react";
const AddNewPopUp = ({setPopUp, setData}) => {


    const [values, setValues] = useState({
        date: new Date().toISOString().split('T')[0],
        name: '',
        type: '',
        amount: 0
    })

    const disabledBtn = !Object.values(values).every(item => item)

    const handleOutsideClick = (e) => {
        e.target.firstChild?.classList ? e.target.firstChild.classList.add("hidePopUp")
                : e.target.parentNode.classList.add("hidePopUp")

        setTimeout(() => {
            setPopUp(false);
        }, 100)
    }

    const handleOnChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/add-expense', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(res => res.json())
            .then(data => {
                setData(data);
                setPopUp(false);
            })
    }

    return (
        <div className='popUpShadow' onClick={handleOutsideClick}>
            <div className='popUp' onClick={(e) => e.stopPropagation()}>
                <button className='xBtn' onClick={handleOutsideClick}>X</button>
                <h2 className='popUpTitle'>Add A New Expense</h2>
                <form className='addForm' onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='Name' onChange={handleOnChange}/>
                    <input type='text' name='type' placeholder='Expense Type' onChange={handleOnChange} />
                    <input type='number' name='amount' placeholder='Amount' min={0} onChange={handleOnChange}/>
                    <input type='date' name='date' value={values.date} onChange={handleOnChange}/>
                    <button
                        type='submit'
                        className={`addBtn ${disabledBtn ? 'disabledBtn' : ''}`}
                        disabled={disabledBtn}
                    >Add Expense</button>
                </form>

            </div>
        </div>


    );
}

export default AddNewPopUp;
