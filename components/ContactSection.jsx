import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Boost your conversation rate",
    href: "#",
    description:
      "Finally, our high-quality craftsmanship and commitment to excellence are consistently recognized. Clients are delighted with the final results, noting the careful execution and superior materials used in their projects.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Natasha",
      role: "Co-founder / CTO",
      href: "#",
      imageUrl: "/image/profile1.jpg",
    },
  },
  {
    id: 2,
    title: "Boost your conversation rate",
    href: "#",
    description:
      "Our attention to detail is frequently highlighted as a standout feature of our service. Clients appreciate how we meticulously curate every aspect of their design, from color schemes and furnishings to lighting and layout.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Micheal Chris",
      role: "Co-founder / CTO",
      href: "#",
      imageUrl: "/image/profile2.jpg",
    },
  },
  {
    id: 3,
    title: "Boost your conversation rate",
    href: "#",
    description:
      "Professionalism and customer-centric service are central to the positive feedback we receive. Clients value our dedication to understanding their needs and working closely with them throughout the design process.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Samuel Joe",
      role: "Co-founder / CTO",
      href: "#",
      imageUrl: "/image/profile3.jpg",
    },
  },
];

export default function ContactSection() {
  return (
    <div className="pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Customer Review
        </h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Learn how to grow your business with our expert advice
        </p>

        <div
          className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b
         border-gray-200 border-t gap-y-16"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex max-w-xl flex-row items-center justify-between space-x-4">
                <time dateTime={post.datetime}>
                  <Image
                    src="/image/star.svg"
                    width={80}
                    height={5}
                    alt="Star rating"
                  />
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black transition-all"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span>{post.title}</span>
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  src={post.author.imageUrl}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <p className="text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
