import { FormAccordion } from "./components/form/form-accordion";
import { FormContainer } from "./components/form/form-container";
import { FormField } from "./components/form/form-field";
import { FormFieldCollapsible } from "./components/form/form-fieldcollapsible";
import { FormFieldCombined } from "./components/form/form-fieldcombined";
import { FormFieldGroup } from "./components/form/form-fieldgroup";
import { FormStep } from "./components/form/form-step";
import { InputCheckbox } from "./components/input-fields/input-checkbox";
import { InputRadio } from "./components/input-fields/input-radio";
import { InputSelect } from "./components/input-fields/input-select";
import { InputText } from "./components/input-fields/input-text";

// Will show all the components used in this project
export const Playground = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1>All components</h1>
      <div className="flex flex-col gap-2">
        <h2>Input Fields</h2>
        <InputText
          label="Username"
          id="username"
          placeholder="Enter your username"
          error=""
        />
        <InputCheckbox label="Accept terms and conditions" id="terms" />
        <InputSelect
          label="Select an option"
          id="select-option"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
        <InputRadio
          label="Choose an option"
          id="radio-option"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
      </div>
      <div className="flex flex-col gap-6">
        <h2>Components</h2>
        <FormStep>Form step children</FormStep>
        <FormAccordion title="Additional Benefits">
          Form accordion children
        </FormAccordion>
        <FormContainer>Form container children</FormContainer>
        <FormFieldCollapsible
          title="Coverage for Damages and Injuries to Others"
          description="Legal liability for harm or damage to others in case of an accident."
          note="this is note"
        >
          Form field collapsible children
        </FormFieldCollapsible>
        <FormFieldGroup title="NCD Withdrawal Details">
          Field group children
        </FormFieldGroup>
      </div>
      <FormFieldCombined
        title="Smart Key Replacement Coverage"
        description="Covered for a total of up to RM3,000 to replace lost, stolen, or
            damaged car smart key."
      >
        Field combined children
      </FormFieldCombined>
      <FormField />
    </div>
  );
};
