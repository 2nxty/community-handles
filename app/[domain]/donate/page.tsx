import { ArrowRight } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Stage } from "@/components/stage"

export const metadata = {
  title: "Want to donate?",
  description: "By donating you help keep our domains active for longer!",
}

export default function CommunityPage() {
  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Want to donate?<br className="hidden sm:inline" />
          See how!
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          By donating you help keep our domains
          antsocial.club, hkr.pw active for longer!
        </p>
      </div>
      <div>
        <Stage title="PIX 🇧🇷" number={1}>
          <p className="max-w-lg">
            Clique {" "}
            <a
              href="https://livepix.gg/nxty"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              neste link
            </a>
            {" "}para doar por PIX 🇧🇷
          </p>
        </Stage>
        <Stage title="Stripe" number={2}>
          <p className="max-w-lg">
            Donate {" "}
            <a
              href="https://donate.stripe.com/bIYeXD8YaaiodiwdQW"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe USD
            </a>{" / "}
            Doar {" "}
            <a
              href="https://donate.stripe.com/3cseXD6Q2eyE4M0005"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe BRL
            </a>
          </p>
        </Stage>
        <Stage title="Crypto" number={3} last>
          <p className="max-w-lg">
            Litecoin (LTC): MLezCzaYR69E13g2kNtdQSgVfqKgMyqkJH
          </p>
        </Stage>
      </div>
    </main>
  )
}
