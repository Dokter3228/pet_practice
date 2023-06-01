import React, { type FC, type JSX, type ReactNode } from "react"
import { type ErrorInfo } from "react-dom/client"
import { types } from "sass"
import Error = types.Error
import { withTranslation } from "react-i18next"
import { PageError } from "widgets/PageError/ui/PageError"

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error): { hasError: true } {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: ErrorInfo): void {
    console.log(error, info.componentStack)
  }

  render (): ReactNode {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      // You can render any custom fallback UI
      return <PageError />
    }

    return children
  }
}
export default ErrorBoundary
