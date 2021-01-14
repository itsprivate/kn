import React from "react";
import { Trans } from "react-i18next";
import { Link as LinkUI, css } from "theme-ui";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      <Trans>
        See what's buzzing on{" "}
        <LinkUI
          href="https://www.reddit.com/r/YouShouldKnow/"
          target="_blank"
          rel="noopener noreferrer"
          sx={css({
            lineHeight: 2,
          })}
        >
          You Should Know
        </LinkUI>{" "}
        in your native language on{" "}
        <LinkUI as={Link} to="/">
          know.buzzing.cc
        </LinkUI>
      </Trans>
    </>
  );
}
