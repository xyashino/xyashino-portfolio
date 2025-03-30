import { Dialog } from '@/components/dialogs/dialog'
import { Loading } from '@/components/icons/Loading'

export interface ResultDialogProps {
  isOpen: boolean
  messages: string[]
  isLoading: boolean
  handleClose?: () => void
}

export const EmailDialog = ({
  isOpen,
  messages,
  handleClose,
  isLoading
}: ResultDialogProps) => {
  return (
    <Dialog
      isOpen={isOpen}
      close={isLoading ? undefined : handleClose}
      bgClassName="bg-black/80"
    >
      <div
        className="flex bg-yellow flex-col items-center justify-center space-y-4 font-extrabold font-mono uppercase italic p-8 text-black select-none"
        data-testid="email-dialog"
      >
        {messages.map((message, index) => (
          <p key={index} className="text-2xl  text-center">
            {message}
          </p>
        ))}
        {isLoading ? (
          <Loading className="text-4xl lg:text-7xl" />
        ) : (
          <button
            className="border-black border-2  text-black  px-12 py-2 uppercase hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
            onClick={handleClose}
            disabled={isLoading}
          >
            Close
          </button>
        )}
      </div>
    </Dialog>
  )
}
