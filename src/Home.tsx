import "./index.css";

function Home() {
  return (
    <div className="w-screen">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="bg-black w-100% triangle-cut relative lg:pt-30 lg:pb-70 pt-15 pb-35 ">
        <div className="grid">
          <div className="lg:mx-25 mx-10 p-3">
            <h1 className="text-xl lg:text-4xl text-justified margin font-bold">
              <span className="text-yellow-200">Hello, I'm Aeron Jamil Roxas</span>
            </h1>
            <h1 className="text-3xl lg:text-7xl text-justified margin font-bold mt-4 lg:mt-7">
              <span className="text-white">SOFTWARE DEVELOPER</span>
            </h1>

            <p className="text-gray-400 text-justify mt-4 lg:mt-7 lg:w-150 w-100">
              I am an upcoming BS Computer Engineering graduate from PUP, striving to contribute in software development roles.
              In university, I had with projects that honed and challenged my programming skills that exposed me to trying out different languages and techniques.
              I also have a leadership background in both academic and extra-curricular activities which made me a great communicator and problem solver.
            </p>
          </div>
          <div className="bg-yellow-200 text-center w-35 lg:ml-28 lg:mt-6 ml-13 mt-3 rounded-xs px-1 py-2">
            <span className="font-normal">Contact Me</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 h-screen pt-70 pb-50 -mt-50">
        <div className="mx-25 p-3">
          <h2 className="text-2xl text-center text-white font-extrabold text-bold">SOMETHING</h2>
        </div>

      </div>
    </div>
  )
}

export default Home
