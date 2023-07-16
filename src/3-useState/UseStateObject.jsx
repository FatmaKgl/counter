import { useState } from "react"
const UseStateObject = () => {
    const [name, setName] = useState("Ahmet Can")
    const [age, setAge] = useState(30)
    const [salary, setSalary] = useState(50000)

    

    return(
    
        <div>
            <h1>Use State Object</h1>
            <h2>Name:{name}</h2>
            <h2>Age:{age}</h2>
            <h2>salary:{salary}</h2> 


<button onClick={() => setName("Mehmet Kan")}>Change Name</button>
<button onClick={() => setAge(age + 1)}>inc age</button>
<button on onClick={() => setSalary(salary + 10000)}>inc salary</button>

        </div>
    )
}
export default UseStateObject