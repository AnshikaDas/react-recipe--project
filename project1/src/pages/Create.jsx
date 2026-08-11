import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext';

const Create = () => {
    const {data, setdata } = useContext(recipecontext);
    const {register, handleSubmit ,reset} = useForm();

    const SubmitHandler =(recipe) => {
        console.log(recipe);
        recipe.id= nanoid()
    
    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    reset();
    }
  return (
    
   <form onSubmit = {handleSubmit(SubmitHandler)}>
    <input 
    className='block border-b outline-0 p-2'
    {...register('image')}
    type='url'
    placeholder='Enter image url'
    />
    <small className='text-red-400'>
        This is how error is shown
    </small>
    <input 
    className='block border-b outline-0 p-2'
    {...register('title')}
    type='text'
    placeholder='Recipe Title'
    />
     <small className='text-red-400'>
        This is how error is shown
    </small>
    <textarea
    className='block border-b outline-0 p-2'
    {...register('description')}
    type='text'
    placeholder='//start from here'
    ></textarea>
     <small className='text-red-400'>
        This is how error is shown
    </small>
    <textarea
    className='block border-b outline-0 p-2'
    {...register('ingredients')}
    type='text'
    placeholder='//write ingredients separated by comma'
    ></textarea>
     
    <textarea
    className='block border-b outline-0 p-2'
    {...register('instructions')}
    type='text'
    placeholder='//write instructions separated by comma'
    ></textarea>
   <select
    className='block border-b outline-0 p-2'
    {...register('categories')}
    type='text'
   
    >
        <option value="cat-1">Category 1</option>
        <option value="cat-2">Category 1</option>
        <option value="cat-3">Category 1</option>
        </select> 
     
    <button className='mt-5 block bg-gray-700 px-4 py-2 rounded'></button>
   </form>
   
  )
}

export default Create