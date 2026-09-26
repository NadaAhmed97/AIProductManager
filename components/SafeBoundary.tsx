"use client";

import { Component, type ReactNode } from "react";

// Keeps one widget's error from taking down the whole page. After a failure it
// re-mounts the widget fresh on the next render instead of showing a crash screen.
export default class SafeBoundary extends Component<{ children: ReactNode }, { key: number; failed: boolean }> {
  state = { key: 0, failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Widget error, resetting:", error);
    setTimeout(() => this.setState((s) => ({ key: s.key + 1, failed: false })), 0);
  }

  render() {
    if (this.state.failed) return null;
    return <div key={this.state.key} className="contents">{this.props.children}</div>;
  }
}
