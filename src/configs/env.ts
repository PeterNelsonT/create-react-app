const env = import.meta.env
  ? {
      environment: import.meta.env.VITE_ENV,
      mode: import.meta.env.DEV ? 'development' : 'production',
      hcp: import.meta.env.VITE_HCP,
      hcpProxy: import.meta.env.VITE_HCP_PROXY,
      accounts: import.meta.env.VITE_ACCOUNTS,
      accountsProxy: import.meta.env.VITE_ACCOUNTS_PROXY,
      ip: import.meta.env.VITE_IP,
      ipProxy: import.meta.env.VITE_IP_PROXY,
      support: import.meta.env.VITE_ES_SUPPORT,
      signup: import.meta.env.VITE_ES_SIGNUP,
      datadog: import.meta.env.VITE_DATADOG_CLIENT_TOKEN,
      gmap: import.meta.env.VITE_GMAP,
    }
  : {
      environment: process.env.VITE_ENV,
      mode: process.env.NODE_ENV,
      hcp: process.env.VITE_HCP,
      hcpProxy: process.env.VITE_HCP_PROXY,
      accounts: process.env.VITE_ACCOUNTS,
      accountsProxy: process.env.VITE_ACCOUNTS_PROXY,
      ip: process.env.VITE_IP,
      ipProxy: process.env.VITE_IP_PROXY,
      support: process.env.VITE_ES_SUPPORT,
      signup: process.env.VITE_ES_SIGNUP,
      datadog: process.env.VITE_DATADOG_CLIENT_TOKEN,
      gmap: process.env.VITE_GMAP,
    };
export default env;
