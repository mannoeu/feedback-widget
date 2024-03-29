import { useState, FormEvent } from "react";
import { ArrowLeft } from "phosphor-react";
import { feedbackTypes, FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepTypes {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbadkSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbadkSent,
}: FeedbackContentStepTypes) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      screenshot,
      comment,
    });

    onFeedbadkSent();
  }

  return (
    <>
      <header>
        <button
          onClick={onFeedbackRestartRequested}
          type="button"
          className="
          top-5 left-5 absolute text-zinc-400 
          hover:text-zinc-100 transition-colors
          "
        >
          <ArrowLeft weight="bold" className="w-4 h4" />
        </button>
        <span
          className="
          text-xl leading-6 text-white 
          flex items-center gap-2
          "
        >
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          className="
          min-w-[304px] w-full min-h-[112px] text-sm
          placeholder-zinc-400 text-zinc-100 border-zinc-600
          bg-transparent rounded-md focus:outline-none 
          focus:border-brand-500 focus:ring-brand-500
          focus:ring-1 resize-none scrollback scrollbar-thumb-zinc-700 
          scrollbar-track-transparent scrollbar-thin
          "
          placeholder="Conte com detalhes o que está acontecendo..."
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />
          <button
            disabled={!comment.trim()}
            className="
            p-2 bg-brand-500 rounded-md border-transparent
            flex-1 flex justify-center items-center text-sm
            hover:bg-brand-300 transition-colors focus: outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
            focus:ring-brand-500 disabled:opacity-50 
            disabled:hover:bg-brand-500
            "
            type="submit"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
