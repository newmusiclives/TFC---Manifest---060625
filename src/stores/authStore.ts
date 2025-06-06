import { create } from 'zustand'
import { supabase } from '../lib/supabase'

interface User {
  id: string;
  email: string;
  user_metadata?: {
    name?: string;
    is_musician?: boolean;
    is_admin?: boolean;
  };
  role?: string; // Added for admin check
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isMusician: () => boolean;
  isAdmin: () => boolean;
  setUser: (user: User | null) => void;
  clearUser: () => void;
  login: (email: string, password: string) => Promise<{ error: any | null }>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  
  isMusician: () => {
    const { user } = get();
    return !!user?.user_metadata?.is_musician;
  },
  
  isAdmin: () => {
    const { user } = get();
    // Check if user is admin@example.com (demo admin) or has is_admin flag or role
    return user?.email === 'admin@example.com' || !!user?.user_metadata?.is_admin || user?.role === 'admin';
  },
  
  setUser: (user) => set({ 
    user, 
    isAuthenticated: !!user,
    isLoading: false
  }),
  
  clearUser: () => set({ 
    user: null, 
    isAuthenticated: false,
    isLoading: false
  }),
  
  login: async (email, password) => {
    try {
      // Special case for demo admin
      if (email === 'admin@example.com' && password === 'pass123') {
        const mockAdminUser = {
          id: 'admin-123',
          email: 'admin@example.com',
          role: 'admin',
          user_metadata: {
            is_admin: true,
            name: 'Admin User'
          }
        };
        
        set({
          user: mockAdminUser as User,
          isAuthenticated: true,
          isLoading: false
        });
        
        return { error: null };
      }
      
      // Regular Supabase login for non-admin users
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        return { error };
      }
      
      if (data.user) {
        set({ 
          user: data.user as User, 
          isAuthenticated: true,
          isLoading: false
        });
      }
      
      return { error: null };
    } catch (error) {
      console.error('Login error:', error);
      return { error };
    }
  },
  
  logout: async () => {
    try {
      await supabase.auth.signOut();
      set({ 
        user: null, 
        isAuthenticated: false,
        isLoading: false
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
}));

// Initialize auth state from session
export const initializeAuth = async () => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session?.user) {
      useAuthStore.getState().setUser(session.user as User);
    } else {
      useAuthStore.getState().clearUser();
    }
    
    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        useAuthStore.getState().setUser(session.user as User);
      } else if (event === 'SIGNED_OUT') {
        useAuthStore.getState().clearUser();
      }
    });
    
    return authListener;
  } catch (error) {
    console.error('Error initializing auth:', error);
    useAuthStore.getState().clearUser();
    return null;
  }
};

// Initialize auth on import
initializeAuth().catch(err => {
  console.error('Failed to initialize auth:', err);
  useAuthStore.getState().setUser(null);
  useAuthStore.getState().isLoading = false;
});
