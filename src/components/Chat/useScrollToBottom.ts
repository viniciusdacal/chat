import React, { useEffect, useRef } from 'react';

export default function useScrollToBottom<T extends HTMLElement>(items: Array<unknown>): React.RefObject<T> {
  const scrollContainerRef = useRef<T>(null);
  const prevMessagesLength = useRef<number>();

  function scrollToBottom(smooth?: boolean) {
    if (!scrollContainerRef.current) {
      return;
    }

    const ulEl = scrollContainerRef.current as T;

    if ('scrollTo' in ulEl) {
      ulEl.scrollTo({
        top: ulEl.scrollHeight,
        behavior: smooth ? 'smooth' : undefined,
      });
    } else {
      ulEl.scrollTop = ulEl.scrollHeight;
    }
  }

  useEffect(() => {
    const prevLength = prevMessagesLength.current;
    if (!prevLength && items?.length) {
      scrollToBottom();
    }

    if (prevLength && items?.length > prevLength) {
      scrollToBottom(true);
    }

    prevMessagesLength.current = items?.length;
  }, [items]);

  return scrollContainerRef;
}
