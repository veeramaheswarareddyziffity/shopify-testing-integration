import {
  BlockStack,
  TextField,
  Heading,
  useApplyMetafieldsChange,
  useMetafield,
  reactExtension,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const metafieldNamespace = "customFields";
  const purchaseOrderKey = "purchaseOrderNumber";
  const specialOrderNotesKey = "specialOrderNotes";

  const purchaseOrderNumber = useMetafield({
    namespace: metafieldNamespace,
    key: purchaseOrderKey,
  });
  const specialOrderNotes = useMetafield({
    namespace: metafieldNamespace,
    key: specialOrderNotesKey,
  });

  const applyMetafieldsChange = useApplyMetafieldsChange();

  return (
    <BlockStack>
      <Heading>Purchase Order Number</Heading>
      <TextField
        label="Purchase Order Number"
        onChange={(value) => {
          // Apply the change to the metafield
          applyMetafieldsChange({
            type: "updateMetafield",
            namespace: metafieldNamespace,
            key: purchaseOrderKey,
            valueType: "string",
            value,
          });
        }}
        value={purchaseOrderNumber?.value}
      ></TextField>

      <Heading>Do you have any special order notes?</Heading>
      <TextField
        label="Do you have any special order notes?"
        onChange={(value) => {
          // Apply the change to the metafield
          applyMetafieldsChange({
            type: "updateMetafield",
            namespace: metafieldNamespace,
            key: specialOrderNotesKey,
            valueType: "string",
            value,
          });
        }}
        value={specialOrderNotes?.value}
      ></TextField>
    </BlockStack>
  );
}
