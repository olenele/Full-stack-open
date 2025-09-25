const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
 const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
   const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = [
    part1, 
    part2, 
    part3
  ]

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total total={parts.reduce((a,b) => a + b.exercises, 0)}></Total>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
    {props.parts.map((exercise, id) => {
      return <Part key={id} exercise={exercise}/>
    })}
    </>
  )

}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const Part = (props) => {
  return <p>{props.exercise.name} {props.exercise.exercises}</p>
}

export default App