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

<div className='flex flex-col' > 
  here is the list of your urls
<div className='flex flex-col' >
  <div>All long urls</div>
</div>
<div className=''>
<div>Shortened Urls</div>
</div>
</div>

    </div>
  )
}

export default HomePage