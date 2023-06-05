import React, { type ReactNode } from "react";
import { type ErrorInfo } from "react-dom/client";
import { PageError } from "widgets/PageError/ui/PageError";

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError (error: Error): { hasError: true } {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch (error: Error, info: ErrorInfo): void {
    console.log(error, info.componentStack);
  }

  render (): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return <PageError />;
    }

    return children;
  }
}
export default ErrorBoundary;
