import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Drowing Room for family time",
    description:
      "A cozy and inviting space designed for family gatherings and relaxation.",
    image: "/image/project3.jpg",
    link: "",
  },
  {
    id: 2,
    name: "Kitchen look modern and clean",
    description:
      " A sleek, contemporary kitchen featuring minimalist design and efficient use of space.",
    image: "/image/project2.jpg",
    link: "",
  },
  {
    id: 3,
    name: "Perfect living room for family time",
    description:
      "An ideal living room layout that enhances comfort and fosters family togetherness.",
    image: "/image/project4.png",
    link: "",
  },
];

const page = () => {
  return (
    <div>
      <div className=" bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
        <h1 className=" container py-64 text-6xl font-semibold tracking-widest text-white">
          Our Project
        </h1>
      </div>

      <div className=" container grid lg:grid-cols-2 gap-8 py-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" relative overflow-hidden rounded-xl group"
          >
            <div>
              <Image
                src={project.image}
                width={480}
                height={380}
                alt=""
                className=" w-full"
              />
            </div>
            <div className=" absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0 ">
              <h1 className=" text-2xl font-semibold">{project.name}</h1>
              <p className=" py-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
