import { Button, Link } from '@nextui-org/react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'sonner'
import { Inputs } from '@/components'
import { useInputStore, useStore } from '@/store'
import { CopyPasteIcon, RegenerateIcon } from '@/icons'
import { useInputAction } from '@/hooks'
import { useRouter } from 'next/router'
import { Actions } from '@/lib'

export const Hero = () => {
  const { message, isWriting } = useStore()
  const { handleAction } = useInputAction({ isRegenerate: true })
  const { inputText } = useInputStore()
  const router = useRouter()

  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-12 mt-20">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-primary md:text-5xl lg:text-6xl"><span className="text-gradient">EN-AI</span> Inglés con IA.</h1>
        <p className="text-lg font-normal lg:text-xl text-foreground"><strong>EN-IA</strong> te ayudará con tus dudas de forma rápida. ¡Olvídate de las tediosas búsquedas en Google y ahorra tiempo!</p>
      </div>

      <div className="flex flex-col gap-10 w-full mb-10">

        <Inputs />

        {
          message && (
            <div className="bg-primary bg-opacity-[0.04] rounded-2xl p-3 sm:flex sm:flex-row-reverse sm:gap-2">
              {
                !isWriting && (
                  <div className="flex justify-end mb-2 sm:mb-0">
                    <div className="flex gap-1">
                      <CopyToClipboard text={message} onCopy={() => {
                        toast.message('El texto se ha copiado en el portapapeles')
                      }}>
                        <Button size="sm" isIconOnly title="Copy & Paste">
                          <CopyPasteIcon />
                        </Button>
                      </CopyToClipboard>
                      <Button size="sm" isIconOnly title="Regenerate" onClick={handleAction}>
                        <RegenerateIcon />
                      </Button>
                    </div>

                  </div>
                )
              }

              <p className="whitespace-pre-wrap flex-1 pb-8 sm:pb-0">
                {message}

                {
                  !isWriting && (router.query.select !== Actions.CHECK && router.query.select !== Actions.USE) && (
                    <>
                      {
                        !message.includes("no puedo") && (
                          <>
                            <br />
                            <br />
                            <Link className="text-sm" href={`https://www.wordreference.com/conj/enverbs.aspx?v=${inputText.toLocaleLowerCase()}`} isExternal showAnchorIcon underline="always">Más información</Link>
                          </>
                        )
                      }
                    </>
                  )
                }
              </p>
            </div>
          )
        }
      </div>
    </div>
  )
}
