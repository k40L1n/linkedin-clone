import { useState } from "react"

function Form() {
  const [input, setInput] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")

  return (
    <form className="flex flex-col relative space-y-2 text-black/80 dark:text-white/75">
      <textarea
        className="bg-transparent focus:outline-none dark:placeholder-white/75"
        rows="4"
        placeholder="What do you want to talk about?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add a photo URL"
        className="bg-transparent focus:outline-none truncate max-w-xs md:max-w-sm dark:placeholder-white/75"
        value={photoUrl}
        onChange={(e) => setPhotoUrl(e.target.value)}
      />
    </form>
  )
}

export default Form
