import React from "react";

import { Link } from "react-router-dom";
import { links } from "../data";

export const LinkButton = ({
  className,
  href,
  title,
  text,
  useText = true,
  icon,
  iconClassName,
  useIcon = true,
  bgColor,
  ringColor,
  useLinkComponent = false,
}) => {
  if (useLinkComponent) {
    return (
      <Link
        className={`rounded-full transition duration-300 ${bgColor} hover:bg-black hover:ring-2 ${ringColor} ${className}`}
        to={href}
        title={title}>
        {icon && useIcon ? <i className={`${icon} ${iconClassName}`} /> : null}
        {text && useText ? text : null}
      </Link>
    );
  }
  return (
    <a
      className={`rounded-full transition duration-300 ${bgColor} hover:bg-black hover:ring-2 ${ringColor} ${className}`}
      href={href}
      title={title}>
      {icon && useIcon ? <i className={`${icon} ${iconClassName}`} /> : null}
      {text && useText ? text : null}
    </a>
  );
};

export const LinkButtonName = ({
  name,
  className,
  iconClassName,
  text,
  title,
  useText = true,
  useIcon = true,
  useLinkComponent = false,
}) => {
  return (
    <LinkButton
      {...links[name]}
      text={text || links[name].text}
      title={title || links[name].title}
      className={className}
      iconClassName={iconClassName}
      useIcon={useIcon}
      useText={useText}
      useLinkComponent={useLinkComponent}
    />
  );
};
