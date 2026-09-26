"use client";

import { Component, type ReactNode } from "react";

// Keeps one widget's error from taking down the whole page.
// With `report`, it shows the error message in a small card (so it can be screenshotted) with a reset button.
type State = { key: number; error: string | null };

export default class SafeBoundary extends Component<{ children: ReactNode; report?: boolean }, State> {
  state: State = { key: 0, error: null };

  static getDerivedStateFromError(error: unknown) {
    const e = error as Error;
    return { error: `${e?.name ?? "Error"}: ${e?.message ?? String(error)}` };
  }

  componentDidCatch(error: unknown, info: { componentStack?: string | null }) {
    console.error("Widget error:", error, info?.componentStack);
    if (!this.props.report) setTimeout(() => this.setState((s) => ({ key: s.key + 1, error: null })), 0);
  }

  render() {
    if (this.state.error) {
      if (!this.props.report) return null;
      return (
        <div className="fixed bottom-5 right-5 z-50 max-w-sm rounded-2xl border border-red-400/40 bg-neutral-950 p-4 text-xs text-neutral-300 shadow-2xl">
          <p className="font-semibold text-red-300">The chat hit an error</p>
          <p className="mt-2 break-words font-mono text-[11px] text-neutral-400">{this.state.error}</p>
          <p className="mt-2 break-words font-mono text-[10px] text-neutral-600">{typeof navigator !== "undefined" ? navigator.userAgent : ""}</p>
          <button onClick={() => this.setState((s) => ({ key: s.key + 1, error: null }))}
            className="mt-3 rounded-full bg-accent px-3 py-1 font-semibold text-ink">Reset chat</button>
        </div>
      );
    }
    return <div key={this.state.key} className="contents">{this.props.children}</div>;
  }
}
