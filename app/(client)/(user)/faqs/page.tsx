import Container from "@/components/Container";
import Title from "@/components/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { faqsData } from "@/constant";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import React from "react";

const FaqsPage = () => {
  return (
    <Container className="max-w-4xl sm:px-6 lg:px-8 py-12">
      <Title className="font-integral font-bold text-3xl mb-8">
        Frequently Asked Questions
      </Title>

      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-0"
      >
        {faqsData?.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="group">
            <AccordionTrigger className="font-montserrat text-left text-lg font-semibold text-darkColor/80 group-hover:text-darkColor hover:no-underline hoverEffect">
              {faq?.question}
            </AccordionTrigger>
            <AccordionContent className="font-agrandir text-gray-600">
              {faq?.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default FaqsPage;
