"use client"

import { useState } from "react"
import { Heart, Sparkles, Gift, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import AudioPlayer from "@/components/audio-player"
import WarningPopup from "@/components/warning-popup"

export default function BirthdayWebsite() {
  const [currentPage, setCurrentPage] = useState(1)

  const nextPage = () => setCurrentPage((prev) => prev + 1)
  const startOver = () => setCurrentPage(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 via-rose-100 to-pink-50 relative overflow-hidden font-dancing">
      {/* Enhanced Floating decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating hearts */}
        <Heart className="absolute top-10 left-10 text-pink-300 w-6 h-6 animate-pulse" />
        <Heart className="absolute top-1/2 left-5 text-purple-200 w-4 h-4 animate-bounce" />
        <Heart className="absolute top-1/4 right-1/4 text-rose-300 w-5 h-5 animate-pulse delay-300" />
        <Heart className="absolute bottom-1/3 left-1/3 text-pink-400 w-6 h-6 animate-bounce delay-500" />

        {/* Floating sparkles */}
        <Sparkles className="absolute top-20 right-20 text-purple-300 w-8 h-8 animate-bounce" />
        <Sparkles className="absolute top-1/3 right-5 text-rose-200 w-6 h-6 animate-pulse" />
        <Sparkles className="absolute bottom-1/4 right-1/3 text-purple-400 w-7 h-7 animate-bounce delay-200" />
        <Sparkles className="absolute top-2/3 left-1/4 text-pink-300 w-5 h-5 animate-pulse delay-700" />

        {/* Stars */}
        <Star className="absolute bottom-20 left-20 text-rose-300 w-5 h-5 animate-spin" />
        <Star className="absolute top-1/3 left-1/2 text-purple-300 w-4 h-4 animate-spin delay-1000" />
        <Star className="absolute bottom-1/2 right-10 text-pink-300 w-6 h-6 animate-spin delay-500" />

        {/* Gifts */}
        <Gift className="absolute bottom-10 right-10 text-pink-400 w-7 h-7 animate-pulse" />
        <Gift className="absolute top-1/2 right-1/3 text-purple-400 w-5 h-5 animate-bounce delay-400" />

        {/* Floating emoji decorations */}
        <div className="absolute top-16 left-1/4 text-2xl animate-bounce delay-100">🌸</div>
        <div className="absolute top-1/4 right-16 text-3xl animate-pulse delay-300">💕</div>
        <div className="absolute bottom-1/4 left-16 text-2xl animate-bounce delay-600">🦋</div>
        <div className="absolute bottom-16 right-1/4 text-3xl animate-pulse delay-800">🌺</div>
        <div className="absolute top-1/2 left-1/6 text-2xl animate-bounce delay-1000">🎀</div>
        <div className="absolute top-2/3 right-1/6 text-2xl animate-pulse delay-1200">🌙</div>
        <div className="absolute bottom-1/3 left-1/2 text-3xl animate-bounce delay-400">✨</div>
        <div className="absolute top-1/6 right-1/2 text-2xl animate-pulse delay-900">🌟</div>

        {/* Floating circles */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-pink-200 rounded-full animate-ping delay-200"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-purple-200 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-2/3 left-1/5 w-3 h-3 bg-rose-200 rounded-full animate-ping delay-800"></div>
        <div className="absolute bottom-1/5 right-1/3 w-5 h-5 bg-pink-300 rounded-full animate-ping delay-1100"></div>

        {/* Gradient orbs */}
        <div className="absolute top-1/5 right-1/5 w-20 h-20 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-30 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/5 left-1/5 w-16 h-16 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full opacity-40 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/6 w-12 h-12 bg-gradient-to-r from-purple-200 to-rose-200 rounded-full opacity-35 animate-pulse delay-1000"></div>

        {/* Confetti-like dots */}
        <div className="absolute top-1/6 left-1/2 w-2 h-2 bg-pink-400 transform rotate-45 animate-spin delay-200"></div>
        <div className="absolute bottom-1/6 right-1/2 w-2 h-2 bg-purple-400 transform rotate-45 animate-spin delay-600"></div>
        <div className="absolute top-1/3 left-1/6 w-3 h-3 bg-rose-400 transform rotate-45 animate-spin delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-pink-500 transform rotate-45 animate-spin delay-400"></div>
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ec4899 2px, transparent 2px),
                     radial-gradient(circle at 75% 75%, #a855f7 2px, transparent 2px),
                     radial-gradient(circle at 50% 50%, #f43f5e 1px, transparent 1px)`,
            backgroundSize: "50px 50px, 60px 60px, 40px 40px",
            animation: "float 20s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(0.5deg); }
        }
      `}</style>

      {currentPage === 1 && <Page1 onNext={nextPage} />}
      {currentPage === 2 && <Page2 onNext={nextPage} />}
      {currentPage === 3 && <Page3 onNext={nextPage} />}
      {currentPage === 4 && <Page4 onNext={nextPage} setCurrentPage={setCurrentPage} />}
      {currentPage === 5 && <Page5No onStartOver={startOver} />}
      {currentPage === 6 && <Page5Yes onStartOver={startOver} />}

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  )
}

function Page1({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative">
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 text-4xl animate-spin-slow">🌸</div>
      <div className="absolute top-4 right-4 text-4xl animate-bounce">💖</div>
      <div className="absolute bottom-20 left-4 text-4xl animate-pulse">🎀</div>

      {/* Floating love messages */}
      <div className="absolute top-1/4 left-8 bg-pink-200/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-pink-700 animate-bounce delay-300 hidden md:block">
        I Love You! 💕
      </div>
      <div className="absolute bottom-1/3 right-8 bg-purple-200/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-purple-700 animate-bounce delay-700 hidden md:block">
        You're Amazing! ✨
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 relative">
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent mb-4 animate-pulse font-pacifico">
            🎉 HAPPY BIRTHDAY SAYANG! 🎂
          </h1>
          <div className="flex justify-center gap-4 text-4xl md:text-6xl mb-6">
            <span className="animate-bounce">🎈</span>
            <span className="animate-bounce delay-100">🎁</span>
            <span className="animate-bounce delay-200">🌟</span>
            <span className="animate-bounce delay-300">💖</span>
            <span className="animate-bounce delay-400">🎊</span>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200">
          <p className="text-2xl md:text-3xl text-gray-700 font-bold mb-4 font-dancing">
            To My Beautiful Girlfriend 💕
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            Today is your special day, and I want to make it as magical as you make every day of my life! ✨
          </p>
        </div>
      </div>

      <Button
        onClick={onNext}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        Lanjut 💖
      </Button>
    </div>
  )
}

function Page2({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      {/* Romantic corner decorations */}
      <div className="absolute top-6 left-6 text-3xl animate-pulse">🌹</div>
      <div className="absolute top-6 right-6 text-3xl animate-bounce">💐</div>
      <div className="absolute bottom-24 left-6 text-3xl animate-pulse delay-500">🦋</div>
      <div className="absolute bottom-24 right-6 text-3xl animate-bounce delay-300">🌺</div>

      {/* Floating romantic quotes */}
      <div className="absolute top-1/3 left-4 bg-rose-200/80 backdrop-blur-sm rounded-2xl px-3 py-2 text-xs font-medium text-rose-700 animate-float hidden lg:block">
        Forever yours 💕
      </div>
      <div className="absolute bottom-1/2 right-4 bg-pink-200/80 backdrop-blur-sm rounded-2xl px-3 py-2 text-xs font-medium text-pink-700 animate-float delay-500 hidden lg:block">
        My heart 💖
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200">
          <h2 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-8 font-pacifico">
            🌹 My Heartfelt Wishes 🌹
          </h2>

          <div className="space-y-6 text-gray-700">
            <div className="text-center mb-8">
              <p className="text-2xl md:text-3xl font-bold text-pink-600 mb-4 font-dancing">
                Happy Birthday, My Love! 🎂💕
              </p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-6 border-l-4 border-pink-400">
              <h3 className="text-xl font-bold text-pink-700 mb-3 font-dancing">💫 My Wishes for You:</h3>
              <p className="text-lg leading-relaxed font-medium">
                I wish you endless happiness, boundless love, and all the beautiful moments life can offer. May your
                dreams come true and may every day bring you closer to everything your heart desires. You deserve all
                the joy in the world, my beautiful girl! 🌟
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6 border-l-4 border-purple-400">
              <h3 className="text-xl font-bold text-purple-700 mb-3 font-dancing">🙏 My Prayers for You:</h3>
              <p className="text-lg leading-relaxed font-medium">
                I pray that God blesses you with good health, inner peace, and strength to overcome any challenges. May
                you always be surrounded by love, protected from harm, and guided towards your purpose. You are such a
                precious soul, and I pray for your happiness always. 💜
              </p>
            </div>

            <div className="bg-rose-50 rounded-2xl p-6 border-l-4 border-rose-400">
              <h3 className="text-xl font-bold text-rose-700 mb-3 font-dancing">💖 About Our Journey:</h3>
              <p className="text-lg leading-relaxed font-medium">
                Every moment with you feels like a beautiful dream that I never want to wake up from. You've brought so
                much light into my life, turning ordinary days into extraordinary memories. Your laugh is my favorite
                sound, your smile is my daily sunshine, and your love is my greatest treasure. Through every season
                we've shared, you've shown me what true love really means. You're not just my girlfriend; you're my best
                friend, my confidant, my inspiration, and my heart's home. I'm so grateful for every second we've spent
                together, and I can't wait to create countless more beautiful memories with you. Thank you for being the
                most amazing person in my life. I love you more than words could ever express! 🌹✨
              </p>
            </div>
          </div>
        </div>
      </div>

      <Button
        onClick={onNext}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        Lanjut 💕
      </Button>
    </div>
  )
}

function Page3({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      {/* Musical decorations */}
      <div className="absolute top-8 left-8 text-4xl animate-bounce">🎵</div>
      <div className="absolute top-8 right-8 text-4xl animate-bounce delay-200">🎶</div>
      <div className="absolute bottom-28 left-8 text-3xl animate-pulse">🎤</div>
      <div className="absolute bottom-28 right-8 text-3xl animate-pulse delay-400">🎧</div>

      {/* Floating musical notes */}
      <div className="absolute top-1/4 left-12 text-2xl animate-bounce delay-100">♪</div>
      <div className="absolute top-1/3 right-12 text-2xl animate-bounce delay-300">♫</div>
      <div className="absolute bottom-1/3 left-16 text-2xl animate-bounce delay-500">♪</div>
      <div className="absolute bottom-1/4 right-16 text-2xl animate-bounce delay-700">♫</div>
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200 mb-8">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6 font-pacifico">
            🎵 Our Special Song 🎵
          </h2>
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            This song reminds me of you and all the beautiful moments we share together 💕
          </p>

          {/* Custom Audio Player */}
          <AudioPlayer audioUrl="/Selamat-Ulang-Tahun.mp3" title="Selamat Ulang Tahun Sayangku 💕" />
        </div>
      </div>

      <Button
        onClick={onNext}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        Lanjut 🎵
      </Button>
    </div>
  )
}

function Page4({ onNext, setCurrentPage }: { onNext: () => void; setCurrentPage: (page: number) => void }) {
  const [showWarning1, setShowWarning1] = useState(false)
  const [showWarning2, setShowWarning2] = useState(false)
  const [showWarning3, setShowWarning3] = useState(false)

  // FOTO-FOTO KALIAN - GANTI URL INI DENGAN FOTO ASLI KALIAN!
  const ourPhotos = [
    {
      id: 1,
      url: "/IMG_20200402_160850_886.jpg?height=300&width=300", // Ganti dengan foto kalian
      caption: "Kencan pertama kita 💕",
    },
    {
      id: 2,
      url: "/placeholder.svg?height=300&width=300", // Ganti dengan foto kalian
      caption: "Saat kita jalan-jalan 🌸",
    },
    {
      id: 3,
      url: "/placeholder.svg?height=300&width=300", // Ganti dengan foto kalian
      caption: "Momen romantis kita 💖",
    },
    {
      id: 4,
      url: "/placeholder.svg?height=300&width=300", // Ganti dengan foto kalian
      caption: "Selfie lucu kita 😄",
    },
    {
      id: 5,
      url: "/placeholder.svg?height=300&width=300", // Ganti dengan foto kalian
      caption: "Dinner romantis 🍽️",
    },
    {
      id: 6,
      url: "/placeholder.svg?height=300&width=300", // Ganti dengan foto kalian
      caption: "Liburan bersama 🏖️",
    },
  ]

  const handleNoClick = () => {
    setShowWarning1(true)
  }

  const handleWarning1Confirm = () => {
    setShowWarning1(false)
    setShowWarning2(true)
  }

  const handleWarning1Back = () => {
    setShowWarning1(false)
  }

  const handleWarning2Confirm = () => {
    setShowWarning2(false)
    setShowWarning3(true)
  }

  const handleWarning2Back = () => {
    setShowWarning2(false)
  }

  const handleWarning3Confirm = () => {
    setShowWarning3(false)
    setCurrentPage(5)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      {/* Photo-themed decorations */}
      <div className="absolute top-6 left-6 text-3xl animate-pulse">📸</div>
      <div className="absolute top-6 right-6 text-3xl animate-bounce">🖼️</div>
      <div className="absolute bottom-32 left-6 text-3xl animate-pulse delay-300">💑</div>
      <div className="absolute bottom-32 right-6 text-3xl animate-bounce delay-600">👫</div>

      {/* Memory bubbles */}
      <div className="absolute top-1/4 left-8 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full w-8 h-8 animate-ping delay-200 hidden md:block"></div>
      <div className="absolute bottom-1/2 right-8 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full w-6 h-6 animate-ping delay-600 hidden md:block"></div>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200">
          <h2 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-8 font-pacifico">
            📸 Our Beautiful Memories 📸
          </h2>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {ourPhotos.map((photo) => (
              <div
                key={photo.id}
                className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="relative w-full h-full">
                  <img
                    src={photo.url || "/placeholder.svg"}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-sm font-medium text-center px-2 font-dancing">{photo.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed font-semibold">
              Yah fotonya masih dikit banget ya 😅
            </p>
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-dancing">
              Would u like to make a more journey with me? 💕
            </p>
          </div>

          {/* Yes/No Buttons */}
          <div className="flex justify-between items-end">
            <Button
              onClick={handleNoClick}
              className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              No 😔
            </Button>
            <Button
              onClick={() => setCurrentPage(6)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Yes! 💖
            </Button>
          </div>
        </div>
      </div>

      {/* Warning Popups */}
      <WarningPopup
        isOpen={showWarning1}
        onClose={() => setShowWarning1(false)}
        onConfirm={handleWarning1Confirm}
        onBack={handleWarning1Back}
        title="Tunggu dulu... 🥺"
        message="Apakah kamu yakin ingin menolak perjalanan indah kita bersama? Aku harap kamu bisa mempertimbangkan lagi... 💕"
      />

      <WarningPopup
        isOpen={showWarning2}
        onClose={() => setShowWarning2(false)}
        onConfirm={handleWarning2Confirm}
        onBack={handleWarning2Back}
        title="Benarkah kamu yakin? 💔"
        message="Aku benar-benar berharap kita bisa melanjutkan cerita cinta kita. Apakah kamu benar-benar yakin ingin mengakhiri semua ini? Hatiku akan sangat terluka... 😢"
      />

      <WarningPopup
        isOpen={showWarning3}
        onClose={() => setShowWarning3(false)}
        onConfirm={handleWarning3Confirm}
        onBack={() => {}}
        title="Hatiku hancur... 💔😭"
        message="Baiklah... aku sangat kecewa dan sedih. Aku tidak pernah menyangka kamu akan menolak cinta kita. Hatiku benar-benar hancur sekarang. Semoga suatu hari nanti kamu akan menyesal dengan keputusan ini... 😭💔"
        showBackButton={false}
      />
    </div>
  )
}

function Page5No({ onStartOver }: { onStartOver: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-9xl md:text-[12rem] mb-8 animate-pulse">😢</div>
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 mb-8">
          <p className="text-3xl md:text-4xl text-gray-600 font-bold mb-6 font-dancing">
            Aww... that makes me really sad 💔
          </p>
          <div className="space-y-4 text-gray-700">
            <p className="text-xl md:text-2xl font-semibold">
              I was hoping we could continue this beautiful journey together... 😔
            </p>
            <p className="text-lg md:text-xl">My heart feels a little broken right now, but I understand 💔</p>
            <p className="text-lg md:text-xl">
              I guess I'll just have to love you from here, hoping someday you'll change your mind 🥺
            </p>
            <p className="text-base md:text-lg text-gray-600 italic">
              Maybe this isn't the end of our story... maybe it's just a pause? 😢
            </p>
          </div>
        </div>
      </div>

      <Button
        onClick={onStartOver}
        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        Mulai dari Awal 🔄
      </Button>
    </div>
  )
}

function Page5Yes({ onStartOver }: { onStartOver: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-8xl md:text-[10rem] mb-8 animate-bounce">😊</div>
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200 mb-8">
          <p className="text-3xl md:text-5xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6 leading-relaxed font-pacifico">
            YESSSSS!!! 🎉✨💕
          </p>
          <div className="space-y-4 text-gray-700">
            <p className="text-2xl md:text-3xl font-bold text-pink-600 font-dancing">
              Thank u sooooo muchhh, my pretty gorgeous girl! 💕
            </p>
            <p className="text-xl md:text-2xl font-bold">I'M SO INCREDIBLY HAPPY RIGHT NOW!!! 🥳</p>
            <p className="text-lg md:text-xl font-semibold">My heart is literally EXPLODING with joy! 💥💖</p>
            <p className="text-xl md:text-2xl font-bold text-gray-700">Love u sooooo f***ing much! 😍</p>
            <p className="text-lg md:text-xl text-pink-600 font-bold font-dancing">
              Let's make a more journey together babeee! 🌟💖✨
            </p>
            <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl">
              <p className="text-lg md:text-xl font-semibold text-purple-700">
                I can't wait to create a million more beautiful memories with you! 🌈💕
              </p>
              <p className="text-base md:text-lg text-pink-700 mt-2">
                You just made me the happiest person alive! Thank you for choosing US! 🥰✨
              </p>
            </div>
          </div>
        </div>
      </div>

      <Button
        onClick={onStartOver}
        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        Mulai dari Awal 🔄
      </Button>
    </div>
  )
}
