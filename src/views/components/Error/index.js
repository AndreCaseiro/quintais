import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null,};
    }

    componentDidCatch(error, errorInfo) {
      // Display fallback UI
      this.setState({
           error: error,
        errorInfo: errorInfo
        });
    }

    render() {
      if (this.state.errorInfo) {
        // You can render any custom fallback UI
        return (
            <h1>Something is not right</h1>
        );
      }
      return this.props.children;
    }
}

export default ErrorBoundary;