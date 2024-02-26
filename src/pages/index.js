import { FeatureSection } from "@/components/sections/FeatureSection";
import {
  Header,
  HeroSection,
  TestimonialSection,
  FaqSection,
  Footer,
  PricingSection,
  LargeFeatureSection,
  CtaSection,
} from "../components/sections";

import { faqs, testimonials, features, site, pricing } from "@/data";

export default function Home() {
  return (
    <>
      <Header {...site.header} />
      <HeroSection id="home" />
      <FeatureSection
        id="features"
        title="Discover Our Amazing Features"
        description="Explore the wide range of powerful features that our product offers. From advanced analytics to seamless integrations, we have everything you need to succeed."
        features={features}
      />
      <LargeFeatureSection
        title="Stay on top of your business"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
        list={features.slice(0, 3)}
        image={{
          src: "/phone-mockup.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <LargeFeatureSection
        reverse={true}
        title="Stay on top of your business"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
        list={features.slice(0, 3)}
        image={{
          src: "/phone-mockup.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <PricingSection
        id="pricing"
        title="Pricing for Everyone"
        description="Choose a plan that works for you. All plans include a 7-day free trial."
        badge={{
          leading: true,
          icon: "tabler:credit-card",
          label: "Plans",
        }}
        pricing={pricing}
      />
      <TestimonialSection
        id="testimonials"
        title="Love from our customers"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique
        veritatis"
        badge={{
          leading: true,
          icon: "tabler:heart",
          label: "TESTIMONIALS",
        }}
        testimonials={testimonials}
      />
      <FaqSection
        id="faqs"
        title="Frequently Asked Questions"
        description="Here are some of our most frequently asked questions. If you have a question that isn't answered here, please feel free to contact us."
        faqs={faqs}
      />
      <CtaSection
        title="Ready to get started?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
        buttons={[{ label: "Start for Free", href: "#", color: "dark" }]}
      />
      <Footer id="footer" {...site.footer} />
    </>
  );
}
