import Window from './Window'
import {
  WindupChildren,
  Pause,
  Pace,
} from 'windups'
import { useWindows } from '@contexts/WindowsContext'

const Start = () => {
  const { startWindow } = useWindows()
  return (
    <Window window={startWindow}>
      <div className="startText">
        <WindupChildren
          onFinished={() => {
            startWindow.setVisibility(false)
          }}
        >
          <Pace ms={80}>{'Hello,'}</Pace>
          <Pause ms={550} />
          <Pace ms={70}>{' friend.'}</Pace> <Pause ms={600} />
          <Pause ms={900} />
          <Pace ms={32}>
            <p>
              <br></br>
              {'Welcome to Kisimoff OS.'} <br></br>
            </p>
          </Pace>
          <Pause ms={1000} />
          <p className="start-text">
            <br></br>

            <Pace ms={32}>
              {'Here, you\'ll find a Terminal'} <br></br>{' '}
              {'where commands are king.'}
              <br></br>
              <Pause ms={800} />
              {'Projects, where the code'} <br></br>
              {' speaks for itself. '}
              <br></br>
              <Pause ms={800} />
              {'And if you\'re curious about '}
              <br></br>
              {'the man behind the keyboard...'} <br></br>
              <Pause ms={500} />
              {'just click on the About icon. '}
              <Pause ms={1500} />
              <br></br>
              <br></br>
              {'I\'ll self destruct in...'} <br></br>
              <Pause ms={500} />
              {'4 '}
              <Pause ms={1000} />
              {'3 '}
              <Pause ms={1000} />
              {'2 '}
              <Pause ms={1000} />
              {'1 '}
              <Pause ms={1000} />
              {'Boom.'}
              <Pause ms={200} />
            </Pace>
          </p>
        </WindupChildren>
      </div>
    </Window>
  )
}

export default Start

// Hello, friend

// Welcome to Kisimoff OS.

// Here, you'll find a Terminal, where commands are king.

// Projects, where the code speaks for itself.

// And if you're curious about the man behind the keyboard, just click the About icon.

// Welcome to my world.
