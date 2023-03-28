const env = import.meta.env
  ? {
      environment: import.meta.env.VITE_ENV,
      mode: import.meta.env.DEV ? 'development' : 'production',
      hcp: import.meta.env.VITE_API,
      hcpProxy: import.meta.env.VITE_API_PROXY,
    }
  : {
      environment: process.env.VITE_ENV,
      mode: process.env.NODE_ENV,
      hcp: process.env.VITE_API,
      hcpProxy: process.env.VITE_API_PROXY,
    };
export default env;
