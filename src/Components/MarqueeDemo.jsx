import React from "react";
import { cn } from "../lib/utils";
import Marquee from "./magicui/marquee";

const lawyerReviews = [
  {
    name: "John Doe",
    username: "@john_doe",
    body: "John's experience with attorney Sarah Collins was exceptional. Sarah's expertise in corporate law helped secure a favorable outcome in his case.",
    img: "https://avatar.vercel.sh/john_doe",
  },
  {
    name: "Jane Smith",
    username: "@jane_smith",
    body: "Jane was thoroughly impressed with lawyer David Thompson. His attention to detail and dedication made the legal process seamless.",
    img: "https://avatar.vercel.sh/jane_smith",
  },
  {
    name: "Alex Johnson",
    username: "@alex_johnson",
    body: "Alex had a fantastic experience with Emily Johnson. Her strategic approach and professionalism ensured a positive resolution.",
    img: "https://avatar.vercel.sh/alex_johnson",
  },
  {
    name: "Rachel Green",
    username: "@rachel_green",
    body: "Rachel appreciated Michael Lee’s litigation skills. His expertise and clear communication were key to winning her case.",
    img: "https://avatar.vercel.sh/rachel_green",
  },
  {
    name: "Mark Williams",
    username: "@mark_williams",
    body: "Mark found Olivia Brown to be an outstanding lawyer. Her in-depth knowledge of family law brought peace of mind during a tough time.",
    img: "https://avatar.vercel.sh/mark_williams",
  },
  {
    name: "Sophia Brown",
    username: "@sophia_brown",
    body: "Sophia was grateful for James White’s negotiation skills, which saved her both time and money in her contract dispute.",
    img: "https://avatar.vercel.sh/sophia_brown",
  },
  {
    name: "Michael Scott",
    username: "@michael_scott",
    body: "Michael found great relief working with lawyer Karen Mitchell. Her expertise in employment law ensured that his wrongful termination case was settled in his favor.",
    img: "https://avatar.vercel.sh/michael_scott",
  },
  {
    name: "Emily Clark",
    username: "@emily_clark",
    body: "Emily was impressed by attorney Daniel Parker’s approach to her real estate case. His knowledge of property law made the entire process stress-free.",
    img: "https://avatar.vercel.sh/emily_clark",
  },
  {
    name: "Jacob Murphy",
    username: "@jacob_murphy",
    body: "Jacob had an excellent experience with attorney Nancy O'Connor. Her deep understanding of intellectual property law was crucial in protecting his business interests.",
    img: "https://avatar.vercel.sh/jacob_murphy",
  },
  {
    name: "Olivia Taylor",
    username: "@olivia_taylor",
    body: "Olivia was very satisfied with lawyer Richard Brooks. His ability to navigate complex immigration laws helped her secure permanent residency.",
    img: "https://avatar.vercel.sh/olivia_taylor",
  },
  {
    name: "James Anderson",
    username: "@james_anderson",
    body: "James had a positive experience with attorney Laura Wright. Her compassionate approach and dedication to family law made all the difference during his divorce proceedings.",
    img: "https://avatar.vercel.sh/james_anderson",
  },
  {
    name: "Grace Lee",
    username: "@grace_lee",
    body: "Grace was impressed with lawyer Thomas Carter's criminal defense expertise. He successfully defended her in court, achieving a favorable verdict.",
    img: "https://avatar.vercel.sh/grace_lee",
  },
  {
    name: "Liam Evans",
    username: "@liam_evans",
    body: "Liam found attorney Jessica Roberts to be a lifesaver in his personal injury case. Her tenacity and skill ensured a high settlement for his injuries.",
    img: "https://avatar.vercel.sh/liam_evans",
  },
  {
    name: "Chloe Baker",
    username: "@chloe_baker",
    body: "Chloe appreciated the professionalism of lawyer Matthew Perez. His expertise in tax law helped her navigate a complex audit situation successfully.",
    img: "https://avatar.vercel.sh/chloe_baker",
  },
  {
    name: "Ethan Walker",
    username: "@ethan_walker",
    body: "Ethan had a great experience working with attorney Rachel Cooper on his contract dispute. Her negotiation skills led to a quick and favorable resolution.",
    img: "https://avatar.vercel.sh/ethan_walker",
  },
  {
    name: "Lily Edwards",
    username: "@lily_edwards",
    body: "Lily was impressed by the dedication of lawyer Samuel Bennett. His understanding of environmental law was critical in protecting her land from improper development.",
    img: "https://avatar.vercel.sh/lily_edwards",
  },
];


const firstRow = lawyerReviews.slice(0, lawyerReviews.length / 2);
const secondRow = lawyerReviews.slice(lawyerReviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "bg-[#343a40] border-gray-950/[.1]", // Set card background color
        "hover:bg-[#3b434a]", // Slight hover effect
        "dark:border-gray-50/[.1] dark:bg-[#343a40] dark:hover:bg-[#3b434a]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      {/* Reduced height from 500px to 350px */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* Removed the translucent gradient backgrounds */}
    </div>
  );
}
