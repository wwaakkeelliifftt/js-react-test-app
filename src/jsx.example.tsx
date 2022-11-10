import React, {useState, createElement as draw} from 'react';

function App() {
  const [count, setCount] = useState(0)

  return draw('div', {className: 'font-thin'}, [
    draw('h3', {className: '', key: 34}, 'title JSX'),
    draw('p', {className: 'float:right', key: 42}, [
      draw('button', {
        className: 'mx-4 py-2 px-2 border font-bold',
        key: 12,
        onClick: () => {
          setCount(count + 1)
          alert('polundra. alert \ncount = ' + count)
        }}, 'Click me'),
      draw('h5', null, 'current click count is ' + count)
    ])
  ])
}

export default App;
