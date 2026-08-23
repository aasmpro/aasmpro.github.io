"use client";

import React from "react";
import Link from "next/link";
import { links } from "@/data/links";

export type LinkButtonName = keyof typeof links;

// --- name-based interface (used by page.tsx, Projects.tsx, Resume.tsx) ---
interface LinkButtonNameProps {
  name: LinkButtonName;
  className?: string;
  iconClassName?: string;
  text?: string;
  title?: string;
  useText?: boolean;
  useIcon?: boolean;
  useLinkComponent?: boolean;
}

export function LinkButtonName({
  name,
  className,
  iconClassName,
  text,
  title,
  useText = true,
  useIcon = true,
  useLinkComponent = false,
}: LinkButtonNameProps) {
  const link = links[name];
  if (!link) return null;
  return (
    <LinkButton
      href={link.href}
      text={text ?? link.text}
      title={title ?? link.title}
      icon={link.icon}
      bgColor={link.bgColor}
      ringColor={link.ringColor}
      iconClassName={iconClassName}
      className={className}
      useText={useText}
      useIcon={useIcon}
      useLinkComponent={useLinkComponent}
    />
  );
}

// --- direct-prop interface ---
interface LinkButtonProps {
  className?: string;
  name?: LinkButtonName;
  href?: string;
  text?: string;
  title?: string;
  icon?: string;
  bgColor?: string;
  ringColor?: string;
  iconClassName?: string;
  useText?: boolean;
  useIcon?: boolean;
  useLinkComponent?: boolean;
}

export function LinkButton({
  className,
  name,
  href,
  text,
  title,
  icon,
  bgColor,
  ringColor,
  iconClassName,
  useText = true,
  useIcon = true,
  useLinkComponent = false,
}: LinkButtonProps) {
  // When called with `name`, look up from links data
  if (name !== undefined) {
    const link = links[name];
    if (!link) return null;
    return (
      <LinkButton
        href={link.href}
        text={text ?? link.text}
        title={title ?? link.title}
        icon={link.icon}
        bgColor={link.bgColor}
        ringColor={link.ringColor}
        iconClassName={iconClassName}
        className={className}
        useText={useText}
        useIcon={useIcon}
        useLinkComponent={useLinkComponent}
      />
    );
  }

  if (!href) return null;

  const base = {
    className: [
      "rounded-full",
      "transition",
      "duration-300",
      bgColor ?? "",
      ringColor ?? "",
      "hover:bg-black",
      "hover:ring-2",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" "),
    title: title ?? "",
  };

  const children = (
    <>
      {icon && useIcon !== false ? (
        <i key="icon" className={`${icon} ${iconClassName ?? ""}`} />
      ) : null}
      {text && useText !== false ? <span key="text">{text}</span> : null}
    </>
  );

  if (useLinkComponent && href.startsWith("/")) {
    return <Link href={href} {...base}>{children}</Link>;
  }

  const attrs: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    ...base,
    href,
  };
  if (!href.startsWith("/")) {
    attrs.target = "_blank";
    attrs.rel = "noopener noreferrer";
  }

  return <a {...attrs}>{children}</a>;
}
