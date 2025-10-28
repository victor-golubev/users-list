export const generateUserId = () =>
  `user-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
