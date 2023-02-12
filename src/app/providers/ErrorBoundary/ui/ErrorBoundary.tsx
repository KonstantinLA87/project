import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError/';

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError (_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.log(error, errorInfo);
  }

  render () {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense fallback="">
          <PageError />;
        </Suspense>
      )
    }

    return children; 
  }
}

export default ErrorBoundary
