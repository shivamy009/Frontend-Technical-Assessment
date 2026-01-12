import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';

export const AutosizeTextarea = React.forwardRef(({ className = '', onChange, value, minHeight = 52, maxHeight = 200, ...props }, ref) => {
  const textAreaRef = useRef(null);
  const [init, setInit] = useState(true);

  useEffect(() => {
    const offsetBorder = 6;
    const textAreaElement = textAreaRef.current;
    if (textAreaElement) {
      if (init) {
        textAreaElement.style.minHeight = `${minHeight + offsetBorder}px`;
        if (maxHeight > minHeight) {
          textAreaElement.style.maxHeight = `${maxHeight}px`;
        }
        setInit(false);
      }
      textAreaElement.style.height = `${minHeight + offsetBorder}px`;
      const scrollHeight = textAreaElement.scrollHeight;
      if (scrollHeight > maxHeight) {
        textAreaElement.style.height = `${maxHeight}px`;
      } else {
        textAreaElement.style.height = `${scrollHeight + offsetBorder}px`;
      }
    }
  }, [value, minHeight, maxHeight, init]);

  return (
    <textarea
      {...props}
      value={value}
      ref={textAreaRef}
      onChange={onChange}
      className={clsx(
        'flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
    />
  );
});

AutosizeTextarea.displayName = 'AutosizeTextarea';

export default AutosizeTextarea;
