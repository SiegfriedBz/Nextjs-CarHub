'use client'

import { motion, AnimatePresence } from 'framer-motion'

type ModalProps = {
  modalIsOpen: boolean
  closeModal: () => void
  children: React.ReactNode
}

const Modal = ({ modalIsOpen, closeModal, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {modalIsOpen && (
        <motion.div
          variants={modalBackdropVariants}
          initial='hidden'
          animate={modalIsOpen ? 'visible' : ''}
          exit='exit'
          onClick={closeModal}
          className='fixed bottom-0 left-0 right-0 top-0 z-[99999] w-full backdrop-blur-md'
        >
          <motion.div
            variants={modalWrapperVariants}
            initial='hidden'
            animate={modalIsOpen ? 'visible' : ''}
            exit='exit'
            className='absolute 
                bottom-0 left-0
                right-0 top-0
                flex h-screen w-full
                -translate-y-1/2
                items-center justify-center'
          >
            <ModalMenu>{children}</ModalMenu>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal

type ModalMenuProps = {
  children: React.ReactNode
}

const ModalMenu = ({ children }: ModalMenuProps) => {
  return (
    <div
      className='mx-2 flex h-5/6 w-full flex-col items-center
        justify-center rounded-lg
        border
        border-primary-dark 
        bg-light
        px-2
        py-4
        text-primary-dark
        opacity-90
        shadow-sm shadow-primary-dark
        dark:border-light dark:bg-gray-300/50
        dark:text-white dark:shadow-sm
        dark:shadow-light
        sm:mx-12 md:mx-24 2xl:hidden'
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  )
}

const modalBackdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
}

const modalWrapperVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
  exit: {
    y: '100vh',
  },
}
