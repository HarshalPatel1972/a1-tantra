"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { searchIndex, SearchResult } from "@/data/search-index";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const filtered = searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()),
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:pt-32">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-deep-brown transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-cream border-2 border-deep-brown rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
        {/* Search Input Area */}
        <div className="p-6 border-b border-stone-200 bg-white">
          <div className="relative flex items-center">
            <svg
              className="absolute left-4 w-6 h-6 text-deep-brown"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for paths, sessions, wisdom..."
              className="w-full pl-14 pr-12 py-4 bg-stone-100 border-2 border-stone-200 focus:border-accent-red focus:ring-0 rounded-xl text-lg font-body text-deep-brown placeholder:text-stone-400 outline-none transition-all"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={onClose}
              className="absolute right-4 p-1 hover:bg-stone-200 rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5 text-stone-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
          {query.trim().length === 0 ? (
            <div className="py-12 text-center text-stone-500">
              <p className="font-nav text-sm uppercase tracking-widest mb-2 font-bold">
                Suggested searches
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {["Kundalini", "Healing", "Kriya", "Sessions"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-4 py-2 bg-stone-100 hover:bg-accent-red hover:text-cream rounded-full text-sm font-semibold transition-all border border-stone-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 gap-2">
              {results.map((result, idx) => (
                <Link
                  key={idx}
                  href={result.url}
                  onClick={onClose}
                  className="group flex flex-col p-4 hover:bg-white rounded-xl transition-all border-2 border-transparent hover:border-stone-100 hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-title text-xl font-bold text-deep-brown group-hover:text-accent-red transition">
                      {result.title}
                    </h4>
                    <span className="text-[10px] uppercase tracking-widest px-2 py-1 bg-stone-200 text-deep-brown font-bold rounded">
                      {result.category}
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 font-body line-clamp-1">
                    {result.description}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="text-4xl mb-4">🕯️</div>
              <p className="text-deep-brown font-body">
                We couldn't find anything matching "
                <span className="font-bold text-deep-brown">{query}</span>"
              </p>
              <p className="text-sm text-stone-400 mt-2">
                Try searching for broader terms like "Tantra" or "Healing"
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-between items-center text-[10px] text-stone-500 font-nav font-bold uppercase tracking-widest">
          <span>Search A1 Tantra Wisdom</span>
          <span>ESC to close</span>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(63, 47, 39, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(63, 47, 39, 0.2);
        }
      `}</style>
    </div>
  );
}
