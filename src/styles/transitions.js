const defaultTiming = '0.2s ease'
const bgTransition = `background ${defaultTiming}`
const colorTransition = `color ${defaultTiming}`
const defaultTransition = `${bgTransition}, ${colorTransition}`

const transitions = {
  DEFAULT: defaultTransition,
  COLOR: colorTransition,
  BACKGROUND: bgTransition,
  ALL: defaultTiming,
  EASE: 'cubic-bezier(0.22, 1, 0.36, 1)'
}

export default transitions
