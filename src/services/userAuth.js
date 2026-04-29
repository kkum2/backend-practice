export const getCurrentSession = async () => {
  return {
    data: {
      session: null,
    },
    error: null,
  };
};

export const subscribeAuthState = (callback) => {
  const subscription = {
    unsubscribe: () => {
      // no-op
    },
  };

  // 실제 인증 상태 변화는 발생하지 않습니다.
  return {
    data: {
      subscription,
    },
  };
};

export const signUpWithEmail = async ({ email, password, redirectTo }) => {
  return {
    data: {
      user: null,
    },
    error: null,
  };
};

export const signInWithEmail = async ({ email, password }) => {
  return {
    data: {
      session: null,
    },
    error: null,
  };
};

export const signOut = async () => {
  return {
    data: null,
    error: null,
  };
};

export const signInWithGoogle = async ({ redirectTo }) => {
  return {
    data: null,
    error: null,
  };
};
