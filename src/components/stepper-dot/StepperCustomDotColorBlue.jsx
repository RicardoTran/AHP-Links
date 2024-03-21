// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './styles.module.css'

const StepperCustomDotColorBlue = props => {
  // Props
  const { active, completed, error } = props

  if (error) {
    return <i className='tabler-alert-triangle-filled text-xl scale-[1.2] text-error' />
  } else if (completed) {
    return <i className='tabler-circle-check-filled text-xl scale-[1.2] text-[#3C95F4]' />
  } else {
    return (
      <div
        className={classnames(styles.StepperCustomDotColorBlue, { [styles.activeStepperCustomDotColorBlue]: active })}
      />
    )
  }
}

export default StepperCustomDotColorBlue
