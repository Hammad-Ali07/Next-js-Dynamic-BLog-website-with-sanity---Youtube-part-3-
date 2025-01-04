import { client } from "@/sanity/lib/client";
import { ulForr } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
export default async function page({params:{slug}}:{params:{slug:string}}) {

  const query = `*[_type == 'blog' && slug.current == "${slug}"]{
  Title , Paragraph , image , block 
}[0]`;

    const data = await client.fetch(query)


  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
       {data.Title}
</h1>
      {/* Featured Image */}
      <Image
        src={ulForr(data.image).url()}
        width={500}
        height={500}
        alt="AI for everyone"
        className="rounded"
      />
      {/* Blog Summary Section */}
      <section>
      <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
        Summary
      </h2>
      <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
      {data.Paragraph}
      </p>
      </section>
      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={"/car.png"}
          width={200}
          height={200}
          alt="author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        
      </section>

      {/* Main Body of Blog */}
      <section className="text-lg leading-normal text-dark/80 dark:text-light/80">
        <PortableText value={data.block} />
      </section>

    </article>
  );
}