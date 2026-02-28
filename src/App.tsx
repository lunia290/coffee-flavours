import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, Twitter, Instagram, Search, Menu, X, Coffee as CoffeeIcon, MapPin, Calendar, Users, ChevronRight } from 'lucide-react';

interface Coffee {
  id: string;
  name: string;
  description: string;
  image: string;
  bgColor: string;
  accentColor: string;
  textColor: string;
}

const COFFEES: Coffee[] = [
  {
    id: 'latte',
    name: 'Latte',
    description: 'Latte is a coffee drink made with espresso and steamed milk. The term comes from the Italian caffè latte, which means "milk coffee".',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop',
    bgColor: '#D7D2CB',
    accentColor: '#A69F95',
    textColor: '#1a1a1a'
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    description: 'Caffè macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed.',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1000&auto=format&fit=crop',
    bgColor: '#E5DFD9',
    accentColor: '#C4B7AB',
    textColor: '#1a1a1a'
  },
  {
    id: 'black',
    name: 'Black Coffee',
    description: 'Delicious coffee is that simple. A long, dark coffee with nothing added, so you can enjoy the pure coffee taste.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop',
    bgColor: '#A8A9AD',
    accentColor: '#7D7E82',
    textColor: '#1a1a1a'
  },
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1000&auto=format&fit=crop',
    bgColor: '#B89B86',
    accentColor: '#8C7361',
    textColor: '#1a1a1a'
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'A caffè mocha, also called mocaccino, is a chocolate-flavoured variant of a caffè latte, commonly served in a glass rather than a mug.',
    image: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?q=80&w=1000&auto=format&fit=crop',
    bgColor: '#8B6B58',
    accentColor: '#5D4037',
    textColor: '#1a1a1a'
  }
];

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activePage, setActivePage] = useState<'home' | 'story' | 'menu' | 'locations' | 'contact'>('home');
  
  const currentCoffee = COFFEES[selectedIdx];

  const closeAllOverlays = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setIsBookingOpen(false);
    setActivePage('home');
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row bg-[#F2EFE9]">
      {/* Left Side: Dynamic Image & Background */}
      <motion.div 
        className="relative w-full md:w-1/2 h-[45vh] md:h-full flex items-center justify-center p-6 md:p-12"
        animate={{ backgroundColor: currentCoffee.bgColor }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.img 
            src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&auto=format&fit=crop" 
            className="absolute top-10 left-10 w-16 md:w-24 opacity-40 rotate-12"
            animate={{ y: [0, -10, 0], rotate: [12, 15, 12] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 flex gap-2 md:gap-4 opacity-30">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full" />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentCoffee.id}
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.1, rotate: 15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[280px] sm:max-w-xs md:max-w-md aspect-square"
          >
            <div className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 h-32 md:h-64 w-[1px] bg-black/10 hidden sm:block" />
            <img 
              src={currentCoffee.image} 
              alt={currentCoffee.name}
              className="w-full h-full object-cover rounded-full shadow-2xl border-4 md:border-8 border-white/20"
              referrerPolicy="no-referrer"
            />
            {/* Spoon decoration */}
            <motion.div 
              className="absolute -left-12 md:-left-16 top-1/4 w-24 md:w-32 h-auto hidden lg:block"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=200&auto=format&fit=crop" 
                alt="spoon"
                className="w-full h-auto rotate-[-45deg] drop-shadow-lg"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Brand Label */}
        <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 flex items-center gap-2 md:gap-4">
          <div className="w-4 md:w-8 h-[1px] bg-black/40" />
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-medium opacity-60 vertical-text">
            © Coffee Flavours
          </span>
        </div>
      </motion.div>

      {/* Right Side: Content & Controls */}
      <div className="relative w-full md:w-1/2 h-[55vh] md:h-full bg-[#F2EFE9] flex flex-col p-6 sm:p-10 md:p-16 lg:p-24 overflow-y-auto md:overflow-hidden">
        {/* Header */}
        <header className="absolute top-6 md:top-8 left-6 md:left-8 right-6 md:right-8 flex justify-between items-center z-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="w-2 h-2 bg-black rounded-full" />
            <span className="font-serif italic font-bold text-base md:text-lg tracking-tight">coffee flavours</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden sm:flex items-center gap-4">
              <Facebook size={14} className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity" />
              <Twitter size={14} className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity" />
              <Instagram size={14} className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity" />
            </div>
            <div className="hidden sm:block w-[1px] h-4 bg-black/20 mx-1 md:mx-2" />
            <Search size={18} className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setIsSearchOpen(true)} />
            <Menu size={18} className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setIsMenuOpen(true)} />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto md:mx-0 pt-12 md:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCoffee.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-semibold opacity-40 mb-2 md:mb-4 block">
                0{selectedIdx + 1} / 0{COFFEES.length}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-4 md:mb-6 tracking-tight">
                {currentCoffee.name}
              </h1>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-70 mb-6 md:mb-10 font-light">
                {currentCoffee.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-[#C4B7AB] text-white text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold shadow-xl hover:bg-[#A69F95] transition-colors"
              >
                Book Now
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 flex items-center gap-4 md:gap-8">
          <div className="flex flex-col items-end">
            <span className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-40 mb-1">Scroll</span>
            <div className="w-8 md:w-12 h-[1px] bg-black/20 relative">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-black"
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Coffee Selector (Vertical Rail) - Moved out of right side to prevent clipping on desktop */}
      <div className="absolute left-1/2 top-1/2 md:top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-4 md:gap-6 z-30">
        {COFFEES.map((coffee, idx) => (
          <button
            key={coffee.id}
            onClick={() => setSelectedIdx(idx)}
            className="group relative"
          >
            <motion.div
              animate={{ 
                scale: selectedIdx === idx ? 1.2 : 1,
                borderColor: selectedIdx === idx ? '#000' : 'transparent'
              }}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 p-1 transition-all duration-300 bg-white shadow-lg overflow-hidden`}
            >
              <img 
                src={coffee.image} 
                alt={coffee.id} 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {selectedIdx === idx && (
              <motion.div 
                layoutId="active-indicator"
                className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-black rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Overlays */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white flex flex-col"
          >
            <div className="p-8 flex justify-between items-center">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setActivePage('home'); setIsMenuOpen(false); }}>
                <div className="w-2 h-2 bg-black rounded-full" />
                <span className="font-serif italic font-bold text-lg tracking-tight">coffee flavours</span>
              </div>
              <X className="cursor-pointer" onClick={() => setIsMenuOpen(false)} />
            </div>
            <div className="flex-1 flex flex-col justify-center px-12 md:px-24">
              <nav className="space-y-6 md:space-y-10">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Our Story', id: 'story' },
                  { label: 'Menu', id: 'menu' },
                  { label: 'Locations', id: 'locations' },
                  { label: 'Contact', id: 'contact' }
                ].map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex items-center gap-4 cursor-pointer"
                    onClick={() => {
                      setActivePage(item.id as any);
                      setIsMenuOpen(false);
                    }}
                  >
                    <span className="text-xs font-mono opacity-30">0{i+1}</span>
                    <h2 className="text-4xl md:text-6xl font-serif group-hover:italic group-hover:translate-x-4 transition-all duration-300">
                      {item.label}
                    </h2>
                  </motion.div>
                ))}
              </nav>
            </div>
            <div className="p-12 border-t border-black/5 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-50">
              <span>EST. 2024</span>
              <div className="flex gap-8">
                <span>Instagram</span>
                <span>Facebook</span>
              </div>
            </div>
          </motion.div>
        )}

        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#F2EFE9] flex flex-col p-8 md:p-16"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span className="font-serif italic font-bold text-lg tracking-tight">coffee flavours</span>
              </div>
              <X className="cursor-pointer p-2 hover:bg-black/5 rounded-full transition-colors" onClick={() => setIsSearchOpen(false)} />
            </div>

            <div className="max-w-4xl mx-auto w-full">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative mb-12"
              >
                <input 
                  type="text" 
                  placeholder="What are you looking for?" 
                  className="w-full bg-transparent border-b-2 border-black/10 py-6 text-3xl md:text-5xl font-serif outline-none focus:border-black transition-colors placeholder:opacity-20"
                  autoFocus
                />
                <Search className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20" size={32} />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-6">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">Popular Searches</h3>
                  <ul className="space-y-4">
                    {['Seasonal Lattes', 'Cold Brew Guide', 'Vegan Pastries', 'Whole Bean Coffee'].map(item => (
                      <li key={item} className="text-lg font-serif hover:italic hover:translate-x-2 transition-all cursor-pointer">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 mb-6">Recent Flavour Discoveries</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {COFFEES.slice(0, 4).map(coffee => (
                      <div key={coffee.id} className="group cursor-pointer flex items-center gap-4 p-4 bg-white/50 rounded-2xl hover:bg-white transition-all shadow-sm">
                        <img src={coffee.image} className="w-16 h-16 rounded-full object-cover" alt="" referrerPolicy="no-referrer" />
                        <div>
                          <h4 className="font-serif text-lg">{coffee.name}</h4>
                          <span className="text-[10px] uppercase tracking-widest opacity-40">View Details</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activePage === 'story' && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-[60] bg-[#F2EFE9] overflow-y-auto p-8 md:p-24"
          >
            <X className="fixed top-8 right-8 cursor-pointer z-[70]" onClick={() => setActivePage('home')} />
            <div className="max-w-5xl mx-auto">
              <span className="text-[11px] uppercase tracking-[0.5em] font-bold opacity-30 mb-8 block">Our Story</span>
              <h2 className="text-5xl md:text-8xl font-serif mb-16 leading-tight">Crafting the perfect <br/><span className="italic">moment</span> since 2024.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop" className="rounded-3xl shadow-2xl" alt="" referrerPolicy="no-referrer" />
                <div className="space-y-8">
                  <p className="text-xl font-serif italic leading-relaxed">"We believe that coffee is more than just a drink. It's a ritual, a conversation, and a moment of peace in a busy world."</p>
                  <p className="opacity-70 leading-relaxed">Founded in the heart of the city, Coffee Flavours began with a simple mission: to source the finest beans and roast them with precision to bring out their unique character. Every cup we serve is a testament to our passion for quality and our commitment to the craft.</p>
                  <div className="pt-8 flex gap-12">
                    <div>
                      <span className="text-4xl font-serif block">12k+</span>
                      <span className="text-[10px] uppercase tracking-widest opacity-40">Happy Guests</span>
                    </div>
                    <div>
                      <span className="text-4xl font-serif block">15</span>
                      <span className="text-[10px] uppercase tracking-widest opacity-40">Global Awards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activePage === 'menu' && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[60] bg-[#F2EFE9] overflow-y-auto p-8 md:p-24"
          >
            <X className="fixed top-8 right-8 cursor-pointer z-[70]" onClick={() => setActivePage('home')} />
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-24">
                <span className="text-[11px] uppercase tracking-[0.5em] font-bold opacity-30 mb-4 block">The Selection</span>
                <h2 className="text-6xl md:text-8xl font-serif italic">Our Menu</h2>
              </div>
              <div className="space-y-16">
                {['Classic Brews', 'Signature Lattes', 'Cold Selection'].map(category => (
                  <div key={category}>
                    <h3 className="text-xs uppercase tracking-[0.3em] font-bold border-b border-black/10 pb-4 mb-8">{category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="flex justify-between items-end border-b border-black/5 pb-2 group cursor-pointer">
                          <div>
                            <h4 className="text-xl font-serif group-hover:italic transition-all">Coffee Name {i}</h4>
                            <p className="text-xs opacity-40">Espresso, steamed milk, vanilla syrup</p>
                          </div>
                          <span className="font-serif text-lg">$5.50</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activePage === 'locations' && (
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="fixed inset-0 z-[60] bg-[#F2EFE9] overflow-y-auto p-8 md:p-24"
          >
            <X className="fixed top-8 right-8 cursor-pointer z-[70]" onClick={() => setActivePage('home')} />
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl md:text-9xl font-serif mb-24">Find us <br/>nearby.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: 'Downtown Hub', addr: '123 Coffee St, New York', hours: '7am - 9pm' },
                  { name: 'The Roastery', addr: '456 Bean Ave, Brooklyn', hours: '8am - 10pm' },
                  { name: 'Garden Terrace', addr: '789 Leaf Rd, Queens', hours: '7am - 7pm' }
                ].map((loc, i) => (
                  <div key={i} className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-xl transition-all group">
                    <MapPin className="mb-8 opacity-20 group-hover:opacity-100 transition-opacity" size={32} />
                    <h3 className="text-3xl font-serif mb-4">{loc.name}</h3>
                    <p className="opacity-50 mb-8">{loc.addr}</p>
                    <div className="pt-8 border-t border-black/5 flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-widest font-bold">{loc.hours}</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activePage === 'contact' && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-0 z-[60] bg-[#F2EFE9] flex items-center justify-center p-8"
          >
            <X className="fixed top-8 right-8 cursor-pointer z-[70]" onClick={() => setActivePage('home')} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-6xl w-full">
              <div>
                <h2 className="text-6xl md:text-8xl font-serif mb-12">Get in <br/><span className="italic">touch.</span></h2>
                <div className="space-y-8">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 block mb-2">Email</span>
                    <span className="text-2xl font-serif">hello@coffeeflavours.com</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 block mb-2">Phone</span>
                    <span className="text-2xl font-serif">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex gap-6 pt-8">
                    <Facebook size={20} />
                    <Twitter size={20} />
                    <Instagram size={20} />
                  </div>
                </div>
              </div>
              <form className="space-y-8 bg-white p-12 rounded-[40px] shadow-2xl">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-30">Name</label>
                  <input type="text" className="w-full border-b border-black/10 py-2 outline-none focus:border-black transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-30">Email</label>
                  <input type="email" className="w-full border-b border-black/10 py-2 outline-none focus:border-black transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-30">Message</label>
                  <textarea className="w-full border-b border-black/10 py-2 outline-none focus:border-black transition-colors h-32 resize-none" />
                </div>
                <button className="w-full py-4 bg-black text-white rounded-2xl text-[10px] uppercase tracking-widest font-bold hover:bg-black/80 transition-all">Send Message</button>
              </form>
            </div>
          </motion.div>
        )}

        {isBookingOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="relative h-48 bg-[#C4B7AB] flex items-center justify-center">
                <X className="absolute top-6 right-6 text-white cursor-pointer z-10" onClick={() => setIsBookingOpen(false)} />
                <CoffeeIcon size={64} className="text-white/20 absolute" />
                <div className="text-center text-white z-10">
                  <h3 className="text-3xl font-serif">Reserve a Table</h3>
                  <p className="text-xs uppercase tracking-widest opacity-80 mt-2">At our flagship store</p>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Location</label>
                    <div className="flex items-center gap-2 p-3 bg-black/5 rounded-xl">
                      <MapPin size={16} className="opacity-40" />
                      <span className="text-sm">Downtown Hub</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Date</label>
                    <div className="flex items-center gap-2 p-3 bg-black/5 rounded-xl">
                      <Calendar size={16} className="opacity-40" />
                      <span className="text-sm">Feb 28, 2026</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Guests</label>
                  <div className="flex items-center justify-between p-3 bg-black/5 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="opacity-40" />
                      <span className="text-sm">2 People</span>
                    </div>
                    <ChevronRight size={16} className="opacity-40" />
                  </div>
                </div>
                <button className="w-full py-4 bg-black text-white rounded-xl text-xs uppercase tracking-[0.2em] font-bold hover:bg-black/80 transition-all flex items-center justify-center gap-2">
                  Confirm Reservation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        @media (max-width: 768px) {
          .vertical-text {
            writing-mode: horizontal-tb;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
