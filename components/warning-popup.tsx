"use client"

import { Button } from "@/components/ui/button"

interface WarningPopupProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  onBack: () => void
  title: string
  message: string
  showBackButton?: boolean
}

export default function WarningPopup({
  isOpen,
  onClose,
  onConfirm,
  onBack,
  title,
  message,
  showBackButton = true,
}: WarningPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-200 animate-in zoom-in-95 duration-300">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">{title}</h3>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">{message}</p>
        </div>

        <div className="flex gap-4 justify-center">
          {showBackButton && (
            <Button
              onClick={onBack}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Kembali 💚
            </Button>
          )}
          <Button
            onClick={onConfirm}
            className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Yakin 💔
          </Button>
        </div>
      </div>
    </div>
  )
}
