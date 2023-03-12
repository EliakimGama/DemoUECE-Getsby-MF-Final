import React from 'react'
import { Link } from 'gatsby'
import { Dynamic } from 'gatsby-plugin-federation'
import HostButton from '../components/HostButton'

const RemoteButton = Dynamic(() => import('remote/Button'))
const RemotePage = Dynamic(() => import('nav/Page'))

const App = () => {
  const [buttonCount, setButtonCount] = React.useState(1)
  const [pageCount, setPageCount] = React.useState(1)

  return (
    <>
      <h1>Host App</h1>
      <HostButton onClick={handleButtonClick} />{' '}
      <RemoteButton
        fallback={<p role="status">Loading...</p>}
        onClick={handleRemoteButtonClick}
        text={`Remote Button ${buttonCount} 🙌`}
      />{' '}
      <RemotePage
        fallback={<p role="status">Loading...</p>}
        title="Remote Page"
        description="This is a remote page."
      />{' '}
      Check out the <Link to="/vanilla">Vanilla</Link> solution.
    </>
  )

  function handleButtonClick(e) {
    console.log('onClick', e)
    setButtonCount((s) => s + 1)
  }

  function handleRemoteButtonClick(e) {
    console.log('onClick (remote button)', e)
    setButtonCount((s) => s + 1)
  }

  function handleRemotePageClick(e) {
    console.log('onClick (remote page)', e)
    setPageCount((s) => s + 1)
  }
}

export default App
