import "./index.css";

function App() {
  return (
    <div>
      <div className="bg-black pt-30 pb-70 triangle-cut relative">
        <div className="grid">
          <div className="mx-25 p-3">
            <h1 className="text-4xl text-justified margin font-bold">
              <span className="text-yellow-200">Hello, I'm Aeron Jamil Roxas</span>
            </h1>
            <h1 className="text-7xl text-justified margin font-bold mt-7">
              <span className="text-white">SOFTWARE DEVELOPER</span>
            </h1>

            <p className="text-gray-400 text-justify mt-7 w-150">
              I am an upcoming BS Computer Engineering graduate from PUP, striving to contribute in software development roles.
              In university, I had with projects that honed and challenged my programming skills that exposed me to trying out different languages and techniques.
              I also have a leadership background in both academic and extra-curricular activities which made me a great communicator and problem solver.
            </p>
          </div>
          <div className="bg-yellow-200 text-center w-35 ml-28 mt-6 rounded-xs px-1 py-2">
            <span className="font-normal">Contact Me</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 pt-70 pb-50 -mt-50">
        <div className="bg-white mx-25 p-3">
          <h2 className="text-2xl text-bold">SOMETHING</h2>
        </div>

      </div>
    </div>
  )
}

export default App
