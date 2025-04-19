import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/components/ui/accordion"
  
  export default function Licensing() {
    return (
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Licensing Options</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="personal">
            <AccordionTrigger>Personal License</AccordionTrigger>
            <AccordionContent>Use on personal projects with no redistribution.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="commercial">
            <AccordionTrigger>Commercial License</AccordionTrigger>
            <AccordionContent>Use in commercial products with attribution.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    )
  }
  