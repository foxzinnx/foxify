"use client"
import React, { useState } from 'react';
import { Paperclip, Sparkles, Send } from 'lucide-react';

export const PostComposer = () => {
  const [postText, setPostText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [textareaHeight, setTextareaHeight] = useState('auto');
  const maxCharacters = 280;

  const handleTextChange = (e: any) => {
    const text = e.target.value;
    setPostText(text);
    setCharacterCount(text.length);
    
    const textarea = e.target;
    textarea.style.height = 'auto';
    const newHeight = Math.max(96, textarea.scrollHeight); 
    textarea.style.height = newHeight + 'px';
    setTextareaHeight(newHeight + 'px');
  };

  const isOverLimit = characterCount > maxCharacters;
  const isNearLimit = characterCount > maxCharacters * 0.8;
  const progress = Math.min((characterCount / maxCharacters) * 100, 100);

  return (
    <div className="relative bg-gradient-to-br from-white via-white to-white border border-neutral-200/60 hover:shadow-lg transition-all duration-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-transparent" />
      
      <div className="p-6 space-y-4">
        {/* <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm font-medium text-slate-700">Compartilhe suas ideias</h3>
        </div> */}

        <div className={`relative rounded-xl border-2 transition-all duration-300 ${
          isFocused 
            ? 'border-orange-500/60 bg-white shadow-sm' 
            : 'border-neutral-200/60 bg-neutral-50/50 hover:border-neutral-300'
        }`}>
          <textarea
            value={postText}
            onChange={handleTextChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="O que você gostaria de compartilhar hoje?"
            className="w-full min-h-[96px] p-4 resize-none border-none outline-none text-base placeholder-neutral-400 bg-transparent rounded-xl overflow-hidden"
            maxLength={maxCharacters + 50}
            style={{ height: textareaHeight }}
            rows={1}
          />
          
          {isFocused && (
            <button className="p-3 text-neutral-500 hover:text-orange-600 rounded-full transition-all duration-200 cursor-pointer">
              <Paperclip size={20} />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {characterCount > 0 && (
              <>
                <div className="relative w-8 h-8">
                  <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
                    <circle
                      cx="16"
                      cy="16"
                      r="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-slate-200"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 12}`}
                      strokeDashoffset={`${2 * Math.PI * 12 * (1 - progress / 100)}`}
                      className={`transition-all duration-500 ${
                        isOverLimit ? 'text-red-500' : 
                        isNearLimit ? 'text-amber-500' : 'text-orange-500'
                      }`}
                    />
                  </svg>
                  
                  {isNearLimit && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-xs font-bold ${
                        isOverLimit ? 'text-red-600' : 'text-amber-600'
                      }`}>
                        {maxCharacters - characterCount}
                      </span>
                    </div>
                  )}
                </div>

                <span className="text-sm text-slate-500">
                  {characterCount}/{maxCharacters}
                </span>
              </>
            )}
          </div>

          <button
            disabled={postText.trim().length === 0 || isOverLimit}
            className={`group relative px-6 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              postText.trim().length === 0 || isOverLimit
                ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-600 text-white active:scale-95'
            }`}
          >
            <span>Publicar</span>
            <Send size={16} className={`transition-transform duration-300 ${
              postText.trim().length > 0 && !isOverLimit ? 'group-hover:translate-x-0.5' : ''
            }`} />

            {postText.trim().length > 0 && !isOverLimit && (
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600 to-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            )}
          </button>
        </div>

        {characterCount > 0 && (
          <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${
                isOverLimit ? 'bg-red-500' : 
                isNearLimit ? 'bg-amber-500' : 'bg-gradient-to-r from-orange-500 to-yellow-600'
              }`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};