import * as motion from 'motion/react-client'
import { Button } from '@/components/ui/button'

type PropsButton = {
  label: string
  typeButton: 'button' | 'submit' | 'reset' | undefined
}

const MotionButton = ({ label, typeButton }: PropsButton) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        size={'icon'}
        type={typeButton}
        aria-label={label}
        className='hover:bg-primary w-14 h-14 rounded-full flex items-center justify-center text-4xl '
      >
        {label}
      </Button>
    </motion.div>
  )
}
export default MotionButton
