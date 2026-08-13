import { useState } from "react";

const App = () => {

  const [title,setTitle] = useState('')
  const [details,setDetails] = useState('')
  const [task,setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task];
    copyTask.push({title,details});

    setTask(copyTask)
    console.log(copyTask);
    console.log('title','details')

    setTitle('')
    setDetails('')
  }
  const deleteNote = (idx) => {
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  return (
    <div className="min-h-screen bg-black text-white">
      <form onSubmit={(e) =>{
        submitHandler(e)
      }}  className="flex gap-4 lg:w-1/2    p-10 flex-col items-start">
       <h1 className="text-3xl font-bold">Add Notes</h1>

       
          <input type="text"
        placeholder="Enter Notes Heading"
        className="px-5 w-full py-2 border-2 outline-none rounded"
        value={title}
        onChange={(e)=> {
          setTitle(e.target.value)
        }}
        />
         <textarea type="text"
        placeholder="Write Details"
        className="px-5 w-full h-32 py-2 flex  items-start flex-row border-2 outline-none rounded"
       value={details}
       onChange={(e)=>{
        setDetails(e.target.value)
       }}
       />
        <button type="submit" className="bg-white w-1/2 text-black px-5 py-2 rounded">Add Note</button>

        
       
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
      <h1 className="text-4xl font-bold ">Recent Notes</h1>
      <div className="flex flex-wrap items-start gap-5 mt-6 h-full overflow-auto">
       {task.map(function(elem,idx){

        return <div key={idx} className="h-52 w-40 bg-cover rounded-xl text-black py-9 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
         <div>
          <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
          <p className="mt-4 leading-tight font-medium text-gray-500">{elem.details}</p>
          </div>
           <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
              </div>
          
       })}

        
      </div>
      </div>

    </div>
  )
}
export default App;
