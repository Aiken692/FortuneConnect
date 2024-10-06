import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const testimonials = [
    {
      name: "Jane Doe",
      position: "CEO of ExampleCorp",
      testimonial: "FortuneConnect helped our business scale seamlessly.",
      logo: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "John Smith",
      position: "CTO of TechFlow",
      testimonial: "Amazing platform for streamlining operations.",
      logo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Alice Johnson",
      position: "Founder of StartUpWorld",
      testimonial: "The connectivity and data insights are unparalleled.",
      logo: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ethan Wright",
      position: "Marketing Director at InnovateLtd",
      testimonial: "Their customer service and attention to detail are outstanding.",
      logo: "https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sophia Lee",
      position: "Product Manager at CreativeSolutions",
      testimonial: "Their innovative approach has significantly improved our product development cycle.",
      logo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];

const TestimonialsSection = () => {

  return (

    <div>
    <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">What Our Clients Say</h3>
        <div className="flex justify-center items-center">
            <Carousel className="w-full max-w-xs bg-white">
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                    <div className="p-4">
                    {/* Adjust the size here */}
                    <img src={testimonial.logo} alt={testimonial.name} className="mx-auto h-40 w-40 rounded-full" />
                    <div className="text-center mt-4">
                        <p className="text-lg font-semibold">{testimonial.name}, {testimonial.position}</p>
                        <p className="text-gray-600 mt-2">{testimonial.testimonial}</p>
                    </div>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </div>
        </div>
    </section>
</div>

    
  )
}

export default TestimonialsSection