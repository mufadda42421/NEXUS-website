import { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content.ts';

interface FAQProps {
  onNotify: (type: 'success' | 'info' | 'error', msg: string) => void;
}

export function FAQ({ onNotify }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filterCategory, setFilterCategory] = useState<'all' | 'general' | 'technical' | 'privacy'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
              Knowledge Base
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Transparent, honest answers about architecture, provider pricing, security, and browser capabilities.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1 p-1 bg-white/[0.04] border border-white/[0.06] rounded-xl w-full sm:w-auto">
            {(['all', 'general', 'technical', 'privacy'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                  filterCategory === cat
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs font-mono">
              No questions found matching your search. Try another keyword.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={item.question}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#090F1E] border-cyan-500/30 shadow-lg'
                      : 'bg-[#070D18]/80 border-white/[0.06] hover:border-white/15'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                      {item.question}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04]">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
