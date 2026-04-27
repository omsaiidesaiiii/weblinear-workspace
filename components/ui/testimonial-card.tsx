import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  gradient?: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  avatar,
  gradient = "from-[#7b39fc] to-[#a484d7]",
}: TestimonialCardProps) {
  return (
    <div className="bg-card dark:bg-[#110e1a] border border-border dark:border-white/10 shadow-sm dark:shadow-none rounded-3xl p-8 relative group w-[400px] h-full flex flex-col justify-between overflow-hidden">
      <div className={cn(
        "absolute top-0 right-0 w-32 h-32 blur-[50px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity bg-gradient-to-br",
        gradient
      )}></div>
      
      <div>
        <div className="flex space-x-1 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="font-inter text-foreground dark:text-white/80 text-lg mb-8 relative z-10 leading-relaxed italic">
          "{content}"
        </p>
      </div>

      <div className="flex items-center space-x-4 relative z-10 mt-auto">
        <div className={cn("w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr", gradient)}>
          <div className="w-full h-full bg-background dark:bg-black rounded-full border border-border dark:border-white/20 flex items-center justify-center text-foreground dark:text-white font-bold overflow-hidden">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              name.split(" ").map(n => n[0]).join("")
            )}
          </div>
        </div>
        <div>
          <h4 className="font-manrope font-semibold text-foreground dark:text-white">{name}</h4>
          <p className="font-inter text-sm text-muted-foreground dark:text-white/50">{role}</p>
        </div>
      </div>
    </div>
  );
}
