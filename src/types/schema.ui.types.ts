/* eslint-disable @typescript-eslint/no-empty-object-type */
export type FormComponentType =
  | "step"
  | "accordion"
  | "container"
  | "field-collapsible"
  | "field-combined"
  | "field-group"
  | "field"
  | "field-dynamic";

export type FormInputField = "text" | "select" | "radio" | "checkbox";

interface BaseComponent<TSettings> {
  id: string;
  settings?: Record<string, TSettings>;
}

export interface StepSettings {}
export interface AccordionSettings {
  title?: string;
}
export interface ContainerSettings {}
export interface FieldCollapsibleSettings {
  tag?: string;
  tagVariant?: "normal" | "badge";
  title?: string;
  description?: string;
  note?: string;
  checkboxCheckedLabel?: string;
  checkboxUnCheckedLabel?: string;
}
export interface FieldCombinedSettings {
  title?: string;
  description?: string;
}
export interface FieldGroupSettings {
  title?: string;
}
export interface FieldSettings {}
// interface FieldDynamicSettings {}

interface StepComponent extends BaseComponent<StepSettings> {
  type: "step";
  children?: string[];
}

interface AccordionComponent extends BaseComponent<AccordionSettings> {
  type: "accordion";
  children?: string[];
}

interface ContainerComponent extends BaseComponent<ContainerSettings> {
  type: "container";
  children?: string[];
}

interface FieldCollapsibleComponent
  extends BaseComponent<FieldCollapsibleSettings> {
  type: "field-collapsible";
  refFieldId: string;
  children?: string[];
}

interface FieldCombinedComponent extends BaseComponent<FieldCombinedSettings> {
  type: "field-combined";
  refFieldId: string;
  children?: string[];
}

interface FieldGroupComponent extends BaseComponent<FieldGroupSettings> {
  type: "field-group";
  children?: string[];
}

interface FieldComponent extends BaseComponent<FieldSettings> {
  refFieldId: string;
  type: "field";
}

export type LayoutComponent =
  | StepComponent
  | AccordionComponent
  | ContainerComponent
  | FieldCollapsibleComponent
  | FieldCombinedComponent
  | FieldGroupComponent
  | FieldComponent;

export interface UISchema {
  properties: {
    [id: string]: LayoutComponent;
  };
  root: string[];
}
