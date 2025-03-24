import { store } from '../redux/store';
import { selectUser, selectIsAuthenticated } from '../redux/features/userSlice';

/**
 * Check if user is authenticated
 * @returns {boolean} True if user is authenticated, false otherwise
 */
export const isAuthenticated = () => {
  const state = store.getState();
  return selectIsAuthenticated(state);
};

/**
 * Get current user from Redux store
 * @returns {object|null} User object or null if not authenticated
 */
export const getCurrentUser = () => {
  const state = store.getState();
  return selectUser(state);
}; 