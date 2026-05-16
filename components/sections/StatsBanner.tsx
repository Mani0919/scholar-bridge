import { Award, BookOpen, Clock, LineChart, Users } from "lucide-react";
import { stats } from "@/lib/site";

const icons = [Users, BookOpen, LineChart, Clock, Award];

export function StatsBanner() {
  return (
    <section className="px-6 py-8 sm:px-10 lg:px-16">
      <div className="rounded-[8px] bg-gradient-to-r from-slate-950 via-slate-900 to-primary-700 p-5 shadow-soft">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => {
            const Icon = icons[index] || Award;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-[8px] border border-white/10 bg-white/10 p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block text-2xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-white/80">
                    {stat.label}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
