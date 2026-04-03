"use client";

import { Button, Input } from "@repo/design-system";

export default function LoginPage() {
  return (
    <div style={{ width: 360, display: "flex", flexDirection: "column", gap: 24 }}>
      <h1
        style={{
          fontSize: "var(--font-size-h2)",
          lineHeight: "var(--line-height-h2)",
          fontWeight: "var(--font-weight-h2)",
          textAlign: "center",
        }}
      >
        Login
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Input placeholder="Enter your email" />
        <Input placeholder="Enter your password" />
      </div>

      <Button size="large">Sign In</Button>
    </div>
  );
}
