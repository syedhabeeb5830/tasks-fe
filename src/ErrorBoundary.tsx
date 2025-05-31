import React from "react";

interface ErrorBoundaryState {
  error: Error | null;
}

// Use PropsWithChildren to include children in the props type
class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="p-4">
          <h1 className="text-xl font-bold">Something went wrong</h1>
          <p>{this.state.error.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
