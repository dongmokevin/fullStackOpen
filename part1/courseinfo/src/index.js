import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => (
  <h1>{course}</h1>
)

const Part = ({part, exercise}) => (
  <p>{part} {exercise}</p>
)

const Content = ({course}) => (
    <div>
      <Part part={course.parts[0].name} exercise={course.parts[0].exercises}/>
      <Part part={course.parts[1].name} exercise={course.parts[1].exercises}/>
      <Part part={course.parts[2].name} exercise={course.parts[2].exercises}/>
    </div>
  )

const Footer = ({course}) => (
  <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
)


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content course={course}/>
      <Footer course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))