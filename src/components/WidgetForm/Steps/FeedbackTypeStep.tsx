import React from "react";
import { feedbackTypes, FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6 text-white">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {React.Children.toArray(
          Object.entries(feedbackTypes).map(([key, value]) => (
            <button
              className="
          bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col
            items-center gap-2 border-2 border-transparent
            hover:border-brand-500 focus:border-brand-500
            focus:outline-none transition-colors
            "
              type="button"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span className="text-white">{value.title}</span>
            </button>
          ))
        )}
      </div>
    </>
  );
}
