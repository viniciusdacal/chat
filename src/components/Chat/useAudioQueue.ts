import { TraceFramePayload as TraceSpeackPayload } from '@voiceflow/base-types/build/node/speak';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { actions } from './reducer';
import { Message } from './types';

export default function useAudioQueue(userId: string): { push: (audios: Message<TraceSpeackPayload>[]) => void } {
  const dispatch = useDispatch();
  const queueRef = useRef<Message<TraceSpeackPayload>[]>([]);
  const isPlayingRef = useRef(false);

  function play() {
    const next = queueRef.current.shift();
    if (!next || !next.payload.src) {
      isPlayingRef.current = false;
      return;
    }

    const audio = new Audio(next.payload.src);
    isPlayingRef.current = true;
    audio.play();
    dispatch(actions.playMessage({ messageId: next.id, userId }));

    audio.addEventListener(
      'ended',
      () => {
        play();
      },
      true
    );
  }

  function push(audios: Message<TraceSpeackPayload>[]) {
    queueRef.current = [...queueRef.current, ...audios];

    if (!isPlayingRef.current) {
      play();
    }
  }

  return {
    push,
  };
}
