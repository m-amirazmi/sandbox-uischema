import { FormAccordion } from "./form/form-accordion";
import { FormContainer } from "./form/form-container";
import { FormField } from "./form/form-field";
import { FormFieldCollapsible } from "./form/form-fieldcollapsible";
import { FormFieldCombined } from "./form/form-fieldcombined";
import { FormFieldGroup } from "./form/form-fieldgroup";
import { FormStep } from "./form/form-step";
import uiSchema from "../schema/ui.json";
import { LayoutComponent, UISchema } from "@/types/schema.ui.types";

// Recursive rendering function
const renderComponent = (
  component: LayoutComponent,
  properties: UISchema["properties"]
) => {
  let childrenComponents = null;

  if ("children" in component && component.children) {
    childrenComponents = component.children.map((childId: string) => {
      if (!childId || childId === "") return;
      return renderComponent(properties[childId], properties);
    });
  }

  switch (component.type) {
    case "step":
      return (
        <FormStep id={component.id} settings={component.settings}>
          {childrenComponents}
        </FormStep>
      );
    case "accordion":
      return (
        <FormAccordion id={component.id} settings={component.settings}>
          {childrenComponents}
        </FormAccordion>
      );
    case "container":
      return (
        <FormContainer id={component.id} settings={component.settings}>
          {childrenComponents}
        </FormContainer>
      );
    case "field-collapsible":
      return (
        <FormFieldCollapsible
          refFieldId={component.refFieldId}
          id={component.id}
          settings={component.settings}
        >
          {childrenComponents}
        </FormFieldCollapsible>
      );
    case "field-combined":
      return (
        <FormFieldCombined
          refFieldId={component.refFieldId}
          id={component.id}
          settings={component.settings}
        >
          {childrenComponents}
        </FormFieldCombined>
      );
    case "field-group":
      return (
        <FormFieldGroup id={component.id} settings={component.settings}>
          {childrenComponents}
        </FormFieldGroup>
      );
    case "field":
      return <FormField id={component.id} refFieldId={component.refFieldId} />;
    default:
      return null;
  }
};

export const Form = () => {
  const { properties, root } = uiSchema as UISchema;

  const rootComponents = root.map((rootId: string) =>
    renderComponent(properties[rootId], properties)
  );

  return <form>{rootComponents}</form>;
};
