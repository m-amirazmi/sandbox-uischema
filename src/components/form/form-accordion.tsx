import { AccordionSettings } from "@/types/schema.ui.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FormAccordionProps {
  id: string;
  children: React.ReactNode;
  settings?: AccordionSettings;
}

export const FormAccordion: React.FC<FormAccordionProps> = ({
  children,
  settings,
  id,
}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border p-4 py-1 max-w-[657px] border-gray-400"
      defaultValue={id}
    >
      <AccordionItem value={id} className="border-none">
        {settings && (
          <AccordionTrigger className="text-xl">
            {settings.title}
          </AccordionTrigger>
        )}
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
