import React from 'react'

const HomePage = () => {


  const handleSubmit = ( e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
  }

  return (
    <div className='w-full h-full flex-justify-center items-center' >
      <h1>Enter Url to shorten </h1>
<form onSubmit={handleSubmit}>
  <input type="text" name='longUrl'  id='longUrl'  />
  <button type='submit' >Make it Tiny</button>
</form>

<div>
  here is the list of your urls
  
</div>

    </div>
  )
}

export default HomePage