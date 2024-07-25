import Background from '../assets/library.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
    >
        <div className='flex place-items-start mt-5 h-screen'>
            <h3 className='font-sans text-3xl p-6 px-32 bg-yellow-900 bg-opacity-50 text-black rounded'>Library Database</h3>

        </div>
    </div>
  )
}

export default Home
