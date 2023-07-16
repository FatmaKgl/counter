const Events = () => {
    let message = "EVENTS"
    const handleclick = (e) => {
        alert("Hi")
        console.log(e);
    }
    const handleChange = (e) => {
        console.log(e.target.name);
        message = "STATE"
    }
    return <div>
        <h1>{message}</h1>
        <button onClick={handleclick}>Click</button>
        <button onClick={() => handleclick}>Save</button>
        <button onClick={handleclick}>Change</button>
    </div>
}
export default Events 