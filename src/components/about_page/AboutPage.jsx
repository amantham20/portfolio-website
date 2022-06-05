import React from 'react'
import Footer from '../footer/Footer'

import './about.css'




const fall2020 = [
  {
    id: 1,
    courseName: 'EGR 100 Intro to Engineering Design',
    credits : '2',
    Semester: 'Fall 2020',
    Projects: ['Mit App Inventor', 'Phone Case'],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Design', 'Engineering', 'Fundamentals'],
  },
  {
    id: 3,
    courseName: 'MTH 132 Calculus I',
    credits : '3',
    Semester: 'Fall 2020',
    Projects: [], //need to fill this
    Content: [], // need to fill this
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Math', 'Calculus', 'Engineering'],
  },
  {
    id: 4,
    courseName: 'PHY 183 Physics I Mechanics',
    credits : '4',
    Semester: 'Fall 2020',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Physics', 'Mechanics', 'Engineering'],
  },
  {
    id: 5,
    courseName: 'WRA 491 iOS Design Lab',
    credits : '3',
    Semester: 'Fall 2020',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['iOS', 'Design', 'Development', 'Swift', "Xcode", "entrepreneurship"],
  }]

const spring2021 = [
  {
    id: 1,
    courseName: 'CSE 232 Intro To Programming II',
    credits : '4',
    Semester: 'Spring 2021',
    Projects: ["Special Characters", "Bank Transactions Platform", "Crypto Trading"],
    Content: [], //fill this later
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["C++", "Computer Science", "Programming"],
  },
  {
    id: 2,
    courseName: 'ESHP 190 The Art of Starting',
    credits : '3',
    Semester: 'Spring 2021',
    Projects: [],// fill this
    Content: [],// fill this
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Entrepreneurship", "Business", "Startup"],
  },
  // {
  //   id: 3,
  //   courseName: 'IAH 202 Europe and the World',
  //   credits : '4',
  //   Semester: 'Spring 2021',
  //   Projects: [],
  //   tags: [],
  //   // probally remove this
  // },
  {
    id: 3,
    courseName: 'MTH 132 Calculus II',
    credits : '4',
    Semester: 'Spring 2021',
    Projects: [], // fill this
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Math", "Calculus", "Engineering"],
  }]

  const clubsFall2020 = [{
    id: 1,
    courseName: 'iOS Club',
    credits : 'Club',
    Semester: 'Spring 2021',
    Projects: [], // fill this
    Content: [], //fill this later
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["iOS", "Design", "Development", "Swift", "Xcode", "Apps"],
  }]

  const clubsSpring2021 = [{
    id: 1,
    courseName: 'Engineering Student Council',
    credits : 'Club',
    Semester: 'Spring 2021',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [],
  }]

  const fall2021 = [
  {
    id: 11,
    courseName: 'CAS 114 Creativity & Entrepreneurship',
    credits : '3',
    Semester: 'Fall 2021',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Creativity", "Entrepreneurship", "Business", "Startup"],
  },{
    id: 12,
    courseName: 'CSE 260 Discrete Structures',
    credits : '4',
    Semester: 'Fall 2021',
    Projects: [], // fill this
    Content: ["Set Theory"], //fill this later
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Discrete Structures", "Computer Science", "Programming", "Math"],
  },
  {
    id: 13,
    courseName: 'MTh 234 Calculus III (Multivariable)',
    credits : '4',
    Semester: 'Fall 2021',
    Projects: [], // fill this
    Content: [], //fill this later
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Math', 'Calculus', 'Engineering', 'Multivariable', 'Computer Science'],
  },
  {
    id: 14,
    courseName: 'MTH 299 Introduction to Formal Proofs(Transitions)',
    credits : '4',
    Semester: 'Fall 2021',
    Projects: [], // fill this
    Content: ["Set Theory"], //fill this later
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Math', 'Formal Proofs'],
  },{
    id: 15,
    courseName: 'MTH 314 Matrix Algebra',
    credits : '4',
    Semester: 'Fall 2021',
    Projects: [], // fill this
    Content: [], //fill this later
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Math', 'Linear Algebra', 'Computer Science', 'Pythion' ,'Math'],
  }]
  
  const workFall2021 =[{
    id: 16,
    courseName: 'ICER Institute for Cyber Enabled Research',
    credits : 'Work',
    Semester: 'Fall 2021',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Ruby', 'Front-end', 'git'],
  },{
    id: 17,
    courseName: 'ULA Undergraduate Learning Assistant MTH',
    credits : 'Work',
    Semester: 'Fall 2021',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Math', "Teaching Assistant"],
  }]

  const spring2022 = [
  {
    id: 18,
    courseName: 'CSE 320 Computer Organization and Architecture',
    credits : '3',
    Semester: 'Spring 2022',
    Projects: ['Game of Life in Assembly', 'Fractals in Assembly'],
    Content: ['Circuit Design', 'Microprocessor', 'Assembly Language', 'Computer Architecture'],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['ARM Assembly', 'Computer Architecture', 'Computer Science', 'Programming', 'Circuit Design'],
  },{
    id: 19,
    courseName: 'CSE 331 Data Structures and Algorithms',
    credits : '4',
    Semester: 'Spring 2022',
    Projects: [],// fill this
    Content: ['Linked Lists', 'Binary Trees', 'Trees', 'Graphs', 'Heaps', 'Hash Tables'], //fill this later
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Data Structures', 'Algorithms', 'Computer Science', 'Programming'],
  },{
    id: 20,
    courseName: 'MTH 235 Differential Equations',
    credits : '3',
    Semester: 'Spring 2022',
    Projects: [], // fill this
    Content: [], //fill this later
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Math', 'Differential Equations'],
  },{
    id: 21,
    courseName: 'MTH 310 Abstract Algebra',
    credits : '3',
    Semester: 'Spring 2022',
    Projects: [], // fill this
    Content: [], //fill this later
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Math', 'Abstract Algebra', 'Cryptography'],
  }]
  
  const fall2022 = [{
    id: 22,
    courseName: 'CMSE 201 Computational Modeling and Data Analysis I',
    credits : '4',
    Semester: 'Fall 2022',
    Projects: [], // fill this
    Content: [], //fill this later
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Data Analysis', 'Computer Science', 'Programming'],
  },{
    id: 23,
    courseName: 'CSE 300 Ethics in Computer Science',
    credits : '1',
    Semester: 'Fall 2022',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Ethics', 'Computer Science', 'Programming'],
  },{
    id: 24,
    courseName: 'CSE 325 Computer Systems',
    credits : '3',
    Semester: 'Fall 2022',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Computer Systems', 'Computer Science', 'Programming'], 
  },{
    id: 25,
    courseName: 'CSE 335 Software Design and Development',
    credits : '4',
    Semester: 'Fall 2022',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Software Development', 'Computer Science', 'Programming'],
  },{
    id: 26,
    courseName: 'MTH 310 Abstract Algebra',
    credits : '3',
    Semester: 'Fall 2022',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Math', 'Abstract Algebra', 'Cryptography'],

  },{
    id: 27,
    courseName: 'STT 351 Probability and Statistics',
    credits : '3',
    Semester: 'Fall 2022',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [],
  }]
  
  const spring2023 = [
    {
    id: 28,
    courseName: 'CMSE 202 Computational Modeling and Data Analysis II',
    credits : '4',
    Semester: 'Spring 2023',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Data Analysis', 'Computer Science', 'Programming'],
  },{
    id: 29,
    courseName: 'CSE 830 Design and Theory of Algorithms',
    credits : '3',
    Semester: 'Spring 2023',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Algorithms', 'Computer Science', 'Programming'],
  },{
    id: 30,
    courseName: 'CSE 860 Foundations of Computer Science',
    credits : '3',
    Semester: 'Spring 2023',
    Projects: [],
    Content: ['Finite Automata', 'Regular Expressions', 'Turing Machines', 'Compilers'],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Computer Science', 'Math', 'Theory of Computation'],
  },{
    id: 31,
    courseName: 'MTH 320 Analysis I',
    credits : '3',
    Semester: 'Spring 2023',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Math', 'Analysis I', 'Proofs'],
  }
];

const HighSchool = [
  {
    id: 1,
    courseName: 'AP Computer Science',
    credits : '4',
    Semester: '2019',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['AP', 'Computer Science', 'Programming'],
  }, {
    id: 2,
    courseName: 'AP Physics',
    credits : '4',
    Semester: '2019',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['AP', 'Physics'],
  }, {
    id: 3,
    courseName: 'AP Calculus',
    credits : '4',
    Semester: '2019',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Math', 'AP', 'Calculus'],
  }, {
    id: 4,
    courseName: 'Advanced Business',
    credits : '4',
    Semester: '2020',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Business'],
  }
]

const clubsHS = [
  {
    id: 1,
    courseName: 'Computer Science Club',
    credits : 'Club',
    Semester: '2018-2020',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Computer Science', 'Programming'],
  }, {
    id: 2,
    courseName: 'Electronics Club',
    credits : 'Club',
    Semester: '2016-2020',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Electronics'],
  }, {
    id: 3,
    courseName: 'FIRST Robotics Club 5509',
    credits : 'Club',
    Semester: '2016-2020',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Robotics'],
  },{
    id: 4,
    courseName: 'Business Professionals of America',
    credits : 'Club',
    Semester: '2020',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Business'],
  },{
    id: 5,
    courseName: 'Big Brothers and Big Sisters',
    credits : 'Club',
    Semester: '2017-2020',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [],
  }

]

const temp2 = [
  {
    name: "aman",
    age: "12",
    Parents: [
      {
        name: "Muralee",
        age: "14"
      }
      ,{
        name: "Kalpana",
        age: "13"
      },
      {
        name: "Jashwanth",
        age: "12"
      }
    ]
  },
  {
    name: "aman3",
    age: "12",
    Parents: [
      {
        name: "Muralee3",
        age: "14"
      }
      ,{
        name: "Kalpana3",
        age: "13"
      },
      {
        name: "Jashwanth3",
        age: "12"
      }
    ]
  }
]

const AboutPage = () => {
  return (
    <div>
      <section>
        <h1>About</h1>
      </section>
      <section className='container1'>

        {/* .container */}
        <h1>Education</h1>

        <h3 className="edu">Michigan State University</h3>
        <h2 className='dipolama'>Bachelor of Science in Computer Science and Mathematics</h2>
        
        <h5>2020-2024</h5>
        <h1 className='date'>Spring 2022</h1>


        {/* {
          temp2.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.name}</h3>
                <h3>{item.age}</h3>
                <h4>{item.Parents.map((item, index) => {
                  return (
                    <div key={index}>
                      <h5>{item.name}</h5>
                      <h5>{item.age}</h5>
                    </div>
                  )})}</h4>
              </div>

            )})
        } */}


        <div className="Courses">
        {
          spring2022.map((course, index) => {
            return (
              <div className='course' key={index}>
                <h3>{course.courseName}</h3>
                <h4 className='centre'>{course.credits} Credits | {course.Semester}</h4>
                {/* TODO: apply the same formating as above to all of the semesters*/}
                {/* TODO: rethink the design and other content */}
                {/*  TODO: Add more content*/}
                <div className='Projects'>
                  {course.Projects.map((y) => <div className='project'>{y}</div>)}
                </div>
                
                <div className='contents__course'>
                  {course.Content.map((y) => <div className='content__course'>{y}</div>)}
                </div>
                <h4 className='centre'>{course.Desc}</h4>
                <div className='tags__course'>
                  {course.tags.map((y) => <div className='tag__course'>#{y}</div>)}
                </div>
              </div>
            )}
            )
        }
        </div>

        <h1 className='date'>Fall 2021</h1>

        <div className="Courses">
        {
          fall2021.map((course, index) => {
            return (
              <div className='course' key={index}>
                <h3>{course.courseName}</h3>
                <h4 className='centre'>{course.credits} Credits</h4>
                <h4 className='centre'>{course.Semester}</h4>
                <div className='Projects'>
                  {course.Projects.map((y) => <div className='project'>{y}</div>)}
                </div>
                <div className='contents__course'>
                  {course.Content.map((y) => <div className='content__course'>{y}</div>)}
                </div>
                <h4 className='centre'>{course.Desc}</h4>
                <div className='tags__course'>
                  {course.tags.map((y) => <div className='tag__course'>#{y}</div>)}
                </div>
              </div>
            )}
            )
        }
        </div>

        <h1 className='date'>Spring 2021</h1>

        <div className="Courses">
        {
          spring2021.map((course, index) => {
            return (
              <div className='course' key={index}>
                <h3>{course.courseName}</h3>
                <h4 className='centre'>{course.credits} Credits</h4>
                <h4 className='centre'>{course.Semester}</h4>
                <div className='Projects'>
                  {course.Projects.map((y) => <div className='project'>{y}</div>)}
                </div>
                <div className='contents__course'>
                  {course.Content.map((y) => <div className='content__course'>{y}</div>)}
                </div>
                <h4 className='centre'>{course.Desc}</h4>
                <div className='tags__course'>
                  {course.tags.map((y) => <div className='tag__course'>#{y}</div>)}
                </div>
              </div>
            )}
            )
        }
        </div>

        <h1 className='date'>fall 2020</h1>

        <div className="Courses">
        {
          fall2020.map((course, index) => {
            return (
              <div className='course' key={index}>
                <h3>{course.courseName}</h3>
                <h4 className='centre'>{course.credits} Credits</h4>
                <h4 className='centre'>{course.Semester}</h4>
                <div className='Projects'>
                  {course.Projects.map((y) => <div className='project'>{y}</div>)}
                </div>
                <div className='contents__course'>
                  {course.Content.map((y) => <div className='content__course'>{y}</div>)}
                </div>
                <h4 className='centre'>{course.Desc}</h4>
                <div className='tags__course'>
                  {course.tags.map((y) => <div className='tag__course'>#{y}</div>)}
                </div>
              </div>
            )}
            )
        }
        </div>

        {/* {
          data2.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.id}</h3>
                <ul>
                      {item.details.map((y) => <li>{y}</li>)}
                </ul>
              </div>
            )
          })
        } */}



        {/* {
          data.map(({id, courseName, credits, Semester, Projects, tags}) => {
            return (
              <div className='course' key={id}>
                <h3>{courseName}</h3>
                <h4>{credits} Credits</h4>
                <h4>{Semester}</h4>
                <h4>{Projects}</h4>
                <h4>{tags}</h4>
              </div>)
          })  
        } */}
        
        {/* <h3 className='course'>2020</h3>
        <h4 className='course'>EGR 100 Intro to Engineering Design</h4>
        <h5>Fall</h5>
        <p className='cetre cdata'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aenean eu dolor justo. Quisque venenatis a lacus a fermentum. Quisque eget suscipit magna. 
        Integer ac ornare est, sed maximus neque. Etiam ullamcorper quam quis ipsum bibendum pharetra. 
        Morbi eget nisl id tellus elementum lobortis. </p> */}

        <br />
        <br />
        <br />
        <h3 className='edu'>Midland High School</h3>
        <h2>High School Diploma</h2>
        <h5>2016-2020</h5>

        <div className="Courses">
        {
          HighSchool.map((course, index) => {
            return (
              <div className='course' key={index}>
                <h3>{course.courseName}</h3>
                <h4 className='centre'>{course.credits} Credits</h4>
                <h4 className='centre'>{course.Semester}</h4>
                <div className='Projects'>
                  {course.Projects.map((y) => <div className='project'>{y}</div>)}
                </div>
                <div className='contents__course'>
                  {course.Content.map((y) => <div className='content__course'>{y}</div>)}
                </div>
                <h4 className='centre'>{course.Desc}</h4>
                <div className='tags__course'>
                  {course.tags.map((y) => <div className='tag__course'>#{y}</div>)}
                </div>
              </div>
            )}
            )
        }
        </div>
        {/* clubs */}

        <div className="Courses">
        {
          clubsHS.map((course, index) => {
            return (
              <div className='course' key={index}>
                <h3>{course.courseName}</h3>
                <h4 className='centre'>{course.credits} Credits</h4>
                <h4 className='centre'>{course.Semester}</h4>
                <div className='Projects'>
                  {course.Projects.map((y) => <div className='project'>{y}</div>)}
                </div>
                <div className='contents__course'>
                  {course.Content.map((y) => <div className='content__course'>{y}</div>)}
                </div>
                <h4 className='centre'>{course.Desc}</h4>
                <div className='tags__course'>
                  {course.tags.map((y) => <div className='tag__course'>#{y}</div>)}
                </div>
              </div>
            )}
            )
        }
        </div>



      </section>
      <Footer />
    </div>
  )
}

export default AboutPage