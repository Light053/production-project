import { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
	children: ReactNode;
	elem?: HTMLElement | null;
}

export const Portal: FC<PortalProps> = ({ children, elem }) => {

	const [targetElem, setTargetElem] = useState<HTMLElement | null>(null);

	useEffect(() => {
		if (!elem) {
			const mainElem = document.getElementById('main');
			setTargetElem(mainElem);
		} else {
			setTargetElem(elem);
		}
	}, [elem]);

	return targetElem ? createPortal(children, targetElem) : null;
};
