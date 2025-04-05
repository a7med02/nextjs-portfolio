
import { HoverEffect } from "./ui/card-hover-effect";


export default function CardHoverEffectDemo() {
  return (
    <div className="w-full h-full flex flex-col justify-around">
    <h2 className="text-5xl font-bold self-center text-indigo-500 my-4">My <b className="text-white"> Projects </b> </h2>
        <div className=" py-14 bg-indigo-950 border-4">
          <HoverEffect items={projects} />
        </div>
    </div>
  );
}
export const projects = [
  {
    title: "Minishell",
    description:
      "A project that creates a shell using C language",
    link: "https://github.com/a7med02/minishell",
  },
  {
    title: "IRC",
    description:
      "A project that creates an IRC server and client using C++ language",
    link: "https://github.com/a7med02/irc",
  },
  {
    title: "PingPong website",
    description:
      "A web application that allows users play pingpong Game online with friends and chat with them",
    link: "https://github.com/a7med02/pingpong",
  },
  {
    title: "Philosophers",
    description:
        "A problem-solving project that uses threads and mutexes in C language",
    link: "https://github.com/a7med02/philosophers",
  },
  {
    title: "Inception",
    description:
        "A project to create containers from scratch using Docker technology",
    link: "https://github.com/a7med02/inception",
  },
  {
    title: "Cub3D",
    description:
        "A 3d game created with raycasting technology and C language",
    link: "https://github.com/a7med02/cub3D",
  },
];
