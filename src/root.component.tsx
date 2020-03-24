import React from "react";
import openmrsRootDecorator from "@openmrs/react-root-decorator";
import { defineConfigSchema, validators } from "@openmrs/esm-module-config";
import { BrowserRouter, Route } from "react-router-dom";
import GenTest from "./gen-test/gen-test.component";

defineConfigSchema("@openmrs/esm-gen-test", {
  displayGreeting: {
    validators: [validators.isBoolean],
    default: true,
  },
  /* See the esm-module-config documentation:
      https://wiki.openmrs.org/display/projects/openmrs-esm-module-config */
});

function Root(props) {
  return (
    <BrowserRouter basename={window["getOpenmrsSpaBase"]()}>
      <Route path="/gen-test" component={GenTest} />
    </BrowserRouter>
  );
}
export default openmrsRootDecorator({
  featureName: "Gen Test",
  moduleName: "@openmrs/esm-gen-test",
})(Root);
