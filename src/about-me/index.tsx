import '../index.css';
import portrait from '../assets/portrait.png';

const divSeparation = "border border-white lg:border-0";

function AboutMe() {
    return (
        <div className='bg-black text-white px-5 py-10 lg:px-25'>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-7-0 lg:space-x-15">

                <div className='px-15 lg:px-0 lg:flex lg:w-1/3 flex items-start'>
                    <img src={portrait} alt='portrait' className='bg-linear-to-br from-red-900 to-yellow-700
                    rounded-xl w-auto h-fit'/>
                </div>

                <div className='text-center lg:text-left 2/3'>
                    <div className='flex flex-col lg:justify-start mb-3 lg:mb-6'>
                        <p className='p-2 lg:px-0 font-extrabold text-lg lg:text-5xl'>
                            AERON JAMIL C. ROXAS
                        </p>
                        <p className='text-xs lg:text-sm'>Pasay City, Philippines</p>
                    </div>
                    
                    <div className='flex flex-col lg:flex-row px-5 lg:px-0 space-y-5 lg:space-y-3 lg:mb-5 lg:space-x-8'>

                        <div className={`lg:w-1/2 p-2 lg:p-0 rounded-xl ` + divSeparation}>
                            <p className='text-yellow-200 text-lg font-bold lg:text-3xl mb-2 lg:mb-4'>About Me</p>
                            <p className='text-gray-400 lg:px-0 text-sm text-justify'>
                                Growing up mostly in front of a screen, my fascination had always been in technology. The thought of typing things in my computer would create the very things people use often was mindblowing as a kid.
                                <br /><br />My love for programming first manifested on the 8th grade when I achieved the top spot in my HTML class. It bolstered further when my Senior High School had a robotics class in which I received a Special Award for Robotics in the entire batch.
                                <br /><br />Two diplomas from PUP later, after the trials and tribulations of an engineering degree, I find myself at the precipice of my fate, ready to take it on. Hoping to achieve great things for and with the industry of technology.
                            </p>
                        </div>

                        <div className={`lg:w-1/2 p-2 lg:p-0 rounded-xl ` + divSeparation}>
                            <p className='text-yellow-200 text-lg font-bold lg:text-3xl mb-2 lg:mb-4'>Education</p>
                            <div className='text-center lg:text-left'>
                                <p className='font-normal lg:text-xl'>Polytechnic University of the Philippines</p>
                                <p className='text-xs lg:text-sm text-gray-400'>BS in Computer Engineering (Graduating: March 2026)</p>
                                <p className='text-xs lg:text-sm text-gray-400'>Diploma in Computer Engineering Technology</p>
                                <p className='text-xs lg:text-sm text-gray-400 italic'>President's and Dean's Lister</p>
                                <p className='font-normal lg:text-xl mt-2 lg:mt-4'>St. Paul University Manila</p>
                                <p className='text-xs lg:text-sm text-gray-400'>SHS: Science, Technology, Engineering, and Mathematics</p>
                                <p className='text-xs lg:text-sm text-gray-400 italic'>Special Award for Robotics</p>

                            </div>
                        </div>

                    </div>
                    <div className="text-center lg:text-justify mt-6 lg:mt-2 flex flex-col lg:flex-row px-5 lg:px-0 space-y-5 lg:space-x-8">
                        
                        <div className={`lg:w-1/2 p-2 lg:p-0 rounded-xl ` + divSeparation}>
                            <p className='text-yellow-200 text-lg lg:text-3xl font-bold'>Leadership and Organizations</p>
                            <p className='font-normal lg:text-xl mt-2 lg:mt-4'>PUP Start Up 2025 (Academic)</p>
                            <p className='text-xs lg:text-sm text-gray-400 italic'>Overall Event Head</p>

                            <p className='font-normal lg:text-xl mt-2 lg:mt-4'>PUP Department of Computer Engineering</p>
                            <p className='text-xs lg:text-sm text-gray-400 italic'>Batch 2025 Vice President</p>

                            <p className='font-normal lg:text-xl mt-2 lg:mt-4'>PUP College of Engineering <span className='lg:hidden'>SC</span><span className='hidden lg:inline'>Student Council</span></p>
                            <p className='text-xs lg:text-sm text-gray-400 italic'>Committee Member</p>
                            <p className='text-xs lg:text-sm text-gray-400 italic'>Inclusivity, Diversity, and Safe Spaces</p>
                            
                            <p className='font-normal lg:text-xl mt-2 lg:mt-4'>CpE Fair 2024: Sector 7 (Extracurricular)</p>
                            <p className='text-xs lg:text-sm text-gray-400 italic'>Sector Head</p>
                            <p className='text-xs lg:text-sm text-gray-400 italic'>Overall Champion</p>

                        </div>

                        <div className={`lg:w-1/2 p-2 lg:p-0 rounded-xl ` + divSeparation}>
                            <p className='text-yellow-200 text-lg lg:text-3xl font-bold'>Professional Experience</p>
                            <p className='font-normal lg:text-xl mt-2 lg:mt-4'>Lexmeet Inc.</p>
                            <p className='text-xs lg:text-sm text-gray-400 italic'>Intern for Web App Development (2023)</p>

                            <p className='font-normal lg:text-xl mt-2 lg:mt-4'>VXI Global Solutions</p>
                            <p className='text-xs lg:text-sm text-gray-400 italic'>Account Associate for Mobility, Sales, and Services (2022-2023)</p>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default AboutMe;