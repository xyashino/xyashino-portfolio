import { Dialog } from "@/components/Dialog";

export interface ResultDialogProps {
  isOpen: boolean;
  message: string;
  handleClose: () => void;
}

export const ResultDialog = ({
  isOpen,
  message,
  handleClose,
}: ResultDialogProps) => {
  return (
    <Dialog isOpen={isOpen} close={handleClose} bgClassName="bg-black/80">
      <div className="flex bg-yellow flex-col items-center justify-center space-y-4 font-extrabold font-mono uppercase italic p-8 text-black select-none">
        <h3 className="text-2xl  text-center">{message}</h3>
        <button
          className="border-black border-2  text-black  px-12 py-2 uppercase hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </Dialog>
  );
};
