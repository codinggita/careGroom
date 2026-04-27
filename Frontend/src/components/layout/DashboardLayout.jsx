import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Banknote, 
  Leaf, 
  Settings, 
  LogOut,
  Bell,
  BookOpen,
  Menu,
  X
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Calendar, label: 'Schedule', path: '/dashboard/schedule' },
  { icon: BookOpen, label: 'Bookings', path: '/dashboard/bookings' },
  { icon: Users, label: 'Clients', path: '/dashboard/clients' },
  { icon: Banknote, label: 'Earnings', path: '/dashboard/earnings' },
  { icon: Leaf, label: 'Services', path: '/dashboard/services' },
];

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-cream relative">
      {/* Top Navbar - Matching Landing Page Aesthetic */}
      <header className="fixed top-0 left-0 right-0 h-[72px] z-50 bg-[#f5f2eb]/95 backdrop-blur-xl border-b border-sage/5 flex items-center justify-between px-10 transition-all duration-300">
        
        {/* Logo Area */}
        <div 
          className="font-serif text-[22px] font-bold text-sage cursor-pointer tracking-[-0.01em]" 
          onClick={() => navigate('/dashboard')}
        >
          CareGroom<span className="text-gold">.</span>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-9">
          {sidebarItems.map((item) => {
            const isActive = item.path === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(item.path);
            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={`relative text-[13px] font-bold tracking-[0.04em] uppercase transition-colors duration-300 py-1.5 flex items-center gap-2 ${
                  isActive ? 'text-sage' : 'text-sage/60 hover:text-sage'
                }`}
              >
                <item.icon size={16} className={isActive ? 'text-gold' : 'text-sage/40'} />
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full"
                    transition={{ type: "tween", duration: 0.3 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Actions - Desktop */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <button className="relative p-2 text-sage/60 hover:text-sage transition-colors group">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-gold rounded-full border-2 border-[#f5f2eb] group-hover:border-white transition-colors"></span>
          </button>
          
          <div className="h-6 w-px bg-sage/10"></div>
          
          <NavLink
            to="/dashboard/settings"
            className={`p-2 transition-colors duration-300 ${
              pathname.includes('settings') ? 'text-sage bg-sage/5 rounded-full' : 'text-sage/60 hover:text-sage hover:bg-sage/5 rounded-full'
            }`}
          >
            <Settings size={20} />
          </NavLink>
          
          <div className="flex items-center gap-4 pl-2 cursor-pointer group" onClick={() => navigate('/')}>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-sage/10 group-hover:border-gold/50 transition-colors shadow-sm">
              <img 
                src="/avatars/artisan_avatar.png" 
                alt="Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-sage leading-tight">Artisan</span>
              <span className="text-[10px] font-medium text-sage/60 uppercase tracking-widest flex items-center gap-1 group-hover:text-gold transition-colors">
                Sign Out <LogOut size={10} />
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-sage/10">
            <img 
              src="/avatars/artisan_avatar.png" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-sage/80 hover:text-sage bg-sage/5 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[72px] left-0 right-0 bg-[#f5f2eb]/95 backdrop-blur-xl border-b border-sage/10 z-40 lg:hidden overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 space-y-2">
              {sidebarItems.map((item) => {
                const isActive = item.path === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(item.path);
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                      isActive ? 'bg-white shadow-sm border border-sage/5 text-sage' : 'text-sage/60 hover:bg-sage/5 hover:text-sage'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-gold/10 text-gold' : 'bg-transparent text-sage/40'}`}>
                      <item.icon size={18} />
                    </div>
                    <span className="text-[13px] font-bold uppercase tracking-[0.1em]">{item.label}</span>
                  </NavLink>
                );
              })}
              
              <div className="h-px w-full bg-sage/10 my-4"></div>
              
              <NavLink
                to="/dashboard/settings"
                className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-sage/60 hover:bg-sage/5 hover:text-sage"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent text-sage/40">
                  <Settings size={18} />
                </div>
                <span className="text-[13px] font-bold uppercase tracking-[0.1em]">Settings</span>
              </NavLink>
              
              <div 
                className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-[#e05252]/80 hover:bg-[#e05252]/5 hover:text-[#e05252] cursor-pointer"
                onClick={() => navigate('/')}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent">
                  <LogOut size={18} />
                </div>
                <span className="text-[13px] font-bold uppercase tracking-[0.1em]">Sign Out</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative pt-[72px]">
        <div className="flex-1 w-full max-w-7xl mx-auto p-8 lg:p-12">
          <Outlet />
        </div>
        
        {/* Footer */}
        <footer className="w-full max-w-7xl mx-auto px-8 lg:px-12 py-8 border-t border-sage/10 flex flex-col sm:flex-row items-center justify-between mt-auto gap-4">
          <p className="text-xs font-bold text-sage/40 uppercase tracking-[0.15em]">
            © 2024 CareGroom. Artisanal Wellness.
          </p>
          <div className="flex gap-8 text-xs text-sage/60 font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-gold transition-colors">Support</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default DashboardLayout;
