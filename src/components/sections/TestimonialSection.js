/* eslint-disable @next/next/no-img-element */
import { SectionHeading } from "#/SectionHeading";
import { Testimonial } from "#/cards";
import { Button } from "../base";
import { Grid } from "../Grid";

export function TestimonialSection({
  title,
  description,
  badge,
  testimonials,
  ...rest
}) {
  return (
    <section
      className="bg-base-100 dark:bg-base-900 py-24 min-h-screen"
      {...rest}
    >
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          badge={badge}
        />
        <Grid component={Testimonial} items={testimonials} className="my-10" />
        <div className="text-center mt-12">
          <Button
            icon="tabler:brand-x"
            label="Share Your Feedback on"
            href="#"
            color="white"
          />
        </div>
      </div>
    </section>
  );
}
