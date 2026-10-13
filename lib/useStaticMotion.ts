"use client";

import { useReducedMotion } from "motion/react";
import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * Like `useReducedMotion()`, but safe to branch rendered markup on.
 *
 * `useReducedMotion()` is false during prerender and true on the client for
 * reduced-motion users, so markup that depends on it fails hydration. This hook
 * returns true (static) on the server and during hydration, then the real
 * preference once mounted. Animations therefore never start for reduced-motion
 * users, and start right after hydration for everyone else.
 */
export function useStaticMotion(): boolean {
  const reduce = useReducedMotion();
  const hydrated = useSyncExternalStore(noopSubscribe, () => true, () => false);
  return !hydrated || reduce === true;
}
