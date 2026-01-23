'use client';

export default function SocialIconsSection() {
  return (
    <div className="mb-12 flex justify-center" style={{ padding: '20px 0' }}>
      <div className="flex flex-wrap items-center justify-center gap-5" style={{ display: 'flex', gap: '20px' }}>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/@dobitaomacro"
          target="_blank"
          rel="noopener noreferrer"
          title="YouTube"
          className="social-icon group flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500"
          style={{
            width: '56px',
            height: '56px',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            border: '1px solid rgba(0, 102, 255, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <svg
            className="h-7 w-7 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ width: '28px', height: '28px', color: 'white' }}
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/dobitaomacro/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="social-icon group flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500"
          style={{ 
            width: '56px', 
            height: '56px', 
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            border: '1px solid rgba(0, 102, 255, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <svg 
            className="h-7 w-7 text-white" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            style={{ width: '28px', height: '28px', color: 'white' }}
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        
        {/* Facebook */}
        <a 
          href="https://www.facebook.com/dobitaomacro"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
          className="social-icon group flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500"
          style={{ 
            width: '56px', 
            height: '56px', 
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            border: '1px solid rgba(0, 102, 255, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <svg 
            className="h-7 w-7 text-white" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            style={{ width: '28px', height: '28px', color: 'white' }}
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        
        {/* Nostr */}
        <a
          href="https://primal.net/p/nprofile1qqsw4nce493m2trvzw52hhup45qc0fhahvf95u3vwsse478ncm0ysps0z2u2n"
          target="_blank"
          rel="noopener noreferrer"
          title="Nostr"
          className="social-icon group flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500"
          style={{
            width: '56px',
            height: '56px',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            border: '1px solid rgba(0, 102, 255, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <img
            src="/icons/nostr.svg"
            alt="Nostr"
            style={{ width: '28px', height: '28px' }}
          />
        </a>
        
        {/* Lightning */}
        <a 
          href="https://pay.bitmacro.io/"
          target="_blank"
          rel="noopener noreferrer"
          title="Lightning"
          className="social-icon group flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500"
          style={{ 
            width: '56px', 
            height: '56px', 
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            border: '1px solid rgba(0, 102, 255, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <svg 
            className="h-7 w-7 text-white" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            style={{ width: '28px', height: '28px', color: 'white' }}
          >
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
          </svg>
        </a>

        {/* Comentados - não aparecem */}
        {/* BitMacro */}
        {/* <a
          href="https://bitmacro.io"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:shadow-lg"
          style={{
            width: '56px',
            height: '56px',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <img
            src="/icons/bitmacro.svg"
            alt="BitMacro"
            style={{ width: '28px', height: '28px' }}
          />
        </a> */}
        
        {/* Bitcoin */}
        {/* <a 
          href="https://bitcoin.org"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:shadow-lg"
          style={{ 
            width: '56px', 
            height: '56px', 
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <svg 
            className="h-7 w-7 text-white" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            style={{ width: '28px', height: '28px', color: 'white' }}
          >
            <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.238c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/>
          </svg>
        </a> */}
        
        {/* X */}
        {/* <a 
          href="https://x.com/bitmacro"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:shadow-lg"
          style={{ 
            width: '56px', 
            height: '56px', 
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <svg 
            className="h-7 w-7 text-white" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            style={{ width: '28px', height: '28px', color: 'white' }}
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a> */}
        
        {/* LinkedIn */}
        {/* <a 
          href="https://linkedin.com/company/bitmacro"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:shadow-lg"
          style={{ 
            width: '56px', 
            height: '56px', 
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <svg 
            className="h-7 w-7 text-white" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            style={{ width: '28px', height: '28px', color: 'white' }}
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a> */}
        
        {/* Telegram */}
        {/* <a 
          href="https://t.me/bitmacro"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:shadow-lg"
          style={{ 
            width: '56px', 
            height: '56px', 
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <svg 
            className="h-7 w-7 text-white" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            style={{ width: '28px', height: '28px', color: 'white' }}
          >
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a> */}
      </div>
    </div>
  );
}
