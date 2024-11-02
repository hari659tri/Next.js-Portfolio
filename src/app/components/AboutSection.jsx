"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900 mb-4">Language:</b>
          C, C++,Python,Javascript, HTML, CSS </li>
        <li>
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900 mb-4" >Framework:</b>
          Node.js, React.js, Next.js </li>
        <li>
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900 mb-4">Database:</b>
           MongoDB,AWS </li>
        <li> 
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900 mb-4">IT Constructs:</b>
          DSA,OOPS</li>
        <li>
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900 mb-4">Tools:</b>
          Visual Studio,Git & GitHub, Figma, Canva, Latex
        </li>
        <li>
        <b className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900 mb-4" >More:</b>
        GDSC,Github Devloper Pack,MLSA,Open-Source,Public Speaking

        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900 mb-4">Dr. Ambedkar Institute of technology for handicapped,Kanpur B.Tech(CSE)</b>
          <br />
          2022-2026||9.3 SGPA
          </li>
        <li>
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900 mb-4">Saraswati Shiksha Niketan Inter College Krishna Nagar,Ghaziabad,UP</b>
           <br />
           12th||80%
      </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Azure Fundamentals Challenge(Microsoft Learn Student Ambassdor)</li>
        <li>Geeks For Geeks Hack Fest Delhi NCR</li>
        <li>Coding Ninja World Cup Competition AIR-(502)</li>
        <li>College Internal Hackathon Winner</li>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="carton" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900 mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hi, I'm Harikesh Tripathi, a tech enthusiast and B.Tech student. I'm on a journey of discovery and growth in the world of technology. As a full stack web developer, I'm passionate about crafting interactive and responsive web applications using JavaScript, React, Redux, Node.js, Express, HTML, CSS, and Git. I'm a strong advocate for collaboration and believe in the magic of sharing knowledge. If you're ever looking to discuss tech-related ideas or need assistance, feel free to reach out anytime. Let's connect and explore the exciting world of technology together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      
      <section className="bg-white mt-16 mb-8 py-8 overflow-hidden" style={{background:"url('https://ouch-cdn2.icons8.com/E566LHM6xxXUdB6rkuCnPIPd9M9xD5hbVN8vxoO7Y0M/rs:fit:368:299/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzc1/LzYyYThlZmJkLTVi/OGItNGViYi05ZTk1/LTJlZTdiMDI4N2Yx/OS5wbmc.png');background-position:center;background-size:contain;background-repeat:no-repeat"}}>
        <div className="bg-transparent">
          <h2 className="font-bold mb-32 w-full text-center text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">Experience</h2>
          <div className="w-[75%] mx-auto relative">
            <div style={{transform: "scaleY(0.772101) translateZ(0px);"}} className="absolute -left-1 md:left-9 top-0 w-[4px] h-full  bg-white md:bg-black  origin-top"></div>
            <ul className="w-full flex flex-col items-start justify-between ml-4">
              <li className="text-black my-8 first:mt-0 last:mb-0 w-[90%] md:w-[60%] mx-auto flex flex-col items-center justify-between bg-gradient-to-r from-yellow-300 via-white to-yellow-900 p-4 rounded-lg shadow-lg">
                <figure className="absolute -left-10 md:left-0  stroke-black">
                <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">

               <circle cx="75" cy="50" r="20" className="stroke-yellow-900 stroke-1 fill-none"></circle>
               <circle cx="75" cy="50" r="20" className=" stroke-[5px] fill-white" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0px 1px" ></circle>
               <circle cx="75" cy="50" r="10" class="animate-pulse stroke-1 fill-yellow-900"></circle>
                </svg>
                </figure>
                <div style={{opacity: "1; transform: none;"}}>
                <h3 className="capitalize font-bold text-xl sm:text-2xl">Google Developer Group<a href="https://www.linkedin.com/in/harikesh-tripathi-7841a0181/" target="_blank" className="text-yellow-900 capitalize">@GDG</a></h3>
                <span className="capitalize font-medium text-dark/75">Sep 2024 - Present|Kanpur</span>
                <p className="font-medium w-full text-xs ">•<b>Tech Lead:</b> I have a deep passion for technology, and being a Tech Lead in the GDG (Google Developer Group) on campus allows me to share that passion with others. As a GDG Lead, I focus on bridging the gap between theoretical knowledge and real-world development by organizing various events and workshops to empower students in technology. Additionally, as an Active Coordinator, I contribute to the growth of the Google Developer Group, fostering a culture of coding enthusiasm and skill development.</p>
                </div>
              </li>
               
               {/* start here  */}

               <li className="text-black my-8 first:mt-0 last:mb-0 w-[90%] md:w-[60%] mx-auto flex flex-col items-center justify-between bg-gradient-to-r from-yellow-300 via-white to-yellow-900 p-4 rounded-lg shadow-lg">
                <figure className="absolute -left-10 md:left-0  stroke-black">
                <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">

               <circle cx="75" cy="50" r="20" className="stroke-yellow-900 stroke-1 fill-none"></circle>
               <circle cx="75" cy="50" r="20" className=" stroke-[5px] fill-white" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0px 1px" ></circle>
               <circle cx="75" cy="50" r="10" class="animate-pulse stroke-1 fill-yellow-900"></circle>
                </svg>
                </figure>
                <div style={{opacity: "1; transform: none;"}}>
                <h3 className="capitalize font-bold text-xl sm:text-2xl">Geeks For Geeks Campus Lead<a href="https://www.linkedin.com/in/harikesh-tripathi-7841a0181/" target="_blank" className="text-yellow-900 capitalize">@GFG</a></h3>
                <span className="capitalize font-medium text-dark/75">Jun 2024 - Present|Kanpur</span>
                <p className="font-medium w-full text-xs ">•<b>:</b>Becoming a GeeksforGeeks Campus Lead is an exciting leadership role that allows students to bridge the gap between theoretical computer science concepts and practical, industry-relevant skills. As a Campus Lead, you represent GeeksforGeeks on your campus, spearheading initiatives that foster a community of aspiring developers, problem solvers, and tech enthusiasts.like Community Building,Skill Development,Leadership and Mentorship etc.</p>
                </div>
              </li>

               {/* end here  */}

              <li className="text-black my-8 first:mt-0 last:mb-0 w-[90%] md:w-[60%] mx-auto flex flex-col items-center justify-between bg-gradient-to-r from-yellow-300 via-white to-yellow-900 p-4 rounded-lg shadow-lg"><figure className="absolute -left-10 md:left-0  stroke-black"><svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100"><circle cx="75" cy="50" r="20" className="stroke-yellow-900 stroke-1 fill-none"></circle><circle cx="75" cy="50" r="20" class=" stroke-[5px] fill-white" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0px 1px"></circle><circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-yellow-900"></circle></svg></figure><div style={{opacity: "1; transform: none;"}}><h3 className="capitalize font-bold text-xl sm:text-2xl">Microsoft Student Technical Training<a href="https://learn.microsoft.com/en-us/users/harikeshtripathi-6909/" target="_blank" className="text-yellow-900 capitalize"></a></h3><span className="capitalize font-medium text-dark/75">Jan 2024 - feb 2024| <a href="https://learn.microsoft.com/en-us/users/harikeshtripathi-6909/" target="_blank" className="text-yellow-900 capitalize"  > MLSA </a>
            </span><p className="font-medium w-full text-xs ">In Microsoft  Learn Student Ambasdor Selection Process I got Opportunity to do Student technical training Program
             along that i also learn about Generative AI and Azure Open AI.along that i also participated in MLSA Azure Fundamentals Challenge</p></div></li>
              <li className="text-black my-8 first:mt-0 last:mb-0 w-[90%] md:w-[60%] mx-auto flex flex-col items-center justify-between bg-gradient-to-r from-yellow-300 via-white to-yellow-900 p-4 rounded-lg shadow-lg"><figure className="absolute -left-10 md:left-0  stroke-black"><svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100"><circle cx="75" cy="50" r="20" className="stroke-yellow-900 stroke-1 fill-none"></circle><circle cx="75" cy="50" r="20" className=" stroke-[5px] fill-white" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0px 1px"></circle><circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-yellow-900"></circle></svg></figure><div style= {{opacity: "1; transform: none;" }}><h3 className="capitalize font-bold text-xl sm:text-2xl">National Enterpreneurship Challenge<a href="www.uipath.com" target="_blank" className="text-yellow-900 capitalize"></a></h3><span className="capitalize font-medium text-dark/75">Sep 2023 - Feb 2024 |IIT-Bombay(NEC Finalist)</span><p className="font-medium w-full text-xs ">• I Participated Six Month Long Challenge focusing on building and fostering your own Entrepreneurship Cell.</p></div></li>
              <li className="text-black my-8 first:mt-0 last:mb-0 w-[90%] md:w-[60%] mx-auto flex flex-col items-center justify-between bg-gradient-to-r from-yellow-300 via-white to-yellow-900 p-4 rounded-lg shadow-lg"><figure className="absolute -left-10 md:left-0  stroke-black"><svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100"><circle cx="75" cy="50" r="20" className="stroke-yellow-900 stroke-1 fill-none"></circle><circle cx="75" cy="50" r="20" className=" stroke-[5px] fill-white" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0px 1px"></circle><circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-yellow-900"></circle></svg></figure><div style= {{opacity: "1; transform: none;"}}>
                <h3 class="capitalize font-bold text-xl sm:text-2xl">Geeks For Geeks Hack Fest<a href="https://www.linkedin.com/posts/harikesh-tripathi-7841a0181_hackfest-ncr-activity-7174750341555527681-S-j7?utm_source=share&utm_medium=member_desktop" target="_blank" className="text-yellow-900 capitalize"></a></h3><span className="capitalize font-medium text-dark/75">Dec 2023 - Jan 2024|<a href="https://www.linkedin.com/posts/harikesh-tripathi-7841a0181_hackfest-ncr-activity-7174750341555527681-S-j7?utm_source=share&utm_medium=member_desktop"   className="text-yellow-900 capitalize">Delhi NCR</a></span><p class="font-medium w-full text-xs ">I Seriously Involved One Month Long Hackathon Challenge in which i build HealthCare Innovation Web Application that able to tackle continuously data gathering critical challenge promoting healthy lifestyle and wellness practices and many more services like Realtime hospital availability and ambulance 🚑 booking with tracking and managing parent past history EHRs and virtual Consultation with doctors  </p></div></li>
                
              {/* create one section of GFG Ambasdor */}



            </ul> 
          </div>
        </div>
      </section>
           
       
    </section>
  );
};

export default AboutSection;
