import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { PageError } from "widgets/page-error/ui/page-error";

interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log("ошибка:", error, errorInfo);
	}

	render() {
		const { children } = this.props;
		const { hasError } = this.state

		if (hasError) {

			return (
				<Suspense fallback="">
					<PageError />
				</Suspense>
			)
		}

		return children;
	}
}