import { useState } from 'react';

export const useSlider = (length: number) => {
	const [currentIdx, setCurrentIdx] = useState(0);
	const [slideIn, setSlideIn] = useState(true);

	const isExistsNext = currentIdx + 1 < length;
	const isExistsPrev = currentIdx ? currentIdx - 1 < length : false;

  const handleArrowClick = (direction: 'next' |) => {}
};
