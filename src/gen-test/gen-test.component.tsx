import React from "react";
import { useConfig } from "@openmrs/esm-module-config";
import { Trans } from "react-i18next";
import styles from "./gen-test.css";

export default function GenTest(props: GenTestProps) {
  const config = useConfig();
  return config.displayGreeting ? (
    <div className={styles.greeting}>
      <Trans i18nKey="hello-from">Hello from</Trans>
      {' '} Gen Test!
    </div>
  ) : null;
}

type GenTestProps = {};
