const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content = [
    { name: part1, count: exercises1 },
    { name: part2, count: exercises2 },
    { name: part3, count: exercises3 },
  ]

  return (
    <div>
      <Header course={course}></Header>
      <Content content={content}></Content>
      <Total total={content.reduce((a,b) => a + b.count, 0)}></Total>
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
    {props.content.map((exercise, id) => {
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
  return <p>{props.exercise.name} {props.exercise.count}</p>
}

export default App