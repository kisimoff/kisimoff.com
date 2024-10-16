// src/utils/zenFs.ts
import { configure, fs} from '@zenfs/core'
import { IndexedDB } from '@zenfs/dom'
import { IconPositions } from '@contexts/WindowsContext'

export const defaultIconPositions: IconPositions = {
  terminal2: { gridColumnStart: 1, gridRowStart: 1 },
  about: { gridColumnStart: 1, gridRowStart: 2 },
  deviceInfo: { gridColumnStart: 1, gridRowStart: 3 },
  projects: { gridColumnStart: 1, gridRowStart: 4 },
  start: { gridColumnStart: 1, gridRowStart: 5 },
  credits: { gridColumnStart: 1, gridRowStart: 6 },
  winamp: { gridColumnStart: 1, gridRowStart: 7 },
}

// Configure ZenFS with IndexedDB backend
await configure({
  mounts: {
    '/': IndexedDB,
  },
})

export const loadIconPositions = (callback: (positions:IconPositions|null) => void) => {
  try {
    if (fs.existsSync('/iconPositions.json')) {
      const data = fs.readFileSync('/iconPositions.json', 'utf-8')
      const positions = JSON.parse(data)
      callback(positions)
    } else {
      callback(null)
    }
  } catch (error) {
    console.error('Error loading icon positions:', error)
    callback(null)
  }
}

export const saveIconPositions = (positions: IconPositions) => {
  if (JSON.stringify(defaultIconPositions) == JSON.stringify(positions)
  ) {return}
  try {
    fs.writeFileSync('/iconPositions.json', JSON.stringify(positions))
  } catch (error) {
    console.error('Error saving icon positions:', error)
  }
}
