/* eslint-disable @next/next/no-img-element */
import { clients } from "@/data/clients";
import { Badge, Button } from "#/base";
import { Brands } from "#/Brands";

export function HeroSection() {
  return (
    <section>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="flex flex-col justify-center items-center gap-4 text-center max-w-3xl mx-auto mt-32 pb-12">
            <Badge as="a" href="#" icon="tabler:arrow-right">
              😻 Learn What&apos;s New
            </Badge>
            <h1 className="text-6xl font-display font-semibold title-gradient">
              Your Mailbox is simplified
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              expedita, ipsam nobis blanditiis provident ducimus aut, velit
              facere fugit praesentium, necessitatibus voluptatem consequuntur
              amet ratione? Sint distinctio quod non quae?
            </p>
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button href="#" label="Start Free Trail" color="dark" />
              <Button
                href="#"
                label="Learn More"
                color="transparent"
                icon="tabler:arrow-right"
              />
            </div>
          </div>
          <div>
            <img
              src="/tablet-mockup.png"
              alt="Tablet Mockup"
              className="w-full h-auto"
            />
          </div>
          <div className="text-sm">Trusted by 100+ Brands</div>
          <Brands clients={clients} />
        </div>
      </div>
    </section>
  );
}
