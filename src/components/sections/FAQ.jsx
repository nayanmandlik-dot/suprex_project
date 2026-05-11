import { useState } from 'react';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';
import faqWoman from '../../assets/images/faq-player.png';

const QUESTIONS = [
  {
    q: 'What is DOMINION Poker?',
    a: 'Lorem ipsum dolor sit amet consectetur. Fermentum pulvinar scelerisque nam velit aliquam vel felis ipsum ipsum. Sapien laoreet quisque arcu egestas.',
  },
  {
    q: 'Is DOMINION available in my state?',
    a: 'Lorem ipsum dolor sit amet consectetur. Fermentum pulvinar scelerisque nam velit aliquam vel felis ipsum ipsum. Sapien laoreet quisque arcu egestas.',
  },
  {
    q: 'Is DOMINION Legal?',
    a: 'Lorem ipsum dolor sit amet consectetur. Fermentum pulvinar scelerisque nam velit aliquam vel felis ipsum ipsum. Sapien laoreet quisque arcu egestas.',
  },
  {
    q: 'What are Sweepstakes?',
    a: 'Lorem ipsum dolor sit amet consectetur. Fermentum pulvinar scelerisque nam velit aliquam vel felis ipsum ipsum. Sapien laoreet quisque arcu egestas.',
  },
  {
    q: 'How can I participate in DOMINION?',
    a: 'Lorem ipsum dolor sit amet consectetur. Fermentum pulvinar scelerisque nam velit aliquam vel felis ipsum ipsum. Sapien laoreet quisque arcu egestas.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative w-full overflow-hidden bg-[#080809]"
    >

      <div className="relative z-10 px-[clamp(16px,4.17vw,60px)] py-[clamp(56px,7vw,110px)]">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-[clamp(32px,4vw,60px)] lg:flex-row lg:items-center lg:gap-[clamp(40px,5vw,80px)]">
          {/* ───── Left column: heading + player image ───── */}
          <div className="flex w-full flex-col items-center gap-[clamp(20px,2vw,32px)] text-center lg:w-[46%] lg:flex-shrink-0 lg:items-start lg:text-left">
            <h2
              id="faq-heading"
              className="text-white"
              style={{
                fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(28px, 3.33vw, 48px)',
                lineHeight: 1,
                letterSpacing: 0,
              }}
            >
              Frequently Asked
              <br className="hidden sm:block" />
              {' '}
              Questions
            </h2>

            {/* Player image with purple halo behind + green table-light glow beneath */}
            <div className="relative w-full max-w-[480px] lg:max-w-[640px]">
              {/* Purple halo glow behind the player's upper body */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[35%] -z-0 h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2"
                style={{
                  background:
                    'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(119,23,255,0.55) 0%, rgba(119,23,255,0.25) 40%, transparent 72%)',
                  filter: 'blur(28px)',
                }}
              />

              {/* Green poker-table light glow below the image, wider than the image */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[8%] left-1/2 -z-0 h-[40%] w-[130%] -translate-x-1/2"
                style={{
                  background:
                    'radial-gradient(ellipse 50% 50% at 50% 30%, rgba(26,175,95,0.5) 0%, rgba(26,175,95,0.22) 45%, transparent 75%)',
                  filter: 'blur(32px)',
                }}
              />

              <img
                src={faqWoman}
                alt="Poker player holding cards at the table"
                draggable="false"
                className="relative z-10 mx-auto block w-full select-none lg:mx-0"
              />
            </div>
          </div>

          {/* ───── Right column: accordion ───── */}
          <div className="flex w-full flex-1 flex-col gap-[clamp(10px,1vw,14px)]">
            {QUESTIONS.map(({ q, a }, idx) => {
              const isOpen = openIndex === idx;
              const id = `faq-answer-${idx}`;
              const Chevron = isOpen ? HiChevronUp : HiChevronDown;
              return (
                <div
                  key={q}
                  className="overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#0D0C11] transition-colors duration-200 hover:border-white/15"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={id}
                      onClick={() => {
                        if (!isOpen) setOpenIndex(idx);
                      }}
                      className="flex w-full items-center justify-between gap-4 px-[clamp(18px,2vw,28px)] py-[clamp(16px,1.8vw,24px)] text-left font-sans text-[clamp(15px,1.25vw,18px)] font-medium leading-[1.3] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    >
                      <span>{q}</span>
                      <Chevron
                        size={22}
                        aria-hidden="true"
                        className="flex-shrink-0 text-white transition-transform duration-200"
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={id}
                      className="px-[clamp(18px,2vw,28px)] pb-[clamp(16px,1.8vw,24px)] pt-0"
                    >
                      <p className="font-sans text-[clamp(13px,1vw,15px)] font-normal leading-[1.6] text-[#B5B5B5]">
                        {a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Pagination dots */}
            <div className="mt-[clamp(12px,1.5vw,20px)] flex items-center justify-center gap-[6px]">
              <span className="h-[10px] w-[10px] rounded-full bg-[#EF0C27]" />
              <span className="h-[10px] w-[10px] rounded-full bg-[#434245]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
