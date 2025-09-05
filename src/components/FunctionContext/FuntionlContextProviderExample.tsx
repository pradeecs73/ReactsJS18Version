import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'


const STYLES = {
  toast: {
    position: 'fixed',
    bottom: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: 'medium',
    padding: '15px',
    borderRadius: '10px',
    background: 'var(--color-grey-100)',
  } as React.CSSProperties
}

interface ToastContextType {
  showToast: (content: string | ReactNode, duration?: number | undefined) => void
}
interface ToastMessageProviderProps {
  children: ReactNode
}
interface Toast {
  content: string | React.ReactNode
}
const defaultValue: ToastContextType = {
  showToast: () => {
    throw new Error('ToastContext not implemented yet')
  }
}

const ToastContext = createContext<ToastContextType>(defaultValue)

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    throw new Error('useToast must be used within a ToastMessageProvider')
  }
  return ctx
}

export const ToastMessageProvider: React.FC<ToastMessageProviderProps> = ({
  children
}) => {
  const [toast, setToast] = useState<Toast | null>(null)
  const [show, setShow] = useState(false)
  const timerRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const showToast = useCallback(
    (content: string | ReactNode, duration: number | undefined) => {
      const toastDuration = duration || 1000
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
      setToast({ content })
      setShow(true)
      timerRef.current = setTimeout(() => {
        setShow(false)
      }, toastDuration)
    },
    []
  )

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {show && (
        <p>
          <span style={STYLES.toast}>
            {typeof toast?.content === 'string' ? (
              <>✔️ {toast.content}</>
            ) : (
              toast?.content
            )}
          </span>
        </p>
      )}
    </ToastContext.Provider>
  )
}
 