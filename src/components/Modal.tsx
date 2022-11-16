import React from "react";

interface ModalProps {
  children: React.ReactNode,
  title: string,
  onClose: () => void
}

export function Modal({ children, title, onClose }: ModalProps) {
  return (
      <>
        <div className="bg-black/50 fixed top-0 bottom-0 right-0 left-0" onClick={onClose}/>
        <div className="w-[800] p-5 rounded fixed bg-white top-10 left-1/2 -translate-x-1/2">
          <h1 className="text-2xl text-center mb-2">{ title }</h1>
          { children }
        </div>
      </>
  )
}