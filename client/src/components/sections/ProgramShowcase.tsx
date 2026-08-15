import { useState } from 'react';
import { ButtonPill } from '../ui/ButtonGroupPill';
import { cn } from '../../lib/utils';

export type ProgramTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
};

export function ProgramShowcase({ tabs, className }: { tabs: ProgramTab[]; className?: string }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? '');
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  if (!active) return null;

  return (
    <section className={cn('py-16 md:py-20', className)}>
      <div className="container-page flex flex-col items-center gap-10">
        <div className="max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-content-primary md:text-[40px]">
            Programs that turn Expression into Experience
          </h2>
          <p className="mt-4 text-base text-content-tertiary">
            Most AI is built for those easiest to serve. EchoBloom takes a different path,
            creating technology that recognizes and responds to human emotion.
          </p>
        </div>
        <div className="relative w-full overflow-hidden rounded-s">
          <img src={active.image} alt="" className="aspect-[1280/560] w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-10">
            <h3 className="font-heading text-2xl font-semibold text-white">{active.title}</h3>
            <p className="mt-2 max-w-xl text-sm text-white/90 md:text-base">{active.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <ButtonPill key={tab.id} selected={tab.id === activeId} onClick={() => setActiveId(tab.id)}>
              {tab.label}
            </ButtonPill>
          ))}
        </div>
      </div>
    </section>
  );
}
