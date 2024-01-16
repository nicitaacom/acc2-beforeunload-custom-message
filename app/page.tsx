"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [someState, setSomeState] = useState("")
  const isLoading = false

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (someState.length > 3) {
        e.preventDefault()
        window.confirm("You have filled a form. Are you sure you want to leave this page?")
        e.returnValue = "You have filled a form. Are you sure you want to leave this page?"
      }
      if (isLoading) {
        e.preventDefault()
        window.confirm("You have loading state. Are you sure you want to leave this page?")
        e.returnValue = "You have loading state. Are you sure you want to leave this page?"
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [someState])

  return (
    <div className="flex flex-col gap-y-2">
      <label>Enter more than 3 characters in input and press ctrl+R</label>
      <input
        className="w-1/4 bg-transparent px-4 py-2 rounded border"
        value={someState}
        onChange={e => setSomeState(e.target.value)}
      />
    </div>
  )
}
