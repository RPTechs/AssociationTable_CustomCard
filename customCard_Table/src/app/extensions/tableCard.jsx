import React from "react";
import { 
  hubspot,
  Text 
} from "@hubspot/ui-extensions";
import { 
  CrmAssociationPivot,
  CrmAssociationTypes
} from "@hubspot/ui-extensions/crm";

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ context }) => {
  console.log('Context:', context);
  return <Extension context={context} />;
});

const Extension = () => {
  return (
<CrmAssociationPivot
      objectTypeId="0-1"
      associationLabels={['CEO', 'CEO of subsidiary', 'Co-founder']}
      maxAssociations={10}
      sort={[
        {
          columnName: 'createdate',
          direction: -1,
        },
      ]}
    />
  );
};

export default Extension;