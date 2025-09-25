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
      <Header course={course}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((exercise, id) => {
        return <Part key={id} exercise={exercise} />
      })}
    </>
  )

}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.reduce((a, b) => a + b.exercises, 0)}</p>
  )
}

const Part = (props) => {
  return <p>{props.exercise.name} {props.exercise.exercises}</p>
}

export default App