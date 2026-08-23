"use client";

import React from "react";
import Link from "next/link";
import { links } from "@/data/links";

export type LinkButtonName = keyof typeof links;

interface LinkButtonProps {
  className?: string;
  name: LinkButtonName;
  useText?: boolean;
}

export function LinkButton({ className, name, useText = true }: LinkButtonProps) {
  const link = links[name];
  if (!link) return null;

  return (
    <Link
      href={link.href}
      className={`${link.bgColor} ${link.ringColor} inline-flex items-center justify-center rounded-md px-4 py-2 ring-1 transition hover:brightness-110 active:scale-95 ${className ?? ""}`}
    >
      {useText ? (
        link.text
      ) : (
        <i className={link.icon} />
      )}
    </Link>
  );
}
