import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ code, language = 'javascript', fileName = 'script.js' }) => {
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset status setelah 2 detik
    } catch (err) {
      console.error("Gagal menyalin!", err);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const containerStyle = isDarkMode
    ? "border-gray-800 bg-[#1e1e1e]"
    : "border-gray-200 bg-white";

  const headerStyle = isDarkMode
    ? "bg-[#252526] border-gray-800"
    : "bg-gray-100 border-gray-200";

  const fileNameColor = isDarkMode ? "text-gray-400" : "text-gray-600";

  const buttonStyle = isDarkMode
    ? "text-gray-300 bg-gray-800 hover:bg-gray-700 border-gray-700"
    : "text-gray-600 bg-white hover:bg-gray-100 border-gray-300";

  return (
    <div className={`w-full max-w-2xl mx-auto my-6 rounded-xl overflow-hidden border shadow-2xl transition-colors duration-300 ${containerStyle}`}>
      {/* Bagian Header */}
      <div className={`flex items-center justify-between px-4 py-3 border-b transition-colors duration-300 ${headerStyle}`}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <span className={`ml-2 text-xs font-mono ${fileNameColor}`}>{fileName}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-1.5 rounded-md border transition-all ${buttonStyle}`}
            title="Toggle Theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <button
            onClick={copyToClipboard}
            className={`flex items-center gap-2 px-3 py-1 text-xs font-medium transition-all rounded-md border ${buttonStyle}`}
          >
            {copied ? (
              <span className="flex items-center gap-1">✅ Copied!</span>
            ) : (
              <span className="flex items-center gap-1">📋 Copy</span>
            )}
          </button>
        </div>
      </div>

      {/* Bagian Konten Kode */}
      <div className="relative group">
        <SyntaxHighlighter
          language={language}
          style={isDarkMode ? vscDarkPlus : vs}
          showLineNumbers={true}
          lineNumberStyle={{
            minWidth: '3em',
            paddingRight: '1em',
            color: isDarkMode ? '#6e7681' : '#999',
            textAlign: 'right'
          }}
          customStyle={{
            margin: 0,
            padding: '1.5rem 1rem',
            backgroundColor: 'transparent',
            fontSize: '14px',
            lineHeight: '1.6',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippet;