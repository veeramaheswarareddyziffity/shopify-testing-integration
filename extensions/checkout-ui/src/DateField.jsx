import React, { useState } from "react";
import {
  reactExtension,
  TextField,
  BlockStack,
  useApplyMetafieldsChange,
  useMetafield,
  Checkbox,
  Select,
  DateField
} from "@shopify/ui-extensions-react/checkout";

// Set the entry point for the extension
export default reactExtension("purchase.checkout.shipping-option-list.render-before", () => <Extension />);

function Extension() {
  return <DateField label="Select a date" />;
}
